---
title: "Gobernanza de Seguridad, Roles y Due Care: Tu Marco Estratégico (Guía CISSP 2024)"
description: "¿Quién va a la cárcel cuando ocurre un desastre de ciberseguridad? Descubre cómo funciona la Gobernanza de Seguridad, la jerarquía de planeación, Due Diligence vs. Due Care y la diferencia clave entre Data Owner y Data Custodian para dominar el examen CISSP."
pubDate: 2026-08-10
author: "Luis Pereida"
tags: ["Ciberseguridad", "CISSP", "CISSP 2024", "Guía CISSP", "Sybex", "Gobernanza", "Security Governance", "Due Care", "Due Diligence", "Data Owner", "Data Custodian", "Estrategia"]
image: "../../assets/images/blog/cissp-2024-gobernanza-seguridad-roles-due-care.png"
series: "cissp-2024"
seriesTitle: "Guía de Estudio CISSP 2024"
seriesOrder: 4
---

¡Bienvenido de vuelta a nuestra guía de estudio para la certificación **CISSP 2024**!

En las entregas anteriores desglosamos [La Tríada CIA (Confidencialidad, Integridad y Disponibilidad)](/blog/cissp-2024-02-triada-cia-ciberseguridad) y los [Mecanismos de Protección y Límites de Seguridad](/blog/cissp-2024-03-mecanismos-proteccion-limites-seguridad), donde aprendimos a balancear las defensas técnicas y a aislar procesos para evitar que un atacante destruya nuestra infraestructura cuando el perímetro caiga.

Pero hoy nos toca dar el salto definitivo hacia la cima de la pirámide corporativa. Si alguna vez has trabajado en TI o ciberseguridad, probablemente hayas presenciado ese viejo cliché de que seguridad es *"el departamento del NO"*: ese lugar donde si alguien pregunta si puede usar su memoria USB personal la respuesta es NO, si piden instalar un software para ir más rápido la respuesta es NO, y si pretenden conectar su laptop a la red corporativa la respuesta sigue siendo un siempre poderosa NO. En serio esto pasa muy seguido.

Me temo que si abordas el examen CISSP con esa mentalidad táctica de policía de TI, vas a reprobar antes de llegar a la mitad de las preguntas. En el mundo corporativo real (y de acuerdo con ISC2), **la ciberseguridad no existe para bloquear al negocio, sino para habilitarlo y protegerlo**.

Hoy vamos a estudiar **Security Governance, Planning, Roles & Due Care / Due Diligence**, uno de los bloques conceptuales con mayor peso en el **Dominio 1 (Security and Risk Management)**. Responderemos preguntas vitales como: ¿quién es legalmente responsable cuando hay una brecha masiva?, ¿cuál es la diferencia entre *investigar* y *actuar* ante la ley?, y por qué el administrador de bases de datos **jamás** es el dueño de la información.

---

## 1. Resumen del Concepto

La **Security Governance** (Gobernanza de Seguridad) es el marco integral mediante el cual la alta dirección (*Senior Management*) dirige, controla y supervisa la seguridad de la información para garantizar que respalde y avance directamente los objetivos estratégicos de la organización (*Business Goals*). En la arquitectura corporativa contemporánea, la seguridad no opera como un silo técnico aislado o un conjunto desordenado de herramientas operativas; opera como una disciplina de gestión de riesgos orientada al negocio.

Gobernar la seguridad implica establecer una jerarquía formal de planeación (*Strategic, Tactical, and Operational Plans*), definir de manera inequívoca la rendición de cuentas (*Accountability*) a través de roles organizacionales estrictamente delimitados, y asegurar el cumplimiento legal mediante la aplicación rigurosa de los principios de **Due Diligence** (investigación y análisis prudente) y **Due Care** (acción y protección razonable).

Para el examen CISSP de ISC2, el aspirante debe abandonar la mentalidad táctica del administrador de sistemas y adoptar plenamente el **Managerial Mindset**. La seguridad nunca debe ser vista como el "departamento del NO" que obstaculiza la innovación, sino como un habilitador del negocio (*Business Enabler*) que protege los activos críticos, preserva la reputación corporativa y previene la negligencia legal de los directivos.

