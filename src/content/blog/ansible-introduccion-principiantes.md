---
title: "Ansible: Deja de configurar servidores a mano como si fuera 2005"
description: "Aprende qué es Ansible, cómo funciona su arquitectura agentless, y da tus primeros pasos automatizando servidores Linux con Playbooks. Guía para principiantes."
pubDate: 2026-03-24
author: "Luis Pereida"
tags: ["Ansible", "Automatización", "DevOps", "Linux", "SysAdmin"]
image: "/images/blog/ansible-introduccion.webp"
---

Imagina esta escena: son las 11 de la noche de un viernes. Tienes que actualizar la configuración de nginx en 8 servidores antes de que llegue el tráfico del fin de semana. Abres 8 terminales. Te conectas al primero con SSH. Editas el archivo de configuración. Reinicias el servicio. Te conectas al segundo. Editas. Reinicias. Al tercero. Al cuarto...

Para el servidor número 6, ya cometiste un typo. No te diste cuenta hasta el lunes, cuando ese servidor específico empezó a dar errores raros en producción.

¿Te suena familiar? No. Perfecto. Significa que ya descubriste Ansible antes que escribiera esto.

Porque si te suena familiar, bienvenido al club. Y bienvenido también a la solución.

## El problema real de administrar servidores manualmente

Cuando tienes un solo servidor, hacerlo todo a mano funciona. Es incómodo, pero funciona. Pero la infraestructura tiene una tendencia horrible a crecer.

Un servidor se convierte en tres. Tres se convierten en diez. Diez se convierten en cincuenta cuando tu jefe decide que "necesitamos escalar". Y de repente estás frente a un problema que los ingenieros de sistemas conocen muy bien: **la deriva de configuración**.

La deriva de configuración ocurre cuando tus servidores, que en teoría deberían ser idénticos, empiezan a diferenciarse entre sí de formas sutiles e imperceptibles. Uno tiene nginx 1.24, otro tiene 1.22 porque alguien actualizó solo ese. Uno tiene un archivo de configuración ligeramente diferente porque alguien lo editó directamente "solo por esta vez". Otro tiene un usuario de sistema que no debería existir porque alguien lo creó para hacer una prueba y se olvidó de eliminarlo.

Tu infraestructura empieza a parecerse menos a un ejército uniformado y más a un grupo de personas que salieron a hacer ejercicio sin consultar entre sí: todos más o menos hacen lo mismo, pero cada quien a su manera... uno llego disfrazado de gotico y no sabes muy bien porque paso eso, pero paso.

Ahí es donde entra Ansible.

## ¿Qué es Ansible?

**Ansible** es una herramienta de automatización de TI que te permite gestionar configuraciones, desplegar aplicaciones y orquestar tareas en múltiples servidores desde una sola máquina. Y sí, es tan simple como suena: en vez de código o scripts, escribes archivos YAML donde describes el **estado deseado** de tus servidores, y Ansible se encarga de hacerlo realidad en todos al mismo tiempo.

La clave de ese modelo es la diferencia entre decir *"ejecuta estos comandos"* y decir *"así es cómo quiero que quede el servidor"*. Tú describes el destino, no el camino. Ansible calcula qué tiene que hacer en cada máquina para llegar ahí. Si el archivo de configuración ya existe con el contenido correcto, no lo toca. Si el paquete ya está instalado, no lo vuelve a instalar. Si el servicio ya está corriendo, lo deja en paz.

Eso se llama **idempotencia**: puedes ejecutar el mismo Playbook 10 veces seguidas y el resultado siempre será el mismo, sin efectos secundarios. Es un cambio de mentalidad enorme respecto a un script de shell, donde correrlo dos veces puede terminar en usuarios duplicados, paquetes instalados doble, o configuraciones pisadas.

Es como la diferencia entre instruir a un chef en cada cocina individualmente versus entregarle a todos el mismo libro de recetas. El resultado es consistente, reproducible y documentado.

### Lo que hace especial a Ansible: es agentless

La mayoría de las herramientas de automatización requieren que instales un agente (un programa que se queda corriendo) en cada servidor que quieras gestionar. Ansible no.

