---
title: "Ciberseguridad con olor a Taco"
description: "Cómo implementar NIST 2.0 en una PyME sin morir en el intento."
pubDate: "2026-03-05"
author: "Luis Pereida"
icon: "🌮"
tags: ["HackGDL","ciberseguridad", "NIST", "PyME", "guía"]
---

<script>
    if (!window.typewriterInitialized) {
        window.typewriterInitialized = true;
        
        // Wait briefly for PresentationLayout to finish cloning the DOM nodes
        setTimeout(() => {
            const container = document.getElementById("presentation-container");
            if (!container) return;
            
            // Only select the elements inside the active presentation, bypassing the hidden raw content
            const textElements = container.querySelectorAll(".typewriter-text");
            if (textElements.length === 0) return;
            
            const words = ["pereidax86.com", "@pereidax86"];
            let wordIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            
            function type() {
                const currentWord = words[wordIndex];
                
                let currentText = "";
                if (isDeleting) {
                    currentText = currentWord.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    currentText = currentWord.substring(0, charIndex + 1);
                    charIndex++;
                }
                
                textElements.forEach(el => {
                    el.textContent = currentText;
                });
                
                let typeSpeed = isDeleting ? 50 : 100;
                
                if (!isDeleting && charIndex === currentWord.length) {
                    typeSpeed = 5000; // Espera 5 segundos
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                    typeSpeed = 500; // Pausa antes de escribir de nuevo
                }
                
                setTimeout(type, typeSpeed);
            }
            
            setTimeout(type, 1000);
        }, 100); // 100ms delay to ensure DOM is ready
    }
</script>

<div class="absolute top-0 left-0 w-full h-[55%] bg-cover bg-center border-b border-neutral-800" style="background-image: url('/images/presentations/ciberseguridad-con-olor-a-taco/Ciberseguridad-con-olor-a-Taco.png');">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/50 to-neutral-950"></div>
</div>
<div class="absolute bottom-0 right-0 w-full h-[55%] flex flex-col justify-end items-end text-right p-12 pr-16 md:pr-40 pb-16 z-10">
    <h1 class="text-6xl md:text-[6rem] font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
        Ciberseguridad con olor a Taco
    </h1>
    <p class="text-2xl md:text-3xl font-mono text-blue-400 font-bold mb-8 max-w-3xl drop-shadow-md !text-right w-full">
        Cómo implementar NIST 2.0 en una PyME sin morir en el intento.
    </p>
    <p class="text-xl md:text-2xl font-bold text-gray-200 drop-shadow-sm !text-right w-full">Luis Pereida</p>
    <p class="text-md md:text-lg text-gray-400 mb-6 font-mono max-w-md !text-right w-full">Application Security and Risk Management Specialist</p>
    <a href="https://pereidax86.com" target="_blank" class="px-6 py-3 text-lg bg-neutral-900 border border-purple-500/50 rounded-lg text-purple-400 hover:bg-purple-600 hover:text-white font-bold transition-all backdrop-blur-sm shadow-lg shadow-purple-500/10 min-w-[200px] text-center">
        <span class="typewriter-text"></span><span class="animate-pulse">_</span>
    </a>
</div>

---

## La Economía Real (El 99.8%)

### Cifras Destacadas

- **99.8%** de las empresas en México son MiPyMEs. <sup>[1]</sup>
- **52%** del PIB nacional y **68%** del empleo (27 millones de personas). <sup>[1]</sup>
- **Frecuencia:** **1 intento de ataque cada 11 segundos** en México. <sup>[2]</sup>
- **Impacto 2025-2026:** El costo promedio de un ciberataque para una PyME en México ya supera los **$100,000 USD** (incluyendo rescate, downtime y reputación). <sup>[2]</sup>

### Puntos Clave

- Las MiPyMEs no son "pequeñas", son la columna vertebral.
- El cibercrimen no busca "el gran golpe" a un banco, busca "volumen" en los negocios locales.
- El **80%** de los ataques no son sofisticados: son oportunistas.

<div class="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-neutral-500 text-center w-full max-w-4xl z-50">
    <p class="mb-1 text-neutral-400 font-bold !mb-1 !w-full !text-center">Fuentes y Referencias:</p>
    <p class="!mb-0 !leading-tight !w-full !text-center">[1] <a href="https://www.gob.mx/cms/uploads/attachment/file/923851/20240626_Dosier_MIPYMES_SALIDA_Interactivo_5_.pdf" target="_blank" class="hover:text-blue-400 transition-colors">Dosier MIPYMES, Gobierno de México (2024)</a></p>
    <p class="!mb-0 !leading-tight !w-full !text-center">[2] <a href="https://www.liderempresarial.com/pymes-victimas-ciberataques-costo-ciberseguridad/#:~:text=Costo%20promedio%20por%20ataque:%20m%C3%A1s%20de%20100,diferencia%20entre%20continuar%20operando%20o%20cerrar%20definitivamente." target="_blank" class="hover:text-blue-400 transition-colors">PyMEs víctimas de ciberataques: El costo de la ciberseguridad, Líder Empresarial</a></p>
</div>

---

## La Mayor Vulnerabilidad de la PyME

### El "Chambitas" y sus "herramientas" de defensa:

<div class="flex flex-col md:flex-row items-center justify-between w-full max-w-[90%] gap-8">
<div class="w-full md:w-2/3">

<ul class="text-left w-full list-disc pl-8 mb-6 text-gray-300">
    <li class="mb-3"><strong class="text-white">Falso ahorro usando software pirata:</strong> Prefiere un activador dudoso a pagar una licencia básica. <em>Spoiler: el KMS trae malware de regalo.</em></li>
    <li class="mb-3"><strong class="text-white">Gestión de accesos:</strong> Contraseñas en <em>post-its</em> o el clásico <code class="font-mono bg-neutral-900 text-pink-400 px-1.5 py-0.5 rounded border border-neutral-800">admin123</code> que nunca cambian.</li>
    <li class="mb-3"><strong class="text-white">Respuesta a incidentes:</strong> <em>"No te preocupes, yo le muevo y queda"</em> pero nunca se documenta.</li>
    <li class="mb-3"><strong class="text-white">Exceso de confianza:</strong> <em>"Ni modo que se me olvide"</em>.</li>
    <li class="mb-3"><strong class="text-white">Continuidad del negocio:</strong> Cero respaldos, pero mucha fe.</li>
    <li class="mb-3"><strong class="text-white">Seguridad por oscuridad:</strong> El error de creer que pasar desapercibido es una estrategia de defensa. <em>"A mí quién me va a hackear, ni somos famosos"</em>.</li>
</ul>

</div>
<div class="w-[60%] md:w-1/3">
<img src="/images/presentations/ciberseguridad-con-olor-a-taco/el-chambitas.png" alt="El Chambitas interactuando confiado con un USB" class="rounded-xl shadow-lg border border-neutral-800 w-full h-auto !m-0">
</div>
</div>

<div class="mt-8 bg-neutral-900 border-l-4 border-red-500 p-6 rounded-r-lg shadow-lg">
    <p class="text-2xl text-red-500 font-bold mb-2">La consecuencia final:</p>
    <p class="text-xl text-neutral-300 !mb-0">La seguridad es vista como un <strong>gasto innecesario</strong>, no como una <strong>inversión</strong> para la supervivencia del negocio.</p>
</div>

---

## El Inventario de la Cocina: ¿Qué estamos cuidando?

<div class="flex flex-col md:flex-row items-center justify-between w-full max-w-[98%] gap-4 mt-0">
<div class="w-full md:w-[68%] text-left">

<h4 class="text-2xl xl:text-3xl font-bold text-blue-400 mb-1 mt-0 leading-tight">Lo Obvio: La Operación</h4>
<ul class="list-disc pl-6 mb-4 text-lg xl:text-xl text-gray-300 space-y-0 leading-tight">
    <li><strong class="text-white">El Trompo y la Plancha:</strong> <em class="text-neutral-400">Sin fierros no hay tacos. Punto.</em> (Activos Físicos)</li>
    <li><strong class="text-white">La Tablet y Terminal (PoS):</strong> <em class="text-neutral-400">Si "no hay sistema", no hay ventas.</em> (Sistemas Críticos)</li>
    <li><strong class="text-white">Facebook e Instagram:</strong> <em class="text-neutral-400">Si te hackean, tu marca muere en una noche.</em> (Reputación)</li>
</ul>

<h4 class="text-2xl xl:text-3xl font-bold text-purple-400 mb-1 mt-0 leading-tight">Lo Digital: La Información</h4>
<ul class="list-disc pl-6 mb-4 text-lg xl:text-xl text-gray-300 space-y-0 leading-tight">
    <li><strong class="text-white">Lista de WhatsApp de Clientes:</strong> <em class="text-neutral-400">Si se filtra, te cae la Ley de Datos.</em> (Datos Personales)</li>
    <li><strong class="text-white">Apps de Delivery (Uber/Rappi):</strong> <em class="text-neutral-400">Si hackean tu portal, el dinero se va a otra cuenta.</em> (Riesgo Terceros)</li>
    <li><strong class="text-white">El "Cuaderno" de Ventas:</strong> <em class="text-neutral-400">Si se moja, no sabes qué debes ni a quién.</em> (Disponibilidad)</li>
</ul>

<h4 class="text-2xl xl:text-3xl font-bold text-red-500 mb-1 mt-0 leading-tight">Lo Invisible: El Peligro Real</h4>
<ul class="list-disc pl-6 mb-0 text-lg xl:text-xl text-gray-300 space-y-0 leading-tight">
    <li><strong class="text-white">WiFi para Clientes:</strong> <em class="text-neutral-400">La puerta trasera que dejaron abierta.</em> (Superficie de Ataque)</li>
    <li><strong class="text-white">Cámaras de Seguridad (CCTV):</strong> <em class="text-neutral-400">Si la clave es admin123, medio internet te ve.</em> (Seguridad IoT)</li>
    <li><strong class="text-white">La e.firma / FIEL:</strong> <em class="text-neutral-400">Si se pierde la USB, el SAT te va a buscar a ti.</em> (Identidad Digital)</li>
</ul>

</div>
<div class="w-[50%] md:w-[32%] flex justify-center">
    <img src="/images/presentations/ciberseguridad-con-olor-a-taco/cibertacos-el-inge.png" alt="CiberTacos El Inge con ladrones digitales" class="w-full h-auto !m-0 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-neutral-800 object-contain">
</div>
</div>

---

## NIST 2.0: El Nuevo Ingrediente

<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-[95%] mt-8 text-left">

