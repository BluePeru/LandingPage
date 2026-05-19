"use client";
import Image from "next/image";
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

  const scrollToSection = (id: string) => {
  const section = document.getElementById(id);

  if (!section) return;

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  window.history.replaceState(null, "", `#${id}`);
};

  return (
    <nav className="navbar" id="main-nav">
    
      {/*<Link href="/" className="navbar-logo">
        <Image src="/assets/logoblueoficial.png" alt="Blue" width={40} height={40} />
      </Link>*/}
      <Link href="/" className="navbar-logo">
       <div className="blue-eye-logo">
    <div className="eye-ring outer-ring">
      <div className="eye-ring middle-ring">
        <div className="eye-ring inner-ring"></div>
      </div>
    </div>
  </div>
  <span className="navbar-logo-text">Blue</span>
      </Link>
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
  <li>
    <button
      type="button"
      className="nav-link"
      onClick={() => scrollToSection("how-it-works")}
    >
      Cómo Funciona
    </button>
  </li>

  <li className="nav-dot">·</li>

  <li>
    <button
      type="button"
      className="nav-link"
      onClick={() => scrollToSection("app-preview")}
    >
      La App
    </button>
  </li>

  <li className="nav-dot">·</li>

  <li>
    <button
      type="button"
      className="nav-link"
      onClick={() => scrollToSection("features")}
    >
      Funciones
    </button>
  </li>

  <li className="nav-dot">·</li>

  <li>
    <Link href="/usecases" className="nav-link">
      Sectores
    </Link>
  </li>

  <li className="nav-dot">·</li>

  <li>
    <button
      type="button"
      className="nav-link"
      onClick={() => scrollToSection("testimonials")}
    >
      Testimonios
    </button>
  </li>

  <li className="nav-dot">·</li>
</ul>

                <Link href="/" className="nav-cta-btn">

        </Link>
    </nav>
  );
}
