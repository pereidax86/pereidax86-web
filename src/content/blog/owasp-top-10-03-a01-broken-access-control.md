---
title: "A01: Control de Acceso Roto: Cuando cualquiera puede entrar a la cocina del restaurante"
description: "Si tu sistema permite que cualquier usuario acceda a páginas administrativas o vea facturas de otros con solo cambiar la URL, tienes un Broken Access Control. Te explicamos cómo funciona y cómo evitarlo."
pubDate: 2026-07-01
author: "Luis Pereida"
tags: ["OWASP", "Ciberseguridad", "Desarrollo", "Web", "AccessControl"]
image: "../../assets/images/blog/owasp-a01-broken-access-control.png"
series: "owasp-top-10"
seriesTitle: "OWASP Top 10"
seriesOrder: 3
---

Miércoles. Ya superamos la mitad de la semana y, si leíste nuestro [post de introducción al OWASP Top 10](/blog/owasp-top-10-01-introduccion), sabrás que prometimos ir destripando cada una de estas vulnerabilidades una por una. Hoy nos toca hablar de la reina de la lista, la número uno indiscutible del ranking de descuidos digitales: **A01 - Control de Acceso Roto** (*Broken Access Control*).

Si las vulnerabilidades fueran deportes, el Control de Acceso Roto sería el fútbol: se juega en todo el mundo, es facilísimo de entender y, lamentablemente, casi todos los desarrolladores cometen un autogol en esto al menos una vez en su carrera... para subirnos al espíritu mundialista.

---

## La cocina de la taquería

Tengo un problema, siempre todo lo quiero ejemplificar con tacos... pero bueno, hoy toca taquiza. 

Imagina que vas a cenar a tu taquería favorita. Llegas, te sientas en la mesa 4 y pides tres tacos de pastor con todo y un agua de jamaica bien fría. Hasta ahí, todo normal.

Pero resulta que el taquero está distraído. Tú tienes hambre y notas que no hay ninguna puerta, barra o empleado que divida el comedor de la cocina. Así que te levantas, caminas directo al trompo de pastor, agarras el cuchillo, te sirves otros cinco tacos, abres el cajón del dinero para darte cambio tú mismo, y de paso, le cambias la receta de la salsa martajada al negocio. Además, antes de irte, pasas por la mesa 7, miras su cuenta y te enteras de cuánto va a pagar el amigo.

¿Absurdo? Totalmente. En el mundo físico, casi siempre hay barreras obvias (paredes, puertas con llave, empleados vigilando) que impiden que un cliente actúe como si fuera el dueño del local o interfiera con otros clientes.

En el desarrollo de software, cuando no construimos esas barreras de forma explícita en nuestros servidores, le estamos dando a cualquier usuario un pase libre a nuestra "cocina". Eso es el **Control de Acceso Roto**: cuando un usuario puede ver datos o realizar acciones para las que simplemente no debería tener permiso.

---

## ¿Cómo se ve esto en una aplicación real?

Los atacantes no necesitan herramientas de la NASA para explotar esto; muchas veces solo necesitan modificar un texto en su navegador. Veamos dos de los escenarios más comunes:

### Scenario 1: El clásico cambia-números (IDOR)

Imagina que inicias sesión en una plataforma de facturación y haces clic en "Ver mi factura". La URL en tu navegador se ve así:

`https://mi-sistema-facturas.com/api/ver-factura?id=1024`

Como eres una persona curiosa (o con intenciones cuestionables), decides cambiar ese `1024` por `1025` directamente en la barra de direcciones y presionas Enter.

Si el sistema te muestra la factura de una empresa desconocida con todos sus datos fiscales y montos facturados, ¡BUM! Acabas de encontrar un Control de Acceso Roto de tipo **IDOR** (*Insecure Direct Object Reference*).

**¿Por qué pasa esto?**
El código del servidor probablemente hace algo tan simple como esto:

