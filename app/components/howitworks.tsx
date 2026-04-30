import Link from "next/link";

export default function HowItWorks() {
  return (  
    <section className="section section-how" id="how-it-works">
    {/* Aurora side glows */}
    <div className="aurora aurora-left"></div>
    <div className="aurora aurora-right"></div>

    <div className="floating-hexagons">
      <div className="hero-hex fh-1"></div>
      <div className="hero-hex fh-2"></div>
    </div>

    <div className="section-inner">
      <span className="section-label reveal" data-delay="0">CÓMO FUNCIONA</span>
      <h2 className="section-heading reveal" data-delay="1">
        Reportar nunca fue<br />tan <span className="serif-accent">simple</span>
      </h2>
      <p className="section-subtitle reveal" data-delay="2">Tres pasos para transformar tu comunidad.</p>

      <div className="steps-grid">
        <div className="step-card liquid-glass reveal" data-delay="0">
          <div className="step-number">01</div>
          <div className="step-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg></div>
          <h3 className="step-title">Crea tu reporte</h3>
          <p className="step-desc">Describe el incidente, sube fotos o videos y marca la ubicación en el mapa.</p>
        </div>
        <div className="step-card liquid-glass reveal" data-delay="1">
          <div className="step-number">02</div>
          <div className="step-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
              <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
            </svg></div>
          <h3 className="step-title">La comunidad vota</h3>
          <p className="step-desc">Otros usuarios validan tu reporte. A más votos, mayor relevancia.</p>
        </div>
        <div className="step-card liquid-glass reveal" data-delay="2">
          <div className="step-number">03</div>
          <div className="step-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5">
              <path d="M12 2l8.5 5v10L12 22l-8.5-5V7z" />
            </svg></div>
          <h3 className="step-title">El hexágono crece</h3>
          <p className="step-desc">Los reportes más votados suben de categoría y duran más en el mapa.</p>
        </div>
      </div>
    </div>
  </section>
  );
}