Ansible usa **SSH** para conectarse a tus servidores. Eso es todo. Si puedes hacer SSH a un servidor Linux, Ansible puede gestionarlo. No hay nada que instalar en los servidores remotos. No hay daemons corriendo. No hay puertos adicionales que abrir. Solo SSH y Python (que ya viene instalado en prácticamente cualquier distribución Linux moderna).

Esto tiene implicaciones enormes:
- Puedes empezar a usar Ansible en tu infraestructura existente sin modificar nada en los servidores
- Hay menos superficie de ataque desde el punto de vista de seguridad
- Si Ansible falla o lo desinstalan, los servidores siguen funcionando exactamente igual

## Los 4 conceptos clave de Ansible

Antes de escribir tu primer Playbook, necesitas entender cuatro términos. Solo cuatro. Prométeme que los lees y después todo tendrá sentido.

### 1. Inventory (Inventario)

El Inventario es simplemente una lista de los servidores que Ansible debe gestionar.

Es básicamente un archivo de texto donde le dices a Ansible: "estos son los servidores que existen y así es como te conectas a ellos". Pueden ser IPs, hostnames, o incluso nombres descriptivos que tú le asignes.

```ini
# /etc/ansible/hosts (o un archivo local llamado inventory.ini)

[webservers]
web01 ansible_host=192.168.1.10
web02 ansible_host=192.168.1.11
web03 ansible_host=192.168.1.12

[databases]
db01 ansible_host=192.168.1.20
db02 ansible_host=192.168.1.21

[staging]
staging01 ansible_host=10.0.0.5
```

Los corchetes `[webservers]`, `[databases]` son grupos. Puedes ejecutar Playbooks contra grupos específicos o contra todos los servidores a la vez. ¿Quieres actualizar solo las bases de datos? Le dices a Ansible que use el grupo `databases`. ¿Quieres configurar todos? Usas `all`.

### 2. Playbook

El Playbook es el corazón de Ansible. Es un archivo YAML que describe **qué debe pasar** en tus servidores.

Piensa en él como una receta de cocina muy detallada: primero haz esto, luego esto otro, si pasa X entonces haz Y. La diferencia es que esta receta se ejecuta simultáneamente en todos los servidores de tu inventario.

```yaml
# mi_primer_playbook.yml
---
- name: Configurar servidores web
  hosts: webservers
  become: yes  # equivalente a sudo

  tasks:
    - name: Instalar nginx
      apt:
        name: nginx
        state: present

    - name: Asegurarse de que nginx esté corriendo
      service:
        name: nginx
        state: started
        enabled: yes
```

Este Playbook le dice a Ansible: "en todos los servidores del grupo `webservers`, instala nginx y asegúrate de que esté corriendo y habilitado al inicio del sistema".

### 3. Task (Tarea)

Una Task es una acción individual dentro de un Playbook. En el ejemplo anterior, "Instalar nginx" y "Asegurarse de que nginx esté corriendo" son dos tasks separadas.

Cada task usa un **módulo** de Ansible para hacer su trabajo. En este caso, `apt` es el módulo para gestionar paquetes en Debian/Ubuntu, y `service` es el módulo para gestionar servicios del sistema.

### 4. Module (Módulo)

Los módulos son las "herramientas" que Ansible usa para ejecutar cada tarea. Ansible viene con cientos de módulos integrados para absolutamente todo lo que puedas necesitar:

| Módulo | Para qué sirve |
|--------|---------------|
| `apt` / `dnf` / `yum` | Instalar/remover paquetes |
| `copy` | Copiar archivos al servidor |
| `template` | Copiar archivos con variables dinámicas |
| `service` | Iniciar/detener/habilitar servicios |
| `user` | Gestionar usuarios del sistema |
| `file` | Crear/eliminar directorios y archivos |
| `command` / `shell` | Ejecutar comandos arbitrarios |
| `git` | Clonar/actualizar repositorios |
| `docker_container` | Gestionar contenedores Docker |

La lista completa tiene más de 3,000 módulos. Para casi cualquier cosa que necesites hacer, ya existe un módulo.

## Instalación y setup inicial

Suficiente teoría. Vamos a instalar Ansible y hacer que funcione.

