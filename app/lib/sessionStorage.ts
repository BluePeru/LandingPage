import { Session } from "@supabase/supabase-js";

const SESSION_KEY = "supabaseSession";

export const saveSession = (session: Session) => {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
};

export const getSavedSession = (): Session | null => {
  if (typeof window === "undefined") return null;

  const saved = sessionStorage.getItem(SESSION_KEY);
  return saved ? (JSON.parse(saved) as Session) : null;
};

export const clearSavedSession = () => {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(SESSION_KEY);
};