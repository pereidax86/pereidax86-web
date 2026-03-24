---
title: "Guía Súper Rápida de Supervivencia en Bash Scripting"
description: "Aprende a escribir scripts de Bash desde cero. Variables, condicionales, bucles, funciones y buenas prácticas con ejemplos reales y ejercicios prácticos."
subtitle: "Porque copiar y pegar comandos toda la vida no es un plan de carrera"
shortName: "BASH"
difficulty: principiante
tags: ["Linux", "Bash", "Scripting", "Automatización", "Terminal", "Básico"]
icon: "🐚"
pubDate: 2026-03-23
author: "Luis Pereida"
image: "/images/cheatsheets/bash-scripting-principiante.png"
printable: true
---

## 🚀 Introducción: De copiar comandos a escribir magia

<img src="/images/cheatsheets/bash-scripting-principiante.png" alt="Bash Scripting para principiantes" style="float: right; width: 35%; margin: 0 0 20px 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />

**¡Felicidades por llegar hasta aquí!** Si ya sabes moverte por la terminal (o te sobreviviste al [cheatsheet de Linux](/cheatsheets/linux-principiante)), estás listo para dar el siguiente salto: dejar de escribir comandos uno por uno y empezar a **automatizar todo lo que te aburre**.

Un script de Bash no es más que una lista de comandos guardados en un archivo. Es como escribirle una receta a tu computadora: le dices exactamente qué hacer, en qué orden, y ella lo hace sin quejarse. Sin excusas, sin días malos, sin "es que se me olvidó".

**¿Recuerdas cuando hacías clic en 47 botones para hacer una tarea repetitiva?** Con un script, eso se convierte en ejecutar un solo archivo. Una vez. Siempre igual. Sin errores humanos.

Esta guía es nivel **principiante**: no asumo que sabes nada de programación (aunque si vienes de Python o JavaScript, verás muchos conceptos familiares). Iremos paso a paso, con ejemplos reales y ejercicios que realmente funcionan en tu terminal.

### ¿Qué es Bash exactamente?

**Bash** (Bourne Again SHell) es el intérprete de comandos predeterminado en la mayoría de distribuciones Linux. Cuando abres una terminal y escribes `ls` o `cd`, es Bash quien procesa esa instrucción y la ejecuta.

Un **script de Bash** es simplemente un archivo de texto con extensión `.sh` que contiene esos mismos comandos, ejecutados en orden. Nada de magia negra.

### La regla de oro del scripting

> **💡 Pro tip** > Si te encuentras escribiendo el mismo conjunto de comandos más de dos veces, es momento de convertirlos en un script. Tu "yo del futuro" te lo agradecerá.

### Tu primer script: El mítico "Hola Mundo"

Antes de entrar a cada tema, hagamos que algo funcione. Abre tu terminal y crea un archivo:

```bash
vim hola.sh
```

Escribe esto adentro:

```bash
#!/bin/bash
# Este es mi primer script. Histórico.
echo "¡Hola Mundo! Nuevo logro desbloqueado"
```

Cuando termines de escribir, guarda y sal con `:wq` + `Enter` (desde modo inserción: primero `Esc`, luego `:wq`). Ahora dale permisos de ejecución y córrelo:

```bash
chmod +x hola.sh
./hola.sh
```

**Salida**:
```
¡Hola Mundo! Nuevo logro desbloqueado
```

¿Lo viste? Acabas de ejecutar tu primer script. Analicemos las partes:

```bash
#!/bin/bash
# │   └──── Ruta al intérprete (Bash)
# └──────── Shebang: dice "usa este programa para ejecutarme"

# Esto es un comentario. Bash lo ignora completamente.

echo "mensaje"   # Imprime texto en pantalla
```

El **shebang** (`#!/bin/bash`) es la primera línea de todo script. Le dice al sistema operativo con qué programa interpretar el archivo. Sin él, el sistema tiene que adivinar qué intérprete usar... y los sistemas operativos adivinan tan bien como tú adivinando los ingredientes de lo que cocinó doña pelos con solo verlo.

Técnicamente, sin shebang el script puede correrse con el shell por defecto de tu sesión actual... o con `/bin/sh`... o con dash... o con la voluntad del universo. Y si en producción el shell por defecto es diferente al de desarrollo, prepárate para una noche larga.

```bash
#!/bin/bash
echo "Soy un script de Bash y lo sé."
```
por otro lado, sin usar shebang:

```bash
echo "Soy... ¿sh? ¿dash? ¿bash? ¿quién soy yo?"
# Spoiler: en Alpine Linux o Debian mínimo, /bin/sh suele ser dash,
# y dash NO soporta [[ ]], arrays ni varias cosas de Bash.
# Tu script "que funcionaba en dev" explota en prod... Clásico...
```

> **💡 Pro tip** > Siempre pon `#!/bin/bash` en la primera línea. Sin espacios, sin comentarios antes. Es el equivalente a poner tu nombre en el examen: si no está, algo va a salir mal. Y si hay un espacio entre `#!` y `/bin/bash`... también va a salir mal. Unix es así de estricto con estas cosas. Rencoroso, pero consistente.



## 📦 Variables: Cajas para guardar cosas

Las variables son la base de cualquier script. Son como cajitas con nombre donde guardas información para usarla después.

### Declarar y usar variables

**Sintaxis**:
```bash
# Para declarar variables (sin espacios alrededor del =)
NOMBRE="Luis"
EDAD=30
CIUDAD="Guadalajara"
```

**Esta regla es muy importante**:

```bash
# ✅ Correcto
NOMBRE="Luis"

# ❌ Incorrecto
NOMBRE = "Luis"
```

Para usar las variables usa el simbolo $ al frente

```bash
echo "Hola, $NOMBRE"
echo "Tienes $EDAD años y vives en $CIUDAD"
```

La salida seria algo como esto:
```bash
Hola, Luis
Tienes 30 años y vives en Guadalajara
```

> **💡 Pro tip** > Por convención, las variables de usuario van en `MAYUSCULAS_CON_GUIONES`. No es obligatorio, pero ayuda a diferenciarlas de los comandos.

### Variables especiales del sistema

Bash tiene variables predefinidas muy útiles:

| Variable | Qué contiene | Ejemplo |
|----------|-------------|---------|
| `$HOME` | Tu directorio home | `/home/pereidax86` |
| `$USER` | Tu nombre de usuario | `pereidax86` |
| `$PWD` | Directorio actual | `/home/pereidax86/scripts` |
| `$PATH` | Rutas de ejecutables | `/usr/bin:/bin:...` |
| `$SHELL` | Tu shell actual | `/bin/bash` |
| `$0` | Nombre del script | `./mi_script.sh` |
| `$1`, `$2`... | Argumentos del script | `./script.sh arg1 arg2` |
| `$#` | Número de argumentos | `2` |
| `$@` | Todos los argumentos | `arg1 arg2` |
| `$?` | Código de salida del último comando | `0` (éxito) o `1` (error) |
| `$$` | PID del script actual | `12345` |

**Ejemplo práctico**:
```bash
#!/bin/bash
echo "Script: $0"
echo "Usuario: $USER"
echo "Directorio: $PWD"
echo "Primer argumento: $1"
```

Si lo ejecutas como `./info.sh hola`, verás:
```
Script: ./info.sh
Usuario: pereidax86
Directorio: /home/pereidax86/scripts
Primer argumento: hola
```

### Variables de solo lectura

A veces tienes valores que **nunca deben cambiar** durante la ejecución del script: la versión del programa, rutas críticas del sistema, o constantes de configuración. Para eso existe `readonly`.

¿Por qué usarlas? Porque evitan que tú (o alguien más que modifique el script) sobreescriba accidentalmente un valor que debería ser fijo. Es documentación ejecutable: le dices a Bash "esto no cambia, y si alguien lo intenta, que falle ruidosamente".

```bash
#!/bin/bash
readonly VERSION="1.0.0"
readonly DIRECTORIO_BASE="/opt/mi_app"
readonly MAX_REINTENTOS=3
readonly LOG_FILE="/var/log/mi_app.log"

echo "Iniciando Mi App v$VERSION"
echo "Directorio base: $DIRECTORIO_BASE"

# Si alguien intenta cambiarla por error:
VERSION="2.0"   # Error: VERSION: readonly variable
# Bash lanza el error y (con set -e) el script se detiene.
# ¡Mejor así que correr con datos incorrectos sin saber!
```

**Convención**: por legibilidad, las constantes readonly suelen ir en `MAYUSCULAS` al inicio del script, agrupadas en una sección de "Configuración".

> **💡 Pro tip** > Combina `readonly` con `set -u`: si alguien intenta usar una variable no definida (typo en el nombre), `set -u` da error. Si intenta modificar una constante, `readonly` da error. Juntos forman un escudo sólido contra bugs silenciosos de variables.

### Exportar variables (para subprocesos)

Cuando un script corre otro programa o script, ese proceso hijo **no hereda automáticamente** las variables del padre. Son universos separados. A menos que uses `export`.

Piénsalo así: tu script es una oficina. Las variables normales son notas en tu escritorio, solo tú las ves. Las variables exportadas son pizarrones en el pasillo, cualquiera que pase (cualquier proceso hijo) puede leerlas.

```bash
#!/bin/bash
# Sin exportar - el proceso hijo no la ve
MI_VAR="valor secreto"
bash -c 'echo "Valor: $MI_VAR"'   # Imprime: Valor:  (vacío)

# Con export - el proceso hijo sí la puede leer
export ENV_APP="produccion"
export DB_HOST="localhost"
export DB_PORT="5432"

bash -c 'echo "Ambiente: $ENV_APP, DB: $DB_HOST:$DB_PORT"'
# Imprime: Ambiente: produccion, DB: localhost:5432
```

**Cuándo usarlo en la práctica**:
- Pasar configuración de ambiente a scripts que llamas desde el tuyo
- Configurar herramientas como `git`, `ssh`, `docker` que leen variables de entorno
- Definir `PATH` extendido para que un script encuentre tus binarios personalizados

```bash
#!/bin/bash
# Agregar tu carpeta de scripts al PATH para los procesos hijos
export PATH="$HOME/.local/bin:$PATH"

# Ahora cualquier script o comando que corras desde aquí
# también encontrará tus binarios personales
mi_herramienta_custom --version
```

> **💡 Pro tip** > Las variables del sistema que ya conoces (`$HOME`, `$USER`, `$PATH`) son todas exportadas. Por eso cualquier script que abres ya las tiene disponibles: las heredó del shell que lo ejecutó.

### Sustitución de comandos

Una de las características más útiles de Bash: guardar la **salida de un comando** como si fuera un valor. En lugar de imprimir a pantalla, capturas el resultado en una variable para usarlo donde quieras.

```bash
#!/bin/bash
FECHA=$(date +%Y-%m-%d)
USUARIO=$(whoami)
ARCHIVOS=$(ls | wc -l)
ESPACIO_LIBRE=$(df -h / | awk 'NR==2{print $4}')
IP_PUBLICA=$(curl -s ifconfig.me 2>/dev/null || echo "sin conexión")

echo "Reporte generado el $FECHA"
echo "Por el usuario: $USUARIO"
echo "Archivos en directorio actual: $ARCHIVOS"
echo "Espacio libre en /: $ESPACIO_LIBRE"
echo "IP pública: $IP_PUBLICA"
```