Lo importante: **solo necesitas instalar Ansible en tu máquina de control** (la que va a orchestrar todo). En los servidores remotos no instalas nada.

### Instalar Ansible en la máquina de control

```bash
# Debian/Ubuntu
sudo apt update
sudo apt install ansible -y
```

```bash
# RHEL/Fedora/CentOS
sudo dnf install ansible -y
```

```bash
# Verificar la instalación
ansible --version
```

Deberías ver algo así:

```
ansible [core 2.16.x]
  config file = /etc/ansible/ansible.cfg
  python version = 3.11.x
  ...
```

### Configurar las claves SSH

Ansible necesita conectarse a tus servidores via SSH sin pedirte contraseña cada vez. La forma correcta es con claves SSH.

Si no tienes un par de claves, genéralo:

```bash
ssh-keygen -t ed25519 -C "ansible-control"
```

Luego copia tu clave pública a cada servidor que quieras gestionar:

```bash
ssh-copy-id usuario@192.168.1.10
ssh-copy-id usuario@192.168.1.11
# ...y así con cada servidor
```

> **protip >** En entornos empresariales o en la nube (AWS, GCP, Azure), lo normal es que ya tengas configuradas las claves SSH cuando creas las instancias. No necesitas hacer este paso manualmente.

### Crear tu inventario

Crea un archivo llamado `inventory.ini` en tu directorio de trabajo:

```ini
[webservers]
web01 ansible_host=192.168.1.10 ansible_user=fedora
web02 ansible_host=192.168.1.11 ansible_user=fedora

[all:vars]
ansible_python_interpreter=/usr/bin/python3
```

### Probar la conexión con ping

Este es el momento de la verdad. Ejecuta:

```bash
ansible all -i inventory.ini -m ping
```

Si todo está bien configurado, verás:

```
web01 | SUCCESS => {
    "changed": false,
    "ping": "pong"
}
web02 | SUCCESS => {
    "changed": false,
    "ping": "pong"
}
```

`SUCCESS` con un `pong` significa que Ansible puede conectarse a esos servidores vía SSH y que Python está disponible. Estás listo para automatizar.

> **protip >** El módulo `ping` de Ansible no es un ping ICMP de red. Es una verificación completa de que Ansible puede conectarse al servidor, autenticarse, y ejecutar Python. Es mucho más útil que un ping normal.

## Tu primer Playbook real

Vamos a crear algo con sentido práctico: un Playbook que configure un servidor web con nginx, desde cero hasta listo para servir tráfico.

Crea un archivo llamado `setup-webserver.yml`:

```yaml
---
- name: Configurar servidor web con Nginx
  hosts: webservers
  become: yes

  vars:
    nginx_port: 80
    app_name: "mi-app"

  tasks:
    - name: Actualizar caché de paquetes
      dnf:
        update_cache: yes

    - name: Instalar Nginx
      dnf:
        name: nginx
        state: present

    - name: Crear directorio para la aplicación
      file:
        path: "/var/www/{{ app_name }}"
        state: directory
        owner: nginx
        group: nginx
        mode: "0755"

    - name: Copiar página de inicio
      copy:
        content: |
          <!DOCTYPE html>
          <html>
            <body>
              <h1>Servidor configurado con Ansible</h1>
              <p>Host: {{ inventory_hostname }}</p>
            </body>
          </html>
        dest: "/var/www/{{ app_name }}/index.html"
        owner: nginx
        group: nginx

    - name: Asegurar que Nginx esté iniciado y habilitado
      service:
        name: nginx
        state: started
        enabled: yes

    - name: Permitir tráfico HTTP en el firewall
      firewalld:
        port: "{{ nginx_port }}/tcp"
        permanent: yes
        state: enabled
        immediate: yes
```

Ejecuta el Playbook:

```bash
ansible-playbook -i inventory.ini setup-webserver.yml
```

La salida se verá así:

```
PLAY [Configurar servidor web con Nginx] *****

TASK [Gathering Facts] *****
ok: [web01]
ok: [web02]

TASK [Actualizar caché de paquetes] *****
ok: [web01]
ok: [web02]

TASK [Instalar Nginx] *****
changed: [web01]
changed: [web02]

TASK [Crear directorio para la aplicación] *****
changed: [web01]
changed: [web02]

...

PLAY RECAP *****
web01 : ok=7  changed=5  unreachable=0  failed=0
web02 : ok=7  changed=5  unreachable=0  failed=0
```

