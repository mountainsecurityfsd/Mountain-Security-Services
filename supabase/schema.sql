-- ============================================================================
-- Mountain Security Services (Pvt) Ltd - Supabase Database Schema
-- Table: candidates (Worker/Candidate Applications Registry)
-- ============================================================================

-- 1. Create the candidates table
CREATE TABLE IF NOT EXISTS public.candidates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ticket_id TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  cnic_number TEXT NOT NULL,
  phone TEXT NOT NULL,
  whatsapp_phone TEXT,
  category TEXT NOT NULL,
  experience_years TEXT NOT NULL DEFAULT '1-3 years',
  city_district TEXT NOT NULL DEFAULT 'Faisalabad',
  has_police_clearance BOOLEAN NOT NULL DEFAULT true,
  has_weapon_license BOOLEAN NOT NULL DEFAULT false,
  medical_fitness_confirmed BOOLEAN NOT NULL DEFAULT true,
  additional_skills TEXT,
  notification_status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'sent', 'failed'
  whatsapp_message_id TEXT,
  notified_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Create index for fast lookups by ticket ID
CREATE INDEX IF NOT EXISTS idx_candidates_ticket_id ON public.candidates(ticket_id);
CREATE INDEX IF NOT EXISTS idx_candidates_created_at ON public.candidates(created_at DESC);

-- 3. Enable Row Level Security (RLS)
-- Crucial: Protect candidate records and CNIC numbers from public reading.
ALTER TABLE public.candidates ENABLE ROW LEVEL SECURITY;

-- 4. Policy: Allow public anonymous submissions (Candidate Registration)
-- Visitors can INSERT their application, but cannot SELECT/UPDATE/DELETE.
DROP POLICY IF EXISTS "Allow anonymous application submissions" ON public.candidates;
CREATE POLICY "Allow anonymous application submissions" 
  ON public.candidates 
  FOR INSERT 
  TO anon, authenticated 
  WITH CHECK (true);

-- 5. Policy: Allow authenticated staff / service_role to read candidate profiles
DROP POLICY IF EXISTS "Allow authenticated staff to view candidates" ON public.candidates;
CREATE POLICY "Allow authenticated staff to view candidates" 
  ON public.candidates 
  FOR SELECT 
  TO authenticated 
  USING (true);

-- 6. Policy: Allow authenticated staff / service_role to update candidates
DROP POLICY IF EXISTS "Allow authenticated staff to update candidates" ON public.candidates;
CREATE POLICY "Allow authenticated staff to update candidates" 
  ON public.candidates 
  FOR UPDATE 
  TO authenticated 
  USING (true);

-- ============================================================================
-- NOTE ON DATABASE WEBHOOK TRIGGER (OPTIONAL AUTOMATION)
-- If you want Supabase to automatically invoke the Edge Function on every INSERT:
--
-- Go to Supabase Dashboard -> Database -> Webhooks -> Create a new webhook:
-- 1. Name: webhook_notify_candidate
-- 2. Table: candidates
-- 3. Events: INSERT
-- 4. Type: Supabase Edge Functions
-- 5. Edge Function: notify-new-candidate
-- 6. HTTP Method: POST
-- ============================================================================
