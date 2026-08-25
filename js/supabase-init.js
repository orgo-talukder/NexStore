/**
 * NexStore - Official Supabase Initialization Module
 * 
 * This module initializes Supabase client and exports the client instance
 * to be used across all NexStore public store HTML pages.
 */
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.3/+esm';

const supabaseUrl = 'https://dhziwhuzmycpukhxbcso.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoeml3aHV6bXljcHVraHhiY3NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc2MTg1NzQsImV4cCI6MjEwMzE5NDU3NH0.W9dDivHhbwChjE5qt-ktaPxC5h4SdlVRDN3B6TkeATY';

export const supabase = createClient(supabaseUrl, supabaseKey);