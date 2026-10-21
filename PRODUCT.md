# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Audiencia principal (perfiles en formación):** Estudiantes, autodidactas y perfiles junior de TI que buscan aprender Linux, ciberseguridad, Open Source e inteligencia artificial sin barreras de entrada, utilizando analogías claras y explicaciones paso a paso.
- **Audiencia secundaria (profesionales en activo):** Administradores de sistemas (SysAdmins), ingenieros DevOps y perfiles Senior con mayor experiencia que consultan la bitácora técnica, las series especializadas (como CISSP, OWASP Top 10, Ansible o almacenamiento en Linux) y las guías rápidas (`cheatsheets`) como material de referencia práctica.
- **Comunidad multiplataforma y entorno profesional:** Seguidores de `@pereidax86` provenientes de redes sociales de formato corto o streaming (TikTok, YouTube, Instagram, Twitch, LinkedIn, Substack, Facebook) que buscan profundizar en los temas, así como organizadores de eventos y colegas que consultan ponencias y credenciales verificables.
- **Contexto estratégico interno (no mostrar como texto literal en la interfaz):** El sitio y su contenido buscan consolidar a Luis Pereida como un referente técnico y divulgador en la región de Guadalajara en torno a Linux, ciberseguridad, Open Source e inteligencia artificial, manteniendo un equilibrio entre cercanía didáctica para principiantes y rigor técnico para perfiles avanzados.

## Product Purpose

`pereidax86.com` es el hub educativo, repositorio de conocimiento técnico y centro de comunidad personal de Luis Pereida (`@pereidax86`). Su propósito es desmitificar la tecnología compleja y hacer accesible el conocimiento que ocurre detrás de una terminal mediante tres pilares de contenido: artículos profundos y series técnicas ("Bitácora del SysAdmin"), guías rápidas de referencia listas para consultar o imprimir (`cheatsheets`), y material de charlas y conferencias (`presentations`).

El éxito del producto se mide por su capacidad de transformar conceptos complejos en aprendizaje accionable para cualquier nivel de experiencia y por servir como puente duradero entre el descubrimiento en redes sociales y el estudio práctico.

## Positioning

Un espacio de divulgación y referencia técnica donde el rigor de la ingeniería de sistemas y la ciberseguridad certificada se explica sin elitismo. A diferencia de los blogs puramente académicos o la documentación oficial árida, `pereidax86.com` parte de la premisa de que cualquier concepto técnico complejo puede explicarse con una analogía simple, respaldando cada enseñanza con experiencia real en administración de sistemas Linux, contenedores, automatización y seguridad ofensiva/defensiva.

## Operating Context

- **Transición desde redes sociales:** Muchos visitantes llegan desde videos cortos o transmisiones en vivo de `@pereidax86` (impulsados también por el banner flotante de suscripción en páginas internas) para copiar comandos, revisar diagramas de arquitectura o leer una guía completa.
- **Consulta práctica junto a la terminal e impresión:** Las guías rápidas (`cheatsheets`) están clasificadas por nivel de dificultad (`principiante`, `intermedio`, `avanzado`) y diseñadas tanto para lectura rápida en pantalla como para impresión física (`printable: true`).
- **Archivo y soporte de ponencias:** La sección de presentaciones funciona como registro público y material de apoyo de las charlas impartidas por Luis Pereida (vinculado a su perfil de speaker en Sessionize).

## Capabilities and Constraints