---

## 2. Alineación con el Dominio CISSP

Ubicándonos exactamente en la hoja de ruta del examen:

*   **Dominio ISC2:** Domain 1: Security and Risk Management
*   **Subdominio:** Subdomain 1.3: Evaluate and apply security governance principles / Chapter 1: Security Governance Through Principles and Policies (Secciones: *Manage the Security Function*, *Security Roles and Responsibilities*, *Due Care and Due Diligence*).
*   **Objetivo de Examen:** Evaluar e implementar principios de gobernanza de seguridad, alinear la función de ciberseguridad con la estrategia y metas organizacionales, asignar con precisión roles y responsabilidades de custodia y propiedad de datos, y aplicar los estándares de conducta legal y profesional de Due Care y Due Diligence.

---

## 3. Explicación Detallada (Deep Dive)

La estructura de gobernanza y la cadena de mando en la gestión de seguridad se representa mediante la siguiente jerarquía de responsabilidad y roles:

```text
+-------------------------------------------------------------------------+
|                           SENIOR MANAGEMENT                             |
|          (Ultimate Legal Liability & Accountability / Risk Appetite)    |
+-------------------------------------------------------------------------+
                                     |
                                     v
+-------------------------------------------------------------------------+
|                           SECURITY GOVERNANCE                           |
|      Strategic Plan (3-5 yrs) -> Tactical (1 yr) -> Operational (Day-to-day)  |
+-------------------------------------------------------------------------+
            |                                               |
            v                                               v
+-----------------------+                       +-----------------------+
|     DATA OWNER        |                       |   SECURITY OFFICER    |
| (Classification/Policy)                       |  (Risk Advisor/CISO)  |
+-----------------------+                       +-----------------------+
            |                                               |
            v                                               v
+-----------------------+                       +-----------------------+
|    DATA CUSTODIAN     |                       |       AUDITOR         |
| (Technical Execution) |                       | (Independent Review)  |
+-----------------------+                       +-----------------------+
```

Desglosemos cada uno de los componentes de esta arquitectura de gobernanza:

### 3.1. Alineación de la Función de Seguridad con el Negocio

La seguridad de la información no existe por sí misma; existe exclusivamente para garantizar que la organización pueda cumplir su misión, visión y objetivos estratégicos en un entorno de riesgo aceptable.

*   **Security as a Business Enabler:** La ciberseguridad no debe diseñarse como una barrera burocrática (*Business Blocker*). Su función es habilitar nuevas oportunidades comerciales (por ejemplo, permitir pagos digitales seguros, habilitar trabajo remoto seguro, cumplir certificaciones para entrar a nuevos mercados internacionales) minimizando la probabilidad y el impacto de pérdidas financieras o regulatorias.
*   **Definición de Risk Appetite y Risk Tolerance:** La junta directiva y el *Senior Management* son los únicos facultados para definir el nivel de riesgo que la empresa está dispuesta a asumir (*Risk Appetite*) y la desviación permisible respecto a dicho umbral (*Risk Tolerance*). El equipo de seguridad no decide qué riesgos asumir; evalúa los riesgos y presenta las opciones técnicas y financieras al liderazgo ejecutivo.

---

### 3.2. Jerarquía de Planeación de Seguridad y Horizontes Temporales

Para estructurar la gobernanza, ISC2 exige que la función de seguridad se organice a través de tres niveles jerárquicos de planeación, cada uno con un horizonte temporal y un nivel de abstracción específico:

