import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
// Replace these with your actual Supabase project credentials
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabaseInstance;

if (supabaseUrl && supabaseUrl.startsWith('http') && supabaseAnonKey) {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
} else {
    console.warn('Supabase credentials missing or invalid. Using mock client for development.');
    // Mock client that logs to console
    supabaseInstance = {
        from: (table) => ({
            insert: async (data) => {
                console.log(`[Mock Supabase] Inserting into ${table}:`, data);
                // Simulate network delay
                await new Promise(resolve => setTimeout(resolve, 1000));
                return { data: data, error: null };
            },
            select: () => ({
                data: [],
                error: null
            })
        })
    };
}

export const supabase = supabaseInstance;
