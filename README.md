# API_JuegoDeTronos
Breve descripción del proyecto

Este proyecto consiste en la integración de la API de Juego de Tronos para mostrar información sobre los personajes de la serie, como nombre completo, título, familia y las imágenes asociadas. Los usuarios pueden filtrar los personajes por nombre o por familia, además de visualizar los resultados mediante una interfaz web que se comunica con la API para obtener los datos en tiempo real.
URL de la API utilizada
La URL base de la API de Juego de Tronos es: https://thronesapi.com/api/v2/

Ejemplo de una consulta (URL de prueba con parámetros)

Una consulta de ejemplo para obtener todos los personajes sería la siguiente:
GET https://thronesapi.com/api/v2/Characters

Si deseas filtrar por una familia específica (por ejemplo, 'House Stark'), la URL de la consulta podría ser:
GET https://thronesapi.com/api/v2/Characters?family=House%20Stark

Problemas encontrados y cómo los solucionaste

1. Para crear un array con todas las casas para luego añadirlas al SELECT, he creado un Set, asi no hay valores duplicados.

2. La API está mal creada, y al nombrar los nombres de las casas, el autor las ha escrito mal. Es decir, las ha escrito de diferente forma en diferentes personajes, 
por lo que en el SELECT salen como casas distintas.


¿Qué tipo de datos ofrece (clima, películas, imágenes, etc.)?

Esta API proporciona datos sobre personajes de Juego de Tronos, como nombre completo, título, familia, imagen, etc. La información 
incluye tanto detalles sobre cada personaje (nombre, título, familia) como las URLs de las imágenes asociadas.

¿Es necesario obtener una clave de API (API Key) para realizar consultas?

No es necesario obtener una clave de API para realizar consultas en esta API. Se puede acceder a los datos directamente a través 
de las URLs proporcionadas sin autenticación.

¿Cómo se estructura una solicitud a la API? (Método HTTP, parámetros requeridos, URL base).

Método HTTP: GET
Parámetros requeridos: No requiere parámetros obligatorios, pero puedes especificar diferentes recursos o filtros.
URL base: https://thronesapi.com/api/v2/
Por ejemplo, para obtener todos los personajes, la URL sería https://thronesapi.com/api/v2/Characters.
