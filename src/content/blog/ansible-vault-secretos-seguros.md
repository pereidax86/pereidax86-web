---
title: "Ansible Vault: Deja de poner contraseñas en texto plano como si nadie fuera a ver tu repo"
description: "Aprende a usar Ansible Vault para cifrar secretos, contraseñas y API keys directamente en tus archivos YAML. Porque commitear credenciales en Git es una forma muy eficiente de arruinar un lunes."
pubDate: 2026-05-04
author: "Luis Pereida"
tags: ["Ansible", "Automatización", "DevOps", "Linux", "Seguridad"]
image: "/images/blog/ansible-vault.webp"
---

Esto pasa más seguido de lo que deberías sentirte cómodo admitiendo: alguien crea un Playbook de Ansible, necesita poner la contraseña de la base de datos en algún lado, y la pone directo en el YAML. Funciona. Lo commitea. Lo sube a GitHub.

... Y el repositorio es público...

No tienes que haber vivido esa situación para imaginar cómo termina. Pero si la viviste, sabes exactamente por qué estás leyendo esto.

Bienvenido a **Ansible Vault**.

## El problema real: secretos en texto plano no escalan

Cuando empiezas con Ansible, tus Playbooks manejan cosas relativamente inocentes: instalar paquetes, configurar servicios, crear directorios. Pero tarde o temprano, los Playbooks empiezan a necesitar información que no debe andar suelta por ahí.

La contraseña de PostgreSQL. El token de la API de AWS. La clave privada para firmar JWTs. El webhook de Slack donde van las alertas críticas.

Y aquí es donde la gente improvisa soluciones cuestionables:

- La contraseña va hardcodeada en el YAML. "Es un repo privado, nadie más va a entrar." *(Hasta que sí.)*
- Se crea un archivo `.env` y se agrega al `.gitignore`. Funciona en local, pero en el servidor de CI nadie sabe dónde está ese archivo y el pipeline se rompe.
- Se pasan como variables de entorno en el comando. El historial de la terminal te traiciona silenciosamente.
- Se dejan en `group_vars/all.yml` con un comentario que dice `# TODO: mover esto a algo más seguro`. El TODO cumple su primer aniversario sin que nadie lo toque.

Ansible Vault resuelve esto de forma elegante: **cifra los secretos directamente dentro de tus archivos YAML**, con AES-256, usando una contraseña que solo tú (o tu pipeline de CI) conoce. El archivo cifrado se puede versionar en Git sin problema. Sin el secreto de cifrado, es inútil.

## ¿Qué es Ansible Vault?

**Ansible Vault** es la herramienta integrada de Ansible para cifrar datos sensibles. No es un servicio externo, no necesitas instalar nada extra, viene incluida en Ansible desde hace años.

Lo que hace es sencillo: toma un valor o un archivo YAML completo y lo cifra con AES-256-CBC usando una contraseña que tú defines. El resultado es texto cifrado que puedes poner en tu repositorio de forma segura. Cuando Ansible necesita usar ese valor, lo descifra en memoria, lo usa, y listo. Tus servidores reciben el secreto. Tu repositorio no guarda el secreto en claro.

La diferencia con guardar secretos fuera de Ansible (en variables de entorno, en archivos separados, en un gestor de secretos externo) es que Vault mantiene los secretos **al lado del código que los usa**, dentro del mismo repositorio, sin sacrificar seguridad. La infraestructura como código funciona mejor cuando todo el estado está en el mismo lugar.

## Los dos sabores de Vault

Antes de ver comandos, entiende que Vault funciona de dos maneras:

### 1. Archivos cifrados completos

Puedes cifrar un archivo YAML entero. Normalmente se usa para `group_vars/` o `host_vars/` que contienen únicamente secretos.

```yaml
# group_vars/all/vault.yml (antes de cifrarlo)
---
vault_db_password: "s3cr3t0_muy_seguro"
vault_api_key: "sk-live-abc123xyz789"
vault_jwt_secret: "un-secreto-muy-largo-para-firmar-tokens"
```

Después de cifrarlo, ese archivo se ve así (y así es como vive en tu repo):

```
$ANSIBLE_VAULT;1.1;AES256
66386439653762663966663530383238666637653764653636646331623937376634356439313138
3430623865306635363938353232373539333335303934370a303238333632623965323035383362
...
```

### 2. Variables cifradas inline

También puedes cifrar solo el **valor** de una variable, dejando el nombre de la variable visible. Esto es más flexible y más legible:

```yaml
# group_vars/all/vars.yml
---
db_host: "postgres.internal"
db_port: 5432
db_name: "produccion"
db_password: !vault |
  $ANSIBLE_VAULT;1.1;AES256
  66386439653762663966663530383238666637653764653636646331623937376634356439313138
  3430623865306635363938353232373539333335303934370a303238333632623965323035383362
  ...
```

Ves qué base de datos es (`produccion`) en qué host está (`postgres.internal`), pero la contraseña está cifrada. El contexto es visible, el secreto no.

> **protip >** La convención que funciona mejor en la práctica es tener dos archivos en cada `group_vars/`: uno llamado `vars.yml` con variables normales que referencian a variables de vault, y otro llamado `vault.yml` con las variables cifradas. Así mantienes separados los valores públicos de los secretos.

## Setup: los comandos que vas a usar

Ansible Vault viene integrado. El único prerequisito es tener Ansible instalado (que ya vimos cómo hacer en el [primer post](/blog/ansible-introduccion-principiantes)).

### Crear un archivo vault nuevo

```bash
# Crea un archivo cifrado desde cero
ansible-vault create group_vars/all/vault.yml
```

Esto abre tu editor de texto predeterminado. Escribes el YAML con tus secretos, guardas, cierras, y Vault lo cifra automáticamente. Te pedirá una contraseña dos veces para confirmarla.

### Cifrar un archivo existente

```bash
# Cifra un archivo YAML que ya existe
ansible-vault encrypt group_vars/all/vault.yml
```

### Ver el contenido cifrado

```bash
# Muestra el contenido descifrado en la terminal
ansible-vault view group_vars/all/vault.yml
```

### Editar un archivo cifrado

```bash
# Abre el archivo descifrado en tu editor, lo vuelve a cifrar al guardar
ansible-vault edit group_vars/all/vault.yml
```

### Descifrar un archivo (cuidado con esto)

```bash
# Descifra el archivo permanentemente (el resultado es texto plano en disco)
ansible-vault decrypt group_vars/all/vault.yml
```

Úsalo solo cuando realmente necesitas el archivo en claro. Nunca en producción. Nunca con prisa.

### Cifrar solo un valor (inline)

```bash
# Genera el texto cifrado de un valor específico
ansible-vault encrypt_string 's3cr3t0_muy_seguro' --name 'db_password'
```

La salida es el bloque `!vault |` que puedes pegar directamente en cualquier archivo YAML.

## Un proyecto real: estructura con Vault

Vamos a construir algo concreto. Un proyecto de Ansible que despliega una aplicación web con base de datos, con los secretos manejados correctamente.

### Estructura del proyecto

```
mi-proyecto/
├── inventory.ini
├── site.yml
├── group_vars/
│   └── all/
│       ├── vars.yml       ← Variables normales (van al repo sin problema)
│       └── vault.yml      ← Secretos cifrados (también van al repo)
└── roles/
    ├── postgresql/
    └── webapp/
```

### `group_vars/all/vars.yml`

```yaml
# Variables normales — sin secretos aquí
---
db_host: "localhost"
db_port: 5432
db_name: "mi_aplicacion"
db_user: "app_user"

# Referencias a las variables de vault
db_password: "{{ vault_db_password }}"
app_secret_key: "{{ vault_app_secret_key }}"
aws_access_key: "{{ vault_aws_access_key }}"
aws_secret_key: "{{ vault_aws_secret_key }}"
```

### `group_vars/all/vault.yml` (antes de cifrarlo)

```yaml
---
vault_db_password: "unaContraseñaMuySegura2024!"
vault_app_secret_key: "django-secret-key-muy-larga-y-random-aqui"
vault_aws_access_key: "AKIAIOSFODNN7EXAMPLE"
vault_aws_secret_key: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
```

Después de cifrarlo con `ansible-vault encrypt group_vars/all/vault.yml`, ese archivo está listo para ir al repo.

### El Playbook que los usa

```yaml
# site.yml
---
- name: Desplegar aplicación web
  hosts: webservers
  become: yes

  roles:
    - postgresql
    - webapp
```

```yaml
# roles/postgresql/tasks/main.yml
---
- name: Instalar PostgreSQL
  dnf:
    name: postgresql-server
    state: present

- name: Crear usuario de base de datos
  postgresql_user:
    name: "{{ db_user }}"
    password: "{{ db_password }}"   # ← viene de vault, descifrado en memoria
    state: present
  become_user: postgres

- name: Crear base de datos
  postgresql_db:
    name: "{{ db_name }}"
    owner: "{{ db_user }}"
    state: present
  become_user: postgres
```

