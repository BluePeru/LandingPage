"use client";

export default function UseCasesPage() {
  const useCases = [
    {
      title: "Logística",
      tag: "Rutas más seguras",
      desc: "Monitorea zonas, rutas e incidentes en tiempo real para tomar mejores decisiones durante cada traslado.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="7" width="18" height="10" rx="2" />
          <path d="M3 7l9 5 9-5" />
        </svg>
      ),
    },
    {
      title: "Inmobiliario",
      tag: "Información local",
      desc: "Consulta reportes cercanos a una zona para brindar mayor confianza a propietarios, inquilinos y visitantes.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 21V9l9-6 9 6v12H3z" />
          <rect x="9" y="13" width="6" height="8" />
        </svg>
      ),
    },
    {
      title: "Seguridad y seguros",
      tag: "Prevención de riesgos",
      desc: "Usa reportes comunitarios como referencia para identificar patrones, prevenir incidentes y mejorar la protección.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section section-usecases" id="use-cases">
      <div className="section-inner">
        <span className="section-label">CASOS DE USO</span>

        <h2 className="section-heading">
          Aplicaciones <span className="serif-accent">prácticas</span> para distintos sectores
        </h2>

        <p className="section-description">
          Blue puede apoyar la toma de decisiones en contextos donde la información
          cercana, rápida y colaborativa marca la diferencia.
        </p>

        <div className="usecases-grid">
          {useCases.map((item, index) => (
            <article className="usecase-card liquid-glass" key={index}>
              <div className="usecase-icon">{item.icon}</div>
              <span className="usecase-tag">{item.tag}</span>
              <h3 className="usecase-title">{item.title}</h3>
              <p className="usecase-desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}