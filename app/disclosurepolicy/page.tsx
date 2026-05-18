import React from 'react'

export default function DisclosurePolicyPage() {
  return (
    <>
        <section className="disclosurepolicy-section">
      <h2>Política de Divulgación Responsable</h2>

      <div className="disclosurepolicy-content">
        <p className="disclosurepolicy-brand">Blue</p>

        <h3 className="disclosurepolicy-subtitle">I. INTRODUCCIÓN</h3>

        <p className="disclosurepolicy-text">
          En Blue, la seguridad de nuestra comunidad y la integridad de los sistemas que soportan el ecosistema
          de alertas tempranas son compromisos fundamentales. Al ser una plataforma que permite reportar
          incidentes, peligros y actos delincuenciales en tiempo real, cualquier vulnerabilidad en nuestra
          infraestructura tecnológica podría afectar la confianza, la disponibilidad del servicio o la protección
          de los datos personales de los usuarios.
        </p>

        <p className="disclosurepolicy-text">
          Si bien implementamos medidas técnicas, organizativas y legales alineadas con los estándares del sector
          digital y la Ley Nro. 29733, Ley de Protección de Datos Personales, reconocemos que la seguridad absoluta
          no existe. Por ello, Blue abre un canal de colaboración con investigadores de seguridad, expertos en
          ciberseguridad y usuarios éticos.
        </p>

        <p className="disclosurepolicy-text">
          La presente Política de Divulgación Responsable establece el marco ético, legal y operativo para que
          cualquier persona pueda reportar hallazgos de seguridad de manera confidencial, constructiva y conforme
          a la ley.
        </p>

        <h3 className="disclosurepolicy-subtitle">II. PRINCIPIOS RECTORES</h3>

        <ul className="disclosurepolicy-list">
          <li><strong style={{color:'#3677FF'}}>Buena fe:</strong> Todo reporte se presume realizado con la intención genuina de colaborar con la seguridad de la plataforma.</li>
          <li><strong style={{color:'#3677FF'}}>Confidencialidad:</strong> Blue protegerá la identidad de quienes reporten y mantendrá reserva sobre la información técnica recibida.</li>
          <li><strong style={{color:'#3677FF'}}>Proporcionalidad:</strong> Las acciones del investigador deben limitarse a lo estrictamente necesario para identificar y reportar la vulnerabilidad.</li>
          <li><strong style={{color:'#3677FF'}}>Transparencia:</strong> Blue informará al investigador sobre el estado del reporte cuando este haya proporcionado un medio de contacto.</li>
          <li><strong style={{color:'#3677FF'}}>Legalidad:</strong> Toda investigación debe realizarse dentro del marco legal peruano, respetando los derechos de Blue y de terceros.</li>
        </ul>

        <h3 className="disclosurepolicy-subtitle">III. ALCANCE DE LA POLÍTICA</h3>

        <h4 className="disclosurepolicy-heading">III.1. Sistemas cubiertos</h4>

        <p className="disclosurepolicy-text">
          La presente política aplica a los siguientes activos tecnológicos de Blue:
        </p>

        <ul className="disclosurepolicy-list">
          <li>La aplicación móvil Blue, en sus versiones para iOS y Android cuando estén disponibles oficialmente.</li>
          <li>El sitio web institucional de Blue, incluyendo dominio y subdominios asociados.</li>
          <li>Las API y servicios backend que soportan la funcionalidad de la Aplicación.</li>
          <li>Código fuente, sistemas de autenticación, infraestructura de almacenamiento y demás componentes del ecosistema digital operado por Blue.</li>
        </ul>

        <h4 className="disclosurepolicy-heading">III.2. Exclusiones</h4>

        <ul className="disclosurepolicy-list">
          <li>Sitios web, aplicaciones o servicios de terceros enlazados desde Blue.</li>
          <li>Vulnerabilidades físicas o de seguridad perimetral no relacionadas con el software desarrollado por Blue.</li>
          <li>Conductas que impliquen acceso no autorizado a cuentas de otros usuarios.</li>
          <li>Pruebas de denegación de servicio o cualquier otra que pueda degradar el rendimiento de los sistemas.</li>
          <li>Reportes basados exclusivamente en ingeniería social o phishing.</li>
        </ul>

        <h3 className="disclosurepolicy-subtitle">IV. PROCEDIMIENTO PARA REPORTAR VULNERABILIDADES</h3>

        <h4 className="disclosurepolicy-heading">IV.1. Contenido del reporte</h4>

        <p className="disclosurepolicy-text">
          Para que Blue pueda procesar adecuadamente un reporte, este debe contener, al menos, la siguiente información:
        </p>

        <ul className="disclosurepolicy-list">
          <li>Tipo de vulnerabilidad.</li>
          <li>Descripción técnica detallada del hallazgo.</li>
          <li>Impacto potencial estimado.</li>
          <li>Herramientas utilizadas durante la investigación.</li>
          <li>Evidencias en formatos no ejecutables, como capturas de pantalla, archivos PDF o logs anonimizados.</li>
        </ul>

        <h4 className="disclosurepolicy-heading">IV.2. Canal de envío</h4>

        <p className="disclosurepolicy-text">
          Los reportes deben remitirse exclusivamente a <strong>soporte@b1peru.com</strong>. El asunto del mensaje
          deberá ser: <strong style={{color:'#3677FF'}}>“Reporte de vulnerabilidad - Blue”</strong>.
        </p>

        <h4 className="disclosurepolicy-heading">IV.3. Anonimato y contacto</h4>

        <p className="disclosurepolicy-text">
          Por defecto, Blue tratará todos los reportes como anónimos y no almacenará la dirección de correo del
          remitente más allá del tiempo necesario para evaluar el reporte. Si el investigador desea recibir
          seguimiento, deberá indicarlo expresamente.
        </p>

        <h3 className="disclosurepolicy-subtitle">V. COMPROMISOS DE BLUE</h3>

        <p className="disclosurepolicy-text">
          Una vez recibido un reporte que cumpla con los requisitos de esta política, Blue se compromete a:
        </p>

        <ol className="disclosurepolicy-list">
          <li>Acusar recibo en un plazo máximo de 5 días hábiles cuando exista medio de contacto.</li>
          <li>Evaluar la validez y criticidad del hallazgo.</li>
          <li>Implementar las correcciones en un plazo razonable.</li>
          <li>No iniciar acciones legales contra el investigador que haya actuado de buena fe.</li>
          <li>Reconocer públicamente la contribución del investigador, salvo que prefiera permanecer en anonimato.</li>
        </ol>

        <h3 className="disclosurepolicy-subtitle">VI. TÉRMINOS Y CONDICIONES PARA INVESTIGADORES</h3>

        <h4 className="disclosurepolicy-heading">VI.1. Aceptación</h4>

        <p className="disclosurepolicy-text">
          El envío de un reporte a Blue implica la aceptación plena e incondicional de los presentes términos y
          condiciones para investigadores.
        </p>

        <h4 className="disclosurepolicy-heading">VI.2. Conducta permitida</h4>

        <ul className="disclosurepolicy-list">
          <li>Identificar vulnerabilidades sin explotarlas más allá de lo necesario para su verificación.</li>
          <li>No acceder, modificar ni eliminar datos que no sean propios.</li>
          <li>No realizar pruebas que puedan degradar el rendimiento de los sistemas de producción.</li>
          <li>No divulgar públicamente la vulnerabilidad antes de que Blue haya tenido oportunidad de corregirla.</li>
        </ul>

        <h4 className="disclosurepolicy-heading">VI.3. Conductas prohibidas</h4>

        <ul className="disclosurepolicy-list">
          <li>Realizar ingeniería social, phishing o técnicas que involucren a usuarios, empleados o proveedores.</li>
          <li>Acceder a cuentas de otros usuarios sin consentimiento expreso.</li>
          <li>Utilizar la vulnerabilidad para obtener beneficio personal, extorsionar o causar daño.</li>
          <li>Almacenar, copiar o difundir datos personales obtenidos durante la investigación.</li>
          <li>Realizar pruebas fuera del alcance definido en esta política.</li>
        </ul>

        <h4 className="disclosurepolicy-heading">VI.4. Consecuencias del incumplimiento</h4>

        <ul className="disclosurepolicy-list">
          <li>Pérdida de cualquier derecho al reconocimiento por parte de Blue.</li>
          <li>Suspensión o cancelación definitiva de cuentas asociadas al investigador.</li>
          <li>Inicio de acciones legales conforme a la legislación peruana.</li>
        </ul>

        <h3 className="disclosurepolicy-subtitle">VII. CONFIDENCIALIDAD Y PROPIEDAD INTELECTUAL</h3>

        <h4 className="disclosurepolicy-heading">VII.1. Confidencialidad</h4>

        <p className="disclosurepolicy-text">
          Toda la información intercambiada entre el investigador y Blue en el marco de un reporte será considerada
          confidencial.
        </p>

        <ul className="disclosurepolicy-list">
          <li>No divulgar el hallazgo a terceros sin autorización escrita de Blue.</li>
          <li>No utilizar la información para fines distintos a la colaboración en seguridad.</li>
          <li>Destruir cualquier copia de las evidencias una vez concluido el proceso de corrección, salvo autorización contraria.</li>
        </ul>

        <h4 className="disclosurepolicy-heading">VII.2. Licencia sobre el informe</h4>

        <p className="disclosurepolicy-text">
          Al enviar un reporte, el investigador concede a Blue una licencia irrevocable, gratuita, no exclusiva y
          mundial para utilizar, reproducir, adaptar y modificar la información contenida en el reporte con el único
          propósito de analizar, corregir y mejorar la seguridad de los sistemas de Blue.
        </p>

        <h3 className="disclosurepolicy-subtitle">VIII. RECONOCIMIENTO Y AGRADECIMIENTOS</h3>

        <p className="disclosurepolicy-text">
          Blue valora la colaboración de la comunidad de investigadores en seguridad digital. Dependiendo de la
          relevancia, calidad e impacto del reporte, podrá:
        </p>

        <ul className="disclosurepolicy-list">
          <li>Incluir el nombre del investigador o seudónimo en un “Muro de Agradecimiento”.</li>
          <li>Mencionar la contribución en comunicaciones oficiales o notas de actualización.</li>
          <li>Otorgar una mención especial en eventos o actividades organizadas por Blue.</li>
        </ul>

        <p className="disclosurepolicy-text">
          El reconocimiento no constituye compensación económica ni genera vínculo laboral, contractual o societario.
          Blue no otorga recompensas económicas, salvo que se establezca expresamente un programa adicional.
        </p>

        <h3 className="disclosurepolicy-subtitle">IX. EXCLUSIONES Y LIMITACIONES</h3>

        <ul className="disclosurepolicy-list">
          <li>Vulnerabilidades en servicios de terceros integrados que no sean directamente controlados por Blue.</li>
          <li>Reportes incompletos o sin información suficiente para ser evaluados.</li>
          <li>Hallazgos que ya sean de conocimiento público al momento del reporte.</li>
          <li>Pruebas realizadas sin autorización que afecten la experiencia de usuarios o disponibilidad del servicio.</li>
          <li>Vulnerabilidades de tipo físico o social.</li>
        </ul>

        <p className="disclosurepolicy-text">
          Blue se reserva el derecho de interpretar y aplicar esta política según su mejor criterio, siempre en busca
          de la protección de su comunidad y del cumplimiento de las leyes peruanas.
        </p>

        <h3 className="disclosurepolicy-subtitle">X. ACTUALIZACIONES</h3>

        <p className="disclosurepolicy-text">
          Blue podrá actualizar la presente política en cualquier momento. Las modificaciones serán publicadas en el
          sitio web institucional y en la aplicación móvil.
        </p>

        <h3 className="disclosurepolicy-subtitle">XI. LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h3>

        <p className="disclosurepolicy-text">
          La presente política se rige por las leyes de la República del Perú. Cualquier controversia derivada de su
          interpretación o aplicación se someterá a la jurisdicción de los tribunales ordinarios de la ciudad de Lima.
        </p>

        <h3 className="disclosurepolicy-subtitle">XII. CONTACTO</h3>

        <p className="disclosurepolicy-text">
          Para cualquier consulta adicional sobre esta política, puede escribir a: <strong style={{color:'#3677FF'}}>soporte@b1peru.com</strong>.
        </p>

        <p className="disclosurepolicy-date">Vigente desde: 05 / 05 / 2026</p>
      </div>
    </section>
    </>
  )
}
