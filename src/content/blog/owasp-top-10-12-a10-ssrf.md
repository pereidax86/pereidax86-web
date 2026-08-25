---
title: "A10: SSRF: Cuando tu servidor se convierte en el atacante"
description: "El gran final del OWASP Top 10. Descubre cómo los hackers engañan a tu servidor para que ataque a tu propia red interna por ellos."
pubDate: 2026-07-22
author: "Luis Pereida"
tags: ["OWASP", "Ciberseguridad", "Desarrollo", "Web", "SSRF", "Cloud"]
image: "../../assets/images/blog/owasp-a10-ssrf.png"
series: "owasp-top-10"
seriesTitle: "OWASP Top 10"
seriesOrder: 12
---

Llegamos al final del viaje. Después de semanas analizando cómo los atacantes rompen la [Criptografía (A04)](/blog/owasp-top-10-06-a04-cryptographic-failures), se saltan la [Autenticación (A07)](/blog/owasp-top-10-09-a07-authentication-failures) y se aprovechan de nuestra falta de [Monitoreo (A09)](/blog/owasp-top-10-11-a09-security-logging), cerramos nuestra serie del OWASP Top 10 con una de las vulnerabilidades más modernas, elegantes y destructivas de la era del *Cloud Computing*.

Hablemos de **A10 - Server-Side Request Forgery (SSRF)** (Falsificación de Peticiones del Lado del Servidor).

A diferencia de otros ataques donde el hacker intenta penetrar directamente tu red desde afuera rompiendo puertas, en un SSRF, el atacante ni siquiera se molesta en intentar entrar. En su lugar, usa su ingenio para convencer a **tu propio servidor** de que haga el trabajo sucio por él. 

---

## El asistente corporativo: Entendiendo el SSRF

Imagina una corporación de alta seguridad. En el *lobby* del edificio hay un asistente sumamente amable y servicial (este es tu servidor web público). Las reglas de la empresa dictan que absolutamente nadie de la calle puede pasar del *lobby* para entrar al archivo secreto (tu red interna y bases de datos). 

Un buen día, un criminal cibernético llega al *lobby*. Sabe perfectamente que no puede cruzar las puertas blindadas, así que se acerca al asistente y le dice: *"Hola, soy un cliente. Por favor, ve al archivo secreto en el piso 5, saca el reporte financiero de este año y tráemelo al lobby"*.

El asistente, cuyo trabajo principal es atender y procesar peticiones, tiene una credencial de empleado que le permite pasar por todas las puertas de seguridad internas. Obedece ciegamente, va al archivo, toma el reporte y se lo entrega al criminal en sus propias manos.

Eso es exactamente un ataque de SSRF. Ocurre cuando tu aplicación web tiene una funcionalidad que acepta una URL externa enviada por un usuario (por ejemplo, para descargar una imagen de perfil, leer un feed RSS, importar datos o conectarse a una API externa) y no valida hacia dónde apunta realmente esa URL. El atacante manda una URL que apunta a los sistemas internos de tu empresa, y tu servidor (el "asistente"), que ya está adentro de la red de confianza, ejecuta la petición creyendo que es normal y le devuelve el resultado prohibido al atacante.

---

## Casos reales de SSRF

Con la adopción masiva de la nube (AWS, Azure, GCP) y el auge de las arquitecturas de microservicios, el SSRF pasó de ser una curiosidad teórica a convertirse en la pesadilla principal de las empresas modernas. Los atacantes lo utilizan de diversas formas letales:

### El robo de credenciales en la Nube (El famoso caso Capital One)

En 2019, uno de los bancos más grandes de EE.UU. sufrió un ataque devastador debido a un SSRF clásico. En AWS (y otras nubes), todos los servidores virtuales tienen acceso a una dirección IP mágica interna: `169.254.169.254`. Esta dirección sirve para que el servidor le pregunte a la infraestructura de la nube *"¿Cuáles son mis contraseñas y permisos actuales de Identity and Access Management (IAM)?"* (Servicio de Metadatos).

El atacante encontró una funcionalidad web vulnerable de importación de archivos y le dijo al servidor: *"Oye, por favor descarga y muéstrame el contenido de la URL `http://169.254.169.254/latest/meta-data/`"*. El servidor web, obedeciendo ciegamente, hizo la petición a su propio servicio de metadatos, obtuvo sus credenciales maestras de infraestructura y se las entregó al atacante. Con esas llaves en mano, el atacante logró conectarse directamente a la nube, evadiendo todos los cortafuegos (*Firewalls*), para entrar a los *buckets* internos y robar los datos personales de más de 100 millones de clientes en un instante.

