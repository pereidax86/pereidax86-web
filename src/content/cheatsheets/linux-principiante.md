---
title: "Guía Súper Rápida de Supervivencia en Linux"
description: "Tu primera guía para conquistar la consola sin que explote la computadora. Comandos esenciales, ejercicios prácticos y chistes malos incluidos."
subtitle: "Para perder el miedo y superar nuevos retos (aunque leer el título no sea tan rápido)"
shortName: "LINUX"
difficulty: principiante
tags: ["Linux", "Terminal", "Básico", "Comandos", "SSH", "Vim"]
icon: "🐧"
pubDate: 2026-01-29
author: "Luis Pereida"
image: "/images/cheatsheets/linux-supervivencia.png"
printable: true
---

## 🚀 Introducción: Perdiendo el miedo

**¡Felicidades!** Que estés leyendo esto significa que te has animado a empezar a usar Linux, y eso es algo **muy bueno**. Sé que al principio puede parecer algo complicado, como si solo los expertos con barbas largas y camisetas de Tux (el pingüinito de linux, para los compas) pudieran usarlo. Además, si has buscado ayuda en foros o redes sociales, probablemente te encontraste con usuarios... digamos, poco amigables. Es común que los más inexpertos sean los más tóxicos (paradójicamente), pero también hay mucha gente buena onda que ayuda por el puro espíritu de la comunidad. No estás solo.

**Pero tranquilo, ya diste el primer paso.** Linux no es complicado, simplemente funciona diferente a lo que estás acostumbrado. Es como mudarte a una ciudad nueva: al principio todo parece extraño, pero con el tiempo te das cuenta de que solo son costumbres diferentes.

Esta guía pretende darte las herramientas para que empieces a sentirte cómodo en este sistema operativo. Es nivel **básico**: encontrarás lo esencial para moverte en la consola, manipular archivos, verlos, editarlos, y hasta administrar procesos. Todo paso a pasito, sin prisa pero sin pausa.

**Espero que te guste**, y si crees que le puede ayudar a alguien más a perder el miedo, por favor compártela. Al final, todos empezamos igual: sin saber ni cómo salir de Vim. 😅


Spoiler: **sigo teniendo problemas para salir**.


La terminal de Linux no es tu enemiga. Es como hablar directamente con tu computadora en lugar de usar señas. Sí, al principio se siente raro, como aprender un idioma nuevo, pero una vez que le agarras la onda, descubres que es **más rápido**, **más poderoso** y hasta **más divertido** que hacer clic en 47 menús diferentes.

### ¿Por qué deberías aprender la terminal?

**Velocidad**: Escribir `ls -lah` es más rápido que navegar con el mouse por 5 carpetas.

**Automatización**: Puedes hacer que la computadora haga tareas repetitivas por ti (scripts son magia).

**Superpoderes**: Cosas que son imposibles o muy difíciles con interfaz gráfica, en la terminal son triviales.

**Sentirte como hacker**: Aunque solo estés listando archivos, te verás como en una película.

### Disclaimer importante

> **⚠️ ADVERTENCIA**: No, instalar linux no te hace **hacker**, pero si te hace **más guapo**... y con mucha barba probablemente.

La buena noticia es que Linux es bastante difícil de romper **si sabes lo que estás haciendo**. Y para eso estás aquí, para aprender sin dramas.

### La regla de oro

**Lo mas importante es nunca dejar de preguntar**. En serio. Linux tiene documentación para TODO. Y si la documentación no te ayuda, la comunidad sí. Nunca estás solo en la terminal.



## 🆘 Tu Mejor Amigo: Comandos de Ayuda

Antes de aprender comandos específicos, necesitas entender **qué diablos es un comando** y **cómo funciona**. Es la base de todo lo que harás en la terminal.

### ¿Qué es un comando?

Un comando en Linux es básicamente una **instrucción** que le das a tu computadora. Pero a diferencia de hacer clic en botones, aquí le hablas directamente. Un comando típico se ve así:

```bash
comando -opciones argumentos
```

Déjame explicarte cada parte:

#### 🎯 El Comando
Es **qué** quieres hacer. Ejemplo: `ls` (listar archivos), `cd` (cambiar directorio), `cp` (copiar).

#### 🎛️ Las Opciones (Flags)
Son **cómo** quieres que se haga. Van precedidas por `-` o `--`. Ejemplo:
- `ls -l` → lista en formato largo (con detalles)
- `ls -a` → muestra archivos ocultos
- `ls -lah` → combina varias opciones

#### 📦 Los Argumentos
Son **sobre qué** vas a aplicar el comando. Pueden ser archivos, carpetas, textos, etc.

**Ejemplo completo**:
```bash
ls -lah /home/usuario
│   │    └─ Argumento (dónde buscar)
│   └────── Opciones (cómo listar)
└────────── Comando (qué hacer)
```

En español: "Lista (`ls`) en formato largo con archivos ocultos y tamaños legibles (`-lah`) el contenido de `/home/usuario`"

### ¿Por qué aprender a buscar ayuda primero?

Porque **memorizarlo todo es imposible** y tampoco es necesario. Déjame darte un dato que te va a sorprender:

> **💡 Pro tip** > En los exámenes de certificación de **Red Hat** (RHCSA, RHCE, etc.), **se permite ver la documentación y la ayuda**. No se califica que te sepas todo de memoria, se califica tu **habilidad para resolver problemas**. Y saber preguntar (al manual, a la ayuda, a la documentación) **es una habilidad esencial**.

Incluso los SysAdmins con 20 años de experiencia siguen consultando el `man` y el `--help`. La diferencia entre un principiante y un experto no es cuántos comandos memorizó, sino **qué tan rápido encuentra la respuesta**.

Dicho esto, empecemos con el primer comando que debes de dominar.

### `man`
#### El manual de todo

`man` (de "manual") es tu **biblioteca personal**. Cada comando en Linux tiene su propio manual, escrito por las personas que lo crearon. 

**La filosofía**: Si está instalado en tu sistema, tiene un manual. Sin excepciones.

##### ¿Qué hay dentro?

Cuando abres un manual, encontrarás:

- **NAME**: Qué es en una línea
- **SYNOPSIS**: Cómo se usa (sintaxis)
- **DESCRIPTION**: Explicación detallada
- **OPTIONS**: Todas las opciones y qué hacen
- **EXAMPLES**: Casos de uso reales

