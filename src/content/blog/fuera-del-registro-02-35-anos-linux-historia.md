---
title: "De un cuarto en Helsinki al polvo de Marte: 35 años de la revolución Linux"
description: "Se cumplen 35 años del mensaje de Linus Torvalds que cambió la historia de la informática. De un proyecto personal en un cuarto oscuro a mover internet, consolas, smartphones y vehículos espaciales. Esta es la historia de Linux repleta de anécdotas, guerras tecnológicas y el giro de su mayor enemigo."
pubDate: 2026-08-25
author: "Luis Pereida"
tags: ["Linux", "Open Source", "Linus Torvalds", "Historia", "Tecnologia"]
image: "../../assets/images/blog/linux-35-anos.png"
series: "fuera-del-registro"
seriesTitle: "Fuera del Registro"
seriesOrder: 2
---

El sonido rítmico de un teclado mecánico IBM Model M retumba en las paredes de un pequeño y desordenado dormitorio en Helsinki, Finlandia. Es tarde por la noche a finales de agosto de 1991. La única fuente de luz en la habitación es el tenue resplandor fosforescente verde y negro de un ruidoso monitor CRT de 14 pulgadas, que proyecta sombras largas sobre la cara de un agotado estudiante universitario de 21 años. Hay tazas con restos de café frío esparcidas sobre el escritorio y sus ojos están rojos tras semanas de pelearse con el código fuente en C y las interrupciones del procesador x86 en ensamblador. 

*Linus Torvalds* no tenía dinero. Había comprado su computadora con un procesador 386 a pagos mensuales que apenas podía costear, estaba frustrado por las severas limitaciones del sistema operativo educativo *MINIX* y ni soñando podía pagar miles de dólares por una licencia de *UNIX* profesional. Él solo quería un emulador de terminal para conectarse a los servidores de su universidad. Pero, como suele pasar en esta vida, una cosa llevó a la otra: para que el emulador funcionara bien necesitó escribir un controlador de disco, luego un conmutador de tareas, luego un sistema de archivos... y sin darse cuenta, tenía entre manos el embrión de un núcleo.

Con un suspiro de cansancio, abre su cliente de noticias de Usenet, redacta un breve mensaje para el grupo `comp.os.minix` y presiona `Enter`. 

> *"Hola a todos los que usan minix. Estoy haciendo un sistema operativo (libre) (solo un hobby, no será algo grande ni profesional como gnu) para clones 386(486) AT..."*

Linus pensó que era solo un pasatiempo personal. Creyó que a nadie le importaría demasiado. Estaba rotundamente equivocado. Ese simple toque a la tecla `Enter` desencadenó el efecto dominó más masivo y destructivo para el software privativo en la historia de la ciencia de la computación.

---

Hoy, 25 de agosto, se cumplen **exactamente 35 años** desde que aquel histórico correo electrónico fue enviado al mundo. 

Treinta y cinco años de un proyecto que nació en la penumbra de un dormitorio universitario y terminó convirtiéndose en el motor invisible sobre el que se sostiene la civilización humana moderna. Hoy en **Fuera del Registro**, vamos a adentrarnos en la fascinante historia de Linux en estricto orden cronológico: sus feroces guerras con académicos, las apuestas multimillonarias que aterrorizaron a Wall Street, la furia que dio origen a herramientas esenciales del desarrollo y cómo su mayor enemigo terminó rindiéndose a sus pies.

## "Los hombres de verdad escriben sus propios drivers" y la gran guerra con Tanenbaum

Para entender la chispa que encendió la comunidad, hay que recordar que Linux no creció en un ambiente pacífico ni diplomático. Apenas unos meses después del anuncio, en enero de 1992, Andrew Tanenbaum, el reputado profesor universitario y creador de MINIX, abrió un hilo en Usenet con un título incendiario: **"LINUX is obsolete"** (*Linux está obsoleto*). 

