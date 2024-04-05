import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ksijbzhbomyorwzqhqfa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzaWpiemhib215b3J3enFocWZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2OTMyODcsImV4cCI6MjAyNzI2OTI4N30.qGaQF55q91lu75ofKw3r1zshpPo1RzJ9TaUg3ZLPEU4";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