**Sintaxis**:
```bash
man comando
```

**Ejemplo**:
```bash
man ls
```

Esto te abre la documentación completa de `ls`. 

#### Navegación básica

Lo mínimo que necesitas saber:

- **Espacio**: Avanzar página
- **`/palabra`**: Buscar "palabra" 
- **`n`**: Siguiente resultado de búsqueda
- **`q`**: Salir

**Ejemplo práctico**: 
```bash
man ls          # Abrir manual
/hidden         # Buscar "hidden"
n               # Ver siguiente resultado
q               # Salir
```

> **💡 Pro tip** > La búsqueda con `/` es tu mejor amiga. No leas todo el manual, busca lo que necesitas.

#### 💪 Ejercicio 1: Dominando `man`

**Reto**: Usa `man` para descubrir qué opción de `ls` ordena archivos por tamaño.

<details>
<summary><strong>✅ Solución</strong> (haz clic para ver)</summary>

```bash
# 1. Abrir el manual
man ls

# 2. Buscar "size"
/size

# 3. Presionar 'n' hasta encontrar la opción de sort
# Encontrarás: -S (sort by file size)

# 4. Salir
q

# 5. Probar el comando
ls -lS
```

**Respuesta**: La opción es `-S` (mayúscula).

</details>

### `--help`
#### Ayuda rápida

Casi todos los comandos tienen `--help` para ver un resumen rápido sin abrir el manual completo.

**Sintaxis**:
```bash
comando --help
```

**Ejemplo**:
```bash
ls --help
```

Te mostrará las opciones más comunes sin abrir un manual completo.

> **💡 Pro tip** > Algunos comandos usan `-h` en lugar de `--help`. Si uno no funciona, prueba el otro.

### `apropos`
#### Buscar comandos

¿Necesitas hacer algo pero no sabes qué comando usar? `apropos` busca la palabra clave en **todas** las descripciones de los manuales instalados en tu sistema.

**Sintaxis**:
```bash
apropos palabra_clave
```

**Ejemplo**:
```bash
apropos copy
```

**Salida típica**:
```
cp (1)               - copy files and directories
scp (1)              - secure copy (remote file copy program)
rsync (1)            - a fast, versatile, remote file-copying tool
```

Cada línea te muestra:
- **Nombre del comando** (cp, scp, rsync)
- **(1)** = Sección del manual (1 = comandos de usuario)
- **Descripción corta** de qué hace

> **💡 Pro tip** > `apropos` es tu mejor amigo cuando sabes **qué quieres hacer** pero no sabes **cómo se llama el comando**. Piensa en verbos: search, copy, delete, compress, etc.

#### 💪 Ejercicio 2: Descubriendo comandos

**Reto**: Usa `apropos` para encontrar comandos que sirvan para:
1. Comprimir archivos
2. Buscar archivos en el sistema

<details>
<summary><strong>✅ Solución</strong> (haz clic para ver)</summary>

```bash
# 1. Buscar comandos de compresión
apropos compress
# Encontrarás: gzip, bzip2, zip, tar, etc.

# 2. Buscar comandos de búsqueda
apropos search
# o mejor aún:
apropos find
# Encontrarás: find, locate, grep, etc.
```

**Respuestas**: 
- Comprimir: `gzip`, `tar`, `zip`
- Buscar: `find`, `locate`, `grep`

</details>

### `which`
#### ¿Dónde está instalado?

Te dice la **ubicación exacta** del ejecutable de un comando. Útil para saber si un programa está instalado y dónde vive.

**Sintaxis**:
```bash
which comando
```

**Ejemplo**:
```bash
which python
# Salida: /usr/bin/python
```

**¿Por qué importa?** Porque a veces tienes múltiples versiones instaladas (Python 2 vs Python 3, por ejemplo) y `which` te dice cuál se ejecutará cuando escribas el comando.

**Casos de uso comunes**:
```bash
# Verificar si git está instalado
which git
# Si está: /usr/bin/git
# Si no está: (no hay output)

# Ver qué versión de Python se ejecuta por defecto
which python
which python3

# Verificar editor de texto instalado
which nano
which vim
```

> **💡 Pro tip** > Si `which` no devuelve nada, significa que el comando **no está instalado** o no está en tu PATH. Es la forma más rápida de verificar si necesitas instalar algo.

#### 💪 Ejercicio 3: Verificando instalaciones

**Reto**: Usa `which` para verificar si tienes instalados:
1. git
2. curl  
3. nano

<details>
<summary><strong>✅ Solución</strong> (haz clic para ver)</summary>

```bash
# Verificar git
which git
# Si está: /usr/bin/git (o similar)
# Si no: (vacío)

# Verificar curl
which curl
# Si está: /usr/bin/curl

# Verificar nano
which nano
# Si está: /usr/bin/nano
```

**Interpretación**:
- ✅ Si ves una ruta → El programa está instalado
- ❌ Si no hay output → No está instalado (necesitas instalarlo)

</details>

### `whereis`
#### Todas las ubicaciones

Similar a `which`, pero `whereis` te da **más información**: binario, código fuente y manual. Es como un detective que busca TODO lo relacionado con un comando.

**Sintaxis**:
```bash
whereis comando
```

**Ejemplo**:
```bash
whereis ls
# Salida: ls: /usr/bin/ls /usr/share/man/man1/ls.1.gz
```

**¿Qué significa cada parte?**
```
ls: /usr/bin/ls /usr/share/man/man1/ls.1.gz
│   │             └─ Manual (para 'man ls')
│   └─────────────── Binario ejecutable
└─────────────────── Nombre del comando
```

**Diferencia con `which`**:
- `which` → Solo te dice dónde está el ejecutable
- `whereis` → Te dice dónde está el ejecutable **Y** el manual **Y** el código fuente (si existe)

**Casos de uso**:
```bash
# Ver todo sobre python
whereis python
# python: /usr/bin/python /usr/lib/python3.10 /usr/share/man/man1/python.1.gz

# Ver dónde está el manual de un comando
whereis man
# man: /usr/bin/man /usr/share/man/man1/man.1.gz

# Buscar todo sobre git
whereis git
```

> **💡 Pro tip** > Usa `whereis` cuando quieras saber si un comando tiene manual (`man`). Si ves algo como `/usr/share/man/...`, significa que puedes hacer `man comando`.

#### 💪 Ejercicio 4: Explorando con whereis

