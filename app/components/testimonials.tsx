export default function Testimonials() {
  const data = [
    { nombre: "Juan P.", frase: "Me siento más seguro usando la app." },
    { nombre: "María L.", frase: "La interfaz es clara y fácil de entender." },
    { nombre: "Carlos R.", frase: "Ahora puedo monitorear todo en tiempo real." },
    { nombre: "Sofía M.", frase: "Es rápido y confiable, justo lo que necesitaba." },
  ];

  return (
    <section className="section section-testimonials" id="testimonials">

    <div className="section-inner">
      <span className="section-label reveal" data-delay="0">TESTIMONIOS</span>
      <h2 className="section-heading reveal" data-delay="1">
        Personas que ya probaron la app
      </h2>
      <div className="testimonials-grid">
        <div className="testimonials-card liquid-glass reveal" data-delay="0">
          <div className="feature-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5">
              <path d="M12 2l8.5 5v10L12 22l-8.5-5V7z" />
            </svg></div>
          <h3 className="testimonials-title">Juan P.</h3>
          <p className="feature-desc">Me siento más seguro usando la aplicación.</p>
        </div>
        <div className="testimonials-card liquid-glass reveal" data-delay="1">
          <div className="testimonials-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg></div>
          <h3 className="testimonials-title">María L.</h3>
          <p className="testimonials-desc">La interfaz es clara y fácil de entender.</p>
        </div>
        <div className="testimonials-card liquid-glass reveal" data-delay="2">
          <div className="testimonials-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg></div>
          <h3 className="testimonials-title">Carlos R.</h3>
          <p className="testimonials-desc">Ahora puedo monitorear todo en tiempo real.</p>
        </div>
        <div className="testimonials-card liquid-glass reveal" data-delay="3">
          <div className="testimonials-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg></div>
          <h3 className="testimonials-title">Sofía M.</h3>
          <p className="testimonials-desc">Es rápido y confiable, justo lo que necesitaba.</p>
        </div>
      </div>
    </div>
  </section>

  );
}
