import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Frontend public keys (safe for client-side use in Vite/GitHub Pages)
// NEVER put service_role keys or WhatsApp API tokens here.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

let clientInstance: SupabaseClient | null = null;

/**
 * Checks whether Supabase project credentials are configured in frontend environment.
 */
export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    supabaseUrl && 
    supabaseAnonKey && 
    supabaseUrl.startsWith('https://') && 
    supabaseAnonKey.length > 20
  );
};

/**
 * Safely retrieves initialized Supabase client if configured, otherwise returns null.
 */
export const getSupabaseClient = (): SupabaseClient | null => {
  if (!isSupabaseConfigured()) {
    return null;
  }

  if (!clientInstance && supabaseUrl && supabaseAnonKey) {
    clientInstance = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }

  return clientInstance;
};