| Nivel de Planeación | Horizonte Temporal | Audiencia y Enfoque | Descripción y Entregables Clave |
| :--- | :--- | :--- | :--- |
| **Strategic Plan** | Largo plazo (3 a 5 años) | Board of Directors, CEO, C-Level | Establece la visión de seguridad, metas organizacionales a largo plazo, postura de riesgo (*Risk Posture*), arquitectura global y asignación macro de presupuesto. Se actualiza anualmente o ante cambios drásticos de negocio. |
| **Tactical Plan** | Mediano plazo (aprox. 1 año) | CISO, Directores de TI, Security Managers | Traduce los objetivos estratégicos en proyectos concretos y medibles. Incluye adquisición de herramientas, migración de infraestructura, presupuestos anuales, despliegue de programas de *Security Awareness* y contratación de personal especializado. |
| **Operational Plan** | Corto plazo (Diario / Semanal / Mensual) | Administradores de Sistemas, Custodios, Analistas SOC | Procedimientos operativos estándar (SOPs), calendarios de parchado, revisiones diarias de registros (*Log Review*), simulacros de *Disaster Recovery*, listas de verificación y respuesta inmediata a incidentes. |

---

### 3.3. Roles y Responsabilidades Organizacionales de Seguridad

Uno de los temas más evaluados en el examen CISSP es la separación inequívoca de funciones y la trazabilidad de la responsabilidad. La confusión entre propiedad y custodia técnica es una de las fallas más comunes en las auditorías corporativas.

#### 1. Senior Management (CEO, Board of Directors, Executive Committee)
*   **Responsabilidad Primaria:** Posee la **Ultimate Legal Liability** (responsabilidad legal definitiva) y la rendición de cuentas ineludible (*Accountability*).
*   **Funciones:** Establece las prioridades organizacionales, aprueba las políticas corporativas de seguridad, asigna los recursos financieros y humanos, y asume legalmente las consecuencias financieras, penales o de reputación en caso de una brecha provocada por falta de diligencia.
*   **Regla CISSP:** El Senior Management puede delegar la autoridad para ejecutar tareas, pero **nunca puede delegar la responsabilidad legal final**.

#### 2. Security Professional / CISO (Chief Information Security Officer)
*   **Responsabilidad Primaria:** Actúa como el **Risk Advisor** (asesor funcional de riesgos) del Senior Management.
*   **Funciones:** Diseña, implementa y supervisa el programa de seguridad de la información. Traduce los requerimientos de negocio y cumplimiento en políticas, estándares y controles técnicos. Formula recomendaciones basadas en análisis de costo-beneficio (*Cost-Benefit Analysis*).
*   **Regla CISSP:** El CISO no es el dueño del riesgo ni posee la responsabilidad legal definitiva de la empresa; asesora a la junta directiva para que esta tome decisiones informadas.

#### 3. Asset Owner / Data Owner (Business Unit Head, VP de Finanzas, etc.)
*   **Responsabilidad Primaria:** Posee la propiedad sobre los activos de información del negocio.
*   **Funciones:** Define la *Data Classification* (clasificación del dato: confidencial, público, restringido), especifica los requisitos de protección basados en el impacto de negocio, determina quién tiene autorización de acceso bajo el principio de *Need-to-Know*, y aprueba formalmente las solicitudes de acceso.
*   **Regla CISSP:** El Data Owner es típicamente un líder de negocio (ej. el Director de Finanzas para los libros contables, el Director de Recursos Humanos para expedientes laborales), **no un administrador técnico de TI**.

#### 4. System Owner
*   **Responsabilidad Primaria:** Responsable del sistema computacional, infraestructura de hardware o plataforma en la nube que procesa, transporta o almacena la información.
*   **Funciones:** Garantiza que el hardware, el sistema operativo y el software base mantengan configuraciones seguras, parches actualizados y licencias vigentes conforme a las directrices de los Data Owners.

#### 5. Data Custodian / Information Custodian
*   **Responsabilidad Primaria:** Ejecuta la administración técnica diaria de los datos conforme a las instrucciones directas del Data Owner.
*   **Funciones:** Implementa salvaguardas técnicas, configura controles de acceso (ACLs, RBAC), ejecuta las rutinas de respaldo (*Backups*), realiza pruebas periódicas de restauración, monitorea la integridad de los datos y aplica cifrado.
*   **Regla CISSP:** El Data Custodian gestiona el "cómo" técnico, mientras que el Data Owner decide el "qué" y el "quién". El custodio no decide quién tiene acceso; aplica la decisión del dueño.

