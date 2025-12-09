---
title: "Otros 10 Comandos de Linux Básico para Seguir Aprendiendo"
description: "Continúa tu viaje en la terminal con pwd, touch, echo, history y otros comandos esenciales para administrar tu sistema."
pubDate: 2025-01-26
author: "Luis Pereida"
tags: ["Linux", "Terminal", "SysAdmin", "Comandos"]
image: "/images/blog/linux-commands-part2.webp"
---

Cuando comienzas a familiarizarte con Linux, podrías pensar que todo gira en torno a unos pocos comandos básicos. Al principio, enfrentarte a la consola puede parecer abrumador: no hay ventanas bonitas ni mensajes emergentes que te guíen.

Pero aquí está la magia: lo que parece complicado es, en realidad, una manera directa y poderosa de interactuar con tu sistema. Y, aunque parezca increíble, administrar Linux puede ser mucho más sencillo que lidiar con algunos “problemitas” clásicos de Windows (¿cuántas veces has tenido que reiniciar después de instalar algo?).

Aprender Linux es como abrir una caja de herramientas infinita: cada comando es una llave que desbloquea nuevas posibilidades. Y lo mejor es que no importa si estás empezando desde cero; todos los grandes administradores de sistemas comenzaron exactamente igual.

En esta segunda entrega, seguimos explorando comandos esenciales que complementan los [vistos anteriormente](/blog/ayuda-linux-sin-google). Cada uno viene acompañado de ejemplos prácticos y consejos para sacarles el máximo provecho.

## 1. pwd – Mostrar el directorio actual

Supongamos que te has movido a través de varios directorios y has perdido el rastro de dónde estás. Con el comando `pwd`, puedes saber exactamente en qué directorio te encuentras.

```bash
pwd
```
Por ejemplo, estás escribiendo un script y necesitas saber la ruta completa del directorio actual para incluirla en el script.

```Bash
ruta_actual=$(pwd)
echo "La ruta actual es: $ruta_actual"
```

Esto muestra que puedes almacenar el resultado de un comando en una variable para usarlo más adelante.

> **protip >** pwd significa “print working directory” y es especialmente útil cuando trabajas en rutas largas y complejas.

## 2. touch – Crear archivos vacíos

Si necesitas crear rápidamente un archivo nuevo, touch es tu comando ideal. Es perfecto para iniciar archivos de texto o cualquier otro tipo de archivo.

```bash
touch archivo_nuevo.txt
```

Usalo si estás configurando un proyecto y necesitas crear varios archivos como README.md o main.py antes de editarlos.

```bash
touch README.md main.py
```

> **protip >** Si el archivo ya existe, touch actualizará su fecha de modificación sin alterar el contenido.

## 3. echo – Imprimir texto en la terminal

El comando echo puede parecer simple, pero es extremadamente útil para mostrar mensajes, probar variables y crear archivos.

```bash
echo "Hola, mundo"
```

Intenta Quieres guardar una línea de texto en un archivo directamente desde la terminal.

```bash
echo "Este es un archivo creado con echo" > archivo.txt
```

> **protip >** Usa `>>` para agregar texto a un archivo existente sin sobrescribirlo.
>```bash
>echo "Otra línea" >> archivo.txt
>```

## 4. head y tail – Leer el principio o final de un archivo

Estos comandos son imprescindibles cuando trabajas con archivos largos y solo necesitas revisar las primeras o últimas líneas. Por ejemplo, muestra las primeras 10 líneas de un archivo.

```bash
head archivo.txt
```

O algo mas pro, si quieres verificar las últimas líneas de un archivo de registro para analizar errores recientes.

```bash
tail -n 20 /var/log/syslog
```

> **protip >** Usa -f con tail para seguir un archivo en tiempo real (Live logs).
>```bash
>tail -f /var/log/syslog
>```

## 5. df – Espacio en disco

Conocer cuánto espacio libre tienes en tus discos es fundamental para administrar servidores o tu propia máquina, y para conocer el espacio usado y disponible en los sistemas de archivos usa este comando.

```bash
df
```

Algo que deberias hacer cuando estás instalando software y quieres asegurarte de que tienes suficiente espacio en el disco.

```bash
df -h
```

> **protip >** Usa la opción -h (human-readable) para que los resultados sean más legibles (en KB, MB, GB).

## 6. du – Uso de disco

Complementando a df, el comando du te permite ver cuánto espacio está utilizando cada archivo o directorio.

```bash
du archivo.txt
```

Quieres saber qué directorios ocupan más espacio en tu sistema.

```bash
du -h --max-depth=1
```
> **protip >** Usa sort para ordenar los resultados de mayor a menor.
>```Bash
>du -h --max-depth=1 | sort -rh
>```

## 7. history – Historial de comandos

Recordar comandos largos que has ejecutado puede ser un reto. Con history, puedes consultar todos los comandos recientes.

```bash
history
```

Y si necesitas repetir un comando que ejecutaste hace unas horas.

```bash
!número
```

> **protip >** Usa grep para buscar un comando específico en el historial.
>```bash
>history | grep "comando"
>```

## 8. wget – Descargar archivos desde la web

Si necesitas descargar archivos desde la terminal, wget es una herramienta indispensable.

```bash
wget [http://ejemplo.com/archivo.zip](http://ejemplo.com/archivo.zip)
```

Si estás configurando un servidor y necesitas descargar el código fuente de un proyecto.

```bash
wget https://github.com/usuario/proyecto/archive/main.zip
```

> **protip >** Usa -c para reanudar una descarga interrumpida.
>```bash
>wget -c http://ejemplo.com/archivo.zip
>```

## 9. ps – Procesos en ejecución

Para administrar tu sistema, es importante saber qué procesos están en ejecución.

```bash
ps
```

Quieres identificar el PID (Process ID) de un programa que está consumiendo muchos recursos.

```bash
ps aux | grep "nombre_programa"
```

## 10. kill – Terminar procesos

Cuando un programa se congela, kill es tu mejor aliado. Termina un proceso usando su PID.

```bash
kill PID
```

Escenario real: Un navegador ha dejado de responder y necesitas cerrarlo.

```bash
ps aux | grep firefox
kill 1234  # Donde 1234 es el PID
```

> **protip >** Usa killall para cerrar todos los procesos de un programa por su nombre.
>```bash
>killall firefox
>```

## ctrl + D (Conclusión)

Explorar nuevos comandos es una parte emocionante de trabajar con Linux. Cada herramienta que aprendes amplía tus habilidades y te hace más eficiente en tus tareas diarias. Dominar estas herramientas no solo te ayuda a optimizar tu tiempo, sino también a entender mejor cómo funciona tu sistema.

Linux es un ecosistema en constante evolución, y la mejor manera de mantenerse al día es practicando continuamente. Recuerda que no importa cuánto sepas, siempre habrá algo nuevo que aprender.

**Lo más importante es nunca dejar de preguntar**. Con curiosidad, paciencia y dedicación, cada día en Linux es una oportunidad para descubrir algo nuevo. ¡Sigue explorando!