
export default function Hero() {
  return (  
    <section className="hero" id="hero">
    <video className="hero-video" autoPlay
  muted
  loop
  playsInline
  preload="auto"
  aria-hidden="true"
  tabIndex={-1}>
      <source src="assets/videopresentacion.mp4" type="video/mp4" />
    </video>
    <div className="hero-overlay"></div>
    
    <div className="hero-content">
      <div className="hero-badge reveal" data-delay="0">
        <span className="badge-dot"></span>
        Próximamente en <strong>Google Play</strong>
      </div>

      <h1 className="hero-headline reveal" data-delay="1">
        Tu comunidad,<br /><span className="serif-accent-light">protegida</span> por todos
      </h1>

      <p className="hero-subtitle reveal" data-delay="2">
        Reporta incidentes reales. La comunidad vota y valida 
        el nivel de riesgo en tu zona.
      </p>

      <div className="hero-buttons reveal" data-delay="3">
        <a href="https://play.google.com/apps/testing/com.biorlabs.blue" className="btn-hero-primary">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path
              d="M3.61 1.814L13.793 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .61-.92zm.96-.794l11.18 6.456L12.8 10.43 4.57 1.02zM16.75 8.476l2.87 1.655c.75.433.75 1.305 0 1.738l-2.87 1.655-3.28-3.524 3.28-3.524zM4.57 22.98l8.23-9.41 2.95 2.954L4.57 22.98z" />
          </svg>
          Acceso Anticipado
        </a>
        <a href="#how-it-works" className="btn-hero-secondary liquid-glass-dark">Saber Más</a>
      </div>

      <div className="hero-proof reveal" data-delay="4">
        <div className="avatar-stack">
          <div className="avatar av1"></div>
          <div className="avatar av2"></div>
          <div className="avatar av3"></div>
          <div className="avatar av4"></div>
        </div>
        <span className="proof-text">+2,400 personas en lista de espera</span>
      </div>
    </div>

    <div className="hero-gradient-bottom"></div>
  </section>
  );
}
