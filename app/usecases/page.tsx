
"use client";


export default function UseCasesPage() {
  return (
    <section className="section-inner section-usecases" id="use-cases">
    <div>
      <span className="section-label" data-delay="0">CASOS DE USO</span>
      <h2 className="section-heading" data-delay="1">
        Aplicaciones <span className="serif-accent">prácticas</span> a distintos sectores
      </h2>
      <div className="usecases-grid">
        <div className="usecase-card liquid-glass" data-delay="0">
          <div className="usecase-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="7" width="18" height="10" rx="2" />
        <path d="M3 7l9 5 9-5" />
    </svg></div>
          <h3 className="usecase-title">Logística</h3>
          <p className="usecase-desc">Monitorea envíos y rutas en tiempo real, asegurando que cada entrega llegue a destino con seguridad.</p>
        </div>
        <div className="usecase-card liquid-glass" data-delay="1">
          <div className="usecase-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
  <path d="M3 21V9l9-6 9 6v12H3z" />
  <rect x="9" y="13" width="6" height="8" />
</svg></div>
          <h3 className="usecase-title">Inmobiliario</h3>
          <p className="usecase-desc">Gestiona accesos y registros de propiedades de forma simple, brindando confianza a propietarios e inquilinos.</p>
        </div>
        <div className="usecase-card liquid-glass" data-delay="2">
          <div className="usecase-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
  <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
</svg></div>
          <h3 className="usecase-title">Seguros</h3>
          <p className="usecase-desc">Respalda operaciones con datos confiables y alertas inmediatas, reduciendo riesgos y mejorando la protección.</p>
        </div>
      </div>
    </div>
  </section>
  );
}