<!-- Columna 1 -->
<div class="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-8 shadow-xl hover:border-blue-500/50 transition-colors flex flex-col justify-center">
<h3 class="text-3xl xl:text-4xl font-bold text-blue-400 mb-6 mt-0 leading-tight">¿Qué es NIST CSF 2.0?</h3>
<ul class="list-disc pl-6 text-xl xl:text-2xl text-gray-300 space-y-4 leading-snug">
    <li><strong class="text-white">NIST</strong> National Institute of Standards and Technology.</li>
    <li><strong class="text-white">CSF</strong> Cybersecurity Framework.</li>
    <li><strong class="text-white">El "Lenguaje Universal"</strong> de la ciberseguridad.</li>
    <li><strong class="text-white text-blue-300">No es una ley</strong>, es una guía táctica voluntaria.</li>
    <li><strong class="text-white">Creado para ser flexible:</strong> Desde una taquería hasta Google.</li>
</ul>
</div>

<!-- Columna 2 -->
<div class="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-8 shadow-xl hover:border-green-500/50 transition-colors flex flex-col justify-center">
<h3 class="text-3xl xl:text-4xl font-bold text-green-400 mb-6 mt-0 leading-tight">El Cambio: La Gobernanza</h3>
<ul class="list-disc pl-6 text-xl xl:text-2xl text-gray-300 space-y-4 leading-snug mb-6">
    <li><strong class="text-white text-gray-400">Antes (v1.1):</strong> "La seguridad es un tema de TI".</li>
    <li><strong class="text-green-300">Ahora (v2.0):</strong> "La seguridad es una decisión de negocio".</li>
</ul>

<div class="p-5 bg-green-500/10 border-l-4 border-green-500 rounded-r-xl shadow-inner mt-auto">
    <p class="text-xl xl:text-2xl text-neutral-200 !mb-0 leading-snug"><strong class="text-white">ProTip:</strong> No puedes proteger lo que no te importa, y no te importa lo que no entiendes como riesgo.</p>
</div>
</div>

<!-- Tercer Contenedor (Ancho Completo) -->
<div class="lg:col-span-2 bg-neutral-900/80 border border-amber-500/50 rounded-2xl p-8 shadow-xl hover:border-amber-400 transition-colors mt-2">
<h3 class="text-2xl xl:text-3xl font-bold text-amber-400 mb-4 mt-0 leading-tight">Gobernar: El Hilo Conductor</h3>
<p class="text-xl xl:text-2xl text-gray-300 leading-snug mb-4">
    Gobernar significa que la seguridad ya no es un problema de "parches y firewalls"; es un <strong>problema de estrategia</strong>.
</p>
<p class="text-xl xl:text-2xl text-gray-300 leading-snug !mb-0">
    La Gobernanza (GV) le dice a las otras funciones <strong>(Identificar, Proteger, Detectar, Responder y Recuperar)</strong> qué es lo más importante. Sin Gobernanza, 
</p>
</div>

</div>

<div class="mt-8 bg-neutral-900/50 border-l-4 border-blue-500/50 p-4 rounded-r-lg shadow-sm text-sm text-neutral-400">
    <p class="!mb-0"><strong class="text-neutral-300">Referencia:</strong> [1] <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30">NIST Cybersecurity Framework (CSF) 2.0 Official Website</a></p>
</div>

---

## The NIST Cybersecurity Framework (CSF) 2.0

<div class="flex flex-col xl:flex-row items-center justify-center gap-8 w-full max-w-[98%] mt-8">
    <div class="w-full xl:w-1/2 flex justify-center items-center">
        <img src="/images/presentations/ciberseguridad-con-olor-a-taco/CSF_cybersecurity_framework.webp" alt="NIST Cybersecurity Framework" class="w-full max-h-[60vh] h-auto rounded-xl shadow-2xl border border-neutral-800 object-contain bg-neutral-900/50 p-2">
    </div>
    <div class="w-full xl:w-1/2 flex justify-center items-center">
        <img src="/images/presentations/ciberseguridad-con-olor-a-taco/nist_framework_2_core.webp" alt="NIST Framework 2.0 Core" class="w-full max-h-[60vh] h-auto rounded-xl shadow-2xl border border-neutral-800 object-contain bg-neutral-900/50 p-2">
    </div>
</div>

<div class="mt-8 bg-neutral-900/50 border-l-4 border-blue-500/50 p-4 rounded-r-lg shadow-sm text-sm text-neutral-400">
    <p class="!mb-0"><strong class="text-neutral-300">Referencia:</strong> [1] <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30">NIST Cybersecurity Framework (CSF) 2.0 Official Website</a></p>
</div>

---

## Gobernanza: Don Taquero es el CISO

<p class="text-xl md:text-2xl xl:text-3xl text-center text-gray-300 mb-8 italic">¿Qué es Gobernar en una Taquería? <span class="text-blue-400 font-semibold not-italic">No es burocracia, es orden.</span></p>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-[95%] mx-auto text-left">

<!-- Roles -->
<div class="bg-neutral-900/80 border border-neutral-700 hover:border-blue-500/50 rounded-2xl p-8 shadow-xl transition-colors">
<h3 class="text-2xl xl:text-3xl font-bold text-blue-400 mb-6 mt-0">Roles y Responsabilidades:</h3>
<ul class="space-y-5 text-lg xl:text-xl text-gray-200">
    <li class="pl-4 border-l-2 border-blue-500/50"><strong class="text-white text-blue-300">El Dueño (CISO):</strong> Define qué es lo más importante <br><span class="text-neutral-400 text-base xl:text-lg">(La receta, el flujo de caja)</span>.</li>
    <li class="pl-4 border-l-2 border-purple-500/50"><strong class="text-white text-purple-300">El Encargado (Security Officer):</strong> Se asegura de que se cumplan las reglas.</li>
    <li class="pl-4 border-l-2 border-green-500/50"><strong class="text-white text-green-300">El Consultor (Arquitecto):</strong> Diseña la estrategia <br><span class="text-neutral-400 text-base xl:text-lg"><strong>¡Tú!</strong></span>.</li>
</ul>
</div>

<!-- Servilleta -->
<div class="bg-amber-50 text-neutral-900 border border-amber-200 rounded-sm p-8 shadow-2xl relative transform lg:rotate-2 hover:rotate-0 transition-transform flex flex-col justify-center">
<div class="absolute top-0 left-0 w-full h-8 flex overflow-hidden opacity-30">
    <div class="w-full h-1 bg-blue-300/50 mt-4"></div>
</div>
<h3 class="text-2xl xl:text-3xl font-bold !text-neutral-800 mb-6 mt-2 pb-2 border-b-2 border-neutral-300/50">La Política de Seguridad<br><span class="text-amber-600 font-serif italic">"En una Servilleta"</span></h3>
<ul class="list-none space-y-4 text-lg xl:text-xl font-medium !text-neutral-700">
    <li class="flex items-start"><span class="mr-2 text-amber-500">✓</span> "Nadie comparte su clave de la tablet".</li>
    <li class="flex items-start"><span class="mr-2 text-amber-500">✓</span> "No se conectan USBs desconocidas".</li>
    <li class="flex items-start"><span class="mr-2 text-amber-500">✓</span> "Los backups se revisan cada lunes antes de abrir".</li>
</ul>
</div>

<!-- Bottom: Gestión de Riesgos -->
<div class="lg:col-span-2 bg-red-950/30 border border-red-900 hover:bg-red-900/40 rounded-2xl p-6 shadow-xl mt-2 flex flex-col md:flex-row items-center gap-4 transition-colors">
<div class="text-5xl shrink-0 bg-red-900/50 p-4 rounded-full border border-red-500/30">🔥</div>
<div class="flex-1 w-full text-center">
    <h3 class="text-xl xl:text-2xl font-bold text-red-500 mb-1 mt-0">Gestión de Riesgos: ¿Qué nos duele más?</h3>
    <p class="text-lg xl:text-xl text-gray-300 !mb-0 leading-tight"><em class="text-red-200">¿Que se caiga el Facebook o que nos clonen las tarjetas de los clientes?</em></p>
</div>
</div>

</div>

---

## El Menú Completo de NIST 2.0 <br><span class="text-2xl md:text-3xl text-amber-500 block mt-2">Edición Cibertacos El Inge</span>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6 w-full max-w-[98%] mt-4">

<!-- GOVERN -->
<div class="bg-amber-950/30 border border-amber-500/50 rounded-xl p-5 shadow-lg flex flex-col items-start text-left hover:border-amber-400 transition-colors">
<h4 class="text-xl font-bold text-amber-400 mb-1 mt-0">GOVERN (GV)</h4>
<p class="text-sm xl:text-base text-amber-200/80 mb-3 italic">Estrategia y Reglas</p>
<ul class="list-disc pl-5 text-sm xl:text-base text-gray-300 space-y-2 leading-tight">
    <li><strong class="text-amber-300 text-base xl:text-lg">GV.RR:</strong> Definir quién cobra y quién pica cebolla (Roles).</li>
    <li><strong class="text-amber-300 text-base xl:text-lg">GV.PO:</strong> "Prohibido usar la tablet para ver TikTok" (Política).</li>
    <li><strong class="text-amber-300 text-base xl:text-lg">GV.SC:</strong> Revisar proveedor de pagos (Supply Chain).</li>
</ul>
</div>

<!-- IDENTIFY -->
<div class="bg-green-950/30 border border-green-500/50 rounded-xl p-5 shadow-lg flex flex-col items-start text-left hover:border-green-400 transition-colors">
<h4 class="text-xl font-bold text-green-400 mb-1 mt-0">IDENTIFY (ID)</h4>
<p class="text-sm xl:text-base text-green-200/80 mb-3 italic">Saber qué tenemos</p>
<ul class="list-disc pl-5 text-sm xl:text-base text-gray-300 space-y-2 leading-tight">
    <li><strong class="text-green-300 text-base xl:text-lg">ID.AM:</strong> Inventario de tablets, celulares de reparto y e.firma.</li>
    <li><strong class="text-green-300 text-base xl:text-lg">ID.RA:</strong> "¿Qué pasa si cae el internet en quincena?" (Riesgo).</li>
</ul>
</div>

<!-- PROTECT -->
<div class="bg-purple-950/30 border border-purple-500/50 rounded-xl p-5 shadow-lg flex flex-col items-start text-left hover:border-purple-400 transition-colors">
<h4 class="text-xl font-bold text-purple-400 mb-1 mt-0">PROTECT (PR)</h4>
<p class="text-sm xl:text-base text-purple-200/80 mb-3 italic">Poner los candados</p>
<ul class="list-disc pl-5 text-sm xl:text-base text-gray-300 space-y-2 leading-tight">
    <li><strong class="text-purple-300 text-base xl:text-lg">PR.AA:</strong> Acceso individual por PIN en la tablet.</li>
    <li><strong class="text-purple-300 text-base xl:text-lg">PR.AT:</strong> Que el repartidor no dé clic a "premios" en WhatsApp.</li>
    <li><strong class="text-purple-300 text-base xl:text-lg">PR.DS:</strong> Receta del adobo en Excel seguro, no en post-it.</li>
</ul>
</div>

