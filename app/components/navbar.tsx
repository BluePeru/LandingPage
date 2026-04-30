import Link from "next/link";

     {/* ===== NAVBAR ===== */}
export default function Navbar() {
  return (  
    <nav className="navbar" id="main-nav">
    <a href="#hero" className="nav-logo">
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="12" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" />
        <circle cx="14" cy="14" r="6" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
        <circle cx="14" cy="14" r="2.5" fill="#fff" />
      </svg>
      Blue
    </a>
    <button className="nav-hamburger" id="nav-hamburger" aria-label="Menú de navegación">
      <span></span><span></span><span></span>
    </button>
    <ul className="nav-links" id="nav-links">
      <li><a href="#how-it-works" className="nav-link">Cómo Funciona</a></li>
      <li className="nav-dot">·</li>
      <li><a href="#app-preview" className="nav-link">La App</a></li>
      <li className="nav-dot">·</li>
      <li><a href="#features" className="nav-link">Funciones</a></li>
      <li className="nav-dot">·</li>
      <li><a href="#whoarewe" className="nav-link">¿Quiénes Somos?</a></li>
            <li><a href="#hero" className="nav-link">Testimonios</a></li>
      <li className="nav-dot">·</li>
    </ul>
    <a href="#cta" className="nav-cta-btn">
      Descargar
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5v14" />
        <path d="m5 12 7 7 7-7" />
      </svg>
    </a>
  </nav>
  );
}
