---
title: "RAID: No es un insecticida, es la armadura de tus discos"
description: "Descubre qué es un RAID, los niveles más importantes (0, 1, 5, 10) y cómo la redundancia salva tus datos en Linux."
pubDate: 2026-01-21
author: "Luis Pereida"
tags: ["Linux", "RAID", "Almacenamiento", "SysAdmin", "Hardware"]
image: "../../assets/images/blog/raid-linux-armadura.webp"
series: "linux-almacenamiento"
seriesTitle: "Almacenamiento en Linux & Backups"
seriesOrder: 2
---

En la [entrada anterior](/blog/linux-almacenamiento-01-regla-3-2-1-backups) hablamos de la regla 3-2-1, esa estrategia vital para que tus datos sobrevivan a incendios, robos o a tu propia torpeza.

Si eres observador, quizá estés pensando: **"Oye Pereida, ¿no hubiera tenido más sentido hablar primero de almacenamiento y luego de cómo respaldarlo?"**. Y sí, tienes toda la razón del mundo. La lógica dicta que primero construyes la casa y luego contratas el seguro contra incendios.

Pero siendo honestos, este blog no siempre sigue una línea recta perfecta; sigue el camino caótico de mis ideas. A veces me despierto pensando en backups y otras en sistemas de archivos, muchas veces en por qué, por más que me esfuerce, no me puedo convertir en Super Saiyajin. Así que, haciendo un pequeño *flashback* narrativo (y pidiendo disculpas a los obsesivos del orden), hoy vamos a dar ese paso atrás necesario.

Vamos a meternos a las entrañas de tu servidor (o de tu PC gamer) para hablar de cómo proteger los datos **mientras están vivos y operando**.

Hoy no vamos a hablar de insecticidas para matar cucarachas, aunque el nombre suene a eso. Vamos a hablar de **RAID**.

Porque aceptémoslo: los discos duros son traicioneros y fallan. No es una cuestión de mala suerte ni de karma, es pura física y entropía. Tienen partes móviles que se desgastan o celdas de memoria que pierden su carga, y un día, sin previo aviso y usualmente en el momento más inoportuno, deciden dejar de girar. Si ese día no estás preparado, créeme, vas a llorar.

## ¿Qué rayos es un RAID?

**RAID** significa *Redundant Array of Independent Disks* (Matriz Redundante de Discos Independientes).

En español cristiano: es una tecnología que te permite combinar varios discos físicos para que el sistema operativo los vea como una sola unidad lógica. ¿El objetivo? Lograr dos cosas que generalmente no van de la mano: **Redundancia** (seguridad ante fallos) y **Rendimiento** (velocidad).

Imagina que tienes dos camiones de mudanza.
*   Si llenas uno y el otro lo usas de repuesto por si el primero se descompone, tienes seguridad (**Redundancia**).
*   Si llenas los dos a la mitad para llevar las cosas más rápido, tienes velocidad (**Rendimiento**).
*   El RAID hace malabares con estos conceptos.

> **¡OJO AL DATO!** ⚠️
> **RAID NO ES UN BACKUP.**
> Repítelo conmigo: RAID NO ES UN BACKUP.
> Un RAID te protege si un disco físico explota. Pero si borras un archivo por error, si te entra un virus o si se corrompe el sistema de archivos, el RAID replicará ese error en todos los discos instantáneamente. **La Regla 3-2-1 sigue siendo obligatoria**.

## Los Sabores del RAID (Niveles)

Hay muchos "niveles" de RAID, pero en la vida real, como SysAdmin o entusiasta, te vas a topar principalmente con estos cuatro. Vamos a ver cuál te conviene.

### RAID 0: La Velocidad Absurda (Striping)
*   **Requisito**: Mínimo 2 discos.
*   **¿Qué hace?**: Toma tus datos y los reparte entre todos los discos como si fueran cartas de una baraja.
*   **Lo bueno**: Es rapidísimo. La velocidad de lectura/escritura se multiplica por el número de discos.
*   **Lo malo**: Es suicida. **Cero redundancia**. Si tienes 2 discos en RAID 0 y uno falla, **pierdes TODA la información**.
*   **Uso**: Edición de video temporal, caché, cosas que no te importa perder si vuelan.