- **Arquitectura técnica:** Sitio web estático construido con Astro 5 (`https://pereidax86.com`), Tailwind CSS v4 (`@tailwindcss/vite`), colecciones de contenido tipadas (`blog`, `cheatsheets`, `presentations`), generación de RSS (`/rss.xml`), Sitemap, `robots.txt` y datos estructurados JSON-LD (`Person` y `BlogPosting`).
- **Descubrimiento y filtrado:** El blog cuenta con filtrado dinámico por series temáticas (`cissp-2024`, `owasp-top-10`, `linux-esencial`, `linux-almacenamiento`, `ansible`, `ciberseguridad-basica`, `fuera-del-registro`, `reflexiones`) y buscador interactivo con autocompletado de etiquetas (`#tags`).
- **Diagramación técnica en Mermaid:** Todos los diagramas de arquitectura, redes, flujos o estados en artículos del blog y guías rápidas se representan mediante bloques `mermaid` renderizados en el cliente; no se utiliza arte ASCII salvo solicitud explícita.
- **Restricción ortotipográfica obligatoria:** Está prohibido utilizar guiones largos (em-dashes) o semirrayas (en-dashes) en artículos, guías o textos del proyecto; siempre deben emplearse signos de puntuación naturales como comas, paréntesis, dos puntos o punto y coma.

## Brand Commitments

- **Identidad y autoría:** Luis Pereida (`@pereidax86`), Ingeniero en Sistemas y Maestro en TIC, especialista en SysAdmin y Ciberseguridad, vinculado profesionalmente a **SysAdminCtl Services** (`sysadminctl.services`).
- **Declaración de identidad y filosofía:** *"Yo soy Luis Pereida y hago ciberseguridad para todos"* y *"Creo que cualquier concepto técnico complejo puede explicarse con una analogía simple. Mi meta es romper barreras y hacer el conocimiento accesible para todos."*
- **Voz y tono:** En español, cercano, didáctico, apasionado por el software libre y la terminal ("pantalla negra y letras blancas"), combinando empatía hacia quien empieza desde cero con precisión técnica para el profesional experimentado.

## Evidence on Hand

- **Certificaciones e insignias verificables (`src/assets/badges/`):**
  - Certified Ethical Hacker (CEH) por EC-Council (ID `ECC3657809142`, verificable en ASPEN).
  - Red Hat Certified System Administrator (RHCSA, verificable en Credly).
  - Red Hat Certified Specialist in Virtualization (verificable en Credly).
  - Red Hat Certified Specialist in Containers (verificable en Credly).
  - IBM Cloud Advocate v2 (verificable en Credly).
- ** Estado de formación continua:** Preparación activa en `CISSP & Advanced Red Teaming`.
- **Activos de identidad y prueba social:** Avatar vía Gravatar con animación en video (`/video/subscribete.mp4`), gráfico de actividad de contribuciones en GitHub en tiempo real (`github-contribution-grid-snake-dark.svg`) y presencia activa verificada bajo el handle `@pereidax86` en TikTok, YouTube, Instagram, LinkedIn, GitHub, Twitch, Facebook, Substack y Sessionize.
- **Límites de evidencia:** El trabajo futuro no debe inventar testimonios de clientes, métricas de audiencia falsas, precios de consultoría no definidos ni certificaciones adicionales no listadas.

## Product Principles

1. **Claridad pedagógica con rigor Senior:** Explicar cada tema partiendo de una analogía accesible para el estudiante o perfil junior, sin omitir la profundidad técnica, los comandos reales ni los matices de arquitectura que valora un profesional Senior.
2. **Utilidad directa en la terminal:** Priorizar guías accionables, ejemplos reproducibles, diagramas claros en Mermaid y material imprimible de consulta rápida por encima de contenido teórico o decorativo.
3. **Autoridad demostrada con cercanía:** Construir prestigio técnico y liderazgo en la comunidad mediante enseñanza abierta, credenciales verificables y soluciones prácticas, evitando la jerga excluyente y las afirmaciones autopromocionales vacías.
4. **Puente fluido entre redes y estudio profundo:** Facilitar que quien descubre a `@pereidax86` en contenido breve encuentre en la web una estructura clara para profundizar, buscar por serie o etiqueta y continuar aprendiendo.

## Accessibility & Inclusion

- Respeto estricto a las preferencias del sistema operativo y navegador del usuario mediante soporte para reducción de movimiento (`prefers-reduced-motion: reduce`) y reducción de transparencia (`prefers-reduced-transparency: reduce`), garantizando fondos sólidos de alto contraste y lectura cómoda en sesiones largas de estudio.
