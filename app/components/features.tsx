import Link from "next/link";


export default function Features() {
  return (  
    <section className="section section-features" id="features">
    <div className="aurora aurora-left"></div>
    <div className="aurora aurora-right"></div>

    <div className="floating-hexagons">
      <div className="hero-hex fh-6"></div>
      <div className="hero-hex fh-8"></div>
    </div>

    <div className="section-inner">
      <span className="section-label reveal" data-delay="0">FUNCIONES</span>
      <h2 className="section-heading reveal" data-delay="1">
        Todo para <span className="serif-accent">proteger</span>
      </h2>
      <div className="features-grid">
        <div className="feature-card liquid-glass reveal" data-delay="0">
          <div className="feature-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5">
              <path d="M12 2l8.5 5v10L12 22l-8.5-5V7z" />
            </svg></div>
          <h3 className="feature-title">Sistema de Hexágonos</h3>
          <p className="feature-desc">Cada reporte genera un hexágono. Más votos = mayor categoría y duración.</p>
        </div>
        <div className="feature-card liquid-glass reveal" data-delay="1">
          <div className="feature-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg></div>
          <h3 className="feature-title">Fotos & Videos</h3>
          <p className="feature-desc">Adjunta evidencia visual para hacer tus reportes más creíbles.</p>
        </div>
        <div className="feature-card liquid-glass reveal" data-delay="2">
          <div className="feature-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg></div>
          <h3 className="feature-title">Comunidad Activa</h3>
          <p className="feature-desc">Vota y comenta. Juntos construimos un mapa de seguridad real.</p>
        </div>
        <div className="feature-card liquid-glass reveal" data-delay="3">
          <div className="feature-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg></div>
          <h3 className="feature-title">Geolocalización</h3>
          <p className="feature-desc">Marca la ubicación exacta y visualiza reportes cercanos.</p>
        </div>
      </div>
    </div>
  </section>
  );
}
