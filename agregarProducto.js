function agregarProducto() {

  //javascript normal
  let producto = document.getElementById("productoInput").value;
  let precio = parseInt(document.getElementById("precioInput").value);
  let url = document.getElementById("urlInput").value;

  //precio en jquery
  producto = $("#productoInput").val();

  if(producto == ""){
    alert("debe agregar un nombre");
    return false;
  }

  let productos = localStorage.getItem("productos");
  productos = JSON.parse(productos);
  let agregar = {
    producto: producto,
    precio: precio,
    url: url,
  };

  if (!productos) {
    productos = [];
  }

  productos.push(agregar);

  productos = JSON.stringify(productos);
  localStorage.setItem("productos", productos);
  window.location.reload();
}

var boton = document.getElementById("agregaBtn");


boton.addEventListener("click", function () {
  agregarProducto();
});

//Eliminar prodcuto
function eliminarProducto(id) {
  var resultado = confirm("¿Estás seguro de que deseas continuar?");

  if (resultado) {
    let productos = localStorage.getItem("productos");
    productos = JSON.parse(productos);

    productos = productos.filter((juego) => juego.producto !== id);

    productos = JSON.stringify(productos);
    localStorage.setItem("productos", productos);
    window.location.reload();
  }
}

function mostrarProductos() {
  let productos = localStorage.getItem("productos");
  productos = JSON.parse(productos);

  console.log(productos);
  let tabla = document.getElementById("divProductos");
  let contenido = "";
  if (productos) {
    for (var i = 0; i < productos.length; i++) {
      contenido =
        contenido +
        `<table>
        <td width=300>${productos[i].producto}</td>
        <td width=200>${productos[i].precio}</td>
        <td width=300><img style="width:200px;" src="${productos[i].url}"/></td>
        <td><button class="btn btn-primary" onclick="javascript:eliminarProducto('${productos[i].producto}');">ELIMINAR</button></td>
        <table>`;
    }
    tabla.innerHTML = contenido;
  }
}

mostrarProductos();
