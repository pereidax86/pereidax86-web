---
title: "Ansible Roles: Deja de copiar y pegar Playbooks como si no hubiera mañana"
description: "Aprende a organizar tu automatización con Ansible Roles. Crea roles reutilizables, entiende su estructura, y gestiona dependencias entre roles. Guía práctica para SysAdmins."
pubDate: 2026-04-07
author: "Luis Pereida"
tags: ["Ansible", "Automatización", "DevOps", "Linux", "SysAdmin"]
image: "/images/blog/ansible-roles.png"
---

Bien. Ya tienes Ansible funcionando. Ya corres Playbooks. Ya sabes lo que es un inventario y un módulo. Your servers fear you.

Pero entonces pasa esto: llevas tres meses automatizando cosas y de repente tienes ocho Playbooks diferentes. El de nginx, el de PostgreSQL, el del hardening básico, el de usuarios, el de monitoreo... Y resulta que el bloque de "instalar y configurar nginx" aparece en cuatro de ellos, copiado y pegado con variaciones sutiles que nadie recuerda por qué existen.

Y entonces alguien te dice "oye, actualiza la versión de nginx en todos los Playbooks". Y tú recuerdas los ocho Playbooks. Y los cuatro bloques duplicados. Y piensas en cosas peores que podrías estar haciendo en ese momento.

Eso es exactamente el problema que resuelven los **Roles de Ansible**.

## ¿Qué es un Role y por qué existe?

Un Role (rol) es la forma en que Ansible te permite **empaquetar y reutilizar** tu automatización.

Piénsalo así: hasta ahora has estado escribiendo recetas sueltas. El Rol es como agarrar todas las instrucciones relacionadas con nginx —instalar, configurar, gestionar el servicio, abrir el firewall, manejar certificados— y meterlas en una caja claramente etiquetada que dice **"nginx"**. Cada vez que necesites nginx en cualquier proyecto, simplemente abres esa caja. No copias. No pegas. La caja ya existe.

La ventaja práctica es enorme:
- **Reutilización real**: escribes la lógica una vez, la usas en mil proyectos.
- **Separación de responsabilidades**: el rol de nginx no sabe nada de PostgreSQL. Cada quien hace su trabajo.
- **Colaboración más fácil**: alguien más puede mantener el rol de monitoreo sin tocar el de los usuarios.
- **Testing aislado**: puedes probar el rol de nginx por sí solo, sin ejecutar un Playbook completo.

## La estructura de un Role

Esta es la parte que asusta a la gente a primera vista. No debería. Es mucho más simple de lo que parece.

Cuando creas un rol, obtienes una estructura de directorios estándar:

```
roles/
└── nginx/
    ├── tasks/
    │   └── main.yml        # Las tareas principales del rol
    ├── handlers/
    │   └── main.yml        # Handlers (acciones al notificar cambios)
    ├── templates/
    │   └── nginx.conf.j2   # Plantillas Jinja2 con variables dinámicas
    ├── files/
    │   └── index.html      # Archivos estáticos para copiar
    ├── vars/
    │   └── main.yml        # Variables del rol (alta prioridad)
    ├── defaults/
    │   └── main.yml        # Variables con valores por defecto (baja prioridad)
    ├── meta/
    │   └── main.yml        # Dependencias y metadatos del rol
    └── README.md           # Documentación del rol
```

Lo crucial: **no necesitas crear todos esos directorios**. Ansible solo usa los que existen. Si tu rol no tiene handlers, no creas el directorio `handlers/`. Si no usa templates, no creas `templates/`. La estructura mínima viable es solo `tasks/main.yml`.

Veamos para qué sirve cada uno.

### `tasks/` — El corazón del rol

Es donde viven las tareas que el rol ejecuta. Ansible automáticamente carga `tasks/main.yml` cuando usas el rol.

```yaml
# roles/nginx/tasks/main.yml
---
- name: Instalar Nginx
  dnf:
    name: nginx
    state: present

- name: Crear directorio de configuración
  file:
    path: /etc/nginx/conf.d
    state: directory
    mode: "0755"

- name: Desplegar configuración de nginx
  template:
    src: nginx.conf.j2
    dest: /etc/nginx/nginx.conf
    owner: root
    group: root
    mode: "0644"
  notify: Reiniciar nginx

- name: Asegurar que nginx esté activo y habilitado
  service:
    name: nginx
    state: started
    enabled: yes
```

