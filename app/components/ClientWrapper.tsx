"use client";

import { useEffect, useState } from "react";
import Loader from "./loader";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("alreadyLoaded");

    const timer = setTimeout(
      () => {
        sessionStorage.setItem("alreadyLoaded", "true");
        setLoading(false);
      },
      alreadyLoaded ? 0 : 1800
    );

    const safetyTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(safetyTimer);
    };
  }, []);

  if (loading) return <Loader />;

  return <div className="fade-in">{children}</div>;
}