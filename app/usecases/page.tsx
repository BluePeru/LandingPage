"use client";

export default function UseCasesPage() {
  const useCases = [
    {
      title: "Logística",
      tag: "Rutas más seguras",
      desc: "Blue permite a empresas de logística y transporte planificar trayectos en tiempo real, evitando zonas con alta incidencia de robos, accidentes o bloqueos. Los conductores pueden reportar incidentes sobre la marcha, y el sistema actualiza rutas alternativas de forma colaborativa. Esto reduce tiempos de espera, protege la carga y mejora la seguridad del equipo.",
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
      desc: "Blue ofrece a agencias inmobiliarias y plataformas de alquiler reportes históricos y recientes de incidentes en cada zona (seguridad, servicios, movilidad). Los potenciales compradores o inquilinos pueden consultar la frecuencia de delitos, accidentes o problemas viales antes de decidirse. Esto genera confianza, diferencia el servicio y permite ajustar precios según la percepción real de seguridad del barrio.",
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
      desc: "Aseguradoras y empresas de seguridad usan Blue para identificar patrones de incidentes comunitarios (hurtos, siniestros viales, emergencias) y así ajustar primas, recomendar medidas preventivas o desplegar recursos donde más se necesitan. Los reportes colaborativos permiten anticipar riesgos estacionales o geográficos, reduciendo siniestros y mejorando la protección de los asegurados.",
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
        <div className="usecases-source-card">
  <span className="usecases-source-label">
    FUENTES Y CONTEXTO
  </span>

  <h3>
    Transparencia sobre el enfoque y origen referencial de la información.
  </h3>

  <p>
    Los sectores y escenarios presentados en Blue se basan en problemáticas urbanas
    reales relacionadas con seguridad ciudadana, movilidad, prevención de riesgos
    y análisis geolocalizado de incidentes.
  </p>

  <p>
    La plataforma toma como referencia modelos modernos de visualización de datos,
    mapas de calor y reportes colaborativos utilizados en contextos de seguridad,
    logística y monitoreo urbano.
  </p>

  <p>
    <strong>Fuentes de referencia utilizadas:</strong>
  </p>

  <ul className="usecases-source-list">
    <li>
      <a
        href="https://www.inei.gob.pe/estadisticas/indice-tematico/seguridad-ciudadana/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instituto Nacional de Estadística e Informática (INEI)
      </a>
    </li>

    <li>
      <a
        href="https://observatorio.mininter.gob.pe/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Observatorio Nacional de Seguridad Ciudadana
      </a>
    </li>

    <li>
      <a
        href="https://www.gob.pe/pnp"
        target="_blank"
        rel="noopener noreferrer"
      >
        Policía Nacional del Perú (PNP)
      </a>
    </li>

    <li>
      <a
        href="https://www.bomberosperu.gob.pe/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Cuerpo General de Bomberos Voluntarios del Perú
      </a>
    </li>

    <li>
      <a
        href="https://www.openstreetmap.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        OpenStreetMap
      </a>
    </li>

    <li>
      <a
        href="https://h3geo.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        H3 Hexagonal Grid System
      </a>
    </li>
  </ul>

  <p className="usecases-source-note">

      <h4>Alcance de la información</h4>

Blue opera como una plataforma tecnológica orientada a la visualización de datos y la colaboración ciudadana. La información contenida en ella tiene un propósito meramente referencial y, por lo tanto, no sustituye las fuentes oficiales, los servicios de emergencia ni las entidades gubernamentales competentes.

  </p>
</div>
      </div>
    </section>
  );
}