<!-- DETECT -->
<div class="bg-yellow-950/30 border border-yellow-500/50 rounded-xl p-5 shadow-lg flex flex-col items-start text-left hover:border-yellow-400 transition-colors">
<h4 class="text-xl font-bold text-yellow-400 mb-1 mt-0">DETECT (DE)</h4>
<p class="text-sm xl:text-base text-yellow-200/80 mb-3 italic">Olfato de Taquero</p>
<ul class="list-disc pl-5 text-sm xl:text-base text-gray-300 space-y-2 leading-tight">
    <li><strong class="text-yellow-300 text-base xl:text-lg">DE.CM:</strong> Revisar cargos desconocidos al final del día.</li>
    <li><strong class="text-yellow-300 text-base xl:text-lg">DE.AE:</strong> "¿Por qué hay un login en el Face desde Rusia?" (Eventos).</li>
</ul>
</div>

<!-- RESPOND -->
<div class="bg-red-950/30 border border-red-500/50 rounded-xl p-5 shadow-lg flex flex-col items-start text-left hover:border-red-400 transition-colors">
<h4 class="text-xl font-bold text-red-500 mb-1 mt-0">RESPOND (RS)</h4>
<p class="text-sm xl:text-base text-red-200/80 mb-3 italic">¡Apagar el fuego!</p>
<ul class="list-disc pl-5 text-sm xl:text-base text-gray-300 space-y-2 leading-tight">
    <li><strong class="text-red-400 text-base xl:text-lg">RS.MA:</strong> Tener el número del banco a la mano para bloquear la terminal.</li>
    <li><strong class="text-red-400 text-base xl:text-lg">RS.CO:</strong> Aviso en Instagram: "Nos hackearon, no depositen a cuentas raras".</li>
</ul>
</div>

<!-- RECOVER -->
<div class="bg-blue-950/30 border border-blue-500/50 rounded-xl p-5 shadow-lg flex flex-col items-start text-left hover:border-blue-400 transition-colors">
<h4 class="text-xl font-bold text-blue-400 mb-1 mt-0">RECOVER (RC)</h4>
<p class="text-sm xl:text-base text-blue-200/80 mb-3 italic">Levantar la cortina</p>
<ul class="list-disc pl-5 text-sm xl:text-base text-gray-300 space-y-2 leading-tight">
    <li><strong class="text-blue-300 text-base xl:text-lg">RC.RP:</strong> Bajar el respaldo de la nube para saber a quién debíamos pedidos.</li>
    <li><strong class="text-blue-300 text-base xl:text-lg">RC.CO:</strong> "¡Ya volvimos! Gracias por su paciencia, hoy el horchata es gratis".</li>
</ul>
</div>

</div>

---

## Los Tiers de NIST <br><span class="text-2xl md:text-3xl text-neutral-400 block mt-2">¿Qué tan pro es tu taquería?</span>

<div class="flex flex-col gap-4 w-full max-w-[95%] mt-8 mx-auto text-left">

<!-- Tier 1 -->
<div class="bg-red-950/20 border-l-4 border-red-500 rounded-r-xl p-6 shadow-md flex flex-col md:flex-row gap-4 items-center md:items-start hover:bg-neutral-800 transition-colors">
<div class="md:w-1/4 shrink-0">
    <h3 class="text-2xl font-bold text-red-500 mb-0 mt-0">Tier 1</h3>
    <p class="text-lg text-red-300 font-semibold uppercase tracking-wider">Parcial</p>
</div>
<div class="md:w-3/4">
    <h4 class="text-xl text-white font-bold mb-2 mt-0">Modo "Chambitas"</h4>
    <p class="text-lg text-gray-300 !mb-0 leading-tight">Reaccionas cuando el problema ya ocurrió. No hay procesos, solo <em class="text-neutral-400">"fe"</em>.</p>
</div>
</div>

<!-- Tier 2 -->
<div class="bg-amber-950/20 border-l-4 border-amber-500 rounded-r-xl p-6 shadow-md flex flex-col md:flex-row gap-4 items-center md:items-start hover:bg-neutral-800 transition-colors">
<div class="md:w-1/4 shrink-0">
    <h3 class="text-2xl font-bold text-amber-500 mb-0 mt-0">Tier 2</h3>
    <p class="text-lg text-amber-300 font-semibold uppercase tracking-wider leading-tight">Riesgo Informado</p>
</div>
<div class="md:w-3/4">
    <h4 class="text-xl text-white font-bold mb-2 mt-0">Modo "Dueño Consciente"</h4>
    <p class="text-lg text-gray-300 !mb-0 leading-tight">Sabes que te pueden hackear y tienes antivirus, pero no hay un plan escrito.</p>
</div>
</div>

<!-- Tier 3 -->
<div class="bg-blue-950/20 border-l-4 border-blue-500 rounded-r-xl p-6 shadow-md flex flex-col md:flex-row gap-4 items-center md:items-start hover:bg-neutral-800 transition-colors">
<div class="md:w-1/4 shrink-0">
    <h3 class="text-2xl font-bold text-blue-500 mb-0 mt-0">Tier 3</h3>
    <p class="text-lg text-blue-300 font-semibold uppercase tracking-wider">Repetible</p>
</div>
<div class="md:w-3/4">
    <h4 class="text-xl text-white font-bold mb-2 mt-0">Modo "Manual de Operación"</h4>
    <p class="text-lg text-gray-300 !mb-0 leading-tight">Existe la política de la servilleta. Todos saben qué hacer si se pierde una tablet.</p>
</div>
</div>

<!-- Tier 4 -->
<div class="bg-green-950/20 border-l-4 border-green-500 rounded-r-xl p-6 shadow-md flex flex-col md:flex-row gap-4 items-center md:items-start hover:bg-neutral-800 transition-colors">
<div class="md:w-1/4 shrink-0">
    <h3 class="text-2xl font-bold text-green-500 mb-0 mt-0">Tier 4</h3>
    <p class="text-lg text-green-300 font-semibold uppercase tracking-wider">Adaptativo</p>
</div>
<div class="md:w-3/4">
    <h4 class="text-xl text-white font-bold mb-2 mt-0">Modo "Franquicia Pro"</h4>
    <p class="text-lg text-gray-300 !mb-0 leading-tight">Aprendes de los ataques a otros, te adelantas a las amenazas y mejoras a diario.</p>
</div>
</div>

</div>

---

## De la Receta a la Acción: NIST + CIS

<div class="flex flex-col-reverse lg:flex-row gap-8 w-full max-w-[95%] mx-auto items-center text-left mt-8">

<!-- Contenido Izquierdo -->
<div class="w-full lg:w-[60%] flex flex-col gap-6">

<div class="bg-blue-950/20 border-l-4 border-blue-500 rounded-r-xl p-6 shadow-md hover:bg-neutral-900/50 transition-colors">
<h3 class="text-2xl xl:text-3xl font-bold text-blue-400 mb-2 mt-0 leading-tight">NIST CSF 2.0: Es el "QUÉ"</h3>
<p class="text-lg xl:text-xl text-gray-300 leading-snug !mb-0"><em class="text-neutral-400">La estrategia, el mapa, los objetivos de Don Taquero.</em></p>
</div>

<div class="bg-amber-950/20 border-l-4 border-amber-500 rounded-r-xl p-6 shadow-md hover:bg-neutral-900/50 transition-colors">
<h3 class="text-2xl xl:text-3xl font-bold text-amber-500 mb-2 mt-0 leading-tight">CIS Controls v8.1: Es el "CÓMO"</h3>
<p class="text-lg xl:text-xl text-gray-300 leading-snug !mb-0"><em class="text-neutral-400">La herramienta, los pasos técnicos, la lista de tareas.</em></p>
</div>

<!-- ¿Por qué ambos? y El Secreto -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
<!-- Por qué -->
<div class="bg-neutral-900/80 border border-neutral-700 rounded-xl p-6 shadow-lg">
<h4 class="text-xl xl:text-2xl font-bold text-white mb-4 mt-0">¿Por qué usar ambos?</h4>
<ul class="list-none space-y-3 text-lg xl:text-xl text-gray-300">
<li class="flex items-start"><span class="text-blue-400 mr-2">📌</span> <span><strong class="text-white">NIST</strong> nos da el orden.</span></li>
<li class="flex items-start"><span class="text-amber-500 mr-2">📌</span> <span><strong class="text-white">CIS</strong> nos da la prioridad <br><span class="text-sm xl:text-base text-neutral-400">(para no gastar en lo que no sirve)</span>.</span></li>
</ul>
</div>

<!-- El Secreto -->
<div class="bg-green-950/20 border border-green-700 hover:border-green-500/50 rounded-xl p-6 shadow-lg transition-colors">
<h4 class="text-xl xl:text-2xl font-bold text-green-400 mb-4 mt-0">El Secreto: IGs</h4>
<p class="text-lg xl:text-xl text-white font-medium mb-3 leading-tight">Implementation Groups (IGs)</p>
<p class="text-base xl:text-lg text-gray-300 mb-3 leading-snug">No tienes que hacer los 18 controles mañana.</p>
<p class="text-base xl:text-lg text-gray-300 !mb-0 leading-snug">CIS divide todo en 3 niveles de "hambre".</p>
</div>
</div>

</div>

<!-- Imagen Derecha -->
<div class="w-[50%] md:w-[32%] flex justify-center">
    <img src="/images/presentations/ciberseguridad-con-olor-a-taco/nist-cis-herramientas.png" alt="Caja de herramientas de ciberseguridad y libro de recetas" class="w-full h-auto !m-0 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-neutral-800 object-contain">
</div>
</div>

---

## Los 3 Niveles de "Hambre" <br><span class="text-3xl text-blue-400">Grupos de Implementación (IG)</span>

<div class="w-full max-w-[95%] mx-auto mt-8 overflow-x-auto">
<table class="w-full text-left text-lg xl:text-xl text-gray-300 border-collapse">
    <thead>
        <tr class="bg-neutral-900 border-b border-neutral-700">
            <th class="p-4 font-bold text-white uppercase tracking-wider w-1/6">Nivel (CIS)</th>
            <th class="p-4 font-bold text-white uppercase tracking-wider w-1/5">Nombre</th>
            <th class="p-4 text-center font-bold text-white uppercase tracking-wider w-1/6">Controles</th>
            <th class="p-4 font-bold text-white uppercase tracking-wider w-auto">¿Para quién es?</th>
        </tr>
    </thead>
    <tbody class="divide-y divide-neutral-800/50">
        <!-- IG1 -->
        <tr class="hover:bg-green-950/20 transition-colors">
            <td class="p-4 align-top"><strong class="text-2xl text-green-400">IG1</strong></td>
            <td class="p-4 align-top font-semibold text-green-300">Higiene Esencial</td>
            <td class="p-4 align-top text-center"><span class="bg-green-500/10 text-green-300 font-bold px-4 py-1 rounded-full border border-green-500/30 inline-block mt-1">56</span></td>
            <td class="p-4 align-top">
                <strong class="text-white">El Pastor Digital<br></strong> El 99% de las PyMEs. Es lo mínimo para no morir por ataques comunes (malware, phishing).
            </td>
        </tr>
        <!-- IG2 -->
        <tr class="hover:bg-amber-950/20 transition-colors bg-neutral-900/10">
            <td class="p-4 align-top"><strong class="text-2xl text-amber-500">IG2</strong></td>
            <td class="p-4 align-top font-semibold text-amber-400">Complejidad Moderada</td>
            <td class="p-4 align-top text-center"><span class="bg-amber-500/10 text-amber-400 font-bold px-4 py-1 rounded-full border border-amber-500/30 inline-block mt-1">74 <span class="text-sm font-normal opacity-75">(130 total)</span></span></td>
            <td class="p-4 align-top">
                <strong class="text-white">El Campechano con Todo<br></strong> Negocios con varias sucursales y datos más sensibles de clientes.
            </td>
        </tr>
        <!-- IG3 -->
        <tr class="hover:bg-red-950/20 transition-colors">
            <td class="p-4 align-top"><strong class="text-2xl text-red-500">IG3</strong></td>
            <td class="p-4 align-top font-semibold text-red-400">Protección Avanzada</td>
            <td class="p-4 align-top text-center"><span class="bg-red-500/10 text-red-400 font-bold px-4 py-1 rounded-full border border-red-500/30 inline-block mt-1">23 <span class="text-sm font-normal opacity-75">(153 total)</span></span></td>
            <td class="p-4 align-top">
                <strong class="text-white">El volcán con su salsita martajada<br></strong> Empresas que son blanco de ataques dirigidos y deben cumplir con regulaciones pesadas.
            </td>
        </tr>
    </tbody>
