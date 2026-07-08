import Link from "next/link";
import type { ReactNode } from "react";

const deletionSteps = [
  {
    title: "Envía un correo electrónico",
    description: (
      <>
        Escribe a soporte@b1peru.com desde la dirección de correo asociada a tu cuenta de Blue o también puedes usar
        nuestro formulario de{" "}
        <Link href="/contact" className="deleteaccount-inline-link">
          contacto
        </Link>
        .
      </>
    ),
  },
  {
    title: "Identifica tu cuenta",
    description:
      "Indica claramente tu nombre de usuario o correo electrónico y el motivo de la solicitud (opcional) para ayudarnos a mejorar.",
  },
  {
    title: "Confirmación y proceso",
    description:
      "Nuestro equipo de soporte confirmará la recepción de tu solicitud en un plazo de 48 horas hábiles. La eliminación definitiva se completará en un máximo de 7 días naturales.",
  },
] satisfies Array<{ title: string; description: ReactNode }>;

const deletedData = [
  "Perfil de usuario (nombre, foto, biografía)",
  "Credenciales de acceso y tokens",
  "Historial de reportes y eventos creados",
  "Configuraciones personalizadas",
  "Contactos de emergencia asociados",
  "Registros de ubicación histórica",
];

const retentionItems = [
  {
    title: "Backups:",
    description:
      "Por razones de seguridad e integridad del sistema, los datos eliminados pueden permanecer en copias de seguridad cifradas por un periodo adicional de hasta 30 días, tras los cuales se sobrescriben permanentemente.",
  },
  {
    title: "Datos Anónimos:",
    description:
      "Blue conserva datos agregados y anónimos (que no pueden vincularse a un usuario específico) con fines estadísticos y de análisis de riesgo hexagonal para beneficio de la comunidad.",
  },
  {
    title: "Obligaciones Legales:",
    description:
      "En casos excepcionales, podemos conservar ciertos registros mínimos si existe una obligación legal o requerimiento judicial vigente.",
  },
];

export default function DeleteAccountPage() {
  return (
    <section className="deleteaccount-section">
      <div className="deleteaccount-shell">
        <header className="deleteaccount-header">
          <div className="deleteaccount-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M9 4h6m-8 4h10m-8 0v10m6-10v10M6 8l1 12h10l1-12"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div>
            <h1>Eliminación de Cuenta y Datos</h1>
            <p>Blue Perú</p>
          </div>
        </header>

        <div className="deleteaccount-intro">
          En Blue, valoramos tu privacidad y te ofrecemos el control total sobre tus datos. Si deseas dejar de
          utilizar nuestra plataforma y eliminar de forma permanente tu cuenta y toda la información asociada, puedes
          solicitarlo siguiendo los pasos detallados a continuación.
        </div>

        <div className="deleteaccount-group">
          <h2 className="deleteaccount-title deleteaccount-title-blue">
            <span aria-hidden="true">i</span>
            Pasos para solicitar la eliminación
          </h2>

          <div className="deleteaccount-steps">
            {deletionSteps.map((step, index) => (
              <article className="deleteaccount-step" key={step.title}>
                <span>{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="deleteaccount-divider" />

        <div className="deleteaccount-group">
          <h2 className="deleteaccount-title deleteaccount-title-green">
            <span aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3l7 3v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6l7-3z"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </span>
            ¿Qué datos se eliminan?
          </h2>

          <div className="deleteaccount-data-grid">
            {deletedData.map((item) => (
              <div className="deleteaccount-data-item" key={item}>
                <span aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="deleteaccount-group">
          <h2 className="deleteaccount-title deleteaccount-title-yellow">
            <span aria-hidden="true">!</span>
            Periodos de retención y excepciones
          </h2>

          <div className="deleteaccount-retention">
            {retentionItems.map((item) => (
              <article className="deleteaccount-retention-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