**Dónde brilla la sustitución de comandos**:

```bash
#!/bin/bash
# Nombres de archivo con timestamp dinámico
BACKUP="backup_$(date +%Y%m%d_%H%M%S).tar.gz"
echo "Creando $BACKUP..."

# Contar líneas de un archivo para decidir qué hacer
LINEAS=$(wc -l < /var/log/app.log)
if [ "$LINEAS" -gt 10000 ]; then
    echo "Log muy grande ($LINEAS líneas), rotando..."
fi

# Anidar sustituciones (por eso $() es mejor que backticks)
DIRECTORIO_SCRIPT=$(dirname $(realpath $0))
echo "El script vive en: $DIRECTORIO_SCRIPT"
```

> **💡 Pro tip** > Usa `$(comando)` en lugar de los backticks `` `comando` `` de la sintaxis antigua. Las razones: `$()` se puede **anidar** sin escapar nada, es más legible, y los editores lo resaltan mejor. Los backticks existen por compatibilidad histórica; `$()` es el presente.

#### 💪 Ejercicio 1: El script de presentación

| Nivel de peligro | 🟢 **Bajo** — Solo lectura de variables y sustitución de comandos |
|------------------|---|

**Reto**: Crea un script llamado `presentacion.sh` que reciba un nombre como argumento (`./presentacion.sh [TU_NOMBRE]`) e imprima: "¡Hola, [TU_NOMBRE]! Hoy es [fecha] y estás en [directorio]."

<details>
<summary><strong>✅ Solución</strong> (haz clic para ver)</summary>

```bash
#!/bin/bash
NOMBRE=$1
FECHA=$(date +"%d de %B de %Y")
DIRECTORIO=$PWD

echo "¡Hola, $NOMBRE!"
echo "Hoy es $FECHA"
echo "Estás trabajando en: $DIRECTORIO"
```

Para ejecutarlo:
```bash
chmod +x presentacion.sh
./presentacion.sh pereidax86
```

**Salida**:
```
¡Hola, pereidax86!
Hoy es 23 de marzo de 2026
Estás trabajando en: /home/pereidax86/scripts
```

</details>

### 🏆 Desafío: El Inspector del Sistema

| Dificultad | 🟢 **Principiante** — Variables, sustitución de comandos y echo |
|------------|---|

**Situación**: Tu jefe te pide un reporte rápido del servidor cada mañana. Quiere saber: quién está conectado, en qué máquina, cuánto espacio libre hay y cuántos procesos están corriendo.

**Tu Misión**: Crea un script `inspector.sh` que muestre toda esa información de forma legible.

<details>
<summary><strong>✅ Solución</strong></summary>

```bash
#!/bin/bash
# inspector.sh - Reporte del sistema

USUARIO=$(whoami)
HOSTNAME=$(hostname)
FECHA=$(date "+%Y-%m-%d %H:%M:%S")
ESPACIO=$(df -h / | awk 'NR==2{print $4}')
PROCESOS=$(ps aux | wc -l)
UPTIME=$(uptime -p)

echo "=============================="
echo "  REPORTE DEL SISTEMA"
echo "=============================="
echo "Fecha       : $FECHA"
echo "Usuario     : $USUARIO"
echo "Hostname    : $HOSTNAME"
echo "Uptime      : $UPTIME"
echo "Espacio libre (/)  : $ESPACIO"
echo "Procesos activos   : $PROCESOS"
echo "=============================="
```

**Resultado**: Un reporte limpio que puedes programar con `cron` para que corra solo cada mañana. ¡Eso es automatización real!

</details>



## 💬 Entrada y Salida: Hablar con el usuario

Los scripts no siempre trabajan solos. A veces necesitan pedirle información al usuario, mostrar resultados formateados, o guardar salida en archivos. Esta sección cubre las tres herramientas principales para eso: `echo`, `read` y `printf`.

### `echo`
#### Imprimir en pantalla

`echo` escribe texto en la **salida estándar** (stdout), que por defecto es tu pantalla. Es el comando más usado en cualquier script: para mostrar mensajes, reportar progreso, imprimir resultados o simplemente saber que el script llegó a cierta línea sin crashear.

**Sintaxis**:
```bash
echo [opciones] "Texto a mostrar"
```

**Opciones principales**:

| Opción | Qué hace | Cuándo usarla |
|--------|----------|---------------|
| *(ninguna)* | Imprime el texto y agrega un salto de línea al final | Siempre que no necesites más |
| `-n` | **No** agrega salto de línea al final | Cuando quieres que el cursor se quede en la misma línea (para un prompt inline) |
| `-e` | Interpreta secuencias de escape (`\n`, `\t`, `\e[...m`) | Cuando necesitas formato especial o colores |
| `-E` | Desactiva la interpretación de escapes (default en muchos sistemas) | Raramente necesario explícitamente |

**Secuencias de escape** (requieren `-e`):

| Secuencia | Efecto |
|-----------|--------|
| `\n` | Salto de línea |
| `\t` | Tabulación horizontal |
| `\r` | Retorno de carro (vuelve al inicio de la línea — útil para barras de progreso) |
| `\a` | Alerta / beep (hace sonar el terminal, si el sistema lo permite) |
| `\e` o `\033` | Escape — inicio de un código ANSI de color/estilo |
| `\\` | Backslash literal |

**Ejemplos**:
```bash
#!/bin/bash

# Básico: imprime y salta de línea
echo "Script iniciado."

# -n: sin salto de línea (el cursor queda al lado)
echo -n "Procesando... "
sleep 2
echo "¡Listo!"   # Aparece en la misma línea que "Procesando..."

# -e: interpreta escapes
echo -e "Línea 1\nLínea 2\nLínea 3"

# -e con tabulaciones para simular una tabla simple
echo -e "Nombre\tEdad\tCiudad"
echo -e "Luis\t30\tGuadalajara"
echo -e "Ana\t25\tCDMX"

# -e con colores (usando códigos ANSI)
echo -e "\e[32mTexto en verde\e[0m"
echo -e "\e[31mTexto en rojo\e[0m"
echo -e "\e[33mTexto en amarillo\e[0m"

# \r para simular una barra de progreso en la misma línea
for i in 1 2 3 4 5; do
    echo -en "\rProcesando paso $i de 5..."
    sleep 1
done
echo ""   # Salto de línea final
```

**El patrón profesional: funciones de logging**

En lugar de escribir `echo -e "\e[32mINFO..."` en cada línea, créate funciones que centralicen el formato. Esto hace que tu output sea consistente y fácil de cambiar:

```bash
#!/bin/bash
# Funciones de logging reutilizables
log_info()    { echo -e "[\e[32mINFO\e[0m]  $*"; }
log_warn()    { echo -e "[\e[33mWARN\e[0m]  $*"; }
log_error()   { echo -e "[\e[31mERROR\e[0m] $*" >&2; }  # Errores van a stderr
log_success() { echo -e "[\e[1;32m OK \e[0m]  $*"; }

# Uso
log_info "Iniciando proceso de backup..."
log_warn "El directorio destino tiene poco espacio"
log_error "No se pudo conectar a la base de datos"
log_success "Backup completado: 3 archivos, 2.4 MB"
```

**Salida**:
```
[INFO]  Iniciando proceso de backup...
[WARN]  El directorio destino tiene poco espacio
[ERROR] No se pudo conectar a la base de datos
[ OK ]  Backup completado: 3 archivos, 2.4 MB
```

> **💡 Pro tip** > Nota el `>&2` en `log_error`. Los errores deben ir a **stderr** (descriptor 2), no a stdout. Esto permite que quien use tu script pueda separar los mensajes normales de los errores: `./script.sh > salida.log 2> errores.log`.

**Referencia completa de colores y estilos ANSI**:

**Estilos de texto**:

| Código | Efecto |
|--------|--------|
| `\e[0m` | Reset — vuelve todo a la normalidad |
| `\e[1m` | **Negrita** |
| `\e[2m` | Texto tenue / dimmed |
| `\e[3m` | *Cursiva* |
| `\e[4m` | Subrayado |
| `\e[5m` | Parpadeante (no todos los terminales lo soportan) |
| `\e[7m` | Invertido (fondo y texto se intercambian) |
| `\e[9m` | Tachado |

**Colores de texto (frente)**:

| Código | Color | Versión brillante |
|--------|-------|-------------------|
| `\e[30m` | Negro | `\e[90m` |
| `\e[31m` | Rojo | `\e[91m` |
| `\e[32m` | Verde | `\e[92m` |
| `\e[33m` | Amarillo | `\e[93m` |
| `\e[34m` | Azul | `\e[94m` |
| `\e[35m` | Magenta / Morado | `\e[95m` |
| `\e[36m` | Cian / Turquesa | `\e[96m` |
| `\e[37m` | Blanco / Gris claro | `\e[97m` |

**Colores de fondo**:

| Código | Fondo | Versión brillante |
|--------|-------|-------------------|
| `\e[40m` | Negro | `\e[100m` |
| `\e[41m` | Rojo | `\e[101m` |
| `\e[42m` | Verde | `\e[102m` |
| `\e[43m` | Amarillo | `\e[103m` |
| `\e[44m` | Azul | `\e[104m` |
| `\e[45m` | Magenta | `\e[105m` |
| `\e[46m` | Cian | `\e[106m` |
| `\e[47m` | Blanco | `\e[107m` |

Puedes **combinar** estilos separándolos con `;`:

```bash
# Negrita + Verde
echo -e "\e[1;32mÉxito\e[0m"

# Rojo brillante + Negrita + Subrayado
echo -e "\e[1;4;91mERROR CRÍTICO\e[0m"

# Texto negro sobre fondo amarillo (como una advertencia)
echo -e "\e[30;43m ADVERTENCIA \e[0m Revisa esto."

# Cian brillante + cursiva
echo -e "\e[3;96mNota informativa\e[0m"
```

> **💡 Pro tip** > Siempre termina con `\e[0m` después de usar colores. De lo contrario, tu terminal se quedará coloreada y se verá rara.


### `read`
#### Recibir datos del usuario

**Sintaxis**:
```bash
read [opciones] VARIABLE
```

`read` pausa la ejecución del script y espera a que el usuario escriba algo y presione Enter. Lo que escriba queda guardado en `VARIABLE`. Es la diferencia entre un script que hace siempre lo mismo y uno que puede adaptarse a quien lo usa.

**Tabla de opciones**:

| Opción | Qué hace |
|--------|----------|
| `-p "texto"` | Muestra un prompt antes de esperar input |
| `-s` | Modo silencioso — no muestra lo que se escribe (contraseñas) |
| `-t N` | Tiempo límite de N segundos; devuelve error si se acaba |
| `-n N` | Lee exactamente N caracteres sin esperar Enter |
| `-r` | Raw mode — no interpreta backslashes (siempre úsalo para archivos) |
| `-a` | Guarda el input en un array |
| `-d "X"` | Cambia el delimitador de Enter a cualquier carácter X |

