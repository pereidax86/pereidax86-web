# Reglas del Proyecto (`pereidax86-web`)

## Formato y Diagramas
- **Diagramas siempre en Mermaid:** En este proyecto (tanto en artículos del blog como en guías rápidas/cheatsheets), utiliza siempre bloques de código `mermaid` (`flowchart`, `sequenceDiagram`, `stateDiagram-v2`, etc.) para representar arquitecturas, flujos, redes o estructuras visuales. No utilices diagramas en arte ASCII (`text`) a menos que se solicite explícitamente.
- **Prohibido usar guiones largos (`—`):** Nunca utilices guiones largos (*em-dashes*, `—`) ni semirrayas (`–`) en los artículos del blog, guías o textos del proyecto. En su lugar, utiliza signos de puntuación naturales como comas, paréntesis, dos puntos o punto y coma.

## Imágenes y Recursos Multimedia
- **Formato WebP Obligatorio:** Toda nueva imagen que se genere, cree o incorpore al proyecto (portadas de blog, cheatsheets, diagramas exportados o assets en `src/assets/images/`) debe estar obligatoriamente en formato WebP (`.webp`). Al solicitar o generar imágenes con el subagente `image-generator` o herramientas externas, se debe exigir siempre la salida y guardado en `.webp`. Si se recibe un recurso en formato PNG, JPG o similar, debe convertirse a `.webp` antes de ser referenciado en el frontmatter o en el contenido.

## Redacción de Artículos de Blog
- **Skill de Redacción:** Al redactar, estructurar o revisar entradas del blog, básate siempre en el skill del proyecto `.agents/skills/pereidax86-blog-writer/SKILL.md`. 
- **Voz y Firmas del Autor:** Mantén el tono conversacional, el humor/sarcasmo y analogías cotidianas, los bloques `> **protip >**`, la estructura modular de la serie correspondiente y la sección de cierre obligatoria `## Ctrl + D` con la frase *"lo más importante es nunca dejar de preguntar"*.

## Flujo de Trabajo en Git y Publicación
- **Ramas Efímeras y Prefijos de Contenido:** Las ramas de artículos son temporales y se eliminan tras hacer merge a `main`. Utiliza siempre el prefijo `content/`:
  - **Artículos sueltos / individuales:** Una rama por artículo (ejemplo: `content/nombre-del-post`).
  - **Series interconectadas o lotes:** Una sola rama por serie/lote (ejemplo: `content/linux-esencial-6-7-8`) para revisar la coherencia y los enlaces cruzados juntos sin romper dependencias.
