# INFORME TÉCNICO
## Laboratorio 2 - API de Gestión de Cursos

**DEPARTAMENTO:** Ciencias de la Computación  
**CARRERA:** Ingeniería en Tecnologías de la Información  
**ASIGNATURA:** Aplicaciones Distribuidas  
**NIVEL:** 7mo  
**DOCENTE:** Ing. Paulo Galarza  
**ESTUDIANTE:** Juan Carlos Yasig 
**PRÁCTICA N°:** 2  
**REPOSITORIO:** https://github.com/juanelocy/U2Lab2_YasigJuan_Distribuidas.git

---

## RESUMEN

Este laboratorio se enfoca en el desarrollo de una aplicación web integral para la gestión de cursos académicos, implementando una arquitectura completa que incluye tanto frontend como backend. La solución desarrollada permite la gestión completa de cursos académicos mediante una API RESTful construida con Node.js, Express y MongoDB, integrada con un frontend desarrollado en React.

La aplicación implementa operaciones CRUD (Create, Read, Update, Delete) completas para la gestión de cursos, incluyendo funcionalidades de autenticación y autorización de usuarios mediante JSON Web Tokens (JWT). El sistema permite a los usuarios registrarse, iniciar sesión, y gestionar cursos de manera segura y eficiente, todo a través de una interfaz moderna y responsiva.

El proyecto demuestra la integración exitosa entre tecnologías frontend y backend, aplicando buenas prácticas de desarrollo como la separación de responsabilidades, manejo de estado, seguridad de datos y documentación técnica completa.

## PALABRAS CLAVE

- **React:** Biblioteca de JavaScript para desarrollo de interfaces de usuario
- **API RESTful:** Servicio web que sigue principios REST para comunicación entre sistemas
- **CRUD:** Operaciones de Crear, Leer, Actualizar y Eliminar datos
- **MongoDB:** Base de datos NoSQL orientada a documentos
- **JWT:** JSON Web Tokens para autenticación y autorización

## INTRODUCCIÓN

En el contexto actual del desarrollo de aplicaciones web, la arquitectura basada en APIs RESTful se ha convertido en un estándar para la creación de sistemas escalables y mantenibles. La separación entre frontend y backend permite mayor flexibilidad, reutilización de código y facilita el mantenimiento de aplicaciones complejas.

Este laboratorio práctico se desarrolló con el objetivo de consolidar los conocimientos sobre la integración de tecnologías modernas de desarrollo web, específicamente la comunicación entre una aplicación React y una API RESTful. La práctica se centra en el desarrollo de un sistema de gestión de cursos académicos que permita a los usuarios realizar operaciones completas de administración de datos.

El proyecto aborda aspectos fundamentales del desarrollo web moderno, incluyendo la arquitectura de aplicaciones distribuidas, la implementación de servicios HTTP, el manejo de estado en aplicaciones React, y la implementación de sistemas de autenticación seguros. Además, se enfatiza la importancia de aplicar buenas prácticas de desarrollo y documentación técnica.

La elección de las tecnologías utilizadas se basa en su popularidad en la industria, su robustez y la facilidad de integración entre ellas, proporcionando un ambiente de aprendizaje que refleja las prácticas actuales del desarrollo de software.

## OBJETIVOS

### Objetivo General
Desarrollar una aplicación web completa que integre un frontend en React con una API RESTful para la gestión de cursos académicos, implementando operaciones CRUD y sistemas de autenticación seguros.

### Objetivos Específicos

1. **Consumir APIs RESTful:** Implementar la comunicación entre el frontend React y una API RESTful externa o local, utilizando servicios HTTP para el intercambio de datos.
2. **Implementar operaciones CRUD:** Desarrollar funcionalidades completas de creación, lectura, actualización y eliminación de registros de cursos en la base de datos.
4. **Integrar autenticación segura:** Implementar un sistema de autenticación y autorización de usuarios utilizando JSON Web Tokens (JWT) para proteger las rutas sensibles de la aplicación.


## MARCO TEÓRICO

### APIs RESTful (Representational State Transfer)

Las APIs RESTful constituyen un estilo arquitectónico para el diseño de servicios web que utiliza los métodos HTTP estándar (GET, POST, PUT, DELETE) para realizar operaciones sobre recursos. Los principios fundamentales de REST incluyen:

- **Stateless (Sin estado):** Cada petición debe contener toda la información necesaria para ser procesada
- **Cacheable:** Las respuestas deben poder ser almacenadas en caché cuando sea apropiado
- **Uniform Interface:** Interfaz uniforme entre componentes
- **Layered System:** Arquitectura en capas que permite escalabilidad

