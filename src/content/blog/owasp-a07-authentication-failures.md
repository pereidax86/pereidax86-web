---
title: "A07: Fallas de Autenticación: El guardia de seguridad que confía demasiado"
description: "Construir tu propio sistema de login desde cero es como inventar tu propia cerradura. Aprende por qué la autenticación es el talón de Aquiles de muchas aplicaciones."
pubDate: 2026-07-15
author: "Luis Pereida"
tags: ["OWASP", "Ciberseguridad", "Desarrollo", "Web", "Autenticación"]
image: "/images/blog/owasp-a07-authentication-failures.png"
---

Llegamos a la mitad de la semana y seguimos avanzando en nuestro [OWASP Top 10](/blog/owasp-top-10-introduccion). El lunes [aprendimos por qué las dependencias viejas son tuberías oxidadas (A06)](/blog/owasp-a06-vulnerable-components), y hoy toca hablar de una de las funciones que absolutamente todo desarrollador ha tenido que programar al menos una vez en su carrera: el módulo de *Login*.

Hablemos de **A07 - Fallas de Identificación y Autenticación** (*Identification and Authentication Failures*).

Históricamente, la autenticación ha sido el talón de Aquiles del desarrollo web porque parece engañosamente simple. La lógica básica que nos enseñan es: le pides al usuario un correo, una contraseña, haces una consulta en la base de datos y, si coinciden, le das acceso. Listo, tarea terminada, ¿verdad? 

El problema es que construir un sistema de *login* seguro es muchísimo más complejo que verificar si dos textos son iguales. Se trata de cómo proteges esas contraseñas, cómo previenes que un robot (bot) intente adivinar miles de claves por segundo, cómo manejas las sesiones una vez que el usuario ya entró, y cómo evitas que alguien secuestre esa sesión activa. En este proceso existen docenas de trampas mortales, y fallar en cualquiera de ellas significa entregarle las llaves de tu sistema a un completo desconocido.

---

## El guardia de seguridad del club exclusivo: Entendiendo las Fallas de Autenticación

Imagina que eres el dueño de un club nocturno súper exclusivo. En la puerta pones a un sistema de seguridad avanzado y un escáner biométrico. 

Un atacante llega, presenta una tarjeta de cartón dibujada con crayones que dice "Juan Pérez" y el escáner lo deja pasar sin validar contra la base de datos oficial. Más tarde, otro atacante llega y trata de adivinar el código del teclado probando números al azar a la velocidad de la luz: *"¿1234? ¿0000? ¿1111?"*... hasta que le atina a uno y el sistema lo deja pasar.

Finalmente, el escáner le otorga una pulsera VIP a un invitado legítimo. El invitado sale del club, le regala la pulsera a un ladrón y la puerta electrónica deja entrar al ladrón automáticamente porque "trae la pulsera oficial".

Este club es tu aplicación web. El escáner que acepta cartón es la falta de autenticación multifactor (MFA); adivinar códigos a la velocidad de la luz es un ataque de fuerza bruta; y la pulsera VIP que se transfiere sin control es una falla en el manejo de sesiones (tokens).

---

## Casos reales de Fallas de Autenticación y Sesiones

Este riesgo no se trata de una sola vulnerabilidad técnica, sino de una colección gigantesca de malas prácticas a la hora de gestionar las identidades, las contraseñas y las sesiones de los usuarios. Veamos las trampas más comunes:

### 1. *Credential Stuffing* y ataques de Diccionario

El ser humano es perezoso por naturaleza. Las estadísticas muestran que una inmensa mayoría de las personas usan la misma contraseña para su banco, su correo y el foro de gatitos al que se registraron hace 10 años. Si ese pequeño foro es hackeado y la base de datos se filtra, los atacantes usarán *bots* masivos para probar automáticamente ese mismo correo y contraseña en miles de sitios web (desde Netflix hasta tu aplicación). 

A esto se le suma el ataque de **Diccionario**: probar contraseñas ridículamente comunes como `123456`, `password` o el nombre de la empresa. Si tu sistema de *login* no bloquea estos intentos masivos, tus usuarios serán hackeados aunque tu código sea "seguro".

### 2. Contraseñas por defecto (El síndrome `admin/admin`)

Parece un chiste de la década de los 90s, pero sigue ocurriendo todos los días. Dispositivos de Internet de las Cosas (IoT), paneles de administración de WordPress, routers y bases de datos enteras son desplegados en producción con credenciales por defecto. Los hackers no necesitan vulnerar nada complejo; simplemente leen el manual de usuario de tu software y entran por la puerta principal usando las credenciales de fábrica.

### 3. Tokens JWT y sesiones eternas

Hacer *login* es solo el primer paso; después el servidor le entrega al navegador un "gafete" (generalmente una cookie de sesión o un token JWT) para que el usuario no tenga que poner su contraseña cada vez que hace clic en un botón. 

El gran error de los desarrolladores es generar un token JWT que dura meses o años y que **no se puede invalidar**. Si un hacker roba ese token (mediante un ataque XSS o porque el usuario se conectó en un cibercafé y no cerró sesión), el atacante tendrá acceso ilimitado a la cuenta. El servidor no tendrá forma de revocar el acceso rápidamente porque el token simplemente "nunca caduca".

### 4. Olvidé mi contraseña... y ahora todos la saben