### Explotación de Microservicios y APIs Internas

En las arquitecturas modernas, es común tener múltiples microservicios (ej. Facturación, Panel de Control) que se comunican entre sí. Muchos desarrolladores cometen el error de deshabilitar la autenticación en estas APIs asumiendo que *"como solo son accesibles desde la red interna (ej. `http://internal-billing-api`), no necesitamos validación de tokens"*.

A través de un SSRF, un atacante puede enviar una URL como `http://internal-billing-api/api/v1/refund?userId=999&amount=5000`. El servidor web público recibe la URL, realiza la petición hacia la red interna y el microservicio de facturación procesa el reembolso de $5,000 dólares sin hacer preguntas, ya que la petición proviene de un servidor "de confianza". El atacante acaba de manipular tu lógica de negocio financiera sin tener ninguna credencial.

### Escaneo de Puertos y Bases de Datos Ocultas (Blind SSRF)

Muchas bases de datos (como Redis, Memcached o clústeres de MongoDB) no tienen contraseñas seguras porque los ingenieros asumen que están súper protegidas y aisladas en una subred privada (ej. IP `192.168.1.50`).

Un atacante aprovecha un SSRF enviando iterativamente miles de URLs como `http://192.168.1.50:6379`, `http://192.168.1.51:6379`, etc. Aunque tu aplicación no le devuelva la respuesta exacta al atacante en la pantalla (lo que se conoce como *Blind SSRF*), el atacante puede medir **cuánto tiempo tarda el servidor en responder**. Si la petición tarda 5 milisegundos, significa que el puerto está abierto; si tarda 5 segundos por un *timeout*, el puerto está cerrado. De esta forma, el atacante usa tu propio servidor público como un radar para mapear y escanear por completo la topología de tu red interna invisible.

### Lectura de Archivos Locales y Código Fuente (Protocolo file://)

La mayoría de los desarrolladores asume ingenuamente que una URL siempre empieza con `http://` o `https://`. ¿Pero qué pasa si el atacante envía `file:///etc/passwd` o `file:///var/www/html/config.php`? 

Si tu código no valida explícitamente el esquema (el protocolo), la librería HTTP subyacente de tu servidor (en NodeJS, Python o PHP) interpretará que quieres leer un archivo de su propio disco duro local. Tu servidor terminará enviándole al atacante un documento de texto con todos los usuarios del sistema operativo, o peor aún, el archivo de configuración que contiene las contraseñas maestras de tu base de datos en texto plano.

### Ataques avanzados con protocolos exóticos (gopher:// y dict://)

El SSRF no se limita a peticiones web tradicionales. Si las librerías del servidor lo permiten (como pasa frecuentemente en cURL con PHP), un atacante puede usar esquemas exóticos como `gopher://` o `dict://`. 

El protocolo `gopher://` permite enviar *paquetes binarios crudos* arbitrarios a cualquier puerto. Un atacante experto puede construir una carga útil que se traduzca exactamente en los comandos binarios que entiende una base de datos Redis o Memcached. De esta manera, el atacante no solo lee información de la red interna, sino que puede inyectar código directamente en la memoria de tus bases de datos privadas usando tu servidor web como caballo de Troya.

---

## ¿Cómo protegerte del SSRF?

Detener un ataque de SSRF requiere una estrategia de defensa en profundidad. No basta con validar el código; debes limitar agresivamente los permisos de red de tu infraestructura. La filosofía absoluta debe ser "Denegar por defecto". Aquí te explico a detalle las mejores prácticas de la industria:

### Usa Listas Blancas (*Allow-lists*) estrictas

Si tu aplicación tiene una función para importar datos desde servidores externos (por ejemplo, conectarse a la API de GitHub o descargar un archivo de un servidor asociado), jamás aceptes cualquier URL genérica. 

Debes crear una lista estricta (*allow-list*) en tu código con los **dominios exactos** que tu servidor tiene permitido contactar. Tu código debe validar rigurosamente la URL contra esta lista *antes* de iniciar la petición HTTP. No pierdas el tiempo creando listas negras (*block-lists*) prohibiendo ciertas palabras; los hackers expertos siempre encontrarán formas creativas de evadirlas usando diferentes formatos de codificación.

### Bloquea Direcciones IP Internas y Reservadas

A veces necesitas permitir que el usuario ingrese cualquier URL (como en una aplicación que genera miniaturas de sitios web). En estos casos, tu código debe tomar el dominio proporcionado, resolverlo a una dirección IP, y rechazar inmediatamente la petición si la IP pertenece a rangos privados o reservados.

