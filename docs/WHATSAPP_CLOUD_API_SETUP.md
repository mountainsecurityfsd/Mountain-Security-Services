# WhatsApp Business Cloud API Integration Guide
**Mountain Security Services (Pvt) Ltd**  
*Automated Candidate Registration Notification via Supabase Edge Functions*

---

## Architecture & Security Overview

```
[Candidate Form on GitHub Pages]
          │ (1. Submits Application)
          ▼
 [Supabase Database: 'candidates' table]
          │ (2. Row Saved Successfully)
          ▼
[Supabase Edge Function: 'notify-new-candidate']
          │ (3. Reads Server Secrets & Prepares Minimal Payload)
          ▼
[Meta WhatsApp Business Cloud API (Graph API v21.0)]
          │ (4. Dispatches WhatsApp Template/Message)
          ▼
[MSS Operations Desk: WhatsApp +92 300 0266204 / +92 329 9200111]
```

### Critical Security Rules Followed
1. **Zero Client-Side Secrets**: Access tokens and Phone Number IDs are stored strictly in Supabase server-side environment secrets. They never touch GitHub Pages, HTML, or JavaScript bundles.
2. **Database Verification First**: The Edge Function explicitly confirms the candidate record exists in the database before sending any notification.
3. **Privacy Compliance**: WhatsApp messages contain **only** the `Ticket ID`, `Candidate Name`, and `Requested Trade`. The candidate's CNIC number is **never** sent via WhatsApp.
4. **Honest Error Handling**: If Meta's API call fails, the system returns the exact error code from Meta and does not pretend a message was sent.

---

## Step-by-Step Setup Instructions for Beginners

### Phase 1: Create Your Meta Developer Account & App