#### 6. User (End User)
*   **Responsabilidad Primaria:** Sujetarse a las políticas corporativas y salvaguardar los activos asignados.
*   **Funciones:** Cumplir estrictamente con la *Acceptable Use Policy* (AUP), ejercer Due Care en la protección de sus credenciales, utilizar los activos exclusivamente para fines comerciales autorizados y reportar oportunamente incidentes o anomalías al equipo de seguridad.

#### 7. Auditor (Internal & External)
*   **Responsabilidad Primaria:** Verificación independiente y objetiva de la efectividad de los controles y del cumplimiento normativo.
*   **Funciones:** Evalúa si las políticas de seguridad se implementan en la práctica, identifica deficiencias operativas y emite informes formales al comité de auditoría de la junta directiva.
*   **Regla CISSP:** Requiere estricta *Segregation of Duties* (Separación de Funciones); el auditor debe ser jerárquica y funcionalmente independiente de los administradores de sistemas y del personal operativo de seguridad para garantizar imparcialidad.

---

### 3.4. Due Diligence vs. Due Care: El Estándar de Responsabilidad Legal

La distinción entre estos dos conceptos es uno de los temas más examinados en ISC2. Ambos principios se derivan del derecho corporativo y definen el estándar de conducta profesional para evitar demandas por negligencia (*Gross Negligence*).

```text
+-------------------------------------------------------------------------+
|                             DUE DILIGENCE                               |
|                       "Knowing What Is Right"                           |
|  - Investigar, evaluar, auditar y recopilar hechos antes de actuar.     |
|  - Realizar Risk Assessments, Vendor Reviews y análisis de brechas.     |
+-------------------------------------------------------------------------+
                                     |
                                     v
+-------------------------------------------------------------------------+
|                                DUE CARE                                 |
|                       "Doing What Is Right"                             |
|  - Actuar con base en el estándar de la "Persona Prudente".             |
|  - Implementar controles, aplicar parches, instalar firewalls, educar.  |
+-------------------------------------------------------------------------+
                                     |
                 (Si falta Due Care se comete:)
                                     v
+-------------------------------------------------------------------------+
|                        NEGLIGENCE (NEGLIGENCIA)                         |
|   Pérdida de inmunidad legal y responsabilidad personal corporativa.    |
+-------------------------------------------------------------------------+
```

#### Due Diligence (La Investigación Previa)
*   **Concepto:** Consiste en investigar, recopilar información, analizar riesgos y verificar hechos para comprender la postura de seguridad antes de comprometer recursos o tomar decisiones.
*   **Enfoque:** *"Knowing what is right"* (Saber qué es lo correcto).
*   **Ejemplos Prácticos:**
    *   Realizar un *Risk Assessment* formal antes de migrar a la nube.
    *   Ejecutar un proceso de *Vendor Risk Assessment* y revisar los reportes SOC 2 de un proveedor antes de firmar un contrato.
    *   Conducir verificaciones de antecedentes (*Background Checks*) a candidatos antes de su contratación.
    *   Auditar periódicamente el cumplimiento de las políticas de seguridad.

#### Due Care (La Acción Prudente / Prudent Person Rule)
*   **Concepto:** Consiste en tomar las medidas correctivas, razonables y prácticas necesarias para mitigar los riesgos identificados y proteger los activos organizacionales. Se basa en el principio de la **Prudent Person Rule**: *"¿Qué habría hecho una persona razonable y prudente en circunstancias similares?"*
*   **Enfoque:** *"Doing what is right"* (Hacer lo correcto).
*   **Ejemplos Prácticos:**
    *   Aplicar parches de seguridad críticos dentro de un plazo razonable tras ser publicados.
    *   Forzar Multi-Factor Authentication (MFA) para accesos administrativos remotos.
    *   Despedir o revocar credenciales inmediatamente a un empleado con acceso privilegiado que ha sido rescindido.
    *   Desplegar sistemas de supresión de incendios en el Data Center para proteger la vida humana y la infraestructura. Recuerda que es importante proteger primero la vida que los activos.

