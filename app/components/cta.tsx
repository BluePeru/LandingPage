import Link from "next/link";


export default function Cta() {
  return (  
    <section className="section section-cta" id="cta">
    <div className="cta-bg-dark">
      <div className="cta-aurora cta-aurora-1"></div>
      <div className="cta-aurora cta-aurora-2"></div>
    </div>

    <div className="section-inner cta-content">
      {/* Evil Eye */}
      <div className="cta-eye reveal" data-delay="0">
        <div className="evil-eye-container">
          <div className="eye-glow"></div>
          <div className="evil-eye">
            <div className="eye-ring ring-outer"></div>
            <div className="eye-ring ring-middle"></div>
            <div className="eye-ring ring-white"></div>
            <div className="eye-ring ring-pupil">
              <div className="pupil-highlight"></div>
            </div>
          </div>
          <div className="orbital-hexagons">
            <div className="orbital-hex oh-1">⬡</div>
            <div className="orbital-hex oh-2">⬡</div>
            <div className="orbital-hex oh-3">⬡</div>
            <div className="orbital-hex oh-4">⬡</div>
          </div>
        </div>
      </div>

      <h2 className="cta-heading reveal" data-delay="1">
        Empieza a <span className="serif-accent-light">proteger</span><br />tu comunidad
      </h2>
      <p className="cta-subtitle reveal" data-delay="2">
        Únete a miles transformando la seguridad de su ciudad, un reporte a la vez.
      </p>
      <div className="cta-buttons reveal" data-delay="3">
        <a href="https://play.google.com/store/apps/details?id=com.biorlabs.blue" className="btn-primary-light">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path
              d="M3.61 1.814L13.793 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .61-.92zm.96-.794l11.18 6.456L12.8 10.43 4.57 1.02zM16.75 8.476l2.87 1.655c.75.433.75 1.305 0 1.738l-2.87 1.655-3.28-3.524 3.28-3.524zM4.57 22.98l8.23-9.41 2.95 2.954L4.57 22.98z" />
          </svg>
          Descargar en Google Play
        </a>
        <a href="#" className="btn-hero-secondary liquid-glass-dark">
          Conoce nuestra visión
        </a>
      </div>
    </div>
  </section>
  );
}