**Reto**: Usa `whereis` para:
1. Ver toda la información de `ls`
2. Comprobar si `nano` tiene manual
3. Comparar el output con `which nano`

<details>
<summary><strong>✅ Solución</strong> (haz clic para ver)</summary>

```bash
# 1. Toda la info de ls
whereis ls
# ls: /usr/bin/ls /usr/share/man/man1/ls.1.gz
# Tiene: binario Y manual

# 2. Verificar manual de nano
whereis nano
# nano: /usr/bin/nano /usr/share/man/man1/nano.1.gz
# ✅ Sí tiene manual, puedes hacer: man nano

# 3. Comparar con which
which nano
# /usr/bin/nano
# Solo el binario

whereis nano
# nano: /usr/bin/nano /usr/share/man/man1/nano.1.gz
# ¡Más información!
```

**Conclusión**: `whereis` es más completo, `which` es más simple.

</details>


### 🏆 Desafío: El Sherlock Holmes de la Terminal

**Situación Real**: Necesitas descargar una imagen de internet, pero no sabes qué comando usar, si lo tienes instalado ni dónde está su documentación.

**Tu Misión**:
1. Usa **`apropos`** para encontrar un comando relacionado con "download".
2. Elige `wget` y usa **`which`** o **`whereis`** para confirmar que está instalado.
3. Usa **`man`** (o `--help`) para encontrar la opción que permite **guardar el archivo de salida** (*output document*) con otro nombre.
4. Construye el comando final para descargar el logo de este sitio web (`http://pereidax86.com/favicon.png`) y guardarlo como `logo.png`.

<details>
<summary><strong>✅ Solución</strong></summary>

**Paso 1: ¿Qué comando uso?**
```bash
apropos download
# Salida: verás 'wget' o 'curl'. Usaremos wget.
```

**Paso 2: ¿Dónde está y tiene manual?**
```bash
whereis wget
# Salida: /usr/bin/wget ... /usr/share/man/...
# ✅ Vemos el binario y que tiene manual
```

**Paso 3: ¿Cómo cambio el nombre al guardar?**
```bash
man wget
# Buscamos "output" con /output
# Encontramos: -O file, --output-document=file
```

**Paso 4: El comando final**
```bash
wget -O logo.png http://pereidax86.com/favicon.png
```

**Resultado**: Aprendiste a encontrar, verificar y aprender a usar una herramienta nueva desde cero. ¡Ese es el superpoder de Linux! 🦸‍♂️

</details>



## 📂 Navegación y Gestión de Archivos

Aquí empieza la diversión. Vamos a aprender a moverte por tu sistema de archivos como pez en el agua.

### Analogía importante

Tu terminal es como File Explorer en Windows o Finder en Mac, pero escribiendo en lugar de haciendo clic. Las carpetas siguen siendo carpetas, los archivos siguen siendo archivos. Solo cambia cómo interactúas con ellos.

### `pwd`
#### ¿Dónde estoy?

**`pwd`** significa "Print Working Directory" (imprime el directorio actual).

**Sintaxis**:
```bash
pwd
```

**Ejemplo**:
```bash
pwd
# Salida: /home/usuario/Documentos
```

Te dice exactamente en qué carpeta estás parado ahora mismo.

| Nivel de peligro | 🟢 **Seguro** - No puede romper nada |
|------------------|--------------------------------------|

### `ls`
#### ¿Qué hay aquí?

**`ls`** lista el contenido del directorio actual.

**Sintaxis básica**:
```bash
ls
```

**Opciones útiles**:

| Opción | Qué hace |
|--------|----------|
| `-l` | Lista detallada (permisos, tamaño, fecha) |
| `-a` | Muestra archivos ocultos (en linux, los archivos ocultos empiezan con `.`) |
| `-h` | Tamaños legibles para humanos (KB, MB, GB) |
| `-t` | Ordena por fecha de modificación |
| `-r` | Orden inverso |

**El combo perfecto**:
```bash
ls -lah
```

Esto te da TODO: lista detallada, archivos ocultos, tamaños legibles.

**Ejemplo de salida**:
```bash
drwxr-xr-x   5 usuario  staff   160B Jan 29 10:30 Documentos
-rw-r--r--   1 usuario  staff   1.2K Jan 28 15:45 nota.txt
-rw-------   1 usuario  staff   512B Jan 27 09:12 .secreto
```

| Nivel de peligro | 🟢 **Seguro** - Solo mira, no toca |
|------------------|-------------------------------------|

> **💡 Pro tip** > Si te pierdes con tantas opciones, recuerda: `man ls` es tu amigo.

### `cd`
#### Cambiar de directorio

**`cd`** significa "Change Directory" (cambiar directorio).

**Sintaxis**:
```bash
cd /ruta/a/directorio
```

**Ejemplos**:
```bash
# Ir a tu carpeta de Documentos
cd ~/Documentos

# Ir a la raíz del sistema
cd /

# Retroceder un nivel
cd ..

# Retroceder dos niveles
cd ../..

# Ir al directorio anterior
cd -

# Volver a tu HOME
cd
# o
cd ~
```

**Atajos importantes**:
- `~` = Tu directorio home (`/home/usuario`)
- `.` = Directorio actual
- `..` = Directorio padre (un nivel arriba)
- `-` = Directorio anterior

| Nivel de peligro | 🟢 **Seguro** - Solo te mueves, no cambias nada |
|------------------|--------------------------------------------------|

> **💡 Pro tip** > Presiona `Tab` para autocompletar rutas. Si escribes `cd Doc` y presionas Tab, Linux completará `cd Documentos/` automáticamente. ¡Linux es mágico así!

### `mkdir`
#### Crear directorios

**`mkdir`** significa "Make Directory" (crear directorio).

**Sintaxis**:
```bash
mkdir nombre_carpeta
```

**Ejemplos**:
```bash
# Crear una carpeta
mkdir proyectos

# Crear múltiples carpetas
mkdir carpeta1 carpeta2 carpeta3

# Crear carpetas anidadas (con padres)
mkdir -p carpeta_principal/subcarpeta1/subcarpeta2
```

La opción `-p` crea todas las carpetas intermedias si no existen. Sin `-p`, si `carpeta_principal` no existe, te dará error.

| Nivel de peligro | 🟢 **Seguro** - Solo crea, no borra |
|------------------|--------------------------------------|

> **💡 Pro tip** > La opción `-p` también evita errores si el directorio ya existe. Úsala siempre para scripts.

