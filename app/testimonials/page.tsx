"use client";
export default function TestimonialsPage() {
  const data = [
    { nombre: "Juan P.", frase: "Me siento más seguro usando la app." },
    { nombre: "María L.", frase: "La interfaz es clara y fácil de entender." },
    { nombre: "Carlos R.", frase: "Ahora puedo monitorear todo en tiempo real." },
    { nombre: "Sofía M.", frase: "Es rápido y confiable, justo lo que necesitaba." },
  ];

  return (
    <section className="section section-testimonials" id="testimonials">

    <div className="section-inner">
      <span className="section-label" data-delay="0">TESTIMONIOS</span>
      <h2 className="section-heading" data-delay="1">
        Personas que ya probaron la app
      </h2>
      <div className="testimonials-grid">
        <div className="testimonials-card liquid-glass" data-delay="0">
          <div className="feature-icon">⭐⭐⭐⭐⭐</div>
          <h3 className="testimonials-title">Juan P.</h3>
          <p className="feature-desc">Me siento más seguro usando la aplicación.</p>
        </div>
        <div className="testimonials-card liquid-glass" data-delay="1">
          <div className="testimonials-icon">⭐⭐⭐⭐⭐</div>
          <h3 className="testimonials-title">María L.</h3>
          <p className="testimonials-desc">La interfaz es clara y fácil de entender.</p>
        </div>
        <div className="testimonials-card liquid-glass" data-delay="2">
          <div className="testimonials-icon">⭐⭐⭐⭐⭐</div>
          <h3 className="testimonials-title">Carlos R.</h3>
          <p className="testimonials-desc">Ahora puedo monitorear todo en tiempo real.</p>
        </div>
        <div className="testimonials-card liquid-glass" data-delay="3">
          <div className="testimonials-icon">⭐⭐⭐⭐⭐</div>
          <h3 className="testimonials-title">Sofía M.</h3>
          <p className="testimonials-desc">Es rápido y confiable, justo lo que necesitaba.</p>
        </div>
      </div>
    </div>
  </section>

  );
}
