function ValidarDatos() {
  var nombre = document.getElementById("nombre");
  var correo = document.getElementById("correo");
  var mensaje = document.getElementById("mensaje");

  if (nombre.value == "") {
    nombre.classList.add("error");
  } else {
    nombre.classList.remove("error");
  }

  if (correo.value == "") {
    correo.classList.add("error");
  } else {
    correo.classList.add("success");
  }

  if (mensaje.value == "") {
    mensaje.classList.add("error");
  } else {
    mensaje.classList.add("success");
  }
}
