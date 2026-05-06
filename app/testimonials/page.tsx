"use client";

export default function TestimonialsPage() {
  const testimonials = [
    {
      nombre: "Juan P.",
      rol: "Usuario en Lima",
      frase: "Me siento más seguro usando la aplicación cuando regreso tarde a casa.",
    },
    {
      nombre: "María L.",
      rol: "Vecina de la comunidad",
      frase: "La interfaz es clara, rápida y fácil de entender desde el primer uso.",
    },
    {
      nombre: "Carlos R.",
      rol: "Usuario frecuente",
      frase: "Ahora puedo revisar reportes cercanos y estar más atento a mi entorno.",
    },
    {
      nombre: "Sofía M.",
      rol: "Usuaria de Blue",
      frase: "Es una herramienta práctica para compartir alertas de forma responsable.",
    },
  ];

  return (
    <section className="section section-testimonials" id="testimonials">
      <div className="section-inner">
        <span className="section-label">TESTIMONIOS</span>

        <h2 className="section-heading">
          Personas que ya confían en <span className="serif-accent">Blue</span>
        </h2>

        <p className="section-description">
          Opiniones de usuarios que probaron la app y valoran una forma más rápida,
          colaborativa y responsable de mantenerse informados.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <article className="testimonials-card liquid-glass" key={index}>
              <div className="testimonials-stars">★★★★★</div>

              <p className="testimonials-quote">“{item.frase}”</p>

              <div className="testimonials-user">
                <div className="testimonials-avatar">
                  {item.nombre.charAt(0)}
                </div>

                <div>
                  <h3 className="testimonials-title">{item.nombre}</h3>
                  <p className="testimonials-role">{item.rol}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}