var nombreVariable = "carrito";

function getCarrito() {
  var listaString = sessionStorage.getItem(nombreVariable);
  var carrito = [];
  if (listaString) {
    carrito = JSON.parse(listaString);
  }
  return carrito;
}

function setCarrito(obj) {
  var carrito = getCarrito();

  if (carrito.length != 0) {
    var numero = carrito.findIndex(
      (item) => item.idProducto === obj.idProducto
    );
    if (numero !== -1) {
      carrito[numero].cantidad += obj.cantidad;
      if (carrito[numero].cantidad == 0) {
        carrito.splice(numero, 1);
      }
    } else {
      carrito.push(obj);
    }
  } else {
    carrito.push(obj);
  }

  sessionStorage.setItem(nombreVariable, JSON.stringify(carrito));
}

function getTotalCarrito() {
  var carrito = getCarrito();
  var total = 0;
  carrito.forEach(function (item) {
    total += item.precio;
  });
  return total;
}
