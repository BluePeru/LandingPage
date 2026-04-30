import Link from "next/link";


export default function AppPreview() {
  return (  
    <section className="section section-app" id="app-preview">
    <div className="aurora aurora-left"></div>
    <div className="aurora aurora-right"></div>

    <div className="floating-hexagons">
      <div className="hero-hex fh-4"></div>
      <div className="hero-hex fh-5"></div>
    </div>

    <div className="section-inner">
      <span className="section-label reveal" data-delay="0">LA APP</span>
      <h2 className="section-heading reveal" data-delay="1">
        Diseñada para la <span className="serif-accent-orange">acción</span>
      </h2>

      <div className="app-phones reveal" data-delay="2">
        {/* Phone 1 */}
        <div className="phone-mockup phone-left">
          <div className="phone-frame">
            <div className="phone-notch"></div>
            <div className="phone-screen"><img src="assets/imagen1.jpeg" alt="Información de zona" className="screen-img" />
            </div>
          </div>
          <p className="phone-caption">Información por zona</p>
        </div>
        {/* Phone 2 (Center) */}
        <div className="phone-mockup phone-center">
          <div className="phone-frame featured">
            <div className="phone-notch"></div>
            <div className="phone-screen"><img src="assets/imagen2.jpeg" alt="Mapa en tiempo real" className="screen-img" />
            </div>
          </div>
          <p className="phone-caption">Mapa en tiempo real</p>
        </div>
        {/* Phone 3 */}
        <div className="phone-mockup phone-right">
          <div className="phone-frame">
            <div className="phone-notch"></div>
            <div className="phone-screen"><img src="assets/imagen3.jpeg" alt="Reportes" className="screen-img" /></div>
          </div>
          <p className="phone-caption">Reportes y Comentarios</p>
        </div>
      </div>
      {/* Casos de Uso*/}
      <section className="section-inner section-usecases" id="use-cases">
    <div>
      <span className="section-label reveal" data-delay="0">CASOS DE USO</span>
      <h2 className="section-heading reveal" data-delay="1">
        Aplicaciones <span className="serif-accent">prácticas</span> a distintos sectores
      </h2>
      <div className="usecases-grid">
        <div className="usecase-card liquid-glass reveal" data-delay="0">
          <div className="usecase-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="7" width="18" height="10" rx="2" />
        <path d="M3 7l9 5 9-5" />
    </svg></div>
          <h3 className="usecase-title">Logística</h3>
          <p className="usecase-desc">Monitorea envíos y rutas en tiempo real, asegurando que cada entrega llegue a destino con seguridad.</p>
        </div>
        <div className="usecase-card liquid-glass reveal" data-delay="1">
          <div className="usecase-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
  <path d="M3 21V9l9-6 9 6v12H3z" />
  <rect x="9" y="13" width="6" height="8" />
</svg></div>
          <h3 className="usecase-title">Inmobiliario</h3>
          <p className="usecase-desc">Gestiona accesos y registros de propiedades de forma simple, brindando confianza a propietarios e inquilinos.</p>
        </div>
        <div className="usecase-card liquid-glass reveal" data-delay="2">
          <div className="usecase-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
  <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
</svg></div>
          <h3 className="usecase-title">Seguros</h3>
          <p className="usecase-desc">Respalda operaciones con datos confiables y alertas inmediatas, reduciendo riesgos y mejorando la protección.</p>
        </div>
      </div>
    </div>
  </section>


      {/* Planet / Globe */}
      <div className="planet-wrapper reveal" data-delay="3">
        <div className="planet">
          <div className="planet-glow"></div>
          <div className="planet-body">
            {/* Rompecabezas Naranja */}
            <div className="p-hex p-hex-1"></div>
            <div className="p-hex p-hex-2"></div>
            <div className="p-hex p-hex-3"></div>
            <div className="p-hex p-hex-4"></div>
            <div className="p-hex p-hex-5"></div>
            {/* Lado Izquierdo */}
            <div className="p-hex p-hex-6"></div>
            <div className="p-hex p-hex-7"></div>
            <div className="p-hex p-hex-8"></div>
            <div className="p-hex p-hex-9"></div>
            <div className="p-hex p-hex-10"></div>
            <div className="p-hex p-hex-11"></div>
            <div className="p-hex p-hex-12"></div>

            <div className="planet-shine"></div>
            <div className="planet-atmosphere"></div>
          </div>
          <div className="planet-ring"></div>
        </div>
        <div className="planet-fade"></div>
      </div>
    </div>
  </section>
  );
}
