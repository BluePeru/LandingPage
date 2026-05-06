"use client";

export default function WhoarewePage() {
  return (  
    <section className="whoarewe-section">
      <h2>Quiénes Somos</h2>

      <div className="whoarewe-content">
        <p className="whoarewe-brand">Blue</p>

        <h3 className="whoarewe-subtitle">I. NUESTRA IDENTIDAD</h3>

        <p className="whoarewe-text">
          Blue es un proyecto digital de colaboración ciudadana, operado a través de una aplicación móvil y su sitio
          web institucional, cuyo propósito es fortalecer la seguridad y convivencia en el territorio peruano.
          Actuamos como un intermediario tecnológico que facilita el reporte, visualización y georreferenciación
          de incidentes, peligros, accidentes, actos delincuenciales, situaciones de riesgo y otros eventos de
          interés público.
        </p>

        <h3 className="whoarewe-subtitle">II. NUESTRA MISIÓN</h3>

        <p className="whoarewe-text">
          Empoderar a la ciudadanía peruana mediante un ecosistema de alertas tempranas que contribuya a la
          prevención de riesgos y a la toma de decisiones informadas, promoviendo la transparencia, la colaboración
          y el uso responsable de la información.
        </p>

        <h3 className="whoarewe-subtitle">III. NUESTRA VISIÓN</h3>

        <p className="whoarewe-text">
          Consolidarnos como la plataforma de referencia en el Perú para la generación de inteligencia comunitaria
          en tiempo real, mejorando la respuesta ciudadana ante emergencias y fortaleciendo la cohesión social a
          través de la tecnología.
        </p>

        <h3 className="whoarewe-subtitle">IV. NUESTRA NATURALEZA JURÍDICA Y ALCANCE</h3>

        <p className="whoarewe-text">
          Blue no es un servicio de emergencia. No reemplaza ni sustituye a la Policía Nacional del Perú, Serenazgo,
          Cuerpo General de Bomberos Voluntarios del Perú, servicios médicos de urgencia ni a ninguna otra autoridad
          competente. Ante una emergencia real o inminente, el usuario debe contactar directamente a dichas entidades.
        </p>

        <p className="whoarewe-text">
          Blue actúa exclusivamente como un intermediario tecnológico. No verificamos ni avalamos la veracidad,
          exactitud, integridad o actualidad de los Reportes publicados por los usuarios. Cualquier acción tomada
          con base en la información de la plataforma es bajo la exclusiva responsabilidad del usuario.
        </p>

        <p className="whoarewe-text">
          Blue no participa en la relación entre usuarios ni entre usuarios y autoridades. Los acuerdos, decisiones
          o consecuencias derivadas de interacciones dentro o fuera de la aplicación son de exclusiva responsabilidad
          de los involucrados.
        </p>

        <h3 className="whoarewe-subtitle">V. NUESTROS COMPROMISOS</h3>

        <p className="whoarewe-text">En Blue nos comprometemos a:</p>

        <ul className="whoarewe-list">
          <li>Proteger los datos personales conforme a la Ley Nro. 29733, Ley de Protección de Datos Personales, y su Reglamento.</li>
          <li>Mantener estándares razonables de seguridad digital mediante medidas técnicas, organizativas y legales.</li>
          <li>Establecer reglas claras de convivencia mediante un Código de Conducta.</li>
          <li>Actuar oportunamente frente a conductas que vulneren derechos.</li>
          <li>Colaborar con las autoridades competentes en la identificación de usuarios que realicen publicaciones falsas o ilícitas.</li>
          <li>Moderar los contenidos cuando contravengan nuestros Términos y Condiciones, las leyes peruanas o el orden público.</li>
        </ul>

        <h3 className="whoarewe-subtitle">VI. NUESTROS VALORES</h3>

        <ul className="whoarewe-list">
          <li><strong style={{color:'#3677FF'}}>Transparencia:</strong> Actuamos con claridad sobre nuestras capacidades y limitaciones.</li>
          <li><strong style={{color:'#3677FF'}}>Responsabilidad:</strong> Exigimos a los usuarios la veracidad de la información publicada y asumimos nuestra obligación de proporcionar una infraestructura tecnológica confiable.</li>
          <li><strong style={{color:'#3677FF'}}>Colaboración ciudadana:</strong> Fomentamos el uso ético y respetuoso de la plataforma para generar alertas tempranas que beneficien a la comunidad.</li>
          <li><strong style={{color:'#3677FF'}}>Privacidad:</strong> Solo recopilamos los datos estrictamente necesarios para la creación de cuenta y el correcto uso de los Reportes.</li>
          <li><strong style={{color:'#3677FF'}}>Legalidad:</strong> Nos regimos por la legislación peruana y cualquier controversia será resuelta conforme a las leyes de la República del Perú.</li>
        </ul>

        <h3 className="whoarewe-subtitle">VII. ÁMBITO DE ACTUACIÓN</h3>

        <p className="whoarewe-text">
          Blue opera dentro del territorio peruano y está dirigida exclusivamente a personas mayores de 18 años que
          residan actualmente en el país. No está permitido el registro ni el uso por parte de menores de edad o
          personas domiciliadas fuera del Perú.
        </p>

        <h3 className="whoarewe-subtitle">VIII. CANALES OFICIALES DE COMUNICACIÓN</h3>

        <p className="whoarewe-text">
          Para cualquier consulta, reclamo o ejercicio de derechos, ponemos a disposición los siguientes canales oficiales:
        </p>

        <ul className="whoarewe-list">
          <li>Soporte técnico: <strong style={{color:'#3677FF'}}>soporte@blue.com</strong></li>
          <li>Reclamos y denuncias sobre Reportes: <strong style={{color:'#3677FF'}}>reclamos@blue.com</strong></li>
          <li>Ejercicio de derechos ARCOP: <strong style={{color:'#3677FF'}}>derechosarco@blue.com</strong></li>
          <li>Asuntos corporativos: <strong style={{color:'#3677FF'}}>contacto@blue.com</strong></li>
        </ul>

        <h3 className="whoarewe-subtitle">IX. VIGENCIA Y ACTUALIZACIÓN</h3>

        <p className="whoarewe-text">
          El presente documento forma parte integrante de los Términos y Condiciones de Uso de Blue. Podrá ser
          actualizado periódicamente; la versión vigente estará siempre disponible en nuestra aplicación móvil y
          sitio web institucional.
        </p>

        <p className="whoarewe-date">Vigente desde: 05 / 05 / 2026</p>
      </div>
    </section>
  );
}