**Ejemplos**:
```bash
#!/bin/bash

# Básico: pedir nombre
echo -n "¿Cómo te llamas? "
read NOMBRE
echo "¡Hola, $NOMBRE!"

# Con prompt integrado (-p) — más limpio
read -p "¿Cuántos años tienes? " EDAD
echo "Tienes $EDAD años."

# Sin mostrar lo que escribe (-s) — ideal para contraseñas
read -sp "Ingresa tu contraseña: " PASSWORD
echo ""   # -s suprime el salto de línea automático, hay que ponerlo manualmente
echo "Contraseña recibida (${#PASSWORD} caracteres)."

# Con tiempo límite (-t) — útil en scripts automatizados con opción de override
if read -t 10 -p "¿Continuar? [s/N] " RESPUESTA; then
    echo "Respondiste: $RESPUESTA"
else
    echo "Tiempo agotado. Continuando con valores por defecto..."
fi

# Leer un solo carácter sin esperar Enter (-n 1)
read -n 1 -p "Presiona cualquier tecla para continuar..."
echo ""

# Leer múltiples variables de una línea (separadas por espacio)
read -p "Nombre y apellido: " NOMBRE APELLIDO
echo "Nombre: $NOMBRE | Apellido: $APELLIDO"
```

> **💡 Pro tip** > Cuando leas archivos línea por línea, usa siempre `IFS= read -r LINEA`. El `-r` evita que los backslashes se interpreten como escapes, y `IFS=` evita que se recorten los espacios al inicio o final de la línea. Sin esto, datos con rutas o JSON pueden corromperse silenciosamente.

### `printf`
#### Salida formateada

`printf` es más preciso y predecible que `echo`. Mientras `echo` simplemente imprime texto y espera que los escapes funcionen igual en todos lados (spoiler: no siempre), `printf` tiene un formato explícito y se comporta igual en cualquier shell POSIX.

Úsalo cuando necesites **columnas alineadas**, **números con formato específico** o **salida que no termine en salto de línea de forma predecible**.

**Sintaxis**:
```bash
printf "cadena de formato" argumento1 argumento2 ...
```

La cadena de formato define **cómo** se muestra cada argumento. Cada `%` es un marcador de posición para un argumento:

**Tabla de especificadores de formato**:

| Especificador | Qué formatea | Ejemplo | Salida |
|---------------|-------------|---------|--------|
| `%s` | String (texto) | `printf "%s" "hola"` | `hola` |
| `%d` | Entero decimal | `printf "%d" 42` | `42` |
| `%f` | Número de punto flotante | `printf "%f" 3.14` | `3.140000` |
| `%e` | Notación científica | `printf "%e" 12345` | `1.234500e+04` |
| `%x` | Hexadecimal (minúsculas) | `printf "%x" 255` | `ff` |
| `%o` | Octal | `printf "%o" 8` | `10` |
| `%b` | Interpreta escapes (como echo -e) | `printf "%b" "hola\n"` | `hola` + salto |
| `%%` | Signo de porcentaje literal | `printf "%%"` | `%` |

**Modificadores de ancho y alineación**:

| Modificador | Significado | Ejemplo | Salida |
|-------------|-------------|---------|--------|
| `%10s` | Ancho mínimo 10, alineado a la **derecha** | `printf "%10s" "hi"` | `        hi` |
| `%-10s` | Ancho mínimo 10, alineado a la **izquierda** | `printf "%-10s" "hi"` | `hi        ` |
| `%05d` | Entero de 5 dígitos con ceros a la izquierda | `printf "%05d" 42` | `00042` |
| `%.2f` | Float con exactamente 2 decimales | `printf "%.2f" 3.14159` | `3.14` |
| `%8.2f` | Float: 8 chars de ancho, 2 decimales | `printf "%8.2f" 3.14` | `    3.14` |

**Ejemplos prácticos**:

```bash
#!/bin/bash

# Columnas alineadas — perfecto para reportes en la terminal
printf "%-20s %-10s %s\n" "Nombre" "Edad" "Ciudad"
printf "%-20s %-10s %s\n" "---" "---" "---"
printf "%-20s %-10s %s\n" "Luis Pereida" "30" "Guadalajara"
printf "%-20s %-10s %s\n" "Ana García" "25" "CDMX"
printf "%-20s %-10s %s\n" "Carlos Martínez" "35" "Monterrey"
```

**Salida**:
```
Nombre               Edad       Ciudad
---                  ---        ---
Luis Pereida         30         Guadalajara
Ana García           25         CDMX
Carlos Martínez      35         Monterrey
```

```bash
#!/bin/bash

# Formatear números — ceros a la izquierda para IDs o contadores
for i in {1..5}; do
    printf "Archivo_%03d.log\n" $i
done
# Salida: Archivo_001.log, Archivo_002.log, etc.

# Porcentajes de uso con 1 decimal
USADO=73.6789
printf "Uso de disco: %.1f%%\n" $USADO
# Salida: Uso de disco: 73.7%

# Generar una línea separadora del tamaño exacto
printf '%0.s─' {1..50}; echo ""
# Salida: ──────────────────────────────────────────────────

# printf NO agrega salto de línea automáticamente (a diferencia de echo)
# Tienes que incluir \n explícitamente cuando lo necesites
printf "Primera parte... "
printf "segunda parte\n"
# Salida: Primera parte... segunda parte
```

> **💡 Pro tip** > Usa `printf` en lugar de `echo` cuando construyas reportes o tablas. Y recuerda: `printf` recicla el formato si hay más argumentos de los esperados, lo que permite usarlo en bucles:
> ```bash
> # printf itera el formato por cada par de argumentos
> printf "%-10s → %s\n" "usuario" "pereidax86" "shell" "/bin/bash" "home" "/home/pereidax86"
> ```
> ```
> usuario    → pereidax86
> shell      → /bin/bash
> home       → /home/pereidax86
> ```

### Redirección: Controlando hacia dónde va la salida

Cada proceso en Linux tiene tres canales de comunicación abiertos por defecto, llamados **file descriptors**:

| Descriptor | Nombre | Descripción | Número |
|------------|--------|-------------|--------|
| `stdin` | Entrada estándar | De donde el proceso lee datos (por defecto: teclado) | `0` |
| `stdout` | Salida estándar | A donde el proceso escribe su salida normal | `1` |
| `stderr` | Error estándar | A donde el proceso escribe sus errores | `2` |

La redirección te permite **cambiar** hacia dónde apuntan esos canales, en lugar de la terminal, a un archivo, a otro comando, o a ningún lado.

**El diagrama mental**:
```
Tu script
    │
    ├── stdin  (0) ← Teclado (por defecto) ← o un archivo con <
    │
    ├── stdout (1) → Terminal (por defecto) → o un archivo con >
    │
    └── stderr (2) → Terminal (por defecto) → o un archivo con 2>
```

**Tabla completa de operadores de redirección**:

| Operador | Qué hace | Ejemplo |
|----------|----------|---------|
| `>` | Redirige stdout a un archivo (**sobrescribe**) | `echo "hola" > archivo.txt` |
| `>>` | Redirige stdout a un archivo (**agrega** al final) | `echo "más" >> archivo.txt` |
| `<` | Redirige stdin desde un archivo | `read VAR < archivo.txt` |
| `2>` | Redirige stderr a un archivo | `cmd 2> errores.log` |
| `2>>` | Agrega stderr a un archivo | `cmd 2>> errores.log` |
| `&>` | Redirige **tanto** stdout como stderr al mismo archivo | `cmd &> todo.log` |
| `2>&1` | Redirige stderr al mismo lugar que stdout | `cmd 2>&1 \| less` |
| `1>&2` | Redirige stdout al mismo lugar que stderr | `echo "Error" 1>&2` |
| `/dev/null` | El hoyo negro: descarta todo lo que recibe | `cmd > /dev/null 2>&1` |
| `<<DELIMITADOR` | **Heredoc**: bloque de texto multilínea como stdin. Bash lee hasta encontrar una línea que sea exactamente `DELIMITADOR`. | Por convención se usa `EOF` (*End Of File*), pero puede ser cualquier palabra (`END`, `CONF`, etc.) |

**Ejemplos con contexto real**:

```bash
#!/bin/bash

# Guardar el output de un comando en un archivo
ls -lah > listado.txt

# Agregar una nueva línea al log sin borrar lo anterior
echo "[$(date)] Script iniciado" >> script.log

# Separar stdout y stderr en archivos distintos
comando_importante > salida.log 2> errores.log

# Ver errores en pantalla, guardar salida normal en archivo
comando_importante > salida.log

# Silenciar completamente un comando (stdout + stderr a /dev/null)
apt-get update > /dev/null 2>&1

# Equivalente moderno más legible (bash 4+)
apt-get update &> /dev/null

# Usar un archivo como entrada (en lugar de teclado)
while IFS= read -r LINEA; do
    echo "Procesando: $LINEA"
done < lista_de_servidores.txt
```

**Here Document (`<<EOF`)**: para pasar texto multilínea a un comando

```bash
#!/bin/bash
# Crear un archivo de configuración con contenido fijo
cat > config.conf << EOF
# Configuración generada automáticamente
# Fecha: $(date)
HOST=localhost
PORT=8080
DEBUG=false
EOF

# Enviar un mensaje de correo con cuerpo multilínea (si tienes mail instalado)
mail -s "Reporte diario" admin@empresa.com << EOF
Hola admin,

El script terminó exitosamente a las $(date '+%H:%M').
Archivos procesados: $(ls /tmp/*.log | wc -l)

Saludos,
El script automático
EOF
```

**El truco de `tee`: guardar Y mostrar al mismo tiempo**

`tee` toma lo que llega por stdin y lo escribe en **dos lugares a la vez**: la pantalla (stdout) y un archivo. El nombre viene de la letra "T" — la tubería se divide en dos.

```bash
# Sin tee: tienes que elegir uno
./script.sh > log.txt   # Guardas, pero no ves nada en pantalla
./script.sh             # Ves en pantalla, pero no se guarda nada

# Con tee: ambas cosas simultáneamente
./script.sh | tee log.txt      # Ves en pantalla Y se guarda en log.txt
./script.sh | tee -a log.txt   # -a para añadir sin sobrescribir (append)

# Incluir stderr también (primero combinar, luego tee)
./script.sh 2>&1 | tee log.txt

# Escribir en múltiples archivos a la vez
./script.sh | tee log_hoy.txt log_backup.txt

# Insertar tee en medio de un pipeline para depurar sin romper el flujo
cat datos.csv | tee datos_crudos.txt | grep "activo" | tee filtrados.txt | wc -l
#               └─ guarda todo   ──┘                   └─ guarda filtrados ─┘
```

**Cuándo usar `tee` en scripts de producción**:
```bash
#!/bin/bash
LOG="/var/log/mi_app/$(date +%Y%m%d).log"

# Todo el output del script va a pantalla Y al log del día
{
    echo "=== Inicio: $(date) ==="
    hacer_backup
    sincronizar_datos
    limpiar_temporales
    echo "=== Fin: $(date) ==="
} 2>&1 | tee -a "$LOG"
```

Con las llaves `{ }` agrupas varios comandos y pasas **toda** su salida junta por el pipe a `tee`. Un solo pipe, todo registrado.

> **💡 Pro tip** > El orden de `2>&1` importa. `cmd > archivo 2>&1` primero redirige stdout al archivo, luego stderr al mismo lugar que stdout (el archivo). Al revés: `cmd 2>&1 > archivo`, stderr sigue en pantalla. Es uno de los errores más comunes en scripting, memorizaste bien si recuerdas que el shell interpreta la redirección de **izquierda a derecha**.