### React.js

React es una biblioteca de JavaScript desarrollada por Facebook para la construcción de interfaces de usuario interactivas y dinámicas. Sus características principales incluyen:

- **Componentes reutilizables:** Encapsulación de lógica y presentación
- **Virtual DOM:** Representación virtual del DOM para optimización de rendimiento
- **Unidirectional Data Flow:** Flujo de datos unidireccional para mayor predictibilidad
- **Hooks:** Funciones que permiten usar estado y otras características de React

### Node.js y Express

Node.js es un entorno de ejecución de JavaScript del lado del servidor que permite desarrollar aplicaciones backend escalables. Express es un framework web minimalista para Node.js que facilita la creación de APIs y aplicaciones web.

### MongoDB

MongoDB es una base de datos NoSQL orientada a documentos que almacena datos en formato BSON (Binary JSON). Sus ventajas incluyen flexibilidad de esquema, escalabilidad horizontal y facilidad de integración con aplicaciones JavaScript.

### JSON Web Tokens (JWT)

JWT es un estándar abierto para la transmisión segura de información entre partes. Se utiliza comúnmente para autenticación y autorización en aplicaciones web, proporcionando un mecanismo stateless para la gestión de sesiones de usuario.

### Operaciones CRUD

Las operaciones CRUD representan las cuatro operaciones básicas que se pueden realizar sobre datos persistentes:
- **Create (Crear):** Inserción de nuevos registros
- **Read (Leer):** Consulta de datos existentes
- **Update (Actualizar):** Modificación de registros existentes
- **Delete (Eliminar):** Eliminación de registros

## DESCRIPCIÓN DEL PROCEDIMIENTO

### Fase 1: Configuración del Entorno de Desarrollo

1. **Inicialización del proyecto backend:**
    - Configuración de Node.js y npm
    - Instalación de dependencias: Express, MongoDB, mongoose, jsonwebtoken, bcryptjs
    - Configuración de la estructura de carpetas del proyecto

2. **Inicialización del proyecto frontend:**
    - Creación de aplicación React usando Create React App
    - Instalación de dependencias: Axios, React Router, librerías de UI
    - Configuración de la estructura de componentes

### Fase 2: Desarrollo del Backend (API RESTful)

1. **Configuración de la base de datos:**
    - Conexión a MongoDB local o en la nube
    - Definición de esquemas de datos para usuarios y cursos
    - Configuración de modelos con Mongoose

2. **Implementación de endpoints de autenticación:**
    - Endpoint para registro de usuarios (/api/auth/register)
    - Endpoint para inicio de sesión (/api/auth/login)
    - Middleware de autenticación con JWT

3. **Implementación de endpoints CRUD para cursos:**
    - GET /api/cursos - Listar todos los cursos
    - GET /api/cursos/:id - Obtener un curso específico
    - POST /api/cursos - Crear nuevo curso
    - PUT /api/cursos/:id - Actualizar curso existente
    - DELETE /api/cursos/:id - Eliminar curso

4. **Configuración de middleware:**
    - CORS para permitir peticiones desde el frontend
    - Middleware de autenticación para rutas protegidas
    - Manejo de errores y validación de datos

### Fase 3: Desarrollo del Frontend (React)

1. **Configuración de servicios HTTP:**
    - Creación de instancia de Axios configurada
    - Implementación de interceptores para manejo de tokens
    - Servicios para operaciones de autenticación y CRUD

2. **Desarrollo de componentes de autenticación:**
    - Componente de registro de usuarios
    - Componente de inicio de sesión
    - Componente de protección de rutas

3. **Desarrollo de componentes de gestión de cursos:**
    - Componente para listar cursos
    - Formulario para crear/editar cursos
    - Componente para eliminar cursos
    - Componente de detalles de curso

4. **Implementación de navegación:**
    - Configuración de React Router
    - Navegación entre diferentes vistas
    - Manejo de estado global de autenticación

### Fase 4: Integración y Estilización

1. **Integración frontend-backend:**
    - Conexión de componentes React con endpoints de la API
    - Manejo de estados de carga y errores
    - Actualización automática de la interfaz tras operaciones CRUD

2. **Estilización de la aplicación:**
    - Aplicación de estilos CSS modernos
    - Diseño responsivo para diferentes dispositivos
    - Mejora de la experiencia de usuario (UX)

## ANÁLISIS DE RESULTADOS

### Funcionalidad Implementada

La aplicación desarrollada logró implementar exitosamente todas las funcionalidades planificadas:

1. **Sistema de Autenticación:**
    - Registro de usuarios con validación de datos
    - Inicio de sesión con generación de tokens JWT
    - Protección de rutas sensibles mediante middleware de autenticación
    - Manejo seguro de contraseñas mediante hash bcrypt

2. **Operaciones CRUD de Cursos:**
    - **Creación:** Los usuarios pueden agregar nuevos cursos con información completa
    - **Lectura:** Visualización de lista completa de cursos con datos actualizados en tiempo real
    - **Actualización:** Edición de cursos existentes con persistencia inmediata
    - **Eliminación:** Remoción de cursos con confirmación de usuario

3. **Integración Frontend-Backend:**
    - Comunicación fluida entre React y la API RESTful
    - Manejo eficiente de peticiones HTTP con Axios
    - Actualización automática de la interfaz tras cambios en los datos
    - Gestión adecuada de estados de carga y errores

## GRÁFICOS Y FOTOGRAFÍAS

### Capturas de Pantalla de la Aplicación

#### 1. Registro de Usuario
![Inserción de registro](https://i.imgur.com/NTk7nWg.png)  
*Figura 1: Interfaz para el registro de nuevos usuarios en el sistema*


#### 2. Inicio de Sesión
![Inserción de registro](https://i.imgur.com/thUXsFE.png)  
*Figura 1: Sistema de autenticación con credenciales de usuario*


#### 4. Formulario de Nuevo Curso
![Inserción de registro](https://i.imgur.com/NKKMSg0.png)  
*Figura 1: Interfaz para la creación de cursos*


#### 5. Edición de Curso Existente
![Inserción de registro](https://i.imgur.com/9XfFLJO.png)  
*Figura 1: Modificación de información de cursos*


#### 6. Confirmación de Eliminación
![Inserción de registro](https://i.imgur.com/4wpQWyO.png)  
*Figura 1: Eliminacion de curso*

## DISCUSIÓN

### Fortalezas de la Implementación

El desarrollo de este laboratorio ha demostrado varias fortalezas significativas:

1. **Arquitectura Modular:** La separación clara entre frontend y backend facilita el mantenimiento y escalabilidad del sistema. Esta arquitectura permite que cada capa evolucione independientemente.

2. **Seguridad Robusta:** La implementación de JWT para autenticación proporciona un nivel de seguridad adecuado para aplicaciones web modernas, eliminando la necesidad de mantener sesiones en el servidor.

3. **Experiencia de Usuario:** La interfaz desarrollada en React ofrece una experiencia fluida y responsiva, con actualizaciones en tiempo real que mejoran la interacción del usuario.

4. **Escalabilidad:** El uso de MongoDB como base de datos NoSQL permite manejar grandes volúmenes de datos de manera eficiente y facilita la escalabilidad horizontal.

## CONCLUSIONES

1. **Integración Exitosa:** Se logró una integración exitosa entre React y la API RESTful, demostrando la viabilidad de esta arquitectura para aplicaciones web modernas.

1. **Aprendizaje Consolidado:** Esta práctica permitió consolidar conocimientos teóricos mediante su aplicación práctica en un proyecto real.

2. **Comprensión Arquitectónica:** Se desarrolló una comprensión profunda de la arquitectura de aplicaciones web modernas y la comunicación entre capas.

3. **Habilidades Técnicas:** Se fortalecieron habilidades en tecnologías actuales de desarrollo web, aumentando la empleabilidad y competencia técnica.

## BIBLIOGRAFÍA

1. **Documentación Oficial de React**  
    *React – A JavaScript library for building user interfaces*  
    Facebook Inc. Consultado en junio de 2025.  
    Disponible en: https://reactjs.org/docs/getting-started.html

2. **Documentación Oficial de Node.js**  
    *Node.js Documentation*  
    Node.js Foundation. Consultado en junio de 2025.  
    Disponible en: https://nodejs.org/en/docs/

3. **Express.js Official Documentation**  
    *Express - Node.js web application framework*  
    Express Team. Consultado en junio de 2025.  
    Disponible en: https://expressjs.com/

4. **MongoDB Manual**  
    *MongoDB Documentation*  
    MongoDB Inc. Consultado en junio de 2025.  
    Disponible en: https://docs.mongodb.com/

5. **JWT.io - JSON Web Tokens Introduction**  
    *Introduction to JSON Web Tokens*  
    Auth0. Consultado en junio de 2025.  
    Disponible en: https://jwt.io/introduction/

6. **Axios Documentation**  
    *Promise based HTTP client for the browser and node.js*  
    Axios Team. Consultado en junio de 2025.  
    Disponible en: https://axios-http.com/docs/intro


---
