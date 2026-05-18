
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
        <a href="#how-it-works" className="btn-hero-secondary liquid-glass-dark">Saber Más</a>
      </div>

      <div className="hero-proof reveal" data-delay="4">
      </div>
    </div>

    <div className="hero-gradient-bottom"></div>
  </section>
  );
}
