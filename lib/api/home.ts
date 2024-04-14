import { SupabaseClient } from "@supabase/supabase-js";


export const getHome = async (supabase: SupabaseClient) => {
  const { data, error } = await supabase
    .from("Post")
    .select("*");

  if (error) {
    throw error;
  }

  return data;
}

