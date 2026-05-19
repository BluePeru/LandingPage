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
          Tu mapa comunitario de{" "}
          <span className="serif-accent-light">seguridad</span> en tiempo real
        </h1>

        <p className="hero-subtitle reveal" data-delay="2">
          Explora reportes ciudadanos, identifica zonas de riesgo y toma
          decisiones más seguras junto a tu comunidad.
        </p>

        <div className="hero-buttons reveal" data-delay="3">
          <a href="#early-access" className="btn-hero-primary">
            Acceso anticipado
          </a>

          <a href="#how-it-works" className="btn-hero-secondary liquid-glass-dark">
            Ver cómo funciona
          </a>
        </div>
      </div>
      
      <div className="hero-gradient-bottom"></div>
    </section>
  );
}