### RAID 1: El Espejo (Mirroring)
*   **Requisito**: Mínimo 2 discos.
*   **¿Qué hace?**: Escribe exactamente lo mismo en dos (o más) discos. Son clones perfectos.
*   **Lo bueno**: Si un disco muere, el otro sigue funcionando como si nada. Alta seguridad.
*   **Lo malo**: Desperdicias espacio. Si tienes dos discos de 1TB, solo tendrás 1TB disponible.
*   **Uso**: El disco de arranque del sistema operativo, bases de datos pequeñas.

### RAID 5: El Estándar de la Industria (Parity with Striping)
*   **Requisito**: Mínimo 3 discos.
*   **¿Qué hace?**: Usa al menos 3 discos. Reparte los datos y una "fórmula matemática" (paridad) entre ellos. Si un disco falla, usa la matemática del resto para reconstruir los datos perdidos.
*   **Lo bueno**: Buen balance entre velocidad y almacenamiento. Solo pierdes la capacidad equivalente a un disco.
*   **Lo malo**: Las escrituras son algo más lentas (por el cálculo de paridad) y la reconstrucción si falla un disco es intensa.
*   **Uso**: Servidores de archivos, NAS caseros.

### RAID 10 (1+0): El Ferrari Blindado
*   **Requisito**: Mínimo 4 discos.
*   **¿Qué hace?**: Combina RAID 1 y RAID 0. Haces espejos de los discos y luego los unes para velocidad.
*   **Lo bueno**: Velocidad de RAID 0 + Seguridad de RAID 1. Es lo mejor de ambos mundos.
*   **Lo malo**: Es caro. "Pierdes" la mitad de tu capacidad total (como en RAID 1).
*   **Uso**: Bases de datos de alto rendimiento, virtualización.

## Pero... ¿Necesito comprar una tarjeta especial?

Históricamente, para montar un RAID "serio" necesitabas comprar una tarjeta controladora dedicada (RAID Controller). Estas tarjetas tienen su propio procesador y memoria RAM para hacer todos los cálculos (especialmente los de paridad del RAID 5) sin molestar a la CPU principal. Son geniales, pero cuestan dinero y son un punto único de fallo: si la tarjeta se quema, adiós a tu acceso a los datos hasta que consigas *exactamente* el mismo modelo.

Pero aquí es donde entra **Linux** para salvar el día (y la cartera).

## ¿Cómo lo implemento en Linux? (Sin gastar un peso)

### Implementación por Software con `mdadm`

Hoy en día, las CPUs son tan potentes que podemos delegarles estos cálculos sin que apenas suden. Podemos hacerlo todo por software usando `mdadm` (**M**ultiple **D**isk **Adm**in), la navaja suiza del RAID en Linux.

Vamos a hacer un ejemplo práctico. Supongamos que tienes dos discos vacíos y quieres crear un **RAID 1 (Espejo)**.

#### Paso 0: Identifica tus discos
Antes de romper nada, asegúrate de saber cuáles son tus discos. No querrás borrar el disco donde tienes las fotos de la boda.

```bash
lsblk
```
Busca tus discos nuevos. Digamos que son `/dev/sdb` y `/dev/sdc`.

> **Pro tip:** Asegúrate de que no tengan particiones viejas. Si las tienen, puedes usar `fdisk` o `wipefs -a /dev/sdb` (¡con mucho cuidado!) para dejarlos limpios.

#### Paso 1: Instalar la herramienta
Si no la tienes, es fácil de conseguir.
```bash
sudo apt install mdadm  # Debian/Ubuntu
sudo dnf install mdadm  # Fedora/RHEL
```

#### Paso 2: Crear el RAID (La magia)
Aquí creamos el dispositivo virtual `/dev/md0` usando nuestros dos discos físicos.

