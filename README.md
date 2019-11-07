# Reactibook 2.0

Red Social creada con ReactJS, Redux, Nodejs, Express y MongoDB hosteado con Netlify.

https://reactibook.netlify.com/

https://reactibook.netlify.com/

https://reactibook.netlify.com/

https://reactibook.netlify.com/


## Funcionalidades

1. Inicio de sesión
    * Usuarios:
        1. Email: flore@reactibook.com Password: 123456789
        2. Email: jorge@reactibook.com Password: 123456789
        3. Email: cesar@reactibook.com Password: 123456789
        4. Email: maria@reactibook.com Password: 123456789
2. Registro de usuarios.
      * Username, Email y Password
3. Creación de posts 
    * Privacidad:
        1. Elegir entre mostrar a todo público o sólo amigos.
    * Contenido:
        1. Visualización de nombre de autor, comentario y fecha.
4. Editar/Borrar posts
    * Reglas:
        1. Solo el usuario que creó el post puede editarlo o borrarlo.
5. Sistema de amigos
    * Reglas:
        1. Según amigo agregado previamente en la base de datos, se muestra o no comentarios. Ej: Soy amigo de Maria y veo todos sus posts, pero no de Jorge, asi que solo veo sus posts públicos.
6. Back End
    * Herramientas:
       1. NodeJS
       2. Express
       3. JSON Web Tokens
       4. BCrypt
       5. Mongoose
       6. MongoDB Atlas
7. Manejo de Estado
    * Herramientas:
        1. Redux
        2. React-Redux
        3. Redux-Thunk
8. Estilos
    * Herramientas:
        1. styled-components
        2. moment (Formato de fechas)
        3. react-icons

8. Dependencias:
   * "moment": "^2.24.0",
   * "react": "^16.11.0",
   * "react-dom": "^16.11.0",
   * "react-icons": "^3.8.0",
   * "react-redux": "^7.1.1",
   * "react-router-dom": "^5.1.2",
   * "react-scripts": "3.2.0",
   * "redux": "^4.0.4",
   * "redux-thunk": "^2.3.0",
   * "styled-components": "^4.4.1"


## Instalación

Para contribuir o correr localmente, `git clone https://github.com/florenciasilva/reactibook.git` en la carpeta deseada, a continuacion `cd reactibook` y luego `npm install` para poder instalar todas las dependencias necesarias para correr el proyecto. Una vez instalado, puedes correr `npm start` para correr el servidor y poder ver la aplicación en `localhost:3000`.

La conexión con el backend se maneja en las Actions, las cuales se encuentran en el directorio `./actions`. 
Para más información sobre los endpoints, se puede dirigir a [este repositorio](https://github.com/florenciasilva/reactibook-api)
