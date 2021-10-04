var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var filtrosTipo = [];
var filtrosMarca = [];
var checkbox = document.getElementsByTagName("input");
for (i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener("change", function () {
    var checked = this.checked;
    if (checked) {
      if (this.value == "marca") {
        filtrosMarca.push(this.id.substring(4));
      } else if (this.value == "tipo") {
        filtrosTipo.push(this.id.substring(4));
      }
    } else {
      var numero = filtrosMarca.indexOf(this.id.substring(4));
      numero !== -1 && filtrosMarca.splice(numero, 1);
      numero = filtrosTipo.indexOf(this.id.substring(4));
      numero !== -1 && filtrosTipo.splice(numero, 1);
    }
    mostrarProductosFiltrados();
  });
}

function mostrarProductos() {
  var urlParams = new URLSearchParams(window.location.search);
  var tipoProducto = urlParams.get("tipo");
  var arreglo;

  if (tipoProducto != null) {
    document.getElementById("cbox" + tipoProducto).checked = true;
    acc[0].classList.toggle("active");
    acc[0].nextElementSibling.style.display = "block";
    arreglo = arregloProductos.filter(
      (producto) => producto.tipo == tipoProducto
    );
  } else {
    arreglo = arregloProductos;
  }

  var divProductos = document.getElementById("divProductos");

  for (var i = 0; i < arreglo.length; i++) {
    var nombre = document.createElement("h4");
    var precio = document.createElement("h2");
    var marca = document.createElement("h6");
    var imagen = document.createElement("img");
    var card = document.createElement("div");

    nombre.innerHTML = arreglo[i].nombre;
    precio.innerHTML =
      "$" + new Intl.NumberFormat("de").format(arreglo[i].precio);

    marca.innerHTML = arreglo[i].marca.toUpperCase();
    imagen.setAttribute("src", arreglo[i].imagen);
    card.setAttribute("class", "card");
    card.setAttribute("onclick", "mostrarProducto(" + arreglo[i].id + ")");
    card.appendChild(imagen);
    card.appendChild(marca);
    card.appendChild(nombre);
    card.appendChild(precio);
    divProductos.appendChild(card);
  }
}

function filtrarPorTipoMarca(obj) {
  var seEncuentre = false;
  if (filtrosMarca.length != 0 && filtrosTipo.length != 0) {
    for (var i = 0; i < filtrosMarca.length; i++) {
      if (obj.marca == filtrosMarca[i]) {
        for (var i = 0; i < filtrosTipo.length; i++) {
          if (obj.tipo == filtrosTipo[i]) {
            seEncuentre = true;
          }
        }
      }
    }
  } else {
    if (filtrosMarca.length != 0) {
      for (var i = 0; i < filtrosMarca.length; i++) {
        if (obj.marca == filtrosMarca[i]) {
          seEncuentre = true;
        }
      }
    } else if (filtrosTipo.length != 0) {
      for (var i = 0; i < filtrosTipo.length; i++) {
        if (obj.tipo == filtrosTipo[i]) {
          seEncuentre = true;
        }
      }
    }
  }
  return seEncuentre;
}

function mostrarProductosFiltrados() {
  var arreglo;
  if (filtrosMarca.length != 0 || filtrosTipo.length != 0) {
    arreglo = arregloProductos.filter(filtrarPorTipoMarca);
  } else {
    arreglo = arregloProductos;
  }

  var divProductos = document.getElementById("divProductos");
  divProductos.innerHTML = "";
  var titulo = document.createElement("h2");
  titulo.setAttribute("class", "titulo");
  titulo.innerHTML = "Productos";
  divProductos.appendChild(titulo);

  if (arreglo.length != 0) {
    for (var i = 0; i < arreglo.length; i++) {
      var nombre = document.createElement("h4");
      var precio = document.createElement("h2");
      var marca = document.createElement("h6");
      var imagen = document.createElement("img");
      var card = document.createElement("div");

      nombre.innerHTML = arreglo[i].nombre;
      precio.innerHTML =
        "$" + new Intl.NumberFormat("de").format(arreglo[i].precio);

      marca.innerHTML = arreglo[i].marca.toUpperCase();
      imagen.setAttribute("src", arreglo[i].imagen);
      card.setAttribute("class", "card");
      card.setAttribute("onclick", "mostrarProducto(" + arreglo[i].id + ")");
      card.appendChild(imagen);
      card.appendChild(marca);
      card.appendChild(nombre);
      card.appendChild(precio);
      divProductos.appendChild(card);
    }
  } else {
    var texto = document.createElement("p");
    texto.setAttribute("class", "busqueda");
    texto.innerHTML = "No se encontro ningun producto.";
    divProductos.appendChild(texto);
  }
}

mostrarProductos();