</table>
</div>

---

## IG1: Lavarse las Manos 🧼 <br><span class="text-2xl md:text-3xl text-green-400 block mt-2">Higiene Digital</span>

<p class="text-xl xl:text-2xl text-center text-gray-300 mb-6 mt-4 leading-snug">Según CIS, estos controles <strong class="text-white">previenen el 80% de los ataques más comunes.</strong></p>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-[95%] mx-auto text-left">

<!-- Control 1 -->
<div class="bg-green-950/20 border border-green-700/50 hover:border-green-500 rounded-2xl p-7 shadow-xl flex flex-col gap-3 transition-colors">
<div class="flex items-center gap-3 mb-2">
<span class="text-3xl">📦</span>
<h3 class="text-xl xl:text-2xl font-bold text-green-400 mb-0 mt-0 leading-tight">Inventario de Activos (Control 01, 02 y 03)</h3>
</div>
<p class="text-base xl:text-lg text-gray-300 leading-snug !mb-0">No puedes proteger lo que no sabes que tienes.</p>
<p class="text-base text-neutral-400 italic leading-snug !mb-0">¿Cuántas tablets hay en la cocina?</p>
<p class="text-base text-neutral-400 italic leading-snug !mb-0">¿Quién tiene una clave del sistema?</p>
<p class="text-base text-neutral-400 italic leading-snug !mb-0">¿Quién puede hacer un corte de caja?</p>
</div>

<!-- Control 4 -->
<div class="bg-blue-950/20 border border-blue-700/50 hover:border-blue-500 rounded-2xl p-7 shadow-xl flex flex-col gap-3 transition-colors">
<div class="flex items-center gap-3 mb-2">
<span class="text-3xl">🔑</span>
<h3 class="text-xl xl:text-2xl font-bold text-blue-400 mb-0 mt-0 leading-tight">Configuración Segura + MFA (Control 04, 05 y 06)</h3>
</div>
<p class="text-base xl:text-lg text-gray-300 leading-snug mb-3">El Multifactor Authentication (MFA) es el jabón: <strong class="text-white">si no lo usas, parece que estas limpio, hasta que aceptas que no lo estas.</strong></p>
<div class="mt-auto p-3 bg-neutral-900/60 border border-neutral-700 rounded-lg">
<p class="text-sm xl:text-base text-red-400 font-mono font-semibold !mb-0 text-center">"taquitos123" no es una contraseña,<br>es una <em>invitación.</em></p>
</div>
</div>

<!-- Control 11 -->
<div class="bg-amber-950/20 border border-amber-700/50 hover:border-amber-500 rounded-2xl p-7 shadow-xl flex flex-col gap-3 transition-colors">
<div class="flex items-center gap-3 mb-2">
<span class="text-3xl">💾</span>
<h3 class="text-xl xl:text-2xl font-bold text-amber-400 mb-0 mt-0 leading-tight">Recuperacion de datos (Control 11)</h3>
</div>
<p class="text-base xl:text-lg text-gray-300 leading-snug mb-3">Si se quema el trompo, <strong class="text-white">¿tienes otro en el refri?</strong></p>
<p class="text-base xl:text-lg text-gray-300 leading-snug mb-3">Si Don Taquero no esta, <strong class="text-white">¿Como van a preparar las salsitas??</strong></p>
<ul class="list-none space-y-2 text-sm xl:text-base text-neutral-300 mt-auto">
<li class="flex items-start gap-2"><span class="text-amber-400 mt-0.5">✓</span> Backups fuera de línea.</li>
<li class="flex items-start gap-2"><span class="text-amber-400 mt-0.5">✓</span> Backups En diferentes ubicaciones.</li>
<li class="flex items-start gap-2"><span class="text-amber-400 mt-0.5">✓</span> Backups probados.</li>
</ul>
</div>

</div>

<!-- Dato Matón -->
<div class="w-full max-w-[95%] mx-auto mt-6">
<div class="bg-gradient-to-r from-green-900/40 to-green-950/20 border border-green-600/60 rounded-2xl p-6 shadow-xl flex items-center gap-6">
<div class="text-4xl shrink-0">🏆</div>
<p class="text-xl xl:text-2xl text-white !mb-0 leading-snug">El <strong class="text-green-400">IG1 es barato, rápido y salva negocios.</strong> No necesitas un ejército de hackers ni un presupuesto de Silicon Valley para implementarlo.</p>
</div>
</div>

<div class="w-full max-w-[95%] mx-auto mt-4 bg-neutral-900/50 border-l-4 border-green-500/50 p-4 rounded-r-lg shadow-sm text-sm text-neutral-400">
<p class="!mb-0"><strong class="text-neutral-300">Referencia:</strong> [1] <a href="https://www.cisecurity.org/controls/implementation-groups/ig1" target="_blank" rel="noopener noreferrer" class="text-green-400 hover:text-green-300 underline decoration-green-500/30">CIS Controls – Implementation Group 1 (IG1) Official Page</a></p>
</div>

---

## IG2: El Segundo Turno 🌮🌮 <br><span class="text-2xl md:text-3xl text-amber-400 block mt-2">Complejidad Moderada</span>

<p class="text-xl xl:text-2xl text-center text-gray-300 mb-6 mt-4 leading-snug">Para quien ya sobrevivió el IG1 y sabe que tiene <strong class="text-white">más que proteger</strong>.</p>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-[95%] mx-auto text-left">

<!-- Control 5 y 6 -->
<div class="bg-amber-950/20 border border-amber-700/50 hover:border-amber-500 rounded-2xl p-7 shadow-xl flex flex-col gap-3 transition-colors">
<div class="flex items-center gap-3 mb-2">
<span class="text-3xl">👤</span>
<h3 class="text-xl xl:text-2xl font-bold text-amber-400 mb-0 mt-0 leading-tight">Cuentas y Privilegios (Controles 05 y 06)</h3>
</div>
<p class="text-base xl:text-lg text-gray-300 leading-snug mb-2"><strong class="text-white">Principio de Menor Privilegio:</strong></p>
<p class="text-base xl:text-lg text-amber-200/90 leading-snug mb-3">Solo el que pica la carne usa el cuchillo.</p>
<p class="text-base xl:text-lg text-amber-200/90 leading-snug mb-3">El mesero no necesita acceso a la caja. Mucho menos al portal del SAT ni a la cuenta bancaria.</p>
</div>

<!-- Control 7 -->
<div class="bg-blue-950/20 border border-blue-700/50 hover:border-blue-500 rounded-2xl p-7 shadow-xl flex flex-col gap-3 transition-colors">
<div class="flex items-center gap-3 mb-2">
<span class="text-3xl">🔧</span>
<h3 class="text-xl xl:text-2xl font-bold text-blue-400 mb-0 mt-0 leading-tight">Gestión de Vulnerabilidades (Control 07)</h3>
</div>
<p class="text-base xl:text-lg text-gray-300 leading-snug mb-3">No basta con instalar el software; <strong class="text-white">hay que actualizarlo.</strong></p>
<div class="p-3 bg-neutral-900/60 border border-neutral-700 rounded-lg">
<p class="text-sm xl:text-base text-blue-300 !mb-0 leading-snug">Los parches son como revisar que el tanque de gas no tenga fugas: <strong>se hace de forma constante.</strong></p>
</div>
</div>

<!-- Control 3 -->
<div class="bg-purple-950/20 border border-purple-700/50 hover:border-purple-500 rounded-2xl p-7 shadow-xl flex flex-col gap-3 transition-colors">
<div class="flex items-center gap-3 mb-2">
<span class="text-3xl">🔒</span>
<h3 class="text-xl xl:text-2xl font-bold text-purple-400 mb-0 mt-0 leading-tight">Protección de Datos (Control 03)</h3>
</div>
<p class="text-base xl:text-lg text-gray-300 leading-snug mb-3">¿Dónde guardamos la lista de clientes?</p>
<ul class="list-none space-y-2 text-sm xl:text-base text-neutral-300 mt-auto">
<li class="flex items-start gap-2"><span class="text-purple-400 mt-0.5">✓</span> Cifrado básico de datos sensibles.</li>
<li class="flex items-start gap-2"><span class="text-purple-400 mt-0.5">✓</span> Control de quién puede <strong class="text-white">ver</strong> la información.</li>
<li class="flex items-start gap-2"><span class="text-purple-400 mt-0.5">✓</span> Control de quién puede <strong class="text-white">modificarla</strong>.</li>
</ul>
</div>

</div>

<!-- Dato Matón IG2 -->
<div class="w-full max-w-[95%] mx-auto mt-6">
<div class="bg-gradient-to-r from-amber-900/40 to-amber-950/20 border border-amber-600/60 rounded-2xl p-6 shadow-xl flex items-center gap-6">
<div class="text-4xl shrink-0">🔐</div>
<p class="text-xl xl:text-2xl text-white !mb-0 leading-snug">En el IG2, dejamos de confiar en la <strong class="text-amber-400">"buena onda"</strong> y empezamos a confiar en los controles. Un empleado con acceso a todo es tan peligroso como un virus.</p>
</div>
</div>

<!-- Referencia -->
<div class="w-full max-w-[95%] mx-auto mt-4 bg-neutral-900/50 border-l-4 border-amber-500/50 p-4 rounded-r-lg shadow-sm text-sm text-neutral-400">
<p class="!mb-0"><strong class="text-neutral-300">Referencia:</strong> [1] <a href="https://www.cisecurity.org/controls/implementation-groups/ig2" target="_blank" rel="noopener noreferrer" class="text-amber-400 hover:text-amber-300 underline decoration-amber-500/30">CIS Controls – Implementation Group 2 (IG2) Official Page</a></p>
</div>