Debes bloquear explícitamente a nivel de código cualquier petición que intente ir a:
- Rangos locales como `localhost`, `127.0.0.1` o `0.0.0.0`.
- Rangos de red privada corporativa como `192.168.x.x`, `10.x.x.x` y `172.16.x.x`.
- La IP mágica de metadatos de la nube: `169.254.169.254`.

### Deshabilita esquemas de URL innecesarios

Si tu aplicación solo necesita hacer peticiones a servidores web, asegúrate de configurar la librería HTTP de tu lenguaje (como Axios en NodeJS, o cURL en PHP) para que **únicamente acepte esquemas `http://` y `https://`**. 

Deshabilita explícitamente protocolos peligrosos como `file://`, `gopher://`, `dict://`, o `ftp://`. Si omites este paso, le estás dejando la puerta abierta al atacante para leer tus archivos locales o enviar paquetes binarios crudos a bases de datos internas.

### No devuelvas respuestas crudas al cliente

Incluso si el atacante logra ejecutar un *Blind SSRF*, puedes mitigar el impacto controlando cuidadosamente lo que le muestras. Si tu servidor hace una petición para traer una imagen de perfil de otra web, **nunca** le regreses el texto completo (HTML, JSON o texto plano) de la respuesta al usuario. 

Debes verificar estrictamente que lo que descargaste realmente sea una imagen. Esto se hace analizando los *bytes mágicos* del archivo (las firmas en hexadecimal que indican que es un PNG o un JPG válido) antes de mostrarla en pantalla. De esta forma, si el atacante engañó al servidor para contactar la base de datos interna, el atacante solo recibirá un error genérico diciendo "El archivo no es una imagen válida", y no podrá ver los datos robados.

### Actualiza a IMDSv2 en la Nube (Defensa contra el caso Capital One)

Si tu infraestructura corre en AWS, la defensa más efectiva contra el robo masivo de credenciales mediante SSRF es obligar a todos tus servidores a usar la versión 2 del Servicio de Metadatos (IMDSv2). 

A diferencia de la versión 1 (que solo requería que el servidor pidiera la URL mágica `169.254.169.254`), la versión 2 obliga a que el servidor primero solicite un *token de sesión criptográfico* mediante un encabezado HTTP especial y privado (`X-aws-ec2-metadata-token`), y luego incluya ese token en la petición final. Como un atacante que explota un SSRF básico generalmente solo controla la URL y no puede inyectar encabezados personalizados complejos, el ataque queda neutralizado instantáneamente.

### Segmentación de Red (Políticas de Cero Confianza)

No dejes que tu código sea tu única línea de defensa. A nivel de arquitectura de red, tu servidor web público (el que vive en la zona expuesta al internet) no debería tener permisos amplios para hablar con *todas* las bases de datos y microservicios internos del corporativo. 

Configura reglas de *Firewall* y Grupos de Seguridad (*Security Groups*) sumamente restrictivas para que el servidor web solo pueda conectarse a los puertos y servicios específicos que necesita para funcionar, denegando todo el resto del tráfico saliente (*Egress filtering*). Así, si el atacante logra ejecutar el SSRF y engaña a tu servidor, el *Firewall* quemará la petición automáticamente antes de que toque tus bases de datos secretas.

---

## Ctrl + D: El fin de nuestro viaje

Hemos llegado al final de nuestra aventura a través del OWASP Top 10. A lo largo de estos 10 artículos, hemos visto cómo los sistemas más modernos pueden caer ante descuidos en el [Diseño (A05)](/blog/owasp-top-10-07-a05-insecure-design), problemas de [Integridad (A08)](/blog/owasp-top-10-10-a08-software-integrity) o fallas lógicas brillantes como la que vimos hoy con el temido SSRF.

Si hay una lección fundamental que espero te lleves de toda esta serie, es que **la ciberseguridad no es un producto mágico que compras e instalas al final del ciclo de desarrollo; es una cultura integral que se construye línea por línea, desde el día uno.** No importa si eres un desarrollador *Junior* dando tus primeros pasos o un Arquitecto *Senior* de la nube, todos somos responsables de proteger la confianza que los usuarios depositan en nuestro código.

Ha sido un placer enorme escribir esta serie para ti. Sigue aprendiendo, sigue construyendo con seguridad desde el diseño, y por encima de todo, recuerda que **lo más importante es nunca dejar de preguntar** cómo funcionan realmente las cosas tras bambalinas. 

¡Nos vemos en el próximo artículo!
