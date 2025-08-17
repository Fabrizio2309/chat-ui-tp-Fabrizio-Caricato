const $contactos = document.querySelector("#lista-contactos")

$contactos = [
  { name: "Vincent Porter", status: "left 7 mins ago" },
  { name: "Aiden Chavez", status: "online" },
  { name: "Mike Thomas", status: "online" },
  { name: "Christian Kelly", status: "left 10 hours ago" },
  { name: "Monica Ward", status: "online" },
  { name: "Dean Henry", status: "offline since Oct 28" }
]

$contactos.forEach(function (contacto) {
  $contactos.innerHTML += `
    <li>
      <div class="contenedor-conexion-usuario">
        <img src="assets/avatar.jpeg" alt="foto de usuario">
          <div class="informacion-de-conexion-de-usuario">
            <strong>${contacto.name}</strong>
            <p>${contacto.status}</p>
          </div>
      </div>
    </li>
    `
})