```javascript
// CÓDIGO VULNERABLE: Confía ciegamente en el ID de la URL
app.get('/api/ver-factura', async (req, res) => {
    const facturaId = req.query.id;
    const factura = await db.query('SELECT * FROM facturas WHERE id = ?', [facturaId]);
    res.json(factura);
});
```

El servidor busca la factura `1025` en la base de datos y la entrega amablemente sin preguntarse nunca: *"Oye, ¿el usuario que está logueado realmente es el dueño de la factura 1025?"*.

### Scenario 2: La mentira de la seguridad en el Front-end

Este es un clásico de los desarrolladores modernos de React, Vue o Angular. 

Tienes un panel de administración en tu web. Para que los usuarios comunes no hagan travesuras, decides ocultar el menú de administrador usando una simple condicional visual:

```javascript
// Ocultamos el botón en la interfaz
{user.role === 'admin' && <BotonEliminarUsuario onClick={eliminar} />}
```

Visualmente se ve perfecto: un usuario normal no ve el botón de "Eliminar". Pero en el código del servidor, la API que borra usuarios se ve así:

`DELETE https://mi-sistema.com/api/usuarios/eliminar/99`

Si un usuario medianamente listo abre las herramientas de desarrollador del navegador (F12), encuentra la URL de la API y envía una petición directamente a ese endpoint usando herramientas como Postman o `curl`, el servidor lo procesa y borra al usuario sin verificar el rol en el backend. 

Es como ponerle un candado gigante a la puerta principal, pero dejar la ventana abierta y sin rejas porque "está muy alta y nadie se va a fijar". Minimo unas botellas rotas en la barda, ¿no?.

---

## ¿Cómo podemos solucionarlo?

No todo está perdido. Para evitar que tu sistema sea la taquería sin puertas, implementa estas buenas prácticas desde el boceto de tu arquitectura:

1. **Denegar por defecto (Deny by Default)**: Asume que todo es privado. A menos que un archivo, ruta o API sea explícitamente pública (como la página de inicio o el formulario de registro), requiere autenticación y verifica permisos antes de mostrar un solo bit de información. Esto es algo que deberias aplicar para casi todo.
2. **Validar la autorización SIEMPRE en el servidor**: Nunca, bajo ninguna circunstancia, confíes en lo que viene del navegador del usuario. El frontend es meramente estético y el usuario tiene control total sobre él. Cada vez que tu API reciba una petición para editar o ver algo, valida en la base de datos que el usuario actual tenga la propiedad o los permisos para ese recurso específico.
3. **Usa identificadores no predecibles (UUIDs)**: En lugar de usar números secuenciales (`/factura/1`, `/factura/2`), usa identificadores únicos globales (UUIDs) como `/factura/550e8400-e29b-41d4-a716-446655440000`. Esto no reemplaza la autorización (ojo: la seguridad por oscuridad no es seguridad real), pero evita que un atacante automatice un script para descargar miles de archivos secuenciales adivinando los IDs.
4. **Pruebas automatizadas**: Escribe tests que verifiquen los límites de autorización. Intenta hacer peticiones a endpoints de administrador con una sesión de usuario normal y asegúrate de que el servidor responda con un rotundo `403 Forbidden`.

---

## Ctrl + D

El control de acceso no es algo que puedas parchar al final como si fuera pintura en una pared; es una columna estructural de tu aplicación. Si no diseñas tus APIs pensando en quién tiene derecho a hacer qué en cada petición, tarde o temprano alguien va a terminar husmeando en la cocina de tu restaurante.

Nos vemos este viernes para hablar del segundo miembro de la lista: **A02 - Configuración de Seguridad Incorrecta**, o cómo dejar el modo debug encendido puede arruinarte el fin de semana.

Mientras tanto, revisa tus controladores, no confíes en el frontend, y recuerda que, en el desarrollo y en la vida, **lo más importante es nunca dejar de preguntar** quién está del otro lado de la línea antes de abrir la puerta.
