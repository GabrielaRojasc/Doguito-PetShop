const crearNuevaLinea = () => {
    `<tr>
    <td class="td" data-td>Gabriela</td>
    <td>gabriela@alura.com</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html"
            class="simple-button simple-button--edit"
            >Editar</a
          >
        </li>
        <li>
          <button
            class="simple-button simple-button--delete"
            type="button"
          >
            Eliminar
          </button>
        </li>
      </ul>
    </td>
  </tr>`
};


const http = new XMLHttpRequest(); //una clase que comunica entre el frontend y el backend

//Abrir http(metodo,url)
//crud - metodos http (GET,POST,PUT/PATCH,DELETE)
//Abrir http(open recibe dos parametros, recibe el metodo,y la url)
http.open("GET", "http://localhost:3000/perfil"); // en lugar de que el navegador se encargue de obtener la informacion, ponemos que sea js se encaargue de esa tarea

http.send(); //se va a encargar de enviar la peticion, desde nuestro navegar o  pryecto esta saliendo hacia el servidor que se encuentra en esta url

http.onload = ( )=>{ //una vez que cargues o termines de recibir una respuesta, vas a de ejecutar una funcion

    const data = http.response
    console.log(data); //nos regresa la informacion que tenemos en el servidor
} 
console.log(http);