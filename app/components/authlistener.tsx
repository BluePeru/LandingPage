"use client";

import { useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { saveSession, clearSavedSession } from "../lib/sessionStorage";

export default function AuthListener() {
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        saveSession(data.session);
      } else {
        clearSavedSession();
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        saveSession(session);
      } else {
        clearSavedSession();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return null;
}