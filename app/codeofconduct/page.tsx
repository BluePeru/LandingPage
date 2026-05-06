import React from 'react'

export default function CodeOfConductPage() {
  return (
    <>
        <section className="codeofconduct-section">
      <h2>Código de Conducta</h2>

      <div className="codeofconduct-content">
        <p className="codeofconduct-brand">Blue</p>

        <h3 className="codeofconduct-subtitle">I. FUNDAMENTO Y ÁMBITO DE APLICACIÓN</h3>

        <p className="codeofconduct-text">
          El presente Código de Conducta, en adelante, el “Código”, desarrolla los principios y reglas de
          comportamiento que deben observar todos los usuarios registrados en la aplicación móvil Blue,
          en adelante, “Blue” o la “Aplicación”, en el marco de lo dispuesto en los Términos y Condiciones
          de Uso y demás documentos que integran el ecosistema normativo de la plataforma.
        </p>

        <p className="codeofconduct-text">
          El Código es de cumplimiento obligatorio para toda persona natural que acceda, se registre o utilice
          Blue, sin excepción. Su finalidad es garantizar un entorno digital seguro, respetuoso y colaborativo,
          orientado a la generación de alertas tempranas sobre incidentes, peligros, accidentes, actos
          delincuenciales y situaciones de riesgo en el territorio peruano.
        </p>

        <p className="codeofconduct-text">
          La aceptación de los Términos y Condiciones implica la adhesión plena e incondicional al presente
          Código. El desconocimiento del Código no exime al usuario de su cumplimiento ni de las sanciones
          correspondientes.
        </p>

        <h3 className="codeofconduct-subtitle">II. PRINCIPIOS RECTORES</h3>

        <p className="codeofconduct-text">
          Todo usuario de Blue debe regir su conducta por los siguientes principios:
        </p>

        <ul className="codeofconduct-list">
          <li><strong style={{color:'#3677FF'}}>Buena fe y veracidad:</strong> La información proporcionada en los Reportes debe ser cierta, precisa y, en la medida de lo posible, basada en conocimiento directo. En caso de información indirecta, deberá señalarse expresamente tal carácter.</li>
          <li><strong style={{color:'#3677FF'}}>Respeto y no discriminación:</strong> Queda prohibido todo tipo de expresión que atente contra la dignidad humana, incluyendo mensajes de odio, discriminación por razones de origen, raza, sexo, idioma, religión, opinión, condición económica, discapacidad o cualquier otra condición personal o social.</li>
          <li><strong style={{color:'#3677FF'}}>Colaboración ciudadana responsable:</strong> El uso de Blue debe estar orientado a contribuir genuinamente a la seguridad y convivencia ciudadana, no a generar alarma injustificada, desinformación o perjuicio a terceros.</li>
          <li><strong style={{color:'#3677FF'}}>Legalidad:</strong> Todo uso de la plataforma debe ajustarse estrictamente a la Constitución Política del Perú, las leyes vigentes, la Ley Nro. 30096, el Código Penal, el Código Civil y las normas de protección de datos personales.</li>
          <li><strong style={{color:'#3677FF'}}>Protección de datos y privacidad:</strong> Los usuarios no podrán recopilar, almacenar, difundir ni utilizar datos personales de otros usuarios sin su consentimiento expreso, salvo en el marco de un Reporte que así lo requiera y respetando siempre los límites legales.</li>
        </ul>

        <h3 className="codeofconduct-subtitle">III. CONDUCTAS EXPRESAMENTE PROHIBIDAS</h3>

        <p className="codeofconduct-text">
          Constituyen infracciones graves o leves, según su naturaleza y consecuencias, las siguientes conductas:
        </p>

        <h4 className="codeofconduct-heading">A. Sobre la veracidad de los Reportes</h4>

        <ol className="codeofconduct-list">
          <li>Publicar Reportes falsos, inexactos, engañosos o que induzcan a error sobre la ocurrencia de un delito, accidente o situación de riesgo.</li>
          <li>Reportar hechos que no hayan sido presenciados directamente sin advertir expresamente su carácter indirecto o no verificado.</li>
          <li>Manipular o alterar evidencias multimedia para simular una situación de riesgo inexistente o distorsionar la realidad.</li>
          <li>Reportar un evento en una ubicación geográfica distinta a la real con el propósito de desviar o perjudicar a otros usuarios o a las autoridades.</li>
        </ol>

        <h4 className="codeofconduct-heading">B. Sobre el respeto a la dignidad y derechos de terceros</h4>

        <ol className="codeofconduct-list">
          <li>Utilizar lenguaje ofensivo, discriminatorio, racista, sexista, violento, difamatorio, calumnioso o que vulnere los derechos fundamentales de terceros.</li>
          <li>Publicar contenido que atente contra la intimidad, privacidad, honor, imagen o datos personales de terceros sin su consentimiento expreso.</li>
          <li>Realizar actos de acoso, hostigamiento, intimidación, amenazas o cualquier forma de violencia digital contra otros usuarios.</li>
          <li>Difundir información falsa o maliciosa que pueda dañar la reputación de una persona, organización o autoridad.</li>
        </ol>

        <h4 className="codeofconduct-heading">C. Sobre la legalidad y orden público</h4>

        <ol className="codeofconduct-list">
          <li>Publicar contenido que incite, promueva, justifique o facilite la comisión de delitos, faltas o cualquier actividad ilícita conforme a la legislación peruana.</li>
          <li>Utilizar la Aplicación para coordinar o facilitar la comisión de actos delictivos.</li>
          <li>Generar alarma pública injustificada mediante Reportes falsos.</li>
          <li>Suplantar la identidad de otra persona, organización, autoridad o entidad pública.</li>
        </ol>

        <h4 className="codeofconduct-heading">D. Sobre la integridad técnica y operativa de Blue</h4>

        <ol className="codeofconduct-list">
          <li>Intentar vulnerar, eludir o desactivar las medidas de seguridad tecnológicas de la Aplicación.</li>
          <li>Realizar ingeniería inversa, descompilación, extracción de código fuente, bases de datos o algoritmos propiedad de Blue.</li>
          <li>Utilizar robots, spiders, scraper u otras herramientas automatizadas para extraer información de la plataforma sin autorización expresa.</li>
          <li>Crear múltiples cuentas con la misma identidad o con identidades falsas, o facilitar el acceso a un tercero no autorizado.</li>
        </ol>

        <h4 className="codeofconduct-heading">E. Sobre usos comerciales no autorizados</h4>

        <ol className="codeofconduct-list">
          <li>Utilizar Blue para fines comerciales, publicitarios, de promoción o prospección de clientes sin autorización previa y expresa de Blue.</li>
          <li>Incluir en los Reportes enlaces, números de contacto o referencias a productos, servicios o negocios particulares, salvo que estén directamente vinculados con el incidente reportado.</li>
        </ol>

        <h3 className="codeofconduct-subtitle">IV. RÉGIMEN DE SANCIONES</h3>

        <p className="codeofconduct-text">
          El incumplimiento del presente Código dará lugar a la aplicación de las siguientes medidas disciplinarias,
          sin perjuicio de las acciones civiles, penales o administrativas que correspondan conforme a la ley peruana:
        </p>

        <h4 className="codeofconduct-heading">1. Advertencia</h4>

        <p className="codeofconduct-text">
          Procederá en infracciones leves, cometidas por primera vez y sin generar perjuicio relevante a terceros
          o al orden público. La advertencia será notificada al correo electrónico registrado por el usuario.
        </p>

        <h4 className="codeofconduct-heading">2. Suspensión temporal</h4>

        <ul className="codeofconduct-list">
          <li><strong style={{color:'#3677FF'}}>Primera suspensión:</strong> 15 días calendario para infracciones leves o moderadas en primera ocasión.</li>
          <li><strong style={{color:'#3677FF'}}>Suspensión extendida:</strong> 30 días calendario en caso de reincidencia en infracciones leves o moderadas dentro de los 90 días siguientes al levantamiento de una suspensión anterior.</li>
        </ul>

        <p className="codeofconduct-text">
          Durante el período de suspensión, el usuario no podrá publicar Reportes, comentarios, interactuar con
          otros usuarios ni acceder a funcionalidades principales de la Aplicación.
        </p>

        <h4 className="codeofconduct-heading">3. Cancelación definitiva de la cuenta</h4>

        <p className="codeofconduct-text">
          Procederá de manera inmediata, sin necesidad de aplicación gradual previa, en los siguientes supuestos:
        </p>

        <ul className="codeofconduct-list">
          <li><strong style={{color:'#3677FF'}}>Reincidencia en infracciones después de haber cumplido una suspensión de 30 días.</strong></li>
          <li><strong style={{color:'#3677FF'}}>Publicación de Reportes falsos que generen alarma pública injustificada.</strong></li>
          <li><strong style={{color:'#3677FF'}}>Suplantación de identidad de otro usuario, autoridad o entidad.</strong></li>
          <li><strong style={{color:'#3677FF'}}>Acoso, amenazas, difusión de contenido ilegal, incitación a la violencia o a la comisión de delitos.</strong></li>
          <li><strong style={{color:'#3677FF'}}>Obtención indebida, almacenamiento o difusión de datos personales de otros usuarios.</strong></li>
          <li><strong style={{color:'#3677FF'}}>Cualquier conducta que ponga en riesgo la integridad física o psicológica de los usuarios o de terceros.</strong></li>
          <li><strong style={{color:'#3677FF'}}>Utilización de la plataforma para coordinar actividades ilícitas.</strong></li>
        </ul>

        <h4 className="codeofconduct-heading">4. Reporte a las autoridades competentes</h4>

        <p className="codeofconduct-text">
          En los casos en que la conducta del usuario pueda constituir un delito o falta penal, Blue se reserva
          el derecho de poner los hechos en conocimiento de la Policía Nacional del Perú, el Ministerio Público
          u otras entidades competentes, sin necesidad de comunicación previa al infractor.
        </p>

        <h3 className="codeofconduct-subtitle">V. PROCEDIMIENTO SANCIONADOR</h3>

        <ol className="codeofconduct-list">
          <li><strong style={{color:'#3677FF'}}>Inicio del procedimiento:</strong> Blue podrá iniciar de oficio o a solicitud de cualquier usuario, mediante el correo soporte@blue.com, la verificación de una presunta infracción.</li>
          <li><strong style={{color:'#3677FF'}}>Notificación y descargos:</strong> El usuario será notificado a su correo electrónico registrado y tendrá un plazo de 5 días hábiles para presentar sus descargos.</li>
          <li><strong style={{color:'#3677FF'}}>Resolución:</strong> Blue emitirá una resolución motivada dentro de los 15 días hábiles siguientes a la recepción de los descargos o al vencimiento del plazo.</li>
          <li><strong style={{color:'#3677FF'}}>Recurso de impugnación:</strong> El usuario podrá impugnar la sanción ante soporte@blue.com dentro de los 5 días hábiles siguientes a la notificación.</li>
        </ol>

        <h3 className="codeofconduct-subtitle">VI. DEBER DE REPORTAR CONDUCTAS INFRACTORAS</h3>

        <p className="codeofconduct-text">
          Los usuarios que tengan conocimiento de una posible infracción deberán reportarlo a través del correo
          soporte@blue.com con el asunto “Reporte de Usuario”, o mediante la funcionalidad de denuncia habilitada
          dentro de la Aplicación.
        </p>

        <ul className="codeofconduct-list">
          <li>Identificación del usuario denunciado.</li>
          <li>Descripción clara y precisa de la conducta presuntamente infractora.</li>
          <li>Enlace o referencia al Reporte, comentario o interacción donde ocurrió.</li>
          <li>Medios probatorios disponibles.</li>
          <li>Blue garantiza la confidencialidad de la identidad del denunciante, salvo requerimiento judicial o legal.</li>
        </ul>

        <h3 className="codeofconduct-subtitle">VII. RESPONSABILIDAD INDIVIDUAL DEL USUARIO</h3>

        <p className="codeofconduct-text">El usuario es el único responsable de:</p>

        <ul className="codeofconduct-list">
          <li>La veracidad, exactitud y oportunidad de la información contenida en sus Reportes.</li>
          <li>Las consecuencias civiles, penales o administrativas derivadas del incumplimiento del presente Código.</li>
          <li>Las interacciones que mantenga con otros usuarios dentro o fuera de la plataforma.</li>
          <li>Blue actúa exclusivamente como intermediario tecnológico y no asume responsabilidad por la conducta de los usuarios fuera del entorno digital de la Aplicación.</li>
        </ul>

        <h3 className="codeofconduct-subtitle">VIII. MODIFICACIONES DEL CÓDIGO</h3>

        <p className="codeofconduct-text">
          Blue se reserva el derecho de actualizar o modificar el presente Código en cualquier momento, publicando
          la versión actualizada en la Aplicación y su sitio web institucional. El uso continuado de Blue implicará
          la aceptación de los cambios.
        </p>

        <h3 className="codeofconduct-subtitle">IX. LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h3>

        <p className="codeofconduct-text">
          El presente Código se rige por las leyes de la República del Perú. Cualquier controversia derivada de su
          interpretación o aplicación se sujetará a lo dispuesto en los Términos y Condiciones de Blue.
        </p>

        <p className="codeofconduct-date">Vigente desde: 05 / 05 / 2026</p>
      </div>
    </section>
    </>
  )
}
