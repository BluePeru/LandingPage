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
