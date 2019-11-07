# Reactibook 

Red Social creada con ReactJS, Redux y Firebase.

## Funcionalidades

1. Inicio de sesión
    * Usuarios:
        1. Email: flor@reactibook.com Password: Test12345
        2. Email: jorge@reactibook.com Password: Test12345
        3. Email: kevin@reactibook.com Password: Test12345
        4. Email: maria@reactibook.com Password: Test12345
2. Creación de posts 
    * Privacidad:
        1. Elegir entre mostrar a todo público o sólo amigos.
    * Contenido:
        1. Visualización de nombre de autor, comentario y fecha.
3. Editar/Borrar posts
    * Reglas:
        1. Solo el usuario que creó el post puede editarlo o borrarlo.
4. Sistema de amigos
    * Reglas:
        1. Según amigo agregado previamente en la base de datos, se muestra o no comentarios. Ej: Soy amigo de Maria y veo todos sus posts, pero no de Jorge, asi que solo veo sus posts públicos.
5. Base de Datos
    * Herramientas:
        1. Firebase Authentication
        2. Cloud Firestore
        3. Firebase Hosting
6. Manejo de Estado
    * Herramientas:
        1. Redux
        2. React-Redux
        3. Redux-Thunk
7. Estilos
    * Herramientas:
        1. styled-components
        2. react-materialize
        3. moment (Formato de fechas)

8. Dependencias:
   * "firebase": "^5.3.0",
   * "moment": "^2.23.0",
   * "react": "^16.4.1",
   * "react-autosize-textarea": "^6.0.0",
   * "react-dom": "^16.4.1",
   * "react-dropzone": "^8.0.3",
   * "react-firebase-file-uploader": "^2.4.2",
   * "react-materialize": "^2.6.0",
   * "react-redux": "^5.0.7",
   * "react-redux-firebase": "^2.1.6",
   * "react-router-dom": "^4.3.1",
   * "react-scripts": "1.1.4",
   * "redux": "^4.0.0",
   * "redux-firestore": "^0.5.7",
   * "redux-thunk": "^2.3.0",
   * "styled-components": "^4.1.3"

9. Cuidado de Rutas:
    * Solo usuarios conectados pueden ver y crear posts.
    * Usuarios conectados no veran la sección para inicio de sesión

## Instalación

Para contribuir o correr localmente, `git clone `https://github.com/florenciasilva/reactibook.git' en la carpeta deseada, a continuacion `cd reactibook` y luego `npm install` para poder instalar todas las dependencias necesarias para correr el proyecto. Una vez instalado, puedes correr `npm start` para correr el servidor y poder ver la aplicación en `localhost:3000`.