### Pipes `|`: Encadenar comandos

El pipe (`|`) conecta la salida estándar (stdout) de un comando directamente con la entrada estándar (stdin) del siguiente, **sin pasar por un archivo intermedio**. Los dos comandos corren en paralelo: mientras el primero produce output, el segundo ya lo va procesando.

Esta es la filosofía Unix en su forma más pura: herramientas pequeñas que hacen una cosa bien, combinadas con pipes para hacer cosas grandes.

```bash
# La estructura mental: cmd1 | cmd2 | cmd3
# Cada | conecta la salida del anterior con la entrada del siguiente

# Contar archivos .sh en el directorio actual
ls *.sh | wc -l

# Ver los 5 procesos que más RAM consumen
ps aux --sort=-%mem | head -6

# Buscar errores en logs, ordenarlos y quitar duplicados
grep "ERROR" /var/log/app.log | sort | uniq -c | sort -rn

# Encontrar las IPs que más aparecen en un log de acceso
cat /var/log/nginx/access.log | awk '{print $1}' | sort | uniq -c | sort -rn | head -10
```

**Pipelines clásicos para sysadmins**:

```bash
# ¿Quién está ocupando el puerto 8080?
ss -tlnp | grep 8080

# Los 10 archivos más grandes del directorio actual
du -sh * | sort -rh | head -10

# Buscar un proceso por nombre y obtener su PID
ps aux | grep "nombre_proceso" | grep -v grep | awk '{print $2}'

# Ver los últimos errores únicos del syslog (sin repetir)
journalctl -p err --since "1 hour ago" | grep -v "^--" | sort -u

# Contar cuántas líneas tiene cada archivo .log
wc -l *.log | sort -rn
```

**Capturar el resultado de un pipeline en una variable**:

```bash
#!/bin/bash
# El $() funciona perfectamente con pipelines
ERRORES=$(grep -c "ERROR" /var/log/app.log)
TOP_IP=$(cat /var/log/nginx/access.log | awk '{print $1}' | sort | uniq -c | sort -rn | head -1 | awk '{print $2}')
USUARIOS_ACTIVOS=$(who | awk '{print $1}' | sort -u | wc -l)

echo "Errores hoy: $ERRORES"
echo "IP más activa: $TOP_IP"
echo "Usuarios conectados: $USUARIOS_ACTIVOS"
```

**`xargs`: cuando el siguiente comando no acepta stdin**:

No todos los comandos aceptan su input por stdin. `xargs` toma el output del comando anterior y lo convierte en **argumentos** del siguiente:

```bash
# find + xargs: borrar todos los .tmp (más eficiente que -exec)
find /tmp -name "*.tmp" | xargs rm -f

# Descargar una lista de URLs guardada en un archivo
cat urls.txt | xargs wget -q

# Pasar múltiples argumentos con -I para controlar la posición
cat servidores.txt | xargs -I {} ssh {} "uptime"
# Esto ejecuta: ssh servidor1 "uptime", ssh servidor2 "uptime", etc.
```

> **💡 Pro tip** > Evita el antipatrón `cat archivo | grep "patrón"` — se llama "Uso Inútil de cat" (UUOC). `grep` acepta archivos directamente: `grep "patrón" archivo`. Ahorra un proceso. Pero en scripts con lógica más compleja (varios pipes encadenados empezando con cat), la versión con cat es más legible y el rendimiento es irrelevante.

#### 💪 Ejercicio 2: El generador de reportes

| Nivel de peligro | 🟢 **Bajo** — Usa `find` y redirección, no modifica archivos existentes |
|------------------|---|

**Reto**: Crea un script `reporte_archivos.sh` que pida al usuario una extensión (ej. `txt`), busque todos los archivos con esa extensión en el directorio actual, muestre cuántos encontró y guarde los nombres en un archivo `reporte.txt`.

<details>
<summary><strong>✅ Solución</strong> (haz clic para ver)</summary>

```bash
#!/bin/bash
read -p "¿Qué extensión buscamos? (sin el punto): " EXT
ARCHIVOS=$(find . -maxdepth 1 -name "*.$EXT" -type f)
CANTIDAD=$(echo "$ARCHIVOS" | grep -c "." 2>/dev/null || echo 0)

echo "Encontré $CANTIDAD archivo(s) con extensión .$EXT"

if [ -n "$ARCHIVOS" ]; then
    echo "$ARCHIVOS" > reporte.txt
    echo "Lista guardada en reporte.txt"
else
    echo "No hay archivos .$EXT aquí."
fi
```

</details>

### 🏆 Desafío: El creador de perfiles

| Dificultad | 🟢 **Principiante** — `read`, `printf` y redirección a archivo |
|------------|---|

**Situación**: Necesitas un script de onboarding para nuevos usuarios del equipo. Debe pedirles su información y generar un archivo de perfil personalizado.

**Tu Misión**: Crea `crear_perfil.sh` que pida nombre, rol y email, luego genere un archivo `perfil_[nombre].txt` con esa info bien formateada.

<details>
<summary><strong>✅ Solución</strong></summary>

```bash
#!/bin/bash
echo -e "\e[34m=== Creador de Perfil de Usuario ===\e[0m"

read -p "Nombre completo: " NOMBRE
read -p "Rol en el equipo: " ROL
read -p "Email: " EMAIL
FECHA=$(date "+%Y-%m-%d")
ARCHIVO="perfil_${NOMBRE// /_}.txt"

printf "%-15s %s\n" "Nombre:"  "$NOMBRE"  > "$ARCHIVO"
printf "%-15s %s\n" "Rol:"     "$ROL"    >> "$ARCHIVO"
printf "%-15s %s\n" "Email:"   "$EMAIL"  >> "$ARCHIVO"
printf "%-15s %s\n" "Creado:"  "$FECHA"  >> "$ARCHIVO"

echo -e "\e[32m✅ Perfil guardado en $ARCHIVO\e[0m"
cat "$ARCHIVO"
```

**Nota**: `${NOMBRE// /_}` reemplaza espacios con guiones bajos en el nombre del archivo (para evitar problemas con espacios en nombres de archivo).

</details>


## 🔢 Aritmética y Comparaciones: Las matemáticas del script

Bash no nació siendo un lenguaje matemático, pero sabe hacer sus cuentas. Lo importante es usar la sintaxis correcta, porque tiene más de una forma de hacerlo (herencia de Unix: hay 47 formas de hacer cada cosa).

### Aritmética básica con `$(( ))`

La forma moderna y recomendada. Dentro de `$(( ))` no necesitas el `$` para las variables y puedes usar expresiones como en C:

```bash
#!/bin/bash
A=10
B=3

echo $((A + B))   # 13  — suma
echo $((A - B))   # 7   — resta
echo $((A * B))   # 30  — multiplicación
echo $((A / B))   # 3   — división ENTERA (el resto se descarta)
echo $((A % B))   # 1   — módulo (el resto de la división)
echo $((A ** 2))  # 100 — potencia
```

**Asignación directa con aritmética**:
```bash
#!/bin/bash
PRECIO=100
IVA=16
TOTAL=$(( PRECIO + (PRECIO * IVA / 100) ))
echo "Total con IVA: $TOTAL"   # 116
```

**Incremento, decremento y asignaciones compuestas**:
```bash
#!/bin/bash
CONTADOR=0
((CONTADOR++))     # Incrementar en 1  → CONTADOR=1
((CONTADOR+=5))    # Incrementar en 5  → CONTADOR=6
((CONTADOR--))     # Decrementar en 1  → CONTADOR=5
((CONTADOR*=2))    # Multiplicar por 2 → CONTADOR=10
((CONTADOR/=2))    # Dividir entre 2   → CONTADOR=5
echo $CONTADOR     # 5
```

**Usar `((  ))` como condicional** (retorna 0=éxito si el resultado es distinto de 0):
```bash
#!/bin/bash
X=5
if (( X > 3 )); then
    echo "X es mayor que 3"
fi

# También como condición de bucle
while (( CONTADOR < 10 )); do
    ((CONTADOR++))
done
```

> **⚠️ ADVERTENCIA**: Bash solo hace aritmética con **enteros**. `$((10/3))` da `3`, no `3.33`. Para decimales necesitas `bc` o `awk`:
> ```bash
> # Con bc (calculadora de precisión arbitraria)
> echo "scale=2; 10 / 3" | bc          # 3.33
> echo "scale=4; sqrt(2)" | bc -l       # 1.4142 (con librería matemática)
>
> # Con awk (más portable en scripts)
> awk "BEGIN { printf \"%.2f\n\", 10/3 }"   # 3.33
>
> # Porcentaje con decimales
> USADO=73; TOTAL=100
> awk "BEGIN { printf \"%.1f%%\n\", ($USADO/$TOTAL)*100 }"   # 73.0%
> ```

### Tabla de operadores de comparación

Cuando quieres comparar dos valores, necesitas el operador correcto según el tipo. Es uno de los puntos donde Bash es más peculiar para quienes vienen de otros lenguajes.

#### Comparaciones numéricas

Usan nombres en lugar de símbolos (herencia de las primeras versiones de `test`):

| Operador | Significado | Ejemplo | Equivalente en C/Python |
|----------|-------------|---------|------------------------|
| `-eq` | Igual a | `[ $A -eq $B ]` | `==` |
| `-ne` | No igual a | `[ $A -ne $B ]` | `!=` |
| `-lt` | Menor que | `[ $A -lt $B ]` | `<` |
| `-le` | Menor o igual | `[ $A -le $B ]` | `<=` |
| `-gt` | Mayor que | `[ $A -gt $B ]` | `>` |
| `-ge` | Mayor o igual | `[ $A -ge $B ]` | `>=` |

> **💡 Pro tip** > Con `[[ ]]` y `(( ))` puedes usar los símbolos matemáticos directamente: `(( A > B ))`, `[[ A -gt B ]]`. Con `[ ]` solo funcionan los operadores con letras (para evitar conflicto con los operadores de redirección `>` y `<`).

**Ejemplo práctico**:
```bash
#!/bin/bash
ESPACIO=$(df / | awk 'NR==2{print $5}' | tr -d '%')

if [ "$ESPACIO" -ge 90 ]; then
    echo "⚠️  Disco al ${ESPACIO}% — crítico"
elif [ "$ESPACIO" -ge 70 ]; then
    echo "⚠️  Disco al ${ESPACIO}% — revisar pronto"
else
    echo "✅ Disco al ${ESPACIO}% — OK"
fi
```

#### Comparaciones de strings

| Operador | Significado | Ejemplo | Cuándo usarlo |
|----------|-------------|---------|---------------|
| `=` o `==` | Iguales | `[ "$S1" = "$S2" ]` | Comparar texto exacto |
| `!=` | Diferentes | `[ "$S1" != "$S2" ]` | Verificar que dos textos no coincidan |
| `-z` | String **vacío** (zero length) | `[ -z "$S1" ]` | Verificar que un argumento fue proporcionado |
| `-n` | String **no vacío** (non-zero length) | `[ -n "$S1" ]` | Verificar que una variable tiene valor |
| `<` | Menor (orden alfabético) | `[[ "$S1" < "$S2" ]]` | Ordenar strings (solo en `[[ ]]`) |
| `>` | Mayor (orden alfabético) | `[[ "$S1" > "$S2" ]]` | Ordenar strings (solo en `[[ ]]`) |
| `=~` | Coincide con regex | `[[ "$S1" =~ ^[0-9]+$ ]]` | Validar formato (solo en `[[ ]]`) |

