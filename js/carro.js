var carrito = getCarrito();
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

if (carrito.length != 0) {
  var total = 0;
  var divProductos = document.getElementById("divProductos");

  for (var i = 0; i < carrito.length; i++) {
    var producto = arregloProductos.find(
      (item) => item.id === carrito[i].idProducto
    );

    var nombre = document.createElement("h4");
    var precio = document.createElement("h2");
    var marca = document.createElement("h6");
    var imagen = document.createElement("img");
    var cantidad = document.createElement("label");
    var botonMas = document.createElement("button");
    var botonMenos = document.createElement("button");
    var descripcion = document.createElement("div");
    var divPrecio = document.createElement("div");
    var divCantidad = document.createElement("div");
    var card = document.createElement("div");

    nombre.innerHTML = producto.nombre;
    precio.innerHTML =
      "$" + new Intl.NumberFormat("de").format(producto.precio);

    marca.innerHTML = producto.marca.toUpperCase();
    imagen.setAttribute("src", producto.imagen);
    imagen.setAttribute("class", "imagen");
    cantidad.setAttribute("class", "cantidadTotal");
    cantidad.innerHTML = carrito[i].cantidad;
    botonMas.innerHTML = "+";
    botonMas.setAttribute("class", "btn");
    botonMas.setAttribute(
      "onclick",
      "agregaCantidad(" + carrito[i].idProducto + ")"
    );
    botonMenos.innerHTML = "-";
    botonMenos.setAttribute("class", "btn");
    botonMenos.setAttribute(
      "onclick",
      "quitaCantidad(" + carrito[i].idProducto + ")"
    );

    descripcion.setAttribute("class", "descripcion");
    descripcion.appendChild(marca);
    descripcion.appendChild(nombre);
    divPrecio.setAttribute("class", "precio");
    divPrecio.appendChild(precio);
    divCantidad.setAttribute("class", "cantidad");
    divCantidad.appendChild(botonMenos);
    divCantidad.appendChild(cantidad);
    divCantidad.appendChild(botonMas);
    card.setAttribute("class", "card");
    card.appendChild(imagen);
    card.appendChild(descripcion);
    card.appendChild(divPrecio);
    card.appendChild(divCantidad);
    divProductos.appendChild(card);

    total += producto.precio * carrito[i].cantidad;
  }
  document.getElementById("total").innerHTML =
    "$" + new Intl.NumberFormat("de").format(total);
} else {
  var divProductos = document.getElementById("divProductos");
  var texto = document.createElement("h2");
  texto.innerHTML = "No existen compras.";
  divProductos.appendChild(texto);
  document.getElementById("resumenCompra").style.visibility = "hidden";
}

function agregaCantidad(idProducto) {
  var productoMod = new Object();
  productoMod.idProducto = idProducto;
  productoMod.cantidad = 1;
  setCarrito(productoMod);
  location.reload();
}

function quitaCantidad(idProducto) {
  var productoMod = new Object();
  productoMod.idProducto = idProducto;
  productoMod.cantidad = -1;
  setCarrito(productoMod);
  location.reload();
}

function comprar() {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
  sessionStorage.removeItem("carrito");
  location.reload();
};