Presta atención a los colores y estados:
- `ok` (verde): la tarea se verificó y ya estaba como debía. No se hizo nada.
- `changed` (amarillo): Ansible hizo un cambio en el servidor.
- `failed` (rojo): algo salió mal. Te dará detalles de qué.

Ahora ejecuta el mismo Playbook de nuevo, sin cambiar nada:

```bash
ansible-playbook -i inventory.ini setup-webserver.yml
```

Esta vez verás que todo dice `ok` y nada dice `changed`. Eso es la idempotencia en acción: Ansible verificó que todo ya estaba configurado correctamente y no tocó nada.

## Comandos ad-hoc: Ansible sin Playbooks

No siempre necesitas un Playbook. Para tareas rápidas y únicas, puedes usar **comandos ad-hoc** directamente desde la terminal.

```bash
# Ver el espacio en disco de todos los servidores
ansible all -i inventory.ini -m command -a "df -h"

# Reiniciar nginx en todos los webservers
ansible webservers -i inventory.ini -m service -a "name=nginx state=restarted" --become

# Ver la versión del kernel en todos los servidores
ansible all -i inventory.ini -m command -a "uname -r"

# Actualizar todos los paquetes en todos los servidores
ansible all -i inventory.ini -m dnf -a "name=* state=latest" --become

# Crear un usuario en un grupo específico de servidores
ansible databases -i inventory.ini -m user -a "name=dbadmin state=present" --become
```

Los comandos ad-hoc son perfectos cuando necesitas hacer algo urgente en toda tu infraestructura y no quieres escribir un Playbook completo. O cuando estás debuggeando y quieres verificar el estado de algo rápidamente.

## Variables y hechos (facts)

Una de las funcionalidades más poderosas de Ansible es su sistema de variables. Puedes definir variables en el Playbook, en el inventario, en archivos separados, o incluso dejar que Ansible las descubra automáticamente.

### Variables en el Playbook

Ya vimos esto en el ejemplo anterior con `vars`:

```yaml
vars:
  nginx_port: 80
  app_name: "mi-app"
```

Y las usas con la sintaxis `{{ variable }}`:

```yaml
- name: Permitir tráfico en el firewall
  ufw:
    port: "{{ nginx_port }}"
```

### Facts: variables automáticas

Cuando Ansible se conecta a un servidor, automáticamente recolecta información sobre ese servidor: sistema operativo, memoria RAM, IPs, arquitectura del CPU, etc. Todo esto son **facts** (hechos).

Puedes usar estos facts en tus Playbooks:

```yaml
- name: Mostrar información del servidor
  debug:
    msg: |
      Servidor: {{ inventory_hostname }}
      SO: {{ ansible_distribution }} {{ ansible_distribution_version }}
      RAM Total: {{ ansible_memtotal_mb }} MB
      CPU: {{ ansible_processor_vcpus }} vCPUs
      IP principal: {{ ansible_default_ipv4.address }}
```

Para ver todos los facts disponibles de un servidor:

```bash
ansible web01 -i inventory.ini -m setup
```

Prepárate para una avalancha de información. Hay facts para absolutamente todo.

## Casos de uso reales

### Configurar 10 servidores idénticos en 5 minutos

Tienes que agregar 10 servidores nuevos a tu infraestructura y todos necesitan la misma configuración base: usuarios, llaves SSH, paquetes de monitoreo, configuración del firewall, etc.

Con Ansible, creas un Playbook de "baseline" una sola vez, agregas los 10 servidores al inventario, y ejecutas:

```bash
ansible-playbook -i inventory.ini baseline-config.yml
```

10 minutos después (el tiempo real que tarda en ejecutarse), los 10 servidores están idénticos. Sin errores de tipeo. Sin omisiones. Sin servidores que "más o menos" tienen la configuración correcta.

### Actualización de seguridad de emergencia

Acaba de salir un CVE crítico. Necesitas parchear todos tus servidores de producción hoy. En este momento.