### `touch`
#### Crear archivos vacíos

**`touch`** crea un archivo vacío (o actualiza la fecha de modificación si ya existe).

**Sintaxis**:
```bash
touch nombre_archivo
```

**Ejemplos**:
```bash
# Crear un archivo
touch nota.txt

# Crear múltiples archivos
touch archivo1.txt archivo2.txt archivo3.txt
```

| Nivel de peligro | 🟢 **Seguro** - Crea archivos vacíos |
|------------------|--------------------------------------|

### `cp`
#### Copiar archivos y directorios

**`cp`** significa "Copy" (copiar).

**Sintaxis**:
```bash
cp origen destino
```

**Ejemplos**:
```bash
# Copiar un archivo
cp archivo.txt archivo_backup.txt

# Copiar un archivo a otra carpeta
cp archivo.txt ~/Documentos/

# Copiar un directorio completo (recursivo)
cp -r carpeta_origen carpeta_destino
```

**Opciones útiles**:
- `-r`: Recursivo (necesario para carpetas)
- `-v`: Verbose (te dice qué está copiando)
- `-i`: Interactivo (pregunta antes de sobrescribir)

| Nivel de peligro | 🟡 **Cuidado** - Puede sobrescribir archivos |
|------------------|----------------------------------------------|

> **💡 Pro tip** > Usa `-v` (verbose) para ver qué está pasando mientras copias. Te da paz mental.

### `mv`
#### Mover y renombrar

**`mv`** significa "Move" (mover), pero también sirve para renombrar.

**Sintaxis**:
```bash
mv origen destino
```

**Ejemplos**:
```bash
# Mover un archivo a otra carpeta
mv archivo.txt ~/Documentos/

# Renombrar un archivo (técnicamente, moviendo a un nuevo nombre)
mv archivo_viejo.txt archivo_nuevo.txt

# Mover una carpeta completa
mv carpeta_origen ~/Backups/
```

| Nivel de peligro | 🟡 **Cuidado** - Puede sobrescribir y el original desaparece |
|------------------|--------------------------------------------------------------|

### `rm`
#### Eliminar archivos

**`rm`** significa "Remove" (eliminar). **CUIDADO con este**.

**Sintaxis**:
```bash
rm archivo
```

**Ejemplos**:
```bash
# Eliminar un archivo
rm archivo.txt

# Eliminar múltiples archivos
rm archivo1.txt archivo2.txt archivo3.txt

# Eliminar una carpeta completa (recursivo)
rm -r carpeta

# Eliminar forzadamente (sin confirmación)
rm -rf carpeta
```

**Opciones útiles**:
- `-r`: Recursivo (necesario para carpetas)
- `-i`: Interactivo (pregunta antes de eliminar)
- `-f`: Force (forzar sin preguntar)

| Nivel de peligro | 🔴 **PELIGROSO** - No hay papelera de reciclaje |
|------------------|--------------------------------------------------|

> **💡 Pro tip** > **SIEMPRE** usa `rm -i` la primera vez para que te confirme. Te salva de borrar lo que no querías. Especialmente usa `-i` junto con `-r` para carpetas: `rm -ri carpeta/`.

### 🏆 Desafío: El Organizador Compulsivo
 
 **Situación Real**: Te acaban de entregar un proyecto desordenado. Tienes archivos dispersos y necesitas organizar tu espacio de trabajo antes de que tu jefe lo vea.
 
 **Tu Misión**:
 1. Crea una carpeta llamada `proyecto_caos` y entra en ella.
 2. Crea 3 archivos de texto: `notas.txt`, `presupuesto.txt`, `todo.txt`.
 3. Te das cuenta de que `todo.txt` debería llamarse `tareas.txt`. Renómbralo.
 4. Crea una carpeta `backup` para estar seguro.
 5. Haz una copia de seguridad de todos tus archivos `.txt` en la carpeta `backup`.
 6. Lista el contenido de `backup` para confirmar que todo está a salvo.
 
 <details>
 <summary><strong>✅ Solución</strong></summary>
 
 ```bash
 # 1. Preparar el terreno
 mkdir proyecto_caos
 cd proyecto_caos
 
 # 2. Crear el desorden inicial
 touch notas.txt presupuesto.txt todo.txt
 
 # 3. Corregir el nombre
 mv todo.txt tareas.txt
 
 # 4. Crear zona segura
 mkdir backup
 
 # 5. Respaldar todo
 cp *.txt backup/
 
 # 6. Verificar
 ls -la backup/
 ```
 
 **Salida esperada**:
 ```
 total 0
 drwxr-xr-x  2 usuario  staff   96 Jan 29 11:00 .
 drwxr-xr-x  5 usuario  staff  160 Jan 29 11:00 ..
 -rw-r--r--  1 usuario  staff    0 Jan 29 11:00 notas.txt
 -rw-r--r--  1 usuario  staff    0 Jan 29 11:00 presupuesto.txt
 -rw-r--r--  1 usuario  staff    0 Jan 29 11:00 tareas.txt
 ```
 
 </details>



## 📝 Ver y Editar Contenido de Archivos

No todo en Linux se edita con vim (tranquilos, ese trauma viene después). Primero vamos a ver cómo **leer** archivos sin abrirlos.

### `cat`
#### Ver archivos pequeños

**`cat`** concatena y muestra archivos (viene de "concatenate").

**Sintaxis**:
```bash
cat archivo.txt
```

**Ejemplos**:
```bash
# Ver un archivo
cat config.txt

# Ver múltiples archivos
cat archivo1.txt archivo2.txt

# Ver con números de línea
cat -n archivo.txt
```

Perfecto para archivos pequeños. Para archivos grandes, usa `less` (explicado abajo).

> **💡 Pro tip** > Agrega `-n` para mostrar números de línea. Muy útil cuando necesitas cambiar algo en la línea 47 de un archivo enorme de configuración.

### `less`
#### Ver archivos grandes (navegable)

**`less`** es como `cat` pero con superpoderes: puedes navegar, buscar, y no se vomita todo el archivo en tu pantalla.

**Sintaxis**:
```bash
less archivo.txt
```

**Cómo navegar**:
- **Espacio**: Página siguiente
- **`b`**: Página anterior
- **Flechas arriba/abajo**: Línea por línea
- **`/palabra`**: Buscar "palabra"
- **`n`**: Siguiente resultado de búsqueda
- **`q`**: Salir

