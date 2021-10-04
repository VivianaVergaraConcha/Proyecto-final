var arregloProductos;

function crearObjeto(id, nombre, marca, precio, tipo, imagen, imagen2, genero) {
  var producto = new Object();
  producto.id = id;
  producto.nombre = nombre;
  producto.marca = marca;
  producto.precio = precio;
  producto.tipo = tipo;
  producto.imagen = imagen;
  producto.imagen2 = imagen2;
  producto.genero = genero;
  return producto;
}

arregloProductos = [];
arregloProductos.push(
  crearObjeto(
    1,
    "Zapatillas Urbana Mujer",
    "Disney",
    19990,
    "Zapatillas",
    "./img/productos/zapato-1.1.jfif",
    "./img/productos/zapato-1.2.jfif",
    "Mujer"
  )
);
arregloProductos.push(
  crearObjeto(
    2,
    "Zapatillas Urbana Mujer",
    "Disney",
    24990,
    "Zapatillas",
    "./img/productos/zapato-2.1.jfif",
    "./img/productos/zapato-2.2.jfif",
    "Mujer"
  )
);
arregloProductos.push(
  crearObjeto(
    3,
    "Zapatillas Urbana Mujer",
    "Disney",
    19990,
    "Zapatillas",
    "./img/productos/zapato-3.1.jfif",
    "./img/productos/zapato-3.2.jfif",
    "Mujer"
  )
);
arregloProductos.push(
  crearObjeto(
    4,
    "Chuck Taylor All Star Eva Lift",
    "Converse",
    39990,
    "Zapatillas",
    "./img/productos/zapato-4.1.jfif",
    "./img/productos/zapato-4.2.jfif",
    "Mujer"
  )
);
arregloProductos.push(
  crearObjeto(
    5,
    "Grand Court Base",
    "Adidas",
    37990,
    "Zapatillas",
    "./img/productos/zapato-5.1.jfif",
    "./img/productos/zapato-5.2.jfif",
    "Mujer"
  )
);
arregloProductos.push(
  crearObjeto(
    6,
    "Incite Metallic",
    "Puma",
    39990,
    "Zapatillas",
    "./img/productos/zapato-6.1.jfif",
    "./img/productos/zapato-6.2.jfif",
    "Mujer"
  )
);
arregloProductos.push(
  crearObjeto(
    7,
    "Sandalia Mujer Beige",
    "Michael Kors",
    104990,
    "Sandalias",
    "./img/productos/zapato-7.1.jpg",
    "./img/productos/zapato-7.2.jpg",
    "Mujer"
  )
);
arregloProductos.push(
  crearObjeto(
    8,
    "Sandalia Mujer Beige",
    "Basement",
    29990,
    "Sandalias",
    "./img/productos/zapato-8.1.jpg",
    "./img/productos/zapato-8.2.jpg",
    "Mujer"
  )
);
arregloProductos.push(
  crearObjeto(
    9,
    "Sandalia Mujer Cuero Beige",
    "Mango",
    59990,
    "Sandalias",
    "./img/productos/zapato-9.1.jpg",
    "./img/productos/zapato-9.2.jpg",
    "Mujer"
  )
);
arregloProductos.push(
  crearObjeto(
    10,
    "Sandalia Mujer Camel",
    "Michael Kors",
    74990,
    "Sandalias",
    "./img/productos/zapato-10.1.jpg",
    "./img/productos/zapato-10.2.jpg",
    "Mujer"
  )
);
arregloProductos.push(
  crearObjeto(
    11,
    "Zapato Casual Hombre Cuero Café",
    "Guante",
    49990,
    "Zapatos",
    "./img/productos/zapato-11.1.jpg",
    "./img/productos/zapato-11.2.jpg",
    "Hombre"
  )
);
arregloProductos.push(
  crearObjeto(
    12,
    "Zapato Casual Hombre Azul",
    "Newport",
    29990,
    "Zapatos",
    "./img/productos/zapato-12.1.jpg",
    "./img/productos/zapato-12.2.jpg",
    "Hombre"
  )
);
arregloProductos.push(
  crearObjeto(
    13,
    "Zapato Formal Hombre Negro",
    "Basement",
    23990,
    "Zapatos",
    "./img/productos/zapato-13.1.jpg",
    "./img/productos/zapato-13.2.jpg",
    "Hombre"
  )
);
arregloProductos.push(
  crearObjeto(
    14,
    "Zapato Formal Hombre Cuero Café",
    "Basement",
    34900,
    "Zapatos",
    "./img/productos/zapato-14.1.jpg",
    "./img/productos/zapato-14.2.jpg",
    "Hombre"
  )
);

function mostrarProducto(idProducto) {
  window.location.href = "./producto.html?id=" + idProducto;
}

var badge = document.getElementById("carrito");
var lista = getCarrito();
badge.setAttribute("badge", lista.length);
