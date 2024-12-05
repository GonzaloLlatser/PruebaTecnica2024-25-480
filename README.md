# PruebaTécnica2024-25-480
API backend para la gestión de libros y usuarios. Permite realizar operaciones como crear, leer, actualizar y eliminar (CRUD) libros y usuarios, así como gestionar la autenticación y autorización de usuarios. Ideal para integrarse con aplicaciones frontend que necesiten manejar bibliotecas de libros y cuentas de usuarios.

## Tecnologías utilizadas

<img alt="Static Badge" src="https://img.shields.io/badge/Express.js-yellow?style=for-the-badge&logo=express&labelColor=yellow&color=black"><img alt="Static Badge" src="https://img.shields.io/badge/MongoDB-%234caf50?style=for-the-badge&logo=mongodb&logoColor=white"><img alt="Static Badge" src="https://img.shields.io/badge/Node.js-black?style=for-the-badge&logo=nodedotjs&logoColor=%235FA04E" style="max-width: 100%">

## Tabla de contenidos

- [Descripción del proyecto :bulb:](#Descripción-del-proyecto)
- [Acceso⛏️](#Acceso)
- [Desarrollo 🪛](#Desarrollo)
- [Estado Actual :white_check_mark:](#Estado)
- [Desarrolladores del Proyecto :raising_hand:](#Desarrolladores-del-Proyecto)
- [Licencia :vertical_traffic_light:](#Licencia)
- [Conclusiones :tada:](#Conclusiones)
- [Contacto :calling:](#Contacto)

### Descripción del proyecto

Este es un proyecto backend desarrollado con Node.js y Express.js que proporciona una API para gestionar libros y usuarios. La API permite realizar las siguientes operaciones:

- **Operaciones con libros**: agregar, actualizar, eliminar y obtener libros desde una base de datos MongoDB.
- **Operaciones con usuarios**: agregar, eliminar y obtener usuarios desde una base de datos MongoDB.
- **Operaciones con autenticación**: manejar la autenticación mediante JWT (JSON Web Token). Los usuarios pueden autenticarse y recibir un token que autoriza el acceso a las rutas protegidas de la API.

La seguridad y la autenticación de usuarios se gestionan a través de JWT, lo que permite un sistema eficiente y seguro de control de acceso.

### Acceso

Puedes clonar el repositorio del proyecto desde GitHub con el siguiente comando:

[git clone https://github.com/GonzaloLlatser/PruebaTecnica2024-480.git](https://github.com/GonzaloLlatser/PruebaTecnica2024-480.git)

### Requisitos previos

- Tener [Node.js](https://nodejs.org/) instalado.
- Tener [MongoDB](https://www.mongodb.com/) configurado en tu máquina o utilizar un servicio de base de datos en la nube como MongoDB Atlas.

### Ejecución del Proyecto

1. **Configuración del entorno de desarrollo**
   
   Primero, creamos un proyecto con Node.js e instalamos las dependencias necesarias para que la API funcione correctamente. Estas dependencias incluyen:
   - **express**: El framework utilizado para manejar las rutas y las solicitudes HTTP.
   - **mongoose**: Librería para interactuar con MongoDB, proporcionando una capa de modelado de datos.
   - **jsonwebtoken**: Librería para generar y verificar tokens JWT, usada para manejar la autenticación.
   - **dotenv**: Librería para cargar variables de entorno desde un archivo `.env`, asegurando que las configuraciones sensibles (como claves secretas y URI de MongoDB) no estén hardcodeadas en el código fuente.

3. **Configuración de MongoDB y Mongoose**
   
   **Conexión a MongoDB**  
   Para almacenar la información de los libros y los usuarios, configuramos una base de datos MongoDB local. Usamos Mongoose para crear los modelos de datos y realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los documentos.

4. **Creación de modelos (Mongoose)**
   
   a. **Modelo de Usuario**  
   Creamos un modelo para los usuarios, que incluye campos como el correo electrónico y la edad.
   
   b. **Modelo de Libro**  
   También creamos un modelo para los libros, con campos como título, autor, género y año de publicación.

5. **Autenticación de Usuarios con JWT**
   
   a. **Generación del token JWT**  
   En la ruta `/api/login`, los usuarios pueden autenticarse proporcionando su correo electrónico y contraseña. Si las credenciales son correctas, se genera un token JWT usando la librería `jsonwebtoken`.
   
   b. **Protección de rutas con JWT**  
   Para las rutas que requieren autenticación (como la de modificar y eliminar libros), creamos un middleware que verifica el token JWT incluido en el encabezado `Authorization`. Este middleware asegura que solo los usuarios autenticados puedan acceder a esas rutas.

6. **Implementación de las Rutas CRUD para Libros y Usuarios**
   
   a. **Rutas de Libros**  
   Creamos rutas para las operaciones CRUD con libros. Algunas de estas rutas están protegidas por el middleware de autenticación JWT.
   
   b. **Rutas de Usuarios**  
   Creamos rutas para las operaciones CRUD con usuarios. Estas rutas también están protegidas por el middleware de autenticación JWT.

   Cada una de estas rutas realiza las operaciones correspondientes sobre la base de datos MongoDB utilizando Mongoose.

8. **Uso de Postman para Probar la API**
   
   Usamos Postman para probar la API. Creamos peticiones `POST`, `GET`, `PUT` y `DELETE` para verificar que las rutas funcionan correctamente.

   - **Autenticación de usuario**: Realizamos una solicitud `POST /api/login` enviando las credenciales del usuario. Si las credenciales son correctas, obtenemos el token JWT.

   - **Operaciones con libros y usuarios**: Usamos el token obtenido para hacer solicitudes a las rutas protegidas. Incluimos el token en el encabezado de autorización (`Authorization: Bearer <JWT Token>`) para acceder a las rutas correspondientes.

   
### Estado Actual

<img src="https://img.shields.io/badge/FINALIZADO-GREEN?style=for-the-badge&label=ESTADO">

### Desarrolladores del Proyecto

Este proyecto ha sido realizado únicamente por mí, dando respuesta a una prueba Técnica. para el puesto de Desarrollador Backend.

### Licencia

Sin licencia aplicada.

### Conclusiones 

El proyecto fue desarrollado de manera modular, utilizando Node.js y Express.js para gestionar las rutas y las solicitudes HTTP, MongoDB como base de datos, y JWT para implementar una capa de seguridad mediante autenticación de usuarios. Utilizamos un middleware para verificar los tokens en las rutas protegidas, asegurando que solo los usuarios autenticados puedan realizar determinadas operaciones CRUD sobre los libros y/o usuarios.

Además, el proyecto fue probado utilizando Postman, lo que permitió verificar que la autenticación y las operaciones con la base de datos funcionaban correctamente.

### Contacto
<a href = "mailto:gonllat@gmail.com"><img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"> [![LinkedIn](https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gonzalo-llatser-acuña-6b206a1ba)