1. Go to [Meta for Developers](https://developers.facebook.com/) and log in with your Facebook account.
2. Click **My Apps** in the top right corner, then click **Create App**.
3. When prompted to select what you want your app to do, select **Other**, then click **Next**.
4. Choose the app type as **Business**, then click **Next**.
5. Enter your App Details:
   - **App Name**: `Mountain Security Services Dispatch`
   - **App Contact Email**: `mountainsecurityserivces@gmail.com`
   - **Business Account**: Select your Meta Business Account if you have one, or leave as default.
6. Click **Create App**.

---

### Phase 2: Add WhatsApp Cloud API to Your App

1. In the App Dashboard sidebar, scroll to **Add products to your app** and locate **WhatsApp**.
2. Click **Set Up**.
3. If asked to select a Meta Business Account, select yours or allow Meta to create a test business account for you.
4. In the left navigation, click **WhatsApp** > **API Setup**.

---

### Phase 3: Obtain Your Test Credentials

On the **API Setup** page, Meta will provide:
1. **Temporary Access Token**: A token beginning with `EAA...` (valid for 24 hours for initial testing).
2. **Phone Number ID**: A 15-digit number (e.g., `109876543210987`). *Note: This is NOT the phone number itself, it is Meta's internal ID for the test number.*
3. **To Number (Recipient)**:
   - Click the recipient dropdown and click **Manage phone number list**.
   - Add your company phone number (e.g., `+92 300 0266204` or your personal testing number).
   - Meta will send a 6-digit verification code via WhatsApp to that number. Enter the code to verify.
   *(In Meta test mode, messages can only be sent to numbers you have verified here).*

---

### Phase 4: Create a Permanent Access Token (For 24/7 Production)

The 24-hour token expires quickly. For continuous 24/7 operation:
1. Go to [Meta Business Settings](https://business.facebook.com/settings/).
2. In the left menu, go to **Users** > **System Users**.
3. Click **Add**, name the system user `MSS-WhatsApp-Bot`, and set role to **Admin**.
4. Click **Add Assets** > Select **Apps** > Select your app > Enable **Full Control**.
5. Click **Generate New Token**:
   - Select your app.
   - Set Token Expiration to **Never**.
   - Check the permission: `whatsapp_business_messaging`.
   - Click **Generate Token** and copy the resulting string immediately. This is your permanent `WHATSAPP_ACCESS_TOKEN`.

---

### Phase 5: Create Approved Message Template (Meta Production Requirement)

Meta requires using an approved template for business notifications sent to recipients outside the 24-hour window.
1. In Meta WhatsApp Manager, go to **Account tools** > **Message templates**.
2. Click **Create template**:
   - **Category**: Utility
   - **Name**: `new_candidate_alert`
   - **Language**: English (US)
3. Under **Body**, enter:
   ```
   New Candidate Registration Alert
   Ticket ID: {{1}}
   Candidate Name: {{2}}
   Trade Category: {{3}}
   Mountain Security Services (Pvt) Ltd
   ```
4. Click **Submit for review**. Approval usually takes 1 to 5 minutes.

---

### Phase 6: Set Up Supabase Database

1. Sign up or log into [Supabase](https://supabase.com/).
2. Create a new project (e.g., `mountain-security`). Choose a strong database password and select a region close to Pakistan (e.g., `Singapore` or `Mumbai`).
3. In the left sidebar, click **SQL Editor**.
4. Click **New query**, paste the entire contents of `supabase/schema.sql`, and click **Run**.
   - This creates the `candidates` table.
   - This enables Row Level Security (RLS) so applicants can safely submit registrations without exposing anyone else's private data or CNIC numbers.

---

### Phase 7: Deploy the Edge Function & Set Server Secrets

Install the Supabase CLI on your terminal (if not already installed):
```bash
# Login to Supabase
npx supabase login

# Link your local project to your Supabase project (find Project Ref in Supabase settings)
npx supabase link --project-ref your-project-ref
```

#### Set Server Secrets (DO THIS ON SERVER ONLY):
```bash
npx supabase secrets set \
  WHATSAPP_ACCESS_TOKEN="EAA..." \
  WHATSAPP_PHONE_NUMBER_ID="your_15_digit_phone_number_id" \
  WHATSAPP_RECIPIENT_NUMBER="923000266204" \
  WHATSAPP_TEMPLATE_NAME="new_candidate_alert"
```
*(You can also set these secrets directly in the Supabase Dashboard under: **Project Settings** > **Edge Functions** > **Secrets**).*

#### Deploy the Edge Function:
```bash
npx supabase functions deploy notify-new-candidate --no-verify-jwt
```

---

### Phase 8: Configure Frontend Environment for GitHub Pages

1. In Supabase Dashboard, go to **Project Settings** > **API**.
2. Copy:
   - **Project URL** (e.g., `https://abcdefghijkl.supabase.co`)
   - **Project API Keys** -> `anon` / `public` key.
3. In your GitHub repository:
   - Go to **Settings** > **Secrets and variables** > **Actions**.
   - Add two Repository Secrets (or Environment variables):
     - `VITE_SUPABASE_URL`: `https://your-project-ref.supabase.co`
     - `VITE_SUPABASE_ANON_KEY`: `your_anon_key`
4. When GitHub Actions builds your site, these public variables allow the candidate form to securely save data into Supabase and invoke the `notify-new-candidate` function.

---

### Phase 9: Testing the Integration

#### Test 1: Direct Edge Function Verification via curl
Before testing from the browser, verify your credentials with a test call:
```bash
curl -X POST "https://your-project-ref.supabase.co/functions/v1/notify-new-candidate" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -d '{
    "ticketId": "MSS-REG-TEST1",
    "fullName": "Test Guard Candidate",
    "category": "Security Guards"
  }'
```

- If successful, you will receive:
  ```json
  {"success":true,"messageId":"wamid.HBgL...","ticketId":"MSS-REG-TEST1","recipient":"923000266204"}
  ```
  And a WhatsApp message will appear immediately on the company recipient phone.
- If an error occurs (e.g. invalid token, expired token, or unregistered recipient number), Meta's exact error message and code will be returned.

#### Test 2: End-to-End Test via the Website Form
1. Open the website: `https://mountainsecurityfsd.github.io/Mountain-Security-Services/`
2. Navigate to **Careers [Registration]**.
3. Fill in the form:
   - Full Legal Name: `Muhammad Tariq`
   - 13-digit CNIC: `33100-1234567-1`
   - Contact Phone: `0300-1234567`
   - Category: `Security Guards`
4. Click **Submit Official Registration**.
5. Inspect the generated slip:
   - Application is persisted in Supabase database.
   - Operations Dispatch Alert displays: `Dispatched via WhatsApp Cloud API`.
   - The company operations phone receives the WhatsApp alert with the Ticket ID, Candidate Name, and Trade.
