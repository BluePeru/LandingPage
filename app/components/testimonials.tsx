export default function Testimonials() {
  const testimonials = [
    {
      text: "La idea de visualizar incidentes por zonas se siente mucho más clara que usar redes sociales.",
      role: "Beta tester",
    },
    {
      text: "Me gusta que la comunidad pueda validar reportes y ayudar a otros usuarios.",
      role: "Usuario de Blue",
    },
    {
      text: "La interfaz se siente moderna y rápida. El mapa tiene muchísimo potencial.",
      role: "Beta tester",
    },
    {
      text: "Podría ser muy útil para evitar zonas peligrosas antes de movilizarse.",
      role: "Usuario de Blue",
    },
    {
      text: "El sistema de hexágonos hace que la información sea mucho más visual.",
      role: "Beta tester",
    },
  ];

  return (
    <section className="section section-testimonials" id="testimonials">
      <div className="aurora aurora-left"></div>
      <div className="aurora aurora-right"></div>

      <div className="floating-hexagons">
        <div className="hero-hex fh-3"></div>
        <div className="hero-hex fh-7"></div>
      </div>

      <div className="section-inner">
        <span className="section-label">
          TESTIMONIOS
        </span>

        <h2 className="section-heading">
          La comunidad ya empezó a confiar en{" "}
          <span className="serif-accent">
            Blue
          </span>
        </h2>

        <p className="section-description">
          Opiniones de personas interesadas en una
          forma más colaborativa de mantenerse
          informadas.
        </p>

        <div className="testimonials-marquee">
          <div className="testimonials-track">
            {[...testimonials, ...testimonials].map(
              (item, index) => (
                <article
                  className="testimonial-card liquid-glass"
                  key={index}
                >
                  <div className="testimonial-stars">
                    ★★★★★
                  </div>

                  <p className="testimonial-text">
                    “{item.text}”
                  </p>

                  <span className="testimonial-role">
                    {item.role}
                  </span>
                </article>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}