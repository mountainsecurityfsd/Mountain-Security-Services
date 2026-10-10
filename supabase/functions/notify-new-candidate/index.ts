// Supabase Edge Function: notify-new-candidate
// Securely sends WhatsApp notification to Mountain Security Services operations desk
// via Meta WhatsApp Business Cloud API when a candidate record is logged in the database.

import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

// Secure CORS headers for cross-origin frontend requests
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface CandidatePayload {
  ticketId: string;
  fullName: string;
  category: string;
  candidateId?: string;
}

Deno.serve(async (req: Request) => {
  // 1. Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed. Use POST." }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    // 2. Load and validate server-side secrets from environment
    const whatsappToken = Deno.env.get("WHATSAPP_ACCESS_TOKEN");
    const phoneNumberId = Deno.env.get("WHATSAPP_PHONE_NUMBER_ID");
    const recipientNumber = Deno.env.get("WHATSAPP_RECIPIENT_NUMBER");
    const templateName = Deno.env.get("WHATSAPP_TEMPLATE_NAME"); // Optional custom template

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!whatsappToken || !phoneNumberId || !recipientNumber) {
      console.error("Missing required WhatsApp Cloud API environment secrets.");
      return new Response(
        JSON.stringify({
          success: false,
          error: "Server configuration incomplete: WHATSAPP_ACCESS_TOKEN, WHATSAPP_PHONE_NUMBER_ID, or WHATSAPP_RECIPIENT_NUMBER is not set in Supabase secrets.",
          configured: false
        }),
        { status: 503, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 3. Parse incoming request body
    const body = await req.json();

    // Check if this is a Supabase Database Webhook payload or a direct function invocation
    let ticketId = "";
    let fullName = "";
    let category = "";
    let candidateId = "";

    if (body.type === "INSERT" && body.record) {
      // Database Webhook structure
      ticketId = body.record.ticket_id || body.record.ticketId;
      fullName = body.record.full_name || body.record.fullName;
      category = body.record.category;
      candidateId = body.record.id;
    } else {
      // Direct HTTP invocation structure
      ticketId = body.ticketId;
      fullName = body.fullName;
      category = body.category;
      candidateId = body.candidateId;
    }

    if (!ticketId || !fullName || !category) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Invalid request payload. Required fields: ticketId, fullName, category."
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 4. Verify candidate application was actually saved in the database
    // "Notify the company only after the candidate application has been successfully saved in the database."
    if (supabaseUrl && supabaseServiceKey) {
      const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
      
      const query = candidateId 
        ? supabaseAdmin.from("candidates").select("id, ticket_id").eq("id", candidateId).maybeSingle()
        : supabaseAdmin.from("candidates").select("id, ticket_id").eq("ticket_id", ticketId).maybeSingle();

      const { data: candidateRecord, error: dbError } = await query;

      if (dbError) {
        console.error("Database verification query error:", dbError.message);
        return new Response(
          JSON.stringify({
            success: false,
            error: "Failed to verify candidate database record before sending notification.",
            details: dbError.message
          }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      if (!candidateRecord) {
        return new Response(
          JSON.stringify({
            success: false,
            error: "Candidate record not found in database. Notification aborted for data integrity."
          }),
          { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    // 5. Clean phone number format (must be digits with country code, e.g. 923000266204)
    const cleanRecipient = recipientNumber.replace(/[^0-9]/g, "");

    // 6. Build minimal, secure WhatsApp Cloud API payload
    // STRICT REQUIREMENT: Only ticket ID, candidate name, and requested trade.
    // NEVER include CNIC number or sensitive personal identification in WhatsApp messages.
    let whatsappPayload: Record<string, unknown>;

    if (templateName) {
      // Approved Meta Message Template
      whatsappPayload = {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: cleanRecipient,
        type: "template",
        template: {
          name: templateName,
          language: { code: "en_US" },
          components: [
            {
              type: "body",
              parameters: [
                { type: "text", text: ticketId },
                { type: "text", text: fullName },
                { type: "text", text: category }
              ]
            }
          ]
        }
      };
    } else {
      // Standard notification message
      const messageBody = [
        "🛡️ *Mountain Security Services (Pvt) Ltd*",
        "*New Candidate Registered*",
        "",
        `📋 *Ticket ID:* ${ticketId}`,
        `👤 *Name:* ${fullName}`,
        `💼 *Trade:* ${category}`,
        "",
        "_Record verified in MSS database._"
      ].join("\n");

      whatsappPayload = {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: cleanRecipient,
        type: "text",
        text: {
          preview_url: false,
          body: messageBody
        }
      };
    }

    // 7. Call official Meta Graph API v21.0
    const metaApiUrl = `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`;
    console.log(`Sending WhatsApp notification to ${cleanRecipient} via Phone Number ID ${phoneNumberId}...`);

    const metaResponse = await fetch(metaApiUrl, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${whatsappToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(whatsappPayload)
    });

    const metaData = await metaResponse.json();

    // 8. Handle API errors safely - do NOT pretend message was sent if API call fails
    if (!metaResponse.ok) {
      console.error("Meta WhatsApp Cloud API error response:", JSON.stringify(metaData));
      
      const errorMessage = metaData.error?.message || "Meta WhatsApp Cloud API rejected the message request.";
      const errorCode = metaData.error?.code || metaResponse.status;
      const errorSubcode = metaData.error?.error_subcode;

      return new Response(
        JSON.stringify({
          success: false,
          error: errorMessage,
          code: errorCode,
          subcode: errorSubcode,
          ticketId
        }),
        { status: metaResponse.status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 9. Success response from Meta
    const messageId = metaData.messages?.[0]?.id;
    console.log(`WhatsApp notification dispatched successfully! Message ID: ${messageId}`);

    // Update notification status in database if Supabase admin client is active
    if (supabaseUrl && supabaseServiceKey && ticketId) {
      try {
        const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
        await supabaseAdmin
          .from("candidates")
          .update({ 
            notification_status: "sent", 
            whatsapp_message_id: messageId,
            notified_at: new Date().toISOString() 
          })
          .eq("ticket_id", ticketId);
      } catch (updateErr) {
        console.warn("Could not update candidate notification_status in database:", updateErr);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        messageId,
        ticketId,
        recipient: cleanRecipient
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal server error";
    console.error("Edge function execution error:", errorMsg);

    return new Response(
      JSON.stringify({
        success: false,
        error: errorMsg
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
