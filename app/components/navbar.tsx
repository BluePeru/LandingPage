"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { logout } from "../lib/auth";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // efecto para scroll
  useEffect(() => {
    const nav = document.getElementById("main-nav");
    if (!nav) return;
    const onScroll = () => {
      nav.classList.toggle("scrolled", window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [userEmail, setUserEmail] = useState<string | null>(null);

useEffect(() => {
  const loadUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    setUserEmail(user?.email ?? null);
  };

  loadUser();

  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_event, session) => {
    setUserEmail(session?.user?.email ?? null);
  });

  return () => {
    subscription.unsubscribe();
  };
}, []);

const handleLogout = async () => {
  try {
    await logout();
    setUserEmail(null);
    alert("Sesión cerrada correctamente");
  } catch (error) {
    console.error(error);
    alert("No se pudo cerrar sesión");
  }
};

  return (
    <nav className="navbar" id="main-nav">
      <a href="/home" className="nav-logo">
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="12" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" />
        <circle cx="14" cy="14" r="6" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
        <circle cx="14" cy="14" r="2.5" fill="#fff" />
      </svg>
      Blue
    </a>

      {/* Hamburguesa controlada por estado */}
      <button
        className={`nav-hamburger ${open ? "open" : ""}`}
        id="nav-hamburger"
        aria-label="Menú de navegación"
        onClick={() => setOpen(!open)}
      >
        <span></span><span></span><span></span>
      </button>

      {/* Links controlados por estado */}
      <ul className={`nav-links ${open ? "open" : ""}`} id="nav-links">
        <li><Link href="/home#how-it-works" className="nav-link">Cómo Funciona</Link></li>
        <li className="nav-dot">·</li>
        <li><Link href="/home#app-preview" className="nav-link">La App</Link></li>
        <li className="nav-dot">·</li>
        <li><Link href="/home#features" className="nav-link">Funciones</Link></li>
        <li className="nav-dot">·</li>
        <li><Link href="/usecases" className="nav-link">Sectores</Link></li>
        <li className="nav-dot">·</li>
        <li><Link href="/testimonials" className="nav-link">Testimonios</Link></li>
        <li className="nav-dot">·</li>
      </ul>

                <Link href="/earlyaccess" className="nav-cta-btn">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path
              d="M3.61 1.814L13.793 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .61-.92zm.96-.794l11.18 6.456L12.8 10.43 4.57 1.02zM16.75 8.476l2.87 1.655c.75.433.75 1.305 0 1.738l-2.87 1.655-3.28-3.524 3.28-3.524zM4.57 22.98l8.23-9.41 2.95 2.954L4.57 22.98z" />
          </svg>
          Acceso Anticipado
        </Link>
    </nav>
  );
}
