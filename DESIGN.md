---
name: "Luis Pereida (@pereidax86)"
description: "Centro de mando translúcido y hub educativo sobre Linux, Ciberseguridad, Open Source e Inteligencia Artificial."
colors:
  obsidian-terminal: "#0a0a0a"
  smoked-glass: "rgba(23, 23, 23, 0.65)"
  smoked-glass-hover: "rgba(30, 30, 30, 0.75)"
  solid-charcoal: "#171717"
  elevated-slate: "#262626"
  sysadmin-blue: "#3b82f6"
  sysadmin-blue-bright: "#60a5fa"
  sysadmin-blue-deep: "#2563eb"
  kernel-purple: "#a855f7"
  kernel-purple-light: "#c084fc"
  daemon-green: "#22c55e"
  daemon-green-glow: "#4ade80"
  syntax-pink: "#f472b6"
  rss-amber: "#f97316"
  terminal-white: "#ffffff"
  ash-primary: "#e5e7eb"
  slate-secondary: "#d1d5db"
  muted-telemetry: "#9ca3af"
  glass-border: "rgba(255, 255, 255, 0.08)"
  specular-top: "rgba(255, 255, 255, 0.18)"
  grid-hairline: "#80808012"
typography:
  display:
    fontFamily: "Rubik, -apple-system, BlinkMacSystemFont, SF Pro Display, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Rubik, -apple-system, BlinkMacSystemFont, SF Pro Display, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Rubik, -apple-system, BlinkMacSystemFont, SF Pro Display, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Rubik, -apple-system, BlinkMacSystemFont, SF Pro Text, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.05em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.sysadmin-blue-deep}"
    textColor: "{colors.terminal-white}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.sysadmin-blue}"
    textColor: "{colors.terminal-white}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "10px 20px"
  button-glass:
    backgroundColor: "{colors.smoked-glass}"
    textColor: "{colors.sysadmin-blue-bright}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "10px 16px"
  button-glass-hover:
    backgroundColor: "{colors.smoked-glass-hover}"
    textColor: "{colors.terminal-white}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "10px 16px"
  chip-tech:
    backgroundColor: "{colors.smoked-glass}"
    textColor: "{colors.sysadmin-blue-bright}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "4px 10px"
  card-glass:
    backgroundColor: "{colors.smoked-glass}"
    textColor: "{colors.ash-primary}"
    rounded: "{rounded.xl}"
    padding: "24px"
  input-search:
    backgroundColor: "{colors.smoked-glass}"
    textColor: "{colors.ash-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "14px 40px 14px 44px"
---

# Design System: Luis Pereida (@pereidax86)

## Overview

**Creative North Star: "The Translucent Command Center"**

El sistema visual de `pereidax86.com` fusiona la honestidad técnica de una terminal Linux ("pantalla negra y letras blancas") con la calidez táctil de paneles de cristal ahumado inspirados en interfaces de escritorio modernas. Cada superficie está pensada para cumplir una doble misión: recibir sin intimidación al estudiante o autodidacta que aprende sus primeros comandos mediante analogías simples, y ofrecer al mismo tiempo la densidad, orden y precisión que un administrador de sistemas o especialista Senior espera de su entorno de trabajo.

La composición descansa sobre un lienzo oscuro profundo (`#0a0a0a`) recorrido por una retícula técnica de `24px x 24px` apenas perceptible, sobre la cual flotan módulos Bento translúcidos con iluminación cenital especular. El lenguaje visual rechaza de forma explícita dos extremos: por un lado, el cliché de "hacker de película" (lluvia de código verde fosforescente, calaveras o efectos glitch estridentes que dificultan la lectura); por otro, el minimalismo corporativo frío e impersonal que oculta la pasión por el Open Source.

**Key Characteristics:**
- Lienzo oscuro de alto contraste (`#0a0a0a`) con retícula milimétrica fija (`24px x 24px`) que evoca un plano de arquitectura de sistemas.
- Materiales de cristal ahumado (`.apple-glass`) con desenfoque óptico (`20px`), saturación al `180%` y borde superior especular (`rgba(255, 255, 255, 0.18)`).
- Dualidad tipográfica estricta: títulos geométricos y cercanos en **Rubik** combinados con telemetría, metadatos, rutas (`/var/log/...`) y código en **JetBrains Mono**.
- Señalización semántica viva mediante indicadores de estado pulsantes (como demonios de sistema activos) y codificación por color para dificultad y categorías.
- Degradación accesible de primera clase: conversión automática a superficies sólidas (`#171717`) cuando el usuario activa reducción de transparencia, e impresión limpia en papel (`@media print` A4) para las guías rápidas.