El Playbook no sabe que el valor viene de Vault. Lo usa igual que cualquier otra variable. Ansible descifra en memoria, entrega el valor, sigue adelante.

## Ejecutar Playbooks con Vault

Si un Playbook usa variables cifradas con Vault, Ansible necesita la contraseña para descifrar. Tienes varias opciones:

### Opción 1: Te la pide interactivamente

```bash
ansible-playbook -i inventory.ini site.yml --ask-vault-pass
```

Ansible te pedirá la contraseña al inicio. Bien para desarrollo y pruebas.

### Opción 2: Archivo con la contraseña

```bash
# Crea un archivo con solo la contraseña (sin salto de línea al final)
echo -n "mi-contraseña-de-vault" > ~/.vault_pass

# Asegúrate de que solo tú puedas leerlo
chmod 600 ~/.vault_pass

# Úsalo en el comando
ansible-playbook -i inventory.ini site.yml --vault-password-file ~/.vault_pass
```

> **protip >** Agrega el archivo de contraseña al `.gitignore` global de tu usuario (`~/.gitignore_global`), no solo al `.gitignore` del proyecto. Así nunca lo commiteas accidentalmente, sin importar desde qué directorio trabajes.

### Opción 3: Variable de entorno (para CI/CD)

```bash
# En tu pipeline de GitLab CI, GitHub Actions, Jenkins, etc.
export ANSIBLE_VAULT_PASSWORD_FILE=/ruta/al/archivo/con/la/clave

ansible-playbook -i inventory.ini site.yml
```

En los pipelines modernos, el secreto de Vault se guarda en las variables protegidas del CI (GitLab CI Secrets, GitHub Secrets, etc.), se escribe a un archivo temporal al inicio del job, y se borra al final. Ansible nunca ve la contraseña como argumento en la línea de comandos.

### Opción 4: Configurarlo en `ansible.cfg`

```ini
# ansible.cfg
[defaults]
vault_password_file = ~/.vault_pass
```

Con esto, Ansible siempre busca la contraseña en ese archivo. No tienes que especificarlo en cada comando. Cómodo para desarrollo local.

## Múltiples Vault IDs: cuando un solo secreto no alcanza

Conforme crece tu infraestructura, probablemente quieras tener contraseñas de Vault separadas para diferentes entornos o equipos. Staging no debería poder descifrar los secretos de producción. El equipo de frontend no debería tener acceso a las credenciales de base de datos.

Los **Vault IDs** son la solución. La idea es simple: cada grupo de secretos tiene su propia contraseña de cifrado, identificada por un nombre. Producción tiene la suya. Staging tiene la suya. Pueden vivir en el mismo repo, y cada equipo solo conoce la que le corresponde.

El formato es `nombre@archivo_con_la_clave`. Así cifras cada secreto asignándole un ID:

```bash
# Cifrar la contraseña de producción con la clave de producción
ansible-vault encrypt_string 'prod_password' --name 'db_password' \
  --vault-id production@~/.vault_pass_prod

# Cifrar la contraseña de staging con la clave de staging
ansible-vault encrypt_string 'staging_password' --name 'db_password' \
  --vault-id staging@~/.vault_pass_staging
```

El texto cifrado resultante lleva el ID integrado en el encabezado, así Ansible sabe qué clave usar para descifrar cada valor:

```yaml
# Cifrado con la clave de producción
db_password: !vault |
  $ANSIBLE_VAULT;1.2;AES256;production
  66386439653762663966663530...

# Cifrado con la clave de staging
db_password: !vault |
  $ANSIBLE_VAULT;1.2;AES256;staging
  34393835373764633066346665...
```

Al ejecutar el Playbook, le pasas todas las claves que necesite. Ansible las mapea automáticamente:

```bash
ansible-playbook -i inventory.ini site.yml \
  --vault-id production@~/.vault_pass_prod \
  --vault-id staging@~/.vault_pass_staging
```

Si un valor fue cifrado con `production` pero solo tienes la clave de `staging`, Ansible no puede descifrarlo y falla. Eso es exactamente lo que quieres: acceso explícito y controlado.

No necesitas Vault IDs desde el día uno. La mayoría de proyectos empiezan con una sola contraseña y la agregan cuando el equipo crece o cuando un auditor te pregunta cómo tienes segregado el acceso a los secretos por ambiente.

## Rotar secretos: la parte que nadie quiere hacer pero todos necesitan

Una contraseña comprometida que nunca se rota es solo una cuestión de tiempo. Con Vault, el proceso de rotación es limpio:

