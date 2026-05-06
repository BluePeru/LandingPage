"use client";
import { useState, useEffect } from "react";
import Loader from "./loader";
import Navbar from "./navbar";
import Footer from "./footer";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("alreadyLoaded");

    if (alreadyLoaded) {
      // ✅ usar callback asincrónico para evitar el warning
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

  if (loading) return <Loader />;

  return (
    <div className={fade ? "fade-in" : ""}>
      <Navbar />
      {children}
    </div>
  );
}