#### La Relación Causal entre Ambos
Voy a tratar de resumirlo para que sea más fácil de entender. **Due Diligence alimenta a Due Care**. No se puede aplicar Due Care adecuadamente sin haber ejercido primero Due Diligence. Descubrir mediante un escaneo de vulnerabilidades que un servidor web tiene un fallo crítico es Due Diligence; instalar el parche para solucionar la vulnerabilidad es Due Care. Si la directiva sabe que existe una falla crítica y no hace nada, incurre en negligencia culpable (*Negligence*).

---

### 3.5. Procesos Organizacionales de Gobernanza

La gobernanza se materializa operativamente mediante la ejecución recurrente de procesos de control y evaluación:

*   **Documentation Review:** Revisión sistemática y periódica (mínimo anual) de políticas, estándares y procedimientos para validar que continúen alineados con los cambios tecnológicos, de negocio y legislativos.
*   **Process / Policy Review:** Verificación de que las operaciones diarias sigan efectivamente los lineamientos descritos en los manuales de gobernanza, evitando la obsolescencia documental.
*   **On-Site Assessment:** Inspección física directa de las instalaciones, controles ambientales, gabinetes de comunicaciones y medidas de control de acceso de la empresa o de proveedores críticos.
*   **Third-Party Audits:** Contratación de entidades auditoras externas e independientes para validar la postura de control frente a marcos normativos específicos (ej. SOC 2 Type II, ISO/IEC 27001).

---

## 4. Managerial Mindset vs. Technical Mindset

En el examen CISSP, fallar en adoptar la perspectiva gerencial es la causa principal de responder erroneamente. La siguiente tabla contrasta ambas visiones:

| Dimensión | Technical / SysAdmin Mindset (Operativo) | Managerial / CISO Mindset (Enfoque CISSP) |
| :--- | :--- | :--- |
| **Rol en la Organización** | Proteger la infraestructura tecnológica, configurar puertos, parchar servidores y mantener el "uptime". | Alinear la ciberseguridad con la estrategia del negocio para mitigar riesgos, proteger el valor de la empresa y asegurar el cumplimiento. |
| **Propiedad del Dato** | Asumir que el departamento de TI es el dueño de las bases de datos porque ellos administran los servidores. | Entender que los Data Owners son los líderes de las unidades de negocio; TI actúa únicamente como Data Custodian técnico. |
| **Planeación** | Comprar herramientas tecnológicas para resolver problemas inmediatos conforme van surgiendo. | Desarrollar una jerarquía formal de planeación (Strategic, Tactical, Operational) con horizontes de 3 a 5 años sustentados en presupuesto y ROI de riesgo. |
| **Due Diligence vs. Due Care** | Ver estas prácticas como trámites legales burocráticos sin impacto en el día a día. | Utilizarlas como el escudo legal corporativo para demostrar que la empresa actuó con prudencia profesional, evitando juicios por negligencia. |
| **Percepción del Negocio** | La seguridad es prioritaria; si el negocio debe detenerse para aplicar un parche o endurecer un sistema, debe hacerlo. | La seguridad es un habilitador del negocio; los controles deben balancear la protección contra el impacto operativo y los objetivos de la empresa. |

---

## 5. Caso de Uso Real: Gobernanza Corporativa en una Fusión y Adquisición (M&A)

### Escenario Corporativo
Un conglomerado minorista multinacional (**RetailCorp**) inicia el proceso de adquisición de una empresa de comercio electrónico en la nube (**FastCart**). La operación requiere integrar las arquitecturas tecnológicas, el personal y los datos de tarjetas de crédito de 10 millones de clientes.

