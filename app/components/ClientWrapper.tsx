"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Loader from "./loader";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Manejar el loader
    const alreadyLoaded = sessionStorage.getItem("alreadyLoaded");
    if (alreadyLoaded) {
      setTimeout(() => {
        setLoading(false);
        setFade(true);
      }, 0);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        setFade(true);
        sessionStorage.setItem("alreadyLoaded", "true");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Interceptar el botón atrás y mandar a Home
    const handlePopState = (event: PopStateEvent) => {
      event.preventDefault();
      router.push("/"); // siempre manda a Home sin hash
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [router]);

  if (loading) return <Loader />;

  return <div className={fade ? "fade-in" : ""}>{children}</div>;
}
