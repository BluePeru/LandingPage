import Link from "next/link";


export default function Footer() {
  return (  
    <footer className="footer">
    <div className="footer-inner">
      <div className="footer-left">
        <a href="#" className="footer-logo" aria-label="Logo de Blue">
          <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="12" stroke="rgba(0,85,212,0.4)" strokeWidth="2" fill="none" />
            <circle cx="14" cy="14" r="6" stroke="rgba(0,85,212,0.4)" strokeWidth="1.5" fill="none" />
            <circle cx="14" cy="14" r="2.5" fill="#0055D4" />
          </svg>
          Blue
        </a>
        <p className="footer-copy">© 2025 Blue. Todos los derechos reservados.</p>
      </div>
      <div className="footer-right">
        <a href="#" className="footer-link">Privacidad</a>
        <a href="#" className="footer-link">Términos</a>
        <a href="#" className="footer-link">Contacto</a>
      </div>
    </div>
  </footer>
  );
}
