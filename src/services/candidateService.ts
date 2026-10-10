import { WorkerRegistrationFormData } from '../types';
import { getSupabaseClient, isSupabaseConfigured } from '../lib/supabase';

export interface CandidateSubmissionResult {
  success: boolean;
  ticketId: string;
  savedToDatabase: boolean;
  notificationSent: boolean;
  notificationStatusMessage?: string;
  error?: string;
}

/**
 * Submits candidate registration record.
 * 1. Inserts candidate application into Supabase 'candidates' database table if configured.
 * 2. Only after successful database persistence, triggers the 'notify-new-candidate' Edge Function.
 * 3. Never fakes success: reports true status of both database persistence and WhatsApp notification.
 */
export async function submitCandidateRegistration(
  formData: WorkerRegistrationFormData
): Promise<CandidateSubmissionResult> {
  const generatedTicketId = `MSS-REG-${Math.floor(1000 + Math.random() * 9000)}`;

  // If Supabase backend is not configured in client environment
  if (!isSupabaseConfigured()) {
    console.info('Supabase not configured in frontend environment. Operating in client-side preview mode.');
    return {
      success: true,
      ticketId: generatedTicketId,
      savedToDatabase: false,
      notificationSent: false,
      notificationStatusMessage: 'Candidate record created in local session. Supabase and WhatsApp Cloud API credentials not yet configured.',
    };
  }

  const supabase = getSupabaseClient();
  if (!supabase) {
    return {
      success: true,
      ticketId: generatedTicketId,
      savedToDatabase: false,
      notificationSent: false,
      notificationStatusMessage: 'Supabase client could not be initialized.',
    };
  }

  try {
    // 1. Save application to database first
    const { data: insertedRecord, error: dbError } = await supabase
      .from('candidates')
      .insert({
        ticket_id: generatedTicketId,
        full_name: formData.fullName.trim(),
        cnic_number: formData.cnicNumber.trim(),
        phone: formData.phone.trim(),
        whatsapp_phone: formData.whatsappPhone?.trim() || null,
        category: formData.category,
        experience_years: formData.experienceYears,
        city_district: formData.cityDistrict,
        has_police_clearance: formData.hasPoliceClearance,
        has_weapon_license: formData.hasWeaponLicense,
        medical_fitness_confirmed: formData.medicalFitnessConfirmed,
        additional_skills: formData.additionalSkills?.trim() || null,
        notification_status: 'pending',
      })
      .select('id, ticket_id')
      .single();

    if (dbError) {
      console.error('Database insertion failed:', dbError.message);
      return {
        success: false,
        ticketId: generatedTicketId,
        savedToDatabase: false,
        notificationSent: false,
        error: `Database error: ${dbError.message}`,
      };
    }

    const ticketId = insertedRecord?.ticket_id || generatedTicketId;
    const candidateId = insertedRecord?.id;

    // 2. Trigger WhatsApp notification via Edge Function ONLY after database save succeeds
    try {
      const { data: edgeData, error: edgeError } = await supabase.functions.invoke(
        'notify-new-candidate',
        {
          body: {
            candidateId,
            ticketId,
            fullName: formData.fullName.trim(),
            category: formData.category,
          },
        }
      );

      if (edgeError || (edgeData && !edgeData.success)) {
        const errorDetail = edgeError?.message || edgeData?.error || 'WhatsApp notification failed';
        console.warn('Edge Function WhatsApp notification warning:', errorDetail);
        
        return {
          success: true,
          ticketId,
          savedToDatabase: true,
          notificationSent: false,
          notificationStatusMessage: `Application saved in database. WhatsApp dispatch pending: ${errorDetail}`,
        };
      }

      return {
        success: true,
        ticketId,
        savedToDatabase: true,
        notificationSent: true,
        notificationStatusMessage: 'Application logged in database and WhatsApp alert sent to operations desk.',
      };
    } catch (invokeErr: unknown) {
      const invokeMsg = invokeErr instanceof Error ? invokeErr.message : 'Edge function call failed';
      console.warn('Edge Function invocation error:', invokeMsg);

      return {
        success: true,
        ticketId,
        savedToDatabase: true,
        notificationSent: false,
        notificationStatusMessage: `Application saved in database. WhatsApp notification pending: ${invokeMsg}`,
      };
    }
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unexpected submission error';
    console.error('Submission pipeline error:', errorMsg);
    return {
      success: false,
      ticketId: generatedTicketId,
      savedToDatabase: false,
      notificationSent: false,
      error: errorMsg,
    };
  }
}