**Ejemplo práctico: validar argumentos**:
```bash
#!/bin/bash
AMBIENTE=$1

if [ -z "$AMBIENTE" ]; then
    echo "Error: debes especificar un ambiente"
    echo "Uso: $0 [dev|staging|prod]"
    exit 1
fi

if [[ "$AMBIENTE" != "dev" && "$AMBIENTE" != "staging" && "$AMBIENTE" != "prod" ]]; then
    echo "Error: ambiente inválido: '$AMBIENTE'"
    echo "Opciones válidas: dev, staging, prod"
    exit 1
fi

echo "Desplegando en: $AMBIENTE"
```

**Ejemplo con regex — validar que un argumento sea número**:
```bash
#!/bin/bash
INPUT=$1
if [[ "$INPUT" =~ ^[0-9]+$ ]]; then
    echo "$INPUT es un número entero válido"
else
    echo "Error: '$INPUT' no es un número"
    exit 1
fi
```

#### Comparaciones de archivos

| Operador | Significado | Uso típico |
|----------|-------------|------------|
| `-e archivo` | El archivo existe (cualquier tipo) | Verificar antes de leer |
| `-f archivo` | Existe y es un archivo regular | Distinguir de directorios o symlinks |
| `-d archivo` | Existe y es un directorio | Verificar estructura de carpetas |
| `-r archivo` | Existe y se puede leer | Antes de `cat`, `less`, `grep` |
| `-w archivo` | Existe y se puede escribir | Antes de redirigir con `>` |
| `-x archivo` | Existe y se puede ejecutar | Antes de ejecutar un binario |
| `-s archivo` | Existe y **no** está vacío | Verificar que un log tiene contenido |
| `-L archivo` | Es un enlace simbólico | Detectar symlinks |
| `archivo1 -nt archivo2` | archivo1 es más **nuevo** que archivo2 | Lógica de cache/invalidación |
| `archivo1 -ot archivo2` | archivo1 es más **viejo** que archivo2 | Detectar si se debe regenerar |

**Ejemplo práctico**:
```bash
#!/bin/bash
CONFIG="config.env"

if [ ! -f "$CONFIG" ]; then
    echo "Error: no encontré $CONFIG"
    exit 1
fi

if [ ! -r "$CONFIG" ]; then
    echo "Error: no tengo permiso para leer $CONFIG"
    exit 1
fi

source "$CONFIG"
echo "Configuración cargada correctamente."
```

#### Operadores lógicos: combinar condiciones

| Operador | Significado | En `[ ]` | En `[[ ]]` |
|----------|-------------|----------|------------|
| Y (AND) | Ambas deben ser verdaderas | `[ A ] && [ B ]` | `[[ A && B ]]` |
| O (OR) | Al menos una debe ser verdadera | `[ A ] \|\| [ B ]` | `[[ A \|\| B ]]` |
| NO (NOT) | Negar la condición | `[ ! A ]` | `[[ ! A ]]` |

```bash
#!/bin/bash
ARCHIVO="datos.csv"
EDAD=25

# Ambas condiciones deben cumplirse
if [ -f "$ARCHIVO" ] && [ "$EDAD" -ge 18 ]; then
    echo "Archivo existe y eres mayor de edad"
fi

# Con [[ ]] es más limpio y soporta regex
if [[ -f "$ARCHIVO" && "$EDAD" -ge 18 ]]; then
    echo "Mismo resultado, sintaxis más limpia"
fi

# NOT: verificar que algo NO existe
if [ ! -d "logs" ]; then
    mkdir logs
    echo "Directorio de logs creado"
fi
```

> **💡 Pro tip** > Siempre pon las variables entre comillas en las comparaciones: `[ "$VAR" = "valor" ]`. Sin comillas, si la variable está vacía, Bash la expande a nada y el comando queda como `[ = "valor" ]`, un error de sintaxis que te hará rascarte la cabeza 20 minutos buscando qué salió mal.

#### 💪 Ejercicio 3: La calculadora básica

| Nivel de peligro | 🟢 **Bajo** — Solo aritmética entera y validación de argumentos |
|------------------|---|

**Reto**: Crea un script `calculadora.sh` que reciba dos números como argumentos y muestre la suma, resta, multiplicación y división (entera) de ambos.

<details>
<summary><strong>✅ Solución</strong> (haz clic para ver)</summary>

```bash
#!/bin/bash
A=$1
B=$2

if [ -z "$A" ] || [ -z "$B" ]; then
    echo "Uso: $0 numero1 numero2"
    exit 1
fi

echo "=== Calculadora ==="
echo "$A + $B = $((A + B))"
echo "$A - $B = $((A - B))"
echo "$A * $B = $((A * B))"

if [ $B -eq 0 ]; then
    echo "División: No se puede dividir entre cero 🤦"
else
    echo "$A / $B = $((A / B))"
fi
```

```bash
./calculadora.sh 10 3
```
```
=== Calculadora ===
10 + 3 = 13
10 - 3 = 7
10 * 3 = 30
10 / 3 = 3
```

</details>

### 🏆 Desafío: El verificador de archivos

| Dificultad | 🟡 **Intermedio** — Combina comparaciones de archivos, `$@` y salidas con color |
|------------|---|

**Situación**: Antes de que un script procese un archivo, necesitas verificar que existe, que no está vacío y que tienes permisos para leerlo.

**Tu Misión**: Crea `verificar_archivo.sh` que reciba un nombre de archivo como argumento y revise todas esas condiciones, reportando el estado de cada una.

<details>
<summary><strong>✅ Solución</strong></summary>

```bash
#!/bin/bash
ARCHIVO=$1

if [ -z "$ARCHIVO" ]; then
    echo "Uso: $0 nombre_del_archivo"
    exit 1
fi

echo "Verificando: $ARCHIVO"
echo "----------------------------"

[ -e "$ARCHIVO" ] && echo "✅ Existe" || echo "❌ No existe"
[ -f "$ARCHIVO" ] && echo "✅ Es un archivo regular" || echo "⚠️  No es un archivo regular"
[ -s "$ARCHIVO" ] && echo "✅ No está vacío" || echo "⚠️  Está vacío"
[ -r "$ARCHIVO" ] && echo "✅ Tienes permiso de lectura" || echo "❌ No puedes leerlo"
[ -w "$ARCHIVO" ] && echo "✅ Tienes permiso de escritura" || echo "❌ No puedes escribirlo"
[ -x "$ARCHIVO" ] && echo "✅ Es ejecutable" || echo "ℹ️  No es ejecutable"
```

El `&&` ejecuta el siguiente comando solo si el anterior fue exitoso. El `||` lo ejecuta solo si falló. ¡Un condicional de una línea!

</details>



## 🚦 Condicionales: Tomar decisiones

La lógica condicional es lo que transforma un script de "hace siempre lo mismo" a "hace lo correcto según la situación". Sin condicionales, un script no puede verificar si algo falló, si un archivo existe, o si el usuario pasó los argumentos correctos.

### `if` / `elif` / `else`

**Sintaxis**:
```bash
if [ condición ]; then
    # comandos si es verdadero
elif [ otra_condición ]; then
    # comandos si la otra es verdadera
else
    # comandos si ninguna fue verdadera
fi
```

> **💡 Pro tip** > El `fi` es el cierre del `if` (if al revés). Linux tiene este tipo de "palindromes" en varios lugares: `case`/`esac`, `do`/`done`. Y no, no es un accidente — fue una decisión de diseño para que el parser sea simple.

**Ejemplo con números**:
```bash
#!/bin/bash
read -p "Ingresa tu edad: " EDAD

if [ "$EDAD" -lt 18 ]; then
    echo "Eres menor de edad."
elif [ "$EDAD" -lt 65 ]; then
    echo "Eres adulto."
else
    echo "El futuro es hoy, viejo!."
fi
```

**Ejemplo con archivos**:
```bash
#!/bin/bash
ARCHIVO="config.txt"

if [ -f "$ARCHIVO" ]; then
    echo "Encontré el archivo, procesando..."
    cat "$ARCHIVO"
else
    echo "No existe $ARCHIVO. Creando uno vacío..."
    touch "$ARCHIVO"
fi
```

**El patrón "Guard Clause": validar al inicio y salir pronto**

En lugar de anidar `if` dentro de `if`, valida las condiciones de error al inicio y sal con `exit 1`. El resto del script queda sin indentación y más fácil de leer:

```bash
#!/bin/bash
# ❌ Estilo "anidado" — difícil de seguir con scripts largos
if [ -n "$1" ]; then
    if [ -f "$1" ]; then
        if [ -r "$1" ]; then
            procesar_archivo "$1"
        else
            echo "Sin permisos de lectura"
        fi
    else
        echo "No es un archivo"
    fi
else
    echo "Falta argumento"
fi

# ✅ Estilo "guard clause" — falla rápido, código principal limpio
#!/bin/bash
ARCHIVO=$1

[ -z "$ARCHIVO" ] && { echo "Uso: $0 <archivo>"; exit 1; }
[ ! -f "$ARCHIVO" ] && { echo "Error: '$ARCHIVO' no es un archivo regular"; exit 1; }
[ ! -r "$ARCHIVO" ] && { echo "Error: sin permisos de lectura sobre '$ARCHIVO'"; exit 1; }

# Si llegamos aquí, todo está bien. El "happy path" sin niveles de indentación
procesar_archivo "$ARCHIVO"
echo "Procesamiento completado."
```

### `[ ]` vs `[[ ]]`

Ambos sirven para condiciones, pero tienen diferencias importantes:

| Característica | `[ ]` | `[[ ]]` |
|----------------|-------|---------|
| Estándar POSIX | ✅ Sí | ❌ Solo Bash/Zsh |
| Strings vacíos | ⚠️ Da error si la variable no existe | ✅ Maneja caso vacío bien |
| Operador `&&` y `\|\|` dentro | ❌ No — usar `[ ] && [ ]` | ✅ Sí: `[[ cond1 && cond2 ]]` |
| Regex con `=~` | ❌ No | ✅ Sí |
| Globbing con `==` | ❌ No | ✅ Sí: `[[ $VAR == *.txt ]]` |
| Comillas obligatorias | ⚠️ Sí, siempre | ✅ Menos estricto |

```bash
# [ ] - Bash básico, compatible con sh
if [ "$NOMBRE" = "Luis" ]; then
    echo "Hola, Luis"
fi

# [[ ]] - Bash moderno, más features
if [[ "$NOMBRE" == "Luis" ]]; then
    echo "Hola, Luis"
fi

# Solo [[ ]]: regex
if [[ "$EMAIL" =~ ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$ ]]; then
    echo "Email válido"
fi

# Solo [[ ]]: globbing
if [[ "$ARCHIVO" == *.log ]]; then
    echo "Es un archivo de log"
fi

# Solo [[ ]]: múltiples condiciones sin comillas extras
if [[ -f "$ARCHIVO" && -r "$ARCHIVO" && -s "$ARCHIVO" ]]; then
    echo "Existe, se puede leer, y no está vacío"
fi
```

