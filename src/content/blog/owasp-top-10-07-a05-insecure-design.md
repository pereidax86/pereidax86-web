---
title: "A05: Diseño Inseguro: Construyendo una bóveda de banco con paredes de cristal"
description: "Intentar agregar seguridad al final del desarrollo es como ponerle una puerta blindada a una casa de paja. Aprende la diferencia entre código con errores y un sistema mal diseñado."
pubDate: 2026-07-10
author: "Luis Pereida"
tags: ["OWASP", "Ciberseguridad", "Desarrollo", "Web", "Arquitectura"]
image: "../../assets/images/blog/owasp-a05-insecure-design.png"
series: "owasp-top-10"
seriesTitle: "OWASP Top 10"
seriesOrder: 7
---

Llegamos al viernes y a la mitad exacta de nuestro recorrido por el [OWASP Top 10](/blog/owasp-top-10-01-introduccion). Si te perdiste el post anterior sobre cómo resguardar tus contraseñas, te recomiendo leer [A04: Fallas Criptográficas](/blog/owasp-top-10-06-a04-cryptographic-failures). Hoy nos enfrentamos a un concepto fascinante porque no tiene que ver con olvidar un punto y coma, ni con usar una librería vieja, ni con escribir código vulnerable. Hoy vamos a hablar de cuando el sistema hace *exactamente* lo que se le programó para hacer, pero la idea original era terriblemente mala.

Bienvenidos a **A05 - Diseño Inseguro** (*Insecure Design*).

Existe una diferencia abismal entre una *implementación insegura* (cuando el programador comete un error al codificar una buena idea) y un *diseño inseguro* (cuando el requerimiento o la arquitectura original ya viene con fallas de seguridad incorporadas). Una implementación insegura se puede arreglar con un simple parche; un diseño inseguro requiere derribar paredes y volver a construir todo desde cero.

---

## La bóveda de cristal: Entendiendo el Diseño Inseguro

Recuerda esa famosa frase de que una cadena es tan fuerte como su eslabón más débil. Imagina que te encargan construir un banco. Contratas a la mejor empresa de seguridad del mundo para diseñar la puerta de la bóveda: pesa cinco toneladas, usa titanio reforzado, requiere tres llaves biométricas simultáneas y tiene un escáner de retina. Es una obra maestra de la ingeniería moderna; absolutamente nadie puede forzar esa puerta.

El único problema es que, por requerimientos del equipo de marketing que quería "transmitir transparencia a los clientes", decidiste hacer las paredes laterales de la bóveda con cristal templado.

Un día, un ladrón entra al banco, ignora completamente tu puerta de titanio de cinco millones de dólares, agarra una silla pesada, rompe el cristal lateral y se lleva el dinero en treinta segundos.

La puerta funcionó a la perfección. No hubo ninguna "falla de implementación" en la puerta. El problema fue que el *diseño arquitectónico* del banco era fundamentalmente inseguro. En el mundo del software, esto ocurre cuando diseñamos flujos de negocio sin detenernos cinco minutos a pensar: *"¿Cómo podría alguien abusar de esta función?"*.

---

## Ejemplos reales de Diseño Inseguro en aplicaciones

Los errores de diseño no se detectan tan fácil con herramientas automatizadas ni con analizadores de código, porque a nivel de código fuente todo está "bien". Estos errores son problemas de lógica y de reglas de negocio.

### Escenario 1: El descuento infinito

Estás desarrollando una tienda en línea y creas una función genial para aplicar cupones de descuento. El flujo es simple: el usuario ingresa un código, el sistema verifica que exista, y si es así, resta el 10% del total. Todo funciona impecable.

Pero nunca diseñaste un límite de uso por transacción. Un usuario astuto descubre que puede aplicar el mismo código de 10% de descuento diez veces seguidas en el mismo carrito. ¿El resultado? Un descuento del 100% y un televisor de 65 pulgadas que te salió gratis (más envío). El código hizo exactamente lo que le pediste, pero el diseño del flujo olvidó la regla de negocio más básica: *"limitar el abuso"*.

### Escenario 2: La pregunta secreta que no es un secreto

El equipo de producto te pide implementar un mecanismo de recuperación de contraseñas. Deciden que la mejor forma es usando "Preguntas de Seguridad" porque es muy fácil para el usuario. Configuran preguntas como *"¿En qué ciudad naciste?"*, *"¿Cómo se llama tu primera mascota?"* o *"¿Cuál es el apellido de soltera de tu madre?"*.