## Colors

La paleta es intencionalmente nocturna y de atmósfera controlada: los tonos neutros de carbón y obsidiana absorben el brillo de la pantalla para sesiones largas de lectura, mientras los acentos luminosos actúan como indicadores LED de estado y jerarquía sobre el cristal.

### Primary
- **SysAdmin Electric Blue** (`#3b82f6` / `#60a5fa` en texto y `#2563eb` en fondos sólidos): Color rector de identidad, enlaces interactivos, indicadores de lectura, bordes de enfoque y llamados a la acción principales.
- **SysAdmin Blue Bright** (`#60a5fa`): Variante luminosa para etiquetas en monoespaciado, enlaces sobre cristal oscuro y el lema principal bajo el nombre del autor.

### Secondary
- **Kernel Purple** (`#a855f7` / `#c084fc`): Acento secundario reservado para filosofía del autor, cajas de navegación de series de artículos (`SeriesBox`), citas destacadas (`blockquote`), sección de presentaciones y degradados de marca junto al azul primario.

### Tertiary
- **Daemon Active Green** (`#22c55e` / `#4ade80`): Indicador semántico de actividad en tiempo real (`ACTIVE` en `/var/log/github`, barra de estado de aprendizaje actual y nivel `Principiante` en guías rápidas).
- **Syntax Pink** (`#f472b6`): Reservado exclusivamente para fragmentos de código en línea (`<code>`) dentro de artículos y guías, asegurando que los comandos destaquen de inmediato dentro de un párrafo.
- **RSS Amber** (`#f97316`): Señal puntual para sindicación RSS y alertas de dificultad intermedia/avanzada (junto con amarillo `#facc15` y rojo `#f87171` en insignias de dificultad).

### Neutral
- **Obsidian Terminal** (`#0a0a0a`): Lienzo base de toda la aplicación (`bg-neutral-950`).
- **Smoked Glass** (`rgba(23, 23, 23, 0.65)` / `#171717` sólido): Superficie principal de tarjetas, contenedores Bento y barras flotantes.
- **Smoked Glass Hover** (`rgba(30, 30, 30, 0.75)`): Estado elevado de tarjetas y controles interactivos al pasar el cursor.
- **Terminal White** (`#ffffff`): Títulos principales (`h1`, `h2`, `h3`) y trazos de diagramas técnicos en Mermaid.
- **Ash Primary** (`#e5e7eb`) y **Slate Secondary** (`#d1d5db`): Cuerpo de lectura en artículos, descripciones de tarjetas y biografía.
- **Muted Telemetry** (`#9ca3af`): Metadatos secundarios, fechas, contadores de resultados y migas de pan.
- **Glass Border** (`rgba(255, 255, 255, 0.08)`) y **Specular Top** (`rgba(255, 255, 255, 0.18)`): Contorno perimetral y bisel superior de luz de cada módulo de cristal.

### Named Rules
**The Specular Rim Rule.** Ningún contenedor sobre el lienzo oscuro debe flotar sin definición perimetral: toda tarjeta `.apple-glass` lleva un borde translúcido de `1px` (`rgba(255, 255, 255, 0.08)`) con un borde superior más luminoso (`rgba(255, 255, 255, 0.18)`) que simula luz cenital real.

**The Inline Command Rule.** El tono **Syntax Pink** (`#f472b6`) sobre cápsula oscura (`#171717`) pertenece únicamente a comandos, rutas, banderas y código inline; nunca debe usarse como color decorativo en botones o títulos generales, salvo el acento propio de la marca TikTok en redes sociales.

**The Contrast Floor Rule.** Sobre superficies **Smoked Glass**, el texto informativo más tenue permitido es **Muted Telemetry** (`#9ca3af`, `text-gray-400`); evita tonos más oscuros (`#6b7280`) para garantizar legibilidad WCAG AA en tamaños pequeños.

## Typography

**Display Font:** Rubik (con fallback a `-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif`)
**Body Font:** Rubik (con fallback a `-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif`)
**Label/Mono Font:** JetBrains Mono (con fallback a `monospace`)

**Character:** La combinación de **Rubik** y **JetBrains Mono** equilibra humanidad y rigor de ingeniería. **Rubik**, con sus curvas ligeramente redondeadas y pesos contundentes (`700` y `800`), quita la rigidez intimidante a los títulos complejos; **JetBrains Mono** aporta el ADN de la terminal en cada etiqueta, fecha, filtro, ruta estilo Unix (`/var/log/github`) y bloque de código.

