const $listaContactos = document.querySelector("#lista-contactos")
const $inputContactos = document.querySelector("#buscador-contactos")

const contactos = [
  { nombre: "Vincent Porter", estado: "estado-offline", ultimaConexion: "left 7 mins ago" },
  { nombre: "Aiden Chavez", estado: "estado-online", ultimaConexion: "now"  },
  { nombre: "Mike Thomas", estado: "estado-online", ultimaConexion: "now" },
  { nombre: "Christian Kelly", estado: "estado-offline", ultimaConexion: "left 10 hours ago" },
  { nombre: "Monica Ward", estado: "estado-online", ultimaConexion: "now"  },
  { nombre: "Dean Henry", estado: "estado-offline", ultimaConexion: "offline since Oct 28" }
]

const listaDeContactos = (lista) => {
  $listaContactos.innerHTML = ""
  lista.forEach(function (contacto) {
    let nombreClaseEstado = ""
    if ("estado-online" === contacto.estado) {
      nombreClaseEstado = "estado-online"
    } else {
      nombreClaseEstado = "estado-offline"
    }

  $listaContactos.innerHTML += `
    <li>
      <div class="contenedor-conexion-usuario">
        <img src="assets/avatar.jpeg" alt="foto de usuario">
          <div class="informacion-de-conexion-de-usuario">
            <strong>${contacto.nombre}</strong>
            <p class="${nombreClaseEstado}">${contacto.ultimaConexion}</p>
          </div>
      </div>
    </li>
    `
  })
}

listaDeContactos(contactos)

$inputContactos.addEventListener("input", busquedaContactos)

function busquedaContactos() {
  const valorInput = $inputContactos.value.toLowerCase()
  const contactosFiltrados = []

  contactos.forEach(function (contacto) {
    const nombreContacto = contacto.nombre.toLowerCase() 
    if (nombreContacto.includes(valorInput)) {
      contactosFiltrados.push(contacto)
    }
  })
  listaDeContactos(contactosFiltrados)
}