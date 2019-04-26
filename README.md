![](https://res.cloudinary.com/ironhack83/image/upload/v1556265583/capturas%20readme/logo_yrox0b.png)

# Movieland App 

Es una aplicación que consiste en una biblioteca de películas. Cada usuario realiza una búsqueda mediante keywords a través del buscador que se encuentra en su perfil, para así encontrar la película que quiere ver y, más tarde, añadirla a la colección de películas que quiere ver o a las peliculas que ya ha visto.

### Planteamiento
  - Búsqueda de un mínimo producto viable **(MVP)**, debido al tiempo de ejecución. Es una aplicación sencilla para practicar las **operaciones CRUD**, con trabajo de back-end y de front-end.
  - Primero analizamos el flujo de la aplicación a través de unos modelos que hemos desarrollado utilizando **Sketch**.
  - Más tarde, buscamos una **API** que tuviese toda la información necesaria que necesitábamos de las peliculas para, a continuación, preparar los distintos endpoints.
   
  ![](https://res.cloudinary.com/ironhack83/image/upload/v1556265878/capturas%20readme/Captura_de_pantalla_2019-04-26_a_las_10.04.19_r53vjp.png)
  
  - Realizamos el resumen de **routes** que debíamos crear.
  - También utilizamos **Trello** para con sus tickets tener un listado de las implementaciones que teníamos que realizar y así poder distribuir el trabajo del equipo.
  ![](https://res.cloudinary.com/ironhack83/image/upload/v1556265590/capturas%20readme/trello_o8n4f7.png)
  
  - Por supuesto, creamos un **repositorio en Github**.

### Puesta en marcha


**Creamos un IronGenerate auth** para las instalaciones básicas de Express,passport etc.
**Creamos 2 modelos:** User y Movies
**Vistas en handlebars, y rutas**

**LO QUE MÁS NOS HA COSTADO IMPLEMENTAR** ha sido fusionar el ID de usuario con el ID de las peliculas y obtener dos arrays distintos (quiero verla y vista). Fue muy importante guardar las peliculas que nos vienen de la API para poder guardarlas en nuestra base de datos de peliculas y de esta manera nos ahorrabamos hacer peticiones constantes a la API de Omdb.
![](https://res.cloudinary.com/ironhack83/image/upload/v1556265590/capturas%20readme/arrays_irri7k.png)
![](https://res.cloudinary.com/ironhack83/image/upload/v1556266610/capturas%20readme/Captura_de_pantalla_de_2019-04-26_10-12-36_1_e59evw.png)

### Posibles mejoras
Nos hubiera gustado **incluir algunas otras funcionalidades**: 

- que los usuarios pudieran interactuar entre ellos, en el entorno de una social network. 
- poder realizar comentarios sobre las peliculas que han visto los usuarios y así poder valorarlas. De esta forma, el resto de usuarios de la aplicación que les siguieran  pudieran leerlas y tomar referencias. 
- implementar un login social, para así facilitar el acceso a los usuarios y poder incluir la foto de su perfil. Así, podríamos transformar un poco la página profile en el dashboard y tener un profile completo para cada usuario.
- hemos optado por tener una interfaz muy limpia y funcional. Se podrían haber incorporado ciertas mejoras, con las que fuera una app más potente.

### Trabajo en equipo

  - En base a nuestros conocimientos, hemos aprendido a trabajar en ramas en equipo y de manera más profesional. Analizar, plantear e implementar ha sido básico para la organización.
  
### Screenshots :
![](https://res.cloudinary.com/ironhack83/image/upload/v1556266618/capturas%20readme/Captura_de_pantalla_de_2019-04-26_10-10-18_zxr6oa.png)
![](https://res.cloudinary.com/ironhack83/image/upload/v1556267197/capturas%20readme/Captura_de_pantalla_de_2019-04-26_10-07-35_evnllz.png)

**Gracias a TA´s, Lead Teacher y compañeros por su comprensión y apoyo.**

![](https://media3.giphy.com/media/2Yc1KzQHIPky8r3lJg/200w.webp?cid=790b76115cc2b906435435796b4fb755&rid=200w.webp)