> **💡 Pro tip** > La regla práctica: si tu shebang es `#!/bin/bash`, usa `[[ ]]` siempre. Es más seguro, más potente, y ya no necesitas el `#!/bin/sh` POSIX para nada. Reserva `[ ]` solo si escribes scripts que deben funcionar en sistemas muy minimalistas (Alpine, BusyBox) donde el shell por defecto es `dash` o `sh`.

### `case` / `esac`: El switch de Bash

Perfecto cuando tienes múltiples opciones para una misma variable. Es más legible que una cadena de `elif` cuando comparas siempre la misma variable.

**Sintaxis**:
```bash
case $VARIABLE in
    "opcion1")
        # comandos
        ;;
    "opcion2" | "opcion3")
        # comandos (múltiples patrones con |)
        ;;
    *.txt | *.log)
        # globbing: funciona con patrones de archivos
        ;;
    [0-9]*)
        # cualquier cosa que empiece con un dígito
        ;;
    *)
        # default (como el else)
        ;;
esac
```

Los `;;` son el equivalente del `break` en un switch de C. Sin ellos, el control caería al siguiente caso (aunque Bash también tiene `;&` para "fall-through" intencional).

**Ejemplo: Menú interactivo**:
```bash
#!/bin/bash
echo "=== Menú Principal ==="
echo "1) Ver fecha"
echo "2) Ver usuario"
echo "3) Ver directorio"
echo "4) Salir"
read -p "Elige una opción: " OPCION

case $OPCION in
    1)
        echo "Fecha: $(date)"
        ;;
    2)
        echo "Usuario: $USER"
        ;;
    3)
        echo "Directorio: $PWD"
        ;;
    4)
        echo "¡Hasta luego!"
        exit 0
        ;;
    *)
        echo "Opción inválida: $OPCION"
        exit 1
        ;;
esac
```

**Ejemplo práctico: manejo de argumentos de CLI**

`case` brilla cuando tu script acepta subcomandos o flags:

```bash
#!/bin/bash
COMANDO=$1

case "$COMANDO" in
    start | iniciar)
        echo "Iniciando el servicio..."
        systemctl start mi_servicio
        ;;
    stop | detener)
        echo "Deteniendo el servicio..."
        systemctl stop mi_servicio
        ;;
    restart | reiniciar)
        echo "Reiniciando..."
        systemctl restart mi_servicio
        ;;
    status | estado)
        systemctl status mi_servicio
        ;;
    --help | -h | "")
        echo "Uso: $0 {start|stop|restart|status}"
        exit 0
        ;;
    *)
        echo "Comando desconocido: '$COMANDO'"
        echo "Usa '$0 --help' para ver las opciones"
        exit 1
        ;;
esac
```

**Ejemplo con extensiones de archivo**:
```bash
#!/bin/bash
ARCHIVO=$1

case "$ARCHIVO" in
    *.tar.gz | *.tgz)
        tar -xzf "$ARCHIVO"
        echo "Descomprimido con tar+gzip"
        ;;
    *.zip)
        unzip "$ARCHIVO"
        echo "Descomprimido con unzip"
        ;;
    *.gz)
        gunzip "$ARCHIVO"
        echo "Descomprimido con gunzip"
        ;;
    *.bz2)
        bunzip2 "$ARCHIVO"
        echo "Descomprimido con bunzip2"
        ;;
    *)
        echo "No sé cómo descomprimir '$ARCHIVO'"
        exit 1
        ;;
esac
```

### Condiciones en línea: `&&` y `||`

Para lógica simple sin necesidad de un `if` completo. Funcionan aprovechando los **códigos de salida**: si un comando retorna 0 (éxito), `&&` ejecuta el siguiente; si retorna distinto de 0 (error), `||` ejecuta el siguiente.

```bash
# && = "si el anterior tuvo éxito, haz esto"
mkdir nueva_carpeta && echo "Carpeta creada exitosamente"
cp archivo.txt backup/ && echo "Copia exitosa" && rm archivo.txt

# || = "si el anterior falló, haz esto"
mkdir carpeta_existente || echo "Error: la carpeta ya existe"
ping -c1 google.com > /dev/null || echo "Sin conexión a internet"

# Combinado: [ ] && acción_si_verdad || acción_si_falso
[ -d "backup" ] && echo "Backup existe" || mkdir "backup"
```

> **⚠️ ADVERTENCIA**: El patrón `condición && éxito || fallo` tiene una trampa. Si el comando de "éxito" falla, también ejecuta el de "fallo":
> ```bash
> # Bug silencioso:
> [ -f "$ARCHIVO" ] && procesar "$ARCHIVO" || echo "Archivo no encontrado"
> # Si procesar() falla, imprime "Archivo no encontrado" aunque el archivo SÍ existía.
>
> # Solución: usa if/else para lógica que importa
> if [ -f "$ARCHIVO" ]; then
>     procesar "$ARCHIVO"
> else
>     echo "Archivo no encontrado"
> fi
> ```

| Nivel de peligro | 🟡 **Medio** — Fácil confundir la lógica en cadenas largas con `&&` y `\|\|` |
|------------------|------|

#### 💪 Ejercicio 4: El clasificador de notas

| Nivel de peligro | 🟢 **Bajo** — Sólo condicionales anidados, sin modificación de archivos |
|------------------|---|

**Reto**: Crea `calificacion.sh` que reciba una nota del 0 al 100 y la clasifique: A (90-100), B (80-89), C (70-79), D (60-69), F (menos de 60).

<details>
<summary><strong>✅ Solución</strong> (haz clic para ver)</summary>

```bash
#!/bin/bash
read -p "Ingresa la calificación (0-100): " NOTA

if [ $NOTA -ge 90 ]; then
    LETRA="A"
    MENSAJE="¡Excelente!"
elif [ $NOTA -ge 80 ]; then
    LETRA="B"
    MENSAJE="Muy bien."
elif [ $NOTA -ge 70 ]; then
    LETRA="C"
    MENSAJE="Bien, pero puedes mejorar."
elif [ $NOTA -ge 60 ]; then
    LETRA="D"
    MENSAJE="Apenas pasaste."
else
    LETRA="F"
    MENSAJE="Reprobado. A estudiar."
fi

echo "Calificación: $NOTA → $LETRA ($MENSAJE)"
```

</details>

### 🏆 Desafío: El menú de administración

| Dificultad | 🟡 **Intermedio** — `case`, bucle `while true` y comandos de administración del sistema |
|------------|---|

**Situación**: Necesitas un script de utilidades que el equipo pueda ejecutar para tareas comunes: ver el espacio en disco, listar procesos activos, o ver los últimos logs del sistema.

**Tu Misión**: Crea `admin_menu.sh` con un menú `case` que ofrezca al menos 4 opciones de administración reales.

<details>
<summary><strong>✅ Solución</strong></summary>

```bash
#!/bin/bash

while true; do
    echo ""
    echo -e "\e[34m=== Menú de Administración ===\e[0m"
    echo "1) Espacio en disco"
    echo "2) Memoria RAM libre"
    echo "3) Procesos activos (top 10)"
    echo "4) Últimas 20 líneas del syslog"
    echo "5) Usuarios conectados"
    echo "0) Salir"
    read -p "Opción: " OPT

    case $OPT in
        1) df -h ;;
        2) free -h ;;
        3) ps aux --sort=-%mem | head -10 ;;
        4) sudo tail -20 /var/log/syslog 2>/dev/null || echo "Sin acceso a syslog" ;;
        5) who ;;
        0) echo "¡Hasta luego!"; exit 0 ;;
        *) echo -e "\e[31mOpción inválida\e[0m" ;;
    esac
done
```

El `while true` hace que el menú se repita infinitamente hasta que el usuario elige salir. ¡Estás combinando condicionales con bucles! Perfecto intro para la siguiente sección.

</details>


## 🔁 Bucles: Repetir sin volverse loco

Los bucles son tu arma más poderosa para automatizar tareas repetitivas. Necesitas renombrar 500 archivos, procesar línea por línea un CSV, o esperar a que un servicio arranque: los bucles lo hacen por ti.

### `for` sobre una lista

La forma más común. Itera sobre una lista de valores:

**Sintaxis**:
```bash
for VARIABLE in lista; do
    # comandos
done
```

**Ejemplos**:
```bash
#!/bin/bash
# Lista de valores directos
for FRUTA in manzana naranja pera uva; do
    echo "Me gusta la $FRUTA"
done

# Lista de archivos
for ARCHIVO in *.txt; do
    echo "Procesando: $ARCHIVO"
done

# Rango de números (seq)
for NUM in $(seq 1 5); do
    echo "Número: $NUM"
done

# Rango con brace expansion
for NUM in {1..10}; do
    echo "Número: $NUM"
done
```

### `for` estilo C

Útil cuando necesitas control total sobre el contador:

```bash
#!/bin/bash
for ((i=0; i<5; i++)); do
    echo "Iteración $i"
done

# Con paso diferente a 1
for ((i=0; i<=20; i+=5)); do
    echo "$i"
done
# Imprime: 0 5 10 15 20
```

### `while`: Repetir mientras se cumple una condición

**Sintaxis**:
```bash
while [ condición ]; do
    # comandos
done
```

**Ejemplos**:
```bash
#!/bin/bash
# Contar hasta 5
CONTADOR=1
while [ $CONTADOR -le 5 ]; do
    echo "Contador: $CONTADOR"
    ((CONTADOR++))
done

# Leer un archivo línea por línea
while IFS= read -r LINEA; do
    echo "Línea: $LINEA"
done < mi_archivo.txt

# Esperar a que un servicio esté disponible
while ! ping -c 1 google.com > /dev/null 2>&1; do
    echo "Esperando conexión..."
    sleep 5
done
echo "¡Conexión establecida!"
```

> **💡 Pro tip** > `while IFS= read -r LINEA` es la forma correcta de leer archivos línea por línea. El `IFS=` evita que se recorten los espacios al inicio/final. El `-r` evita que se interpreten los backslashes.

### `until`: El while invertido

Se ejecuta **hasta que** la condición sea verdadera (opuesto al `while`):

```bash
#!/bin/bash
INTENTOS=0

until [ $INTENTOS -ge 3 ]; do
    echo "Intento $((INTENTOS+1))"
    ((INTENTOS++))
done
echo "Terminé después de $INTENTOS intentos"
```

### `break` y `continue`

```bash
#!/bin/bash
# break: salir del bucle completamente
for NUM in {1..10}; do
    if [ $NUM -eq 5 ]; then
        echo "Encontré el 5. Me voy."
        break
    fi
    echo "Número: $NUM"
done

# continue: saltar al siguiente ciclo
for NUM in {1..10}; do
    if [ $((NUM % 2)) -eq 0 ]; then
        continue   # Saltar números pares
    fi
    echo "Impar: $NUM"
done
```

### Iterando sobre directorios y archivos

```bash
#!/bin/bash
# Procesar todos los .log en /var/log
for LOG in /var/log/*.log; do
    LINEAS=$(wc -l < "$LOG")
    echo "$LOG: $LINEAS líneas"
done

# Iterar subdirectorios
for DIR in /home/*/; do
    echo "Directorio home: $DIR"
done
```