Nota el `notify: Reiniciar nginx`. Eso es un handler.

### `handlers/` — Acciones que ocurren cuando cambia algo

Los handlers son tareas especiales que **solo se ejecutan si fueron notificadas** por otra tarea. Son perfectos para reinicios de servicios: no quieres reiniciar nginx si la configuración no cambió, ¿verdad?

```yaml
# roles/nginx/handlers/main.yml
---
- name: Reiniciar nginx
  service:
    name: nginx
    state: restarted

- name: Recargar nginx
  service:
    name: nginx
    state: reloaded
```

Otro detalle importante: aunque 10 tareas distintas hagan `notify: Reiniciar nginx`, el handler solo se ejecuta **una vez**, al final del play. Ansible lo deduplica automáticamente. Muy inteligente.

### `defaults/` y `vars/` — Variables del rol

Aquí está la diferencia clave entre los dos:

- **`defaults/main.yml`**: Variables con valores por defecto. Son las de **menor prioridad**. El usuario del rol puede sobreescribirlas fácilmente desde fuera.
- **`vars/main.yml`**: Variables con valores fijos. Son de **mayor prioridad**. Más difíciles de sobreescribir desde fuera.

La regla práctica: si quieres que la gente pueda personalizar el comportamiento de tu rol, ponlo en `defaults`. Si es un valor interno que no debería cambiarse, ponlo en `vars`.

```yaml
# roles/nginx/defaults/main.yml
---
nginx_worker_processes: auto
nginx_worker_connections: 1024
nginx_keepalive_timeout: 65
nginx_listen_port: 80
nginx_server_name: "_"
nginx_root: /var/www/html
```

```yaml
# roles/nginx/vars/main.yml
---
nginx_config_path: /etc/nginx/nginx.conf
nginx_conf_d_path: /etc/nginx/conf.d
nginx_pid_file: /run/nginx.pid
```

### `templates/` — Archivos con variables dinámicas

Las templates son archivos de texto con **sintaxis Jinja2** que Ansible procesa antes de copiarlos. Piensa en ellas como archivos de configuración con huecos que Ansible rellena automáticamente con tus variables.

```jinja2
{# roles/nginx/templates/nginx.conf.j2 #}
worker_processes  {{ nginx_worker_processes }};
pid               {{ nginx_pid_file }};

events {
    worker_connections  {{ nginx_worker_connections }};
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    keepalive_timeout  {{ nginx_keepalive_timeout }};

    server {
        listen       {{ nginx_listen_port }};
        server_name  {{ nginx_server_name }};
        root         {{ nginx_root }};

        location / {
            index  index.html index.htm;
        }
    }
}
```

La extensión `.j2` es convención para indicar que es una template Jinja2. Cuando Ansible ejecuta el módulo `template`, sustituye `{{ nginx_listen_port }}` con el valor real de esa variable y copia el archivo resultante al servidor.

### `files/` — Archivos estáticos

A diferencia de `templates/`, los archivos en `files/` se copian tal cual, sin procesamiento. Úsalos para binarios, scripts, o archivos de configuración que no necesitan variables.

```bash
# Estructura de ejemplo
roles/nginx/files/
├── error-pages/
│   ├── 404.html
│   └── 50x.html
└── ssl/
    └── dhparam.pem
```

Y en la tarea los referencias directamente por nombre (sin especificar la ruta completa, Ansible sabe buscar en `files/`):

```yaml
- name: Copiar páginas de error personalizadas
  copy:
    src: error-pages/404.html
    dest: /usr/share/nginx/html/404.html
```

### `meta/` — Dependencias entre roles

El archivo `meta/main.yml` sirve para declarar dependencias. Si tu rol de aplicación web necesita que nginx ya esté instalado, lo declaras aquí y Ansible ejecuta el rol de nginx automáticamente antes.

```yaml
# roles/webapp/meta/main.yml
---
galaxy_info:
  author: "Luis Pereida"
  description: "Rol para configurar una aplicación web Python"
  license: "MIT"
  min_ansible_version: "2.12"

dependencies:
  - role: nginx
  - role: postgresql
    vars:
      postgresql_version: "15"
```