```bash
# SINTAXIS:
# mdadm --create [NOMBRE_VIRTUAL] --level=[NIVEL] --raid-devices=[CANTIDAD] [DISCOS]

sudo mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sdb /dev/sdc
```
El sistema te preguntará si estás seguro. Dile que sí ("y").

#### Paso 3: Darle formato
Ahora `/dev/md0` se comporta como un disco normal. Necesita un sistema de archivos.
```bash
sudo mkfs.ext4 /dev/md0
```

#### Paso 4: Montarlo y Usarlo
Creamos una carpeta y enganchamos nuestro nuevo RAID ahí.
```bash
sudo mkdir -p /mnt/mis_datos_seguros
sudo mount /dev/md0 /mnt/mis_datos_seguros
```
¡Listo! Todo lo que guardes en esa carpeta se escribirá en ambos discos a la vez.

#### Paso 5: Hacerlo persistente (¡Muy Importante!)
Si reinicias ahora, es posible que el RAID no arranque solo o cambie de nombre. Necesitamos guardar la configuración.

```bash
# 1. Guardar la configuración del array
sudo mdadm --detail --scan | sudo tee -a /etc/mdadm/mdadm.conf

# 2. Actualizar el "cerebro" inicial del arranque (initramfs) para que sepa del RAID
sudo update-initramfs -u  # En Debian/Ubuntu
sudo dracut --force     # En Fedora/RHEL

# 3. Añadirlo al fstab para que se monte solo al reiniciar
echo '/dev/md0 /mnt/mis_datos_seguros ext4 defaults,nofail,discard 0 0' | sudo tee -a /etc/fstab
```

#### ¿Cómo sé si está funcionando?
Puedes ver el estado de tu RAID en tiempo real. Es hipnótico ver cómo se sincroniza por primera vez.
```bash
cat /proc/mdstat
```
Verás algo como `[UU]`, lo que significa que ambos discos están **U**p (Arriba/Funcionando). Si ves `[_U]`, ¡pánico! Uno falló. (Es broma, no entres en pánico, pero sí preocúpate).

## Ventajas y Desventajas (La cruda realidad)

### Ventajas 👍
*   **Continuidad de Negocio**: Si falla un disco, el servidor no se detiene. Sigues trabajando.
*   **Tranquilidad Mental**: Saber que un fallo mecánico no implica pérdida de datos instantánea.
*   **Rendimiento**: En niveles como 0, 5 o 10, mejoras la velocidad de acceso.

### Desventajas 👎
*   **Dependencia del Hardware**: Incluso con RAID por software, sigues dependiendo de tener discos físicos del mismo tamaño y velocidad para que funcione óptimo.
*   **Complejidad**: Si no sabes lo que haces, recuperar un RAID degradado puede ser estresante.
*   **No es infalible**: Un pico de voltaje puede freír todos los discos a la vez (usa un UPS, por favor).
*   **Rigidez**: Ampliar un RAID tradicional (añadir más discos) no siempre es trivial.

## El futuro es hoy, viejo: Software Defined Storage

El RAID tradicional ha servido bien durante décadas, pero tiene sus limitaciones. "Ata" los datos al hardware de una forma algo rígida.

¿Qué pasa si quiero mezclar discos de diferentes tamaños? ¿Si quiero replicar datos entre diferentes servidores, no solo discos? ¿Si quiero snapshots instantáneos?

Aquí es donde entran las soluciones modernas definidas por software (**SDS**) que eliminan muchas de las restricciones del RAID clásico. En la próxima entrada hablaremos de los chicos cool del barrio: **LVM, ZFS y Ceph**.

## Ctrl + D

Implementar un RAID es el primer paso para dejar de ser un usuario casual y convertirte en el guardián de tus datos. Ya sea que montes un pequeño NAS en casa con viejos discos duros o administres servidores empresariales, entender cómo funciona la redundancia es vital.

Experimenta en máquinas virtuales, rompe cosas, recupera arrays degradados. La mejor forma de aprender es cuando ves el mensaje `[UU_]` convertirse en `[UU]` después de una reconstrucción exitosa.

Y recuerda, **lo más importante es nunca dejar de preguntar**.