| Cuándo usar | Archivos grandes, logs, configs |
|-------------|----------------------------------|

> **💡 Pro tip** > ¿Por qué se llama `less` si hace más que `more`? Porque "less is more" (menos es más). Sí, es un chiste de Unix de los 70s.

### `head`
#### Ver las primeras líneas

**`head`** muestra las primeras 10 líneas de un archivo (por defecto).

**Sintaxis**:
```bash
head archivo.txt

# Ver las primeras 20 líneas
head -n 20 archivo.txt
```

Perfecto para ver el inicio de logs o archivos CSV.

### `tail`
#### Ver las últimas líneas

**`tail`** muestra las últimas 10 líneas de un archivo (por defecto).

**Sintaxis**:
```bash
tail archivo.txt

# Ver las últimas 50 líneas
tail -n 50 archivo.txt

# Ver en tiempo real (logs)
tail -f /var/log/syslog
```

La opción `-f` ("follow") es **ORO PURO** para logs. Te muestra las nuevas líneas a medida que se escriben.

> **💡 Pro tip** > `tail -f` es tu mejor amigo para ver logs en tiempo real. Úsalo cuando estés debuggeando o monitoreando servicios.

### Editores de texto para principiantes

### `nano`
#### El editor amigable

**nano** es el editor más fácil de usar en Linux. Tiene las instrucciones **en la pantalla**, así que no te pierdes.

**Sintaxis**:
```bash
nano mi_archivo.txt
```

**Controles básicos**:
- **Escribir**: Simplemente escribe
- **`Ctrl + O`**: Guardar (te preguntará el nombre)
- **Enter**: Confirmar nombre
- **`Ctrl + X`**: Salir
- **`Ctrl + K`**: Cortar línea
- **`Ctrl + U`**: Pegar

Las instrucciones están **abajo en la pantalla**. El `^` significa `Ctrl`.

| Facilidad | 😊 **Muy fácil** - Ideal para empezar |
|-----------|----------------------------------------|

### Vi/Vim
#### Para valientes (lo veremos después)

Por ahora, quédate con `nano`. Vim es poderoso pero tiene una curva de aprendizaje. Lo cubriremos en la sección final.

### 🏆 Desafío: El Editor Fantasma
 
 **Situación Real**: Necesitas dejar una nota urgente para tu "yo del futuro" con la lista de compras, pero no tienes interfaz gráfica.
 
 **Tu Misión**:
 1. Usa `nano` para crear un archivo llamado `lista_super.txt`.
 2. Escribe al menos 5 artículos esenciales (ej. Café, Tacos, Pizza).
 3. Guarda el archivo y sal del editor.
 4. Verifica el contenido sin volver a entrar al editor.
 5. Muestra solo las primeras 3 líneas para asegurarte de que lo más importante (el café) está al principio.
 
 <details>
 <summary><strong>✅ Solución</strong></summary>
 
 ```bash
 # 1. Abrir nano
 nano lista_super.txt
 
 # 2. Escribir (dentro de nano):
 # Café
 # Tacos
 # Pizza
 # Salsas
 # Refresco
 
 # 3. Guardar y salir
 # Ctrl + O (Enter para confirmar)
 # Ctrl + X
 
 # 4. Verificar contenido
 cat lista_super.txt
 
 # 5. Ver el inicio
 head -n 3 lista_super.txt
 ```
 
 </details>



## 👥 Usuarios, Grupos y Permisos

Aquí está la magia (y a veces el dolor de cabeza) de Linux: el sistema de permisos.

### Analogía: Los roles en Discord

Los permisos son como los roles en Discord:
- **Admin** (tú, el dueño del archivo): Puedes hacer lo que quieras
- **Moderador** (tu equipo/grupo): Acceso limitado controlado
- **Usuario normal** (el resto del mundo): Solo puede ver

### Los tres tipos de actores

En Linux, cada archivo tiene permisos para:

1. **Usuario (u)** - Owner: El dueño del archivo
2. **Grupo (g)** - Group: Un grupo de usuarios
3. **Otros (o)** - Others: El resto del mundo

### Los tres tipos de permisos

Cada actor puede tener:

1. **r** (read) - Leer: Ver el contenido
2. **w** (write) - Escribir: Modificar o borrar
3. **x** (execute) - Ejecutar: Correr como programa (para archivos) o entrar (para carpetas)

### Entendiendo `ls -l`

Cuando haces `ls -l`, ves algo así:

```bash
-rw-r--r-- 1 usuario grupo 1234 Jan 29 10:00 archivo.txt
```

Desglosemos esto:

```
-rw-r--r--
│││ │ │
│││ │ └─ Otros: solo pueden leer (r--)
│││ └─── Grupo: solo pueden leer (r--)
││└───── Usuario: puede leer y escribir (rw-)
│└────── Tipo de archivo (- = archivo, d = directorio)
└─────── Permisos
```

**Ejemplos**:

| Permisos | Significado |
|----------|-------------|
| `-rw-r--r--` | Archivo: tú lees/escribes, otros solo leen |
| `drwxr-xr-x` | Directorio: tú todo, otros entran y leen |
| `-rwx------` | Archivo ejecutable: solo tú puedes todo |
| `drwx------` | Directorio privado: solo tú entras |

### `chmod`
#### Cambiar permisos

**`chmod`** significa "Change Mode" (cambiar modo).

#### Método 1: Letras (más intuitivo)

**Sintaxis**:
```bash
chmod [quién][+/-][permiso] archivo
```

**Quién**:
- `u` = usuario (owner)
- `g` = grupo
- `o` = otros
- `a` = all (todos)

**Operación**:
- `+` = agregar permiso
- `-` = quitar permiso
- `=` = establecer exactamente

**Ejemplos**:
```bash
# Hacer un script ejecutable
chmod +x script.sh

# Quitar permiso de escritura a otros
chmod o-w archivo.txt

# Dar permisos de lectura a todos
chmod a+r documento.txt

# Usuario puede todo, grupo y otros solo leer
chmod u=rwx,go=r archivo.txt
```

| Nivel de peligro | 🟡 **Medio** - Puede dejar archivos inaccesibles |
|------------------|--------------------------------------------------|

#### Método 2: Números (para puristas)

Cada permiso tiene un valor:

| Permiso | Valor |
|---------|-------|
| r (read) | 4 |
| w (write) | 2 |
| x (execute) | 1 |