Esto es poderoso: estás documentando explícitamente qué necesita tu rol para funcionar, y Ansible lo gestiona automáticamente.

## Crear tu primer Role: de cero

Puedes crear la estructura del rol a mano, o usar el comando oficial que lo hace por ti:

```bash
# Crear la estructura completa del rol
ansible-galaxy role init roles/nginx
```

Esto genera todos los directorios y archivos main.yml vacíos automáticamente. Luego los eliminas o llenas según necesites.

### El proyecto completo

Así es como se ve un proyecto bien organizado con roles:

```
mi-proyecto-ansible/
├── inventory.ini
├── site.yml                    # Playbook principal
├── webservers.yml              # Playbook específico para webservers
├── group_vars/
│   ├── all.yml                 # Variables para todos los hosts
│   └── webservers.yml          # Variables para el grupo webservers
├── host_vars/
│   └── web01.yml               # Variables específicas de un host
└── roles/
    ├── common/                  # Configuración base de todos los servidores
    │   └── tasks/
    │       └── main.yml
    ├── nginx/                   # Rol de nginx (el que construimos arriba)
    │   ├── tasks/
    │   ├── handlers/
    │   ├── templates/
    │   ├── defaults/
    │   └── vars/
    └── postgresql/              # Rol de base de datos
        ├── tasks/
        ├── handlers/
        ├── templates/
        └── defaults/
```

El `site.yml` es el Playbook que los orquesta todos:

```yaml
# site.yml
---
- name: Configuración base de todos los servidores
  hosts: all
  become: yes
  roles:
    - common

- name: Configurar servidores web
  hosts: webservers
  become: yes
  roles:
    - nginx

- name: Configurar servidores de base de datos
  hosts: databases
  become: yes
  roles:
    - postgresql
```

¿Notas lo limpio que queda? El Playbook ya no tiene listas interminables de tareas. Solo dice qué roles aplica a qué grupos. Las tareas viven en los roles. Cada cosa en su lugar.

## Usar roles en un Playbook

Hay tres formas de llamar a un rol desde un Playbook.

### La forma clásica: `roles:`

```yaml
---
- name: Configurar servidor web
  hosts: webservers
  become: yes
  roles:
    - nginx
    - certbot
```

Los roles se ejecutan en el orden en que los listas, antes que cualquier tarea definida en el Playbook mismo.

### Con variables personalizadas

```yaml
---
- name: Configurar servidor web con puerto personalizado
  hosts: webservers
  become: yes
  roles:
    - role: nginx
      vars:
        nginx_listen_port: 8080
        nginx_server_name: "mi-app.ejemplo.com"
        nginx_root: /var/www/mi-app
```

Aquí es donde entra la magia de `defaults/main.yml`: definiste valores por defecto en el rol, pero los sobreescribes aquí para este Playbook específico. El mismo rol. Diferente comportamiento.

### En medio de las tareas: `include_role` e `import_role`

A veces necesitas mezclar la ejecución de un rol con otras tareas:

```yaml
---
- name: Despliegue complejo
  hosts: webservers
  become: yes

  pre_tasks:
    - name: Verificar prerequisitos
      command: "df -h"

  tasks:
    - name: Configurar nginx
      import_role:
        name: nginx

    - name: Desplegar el código de la aplicación
      git:
        repo: "https://github.com/mi-org/mi-app.git"
        dest: /var/www/mi-app
        version: main

    - name: Configurar SSL
      import_role:
        name: certbot

  post_tasks:
    - name: Verificar que nginx responde
      uri:
        url: "http://localhost"
        status_code: 200
```

> **protip >** La diferencia entre `import_role` e `include_role`: `import_role` es estático (se procesa al parsear el Playbook, siempre se ejecuta), mientras que `include_role` es dinámico (se procesa en tiempo de ejecución, puede usarse con condicionales). Para la mayoría de los casos, `import_role` es la opción correcta y más predecible.

## Un ejemplo real y completo: el rol `common`

El rol `common` (configuración base) es algo que casi todos los proyectos tienen. Aplica a todos los servidores y garantiza un baseline consistente. Así se vería uno funcional:

```yaml
# roles/common/tasks/main.yml
---
- name: Actualizar caché de paquetes
  dnf:
    update_cache: yes
  changed_when: false

- name: Instalar paquetes esenciales
  dnf:
    name: "{{ common_packages }}"
    state: present

- name: Configurar zona horaria
  timezone:
    name: "{{ common_timezone }}"

- name: Crear usuario de administración
  user:
    name: "{{ common_admin_user }}"
    groups: wheel
    shell: /bin/bash
    create_home: yes
    state: present

- name: Configurar clave SSH para usuario admin
  authorized_key:
    user: "{{ common_admin_user }}"
    key: "{{ common_admin_ssh_key }}"
    state: present

- name: Deshabilitar login de root por SSH
  lineinfile:
    path: /etc/ssh/sshd_config
    regexp: "^PermitRootLogin"
    line: "PermitRootLogin no"
    backup: yes
  notify: Reiniciar sshd

- name: Configurar límites de intentos de sudo
  lineinfile:
    path: /etc/sudoers
    line: "Defaults    timestamp_timeout=5"
    validate: "visudo -cf %s"
```

```yaml
# roles/common/defaults/main.yml
---
common_packages:
  - vim
  - curl
  - wget
  - htop
  - tmux
  - git
  - rsync
  - net-tools

common_timezone: "America/Mexico_City"
common_admin_user: "sysadmin"
common_admin_ssh_key: ""  # Debe sobreescribirse en group_vars o host_vars
```

```yaml
# roles/common/handlers/main.yml
---
- name: Reiniciar sshd
  service:
    name: sshd
    state: restarted
```

Con este rol, todos tus servidores nuevos tienen automáticamente: los paquetes que siempre instalas, la zona horaria correcta, un usuario admin, hardening básico de SSH. Sin copiar ni pegar nada.

## Ansible Galaxy: roles que ya existen (y están muy bien hechos)