### Hierarchy
- **Display** (`800` ExtraBold, `clamp(2.25rem, 4vw, 3.75rem)` / `36px` a `60px`, line-height `1.05` a `1.08`, tracking `-0.035em`): Nombre del autor en el Hero y títulos principales (`h1`) de índices y artículos.
- **Headline** (`800` ExtraBold, `1.5rem` a `1.875rem` / `24px` a `30px`, line-height `1.15`, tracking `-0.03em`): Encabezados de secciones del hub (`Bitácora del sysadmin`, `Guías Rápidas`, `Presentaciones Tech`) y subtítulos `h2` de artículos (acompañados de barra lateral azul de `4px` o línea divisoria superior en guías).
- **Title** (`700` Bold, `1.125rem` a `1.25rem` / `18px` a `20px`, line-height `1.35`): Títulos de tarjetas de artículos (`h3`), subtemas técnicos y encabezados de módulos.
- **Body** (`400` Regular, `1rem` a `1.125rem` / `16px` a `18px`, line-height `1.625`, ancho de lectura acotado a `max-w-4xl`): Prosa didáctica en artículos del blog y guías rápidas.
- **Label / Telemetry** (`400` a `700` en **JetBrains Mono**, `0.6875rem` a `0.875rem` / `11px` a `14px`, line-height `1.4`): Píldoras de tecnologías, etiquetas `#tag`, tiempos de lectura, migas de pan, estados activos y botones de acción.

### Named Rules
**The Terminal Telemetry Rule.** Todo metadato estructural (fechas, tiempos de lectura, contadores de artículos, etiquetas `#tag`, niveles de dificultad, rutas y botones de acción secundaria) se compone obligatoriamente en **JetBrains Mono** (`font-mono`).

**The Tight Display Rule.** Los titulares en **Rubik** (`font-display`) aplican siempre un ajuste negativo de interletraje (`-0.03em` a `-0.035em`) y `font-optical-sizing: auto` para mantener una silueta compacta y editorial.

## Layout

El sistema emplea dos regímenes espaciales complementarios según el modo de uso de la superficie:

1. **Hub Principal (Modo Bento Viewport-Aligned):**
   - Contenedor máximo de `1280px` (`max-w-7xl`) centrado con márgenes horizontales progresivos (`16px` en móvil, `24px` en `sm`, `48px` en `md`, `64px` en `lg`).
   - En escritorio (`>= 1024px`), se organiza en tres grandes bloques de altura de pantalla:
     - **Bloque 1 (Hero de 3 columnas):** Columna de identidad y avatar (`1/3`) + columna de biografía, stack y filosofía (`1/3`) + columna de certificaciones verificables (`1/3`), separadas por `24px` a `40px` (`gap-6` a `2xl:gap-10`).
     - **Bloque 2 (Comunidad y Bitácora):** Grilla de 10 redes sociales (`max-w-4xl`, 10 columnas en desktop, 5x2 en móvil) seguida del **Bento Editorial 1 + 3** (artículo más reciente destacado en 7 columnas a la izquierda y 3 artículos recientes apilados en 5 columnas a la derecha).
     - **Bloque 3 (Recursos y Footer):** Grilla simétrica de 2 columnas (`md:grid-cols-2`, `gap-6 lg:gap-8`) para Guías Rápidas y Presentaciones Tech, cerrando con el pie de página de ancho completo.
   - En móvil y tablet (`< 1024px`), el bloque de Bitácora se transforma en un carrusel horizontal táctil (`snap-x snap-mandatory`) con tarjetas al `84%` del ancho en móvil y `50%` en tablet, acompañado de indicadores de posición (`#carousel-dots`).

2. **Superficies de Lectura y Estudio (Blog y Cheatsheets):**
   - Índices y cabeceras acotados a `1024px` (`max-w-5xl` en blog/presentaciones) o `896px` (`max-w-4xl` en cheatsheets), con grillas de tarjetas de 1 columna en móvil, 2 en tablet (`md:grid-cols-2`) y 3 en escritorio (`lg:grid-cols-3`, `gap-6` a `gap-8`).
   - Las guías rápidas (`cheatsheets/[...slug]`) incorporan una barra superior adherente (`sticky top-0 z-20`) para acciones rápidas (dificultad, índice, compartir e imprimir PDF) y un panel lateral flotante de tabla de contenidos (`w-72`) en pantallas `xl`.

## Elevation & Depth

El sistema utiliza **Tactile Glass & Specular Depth** (capas de cristal translúcido con luz especular y sombras ambientales profundas). La profundidad nunca depende de sombras grises difusas sobre blanco, sino de la superposición de cristal ahumado sobre la retícula técnica del fondo y del destello cromático de los bordes al interactuar.