Se suman para cada actor:

| Suma | Permisos | Significado |
|------|----------|-------------|
| 7 | rwx | Leer, escribir, ejecutar |
| 6 | rw- | Leer y escribir |
| 5 | r-x | Leer y ejecutar |
| 4 | r-- | Solo leer |
| 0 | --- | Sin permisos |

**Ejemplos**:
```bash
# 644 = rw-r--r-- (típico para archivos)
chmod 644 archivo.txt

# 755 = rwxr-xr-x (típico para scripts)
chmod 755 script.sh

# 600 = rw------- (solo tú puedes leer/escribir)
chmod 600 secreto.txt

# 777 = rwxrwxrwx (todos pueden todo - ¡PELIGROSO!)
chmod 777 archivo.txt  # NO HAGAS ESTO A MENOS QUE SEPAS POR QUÉ
```

> **💡 Pro tip** > `644` para archivos normales, `755` para scripts y carpetas. Memoriza esos dos y estarás bien el 90% del tiempo.

### `chown`
#### Cambiar dueño

**`chown`** cambia el dueño de un archivo (requiere sudo en la mayoría de casos).

**Sintaxis**:
```bash
sudo chown nuevo_usuario archivo
```

**Ejemplos**:
```bash
# Cambiar dueño
sudo chown juan documento.txt

# Cambiar dueño y grupo
sudo chown juan:developers app_importante.sh
```

| Nivel de peligro | 🔴 **Alto** - Requiere privilegios elevados |
|------------------|---------------------------------------------|

### 🏆 Desafío: El Documento Top Secret
 
 **Situación Real**: Eres el administrador de un sistema y necesitas guardar las claves de acceso en un archivo seguro. Es crítico que **nadie más** (ni siquiera tu grupo) pueda ver este archivo.
 
 **Tu Misión**:
 1. Crea un archivo llamado `claves_nucleares.txt`.
 2. Configura los permisos para que **SOLO tú** (el usuario dueño) puedas leerlo y escribirlo.
 3. Asegúrate de que el grupo y otros no tengan **ningún** permiso.
 4. Verifica con `ls -l` que los permisos sean exactamente `-rw-------`.
 
 <details>
 <summary><strong>✅ Solución</strong></summary>
 
 ```bash
 # 1. Crear el archivo
 touch claves_nucleares.txt
 
 # 2. Configurar permisos (Opción A: Números - Recomendada)
 chmod 600 claves_nucleares.txt
 
 # O (Opción B: Letras)
 # u=rw (usuario lee/escribe), go= (grupo y otros, nada)
 chmod u=rw,go= claves_nucleares.txt
 
 # 3. Verificar
 ls -l claves_nucleares.txt
 ```
 
 **Salida esperada**:
 ```
 -rw------- 1 usuario grupo 0 Jan 29 11:30 claves_nucleares.txt
 ```
 
 **Explicación**: `6` (4+2) es lectura y escritura. `0` es nada. Así blindas el archivo.
 
 </details>



## ⚙️ Gestión de Procesos Básica

¿Firefox se congeló? ¿Una aplicación no responde? No reinicies todo, solo mata ese proceso.

### ¿Qué es un proceso?

Un **proceso** es cualquier programa que está corriendo. Cada uno tiene un **PID** (Process ID), un número único que lo identifica.

### `ps`
#### Ver procesos

**`ps`** muestra los procesos en ejecución.

**Sintaxis básica**:
```bash
ps
```

Esto solo muestra TUS procesos. Para ver TODO:

```bash
ps aux
```

- `a`: Todos los usuarios
- `u`: Formato amigable (con usuario)
- `x`: Incluir procesos sin terminal

**Ejemplo de salida**:
```bash
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
usuario   1234  2.1  0.5 123456  5678 ?        S    10:30   0:05 firefox
usuario   5678  0.1  0.1  45678  1234 pts/0    S    10:35   0:00 bash
```

### `top`
#### Monitor en tiempo real

**`top`** es como el Task Manager de Windows, pero en la terminal.

**Sintaxis**:
```bash
top
```

Te muestra los procesos que más recursos consumen, actualizándose en tiempo real.

**Controles en top**:
- **`q`**: Salir
- **`k`**: Matar un proceso (te pide el PID)
- **`M`**: Ordenar por uso de memoria
- **`P`**: Ordenar por uso de CPU

### `htop`
#### Monitor de procesos visual

**`htop`** es como `top` pero con colores, más fácil de usar y con mouse.

**Instalación** (si no lo tienes):
```bash
sudo apt install htop  # Debian/Ubuntu
sudo dnf install htop  # RHEL/Fedora
```

**Uso**:
```bash
htop
```

Es interactivo, puedes usar flechas y `F` keys. Mucho más amigable que `top`.

### `kill`
#### Matar un proceso

**`kill`** envía señales a procesos. La más común: "termínate, por favor".

**Sintaxis**:
```bash
kill PID
```

**Ejemplos**:
```bash
# Matar proceso 1234 educadamente (SIGTERM)
kill 1234

# Matar proceso 1234 inmediatamente (SIGKILL)
kill -9 1234
```

**Niveles de kill**:
- `kill PID`: "Por favor termina cuando puedas" (SIGTERM - señal 15)
- `kill -9 PID`: "MUERE AHORA" (SIGKILL - señal 9)

Siempre intenta `kill PID` primero. Solo usa `-9` si el proceso no responde.

| Nivel de peligro | 🔴 **Peligroso** - Puedes matar procesos importantes |
|------------------|------------------------------------------------------|

### `killall`
#### Matar por nombre

**`killall`** mata todos los procesos con ese nombre.

**Sintaxis**:
```bash
killall nombre_proceso
```

**Ejemplo**:
```bash
# Matar todos los procesos de Firefox
killall firefox
```

| Nivel de peligro | 🔴 **MUY peligroso** - Mata TODOS los procesos con ese nombre |
|------------------|----------------------------------------------------------------|

> **💡 Pro tip** > Antes de usar `kill`, usa `ps aux | grep nombre` para encontrar el PID exacto y asegurarte de que estás matando lo correcto.