Antes de escribir tu rol de PostgreSQL desde cero, busca en [Ansible Galaxy](https://galaxy.ansible.com). Es el repositorio de roles de la comunidad. Tiene más de 20,000 roles mantenidos y probados por gente que lleva años using Ansible profesionalmente.

```bash
# Buscar roles de postgresql
ansible-galaxy search postgresql --author geerlingguy

# Instalar un rol (este de geerlingguy es el estándar de facto)
ansible-galaxy install geerlingguy.postgresql

# Ver roles instalados
ansible-galaxy list
```

Los roles de Jeff Geerlingguy en particular son referencia en la comunidad: nginx, postgresql, redis, docker, php, java... todos bien documentados, idempotentes, y actualizados regularmente.

Para instalar dependencias de Galaxy de forma reproducible, usa un archivo `requirements.yml`:

```yaml
# requirements.yml
---
roles:
  - name: geerlingguy.nginx
    version: "3.2.0"
  - name: geerlingguy.postgresql
    version: "3.4.0"
  - name: geerlingguy.certbot
    version: "5.1.0"
```

Y luego instalas todo de golpe:

```bash
ansible-galaxy install -r requirements.yml
```

Esto es el equivalente del `package.json` de npm pero para infraestructura. Cualquier persona que clone tu repositorio puede instalar todas las dependencias con un solo comando. Exactamente lo que necesitas para trabajar en equipo.

> **protip >** Guarda los roles de Galaxy en un directorio `.galaxy_roles/` y agrégalo a `.gitignore`. Así no los versionas dentro de tu repo (igual que `node_modules`), pero los puedes reinstalar en cualquier momento con `requirements.yml`.

## `group_vars` y `host_vars`: variables que viven fuera del rol

Mencioné estos directorios antes pero vale la pena explicarlos bien. Cuando tienes roles reutilizables, necesitas una forma de darles diferentes valores según el entorno o el servidor.

```
group_vars/
├── all.yml             # Aplican a TODOS los hosts
├── webservers.yml      # Aplican al grupo "webservers"
└── databases.yml       # Aplican al grupo "databases"

host_vars/
├── web01.yml           # Aplican solo a web01
└── db01.yml            # Aplican solo a db01
```

```yaml
# group_vars/all.yml
---
common_admin_user: "sysadmin"
common_admin_ssh_key: "ssh-ed25519 AAAA... tu-clave-publica"
common_timezone: "America/Mexico_City"

# group_vars/webservers.yml
---
nginx_listen_port: 80
nginx_server_name: "{{ inventory_hostname }}.mi-dominio.com"
nginx_root: /var/www/html

# host_vars/web01.yml
---
nginx_listen_port: 8080   # Este servidor específico corre en 8080
```

Ansible los carga automáticamente sin que tengas que hacer nada. El orden de prioridad es: `host_vars` gana sobre `group_vars`, que gana sobre `defaults` del rol.

## Verificar sin ejecutar: `--check` y `--diff`

Una de las flags más útiles cuando empiezas a trabajar con roles más complejos:

```bash
# Modo dry-run: Ansible dice qué haría sin hacer nada
ansible-playbook -i inventory.ini site.yml --check

# Muestra el diff exacto de los archivos que cambiarían
ansible-playbook -i inventory.ini site.yml --check --diff
```

Antes de ejecutar un Playbook en producción, corre siempre `--check`. Te muestra exactamente qué va a cambiar. Si ves algo inesperado, detienes antes de hacer daño.

```
TASK [nginx : Desplegar configuración de nginx] ****
--- before: /etc/nginx/nginx.conf
+++ after: /home/user/.ansible/tmp/nginx.conf.j2
@@ -3,7 +3,7 @@
 
 events {
-    worker_connections  512;
+    worker_connections  1024;
 }
```

Eso es un diff real. Ves exactamente qué línea cambia antes de ejecutarlo.

## Un flujo de trabajo completo

Para cerrar, así es como se ve un proyecto de Ansible bien estructurado con roles en la práctica:

```bash
# 1. Crear el proyecto
mkdir mi-infraestructura && cd mi-infraestructura

# 2. Inicializar los roles
ansible-galaxy role init roles/common
ansible-galaxy role init roles/nginx
ansible-galaxy role init roles/postgresql

# 3. Instalar roles de Galaxy
ansible-galaxy install -r requirements.yml

# 4. Probar conexión
ansible all -i inventory.ini -m ping

# 5. Dry-run del Playbook completo
ansible-playbook -i inventory.ini site.yml --check --diff

# 6. Ejecutar
ansible-playbook -i inventory.ini site.yml

# 7. Verificar idempotencia (segunda ejecución = todo ok, nada changed)
ansible-playbook -i inventory.ini site.yml
```

La segunda ejecución en el paso 7 es casi un ritual. Si ves `changed=0` en todos los hosts, tu automatización es correcta.

## ¿Y qué sigue?

Con roles en la mano, ya tienes una automatización seria y mantenible. Pero como siempre, hay más:

- **Ansible Vault**: Los roles inevitablemente manejan secretos (contraseñas de base de datos, API keys, certificados). Vault los cifra directamente en tus archivos YAML para que puedas versionarlos con Git de forma segura.
- **Testing de roles con Molecule**: Una herramienta específica para testear roles de Ansible en contenedores o VMs aisladas. Cambias el rol, ejecutas los tests, y sabes si rompiste algo antes de llegar a producción.
- **AWX / Ansible Tower**: Cuando tu equipo crece y no todos pueden tener acceso a la terminal o necesitas scheduling y reportes visuales, AWX es la interfaz web para todo esto.

Los tres dan para posts completos. Los iremos viendo.

## Ctrl + D

Los roles son el salto de calidad entre "uso Ansible para scripts glorificados" y "tengo una infraestructura como código mantenible y reutilizable".

La diferencia es enorme en el largo plazo. No en la primera semana, cuando todo cabe en un Playbook. Sino en el mes cuatro, cuando alguien te pide agregar un servidor nuevo y tú simplemente agregas una línea al inventario y ejecutas el `site.yml`.

La inversión en estructurar bien tus roles desde el principio siempre se paga. Y siendo honestos, una vez que entiendes la estructura, crearlos es rápido. `ansible-galaxy role init` te da todo en segundos. El resto es llenar los archivos con la lógica que ya tenías en tus Playbooks.

Y recuerda, **lo más importante es nunca dejar de preguntar**.