Tanenbaum argumentaba que los núcleos monolíticos (donde todo el sistema corre en un solo espacio de memoria, como Linux) eran un paso atrás hacia los años 70, y que el futuro pertenecía exclusivamente a la elegancia teórica de los micronúcleos (*microkernels*). Linus, famoso por su temperamento directo y sin filtros, no se quedó callado. Respondió apasionadamente que si MINIX era un micronúcleo era solo porque Tanenbaum era profesor y le gustaba la teoría, mientras que Linux estaba diseñado para solucionar problemas del mundo real sobre hardware real.

Aquella discusión no desmotivó a los *hackers* de la época; al contrario, funcionó como gasolina pura. Se creó una cultura de comunidad indomable bajo la célebre máxima que circulaba por las listas de correo: *"Real men write their own drivers"* (*Los hombres de verdad escriben sus propios controladores*). Mientras las grandes corporaciones cobraban miles de dólares por licencias de software y soporte técnico, cientos de desarrolladores anónimos alrededor del globo pasaban noches en blanco desensamblando hardware, enviando parches en disquetes o por correo electrónico y escribiendo controladores directamente contra los registros del silicio para tarjetas gráficas y controladoras de disco oscuro.

> **protip >** La decisión más brillante de Linus Torvalds en 1992 no fue técnica, sino legal: cambió la licencia original de Linux por la **GNU GPLv2**. Esto garantizó que cualquiera pudiera ver, modificar y usar el código, pero con una condición innegociable conocida como *copyleft*: cualquier mejora debía ser liberada públicamente bajo la misma licencia. Esa cláusula de reciprocidad impidió que las corporaciones secuestraran el proyecto para privatizarlo.

## El terremoto corporativo y el cheque de mil millones de IBM

A medida que el nuevo milenio se aproximaba, la industria corporativa empezó a notar que aquel "sistema de estudiantes" era inexplicablemente más estable y rápido que los servidores comerciales carísimos. 

En 1999, durante el apogeo de la burbuja *dot-com*, una joven empresa llamada **Red Hat** salió a la bolsa de valores. Su oferta pública inicial rompió récords y demostró por primera vez al mundo financiero que se podían generar ganancias millonarias regalando el código fuente y cobrando exclusivamente por soporte, certificación y servicios empresariales.

Pero la verdadera bomba nuclear corporativa cayó en enero de **2001**. La mítica empresa IBM descolocó por completo al mercado financiero al anunciar una inversión gigantesca de **1,000 millones de dólares en Linux** a través de su campaña *"Peace, Love, Linux"*. Wall Street pensó que la directiva del Gigante Azul había perdido el juicio: ¿cómo ibas a meter un billón de dólares a un sistema operativo mantenido por "voluntarios en internet"? 

La apuesta de IBM rindió frutos estratégicos colosales. Validó a Linux en los centros de datos de las empresas de Fortune 500 y abrió la puerta para que el software libre se convirtiera en el estándar de facto de la infraestructura empresarial. Aquella jugada culminaría décadas después, en 2019, cuando IBM terminó adquiriendo Red Hat por la astronómica cifra de **34,000 millones de dólares**, en su momento la compra de software más grande de la historia y, hasta el día de hoy, el acuerdo más colosal jamás realizado en el mundo del *open source*.

## Del "cáncer" a "Microsoft ❤️ Linux" (La guerra fría de Microsoft)

La adopción masiva de Linux provocó pánico en los pasillos de Redmond, Washington. En junio de **2001**, en el punto más álgido de la competencia comercial, el entonces CEO de Microsoft, Steve Ballmer, pronunció una frase que quedó grabada a fuego en los anales de la tecnología:

> *"Linux es un cáncer que se adhiere, en el sentido de la propiedad intelectual, a todo lo que toca."*

Durante más de una década, Microsoft ejecutó una agresiva estrategia de guerra fría: financió campañas de desprestigio, apoyó demandas judiciales dudosas sobre patentes y calificó al software de código abierto como una amenaza directa para la economía mundial.

Sin embargo, la realidad de la ingeniería terminó imponiéndose. Las empresas no querían pagar licencias costosas de Windows Server para sus plataformas web, y cuando la computación en la nube explotó, los clientes demandaban Linux. Ballmer y su equipo no pudieron detener la avalancha de pingüinos y terminaron reconociendo el fracaso de su estrategia.