---

## IG3: La Taquería Espartana 🔱 <br><span class="text-2xl md:text-3xl text-red-500 block mt-2">Protección Avanzada</span>

<p class="text-xl xl:text-2xl text-center text-gray-300 mb-6 mt-4 leading-snug">Para las que no pueden permitirse <strong class="text-white">ni un segundo de inactividad</strong> ni <strong class="text-red-400">una sola filtración</strong>.</p>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-[95%] mx-auto text-left">

<!-- Control 17 -->
<div class="bg-red-950/20 border border-red-700/50 hover:border-red-500 rounded-2xl p-7 shadow-xl flex flex-col gap-3 transition-colors">
<div class="flex items-center gap-3 mb-2">
<span class="text-3xl">🚨</span>
<h3 class="text-xl xl:text-2xl font-bold text-red-400 mb-0 mt-0 leading-tight">Respuesta a Incidentes (Control 17)</h3>
</div>
<p class="text-base xl:text-lg text-gray-300 leading-snug mb-3">No es "ver qué hacemos si nos hackean". Es tener el <strong class="text-white">Manual de Incendios listo.</strong></p>
<ul class="list-none space-y-2 text-sm xl:text-base text-neutral-300 mt-auto">
<li class="flex items-start gap-2"><span class="text-red-400 mt-0.5">?</span> ¿Quién llama al banco?</li>
<li class="flex items-start gap-2"><span class="text-red-400 mt-0.5">?</span> ¿Quién desconecta el servidor?</li>
<li class="flex items-start gap-2"><span class="text-red-400 mt-0.5">?</span> ¿Quién avisa a los clientes?</li>
</ul>
</div>

<!-- Control 18 -->
<div class="bg-orange-950/20 border border-orange-700/50 hover:border-orange-500 rounded-2xl p-7 shadow-xl flex flex-col gap-3 transition-colors">
<div class="flex items-center gap-3 mb-2">
<span class="text-3xl">🥷</span>
<h3 class="text-xl xl:text-2xl font-bold text-orange-400 mb-0 mt-0 leading-tight">Pruebas de Penetración (Control 18)</h3>
</div>
<p class="text-base xl:text-lg text-gray-300 leading-snug mb-3">Contratar a un profesional para que intente <strong class="text-white">"robarse el trompo"</strong>.</p>
<div class="p-3 bg-neutral-900/60 border border-neutral-700 rounded-lg mt-auto">
<p class="text-sm xl:text-base text-orange-300 !mb-0 leading-snug">Encontrar los huecos antes de que los encuentre el <em>"Chambitas"</em> de la competencia.</p>
</div>
</div>

<!-- Control 8 -->
<div class="bg-neutral-900/40 border border-neutral-600/50 hover:border-neutral-400 rounded-2xl p-7 shadow-xl flex flex-col gap-3 transition-colors">
<div class="flex items-center gap-3 mb-2">
<span class="text-3xl">📋</span>
<h3 class="text-xl xl:text-2xl font-bold text-neutral-300 mb-0 mt-0 leading-tight">Auditoría y Bitácoras (Control 08)</h3>
</div>
<p class="text-base xl:text-lg text-gray-300 leading-snug mb-3">La <strong class="text-white">"Caja Negra"</strong> de la taquería.</p>
<ul class="list-none space-y-2 text-sm xl:text-base text-neutral-300 mt-auto">
<li class="flex items-start gap-2"><span class="text-neutral-400 mt-0.5">✓</span> Saber quién entró al sistema.</li>
<li class="flex items-start gap-2"><span class="text-neutral-400 mt-0.5">✓</span> A qué hora lo hizo.</li>
<li class="flex items-start gap-2"><span class="text-neutral-400 mt-0.5">✓</span> Qué movió o modificó.</li>
</ul>
</div>

</div>

<!-- Dato Matón IG3 -->
<div class="w-full max-w-[95%] mx-auto mt-6">
<div class="bg-gradient-to-r from-red-900/40 to-red-950/20 border border-red-600/60 rounded-2xl p-6 shadow-xl flex items-center gap-6">
<div class="text-4xl shrink-0">⚔️</div>
<p class="text-xl xl:text-2xl text-white !mb-0 leading-snug">El IG3 es para la empresa que ya sabe que <strong class="text-red-400">es un objetivo</strong>. No pregunta si la van a atacar. Pregunta <strong class="text-white">cuándo</strong>, y ya tiene la respuesta lista.</p>
</div>
</div>

<!-- Referencia -->
<div class="w-full max-w-[95%] mx-auto mt-4 bg-neutral-900/50 border-l-4 border-red-500/50 p-4 rounded-r-lg shadow-sm text-sm text-neutral-400">
<p class="!mb-0"><strong class="text-neutral-300">Referencia:</strong> [1] <a href="https://www.cisecurity.org/controls/implementation-groups/ig3" target="_blank" rel="noopener noreferrer" class="text-red-400 hover:text-red-300 underline decoration-red-500/30">CIS Controls – Implementation Group 3 (IG3) Official Page</a></p>
</div>

---

## El Combo Completo 🌮🔥 <br><span class="text-2xl md:text-3xl text-neutral-400 block mt-2">La Fórmula del Éxito</span>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full max-w-[95%] mx-auto mt-6 text-center">

<!-- NIST -->
<div class="bg-blue-950/30 border-2 border-blue-500/60 hover:border-blue-400 rounded-2xl p-7 shadow-xl flex flex-col items-center gap-4 transition-colors">
<div class="text-5xl mb-2">🗺️</div>
<h3 class="text-2xl xl:text-3xl font-black text-blue-400 mb-1 mt-0">NIST CSF 2.0</h3>
<p class="text-lg xl:text-xl text-blue-200/80 font-semibold uppercase tracking-widest mb-3">La Base · El Menú</p>
<div class="w-full p-4 bg-blue-950/20 rounded-xl border border-blue-800/50">
<p class="text-lg xl:text-xl text-white font-bold mb-1 leading-tight">Nos dio el <span class="text-blue-400">OBJETIVO</span></p>
<p class="text-base xl:text-lg text-neutral-400 !mb-0 leading-snug">Dejamos de ser el "Chambitas" para ser <em>estratégicos</em>.</p>
</div>
</div>

<!-- Flecha / separador -->
<div class="hidden lg:flex items-center justify-center text-4xl text-neutral-600">➕</div>

<!-- CIS -->
<div class="lg:col-start-3 bg-amber-950/30 border-2 border-amber-500/60 hover:border-amber-400 rounded-2xl p-7 shadow-xl flex flex-col items-center gap-4 transition-colors">
<div class="text-5xl mb-2">🧰</div>
<h3 class="text-2xl xl:text-3xl font-black text-amber-400 mb-1 mt-0">CIS Controls v8.1</h3>
<p class="text-lg xl:text-xl text-amber-200/80 font-semibold uppercase tracking-widest mb-3">El Relleno · El Proceso</p>
<div class="w-full p-4 bg-amber-950/20 rounded-xl border border-amber-800/50">
<p class="text-lg xl:text-xl text-white font-bold mb-1 leading-tight">Nos dio la <span class="text-amber-400">HERRAMIENTA</span></p>
<p class="text-base xl:text-lg text-neutral-400 !mb-0 leading-snug">Ya sabemos qué cables mover y qué claves poner.</p>
</div>
</div>

</div>

<!-- Lo que falta: ISO -->
<div class="w-full max-w-[95%] mx-auto mt-6">
<div class="bg-gradient-to-r from-neutral-900/80 via-neutral-800/60 to-neutral-900/80 border border-neutral-600 hover:border-neutral-400 rounded-2xl p-8 shadow-2xl text-center transition-colors">
<p class="text-2xl xl:text-3xl font-bold text-white mb-3 mt-0">¿Qué nos falta? El <span class="text-emerald-400">SISTEMA</span> 🔒</p>
<p class="text-xl xl:text-2xl text-gray-300 mb-3 leading-snug">De nada sirve lavar los platos hoy si mañana los dejamos sucios.</p>
<p class="text-xl xl:text-2xl text-gray-300 !mb-0 leading-snug">Necesitamos que la seguridad sea parte del <strong class="text-white">ADN del negocio</strong>.</p>
</div>
</div>

<!-- Teaser ISO -->
<div class="w-full max-w-[95%] mx-auto mt-6">
<div class="bg-gradient-to-r from-emerald-900/40 to-emerald-950/20 border border-emerald-600/60 rounded-2xl p-6 shadow-xl flex items-center gap-6">
<div class="text-4xl shrink-0">🏅</div>
<p class="text-xl xl:text-2xl text-white !mb-0 leading-snug"><strong class="text-emerald-400">Siguiente parada:</strong> <em>"De la higiene a la excelencia."</em></p>
</div>
</div>

---

## ISO 27001: La "Estrella Michelin" de tu Información

<p class="text-xl xl:text-2xl text-center text-gray-300 mb-6 mt-4 leading-snug">No son solo "papeles". Es el <strong class="text-white">Sistema de Gestión de Seguridad de la Información</strong> (SGSI) que demuestra que eres un proveedor confiable.</p>

<!-- La Triada del Taco -->
<h3 class="text-2xl xl:text-3xl font-bold text-emerald-400 mb-4 mt-0 w-full max-w-[95%] mx-auto">🌮 La Triada de la Ciberseguridad</h3>
<p class="text-xl xl:text-2xl text-center text-gray-300 mb-6 mt-4 leading-snug">la Carnita preparada con la reseta CONFIDENCIAL, La tortilla INTEGRA que no se rompe y salsa DISPONIBLE para quien le quiera entrar</p>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-[95%] mx-auto text-center mb-8">

<div class="bg-blue-950/20 border border-blue-600/50 hover:border-blue-400 rounded-2xl p-6 shadow-xl flex flex-col items-center gap-3 transition-colors">
<span class="text-4xl">🔐</span>
<h4 class="text-xl xl:text-2xl font-bold text-blue-400 mb-0 mt-0">Confidencialidad</h4>
<p class="text-base xl:text-lg text-gray-300 !mb-0 leading-snug">Que no se roben la receta.</p>
</div>

<div class="bg-amber-950/20 border border-amber-600/50 hover:border-amber-400 rounded-2xl p-6 shadow-xl flex flex-col items-center gap-3 transition-colors">
<span class="text-4xl">✅</span>
<h4 class="text-xl xl:text-2xl font-bold text-amber-400 mb-0 mt-0">Integridad</h4>
<p class="text-base xl:text-lg text-gray-300 !mb-0 leading-snug">Que no le cambien el precio al sistema de cobro.</p>
</div>

<div class="bg-green-950/20 border border-green-600/50 hover:border-green-400 rounded-2xl p-6 shadow-xl flex flex-col items-center gap-3 transition-colors">
<span class="text-4xl">🕐</span>
<h4 class="text-xl xl:text-2xl font-bold text-green-400 mb-0 mt-0">Disponibilidad</h4>
<p class="text-base xl:text-lg text-gray-300 !mb-0 leading-snug">Que haya tacos (y sistema) cuando el cliente llegue.</p>
</div>

