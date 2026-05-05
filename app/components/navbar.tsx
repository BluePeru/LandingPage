"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

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
        <li><Link href="/usecases" className="nav-link">Casos de Uso</Link></li>
        <li className="nav-dot">·</li>
        <li><Link href="/whoarewe" className="nav-link">¿Quiénes Somos?</Link></li>
        <li className="nav-dot">·</li>
        <li><Link href="/testimonials" className="nav-link">Testimonios</Link></li>
      </ul>

      <Link href="/home#cta" className="nav-cta-btn">
        Descargar
      </Link>
    </nav>
  );
}
