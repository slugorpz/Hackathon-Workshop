import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ccmimefdkdmijhznnvny.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjbWltZWZka2RtaWpoem5udm55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU1MzQwODgsImV4cCI6MjA4MTExMDA4OH0.mxjHigwgIAHM8j6ZvBjmsQIRdKVr3sNotD6A_qskKNY';

export const supabase = createClient(supabaseUrl, supabaseKey);