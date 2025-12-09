---
title: "Personaliza Vi: Mejora Tu Flujo de Trabajo"
description: "Aprende a configurar tu archivo .vimrc para convertir Vi/Vim en un editor potente adaptado a tus necesidades de SysAdmin."
pubDate: 2025-01-20
author: "Luis Pereida"
tags: ["Vim", "Linux", "SysAdmin", "Productividad", "Configuración"]
image: "/images/blog/vim-custom-setup.webp"
---

En nuestra [entrada anterior](/blog/ayuda-linux-sin-google), exploramos los conceptos básicos de Vi y cómo navegar entre sus modos principales, incluyendo ese divertido (y frustrante) momento cuando intentas cerrarlo por primera vez y terminas consultando a “San Google”.

Ahora daremos un paso más para adentrarnos en el verdadero poder de Vi: su increíble capacidad de personalización.

Este editor no solo es potente en su forma predeterminada, sino que también puede ser configurado para adaptarse a tus necesidades específicas, mejorando tu flujo de trabajo y preparándote para cualquier escenario. Desde programación en múltiples lenguajes hasta la lectura y edición eficiente de archivos de configuración, personalizar Vi es una habilidad esencial que llevará tu productividad a otro nivel.

## Configuración Básica con .vimrc

La personalización de Vi (o más precisamente Vim) comienza con el archivo de configuración `.vimrc`, ubicado en tu directorio personal.

> **protip >** El sufijo **rc** proviene de “run commands” o “resource configuration”, y es común en archivos de configuración de Unix/Linux, como `.bashrc` o `.zshrc`.

En el caso de `.vimrc`, este archivo te permite establecer configuraciones y atajos que se aplican automáticamente cada vez que abres el editor. Si no tienes un archivo `.vimrc`, puedes crearlo fácilmente dentro de tu carpeta home:

```bash
touch ~/.vimrc
```

Algunas configuraciones útiles para comenzar a personalizar Vi están orientadas a mejorar la navegación, la edición de texto y la experiencia general del usuario.

Aquí te dejo una configuración base sólida (“boilerplate”) que puedes copiar y pegar directamente en tu archivo:

```Vim Script

" --- NAVEGACIÓN Y VISUALIZACIÓN ---```

" Mostrar números de línea para facilitar la navegación
set number

" Mostrar el número relativo de las líneas desde el cursor
" (Extremadamente útil para saltar líneas con comandos como 5j o 10k)
set relativenumber

" Resaltar la sintaxis del texto, útil para programación y configs
syntax on

" Hacer que las ventanas divididas aparezcan de manera uniforme (natural)
set splitright
set splitbelow

" --- EDICIÓN Y CÓDIGO ---

" Habilitar la indentación automática para mantener el código limpio
set autoindent

" Configurar la tabulación para usar 4 espacios
set tabstop=4
set shiftwidth=4
set expandtab

" --- BÚSQUEDA ---

" Resaltar resultados de búsquedas para facilitar la edición
set hlsearch

" Activar la búsqueda incremental mientras escribes
set incsearch

" --- SISTEMA ---

" Habilitar deshacer ilimitado incluso después de cerrar el archivo
set undofile
```

## Otros truquitos mágicos

Con las configuraciones anteriores, podrías abrir un archivo de código, navegar hasta una sección específica usando los números relativos de las líneas y realizar cambios organizados gracias a la indentación automática. La búsqueda resaltada e incremental te permitirá encontrar rápidamente los elementos clave que necesitas modificar.

Pero no es lo único que puedes hacer. Aquí van tres trucos nivel SysAdmin experto:

1. **Plegado de código** (Folding)
Cuando trabajas con archivos de configuración gigantes (te estoy viendo a ti, httpd.conf), sirve bastante poder crear secciones de código que se puedan abrir y cerrar para mantener el orden.

Agrega esto a tu configuración:

```Vim Script
set foldmethod=indent
set foldlevel=1
```

Usa `zo` para abrir una sección.

Usa `zc` para cerrar una sección.

2. **Multitarea con Splits**
Si necesitas visualizar dos archivos de texto al mismo tiempo (por ejemplo, comparando dos versiones de un script), intenta dividir la pantalla en múltiples ventanas:

```Vim Script
:split otro_archivo.txt    " División Horizontal
:vsplit tercer_archivo.txt " División Vertical
```

3. **El salvavidas: Autoguardado**

El último truco mágico que te quiero compartir es habilitar el autoguardado. Siempre pasa algo y, cuando pasa, recuerdas que no habías guardado los cambios en las últimas 4 horas.

```Vim Script
set autowrite
```

Esto guardará el archivo automáticamente cuando te muevas a otro archivo o ejecutes comandos externos.

## ctrl + D

Personalizar `vi` es una de las mejores inversiones de tiempo que puedes hacer para mejorar tu productividad. Desde configuraciones básicas hasta herramientas avanzadas, cada ajuste se traduce en un flujo de trabajo más eficiente y adaptado a tus necesidades.

Recuerda que, como siempre, **lo más importante es nunca dejar de preguntar**. Explora nuevas configuraciones, prueba plugins y sigue aprendiendo para dominar este editor increíblemente versátil.

Lo escrito en esta entrada no es lo único que existe, ¡El límite es tu creatividad!