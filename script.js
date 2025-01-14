const cargarPersonajes = async () => {
  try {
    const respuesta = await fetch(
      `https://thronesapi.com/api/v2/Characters`
    );
    /*fetch solo lanza una excepción si ocurre un problema de red, como no poder conectarse al servidor, una URL malformada, o si la solicitud es bloqueada por políticas de CORS.*/
    console.log(respuesta);
    // Si la respuesta es correcta
    if (respuesta.status === 200) {
      const datos = await respuesta.json();

      let contenedor = document.getElementById("contenedor");
      let inputBusqueda = document.getElementById("buscador");
      let selectCasa = document.getElementById("filtroCasa");

      // Obtener las casas distintas
      const casas = [...new Set(datos.map(personaje => personaje.family))];

      casas.forEach(casa => {
        let option = document.createElement("option");
        option.value = casa;
        option.textContent = casa;
        selectCasa.appendChild(option);
      });

      function mostrarPersonajes(personajes) {
        contenedor.innerHTML = "";
        for (let i = 0; i < personajes.length; i++) {
          let personaje = personajes[i];

          let figure = document.createElement("figure");
          figure.classList.add("personaje")

          let img = document.createElement("img");
          img.src = personaje.imageUrl;
          img.classList.add("imagen")

          let figcaption = document.createElement("figcaption");
          figcaption.textContent = personaje.fullName;
          figcaption.classList.add("nombre")

          figure.appendChild(img)
          figure.appendChild(figcaption)
          contenedor.appendChild(figure);

        };
      }

      function filtrarPersonajes() {
        const textoBusqueda = inputBusqueda.value.toLowerCase();
        const casaSeleccionada = selectCasa.value;

        const personajesFiltrados = datos.filter(function (personaje) {
            const coincideNombre = personaje.fullName.toLowerCase().includes(textoBusqueda);
            const coincideCasa = casaSeleccionada ? personaje.family === casaSeleccionada : true;
            return coincideNombre && coincideCasa;
        });

        mostrarPersonajes(personajesFiltrados);
    }

    mostrarPersonajes(datos);

    inputBusqueda.addEventListener("input", filtrarPersonajes);

    selectCasa.addEventListener("change", filtrarPersonajes);


    } else if (respuesta.status === 401) {//Unauthorized
      console.log("Pusiste la llave mal");
    } else if (respuesta.status === 404) {//Not Found
      console.log("El personaje que buscas no existe");
    } else {
      console.log("Hubo un error y no sabemos que paso");
    }
  } catch (error) {
    console.log(error);
  }
};
cargarPersonajes();