### 🏆 Desafío: El Proceso Zombie
 
 **Situación Real**: Una aplicación experimental (llamada `sleep`) ha dejado de responder y está consumiendo recursos inútilmente. Necesitas terminarla manualmente.
 
 **Tu Misión**:
 1. Abre una nueva terminal (o pestaña) y ejecuta `sleep 500`. Esto simulará un proceso colgado.
 2. Vuelve a tu terminal principal.
 3. Busca el **PID** (ID de proceso) de `sleep`.
 4. Envía la señal para terminarlo.
 5. Verifica que haya desaparecido.
 
 <details>
 <summary><strong>✅ Solución</strong></summary>
 
 ```bash
 # Terminal 1 (El proceso rebelde):
 sleep 500
 
 # Terminal 2 (Tú, el SysAdmin):
 
 # 1. Encontrar al culpable
 ps aux | grep sleep
 
 # Salida típica:
 # usuario  12345  ...  sleep 500
 # (Anota el PID: 12345)
 
 # 2. Eliminarlo
 kill 12345
 
 # 3. Confirmar muerte
 ps aux | grep sleep
 # (Ya no debería aparecer el proceso 12345)
 ```
 
 **Nota**: En la Terminal 1, verás el mensaje "Terminated".
 
 </details>



## 🌐 Redes: Lo Básico que Necesitas

Comandos de supervivencia para saber si tienes internet, cuál es tu IP, y descargar cosas.

### `ping`
#### ¿Hay conexión?

**`ping`** envía paquetes a un servidor para ver si responde.

**Sintaxis**:
```bash
ping dominio.com
```

**Ejemplos**:
```bash
# Ping a Google
ping google.com

# Ping a IP específica
ping 8.8.8.8

# Solo 4 paquetes
ping -c 4 google.com
```

**Cómo detenerlo**: `Ctrl + C` (si no, pinga infinitamente)

**Qué significa la salida**:
```bash
64 bytes from 142.250.185.78: icmp_seq=1 ttl=117 time=12.3 ms
```
- **time**: Latencia (qué tan rápido responde). Menos = mejor.
- **icmp_seq**: Número de paquete

> **💡 Pro tip** > Usa `ping 8.8.8.8` (DNS de Google) para verificar si tienes internet. Si responde, tienes internet.

### `ip addr`
#### Mi dirección IP

**`ip addr`** (o `ip a` abreviado) muestra tus interfaces de red y sus IPs.

**Sintaxis**:
```bash
ip addr
# o
ip a
```

**Busca**:
- **lo**: Loopback (127.0.0.1) - tu propia máquina
- **eth0** o **enp0s3**: Cable Ethernet
- **wlan0** o **wlp2s0**: WiFi

Tu IP local estará en `inet`. Por ejemplo:
```bash
inet 192.168.1.100/24
```

### `curl`
#### Descargar desde la web

**`curl`** descarga contenido de URLs. Por defecto, lo muestra en pantalla.

**Sintaxis básica**:
```bash
curl https://ejemplo.com
```

**Ejemplos útiles**:
```bash
# Ver código HTML de una página
curl https://google.com

# Guardar en un archivo
curl https://ejemplo.com/archivo.zip -o archivo.zip

# Seguir redirecciones
curl -L https://bit.ly/algo

# Ver solo los headers
curl -I https://ejemplo.com
```

### `wget`
#### Descargar archivos

**`wget`** descarga archivos y los guarda automáticamente.

**Sintaxis**:
```bash
wget https://ejemplo.com/archivo.zip
```

**Diferencia con curl**:
- **curl**: Muestra en pantalla (a menos que uses `-o`)
- **wget**: Guarda automáticamente con el nombre original

**Ejemplos**:
```bash
# Descargar un archivo
wget https://releases.ubuntu.com/22.04/ubuntu-22.04-desktop-amd64.iso

# Continuar una descarga interrumpida
wget -c https://archivo-gigante.zip
```

### `ssh`
#### Conectar a otro servidor

**`ssh`** (Secure Shell) conecta a otra máquina de forma segura.

**Sintaxis**:
```bash
ssh usuario@direccion
```

**Ejemplos**:
```bash
# Conectar a un servidor
ssh usuario@192.168.1.50

# Conectar con puerto diferente
ssh usuario@servidor.com -p 2222

# Conectar con llave privada
ssh -i ~/.ssh/mi_llave.pem usuario@servidor.com
```

Para salir: escribe `exit` o presiona `Ctrl + D`.

> **💡 Pro tip** > La primera vez que te conectas, te preguntará si confías en el servidor. Escribe `yes` y presiona Enter.

### 🏆 Desafío: El Diagnóstico de Red
 
 **Situación Real**: Tu servidor parece desconectado y necesitas averiguar si es problema de tu cable, de tu router o de internet en general.
 
 **Tu Misión**:
 1. Verifica si tu computadora tiene una dirección IP asignada.
 2. Comprueba si tienes salida a internet haciendo ping a los servidores de Google (`8.8.8.8`).
 3. Intenta descargar el archivo `robots.txt` de `google.com` para confirmar que puedes recibir datos.
 
 <details>
 <summary><strong>✅ Solución</strong></summary>
 
 ```bash
 # 1. Verificar IP local
 ip a
 # Busca "inet" en tu interfaz (ej. eth0 o wlan0).
 # Deberías ver algo como 192.168.1.X
 
 # 2. Verificar Internet
 ping -c 4 8.8.8.8
 # Si ves "0% packet loss", tienes internet.
 
 # 3. Prueba de fuego (Descarga)
 wget https://www.google.com/robots.txt
 
 # 4. Verificar descarga
 cat robots.txt
 ```
 
 **Diagnóstico**: Si paso 1 falla, es tu cable/WiFi. Si paso 2 falla, es tu proveedor de internet. Si paso 3 falla, puede ser el DNS o un Firewall.
 
 </details>



## 💀 Bonus: Vi/Vim para Valientes

El editor que tiene su propio meme: **"Cómo salir de Vim"**.

### La verdad sobre Vim

Vim es como karate: al principio todo es confuso y doloroso, pero una vez que lo dominas, nunca vuelves a otra cosa. Aunque seamos honestos, la mayoría nos quedamos en el nivel "sé salir sin romper la computadora".

### ¿Por qué Vim?

- **Está en TODOS LADOS**: En cualquier servidor Linux, Vim (o Vi) está instalado
- **Es poderoso**: Editas a la velocidad del pensamiento (eventualmente)
- **No necesitas mouse**: Todo con teclado

### Los 3 modos que importan

Vim funciona con **modos**. Es su característica más confusa y más poderosa.

#### 1. Modo Normal (default)

