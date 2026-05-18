"use client";

import { useState } from "react";

export default function EarlyAccessPage() {
  const [language, setLanguage] = useState<"es" | "en">("es");

  const content = {
    es: {
      label: "ACCESO ANTICIPADO",
      title: "Blue: mapa de calor de seguridad para Lima, Perú",
      p1: (
        <>
          Lima tiene un problema serio con la información sobre incidentes de
          seguridad: está en todas partes, pero al mismo tiempo es difícil de
          encontrar, ordenar y visualizar. <strong>Blue</strong> nace como una
          propuesta para ayudar a resolver ese problema.
        </>
      ),
      p2: (
        <>
          La aplicación recopila reportes de incidentes desde distintas fuentes,
          los geolocaliza y los muestra como mapas de calor en tiempo real
          utilizando indexación hexagonal H3. Esto puede ser útil para personas
          que se movilizan por la ciudad y, a futuro, también para sectores como
          seguros, logística e inmobiliario.
        </>
      ),
      highlight: (
        <>
          El modo invitado ya está disponible. Solo debes tocar{" "}
          <strong>“Explorar sin cuenta”</strong> en la pantalla de inicio de
          sesión y podrás ingresar.
        </>
      ),
      subtitle: "Cómo probar Blue",
      steps: [
        {
          title: "Únete al grupo de testers",
          desc: "Accede al grupo de Google necesario para participar en la prueba.",
          url: "https://groups.google.com/g/blue-b1",
        },
        {
          title: "Acepta participar en la prueba",
          desc: "Haz opt-in para habilitar el acceso como tester en Google Play.",
          url: "https://play.google.com/apps/testing/com.biorlabs.blue",
        },
        {
          title: "Instala la aplicación",
          desc: "Descarga Blue desde Google Play usando la misma cuenta de Google.",
          url: "https://play.google.com/store/apps/details?id=com.biorlabs.blue",
        },
      ],
      warning:
        "⚠️ Usa la misma cuenta de Google para unirte al grupo y para acceder a Google Play.",
      final:
        "Si también estás probando apps, puedes responder con tu aplicación y una captura. Yo haré lo mismo. Como prueba de compromiso, actualmente estoy probando otras aplicaciones de la comunidad.",
      thanks: "¡Gracias por apoyar Blue! 🙌",
    },
    en: {
      label: "EARLY ACCESS",
      title: "Blue: crime heatmap for Lima, Peru",
      p1: (
        <>
          Lima has a serious crime data problem: information is everywhere, but
          difficult to find, organize and visualize. <strong>Blue</strong> is my
          attempt to help solve that problem.
        </>
      ),
      p2: (
        <>
          The app collects incident reports from different sources, geolocates
          them, and displays them as live heatmaps using H3 hexagonal indexing.
          It can be useful for people navigating the city and, eventually, for
          sectors such as insurance, logistics and real estate.
        </>
      ),
      highlight: (
        <>
          Guest mode is fully functional. Just tap{" "}
          <strong>“Explorar sin cuenta”</strong> on the login screen and you are
          in.
        </>
      ),
      subtitle: "How to test Blue",
      steps: [
        {
          title: "Join the testers group",
          desc: "Access the Google Group required to participate in the test.",
          url: "https://groups.google.com/g/blue-b1",
        },
        {
          title: "Opt in to the test",
          desc: "Enable your access as a tester through Google Play.",
          url: "https://play.google.com/apps/testing/com.biorlabs.blue",
        },
        {
          title: "Install the app",
          desc: "Download Blue from Google Play using the same Google account.",
          url: "https://play.google.com/store/apps/details?id=com.biorlabs.blue",
        },
      ],
      warning:
        "⚠️ Use the same Google account for the Group and the Play Store.",
      final:
        "If you are also testing apps, reply with your app and a screenshot. I will do the same. As proof of commitment, I am currently testing other apps from the community.",
      thanks: "Appreciate your support! 🙌",
    },
  };

  const t = content[language];

  return (
    <section className="earlyaccess-section">
      <div className="earlyaccess-card">
        <span className="earlyaccess-label">{t.label}</span>

        <div className="earlyaccess-language-switch">
          <button
            type="button"
            className={language === "es" ? "active" : ""}
            onClick={() => setLanguage("es")}
          >
            🇪🇸 Español
          </button>

          <button
            type="button"
            className={language === "en" ? "active" : ""}
            onClick={() => setLanguage("en")}
          >
            🇺🇸 English
          </button>
        </div>

        <h1 className="earlyaccess-title">{t.title}</h1>

        <p className="earlyaccess-text">{t.p1}</p>

        <p className="earlyaccess-text">{t.p2}</p>

        <div className="earlyaccess-highlight">{t.highlight}</div>

        <h2 className="earlyaccess-subtitle">{t.subtitle}</h2>

        <div className="earlyaccess-steps">
          {t.steps.map((step, index) => (
            <a
              key={step.url}
              href={step.url}
              target="_blank"
              rel="noopener noreferrer"
              className="earlyaccess-step"
            >
              <span>{index + 1}</span>

              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="earlyaccess-warning">{t.warning}</div>

        <p className="earlyaccess-text">{t.final}</p>

        <p className="earlyaccess-thanks">{t.thanks}</p>
      </div>
    </section>
  );
}