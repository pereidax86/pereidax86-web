---
title: "A04: Fallas Criptográficas: Guardando el tesoro en una caja de zapatos"
description: "Almacenar contraseñas en texto plano o usar algoritmos obsoletos como MD5 es regalarle los datos a los atacantes. Aprende cómo proteger la información sensible de tu aplicación."
pubDate: 2026-07-08
author: "Luis Pereida"
tags: ["OWASP", "Ciberseguridad", "Desarrollo", "Web", "Criptografía"]
image: "../../assets/images/blog/owasp-a04-cryptographic-failures.png"
series: "owasp-top-10"
seriesTitle: "OWASP Top 10"
seriesOrder: 6
---

Llegamos al miércoles y seguimos desentrañando el [OWASP Top 10](/blog/owasp-top-10-01-introduccion). Ya pasamos por los [accesos mal configurados (A01)](/blog/owasp-top-10-03-a01-broken-access-control), los [problemas de configuración por defecto (A02)](/blog/owasp-top-10-04-a02-security-misconfiguration) y las [fallas en la cadena de suministro (A03)](/blog/owasp-top-10-05-a03-software-supply-chain-failures). Hoy vamos a hablar de un tema que a muchos desarrolladores les da dolor de cabeza, pero que es vital: **A04 - Fallas Criptográficas** (*Cryptographic Failures*).

Antes se le conocía como "Exposición de Datos Sensibles", pero el nombre cambió para enfocarse en la *causa* principal y no solo en el síntoma. Porque cuando un cibercriminal se roba tu base de datos, el problema inicial no fue que se la llevara (eso es control de acceso), sino que lo que se llevó estaba en texto plano o cifrado con un algoritmo que hoy en día un reloj inteligente puede romper.

---

## El diario íntimo con un candado de juguete

Tengo un problema, siempre todo lo quiero ejemplificar con analogías del mundo real... pero bueno, hoy toca hablar de secretos.

Recuerda aquellos tiempos de infancia cuando tenías un diario donde escribías tus mayores secretos (si no lo tenías, imagina que sí para el ejemplo). Como sabías que esa información era sumamente confidencial, decidiste comprar un candado para protegerlo. 

Vas a la papelería y compras un candado de plástico de esos que vienen en los juguetes, de los que todavía tienen rebabas y que se abren con cualquier llave o incluso empujando fuerte con el dedo. Escribes todos tus secretos, le pones el candadito de juguete, lo dejas sobre la mesa del comedor y te vas a dormir con la tranquilidad de que tu información está "segura".

Al día siguiente, tu hermanito menor, que no tiene ninguna habilidad especial para forzar cerraduras, simplemente rompe el candado de plástico con las manos, lee todo y se ríe de tus cursilerías.

En el desarrollo de software, cuando usamos criptografía obsoleta o configuramos mal nuestras llaves, estamos haciendo exactamente esto. Sentimos una falsa sensación de seguridad simplemente porque podemos decir "nuestra base de datos está encriptada", pero la realidad es mucho más cruda. 

Por un lado, el poder computacional ha avanzado a pasos agigantados. Un algoritmo que en los años 90 tardaba meses en romperse con las mejores supercomputadoras del mundo, hoy puede ser descifrado en milisegundos usando una tarjeta gráfica *gamer* casera. Si sigues usando esos algoritmos viejos, tu "candado" es literalmente el de plástico.

Por otro lado, está el problema de la gestión de llaves. De nada sirve comprar la bóveda de banco más blindada e impenetrable del mundo (usando un algoritmo de cifrado moderno y militar) si vas a dejar la combinación de la caja fuerte anotada en un post-it pegado en la puerta (como cuando guardas tus llaves criptográficas directamente en el código fuente o en un archivo de configuración público). A fin de cuentas, el atacante no va a gastar energía intentando romper la bóveda; simplemente va a leer el post-it.

---

## Ejemplos reales de Fallas Criptográficas

Las fallas criptográficas ocurren principalmente en dos estados de la información: 

1. **Datos en reposo**: Es la información que está "dormida" o almacenada de forma estática. Hablamos de los discos duros de tus servidores, los respaldos (backups) en la nube o las tablas de tu base de datos. Si un atacante logra comprometer el servidor o robar un respaldo, y esos datos están en texto plano, el juego se acaba.
2. **Datos en tránsito**: Es la información que está "viajando" por los cables y ondas de internet. Cuando un usuario llena un formulario de login y presiona "Entrar", esa contraseña tiene que viajar desde su navegador hasta tu servidor. Si ese viaje se hace sin un túnel cifrado, cualquiera que esté escuchando en la red puede interceptar el mensaje.

En ambos casos, los atacantes rara vez intentan hacer magia matemática para descifrar algoritmos robustos; simplemente buscan dónde dejaste un candado de plástico o en qué lugar de plano olvidaste poner uno.

### El museo de antigüedades (MD5 y SHA-1)

Es el año 2026. Estás revisando el código de una aplicación heredada y te encuentras con la función que guarda las contraseñas de los usuarios en la base de datos:

```javascript
// CÓDIGO VULNERABLE: Usando un algoritmo obsoleto
const crypto = require('crypto');

function guardarContraseña(password) {
    // Generando un hash con MD5... en pleno 2026
    const hash = crypto.createHash('md5').update(password).digest('hex');
    db.saveUser(username, hash);
}
```

El desarrollador original pensó que estaba haciendo lo correcto al no guardar las contraseñas en texto plano. Pero eligió **MD5**, un algoritmo de hash que fue diseñado a principios de los 90s y que hoy en día está total y absolutamente roto. 

Si un atacante roba tu base de datos, ni siquiera tiene que intentar "desencriptar" los hashes. Existen bases de datos gigantes en internet (las famosas *Rainbow Tables*) que ya tienen pre-calculados millones de hashes MD5 de contraseñas comunes. El atacante solo tiene que buscar el hash, y listo, ya tiene la contraseña en texto plano en menos de un segundo. Como dijimos en el post anterior, es el equivalente digital a esconder la llave de tu casa bajo el tapete de bienvenida.

### HTTP sin la "S" y certificados caducados

Supongamos que tu base de datos es una fortaleza inexpugnable, utilizas algoritmos de última generación y guardas todo cifrado. Pero el formulario de inicio de sesión donde el usuario ingresa sus datos se transmite sobre `HTTP` simple, sin cifrar, o usando certificados SSL/TLS expirados o configurados con protocolos viejos (como TLS 1.0).

Cualquier atacante que esté conectado a la misma red Wi-Fi pública de la cafetería en la que está tu usuario, puede usar una herramienta de captura de paquetes y leer todo el tráfico en texto plano. Tu fortaleza criptográfica en la base de datos no sirve de nada si los datos viajan desnudos por la carretera de internet.

### "Yo puedo crear mi propio algoritmo"

A los programadores nos encanta reinventar la rueda. A veces alguien piensa: *"Si yo invento mi propia forma de cifrar los datos (por ejemplo, le sumo 3 al valor numérico de cada letra y lo invierto), los atacantes nunca van a adivinar cómo lo hice"*.

Esto se llama "Seguridad por Oscuridad" (*Security through Obscurity*) y es una pésima idea. La criptografía robusta es pura matemática avanzada y lleva años de revisión por pares para asegurar que un algoritmo no tenga fisuras. Si inventas tu propia criptografía, te garantizo que tiene huecos enormes por todas partes.

---

## ¿Cómo prevenir las Fallas Criptográficas?

La criptografía puede parecer magia negra, pero no necesitas ser un experto en álgebra lineal para aplicarla correctamente. Aquí están las reglas de oro de la higiene digital criptográfica:

1. **Nunca inventes tu propia criptografía**:
   Utiliza siempre algoritmos probados, públicos y robustos que ya vienen en los frameworks modernos o en librerías confiables. Deja que los matemáticos criptógrafos hagan su magia; tú solo usa las herramientas correctas.

2. **Usa algoritmos de *Hashing* fuertes para las contraseñas**:
   Olvídate de MD5, SHA-1 o incluso SHA-256 sin *sal*. Para almacenar contraseñas, debes usar funciones derivadas de claves (KDF) que están diseñadas para ser intencionalmente lentas y resistir ataques de fuerza bruta por tarjetas gráficas. Los estándares actuales recomendados por OWASP son **Argon2id**, **scrypt**, **bcrypt** o **PBKDF2**. 
   > **protip >** Y siempre agrégales un "salt" (un valor aleatorio único por cada usuario antes de hacer el hash) para inutilizar las Rainbow Tables.

3. **Cifra los datos sensibles en tránsito y en reposo**:
   Asegúrate de que todo el tráfico de tu aplicación, absolutamente todo, utilice **TLS 1.2 o superior** (el famoso `HTTPS`) con políticas como HSTS (*HTTP Strict Transport Security*). Además, si guardas información médica, financiera o datos personales sensibles (PII), la base de datos o el disco deben estar cifrados en reposo.

4. **Gestiona tus llaves (Keys) como si fueran oro**:
   De nada sirve cifrar con el mejor algoritmo de nivel militar si guardas la llave maestra de descifrado en texto plano en el mismo archivo de código que subes a GitHub. Usa servicios de gestión de secretos para inyectar estas llaves en tiempo de ejecución.

---

## Ctrl + D

Las fallas criptográficas son la principal razón por la que vemos noticias casi cada semana sobre millones de credenciales filtradas en internet. Implementar buena criptografía ya no es una "característica premium"; es una responsabilidad básica que le debemos a nuestros usuarios cuando nos confían sus vidas digitales.

Nos vemos este próximo viernes para platicar sobre el siguiente eslabón: **A05:2025 - Diseño Inseguro** (*Insecure Design*). Veremos por qué intentar agregar seguridad al final del desarrollo es como intentar ponerle frenos a un coche que ya va a 120 km/h por la autopista.

Mientras tanto, revisa qué algoritmos de hash estás usando hoy, asegúrate de que todos tus certificados SSL estén vigentes, y recuerda que **lo más importante es nunca dejar de preguntar** qué tan fuertes son los candados virtuales con los que resguardas la información.