### Shadow Vocabulary
- **Glass Ambient Elevation** (`box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)`): Sombra estructural base de todas las superficies `.apple-glass` y `.apple-glass-interactive`, combinada con `backdrop-filter: blur(20px) saturate(180%)`.
- **Interactive Blue Glow** (`box-shadow: 0 0 30px -5px rgba(59, 130, 246, 0.3)` / `border-color: rgba(59, 130, 246, 0.35)`): Halos luminosos de enfoque y hover sobre tarjetas interactivas y botones primarios.
- **Avatar Halo Gradient** (`linear-gradient(to right, #3b82f6, #6366f1, #9333ea)` con `blur`): Resplandor perimetral detrás de elementos de identidad clave y botones de redes sociales en estado `hover`.

### Named Rules
**The Specular Compression Rule.** Todo elemento interactivo de cristal (`.apple-glass-interactive`) responde al puntero iluminando su borde superior (`rgba(255, 255, 255, 0.3)`) y teñiendo su contorno con azul eléctrico (`rgba(59, 130, 246, 0.35)`), y responde al toque o clic físico con una micro-compresión elástica (`transform: scale(0.97)` en `180ms cubic-bezier(0.23, 1, 0.32, 1)`).

**The Solid Fallback Rule.** Cuando el sistema operativo solicita reducir la transparencia (`prefers-reduced-transparency: reduce`), todo desenfoque óptico se desactiva y las superficies `.apple-glass` pasan a carbón sólido (`#171717`), manteniendo intactos sus bordes para preservar la jerarquía espacial.

## Shapes

El lenguaje formal se basa en rectángulos de esquinas generosamente suavizadas que contrastan con la geometría ortogonal de la cuadrícula de `24px` del fondo:

- **Contenedores Bento y Módulos Principales (`16px` / `rounded-2xl`):** Utilizado en las tarjetas principales del Hero, contenedor del carrusel de blog, tarjetas de índice de artículos, caja de series (`SeriesBox`) y banner flotante.
- **Controles Interactivos, Tarjetas Internas y Buscador (`12px` / `rounded-xl`):** Aplicado en botones de acción, íconos de redes sociales, filas de certificaciones, filas de artículos secundarios, bloques de código `<pre>` y barra de búsqueda.
- **Píldoras Técnicas y Etiquetas de Código (`8px` / `rounded-lg` o `6px` / `rounded-md`):** Empleados en las etiquetas de tecnologías (`techStack`), badges de series y tags `#tag`.
- **Indicadores de Estado y Badges de Dificultad (`9999px` / `rounded-full`):** Reservado para el avatar circular, barra de estado en vivo (`Learning: CISSP...`), etiquetas de dificultad (`Principiante`, `Intermedio`, `Avanzado`) y botón flotante `ScrollToTop`.
- **Acentos Laterales Editoriales (`border-l-4`):** Los subtítulos `h2` dentro de artículos llevan un borde izquierdo sólido de `4px` en azul (`#3b82f6`), mientras que la tarjeta de filosofía y los `blockquote` llevan un borde izquierdo de `4px` en púrpura (`#a855f7`).

## Components

Los componentes comparten un carácter **táctil, nítido y con retroalimentación inmediata**, evitando estados estáticos mudos.

### Buttons
- **Shape:** Esquinas redondeadas medias (`12px` / `rounded-xl`), altura mínima táctil recomendada de `44px` en controles de navegación y acción.
- **Primary (`button-primary`):** Fondo azul intenso (`#2563eb`), texto blanco (`#ffffff`), tipografía `JetBrains Mono` en `12px` bold, sombra `rgba(59, 130, 246, 0.2)`.
- **Glass Action (`button-glass`):** Superficie `.apple-glass-interactive` (`rgba(23, 23, 23, 0.65)`), texto azul claro (`#60a5fa`) o gris claro (`#e5e7eb`), con flecha direccional (`→` o `←`) que se desplaza `4px` en `hover`.
- **Hover / Active:** Transición de `180ms cubic-bezier(0.23, 1, 0.32, 1)`; cambio de borde a `rgba(59, 130, 246, 0.35)` en dispositivos con puntero fino y compresión `scale(0.97)` al presionar.

### Chips
- **Style:** Tres familias claras:
  1. **Tech Stack Pills:** Superficie `.apple-glass-interactive`, radio de `8px`, ícono emoji a la izquierda + nombre en `JetBrains Mono` bold azul claro (`#93c5fd`).
  2. **Topic Tags (`#tag`):** Cápsula translúcida azul (`rgba(59, 130, 246, 0.1)`), borde `rgba(59, 130, 246, 0.2)`, texto en `JetBrains Mono` `10px` a `12px` (`#60a5fa`).
  3. **Series Filter Buttons (`.series-btn`):** Conmutador en `JetBrains Mono` `12px`; el estado activo usa fondo `#2563eb` con borde `#3b82f6`, y el estado inactivo usa `.apple-glass-interactive`.