```text
+-------------------------------------------------------------------------+
|                  RETAILCORP BOARD OF DIRECTORS                          |
|         (Aprueba la adquisición e instruye Due Diligence Integral)      |
+-------------------------------------------------------------------------+
                                     |
                                     v
+-------------------------------------------------------------------------+
|                CISO & SECURITY ARCHITECTURE TEAM                        |
|   Fase de Due Diligence: Auditoría de seguridad, revisión SOC 2,        |
|   escaneos de vulnerabilidades de terceros y análisis de cumplimiento.  |
+-------------------------------------------------------------------------+
                                     |
     [ Se detectan vulnerabilidades críticas no resueltas en FastCart ]
                                     |
                                     v
+-------------------------------------------------------------------------+
|                       STRATEGIC SECURITY PLAN                           |
|   Se formula el plan a 3 años para unificar la infraestructura en nube. |
+-------------------------------------------------------------------------+
                                     |
                                     v
+-------------------------------------------------------------------------+
|                        TACTICAL SECURITY PLAN                           |
|   Proyecto anual: Aislamiento temporal de FastCart mediante firewalls,  |
|   adquisición de solución IAM corporativa y migración segura.           |
+-------------------------------------------------------------------------+
                                     |
                                     v
+-------------------------------------------------------------------------+
|                       OPERATIONAL SECURITY PLAN                         |
|   Ejecución diaria: Custodios aplican parches inmediatos (Due Care),    |
|   el Data Owner financiero aprueba matrices de acceso RBAC.             |
+-------------------------------------------------------------------------+
```

### Ejecución de los Principios de Gobernanza

*   **Ejercicio de Due Diligence:** Antes de consumar la compra, el equipo del CISO de RetailCorp ejecuta una investigación exhaustiva sobre FastCart: revisa reportes de auditoría externa, políticas de seguridad vigentes, contratos con proveedores de nube, arquitectura de red y registros históricos de incidentes.
*   **Ejercicio de Due Care:** Durante el proceso de Due Diligence, se descubre que FastCart no ha parchado vulnerabilidades críticas en sus servidores perimetrales desde hace seis meses. Como medida inmediata de Due Care, RetailCorp condiciona la adquisición a que FastCart aísle esos sistemas, aplique los parches de seguridad y fuerce MFA antes de conectar cualquier túnel de red entre ambas empresas.
*   **Mapeo de Roles y Custodia:**
    *   El Director de E-commerce de FastCart es designado formalmente como el **Data Owner** de la información transaccional de los clientes.
    *   El equipo de ingeniería de infraestructura de RetailCorp asume el rol de **Data Custodian**, implementando los respaldos automáticos, el cifrado de almacenamiento y las políticas de retención dictadas por el Data Owner.
    *   El **Senior Management** de RetailCorp asume la *Ultimate Liability* legal tras la firma final de la fusión.

---

## 6. Tips y Trampas Comunes del Examen CISSP

*   **¿Quién es el responsable legal último?:** Si la pregunta plantea quién va a la cárcel, quién es demandado o quién tiene la responsabilidad legal final ante un desastre, la respuesta es **SIEMPRE el Senior Management / Board of Directors / CEO**. Nunca es el CISO, ni el administrador de red, ni el custodio.
*   **La trampa del Data Owner vs. Data Custodian:**
    *   Si la acción implica decidir, clasificar, determinar requerimientos o autorizar accesos (Cerebro o decidir): Corresponde al **Data Owner**.
    *   Si la acción implica configurar, administrar, hacer respaldos, aplicar parches o ejecutar controles técnicos (Talacha o patear comandos): Corresponde al **Data Custodian**.
*   **Distinción instantánea entre Due Diligence y Due Care:**
    *   *Due Diligence* = Investigación, auditoría, análisis previo, descubrimiento.
    *   *Due Care* = Acción prudente, remediación, implementación de salvaguardas, mantenimiento diario.
*   **La Regla del Buen Padre de Familia (Prudent Person Rule):** Es el estándar legal que fundamenta a Due Care. Si una pregunta menciona si un administrador actuó como una "persona prudente y razonable", se refiere a **Due Care**.
*   **Horizontes Temporales de Planes:**
    *   *Strategic* = 3 a 5 años (metas organizacionales).
    *   *Tactical* = 1 año (proyectos, presupuestos, herramientas).
    *   *Operational* = Diario, semanal, mensual (procedimientos, listas de verificación).