</div>

<!-- Beneficio Real -->
<div class="w-full max-w-[95%] mx-auto">
<div class="bg-gradient-to-r from-emerald-900/40 to-emerald-950/20 border border-emerald-600/60 rounded-2xl p-6 shadow-xl flex items-center gap-6">
<div class="text-4xl shrink-0">💼</div>
<p class="text-xl xl:text-2xl text-white !mb-0 leading-snug">Con ISO, <strong class="text-emerald-400">"Cibertacos El Inge"</strong> puede demostrarle a un banco o a un corporativo que es un <strong class="text-white">proveedor confiable</strong>.</p>
</div>
</div>

---

## Anatomía de ISO/IEC 27001:2022 🔬

<p class="text-xl xl:text-2xl text-center text-gray-300 mb-6 mt-4 leading-snug">Un estándar internacional para establecer, implementar, mantener y mejorar un SGSI. <strong class="text-white">No es un producto, es un proceso.</strong></p>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-[95%] mx-auto mb-6">

<!-- Bloque 1: Cláusulas Obligatorias -->
<div class="bg-blue-950/20 border-2 border-blue-600/60 hover:border-blue-400 rounded-2xl p-7 shadow-xl flex flex-col gap-4 transition-colors">
<div class="flex items-center gap-3 mb-1">
<span class="text-4xl">📘</span>
<h3 class="text-2xl xl:text-3xl font-bold text-blue-400 mb-0 mt-0 leading-tight">El Cuerpo de la Norma</h3>
</div>
<p class="text-base xl:text-lg text-blue-200/80 font-semibold uppercase tracking-wider">Cláusulas 4 – 10 &nbsp;·&nbsp; Todo obligatorio</p>
<p class="text-base xl:text-lg text-gray-300 leading-snug">Son el <strong class="text-white">corazón del sistema</strong>. Para certificarse, todas son obligatorias.</p>
<ul class="list-none space-y-2 text-base xl:text-lg text-neutral-300">
<li class="flex items-start gap-2"><span class="text-blue-400 mt-0.5">4.</span> Contexto de la Organización</li>
<li class="flex items-start gap-2"><span class="text-blue-400 mt-0.5">5.</span> Liderazgo y Compromiso</li>
<li class="flex items-start gap-2"><span class="text-blue-400 mt-0.5">6.</span> Planificación y Gestión de Riesgos</li>
<li class="flex items-start gap-2"><span class="text-blue-400 mt-0.5">10.</span> Mejora Continua</li>
</ul>
<div class="mt-auto p-4 bg-blue-950/30 border border-blue-800/50 rounded-xl">
<p class="text-base xl:text-lg text-blue-200 !mb-1 font-semibold">¿Por qué todas obligatorias?</p>
<p class="text-sm xl:text-base text-neutral-400 !mb-0 leading-snug">No existe certificación parcial. La auditoría verifica que el SGSI funcione como sistema completo, no como piezas sueltas.</p>
</div>
</div>

<!-- Bloque 2: Anexo A -->
<div class="bg-emerald-950/20 border-2 border-emerald-600/60 hover:border-emerald-400 rounded-2xl p-7 shadow-xl flex flex-col gap-4 transition-colors">
<div class="flex items-center gap-3 mb-1">
<span class="text-4xl">📗</span>
<h3 class="text-2xl xl:text-3xl font-bold text-emerald-400 mb-0 mt-0 leading-tight">El Anexo A</h3>
</div>
<p class="text-base xl:text-lg text-emerald-200/80 font-semibold uppercase tracking-wider">93 Controles &nbsp;·&nbsp; Seleccionables por Riesgo</p>
<p class="text-base xl:text-lg text-gray-300 leading-snug">Divididos en <strong class="text-white">4 categorías</strong>:</p>
<ul class="list-none space-y-2 text-base xl:text-lg text-neutral-300">
<li class="flex items-start gap-2"><span class="text-emerald-400 mt-0.5">></span> Controles Organizacionales</li>
<li class="flex items-start gap-2"><span class="text-emerald-400 mt-0.5">></span> Controles de Personas</li>
<li class="flex items-start gap-2"><span class="text-emerald-400 mt-0.5">></span> Controles Físicos</li>
<li class="flex items-start gap-2"><span class="text-emerald-400 mt-0.5">></span> Controles Tecnológicos</li>
</ul>
<div class="mt-auto p-4 bg-emerald-950/30 border border-emerald-800/50 rounded-xl">
<p class="text-base xl:text-lg text-emerald-200 !mb-1 font-semibold">¿Por qué "opcionales"?</p>
<p class="text-sm xl:text-base text-neutral-400 !mb-0 leading-snug">Se seleccionan con base en un Análisis de Riesgo. Lo que no aplica se justifica y excluye en el <strong class="text-emerald-300">SoA</strong> <em>(Statement of Applicability)</em>.</p>
</div>
</div>

</div>

<!-- Relevancia -->
<div class="w-full max-w-[95%] mx-auto mb-4">
<div class="bg-gradient-to-r from-emerald-900/40 to-emerald-950/20 border border-emerald-600/60 rounded-2xl p-6 shadow-xl flex items-center gap-6">
<div class="text-4xl shrink-0">🌍</div>
<p class="text-xl xl:text-2xl text-white !mb-0 leading-snug">Es el <strong class="text-emerald-400">lenguaje que entienden los bancos, los gobiernos y los clientes internacionales.</strong> Transforma una "buena intención" en una garantía de cumplimiento.</p>
</div>
</div>

<!-- Referencia -->
<div class="w-full max-w-[95%] mx-auto bg-neutral-900/50 border-l-4 border-emerald-500/50 p-4 rounded-r-lg shadow-sm text-sm text-neutral-400">
<p class="!mb-0"><strong class="text-neutral-300">Referencia:</strong> [1] <a href="https://www.iso.org/standard/27001" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:text-emerald-300 underline decoration-emerald-500/30">ISO/IEC 27001:2022 – Information Security Management Systems</a></p>
</div>

---

## ¿Qué tomar y qué dejar? <br><span class="text-2xl md:text-3xl text-neutral-400 block mt-2">La Selección del Arquitecto de Ciberseguridad <em class="text-blue-400">(tú, sí, tú)</em></span>

<div class="w-full max-w-[95%] mx-auto mt-6 overflow-x-auto">
<table class="w-full text-left text-base xl:text-lg text-gray-300 border-collapse">
<thead>
<tr class="bg-neutral-900 border-b-2 border-neutral-700">
<th class="p-3 font-bold text-white text-sm xl:text-base uppercase tracking-wider w-[14%]">Categoría ISO</th>
<th class="p-3 font-bold text-white text-sm xl:text-base uppercase tracking-wider w-[18%]">Control Crítico ✅</th>
<th class="p-3 font-bold text-white text-sm xl:text-base uppercase tracking-wider w-auto">¿Por qué es Vital? <em class="text-neutral-400 normal-case">(El "Sí o Sí")</em></th>
<th class="p-3 font-bold text-white text-sm xl:text-base uppercase tracking-wider w-[18%]">Vínculo NIST / CIS</th>
</tr>
</thead>
<tbody>

<!-- Organizacionales -->
<tr class="border-t border-neutral-800 hover:bg-blue-950/10 transition-colors">
<td class="p-3 align-top" rowspan="2"><span class="inline-block bg-blue-900/30 border border-blue-700/50 text-blue-300 font-bold text-sm px-3 py-1 rounded-full">🏢 Org.</span></td>
<td class="p-3 align-top font-semibold text-blue-300">A.5.15<br>Control de Acceso</td>
<td class="p-3 align-top text-gray-300">Definir quién entra a la caja, al SAT y al WhatsApp.</td>
<td class="p-3 align-top"><span class="text-xs xl:text-sm text-neutral-400 font-mono">NIST: PR.AA<br>CIS: 5, 6</span></td>
</tr>
<tr class="border-t border-neutral-800/50 hover:bg-blue-950/10 transition-colors">
<td class="p-3 align-top font-semibold text-blue-300">A.5.17<br>Seg. en Proveedores</td>
<td class="p-3 align-top text-gray-300">¿Quién maneja tu Point of Sale (PoS)? Si ellos fallan, tú no cobras.</td>
<td class="p-3 align-top"><span class="text-xs xl:text-sm text-neutral-400 font-mono">NIST: GV.SC<br>CIS: 15</span></td>
</tr>

<!-- Personas -->
<tr class="border-t-2 border-neutral-700 bg-neutral-900/20 hover:bg-amber-950/10 transition-colors">
<td class="p-3 align-top"><span class="inline-block bg-amber-900/30 border border-amber-700/50 text-amber-300 font-bold text-sm px-3 py-1 rounded-full">👥 Personas</span></td>
<td class="p-3 align-top font-semibold text-amber-300">A.6.3<br>Concientización</td>
<td class="p-3 align-top text-gray-300">Entrenar al equipo para no dar el código de verificación de WhatsApp a desconocidos.</td>
<td class="p-3 align-top"><span class="text-xs xl:text-sm text-neutral-400 font-mono">NIST: PR.AT<br>CIS: 14</span></td>
</tr>

<!-- Físicos -->
<tr class="border-t-2 border-neutral-700 hover:bg-orange-950/10 transition-colors">
<td class="p-3 align-top"><span class="inline-block bg-orange-900/30 border border-orange-700/50 text-orange-300 font-bold text-sm px-3 py-1 rounded-full">🏗️ Físicos</span></td>
<td class="p-3 align-top font-semibold text-orange-300">A.7.4<br>Monitoreo Físico</td>
<td class="p-3 align-top text-gray-300">CCTV y alarmas. Si se llevan la laptop con la e.firma, el firewall no sirve.</td>
<td class="p-3 align-top"><span class="text-xs xl:text-sm text-neutral-400 font-mono">NIST: PR.PS<br>CIS: 3</span></td>
</tr>

<!-- Tecnológicos -->
<tr class="border-t-2 border-neutral-700 bg-neutral-900/20 hover:bg-emerald-950/10 transition-colors">
<td class="p-3 align-top" rowspan="3"><span class="inline-block bg-emerald-900/30 border border-emerald-700/50 text-emerald-300 font-bold text-sm px-3 py-1 rounded-full">💻 Tech.</span></td>
<td class="p-3 align-top font-semibold text-emerald-300">A.8.5<br>Autenticación Segura</td>
<td class="p-3 align-top text-gray-300">MFA en todo. Correo, Bancos, Panel de Control.</td>
<td class="p-3 align-top"><span class="text-xs xl:text-sm text-neutral-400 font-mono">NIST: PR.AA<br>CIS: 6</span></td>
</tr>
<tr class="border-t border-neutral-800/50 bg-neutral-900/20 hover:bg-emerald-950/10 transition-colors">
<td class="p-3 align-top font-semibold text-emerald-300">A.8.13<br>Backups</td>
<td class="p-3 align-top text-gray-300">La única vacuna real contra el Ransomware.</td>
<td class="p-3 align-top"><span class="text-xs xl:text-sm text-neutral-400 font-mono">NIST: RC.RP<br>CIS: 11</span></td>
</tr>
<tr class="border-t border-neutral-800/50 bg-neutral-900/20 hover:bg-emerald-950/10 transition-colors">
<td class="p-3 align-top font-semibold text-emerald-300">A.8.8<br>Vulnerabilidades</td>
<td class="p-3 align-top text-gray-300">Actualizar la tablet y el Windows pirata del "Chambitas".</td>
<td class="p-3 align-top"><span class="text-xs xl:text-sm text-neutral-400 font-mono">NIST: PR.PS<br>CIS: 7</span></td>
</tr>

