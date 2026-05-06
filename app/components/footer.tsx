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