#### Keywords Disparadoras para el Examen:
*   *Ultimate accountability / Final legal responsibility* → **Senior Management**
*   *Determines data classification / Authorizes user access* → **Data Owner (Asset Owner)**
*   *Implements technical controls / Performs routine backups* → **Data Custodian**
*   *Prudent Person Rule / Corrective action taken* → **Due Care**
*   *Fact-finding / Pre-acquisition assessment / Vendor vetting* → **Due Diligence**
*   *Independent verification / Objective evaluation* → **Auditor**

---

## 7. Reglas Mnemotécnicas y Acrósticos

### 1. Jerarquía de Planeación: Acrónimo S-T-O-P
Para recordar el orden jerárquico descendente de la planeación y su formalización operativa:
*   **S**trategic (3 - 5 años: Visión y Metas)
*   **T**actical (1 año: Proyectos y Presupuestos)
*   **O**perational (Día a día: Rutinas y Tareas)
*   **P**rocedures (Pasos detallados de ejecución)

Frase mental: **S**ecurity **T**eams **O**rganize **P**erfectly (**S-T-O-P**).

### 2. Due Diligence vs. Due Care: La Regla de las Dos "D" y las Dos "C"
```text
Due Diligence  =  Do Detect   /  Due Discovery  (Investigar y Conocer)
Due Care       =  Do Correct  /  Do Contain     (Actuar y Proteger)
```
*   **Diligence:** Se enfoca en el **D**iagnóstico.
*   **Care:** Se enfoca en la **C**ura.

---

## 8. Preguntas de Práctica Tipo CISSP

### Pregunta 1
El Consejo de Administración de una corporación multinacional de servicios financieros aprobó la adquisición de una plataforma SaaS para optimizar la gestión de pagos. Durante una auditoría interna posterior a la firma del contrato, el Auditor en Jefe descubre que el equipo de adquisiciones no solicitó los reportes SOC 2 Type II del proveedor ni realizó una evaluación formal de riesgos de terceros antes de completar la integración. Sin embargo, el equipo de TI implementó de inmediato cifrado de punto a punto y autenticación multifactor para todas las conexiones con dicha plataforma. ¿Qué principio de gobernanza fue vulnerado y cómo debe catalogarse formalmente esta falla?

A) Se vulneró el principio de Due Care, lo que constituye una falla directa en la implementación técnica de salvaguardas.  
B) Se vulneró el principio de Due Diligence, debido a la omisión del proceso de investigación y evaluación de riesgos previo a la relación contractual.  
C) Se vulneraron simultáneamente Due Care y Due Diligence, resultando en responsabilidad penal directa para el Chief Information Security Officer.  
D) No existió ninguna vulneración de gobernanza, ya que la implementación de cifrado y autenticación multifactor suple cualquier omisión administrativa previa.  

**Respuesta Correcta: B**

#### Justificación Detallada:
*   **Por qué B es correcta:** El principio de Due Diligence exige investigar, recopilar hechos, evaluar riesgos y validar las credenciales de seguridad de un tercero (Vendor Assessment, revisión de reportes SOC) antes de establecer una relación comercial vinculante. Omitir este paso representa una falla crítica de Due Diligence.
*   **Por qué A es incorrecta:** El equipo de TI sí aplicó Due Care al implementar controles técnicos razonables y prudentes (MFA y cifrado punto a punto). La falla residió en la falta de investigación previa (Due Diligence), no en la ausencia de acciones de mitigación técnica (Due Care).
*   **Por qué C es incorrecta:** Due Care sí fue ejercido al configurar controles de protección. Además, la responsabilidad legal última (*Ultimate Liability*) ante omisiones de gobernanza recae en el Senior Management y la junta directiva, no unilateralmente en el CISO.
*   **Por qué D es incorrecta:** Los controles técnicos posteriores no eximen a la organización de su deber de realizar una debida diligencia previa. Si el proveedor tiene fallas estructurales internas que comprometan los datos, la empresa sigue siendo legalmente vulnerable por negligencia en el proceso de contratación.

---

