// seleccionamos en el documento HTML las clases de los elementos HTML y los guardamos en variables
const $inputMensaje = document.querySelector(".contenedor-envio-mensaje input")
const $contenedorMensajes = document.querySelector(".contenedor-mensajes")
const $botonEnvio = document.querySelector(".boton-enviar")

//El boton de envio realiza un evento en este caso, de un click (primer parametro: que queremos que "escuche") y luego la ejecucion de la funcion envioDeMensaje (segundo parametro: que queremos que haga)
$botonEnvio.addEventListener("click", envioDeMensaje)

//funcion para enviar un mensaje escrito del $inputMensaje
function envioDeMensaje() {
  // tomamos el valor del input
  const mensaje = $inputMensaje.value

  //con un template-string creamos el elemento HTMl con sus respectivas clases o id
  $contenedorMensajes.innerHTML += `
    <div class="contenedor-mensajes-derecha">
      <p>${mensaje}</p>
      <p class="hora-conexion">${new Date().toLocaleTimeString()}</p>
    </div>
  `
  
  //al enviar el mensaje, el input vuelve a estar vacio
  $inputMensaje.value = ""

  // funcion que va a dar la respuesta automatica
  setTimeout(function () {
  $contenedorMensajes.innerHTML += `
    <div id="mensaje-recibido">
      <p>Recibido: ${mensaje}</p>
      <p class="hora-conexion">${new Date().toLocaleTimeString()}</p>
    </div>
  `
  }, 3000)
}