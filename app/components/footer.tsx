"use client";

import Link from "next/link";


export default function Footer() {
  return (  
    <footer className="footer">
  <div className="footer-inner">
    <div className="footer-left">
      <Link href="/" className="footer-logo" aria-label="Logo de Blue">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="12" stroke="rgba(59,130,246,0.45)" strokeWidth="2" />
          <circle cx="14" cy="14" r="6" stroke="rgba(59,130,246,0.45)" strokeWidth="1.5" />
          <circle cx="14" cy="14" r="2.5" fill="#3b82f6" />
        </svg>
        <span>Blue</span>
      </Link>

      <p className="footer-description">
        Plataforma de colaboración ciudadana para reportes y alertas tempranas.
      </p>

      <p className="footer-copy">
        © 2025 Blue. Todos los derechos reservados.
      </p>
      <div className="footer-socials">
  <a
    href="https://www.linkedin.com/company/blueperu"
    target="_blank"
    rel="noopener noreferrer"
    className="footer-social-link"
    aria-label="LinkedIn"
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1c.5-.9 1.8-2.2 3.8-2.2 4 0 4.8 2.6 4.8 6V24h-4v-7c0-1.7 0-3.8-2.3-3.8s-2.7 1.8-2.7 3.7V24h-4V8z" />
    </svg>
  </a>

  <a
    href=""
    target="_blank"
    rel="noopener noreferrer"
    className="footer-social-link"
    aria-label="Instagram"
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm11.5 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
    </svg>
  </a>
</div>
    </div>

    <div className="footer-right">
      <div className="footer-column">
        <h4>Legal</h4>
        <Link href="/terms&conditions" className="footer-link">Términos y Condiciones</Link>
        <Link href="/definedterms" className="footer-link">Términos Definidos</Link>
        <Link href="/codeofconduct" className="footer-link">Código de Conducta</Link>
      </div>

      <div className="footer-column">
        <h4>Políticas</h4>
        <Link href="/disclosurepolicy" className="footer-link">Divulgación Responsable</Link>
      </div>

      <div className="footer-column">
        <h4>Blue</h4>
        <Link href="/whoarewe" className="footer-link">Quiénes Somos</Link>
        <Link href="/contact" className="footer-link">Contacto</Link>
      </div>
    </div>
  </div>
</footer>
  );
}