Otra mina terrestre común son los flujos de "Recuperar Contraseña". Implementaciones mediocres permiten algo llamado **Enumeración de Usuarios**. Esto ocurre cuando el sistema te responde: *"Te hemos enviado un correo"* (confirmando que el correo existe) vs *"Este correo no está registrado"* (confirmando que no existe). Esto le permite a un atacante crear un diccionario exacto de qué correos atacar.

Peor aún son las famosas "Preguntas Secretas" ("¿Cuál es el nombre de tu primera mascota?" o "¿En qué ciudad naciste?"). En la era de las redes sociales, un atacante puede averiguar las respuestas a todas tus preguntas secretas con solo revisar tu Instagram durante cinco minutos.

### 5. Secuestro de Sesión (Session Hijacking)

Imagina que tu usuario inicia sesión correctamente, pero la aplicación web transfiere el ID de sesión abiertamente en la URL (ej. `midominio.com/dashboard?session_id=123`). Si el usuario copia ese enlace y se lo envía a un amigo por WhatsApp para mostrarle algo, le acaba de regalar su sesión activa a otra persona. Las sesiones jamás deben viajar en las URLs ni estar expuestas al código JavaScript del navegador.

---

## ¿Cómo asegurar la Autenticación en tu proyecto?

Programar un sistema de autenticación desde cero no es un proyecto de fin de semana. Requiere de un conocimiento profundo de algoritmos de *hashing* (como Argon2 o bcrypt), mitigación de ataques CSRF/XSS y manejo seguro de tokens. Un pequeño error en cualquiera de estas áreas deja tu aplicación totalmente expuesta. Por eso, las reglas de oro son:

1. **¡NO ESCRIBAS TU PROPIO SISTEMA DE LOGIN!**
   > **protip >** A menos que seas un experto en criptografía, usa soluciones de identidad probadas, auditadas y mantenidas por equipos gigantescos. Integrar *Auth0*, *Firebase Auth*, *NextAuth*, *Keycloak* o *Amazon Cognito* te ahorrará meses de dolores de cabeza. No reinventes la rueda en temas de seguridad, porque tu rueda probablemente terminará siendo cuadrada.

2. **Fuerza el uso de Autenticación Multifactor (MFA)**:
   La autenticación basada únicamente en una contraseña está muerta. Obliga a tus usuarios (especialmente a los que tienen roles administrativos) a usar un segundo factor. Prioriza las aplicaciones TOTP (como *Google Authenticator* o *Authy*) y llaves físicas (como *YubiKey* o *Passkeys*). El MFA por mensaje de texto (SMS) debería ser tu última opción, ya que es vulnerable a ataques de secuestro de chip celular (*SIM Swapping*).

3. **Protege las Sesiones con Cookies Seguras**:
   Si usas cookies para manejar la sesión del usuario, asegúrate de que siempre tengan los atributos `HttpOnly` (para que un atacante no pueda robarlas leyendo JavaScript mediante un ataque XSS) y `Secure` (para que solo viajen por conexiones cifradas HTTPS).

4. **Detén la Fuerza Bruta (*Rate Limiting* y CAPTCHAs)**:
   Si detectas que una dirección IP intenta iniciar sesión 50 veces por minuto, bloquéala de inmediato. Limitar la tasa de peticiones (*Rate Limiting*) es esencial para detener el *Credential Stuffing* masivo. Apóyate de bloqueos de cuenta temporales o implementa CAPTCHAs invisibles tras varios intentos fallidos.

5. **Aplica Políticas de Contraseñas "Inteligentes"**:
   Obligar al usuario a usar "una mayúscula, un número y un símbolo raro" suele resultar en que todos usen `Password123!`. En lugar de eso, la recomendación actual de la industria (NIST) es: exige una longitud mínima mayor (ej. 12 caracteres) y, lo más importante, valida la contraseña elegida contra listas de contraseñas filtradas (como la API de *Have I Been Pwned*). Si el usuario intenta usar una contraseña que ya fue comprometida en otro sitio web, el sistema debe rechazarla.

---

## Ctrl + D

La identidad digital es el núcleo de casi cualquier aplicación moderna. De hecho, la Autenticación (A07) va de la mano con el control de quién puede ver qué cosa, un tema crítico que ya cubrimos a fondo cuando hablamos de los [Accesos Rotos (A01)](/blog/owasp-a01-broken-access-control). Es aterrador pensar en cuántos sitios manejando información financiera sensible fueron programados por un desarrollador estresado que tuvo que hacer el módulo de *login* en dos días usando un tutorial obsoleto de YouTube (probablemente guardando las contraseñas en texto plano e ignorando todo lo que vimos sobre [Fallas Criptográficas (A04)](/blog/owasp-a04-cryptographic-failures)). 

Recuerda: en temas de autenticación, usar el trabajo de otros (Auth0, Firebase) no es hacer trampa, es ser profesional y cuidar a tus usuarios.

Nos vemos el viernes para hablar del número ocho: **A08 - Fallas en la Integridad de Software y Datos**. Descubriremos qué pasa cuando confías en que una actualización de sistema viene sin sorpresas.

Mientras tanto, revisa tu aplicación y recuerda que **lo más importante es nunca dejar de preguntar** a quién le estás abriendo la puerta.