| Nivel de peligro | 🟡 **Medio** — Un bucle infinito atasca la terminal (Ctrl+C para salir) |
|------------------|---|

#### 💪 Ejercicio 5: El contador regresivo

| Nivel de peligro | 🟢 **Bajo** — Bucle temporal con `sleep`, no modifica el sistema |
|------------------|---|

**Reto**: Crea `cuenta_regresiva.sh` que haga una cuenta regresiva desde 10 hasta 0, pause 1 segundo entre cada número, y al llegar al 0 imprima "¡BOOM! 💥".

<details>
<summary><strong>✅ Solución</strong> (haz clic para ver)</summary>

```bash
#!/bin/bash
for NUM in $(seq 10 -1 0); do
    echo -e "\r$NUM  "
    sleep 1
done
echo "¡BOOM! 💥"
```

O con `while`:
```bash
#!/bin/bash
CUENTA=10
while [ $CUENTA -ge 0 ]; do
    echo "$CUENTA"
    ((CUENTA--))
    sleep 1
done
echo "¡BOOM! 💥"
```

</details>

### 🏆 Desafío: El renombrador masivo

| Dificultad | 🟡 **Intermedio** — Bucle `for` sobre archivos reales con `mv` y `printf` para formato |
|------------|---|

**Situación**: Recibes 50 fotos con nombres tipo `IMG_001.JPG`, `IMG_002.JPG`, etc., y necesitas renombrarlas todas a `foto_001.jpg` (minúsculas, prefijo diferente).

**Tu Misión**: Crea `renombrar.sh` que renombre todos los archivos `.JPG` del directorio actual al formato `foto_NNN.jpg`.

<details>
<summary><strong>✅ Solución</strong></summary>

```bash
#!/bin/bash
CONTADOR=1

for ARCHIVO in *.JPG; do
    # Verificar que existen archivos .JPG
    [ -e "$ARCHIVO" ] || { echo "No hay archivos .JPG"; exit 1; }

    NUEVO="foto_$(printf '%03d' $CONTADOR).jpg"
    mv "$ARCHIVO" "$NUEVO"
    echo "Renombrado: $ARCHIVO → $NUEVO"
    ((CONTADOR++))
done

echo "✅ Renombrados $((CONTADOR-1)) archivos."
```

**Truco clave**: `printf '%03d' $CONTADOR` formatea el número con 3 dígitos y ceros a la izquierda: `1` → `001`, `12` → `012`.

</details>



## 🧩 Funciones: No te repitas

Cuando un bloque de código lo usas más de una vez, ponlo en una función. Las funciones son como mini-scripts dentro de tu script: tienen nombre, reciben parámetros y pueden devolver valores.

### Declarar y llamar una función

**Sintaxis**:
```bash
# Forma 1 (recomendada)
nombre_funcion() {
    # comandos
}

# Forma 2 (también válida)
function nombre_funcion {
    # comandos
}

# Llamarla (sin paréntesis)
nombre_funcion
```

**Ejemplo básico**:
```bash
#!/bin/bash
saludar() {
    echo "¡Hola desde la función!"
}

saludar   # Llama la función
saludar   # Puedes llamarla las veces que quieras
```

### Parámetros de función

Dentro de una función, `$1`, `$2`, etc. son los argumentos que le pasas **a ella** (no al script global):

```bash
#!/bin/bash
saludar_persona() {
    NOMBRE=$1
    CARGO=$2
    echo "Bienvenido, $NOMBRE ($CARGO)"
}

saludar_persona "Luis" "SysAdmin"
saludar_persona "Ana" "DevOps"
saludar_persona "Carlos" "Desarrollador"
```

**Salida**:
```
Bienvenido, Luis (SysAdmin)
Bienvenido, Ana (DevOps)
Bienvenido, Carlos (Desarrollador)
```

### Variables locales

Sin `local`, las variables de una función son **globales** y pueden pisar variables del script principal:

```bash
#!/bin/bash
NOMBRE="Script Principal"

funcion_mala() {
    NOMBRE="Función"   # ⚠️ Pisa la variable global
    echo "Dentro: $NOMBRE"
}

funcion_buena() {
    local NOMBRE="Función"   # ✅ Solo existe aquí
    echo "Dentro: $NOMBRE"
}

echo "Antes: $NOMBRE"
funcion_mala
echo "Después de mala: $NOMBRE"   # ¡Fue cambiada!

NOMBRE="Script Principal"
funcion_buena
echo "Después de buena: $NOMBRE"  # Sin cambios
```

> **💡 Pro tip** > Usa `local` para TODAS las variables dentro de funciones. Es una buena práctica que evita bugs difíciles de rastrear.

### Retornar valores

Bash es raro aquí: `return` solo devuelve un número (código de salida, 0-255). Para devolver texto, usa `echo`:

```bash
#!/bin/bash
# Método 1: echo (devuelve texto)
obtener_fecha() {
    echo $(date +"%Y-%m-%d")
}
FECHA=$(obtener_fecha)
echo "La fecha es: $FECHA"

# Método 2: return (devuelve código de éxito/error)
es_par() {
    local NUM=$1
    if [ $((NUM % 2)) -eq 0 ]; then
        return 0   # 0 = éxito/verdadero en Bash
    else
        return 1   # Diferente de 0 = error/falso
    fi
}

es_par 4 && echo "4 es par" || echo "4 es impar"
es_par 7 && echo "7 es par" || echo "7 es impar"
```

### Funciones de utilidad: logging y manejo de errores

Dos funciones que usarás en casi todo script profesional:

```bash
#!/bin/bash
# --- Funciones de utilidad ---

log_info() {
    echo -e "[\e[32mINFO\e[0m]  $(date '+%H:%M:%S') - $1"
}

log_error() {
    echo -e "[\e[31mERROR\e[0m] $(date '+%H:%M:%S') - $1" >&2
}

log_warn() {
    echo -e "[\e[33mWARN\e[0m]  $(date '+%H:%M:%S') - $1"
}

verificar_comando() {
    local CMD=$1
    if ! command -v "$CMD" > /dev/null 2>&1; then
        log_error "Comando '$CMD' no encontrado. Instálalo primero."
        exit 1
    fi
    log_info "Comando '$CMD' disponible."
}

# --- Uso ---
log_info "Iniciando script..."
verificar_comando "git"
verificar_comando "curl"
log_info "Todo listo."
```

#### 💪 Ejercicio 6: Par o impar con función

| Nivel de peligro | 🟢 **Bajo** — Sólo lógica y funciones, no toca el sistema de archivos |
|------------------|---|

**Reto**: Crea `par_impar.sh` con una función `clasificar()` que reciba un número e imprima si es par, impar, o cero. Pruébala con los números 0, 3, 8, 15, 42.

<details>
<summary><strong>✅ Solución</strong> (haz clic para ver)</summary>

```bash
#!/bin/bash
clasificar() {
    local NUM=$1
    if [ $NUM -eq 0 ]; then
        echo "$NUM → es Cero"
    elif [ $((NUM % 2)) -eq 0 ]; then
        echo "$NUM → es Par"
    else
        echo "$NUM → es Impar"
    fi
}

for N in 0 3 8 15 42; do
    clasificar $N
done
```

**Salida**:
```
0 → es Cero
3 → es Impar
8 → es Par
15 → es Impar
42 → es Par
```

</details>

### 🏆 Desafío: El script modular de backup

| Dificultad | 🟠 **Avanzado** — Funciones, `tar`, manejo de rutas, limpieza automática con `find -mtime` |
|------------|---|

**Situación**: Necesitas un script que haga backup de un directorio, comprima el resultado con fecha en el nombre, y limpie backups de más de 7 días.

**Tu Misión**: Crea `backup.sh` usando funciones separadas para cada responsabilidad.

<details>
<summary><strong>✅ Solución</strong></summary>

```bash
#!/bin/bash
# backup.sh - Sistema de backup modular

# --- Config ---
ORIGEN="${1:-/home/$USER/Documentos}"
DESTINO="/tmp/backups"
DIAS_RETENER=7

# --- Funciones ---
log_info()  { echo -e "[\e[32mINFO\e[0m]  $1"; }
log_error() { echo -e "[\e[31mERROR\e[0m] $1" >&2; }

verificar_origen() {
    if [ ! -d "$ORIGEN" ]; then
        log_error "El directorio origen '$ORIGEN' no existe."
        exit 1
    fi
    log_info "Origen verificado: $ORIGEN"
}

crear_destino() {
    mkdir -p "$DESTINO"
    log_info "Destino listo: $DESTINO"
}

hacer_backup() {
    local FECHA=$(date +"%Y%m%d_%H%M%S")
    local NOMBRE="backup_${FECHA}.tar.gz"
    local RUTA="$DESTINO/$NOMBRE"

    log_info "Comprimiendo..."
    tar -czf "$RUTA" "$ORIGEN" 2>/dev/null

    if [ $? -eq 0 ]; then
        local TAMANIO=$(du -sh "$RUTA" | cut -f1)
        log_info "Backup creado: $NOMBRE ($TAMANIO)"
    else
        log_error "Fallo al crear el backup."
        exit 1
    fi
}

limpiar_backups_viejos() {
    local ELIMINADOS=$(find "$DESTINO" -name "backup_*.tar.gz" \
        -mtime +$DIAS_RETENER -type f | wc -l)
    find "$DESTINO" -name "backup_*.tar.gz" -mtime +$DIAS_RETENER -delete
    log_info "Backups viejos eliminados: $ELIMINADOS"
}

# --- Main ---
log_info "=== Iniciando backup ==="
verificar_origen
crear_destino
hacer_backup
limpiar_backups_viejos
log_info "=== Backup completado ==="
```

Cada función hace **una sola cosa**. ¿Se rompe algo? Sabes exactamente dónde buscar.

</details>


## 🛡️ Buenas Prácticas y Depuración: Scripting profesional

Cualquiera puede escribir un script que funciona en condiciones perfectas. Los profesionales escriben scripts que funcionan **incluso cuando las cosas se ponen feas**: archivos que no existen, comandos que fallan, variables sin definir. Esta sección es la diferencia entre un script de producción y uno que explota en viernes por la tarde.

### El trío de opciones de seguridad

Las primeras líneas más importantes de cualquier script serio (después del shebang):

```bash
#!/bin/bash
set -euo pipefail
```

Desglosado:

```bash
set -e   # Exit on error: sale al primer error en lugar de continuar
set -u   # Unset error: da error si usas una variable no definida
set -o pipefail  # Si cualquier parte de un pipe falla, el pipe falla
```

**¿Por qué importan?**

```bash
# Sin set -e (peligroso)
rm archivo_importante.txt   # Falla, pero el script sigue
echo "Todo bien" | grep "algo"
# ... más comandos que asumen que todo está bien

# Con set -e
rm archivo_importante.txt   # Falla → script se detiene aquí
# Los comandos siguientes NO corren. ¡Salvaste algo!
```

```bash
# Sin set -u (peligroso)
rm -rf $DIRECTORIO/   # Si DIRECTORIO está vacío: rm -rf /  ← APOCALIPSIS

# Con set -u
rm -rf $DIRECTORIO/   # Error: DIRECTORIO: variable no definida
# Script se detiene antes del desastre
```

> **💡 Pro tip** > Pon `set -euo pipefail` inmediatamente después del shebang en TODOS tus scripts de producción. Es el equivalente al cinturón de seguridad: no lo piensas hasta que lo necesitas.

