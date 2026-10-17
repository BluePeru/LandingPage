# Revisión SEO de Blue Perú

Revisión del código y de las respuestas públicas de https://b1peru.com/ realizada el 17 de octubre de 2026.

## Cambios preparados en este proyecto

- Testimonios deja de aparecer en la página y en la navegación. Se conserva su componente para poder reactivarlo.
- Instagram conserva https://www.instagram.com/blue_peruoficial/.
- Se añade TikTok con https://www.tiktok.com/@blue.peru, el destino del enlace proporcionado.
- Se incorpora `/favicon.png`, cuadrado de 96 × 96 píxeles, a partir del logo existente, y se declara en los metadatos.
- Se corrige el idioma del documento a `es-PE` y se sustituye la descripción genérica por una descripción de la plataforma.

Estos cambios son locales; requieren un despliegue para aparecer en el sitio público.

## Hallazgos y prioridades pendientes

1. **Contenido en el HTML inicial.** La portada publicada responde con HTTP 200, pero no incluye el encabezado principal ni la navegación en el HTML inicial. En el código, `ClientWrapper` devuelve únicamente `Loader` hasta que se ejecuta JavaScript. Conviene renderizar siempre el contenido y mostrar la animación de carga como una capa superpuesta. Google puede ejecutar JavaScript, pero servir el contenido inicial facilita su procesamiento y evita depender de esa etapa. Referencia: [SEO para JavaScript](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=es).

2. **Icono en Google.** El código original no declara favicon y `/favicon.ico` devuelve HTTP 404 en producción. Eso es consistente con el icono ausente, aunque no demuestra qué tiene almacenado Google. El nuevo PNG proporciona un icono cuadrado en una URL estable; después de desplegarlo, hay que comprobar que `/favicon.png` responde HTTP 200 y que la portada contiene su enlace `rel="icon"`. Google decide si lo muestra y cuándo actualiza el resultado. Referencia: [requisitos de favicon](https://developers.google.com/search/docs/appearance/favicon-in-search?hl=es-419).

3. **Sitemap y rastreo.** `/sitemap.xml` y `/robots.txt` devuelven HTTP 404. Conviene añadir un sitemap de las páginas públicas y un robots.txt que lo anuncie, y enviar el sitemap en Search Console. La ausencia de robots.txt por sí sola no impide el rastreo. No se ha comprobado el estado de indexación en la cuenta de Search Console.

4. **Portada duplicada y metadatos por página.** `/` y `/home` renderizan la misma portada. Conviene elegir una URL principal y redirigir la otra o declarar su canonical correctamente, conservando la navegación a las secciones. Las páginas también heredan el mismo título y descripción: conviene dar títulos y descripciones propios a Contacto, Quiénes Somos y Sectores. Evitar un canonical global que apunte todas las páginas a la portada.

5. **Identidad y vistas al compartir.** Añadir datos estructurados `Organization` y `WebSite` con el nombre Blue Perú, dominio, logo y perfiles oficiales; preparar metadatos Open Graph y una imagen para compartir. El logo de `Organization` ayuda a identificar la marca y tiene una función distinta al favicon. Referencia: [datos de organización](https://developers.google.com/search/docs/appearance/structured-data/organization?hl=es).

6. **Carga de la página.** El loader usa `logo2.png`, de unos 2 MB, para una imagen de bienvenida. Conviene optimizarla y revisar el coste del iframe del mapa con PageSpeed Insights. No se ha medido una puntuación de rendimiento.

## Después del despliegue

Inspeccionar la URL de la portada en Google Search Console, comprobar la versión publicada y solicitar una nueva indexación. La actualización no es inmediata y no garantiza que Google muestre el favicon. Referencia: [solicitar un nuevo rastreo](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=es).