```bash
# Editar el archivo cifrado con los nuevos secretos
ansible-vault edit group_vars/all/vault.yml

# Cambiar la contraseña de Vault (rekey)
ansible-vault rekey group_vars/all/vault.yml
```

`rekey` descifra con la contraseña actual y vuelve a cifrar con una nueva. El contenido no cambia, solo la clave que lo protege.

> **protip >** Cambia la contraseña de Vault regularmente, y especialmente cuando alguien que tenía acceso sale del equipo. El comando `ansible-vault rekey` hace exactamente eso en segundos. No hay excusa para no hacerlo.

## Lo que Vault no es: sus límites reales

Vault es excelente para lo que hace, pero tiene límites que debes conocer:

**Vault no es un gestor de secretos dinámico.** No genera contraseñas temporales, no rota automáticamente, no tiene políticas de acceso granulares por usuario. Para eso existen soluciones como HashiCorp Vault (sí, mismo nombre, diferente herramienta), AWS Secrets Manager, o Azure Key Vault. Ansible Vault y estas soluciones no se excluyen mutuamente: puedes usar Ansible Vault para la contraseña que abre el gestor de secretos externo.

**La seguridad depende completamente de la contraseña de Vault.** Si esa contraseña se compromete, todos los secretos cifrados con ella se comprometen. Trata la contraseña de Vault con el mismo cuidado que tratas cualquier otro secreto crítico.

**No es un reemplazo para permisos de acceso al repositorio.** Si tu repo es público y commiteas un archivo cifrado con Vault, la gente puede intentar fuerza bruta sobre él. Vault con una contraseña débil es peor falsa seguridad. Usa contraseñas largas y random, generadas con algo como `openssl rand -base64 32`.

## El flujo completo: de cero a secretos seguros

Aquí está el workflow completo que deberías adoptar en cualquier proyecto nuevo:

```bash
# 1. Crear el archivo de contraseña de Vault (fuera del repo)
openssl rand -base64 32 > ~/.vault_pass_mi_proyecto
chmod 600 ~/.vault_pass_mi_proyecto

# 2. Configurar ansible.cfg para usarlo automáticamente
cat >> ansible.cfg << 'EOF'
[defaults]
vault_password_file = ~/.vault_pass_mi_proyecto
EOF

# 3. Agregar el archivo de contraseña al gitignore global
echo "~/.vault_pass*" >> ~/.gitignore_global

# 4. Crear los archivos de variables
mkdir -p group_vars/all
touch group_vars/all/vars.yml

# 5. Crear y cifrar el archivo de vault
ansible-vault create group_vars/all/vault.yml
# (escribe tus secretos, guarda, cierra)

# 6. Verificar que el archivo quedó cifrado
cat group_vars/all/vault.yml
# Debería mostrar solo $ANSIBLE_VAULT;1.1;AES256...

# 7. Confirmar que Ansible puede descifrar y usarlo
ansible -i inventory.ini all -m debug -a "var=db_password"
```

Si el paso 7 muestra el valor de la variable (no el texto cifrado), todo está funcionando correctamente.

## ¿Y qué sigue?

Con Vault integrado en tu flujo de trabajo, ya tienes una automatización que no solo funciona, sino que lo hace de forma segura y versionable. Pero como siempre, hay más cosas por explorar:

- **Testing de roles con Molecule**: Puedes escribir tests para tus roles de Ansible que corren en contenedores o VMs temporales. Si cambias algo y rompes el rol de PostgreSQL, los tests te lo dicen antes de que lo despliegues a producción.
- **AWX / Ansible Tower**: La interfaz web para Ansible. Tiene integración con gestores de credenciales externos, scheduling de Playbooks, y control de permisos por equipo. Para operaciones donde no todos deben tener acceso a la terminal de ejecución.

Ambos dan para un post completo. Los iremos viendo.

## Ctrl + D

Subir contraseñas en texto plano a un repositorio es el tipo de error que parece imposible hasta que le pasa a alguien que conoces. Y con Vault, no hay razón para correr ese riesgo: la herramienta está ahí, integrada, sin dependencias externas, y el workflow de adoptarla es cuestión de minutos.

La regla es simple: si un valor es secreto, va a Vault. Sin excepciones, sin "es un repo privado", sin TODOs pendientes.

Tu yo del futuro, que no tiene que rotar 47 credenciales comprometidas un domingo, te lo va a agradecer.

Y recuerda, **lo más importante es nunca dejar de preguntar**.
