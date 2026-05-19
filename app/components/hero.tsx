"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero hero-map" id="hero">
      <div className="hero-map-bg"></div>
      <div className="hero-map-overlay"></div>

      <div className="hero-map-content">
        <div className="hero-badge reveal" data-delay="0">
        <span className="badge-dot"></span>
        Próximamente en <strong>Google Play</strong>
      </div>

        <h1 className="hero-headline reveal" data-delay="1">
        Tu comunidad,<br /><span className="serif-accent-light">protegida</span> por todos
      </h1>

        <p className="hero-subtitle reveal" data-delay="2">
          Explora reportes ciudadanos, identifica zonas de riesgo y toma
          decisiones más seguras junto a tu comunidad.
        </p>

        <div className="hero-buttons reveal" data-delay="3">
          <Link href="/home#cta" className="btn-hero-primary liquid-glass-dark">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path
              d="M3.61 1.814L13.793 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .61-.92zm.96-.794l11.18 6.456L12.8 10.43 4.57 1.02zM16.75 8.476l2.87 1.655c.75.433.75 1.305 0 1.738l-2.87 1.655-3.28-3.524 3.28-3.524zM4.57 22.98l8.23-9.41 2.95 2.954L4.57 22.98z" />
          </svg>
          Acceso Anticipado
          </Link>
          <Link href="#how-it-works" className="btn-hero-secondary liquid-glass-dark">
            Ver cómo funciona
          </Link>
          
        </div>
      </div>
          
      <div className="hero-gradient-bottom"></div>
    </section>
  );
}