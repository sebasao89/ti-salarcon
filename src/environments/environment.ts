import { createClient } from '@supabase/supabase-js';


export const environment = {
    production: false,
    supabaseUrl: 'https://nxfupneyqryumeegdhoe.supabase.co',
    apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54ZnVwbmV5cXJ5dW1lZWdkaG9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ0NzM5NzUsImV4cCI6MjAyMDA0OTk3NX0.S1xch-67ER3CAsRQyvW4G3lSENA1ZKPFibwfb3lmI40'
};

export const supabase = createClient(environment.supabaseUrl, environment.apiKey);