</tbody>
</table>
</div>

<!-- Fin de la tabla -->
</div>

---

## ¿Qué dejar para después? <br><span class="text-2xl md:text-3xl text-neutral-400 block mt-2">Los controles de ISO 27001:2022 que no matan a una PyME si los dejas para más adelante</span>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-[95%] mx-auto">

<!-- Grupo 1: Si no desarrollas software -->
<div class="bg-neutral-900/60 border border-neutral-700 hover:border-neutral-500 rounded-2xl p-6 shadow-xl flex flex-col gap-3 transition-colors">
<h3 class="text-2xl xl:text-3xl font-bold text-neutral-300 mb-2 mt-0 flex items-center gap-2"><span>💻</span> Si no desarrollas software</h3>
<ul class="list-none space-y-3 text-lg xl:text-xl text-neutral-400 flex-1">
<li class="flex items-start gap-2"><span class="text-red-500 shrink-0 mt-0.5">✗</span><div><strong class="text-neutral-300">A.8.25–A.8.31 Ciclo de Desarrollo Seguro</strong><br><em class="text-lg xl:text-xl text-neutral-500">No programas tu propio software → no aplica.</em></div></li>
<li class="flex items-start gap-2"><span class="text-red-500 shrink-0 mt-0.5">✗</span><div><strong class="text-neutral-300">A.8.26 Requisitos de Seguridad</strong><br><em class="text-lg xl:text-xl text-neutral-500">Para equipos que especifican requerimientos técnicos propios.</em></div></li>
<li class="flex items-start gap-2"><span class="text-red-500 shrink-0 mt-0.5">✗</span><div><strong class="text-neutral-300">A.8.29 Pruebas de Seguridad en Desarrollo</strong><br><em class="text-lg xl:text-xl text-neutral-500">Sin código propio, no hay nada que probar.</em></div></li>
</ul>
</div>

<!-- Grupo 2: Si eres PyME pequeña -->
<div class="bg-neutral-900/60 border border-neutral-700 hover:border-neutral-500 rounded-2xl p-6 shadow-xl flex flex-col gap-3 transition-colors">
<h3 class="text-2xl xl:text-3xl font-bold text-neutral-300 mb-2 mt-0 flex items-center gap-2"><span>🏢</span> Si eres una PyME pequeña</h3>
<ul class="list-none space-y-3 text-base xl:text-lg text-neutral-400 flex-1">
<li class="flex items-start gap-2"><span class="text-red-500 shrink-0 mt-0.5">✗</span><div><strong class="text-neutral-300">A.5.35 Revisión independiente del SGSI</strong><br><em class="text-lg xl:text-xl text-neutral-500">Auditorías internas de días enteros con 5 empleados no escalan.</em></div></li>
<li class="flex items-start gap-2"><span class="text-red-500 shrink-0 mt-0.5">✗</span><div><strong class="text-neutral-300">A.5.4 Responsabilidades de la Alta Dirección</strong><br><em class="text-lg xl:text-xl text-neutral-500">Relevante, pero no necesitas un comité formal si el dueño lo decide todo.</em></div></li>
<li class="flex items-start gap-2"><span class="text-red-500 shrink-0 mt-0.5">✗</span><div><strong class="text-neutral-300">A.6.4 Acciones Disciplinarias</strong><br><em class="text-lg xl:text-xl text-neutral-500">Con 3 empleados de confianza, el proceso legal puede esperar.</em></div></li>
</ul>
</div>

<!-- Grupo 3: Complejidad técnica alta -->
<div class="bg-neutral-900/60 border border-neutral-700 hover:border-neutral-500 rounded-2xl p-6 shadow-xl flex flex-col gap-3 transition-colors">
<h3 class="text-2xl xl:text-3xl font-bold text-neutral-300 mb-2 mt-0 flex items-center gap-2"><span>🔐</span> Complejidad técnica alta</h3>
<ul class="list-none space-y-3 text-base xl:text-lg text-neutral-400 flex-1">
<li class="flex items-start gap-2"><span class="text-red-500 shrink-0 mt-0.5">✗</span><div><strong class="text-neutral-300">A.8.24 Gestión de Criptografía</strong><br><em class="text-lg xl:text-xl text-neutral-500">Usa lo estándar (HTTPS, BitLocker). La criptografía custom es para expertos.</em></div></li>
<li class="flex items-start gap-2"><span class="text-red-500 shrink-0 mt-0.5">✗</span><div><strong class="text-neutral-300">A.8.16 Monitoreo de Actividad</strong><br><em class="text-lg xl:text-xl text-neutral-500">SIEMs y correlación de eventos → IG3. No para el IG1 del primer año.</em></div></li>
<li class="flex items-start gap-2"><span class="text-red-500 shrink-0 mt-0.5">✗</span><div><strong class="text-neutral-300">A.8.23 Filtrado Web Avanzado</strong><br><em class="text-lg xl:text-xl text-neutral-500">Con un buen DNS como NextDNS o Cloudflare, ya cubriste lo básico.</em></div></li>
</ul>
</div>

</div>

<!-- Callout final -->
<div class="w-full max-w-[95%] mx-auto mt-6">
<div class="bg-gradient-to-r from-neutral-900/80 via-amber-950/20 to-neutral-900/80 border border-amber-700/50 rounded-2xl p-6 shadow-xl flex items-center gap-6">
<div class="text-4xl shrink-0">📋</div>
<p class="text-xl xl:text-2xl text-white !mb-0 leading-snug">Cada exclusión va al <strong class="text-amber-400">SoA (Statement of Applicability)</strong> con su justificación. No es hacer trampa — es <strong class="text-white">demostrar que entiendes tus riesgos.</strong></p>
</div>
</div>

---

## El Océano Azul de los MSPs 🌊

<div class="flex flex-col-reverse lg:flex-row gap-8 w-full max-w-[95%] mx-auto items-start text-left mt-6">

<!-- Contenido Izquierdo -->
<div class="w-full lg:w-[58%] flex flex-col gap-5">

<!-- ¿Qué es un MSP? -->
<div class="bg-blue-950/20 border-l-4 border-blue-500 rounded-r-xl p-6 shadow-md">
<h3 class="text-2xl xl:text-3xl font-bold text-blue-400 mb-3 mt-0">¿Qué es un Managed Service Provider?</h3>
<ul class="list-none space-y-2 text-lg xl:text-xl text-gray-300">
<li class="flex items-start gap-2"><span class="text-red-400 mt-0.5">✗</span> <span>Dejar de <em>"apagar fuegos"</em> por evento <span class="text-neutral-500 text-base">(Modelo reactivo)</span>.</span></li>
<li class="flex items-start gap-2"><span class="text-green-400 mt-0.5">✓</span> <span>Pasar a un <strong class="text-white">modelo de suscripción</strong> <span class="text-neutral-500 text-base">(Modelo proactivo)</span>.</span></li>
</ul>
</div>

<!-- ¿Por qué Océano Azul? -->
<div class="flex flex-col gap-3">
<h3 class="text-2xl xl:text-3xl font-bold text-cyan-400 mb-1 mt-0">¿Por qué es un Océano Azul? 🐟</h3>

<div class="bg-neutral-900/70 border border-cyan-700/40 rounded-xl p-4 flex gap-3 items-start">
<span class="text-2xl shrink-0">🦈</span>
<div><strong class="text-cyan-300 text-lg xl:text-xl">Baja Competencia:</strong><span class="text-base xl:text-lg text-gray-300"> Casi nadie aplica NIST o CIS en PyMEs de forma profesional.</span></div>
</div>

<div class="bg-neutral-900/70 border border-cyan-700/40 rounded-xl p-4 flex gap-3 items-start">
<span class="text-2xl shrink-0">📣</span>
<div><strong class="text-cyan-300 text-lg xl:text-xl">Alta Demanda:</strong><span class="text-base xl:text-lg text-gray-300"> Los negocios están asustados pero no saben a quién acudir.</span></div>
</div>

<div class="bg-neutral-900/70 border border-cyan-700/40 rounded-xl p-4 flex gap-3 items-start">
<span class="text-2xl shrink-0">📈</span>
<div><strong class="text-cyan-300 text-lg xl:text-xl">Escalabilidad:</strong><span class="text-base xl:text-lg text-gray-300"> La plantilla que sirve para una taquería sirve para 100 taquerías más.</span></div>
</div>

<div class="bg-neutral-900/70 border border-cyan-700/40 rounded-xl p-4 flex gap-3 items-start">
<span class="text-2xl shrink-0">🇲🇽</span>
<div><strong class="text-cyan-300 text-lg xl:text-xl">Impacto Social:</strong><span class="text-base xl:text-lg text-gray-300"> Proteges el patrimonio de familias mexicanas.</span></div>
</div>

</div>
</div>

<!-- Imagen Derecha -->

<div class="w-[60%] md:w-1/3">
<img src="/images/presentations/ciberseguridad-con-olor-a-taco/oceano-azul-msps.png" alt="Tiburones corporativos en pecera vs Océano Azul de las PyMEs" class="rounded-xl shadow-lg border border-neutral-800 w-full h-auto !m-0">
</div>
</div>

---

## De chambitas a Arquitecto de Ciberseguridad <br><span class="text-2xl md:text-3xl text-neutral-400 block mt-2">El Cambio de Mentalidad</span>

<!-- Antes / Después -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-[95%] mx-auto mt-6">

<!-- El chambitas -->
<div class="bg-red-950/20 border-2 border-red-700/50 rounded-2xl p-7 shadow-xl flex flex-col gap-3">
<div class="flex items-center gap-3 mb-1">
<span class="text-4xl">🔧</span>
<h3 class="text-2xl xl:text-3xl font-bold text-red-400 mb-0 mt-0">El chambitas <em class="text-lg font-normal text-red-300/70"></em></h3>
</div>
<ul class="list-none space-y-3 text-lg xl:text-xl text-neutral-300">
<li class="flex items-start gap-2"><span class="text-red-400 shrink-0 mt-0.5">✗</span> Enfocado en la herramienta: <em class="text-neutral-400">"¿Qué antivirus compro?"</em></li>
<li class="flex items-start gap-2"><span class="text-red-400 shrink-0 mt-0.5">✗</span> Reactivo: <em class="text-neutral-400">"Ya nos hackearon, qué hacemos."</em></li>
<li class="flex items-start gap-2"><span class="text-red-400 shrink-0 mt-0.5">✗</span> Habla en <em class="text-neutral-400">bits, bytes y CVEs.</em></li>
</ul>
</div>