### Pregunta 2
En una institución hospitalaria de alcance nacional, una base de datos centralizada que contiene expedientes clínicos electrónicos (*Electronic Health Records*) sufrió una brecha de seguridad debido a una vulnerabilidad conocida en el motor de base de datos que no fue mitigada. Las investigaciones revelaron que el Administrador de Base de Datos (DBA) no aplicó el parche crítico liberado hace ocho meses por temor a que la aplicación se tornara inestable. Simultáneamente, el Director de Medicina Interna nunca estableció ni documentó formalmente qué personal de enfermería debía tener acceso a dichos expedientes. Desde la perspectiva de roles y responsabilidades de CISSP, ¿cómo se distribuyen las fallas de estos dos actores?

A) El Administrador de Base de Datos falló como Data Owner al no clasificar el sistema, y el Director Médico falló como Senior Management.  
B) El Administrador de Base de Datos falló como System Owner, y el Director Médico actuó con apego a Due Care como Data Custodian.  
C) El Administrador de Base de Datos falló en sus deberes de Data Custodian al no aplicar el parche (falta de Due Care), y el Director Médico falló en sus deberes de Data Owner al no definir los requisitos de acceso y clasificación.  
D) Ambos actores operan exclusivamente como Data Custodians, por lo que toda la responsabilidad administrativa recae de forma exclusiva sobre el Auditor Interno.  

**Respuesta Correcta: C**

#### Justificación Detallada:
*   **Por qué C es correcta:** En el marco de roles de ISC2:
    *   El Director de Medicina Interna representa a la unidad de negocio propietaria de los datos, operando como **Data Owner**. Sus responsabilidades indelegables son clasificar la información, determinar su sensibilidad y dictar quién tiene la necesidad legítima de acceso (*Need-to-Know*). Falló al no definir estos lineamientos.
    *   El Administrador de Base de Datos (DBA) opera como **Data Custodian**. Su responsabilidad es la ejecución técnica de las directrices de seguridad, lo que incluye el mantenimiento preventivo y la aplicación de parches de seguridad. Omitir la aplicación de un parche crítico durante ocho meses representa una omisión directa del estándar de la persona prudente (*Due Care*), lo que constituye negligencia operativa.
*   **Por qué A es incorrecta:** El DBA es un operador técnico (Data Custodian), no el dueño de los datos del negocio (Data Owner). El Director Médico es el Data Owner de los expedientes de su departamento, no el Senior Management corporativo.
*   **Por qué B es incorrecta:** El Director Médico no actúa como custodio técnico ni ejerció Due Care; omitió definir la matriz de acceso a los expedientes clínicos que están bajo su custodia legal.
*   **Por qué D es incorrecta:** Los roles de dueño y custodio son conceptual y funcionalmente distintos. El auditor no tiene responsabilidades operativas ni asume la culpa por las omisiones de los administradores o dueños del dato.

---

## Ctrl + D

La gobernanza de seguridad no es solo teoría de libros para aprobar un examen; es el marco legal y administrativo que separa a las empresas maduras e inmunes a negligencias de aquellas que terminan destruidas en tribunales tras un desastre digital.

La próxima vez que estés analizando la estructura de tu empresa o diseñando un proyecto, hazte estas tres preguntas fundamentales:

1.  **¿El Senior Management de mi empresa entiende que la responsabilidad legal última es suya y no del SysAdmin?** *(Ultimate Liability)*
2.  **¿Los líderes de las unidades de negocio están asumiendo el rol de Data Owners o le pasaron esa responsabilidad a TI?** *(Data Owner vs. Data Custodian)*
3.  **¿Estamos investigando adecuadamente antes de firmar un contrato (Due Diligence) y actuando con rapidez prudente cuando detectamos una falla (Due Care)?** *(Estándar de Responsabilidad Legal)*

Si logras que la organización entienda el balance entre gobernanza, estrategia y roles claros, estarás construyendo un programa de ciberseguridad verdaderamente alineado con el negocio.

Y como siempre... **lo más importante es nunca dejar de preguntar** (y nunca asumir responsabilidades legales que corresponden al Senior Management).

¡Nos leemos en la siguiente entrega sobre [Marcos de Control de Seguridad y Gobernanza de Terceros](/blog/cissp-2024-05-marcos-control-gobernanza-terceros)!
