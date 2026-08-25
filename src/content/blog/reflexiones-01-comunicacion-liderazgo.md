---
title: "El Skill que nadie te enseña en la universidad: Saber Comunicar"
description: "Dar una plática en el HackGDL me recordó algo fundamental: la herramienta técnica más poderosa de cualquier profesional no vive en ningún repositorio de GitHub. Vive en cómo explicas lo que sabes."
pubDate: 2026-03-18
author: "Luis Pereida"
tags: ["Liderazgo", "Comunicacion", "Habilidades", "Ciberseguridad", "Personal", "HackGDL"]
image: "../../assets/images/blog/comunicacion-tecnica-liderazgo.png"
series: "reflexiones"
seriesTitle: "Reflexiones & Carrera Tech"
seriesOrder: 1
---

El sábado pasado estuve en el **[HackGDL](https://hackgdl.net)**, uno de esos eventos que te recuerdan por qué entraste a este mundo de la tecnología. Tuve el honor de dar una plática, pero me fui con una reflexión mucho más grande que los slides que preparé.

Pero vamos paso a paso.

## ¿Qué es el HackGDL?

Si no lo conoces, el HackGDL es uno de los eventos de ciberseguridad más interesantes de México, organizado por y para la comunidad de Guadalajara. Es gratuito, es en español (y también en inglés), y es de esas rarezas donde la gente va de verdad a aprender y a compartir, no solo a poner en el CV que asistió a una conferencia.

El evento reúne a hackers éticos, investigadores de seguridad, estudiantes y profesionales del sector en un ambiente donde puedes ir desde un taller de pentesting de dispositivos móviles hasta una charla sobre IA y seguridad, pasando por retos CTF (*Capture the Flag*) en lo que ellos llaman "Pueblitos Mágicos": zonas temáticas especializadas donde puedes ensuciarte las manos y practicar. Esta edición 2026 se llevó a cabo del 14 al 16 de marzo, y la energía del lugar era exactamente la que uno necesita de vez en cuando: una sala llena de personas curiosas con ganas de aprender.

## Mi plática: Ciberseguridad con olor a Taco

Yo estuve presentando **"Ciberseguridad con olor a Taco: Cómo implementar NIST 2.0 en una PyME sin morir en el intento"**.

El título lo dice todo. El objetivo era sencillo pero ambicioso: tomar un framework de ciberseguridad que suena intimidante, el **NIST Cybersecurity Framework 2.0**, y aterrizarlo de manera práctica para pequeñas y medianas empresas mexicanas. Sin el lenguaje corporativo de las grandes consultoras, sin el tecnicismo que solo entiende quien ya sabe, y con ejemplos del día a día que cualquier dueño de negocio o responsable de TI en una PyME pueda aplicar.

*(Si quieres ver los slides completos, están disponibles [en la sección de presentaciones](/presentaciones) de esta misma web.)*

Lo que me sorprendió fue la reacción de la sala. Había perfiles muy distintos: desde estudiantes que apenas están empezando, hasta profesionales con años de experiencia en seguridad. Y sin embargo, la dinámica funcionó. La gente hizo preguntas, se rió con las referencias a los tacos, no funcionó mi referencia a la película "300", y al final del día varias personas se acercaron para platicar más.

Ahí fue cuando me cayó el veinte de algo que ya sabía, pero que a veces olvidamos en el día a día.

## El skill que no viene en ninguna certificación

Hay una habilidad que ningún temario de universidad, ninguna ruta de certificaciones y ningún bootcamp de programación te va a enseñar explícitamente, pero que determina, más que cualquier otra cosa, hasta dónde puede llegar un profesional técnico:

**Saber comunicar.**

Y lo curioso es que todos, en algún punto de nuestra carrera, lo sabemos. Hemos visto a ese compañero brillantísimo cuyas ideas nunca prosperan porque nadie lo entiende. Hemos estado en esa reunión donde el técnico más capaz del equipo no pudo convencer a nadie de su propuesta. O, siendo honestos, hemos sido ese técnico.

El problema no es falta de conocimiento. El problema es que asumimos que el conocimiento habla por sí solo. Y no habla. Nunca lo ha hecho.

Piénsalo así: un software increíblemente poderoso pero sin documentación, sin interfaz clara y sin soporte, simplemente no lo usa nadie. Por muy impresionante que sea su código por dentro, si nadie puede operarlo, no existe. El conocimiento técnico que no se comunica funciona exactamente igual: se queda encapsulado, sin impacto, sin adopción.

No me refiero solo a hablar bonito, eso lo hace cualquier vendedor; tampoco a dar presentaciones con diapositivas hermosas y perfectas. Me refiero a algo mucho más fundamental: **la capacidad de traducir lo que sabes al idioma de quien te escucha.**

Como técnicos, tenemos un defecto de fábrica. Llevamos años construyendo un vocabulario propio: ACL, CVE, zero-day, buffer overflow, latencia, throughput, contenedor, orquestación, cifrado asimétrico. Ese lenguaje nos hace eficientes cuando hablamos con colegas, pero se convierte en un muro cuando intentamos hablar con alguien fuera de nuestro gremio. Connection Timeout.

Y lo peor no es el muro en sí; lo peor es que muchas veces no nos damos cuenta de que existe. Hablamos con total convicción, usamos los términos correctos, explicamos la arquitectura con todo detalle... y del otro lado de la mesa hay personas asintiendo educadamente mientras en su cabeza la pantalla dice: *"loading... 0%"*.

Imagina presentar un análisis de vulnerabilidades a la junta directiva de una empresa. Llevas semanas trabajando en él, identificaste tres vectores críticos, tienes el CVE con toda su puntuación CVSS y hasta un diagrama de red. Das la presentación. Al terminar, el director te mira y pregunta: *"¿Y esto qué significa para nuestro negocio?"* Silencio incómodo. Ese silencio tiene un costo: el presupuesto que no te aprueban, la medida de seguridad que no se implementa, el riesgo que queda abierto.

Y el problema es que, en la vida real, muy pocas decisiones importantes las toman solo los técnicos.

## El mismo tema, tres audiencias completamente distintas

Imagina que tienes que explicar por qué necesitas presupuesto para actualizar la infraestructura de seguridad de tu empresa. El problema técnico es el mismo. La solución es la misma. Pero dependiendo de con quién estés hablando, el enfoque del mensaje tiene que cambiar radicalmente, porque cada audiencia tiene motivaciones y prioridades distintas:

**Con el equipo técnico** *(les hablas en términos de riesgo técnico y carga de trabajo)*:
> "Tenemos varios servicios expuestos sin WAF, los certificados vencen en 30 días y los logs de auditoría llevan 6 meses sin revisarse. Necesitamos asignar dos sprints a hardening antes de que esto caiga en un pentest."

Ellos entienden lo que es un WAF, un sprint y un pentest. Puedes ser específico. De hecho, *tienes* que serlo, o no van a dimensionar la urgencia.

**Con el gerente de operaciones** *(les hablas en términos de continuidad y costo operativo)*:
> "Hay tres puntos ciegos en nuestra operación donde un incidente nos podría dejar sin servicio durante horas. El costo de parchearlo ahora es una fracción de lo que costaría una reacción de emergencia después."

Aquí ya no importan los CVEs ni los logs. Lo que importa es que el negocio no se detenga y que los recursos se usen bien.

**Con el director general o el dueño del negocio** *(les hablas en términos de riesgo estratégico y reputación)*:
> "Si no tomamos acción antes de que acabe el trimestre, tenemos un riesgo real de multas regulatorias y de perder la confianza de nuestros clientes más grandes. La inversión se paga sola en el primer año."

A este nivel, el tecnicismo sobra. Lo que mueve la aguja es el impacto en el negocio: dinero, clientes y reputación.

---

Mismo problema. Misma solución técnica. Tres conversaciones completamente distintas. Y las tres son necesarias.

El técnico que solo sabe tener la primera conversación va a pasar su carrera esperando a que alguien más "lo entienda". El técnico que domina las tres tiene algo mucho más valioso que el conocimiento técnico en sí: tiene la capacidad de hacer que ese conocimiento se convierta en decisiones reales, en presupuesto aprobado, en equipos alineados. Tiene el poder de hacer que las cosas pasen.

## Comunicar no es simplificar. Es adaptar.

Aquí viene un matiz importante que me parece crítico aclarar porque se presta a malinterpretarse.

Adaptar el mensaje **no significa mentir, ni recortar la realidad, ni hablar como si la otra persona fuera tonta**. Significa entender qué es lo que le importa a tu audiencia y conectar tu mensaje con eso.

Un director de finanzas no es menos inteligente que tú; simplemente tiene métricas distintas. Le importan los riesgos, los costos, y el impacto al negocio. Si le hablas de CVEs y vectores de ataque, no es que no entienda la tecnología; es que eso no está en su mapa mental de decisiones.

**Tu trabajo como comunicador técnico es construir el puente entre tu mapa y el de ellos.**

Tengo un ejemplo personal que uso mucho. Cuando estaba estudiando la maestría y tenía que preparar un texto para entregar, uno de mis mejores filtros de calidad era escribirlo y dárselo a leer a mi esposa. Ella no se dedica a nada relacionado con la tecnología. Si ella podía entender mis ideas, si podía seguir el hilo sin preguntarme qué quería decir cada tercer párrafo, entonces el texto estaba bien escrito. Si tenía que explicarle algo en persona para que "tuviera sentido"... de vuelta al teclado.

Ese ejercicio me enseñó algo que ninguna rúbrica académica me pudo enseñar: **la claridad no es un atributo del texto, es un atributo de la relación entre el texto y quien lo lee**. Puedes tener el argumento más sólido del mundo, pero si tu audiencia necesita un traductor para entenderte, el problema definitivamente no es de ellos.

Eso es exactamente lo que intenté hacer con el NIST 2.0 y los tacos. No bajé el nivel del contenido; adapté el lenguaje para que el contenido llegara. Y la diferencia es enorme.

## El liderazgo empieza cuando aprendes a comunicar

En mis años de experiencia, he notado un patrón constante. Las personas que ascienden a roles de liderazgo técnico (arquitectos, CISOs, CTOs, líderes de equipo) no siempre son los más letrados técnicamente. A veces, ni siquiera son los más experimentados. También tengo la suerte de que he conocido a unas "verdaderas pistolas" en el tema técnico liderando equipos (de todo hay en la viña del Señor).

Pero sin importar si son genios absolutos o perfiles más generalistas, tienen algo en común que es innegociable: **saben traducir**. Saben hablarle a un CEO en una junta directiva, saben explicarle a un equipo de recién egresados por qué una decisión de arquitectura se tomó de cierta manera, y saben cómo convencer a un cliente escéptico de que el camino que proponen es el correcto, no imponiendo su autoridad técnica, sino hablando en el lenguaje de ese cliente.

La comunicación efectiva no es simplemente el "complemento" o la "habilidad blanda" que acompaña al conocimiento técnico. **Es el multiplicador**, es un skill técnico más que debes dominar con la misma disciplina con la que aprendes a hacer *troubleshooting* o a configurar un firewall.

Piénsalo en términos de impacto: un técnico brillante que no sabe comunicar tiene un impacto que está estrictamente limitado al radio de acción de sus propias manos y su propio teclado. En cambio, un técnico que sabe comunicar puede alinear a organizaciones enteras, influir en la estrategia corporativa a largo plazo, y hacer que su criterio técnico se convierta en decisiones reales y presupuesto ejecutado.

**Hacer más a través de los demás**

Al final, de eso se trata el liderazgo técnico. No de ser el que teclea más rápido ni el que resuelve todos los tickets críticos, sino de usar tu conocimiento para habilitar a otros, para guiar la estrategia y, en esencia, hacer mucho más a través de los demás.

## Entonces, ¿cómo se practica?

Lo mismo que cualquier otro skill técnico: practicando, con intención y con mucha retroalimentación.

Aquí te comparto algunas cosas que me han funcionado a mí:

- **Escribir para audiencias no técnicas.** Este blog, por ejemplo. El ejercicio de explicar conceptos de ciberseguridad o administración de sistemas de manera simple me ha obligado a entender realmente lo que sé, y a descubrir rápidamente lo que aún no domino por completo. 

- **Dar pláticas y talleres.** Eventos como el HackGDL son exactamente para eso. No esperes a sentirte un "experto completo" para compartir lo que sabes, porque la plática perfecta que nunca das no le sirve a nadie. Y si no te animas a empezar en un evento grande, no pasa nada: empieza en pequeños *meetups* de tu localidad, o incluso prepara una plática interna para tu propio equipo de trabajo. Internet también ayuda muchísimo; hay cientos de comunidades en línea buscando ponentes todo el tiempo.

- **Cambiar la forma en que pides feedback.** En lugar de preguntar un simple "¿entendiste?" (que pone toda la responsabilidad narrativa en la otra persona y suele recibir un "sí" por inercia), yo prefiero preguntar: *"¿Lo expliqué bien?"* o, mejor aún: *"¿Qué estuvo bien y qué se puede mejorar?"*. Esto te obliga a escuchar dónde los perdiste y cómo mejorar tu pedagogía.

- **Escuchar activamente cómo otros explican las cosas.** ¿Por qué algunas personas tienen la habilidad casi mágica de hacer que cosas complicadísimas parezcan obvias? Estúdialos. Analiza sus analogías. Roba sus técnicas. Adáptalas a tu estilo. ¡Inspírate!

## ctrl + D

Salí del HackGDL con las baterías recargadas, con nuevos contactos en el radar, y con la confirmación de que la comunidad de seguridad y tecnología en México tiene un nivel técnico impresionante.

Pero, sobre todo, salí con una convicción renovada: el mayor impacto que puede tener un profesional no está solo en lo que sabe hacer frente a una terminal, sino en a cuántas personas puede convencer de hacer lo correcto fuera de ella.

Dominar una herramienta, un framework o un lenguaje de programación te hace valioso. Aprender a comunicarlo a quien no lo domina, te hace **indispensable**.

Así que la próxima vez que alguien "de negocio" no entienda tu brillante propuesta técnica, antes de frustrarte y culparlos, hazte una pregunta honesta: ¿La estás explicando en su idioma, o en el tuyo?

Porque al final del día, **lo más importante es nunca dejar de preguntar**. Y esa pregunta empieza por uno mismo.
