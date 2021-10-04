var urlParams = new URLSearchParams(window.location.search);
var idProducto = urlParams.get("id");
var producto;
var imagenes = [];

if (idProducto != null) {
  producto = arregloProductos.find((item) => item.id == idProducto);
  var divImagenes = document.getElementById("divImagenes");
  var divInformacion = document.getElementById("divInformacion");

  var nombre = document.createElement("h1");
  var precio = document.createElement("h2");
  var marca = document.createElement("h6");
  var boton = document.createElement("button");

  nombre.innerHTML = producto.nombre;
  precio.innerHTML = "$" + new Intl.NumberFormat("de").format(producto.precio);

  marca.innerHTML = producto.marca.toUpperCase();
  imagenes.push("url('" + producto.imagen + "')");
  imagenes.push("url('" + producto.imagen2 + "')");

  var imagenPrincipal = document.querySelectorAll(".imagen-principal")[0];
  var subImagenes = document.querySelectorAll('[class *= "subImagen-"]');

  imagenPrincipal.style.backgroundImage = imagenes[0];
  subImagenes[0].style.backgroundImage = imagenes[0];
  subImagenes[1].style.backgroundImage = imagenes[1];

  subImagenes[0].addEventListener("mouseover", accion0);
  subImagenes[1].addEventListener("mouseover", accion1);

  boton.setAttribute("class", "btn");
  boton.innerHTML = "Agregar al carrito";
  boton.setAttribute("onclick", "agregarCarrito()");

  divInformacion.appendChild(marca);
  divInformacion.appendChild(nombre);
  divInformacion.appendChild(precio);
  divInformacion.appendChild(boton);
} else {
  window.location.href = "/index.html";
}

function accion0() {
  imagenPrincipal.style.backgroundImage = imagenes[0];
}
function accion1() {
  imagenPrincipal.style.backgroundImage = imagenes[1];
}

function agregarCarrito() {
  var productoCarrito = new Object();
  productoCarrito.idProducto = producto.id;
  productoCarrito.cantidad = 1;
  setCarrito(productoCarrito);

  var badge = document.getElementById("carrito");
  var lista = getCarrito();
  badge.setAttribute("badge", lista.length);
  alert("el producto al carro de compra.");
}