### Modo debug: `bash -x` y `set -x`

Cuando algo falla y no sabes por qué, el modo debug te muestra exactamente qué está ejecutando Bash y con qué valores:

```bash
# Ejecutar todo el script en modo debug
bash -x mi_script.sh

# Activar debug solo en una sección
set -x   # Inicia el debug
# ... el código que quieres ver
set +x   # Termina el debug
```

**Ejemplo de output en modo debug**:
```
+ NOMBRE=Luis
+ echo 'Hola, Luis'
Hola, Luis
+ ls -la
total 8
...
```

El `+` al inicio de cada línea indica que es un comando que Bash está ejecutando. Ves exactamente cómo se expandieron las variables.

### Manejo de errores

```bash
#!/bin/bash
set -euo pipefail

# Forma 1: Verificar el código de salida ($?)
mkdir /tmp/mi_carpeta
if [ $? -ne 0 ]; then
    echo "Error al crear la carpeta"
    exit 1
fi

# Forma 2: Con || (más limpio)
mkdir /tmp/mi_carpeta || { echo "Error al crear la carpeta"; exit 1; }

# Forma 3: Función de manejo de errores
manejar_error() {
    local LINEA=$1
    local CODIGO=$2
    echo "Error en línea $LINEA (código: $CODIGO)" >&2
    exit $CODIGO
}
trap 'manejar_error $LINENO $?' ERR
```

### `trap`: Hacer limpieza al salir

`trap` intercepta señales y eventos para ejecutar código antes de que el script termine:

```bash
#!/bin/bash
set -euo pipefail

# Crear archivo temporal
TEMP_FILE=$(mktemp)

# Limpiar al salir (por cualquier razón: error, Ctrl+C, o fin normal)
limpiar() {
    rm -f "$TEMP_FILE"
    echo "Limpieza completada."
}
trap limpiar EXIT

# ... el resto del script usa $TEMP_FILE sin preocuparse por limpiarlo
echo "datos temporales" > "$TEMP_FILE"
cat "$TEMP_FILE"
# Al terminar (o al dar Ctrl+C), 'limpiar' se llama automáticamente
```

**Señales útiles para `trap`**:
| Señal | Cuándo se dispara |
|-------|------------------|
| `EXIT` | Al salir (por cualquier razón) |
| `ERR` | Cuando un comando falla |
| `INT` | Cuando el usuario presiona Ctrl+C |
| `TERM` | Cuando el proceso recibe señal de terminar |

### Comentarios y documentación

Un script bien comentado es un regalo para tu "yo del futuro":

```bash
#!/bin/bash
# ============================================================
# backup_diario.sh
# Descripción: Realiza backups comprimidos del directorio home
# Autor: Luis Pereida <luis@pereidax86.com>
# Versión: 1.2.0
# Uso: ./backup_diario.sh [--dry-run]
# ============================================================

set -euo pipefail

# --- Configuración ---
ORIGEN="$HOME"        # Directorio a respaldar
DESTINO="/mnt/backup" # Donde se guardan los backups
RETENER=7             # Días de retención

# --- Funciones ---
# Crea el backup comprimido con timestamp en el nombre
hacer_backup() {
    # ... 
}
```

> **💡 Pro tip** > Los comentarios deben explicar el **por qué**, no el **qué**. `# Incrementar contador` es redundante junto a `((CONTADOR++))`. `# Reintentar hasta 3 veces porque la API es inestable` es útil.

### Verificar dependencias al inicio

```bash
#!/bin/bash
# Verificar que los comandos necesarios están instalados
DEPENDENCIAS=("git" "curl" "jq" "tar")

for DEP in "${DEPENDENCIAS[@]}"; do
    if ! command -v "$DEP" > /dev/null 2>&1; then
        echo "Error: '$DEP' no está instalado. Instálalo antes de continuar."
        exit 1
    fi
done

echo "Todas las dependencias están disponibles."
```

### Resumen: El template del script profesional

```bash
#!/bin/bash
# ============================================================
# nombre_script.sh - Descripción en una línea
# Uso: ./nombre_script.sh argumento1 [argumento2]
# ============================================================
set -euo pipefail

# --- Constantes ---
readonly VERSION="1.0.0"
readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# --- Funciones de utilidad ---
log_info()  { echo -e "[\e[32mINFO\e[0m]  $1"; }
log_error() { echo -e "[\e[31mERROR\e[0m] $1" >&2; }

uso() {
    echo "Uso: $0 argumento1 [argumento2]"
    echo "  argumento1  - descripción"
    exit 0
}

limpiar() { log_info "Limpiando..."; }
trap limpiar EXIT

# --- Validar argumentos ---
[ $# -lt 1 ] && uso

# --- Main ---
main() {
    log_info "Iniciando v$VERSION"
    # Tu lógica aquí
    log_info "Completado."
}

main "$@"
```

#### 💪 Ejercicio 7: Convertir un script frágil en uno robusto

| Nivel de peligro | 🟠 **Alto** — Aprendes a manejar `cp`, errores reales y rutas múltiples: un error podría sobreescribir archivos |
|------------------|---|

**Reto**: El siguiente script funciona "en días buenos". Agrégale `set -euo pipefail`, manejo de errores, y verificación de argumentos:

```bash
#!/bin/bash
# Script frágil (versión original)
ARCHIVO=$1
DESTINO=$2
cp $ARCHIVO $DESTINO
echo "Copiado"
```

<details>
<summary><strong>✅ Solución</strong> (haz clic para ver)</summary>

```bash
#!/bin/bash
# copiar_seguro.sh - Copia un archivo con verificaciones
set -euo pipefail

uso() {
    echo "Uso: $0 archivo_origen directorio_destino"
    exit 1
}

# Validar argumentos
[ $# -ne 2 ] && uso

ARCHIVO="$1"
DESTINO="$2"

# Verificar que el origen existe
if [ ! -f "$ARCHIVO" ]; then
    echo "Error: El archivo '$ARCHIVO' no existe." >&2
    exit 1
fi

# Verificar que el destino es un directorio
if [ ! -d "$DESTINO" ]; then
    echo "Error: '$DESTINO' no es un directorio." >&2
    exit 1
fi

# Copiar con verbose
cp -v "$ARCHIVO" "$DESTINO/" || {
    echo "Error: No se pudo copiar el archivo." >&2
    exit 1
}

echo "✅ Copiado exitosamente."
```

</details>

### 🏆 Desafío Final: El script de despliegue

| Dificultad | 🟠 **Avanzado** — Integra todo: funciones, `trap`, logging con colores, validación de dependencias y manejo robusto de errores |
|------------|---|

**Situación**: Necesitas un script que automatice el despliegue de una aplicación: verificar dependencias, hacer backup del estado actual, descargar la versión nueva, y reportar el resultado.

**Tu Misión**: Crea `deploy.sh` aplicando todo lo aprendido: funciones, manejo de errores, `trap`, logging con colores y argumentos.

<details>
<summary><strong>✅ Solución</strong></summary>

```bash
#!/bin/bash
# deploy.sh - Script de despliegue simulado
# Uso: ./deploy.sh <version>
set -euo pipefail

# --- Config ---
readonly VERSION_NUEVA="${1:-}"
readonly APP_DIR="/tmp/mi_app"
readonly BACKUP_DIR="/tmp/backups_deploy"
readonly LOG_FILE="/tmp/deploy_$(date +%Y%m%d_%H%M%S).log"

# --- Utilidades ---
log_info()  { echo -e "[\e[32mINFO\e[0m]  $(date '+%H:%M:%S') $1" | tee -a "$LOG_FILE"; }
log_error() { echo -e "[\e[31mERROR\e[0m] $(date '+%H:%M:%S') $1" | tee -a "$LOG_FILE" >&2; }
log_warn()  { echo -e "[\e[33mWARN\e[0m]  $(date '+%H:%M:%S') $1" | tee -a "$LOG_FILE"; }

limpiar_en_fallo() {
    log_error "Deploy fallido. Revisa $LOG_FILE para detalles."
}
trap limpiar_en_fallo ERR

# --- Funciones ---
validar_argumentos() {
    if [ -z "$VERSION_NUEVA" ]; then
        log_error "Debes especificar una versión. Ej: $0 2.1.0"
        exit 1
    fi
    log_info "Desplegando versión: $VERSION_NUEVA"
}

verificar_dependencias() {
    local DEPS=("curl" "tar")
    for DEP in "${DEPS[@]}"; do
        command -v "$DEP" > /dev/null 2>&1 || {
            log_error "Dependencia faltante: $DEP"
            exit 1
        }
    done
    log_info "Dependencias verificadas."
}

hacer_backup() {
    mkdir -p "$BACKUP_DIR"
    if [ -d "$APP_DIR" ]; then
        local TS=$(date +%Y%m%d_%H%M%S)
        tar -czf "$BACKUP_DIR/backup_$TS.tar.gz" "$APP_DIR" 2>/dev/null
        log_info "Backup creado: backup_$TS.tar.gz"
    else
        log_warn "No hay versión anterior que respaldar."
    fi
}

desplegar() {
    mkdir -p "$APP_DIR"
    echo "version=$VERSION_NUEVA" > "$APP_DIR/version.txt"
    echo "deployed=$(date)" >> "$APP_DIR/version.txt"
    log_info "Aplicación desplegada en $APP_DIR"
}

verificar_despliegue() {
    if [ -f "$APP_DIR/version.txt" ]; then
        log_info "✅ Verificación exitosa:"
        cat "$APP_DIR/version.txt" | while read LINE; do
            log_info "   $LINE"
        done
    else
        log_error "La verificación falló: archivo version.txt no encontrado."
        exit 1
    fi
}

# --- Main ---
log_info "=== INICIO DE DEPLOY ==="
validar_argumentos
verificar_dependencias
hacer_backup
desplegar
verificar_despliegue
log_info "=== DEPLOY COMPLETADO ==="
log_info "Log guardado en: $LOG_FILE"
```

</details>



## 🏁 Ctrl + D: Lo que viene después

Si llegaste hasta aquí, ya sabes lo suficiente para automatizar tareas reales en Linux. No es poca cosa.

Pero como siempre, esto es solo el comienzo. Una vez que te sientas cómodo con estos conceptos, te recomiendo explorar:

- **`cron`**: Programar scripts para que corran automáticamente (backups nocturnos, reportes diarios)
- **`getopts`**: Parsear opciones estilo `--verbose` y `-h` en tus scripts
- **Arrays en Bash**: Para manejar listas de datos más complejas
- **`awk` y `sed`**: Los dos hechizos de manipulación de texto que todo SysAdmin debería conocer
- **ShellCheck**: Un linter gratuito que analiza tu script y te dice qué estás haciendo mal antes de que lo ejecutes (`shellcheck mi_script.sh`)

Y como el scripting se aprende haciéndolo, te sugiero este ejercicio final personal: **piensa en una tarea que haces manualmente y repites seguido**, y conviértela en un script. No importa si queda feo al principio. El segundo intento siempre es mejor.

Lo más importante, como siempre, es **nunca dejar de preguntar**.

---

*¿Te fue útil esta guía? Compártela, rómpela, mejórala. El conocimiento que no se comparte se oxida.*
