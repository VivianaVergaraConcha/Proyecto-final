function obtenerProductosAleatorios() {
  var arregloAleatorio = [];
  var item;
  for (var i = 0; i < 8; i++) {
    do {
      item =
        arregloProductos[Math.floor(Math.random() * arregloProductos.length)];
    } while (repetido(item, arregloAleatorio) != false);

    arregloAleatorio.push(item);
  }
  return arregloAleatorio;
}

function repetido(item, arregloAleatorio) {
  var repetido = false;
  for (i = 0; i < arregloAleatorio.length; i++) {
    if (item.id == arregloAleatorio[i].id) {
      repetido = true;
    }
  }
  return repetido;
}

function mostrarProductos(nombreDiv) {
  var arregloAleatorio = obtenerProductosAleatorios();
  var divProductos = document.getElementById(nombreDiv);

  for (var i = 0; i < arregloAleatorio.length; i++) {
    var nombre = document.createElement("h4");
    var precio = document.createElement("h2");
    var marca = document.createElement("h6");
    var imagen = document.createElement("img");
    var card = document.createElement("div");
    var boton = document.createElement("button");

    nombre.innerHTML = arregloAleatorio[i].nombre;
    precio.innerHTML =
      "$" + new Intl.NumberFormat("de").format(arregloAleatorio[i].precio);

    marca.innerHTML = arregloAleatorio[i].marca.toUpperCase();
    imagen.setAttribute("src", arregloAleatorio[i].imagen);
    boton.innerHTML = "Ver producto";
    boton.setAttribute(
      "onclick",
      "mostrarProducto(" + arregloAleatorio[i].id + ")"
    );
    card.setAttribute("class", "card");
    card.appendChild(imagen);
    card.appendChild(marca);
    card.appendChild(nombre);
    card.appendChild(precio);
    card.appendChild(boton);
    divProductos.appendChild(card);
  }
}

mostrarProductos("divProductos");
mostrarProductos("divMejorSemana");
