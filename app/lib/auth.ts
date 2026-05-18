import { supabase } from "./supabaseClient";
import { clearSavedSession } from "./sessionStorage";

export const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw error;
  }

  clearSavedSession();
};