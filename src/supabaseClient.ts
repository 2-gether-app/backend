import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://jikrnrrennzkthwywtxe.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imppa3JucnJlbm56a3Rod3l3dHhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5NTE0NTEsImV4cCI6MjA0OTUyNzQ1MX0.Lq7Q_vPKNM0qQY64qp1S6Jk4YUGUI2mlaZR-p6fGRws"

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase configuration');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
