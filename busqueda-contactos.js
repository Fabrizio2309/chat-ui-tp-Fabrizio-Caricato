const $listaContactos = document.querySelector("#lista-contactos")

contactos = [
  { nombre: "Vincent Porter", estado: "estado-offline", ultimaConexion: "left 7 mins ago" },
  { nombre: "Aiden Chavez", estado: "estado-online", ultimaConexion: "now"  },
  { nombre: "Mike Thomas", estado: "estado-online", ultimaConexion: "now" },
  { nombre: "Christian Kelly", estado: "estado-offline", ultimaConexion: "left 10 hours ago" },
  { nombre: "Monica Ward", estado: "estado-online", ultimaConexion: "now"  },
  { nombre: "Dean Henry", estado: "estado-offline", ultimaConexion: "offline since Oct 28" }
]

contactos.forEach(function (contacto) {
  $listaContactos.innerHTML += `
    <li>
      <div class="contenedor-conexion-usuario">
        <img src="assets/avatar.jpeg" alt="foto de usuario">
          <div class="informacion-de-conexion-de-usuario">
            <strong>${contacto.nombre}</strong>
            <p class="${contacto.estado }">${contacto.ultimaConexion}</p>
          </div>
      </div>
    </li>
    `
})