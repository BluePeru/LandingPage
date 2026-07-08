import Link from "next/link";

export default function ContactSuccessPage() {
  return (
    <section className="contact-success-section">
      <div className="aurora aurora-left"></div>
      <div className="aurora aurora-right"></div>

      <div className="contact-success-card">
        <div className="contact-success-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M20 6L9 17l-5-5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.4"
            />
          </svg>
        </div>

        <span className="contact-label">MENSAJE ENVIADO</span>

        <h1 className="contact-success-title">Gracias por contactarnos</h1>

        <p className="contact-success-description">
          Hemos recibido tu mensaje correctamente. Nuestro equipo de soporte se pondrá en contacto contigo a través de tu correo
          electrónico en un plazo máximo de 48 horas hábiles.
        </p>
        
        <div className="contact-success-actions">
          <Link href="/" className="contact-success-primary">
            Volver al inicio
          </Link>
          <Link href="/contacto" className="contact-success-secondary">
            Enviar otro mensaje
          </Link>
        </div>
      </div>
    </section>
  );
}