### Cards / Containers
- **Corner Style:** `16px` (`rounded-2xl`) en contenedores de primer nivel y `12px` (`rounded-xl`) en tarjetas anidadas.
- **Background:** `rgba(23, 23, 23, 0.65)` con `backdrop-filter: blur(20px) saturate(180%)`.
- **Shadow Strategy:** Sombra ambiental profunda con bisel superior interno (`inset 0 1px 0 0 rgba(255, 255, 255, 0.08)`).
- **Border:** `1px solid rgba(255, 255, 255, 0.08)` con borde superior `rgba(255, 255, 255, 0.18)`.
- **Internal Padding:** Escala responsiva de `20px` (`p-5`) en móvil, `24px` (`sm:p-6`) en tablet/desktop y `32px` (`2xl:p-8`) en pantallas amplias.

### Inputs / Fields
- **Style:** Campo de búsqueda `#blog-search` sobre superficie `.apple-glass`, radio de `12px` (`rounded-xl`), ícono de lupa fijo a la izquierda y botón de limpieza (`Escape` / `×`) a la derecha, texto en `JetBrains Mono` `14px` (`#e5e7eb`) con placeholder en `#6b7280`.
- **Focus:** Anillo de enfoque azul translúcido (`ring-2 ring-blue-500/20`) y borde `rgba(59, 130, 246, 0.7)`.

### Navigation
- **Breadcrumbs:** Barra horizontal compacta en `JetBrains Mono` `12px` con ícono de inicio azul (`#3b82f6`), separadores `/` en gris oscuro y página actual truncada en `#60a5fa` semibold.
- **Sticky Cheatsheet Bar & Floating TOC:** En guías rápidas, barra superior fija con fondo `rgba(0, 0, 0, 0.95)` y `backdrop-blur-sm` que aloja el nivel de dificultad y los botones de Índice, Compartir e Imprimir PDF.

### Mermaid Technical Diagrams (Signature Component)
- **Propósito:** Representación visual obligatoria para arquitecturas, flujos y redes en artículos y guías rápidas.
- **Estilo:** Contenedor oscuro (`rgba(23, 23, 23, 0.8)`) con radio de `16px` (`rounded-2xl`) y borde `#262626`; nodos internos con relleno `#171717`, trazos y conectores en blanco puro (`#ffffff`, `1.5px` a `2px`) y tipografía heredada del sistema para máxima legibilidad sobre modo oscuro.

## Do's and Don'ts

### Do:
- **Do** utilizar las utilidades `.apple-glass` para contenedores estáticos y `.apple-glass-interactive` para cualquier tarjeta, botón o fila clicable del sistema.
- **Do** escribir todos los metadatos técnicos, fechas, filtros, etiquetas `#tag`, tiempos de lectura y rutas de estado en **JetBrains Mono** (`font-mono`).
- **Do** representar siempre arquitecturas, flujos y estructuras técnicas mediante bloques `mermaid` estilizados en alto contraste oscuro (`#171717` con trazos `#ffffff`).
- **Do** mantener un área interactiva mínima de `44x44px` en botones de cierre, filtros y controles táctiles en vistas móviles.
- **Do** preservar las reglas `@media print` en las guías rápidas (`cheatsheets`) para que se impriman en fondo blanco y texto negro sin elementos de navegación sobrantes.

### Don't:
- **Don't** utilizar guiones largos (em-dashes) ni semirrayas (en-dashes) en títulos, descripciones, microcopy de interfaz, artículos o guías; usa siempre comas, dos puntos, paréntesis o punto y coma.
- **Don't** utilizar diagramas en arte ASCII (`text`) para explicar redes, flujos o arquitecturas salvo solicitud explícita del usuario.
- **Don't** mezclar superficies antiguas sin cristal (`bg-neutral-900/50 border-neutral-800` aisladas) en nuevas tarjetas o botones interactivos cuando corresponda usar `.apple-glass-interactive`.
- **Don't** aplicar el color **Syntax Pink** (`#f472b6`) fuera de elementos `<code>` en línea o del ícono oficial de TikTok.
- **Don't** inventar certificaciones, métricas o testimonios no verificados; toda insignia técnica mostrada debe enlazar a su verificación oficial (Credly o ASPEN).