En **2014**, el timón de Microsoft cambió de manos. **Satya Nadella** asumió la dirección ejecutiva de la compañía con un enfoque pragmático y una comprensión brutal del mercado: si Microsoft quería competir contra Amazon Web Services en la nube, no podía obligar a los desarrolladores a usar exclusivamente Windows Server. La infraestructura del software moderno ya pertenecía a Linux. 

En un evento público en octubre de ese mismo año, Nadella dejó atónita a la prensa y a los veteranos de la comunidad al pararse frente a una pantalla gigante proyectada con tres palabras que antes sonaban a utopía: **"Microsoft ❤️ Linux"**. Aquel cambio de rumbo no se quedó en un simple truco de relaciones públicas; se tradujo en decisiones de ingeniería que sacudieron la industria. En 2016, Microsoft dio un golpe sobre la mesa al lanzar **WSL** (*Windows Subsystem for Linux*), integrando por primera vez en la historia un entorno de comandos e incluso un núcleo Linux nativo (WSL 2) dentro de las entrañas de Windows. De la noche a la mañana, los desarrolladores ya no necesitaban lidiar con particiones complicadas de *dual-boot* ni sufrir el lastre de máquinas virtuales pesadas para ejecutar `bash`, levantar contenedores de `docker` o compilar herramientas de código abierto.

Ese mismo año, la compañía desembolsó cuotas de patrocinio máximo para unirse a la *Linux Foundation* como miembro Platinum, sentándose en la misma mesa directiva con las firmas que antes combatía. La integración al ecosistema abierto fue acelerada: liberaron el código fuente de .NET Core, convirtieron a **VS Code** en el editor de código abierto predilecto por la comunidad Linux y, en 2018, desembolsaron 7,500 millones de dólares para adquirir **GitHub**, convirtiéndose en uno de los principales impulsores del desarrollo colaborativo. Muchos aún lloran por eso.

Hoy en día se vive la paradoja más fascinante de la computación moderna: más del 60% de los núcleos de procesamiento en la nube corporativa de Microsoft Azure ejecutan distribuciones de Linux en lugar de Windows Server. El mayor imperio del software privativo no solo fracasó en su intento de destruir a Linux; terminó convirtiendo al pingüino en el corazón latente de su propio negocio. Si no puedes con el enemigo, únete a él. 

## El coraje de un fin de semana que creó Git

De vuelta en el desarrollo del núcleo, para el año 2002 la comunidad de desarrolladores de Linux se había vuelto tan masiva que administrar los parches por correo electrónico era insostenible. Por ello, adoptaron un software de control de versiones propietario llamado **BitKeeper**, cuyo creador les cedió licencias gratuitas.

Todo cambió drásticamente en abril de **2005**. Tras una amarga disputa pública en la que un desarrollador de Linux (Andrew Tridgell, creador de Samba) intentó hacer ingeniería inversa de los protocolos de BitKeeper, la empresa decidió revocar de inmediato las licencias gratuitas a los desarrolladores del kernel. El desarrollo de Linux amenazaba con paralizarse por completo.

Linus Torvalds no perdió tiempo negociando ni lamentándose. Se retiró a su casa del 3 al 7 de abril de 2005 y, motivado por una mezcla de rabia, frustración y genialidad técnica, programó una herramienta de control de versiones distribuido totalmente nueva. La llamó **Git** (término del argot británico que significa "persona desagradable"). 

En menos de dos semanas, el núcleo de Linux ya se estaba administrando sobre Git. Hoy en día, no solo Linux usa esta herramienta: prácticamente todo el software moderno del planeta, desde las aplicaciones en tu teléfono hasta los sistemas de los bancos mundiales, se construye y despliega utilizando el sistema de control de versiones que Linus programó en un arranque de furia de un fin de semana.

## De las consolas de videojuegos al polvo de Marte

Linux comenzó una conquista silenciosa pero implacable hacia cada rincón de la tecnología humana. No se limitó a computadoras personales o servidores corporativos; su versatilidad le permitió infiltrarse en dispositivos cotidianos, infraestructuras invisibles y explorar más allá de los límites de nuestro planeta.