Esto es un diseño inseguro de manual. Hoy en día, las respuestas a esas preguntas están públicamente disponibles en los perfiles de Facebook o Instagram de casi cualquier persona. Un atacante no necesita hackear tu base de datos; solo necesita pasar diez minutos revisando el feed de Twitter de tu usuario para recuperar su contraseña. El sistema funciona perfecto, pero la premisa de seguridad está rota desde el inicio.

### Escenario 3: Reservas bloqueadas (Denegación de Negocio)

Tienes un sistema para comprar boletos de cine. Cuando un usuario selecciona un asiento, el sistema lo "bloquea" temporalmente por 15 minutos para darle tiempo de pagar. Si no paga en ese lapso, el asiento se libera.

Un atacante escribe un script que abre miles de sesiones simultáneas y selecciona absolutamente todos los asientos de todas las funciones de la tarde, pero nunca llega a la pantalla de pago. Tu cine se queda sin vender un solo boleto durante todo el fin de semana porque, para los clientes legítimos, los asientos siempre aparecen como "reservados". Este es un ataque de denegación de servicio (DoS) a nivel de lógica de negocio, posible únicamente gracias a un mal diseño de la gestión de reservas temporales.

---

## ¿Cómo prevenir el Diseño Inseguro en tu arquitectura de software?

Para evitar construir bóvedas de cristal, la seguridad tiene que integrarse en la fase de requerimientos y arquitectura, mucho antes de que escribas la primera línea de código. Esta práctica se conoce en la industria como *Shift-Left* (mover a la izquierda en la línea de tiempo del proyecto).

1. **Modelado de Amenazas (Threat Modeling)**:
   Antes de empezar a programar una nueva funcionalidad (como la reserva de asientos o los cupones), siéntate con el equipo y jueguen a ser los malos. Pregúntense: *"¿Qué es lo peor que podría pasar si alguien intenta abusar de este flujo?"*. Metodologías sencillas como STRIDE pueden ayudarte a descubrir sistemáticamente estos huecos de lógica.

2. **Diseño Seguro por Defecto (Secure by Default)**:
   Asume siempre que el usuario final va a intentar romper tu sistema. Implementa límites de tasa (*Rate Limiting*) para evitar abusos automatizados desde el diseño base, exige contraseñas fuertes desde el formulario de registro, y no utilices mecanismos obsoletos como las preguntas de seguridad.

3. **Valida la lógica de negocio, no solo los tipos de datos**:
   Tu código no solo debe revisar que la cantidad de productos a comprar sea un número entero (validación técnica); también debe revisar desde el requerimiento que no sea un número negativo (validación de negocio) para evitar que el sistema termine devolviéndole dinero al atacante.
   > **protip >** Piensa en casos borde: ¿qué pasa si el carrito de compras está vacío y aplico un descuento? ¿Qué pasa si intento comprar 999,999 unidades?

4. **Principio del Mínimo Privilegio desde la arquitectura**:
   Diseña tus microservicios y bases de datos para que solo tengan acceso a lo estrictamente necesario. Si el servicio de envío de correos transaccionales es comprometido, bajo ningún motivo de diseño debería tener permisos para leer las tarjetas de crédito de los usuarios.

---

## Ctrl + D

Agregar seguridad al final del ciclo de desarrollo (el clásico "hacemos un *pentest* una semana antes de lanzar a producción") es extremadamente costoso y la mayoría de las veces inútil cuando el problema está en las bases funcionales de la aplicación. La seguridad no es una capa de pintura que le pones al software para que se vea rudo; son los cimientos sobre los que lo construyes.

Nos vemos este próximo lunes para arrancar la semana con el número seis de la lista: **A06:2025 - Componentes Vulnerables y Desactualizados**. Veremos por qué ignorar las advertencias amarillas de `npm audit` en tu terminal puede salirte carísimo.

Mientras tanto, la próxima vez que te pidan desarrollar una función "súper rápida y fácil para los usuarios", tómate cinco minutos, ponte el sombrero de villano, y recuerda que **lo más importante es nunca dejar de preguntar** cómo alguien más podría usar las mismas reglas de tu sistema en tu contra.