```bash
# Actualizar solo el paquete afectado en todos los servidores
ansible all -i inventory.ini -m dnf \
  -a "name=openssl state=latest" \
  --become

# Verificar la versión instalada en todos
ansible all -i inventory.ini -m command \
  -a "openssl version"
```

En 2 minutos tienes todos los servidores parcheados y verificados. Sin abrir 50 terminales.

### Desplegar una aplicación en staging y producción

```yaml
# deploy.yml
---
- name: Desplegar aplicación
  hosts: "{{ target_env }}"  # Variable que pasas al ejecutar
  become: yes

  tasks:
    - name: Clonar repositorio
      git:
        repo: "https://github.com/mi-org/mi-app.git"
        dest: /var/www/mi-app
        version: "{{ app_version }}"

    - name: Instalar dependencias
      command: pip install -r /var/www/mi-app/requirements.txt
      args:
        chdir: /var/www/mi-app

    - name: Reiniciar la aplicación
      service:
        name: mi-app
        state: restarted
```

Despliegue a staging:
```bash
ansible-playbook -i inventory.ini deploy.yml \
  -e "target_env=staging app_version=v1.2.3"
```

Despliegue a producción (mismo Playbook, diferentes variables):
```bash
ansible-playbook -i inventory.ini deploy.yml \
  -e "target_env=production app_version=v1.2.3"
```

## Ventajas reales sobre hacerlo manualmente

Después de todo lo que vimos, vale la pena hacer el resumen:

- ✅ **Velocidad**: Lo que tardas en hacer en un servidor, Ansible lo hace en 50 al mismo tiempo.
- ✅ **Consistencia**: Todos los servidores quedan exactamente igual. Sin variaciones accidentales.
- ✅ **Documentación viva**: Tus Playbooks son documentación ejecutable. El YAML describe exactamente cómo está configurada tu infraestructura.
- ✅ **Sin agentes**: Solo necesitas SSH. No hay nada que mantener en los servidores remotos.
- ✅ **Control de versiones**: Los Playbooks son archivos de texto. Los puedes versionar con Git, revisar con pull requests, rollback si algo sale mal.
- ✅ **Auditabilidad**: Siempre puedes saber exactamente qué cambios hizo Ansible, cuándo, y en qué servidores.

## ¿Y qué sigue?

Lo que viste hoy es la base de Ansible. Con esto ya puedes automatizar el 80% de las tareas comunes de administración de sistemas. Pero hay más:

- **Roles**: La forma de organizar y reutilizar Playbooks cuando tu infraestructura crece. Un rol de "nginx" que cualquier proyecto puede importar y usar.
- **Ansible Galaxy**: El repositorio de roles de la comunidad. Más de 20,000 roles listos para usar. Imagina `npm` pero para configuraciones de infraestructura.
- **Ansible Vault**: Manejo seguro de secretos (contraseñas, API keys, certificados) dentro de tus Playbooks. Porque hardcodear secretos en YAML no está bien.
- **AWX / Ansible Tower**: La interfaz web para Ansible. Scheduling, permisos, reportes, y más. Para equipos donde no todos deben tener acceso a la terminal.

Cada uno de esos temas da para un post completo, así que los iremos viendo por separado.

## Ctrl + D

Si llegaste hasta aquí, ya entiendes el cambio de mentalidad que representa Ansible: pasar de "voy a configurar este servidor" a "voy a definir cómo deben estar todos mis servidores, y Ansible se encarga de hacerlo realidad".

La curva de aprendizaje inicial es mínima. YAML es legible incluso si nunca lo has visto. Los módulos están muy bien documentados en [docs.ansible.com](https://docs.ansible.com). Y los errores son descriptivos y fáciles de debuggear.

Mi recomendación: levanta dos o tres máquinas virtuales con VirtualBox o con `vagrant`, créate un inventario con ellas, y empieza a escribir Playbooks. Rompe cosas. Corrige. Itera. En un fin de semana puedes tener un nivel de comodidad con Ansible que te va a ahorrar horas cada semana de aquí en adelante.

Y recuerda, **lo más importante es nunca dejar de preguntar**.
