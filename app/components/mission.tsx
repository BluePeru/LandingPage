import Link from "next/link";


export default function Mission() {
  return (  
    <section className="section section-mission" id="mission">
    <div className="aurora aurora-left"></div>
    <div className="aurora aurora-right"></div>

    <div className="floating-hexagons">
      <div className="hero-hex fh-3"></div>
      <div className="hero-hex fh-7"></div>
      <div className="hero-hex fh-9"></div>
    </div>

    <div className="section-inner">
      <div className="word-reveal-block" id="word-reveal">
        <p className="word-reveal-text" data-paragraph="1">
          Un espacio donde la <strong>comunidad</strong> se une para <strong>proteger</strong> lo que importa. Cada
          reporte es una voz, cada voto un acto de <strong>solidaridad</strong>.
        </p>
        <p className="word-reveal-text mt-lg" data-paragraph="2">
          Donde la <strong>transparencia</strong> y la <strong>seguridad</strong> se encuentran para crear más
          <strong>acción</strong> colectiva.
        </p>
      </div>
    </div>
  </section>
  );
}