La primera gran ola de consumo masivo comenzó en los bolsillos del mundo. En 2005, Google adquirió una pequeña *startup* llamada Android Inc. Tres años después, en 2008, se presentó el primer teléfono comercial corriendo sobre un núcleo Linux adaptado. Hoy en día, más de 3,300 millones de dispositivos móviles funcionan gracias a ese mismo corazón de código abierto. Al mismo tiempo, el sistema conquistó el hogar: desde televisores inteligentes hasta millones de *routers* domésticos y la revolucionaria **Raspberry Pi** lanzada en 2012, que acercó la programación a una nueva generación de estudiantes en todo el globo.

Pero la verdadera revolución invisible ocurrió en los cimientos de la red. En 2006, ingenieros de Google aportaron al núcleo de Linux una función discreta llamada `cgroups` (*control groups*) junto con los espacios de nombres (*namespaces*). Nadie imaginó en su momento que estas primitivas internas del kernel darían origen en 2013 a la revolución de los contenedores con **Docker** y posteriormente a **Kubernetes**. Toda la arquitectura *Cloud Native* que sostiene hoy el tráfico masivo de plataformas como Netflix, Spotify o la banca digital existe únicamente porque el núcleo de Linux aprendió a aislar procesos de manera eficiente.

En la cima del rendimiento computacional, el dominio fue aplastante. Para noviembre de 2017 se alcanzó una marca histórica irrefutable: el 100% de las 500 supercomputadoras más potentes del planeta ejecutaban distribuciones de Linux. Simultáneamente, la industria automotriz adoptó *Automotive Grade Linux* (AGL), llevando al sistema a gestionar desde cuadros de instrumentos digitales hasta los cerebros informáticos de los vehículos eléctricos modernos como los de Tesla.

El viaje del pingüino superó incluso la gravedad terrestre. En 2013, los astronautas de la Estación Espacial Internacional (ISS) tomaron la decisión de reemplazar Windows XP por Debian Linux en sus computadoras de control de vuelo por razones de estabilidad crítica frente al *malware*. Poco después, **SpaceX** confió la navegación de sus cohetes Falcon 9 y las cápsulas Dragon a nodos redundantes ejecutando Linux. El clímax espacial ocurrió en abril de 2021, cuando el rover *Perseverance* de la NASA liberó en Marte al helicóptero *Ingenuity*: el primer vehículo a motor en realizar un vuelo controlado en otro planeta operaba con un kernel Linux adaptado corriendo sobre un procesador de teléfono móvil. Sí, ahora hay pingüinos volando en la atmósfera marciana, por más increíble que suene esto.

Finalmente, cayó la última fortaleza que parecía inalcanzable: el entretenimiento. Durante décadas existió la pesada broma de que "en Linux no se puede jugar". Todo cambió cuando Gabe Newell, cofundador de Valve, temió el cierre del ecosistema de Windows y decidió apostar por la libertad del código abierto. Valve invirtió millones en desarrollar **Proton** (una capa que traduce instrucciones de DirectX a Vulkan en tiempo real) y lanzó en 2022 la consola portátil **Steam Deck** operando con **SteamOS** (basado en Arch Linux). La jugada demostró que los videojuegos AAA más exigentes del mercado podían ejecutarse de forma impecable sobre Linux, transformando para siempre la industria del PC gaming.

## Ctrl + D

Hace 35 años, un joven estudiante de 21 años tecleó en la oscuridad de su habitación que su proyecto era "solo un hobby" y que "no sería nada grande ni profesional". Entendio que **lo más importante es nunca dejar de preguntar** y no se detuvo. 

El viaje de Linux es la demostración de lo que ocurre cuando la colaboración abierta, la disciplina técnica y la libertad del conocimiento se unen frente a los monopolios establecidos. Linux no solo transformó la industria del código, redefinió para siempre cómo la humanidad construye infraestructura y ciencia a escala global.

Desde un modesto procesador 386 en Helsinki hasta las dunas rojas de Marte, la revolución del software libre sigue más viva y fuerte que nunca.