<!-- El Arquitecto -->
<div class="bg-emerald-950/20 border-2 border-emerald-600/60 rounded-2xl p-7 shadow-xl flex flex-col gap-3">
<div class="flex items-center gap-3 mb-1">
<span class="text-4xl">🏗️</span>
<h3 class="text-2xl xl:text-3xl font-bold text-emerald-400 mb-0 mt-0">El Arquitecto <em class="text-lg font-normal text-emerald-300/70"></em></h3>
</div>
<ul class="list-none space-y-3 text-lg xl:text-xl text-neutral-300">
<li class="flex items-start gap-2"><span class="text-emerald-400 shrink-0 mt-0.5">✓</span> Enfocado en el riesgo: <em class="text-neutral-300">"¿Qué le duele al negocio?"</em></li>
<li class="flex items-start gap-2"><span class="text-emerald-400 shrink-0 mt-0.5">✓</span> Proactivo: <em class="text-neutral-300">"Vamos a gobernar esto antes de que pase."</em></li>
<li class="flex items-start gap-2"><span class="text-emerald-400 shrink-0 mt-0.5">✓</span> Habla en <strong class="text-white">continuidad y confianza.</strong></li>
</ul>
</div>

</div>

<!-- Las 3 Habilidades -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full max-w-[95%] mx-auto mt-5">

<div class="bg-neutral-900/70 border border-blue-700/40 rounded-2xl p-5 shadow-lg flex flex-col gap-2">
<h4 class="text-xl xl:text-2xl font-bold text-blue-400 mb-1 mt-0">🔁 Adaptabilidad</h4>
<p class="text-base xl:text-lg text-gray-300 !mb-0 leading-snug">No es copiar y pegar NIST; es saber qué parte le sirve a la taquería.</p>
</div>

<div class="bg-neutral-900/70 border border-amber-700/40 rounded-2xl p-5 shadow-lg flex flex-col gap-2">
<h4 class="text-xl xl:text-2xl font-bold text-amber-400 mb-1 mt-0">🗣️ Comunicación</h4>
<p class="text-base xl:text-lg text-gray-300 !mb-0 leading-snug">Explicarle a Don Taquero el riesgo en <strong class="text-white">pesos y centavos</strong>, no en vulnerabilidades CVE.</p>
</div>

<div class="bg-neutral-900/70 border border-emerald-700/40 rounded-2xl p-5 shadow-lg flex flex-col gap-2">
<h4 class="text-xl xl:text-2xl font-bold text-emerald-400 mb-1 mt-0">⚖️ Ética y Profesionalismo</h4>
<p class="text-base xl:text-lg text-gray-300 !mb-0 leading-snug">Salir de la informalidad del <em>"crack"</em> y el software pirata.</p>
</div>

</div>

<!-- Callout final -->
<div class="w-full max-w-[95%] mx-auto mt-6">
<div class="bg-gradient-to-r from-emerald-900/40 to-blue-900/30 border border-emerald-600/50 rounded-2xl p-6 shadow-xl text-center">
<p class="text-2xl xl:text-3xl text-white font-bold !mb-0 leading-snug">Tu valor no es lo que sabes hacer, <span class="text-emerald-400">sino lo que logras proteger.</span></p>
</div>
</div>

---

## ¡La cuenta, por favor! 🧾

<p class="text-xl xl:text-2xl text-center text-gray-300 mb-6 mt-4 leading-snug">Lo que te llevas hoy en la bolsa:</p>

<div class="flex flex-col lg:flex-row gap-8 w-full max-w-[95%] mx-auto items-center">

<!-- Imagen izquierda -->
<div class="w-full lg:w-[35%] flex-shrink-0 flex justify-center">
<img src="/images/presentations/ciberseguridad-con-olor-a-taco/cibertacos_el_inge.jpg" alt="Cibertacos El Inge" class="w-full max-w-xs lg:max-w-full h-auto !m-0 rounded-2xl shadow-[0_0_50px_rgba(251,191,36,0.15)] border border-amber-800/30 object-contain">
</div>

<!-- Contenido derecho -->
<div class="w-full lg:w-[65%] flex flex-col gap-6">

<!-- Resumen 3 columnas -->
<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">

<div class="bg-blue-950/20 border-2 border-blue-600/60 rounded-2xl p-5 shadow-xl flex flex-col items-center text-center gap-2">
<span class="text-4xl">🗺️</span>
<h3 class="text-xl xl:text-2xl font-black text-blue-400 mb-0 mt-0">NIST CSF 2.0</h3>
<p class="text-sm xl:text-base text-blue-200/80 font-semibold uppercase tracking-wider mb-0">La Estrategia</p>
<p class="text-sm xl:text-base text-gray-300 !mb-0 leading-snug"><em>Gobernar es decidir.</em></p>
</div>

<div class="bg-amber-950/20 border-2 border-amber-600/60 rounded-2xl p-5 shadow-xl flex flex-col items-center text-center gap-2">
<span class="text-4xl">🧰</span>
<h3 class="text-xl xl:text-2xl font-black text-amber-400 mb-0 mt-0">CIS v8.1</h3>
<p class="text-sm xl:text-base text-amber-200/80 font-semibold uppercase tracking-wider mb-0">La Táctica</p>
<p class="text-sm xl:text-base text-gray-300 !mb-0 leading-snug"><em>Lávate las manos con IG1.</em></p>
</div>

<div class="bg-emerald-950/20 border-2 border-emerald-600/60 rounded-2xl p-5 shadow-xl flex flex-col items-center text-center gap-2">
<span class="text-4xl">🏅</span>
<h3 class="text-xl xl:text-2xl font-black text-emerald-400 mb-0 mt-0">ISO 27001</h3>
<p class="text-sm xl:text-base text-emerald-200/80 font-semibold uppercase tracking-wider mb-0">El Sistema</p>
<p class="text-sm xl:text-base text-gray-300 !mb-0 leading-snug"><em>Calidad y confianza.</em></p>
</div>

</div>

<!-- CTA -->
<div class="bg-gradient-to-r from-amber-900/40 to-red-900/30 border border-amber-600/50 rounded-2xl p-6 shadow-xl text-center">
<p class="text-xl xl:text-2xl text-white font-bold !mb-0 leading-snug">Deja de ser un <span class="text-red-400">"chambitas"</span>, conviértete en el <span class="text-amber-400">Arquitecto que México necesita</span> y protege la economía real: el <strong class="text-white">99.8%</strong> te está esperando. 🌮</p>
</div>

</div>
</div>

<!-- Gracias / Q&A — moved to new slide below -->
</div>

---

## 🙏 ¡Muchas Gracias!

<div style="display: flex; flex-direction: row; align-items: center; justify-content: center; gap: 4rem; width: 100%;">



<!-- Columna derecha: Avatar badge -->
<div style="position: relative; width: 10rem; height: 10rem; flex-shrink: 0;">
<!-- Glow -->
<div style="position: absolute; inset: -4px; background: linear-gradient(to right, #3b82f6, #9333ea); border-radius: 9999px; filter: blur(8px); opacity: 0.75;"></div>
<!-- Avatar -->
<img src="https://www.gravatar.com/avatar/4949755b64eb223f0fa2b210aaf9707c?s=400" alt="Luis Pereida" style="position: relative; width: 100%; height: 100%; border-radius: 9999px; object-fit: cover; background: #171717; border: 4px solid #0a0a0a; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.8); display: block; margin: 0 !important;">
<!-- Pulse dot -->
<div style="position: absolute; bottom: 0.5rem; right: 0.5rem; background: #171717; border-radius: 9999px; padding: 4px; border: 1px solid #404040;">
<div style="width: 1rem; height: 1rem; background: #3b82f6; border-radius: 9999px; animation: pulse 2s cubic-bezier(0.4,0,0.6,1) infinite;"></div>
</div>
</div>

<!-- Columna izquierda: Hero tagline -->
<div style="display: flex; flex-direction: column; align-items: flex-start; gap: 0.25rem;">
<div style="font-family: 'JetBrains Mono', monospace; font-size: 1.5rem; font-weight: 700; color: #60a5fa; white-space: nowrap;">Yo soy</div>
<div style="font-family: 'Rubik', sans-serif; font-size: 4rem; font-weight: 800; color: #ffffff; letter-spacing: -0.05em; line-height: 1.1; white-space: nowrap;">Luis Pereida</div>
<div style="font-family: 'JetBrains Mono', monospace; font-size: 1.5rem; font-weight: 700; color: #60a5fa; white-space: nowrap;">y hago ciberseguridad para todos</div>
</div>

</div>

<p class="text-4xl xl:text-5xl font-black text-amber-400 !mb-0 leading-tight">¿Preguntas y Respuestas?</p>

<!-- Contacto + QR -->
<div class="bg-neutral-900/70 border border-neutral-700 rounded-2xl p-8 shadow-xl flex flex-col sm:flex-row items-center justify-center gap-10 w-full max-w-3xl">

<!-- QR -->
<div class="flex flex-col gap-2 items-center">
<span class="text-neutral-400 text-sm uppercase tracking-widest font-semibold">Encuentra la presentación en</span>
<a href="https://pereidax86.com/presentations/ciberseguridad-con-olor-a-taco" target="_blank" rel="noopener noreferrer">
<img src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&color=ffffff&bgcolor=171717&data=https://pereidax86.com/presentations/ciberseguridad-con-olor-a-taco" alt="QR a la presentación" class="rounded-xl !m-0 w-36 h-36 xl:w-44 xl:h-44">
</a>
</div>

<div class="hidden sm:block text-neutral-700 text-4xl">·</div>

<!-- Web y LinkedIn -->
<div class="flex flex-col gap-4 items-center">
<div class="flex flex-col gap-1 items-center">
<span class="text-neutral-400 text-sm uppercase tracking-widest font-semibold">Web</span>
<a href="https://pereidax86.com" target="_blank" rel="noopener noreferrer" class="text-2xl xl:text-3xl text-blue-400 hover:text-blue-300 font-bold no-underline">pereidax86.com</a>
</div>
<div class="flex flex-col gap-1 items-center">
<span class="text-neutral-400 text-sm uppercase tracking-widest font-semibold">LinkedIn</span>
<a href="https://www.linkedin.com/in/pereidax86/" target="_blank" rel="noopener noreferrer" class="text-2xl xl:text-3xl text-blue-400 hover:text-blue-300 font-bold no-underline">/in/pereidax86</a>
</div>
</div>

</div>

<p class="text-xl xl:text-2xl text-neutral-500 !mb-0">Ciberseguridad con olor a taco · HackGDL 2026</p>

</div>