Cuando abres Vim, estás aquí. **No escribes texto**, navegas y ejecutas comandos.

**Navegación básica**:
- `h` = izquierda ←
- `j` = abajo ↓
- `k` = arriba ↑
- `l` = derecha →

(Sí, son las teclas de la fila principal. Los creadores de Vi odiaban mover las manos)

#### 2. Modo Insert (para escribir)

Aquí SÍ escribes texto como en un editor normal.

**Cómo entrar**:
- `i` = Insert (insertar antes del cursor)
- `a` = Append (insertar después del cursor)
- `o` = Open line (nueva línea abajo)

**Cómo salir**: `Esc` (siempre te regresa a Modo Normal)

#### 3. Modo Command (para guardar/salir)

Para ejecutar comandos como guardar o salir.

**Cómo entrar**: Desde Modo Normal, presiona `:`

Verás que abajo aparece `:` y puedes escribir comandos.

### Comandos de supervivencia

Estos son los que necesitas para **no quedarte atrapado en Vim**.

| Acción | Comando | Nivel de pánico |
|--------|---------|-----------------|
| Salir sin guardar | `:q!` | 🆘 EMERGENCIA |
| Guardar y salir | `:wq` | ✅ Todo bien |
| Solo guardar | `:w` | ✅ Precavido |
| Entrar a modo edición | `i` | 🟢 Estás listo |
| Salir de modo edición | `Esc` | 🟢 Volviendo |

### Comandos útiles (cuando ya no tienes pánico)

| Acción | Comando | Explicación |
|--------|---------|-------------|
| Borrar carácter | `x` | Como Delete |
| Borrar línea | `dd` | Corta la línea |
| Copiar línea | `yy` | Yank (copiar) |
| Pegar | `p` | Paste |
| Deshacer | `u` | Undo |
| Rehacer | `Ctrl + r` | Redo |
| Buscar | `/palabra` | Luego `n` para siguiente |

### `vimtutor`
#### El mejor profesor

Vim viene con un tutorial interactivo de 30 minutos que te enseña TODO.

**Cómo usarlo**:
```bash
vimtutor
```

Es como tener un profesor particular. Te explica paso a paso, con práctica incluida.

> **💡 Pro tip** > Dedícale 30 minutos a `vimtutor`. Vale la pena. No tienes que volverte experto, solo saber lo básico para sobrevivir.

### Chistes obligatorios

- "Uso Vim porque la primera vez que lo abrí, nunca pude salir, así que me quedé"
- "Generación de energía renovable: Conecta un generador a desarrolladores intentando salir de Vim"
- "¿Cómo generas un string aleatorio? Pon a un principiante en Vim y dile que salga"

### 🏆 Desafío: Escapa de la Bestia
 
 **Situación Real**: Has entrado a `vim` por accidente para editar un archivo de configuración crítico y no sabes cómo salir. El pánico empieza a subir.
 
 **Tu Misión**:
 1. Abre Vim creando un archivo llamado `auxilio.txt`.
 2. Entra en "Modo Insert" y escribe: "No me voy a rendir".
 3. Regresa al "Modo Normal" (la zona segura).
 4. Guarda los cambios y sal del editor limpiamente.
 5. Lee el archivo con `cat` para demostrar tu victoria.
 
 <details>
 <summary><strong>✅ Solución</strong></summary>
 
 ```bash
 # 1. Entrar en la boca del lobo
 vim auxilio.txt
 
 # 2. Escribir
 # Presiona 'i' (verás -- INSERT -- abajo)
 # Escribe: No me voy a rendir
 
 # 3. Escapar al modo normal
 # Presiona la tecla 'Esc'
 
 # 4. Guardar y Salir
 # Escribe: :wq
 # Presiona Enter
 
 # 5. La prueba final
 cat auxilio.txt
 ```
 
 **Si lo lograste**: Ya sabes más Vim que muchos desarrolladores senior. ¡Felicidades!
 
 </details>



## Ctrl + D

Si llegaste hasta aquí, **ya no le tienes miedo a la terminal**. Y si todavía le tienes un poquito, está bien, es normal. Incluso los SysAdmins con 20 años de experiencia a veces escriben `rm -rf` con las manos sudando.

### Lo que has aprendido

✅ Cómo pedir ayuda sin googlear (`man`, `--help`, `apropos`)  
✅ Navegar por el sistema como pez en el agua (`cd`, `ls`, `pwd`)  
✅ Crear, copiar, mover y eliminar archivos (`mkdir`, `cp`, `mv`, `rm`)  
✅ Ver y editar texto (`cat`, `less`, `nano`, y sobrevivir a Vim)  
✅ Entender permisos sin volverse loco (`chmod`, entender `rwx`)  
✅ Matar procesos rebeldes (`ps`, `kill`, `top`)  
✅ Verificar conexión y descargar cosas (`ping`, `wget`, `ssh`)  
✅ Salir de Vim sin terapia psicológica (`:wq`)  

### El camino continúa

La terminal de Linux es poderosa, pero no es un campo minado. Cada comando que aprendiste hoy es una herramienta más en tu cinturón de utilidades. Algunos los usarás todos los días (`ls`, `cd`), otros solo cuando las cosas se pongan raras (`kill`, `chmod 777`), y otros... bueno, Vim estará ahí cuando te sientas aventurero.

### Pro tip final

**Crea una máquina virtual y rómpela**. En serio. Experimenta, borra cosas, arruina permisos, mata procesos. No hay mejor maestro que la experiencia (y no hay mejor seguro que tener un snapshot de la VM para volver atrás).

### Una última cosa

Linux no es perfecto, pero es **tuyo**. Puedes verlo, modificarlo, romperlo y arreglarlo. Es un sistema operativo hecho por gente que piensa que la tecnología debe ser abierta y accesible. Y tú acabas de dar un paso enorme para dominarlo.

Practica estos comandos. Úsalos en tu día a día. Crea scripts. Automatiza cosas. Y cuando te atores (porque te vas a atorar), recuerda que `man` es tu amigo, Google también, y la comunidad de Linux está llena de gente que empezó exactamente donde estás tú ahora.

¡Nos vemos en la terminal! 🐧

Y recuerda, **lo más importante es nunca dejar de preguntar**.

---

**Este cheatsheet fue creado con ❤️ y café por @pereidax86**  
*¿Encontraste útil esta guía? Compártela con alguien que le tenga miedo a la terminal.*
