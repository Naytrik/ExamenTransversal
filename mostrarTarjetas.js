function mostrarProductos(){
    let productos = localStorage.getItem('productos');
    productos = JSON.parse(productos);
   
    console.log(productos)
    let div = document.getElementById('divTarjetas');
    let contenido = '';
    if(productos){
    for (var i = 0; i < productos.length; i++) {
         contenido = contenido + `<div class="row text-center mt-3">
         <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3">
           <div class="card shadow">
             <div class="card-body">
               <h5 class="card-title">${productos[i].producto}</h5>
               <p class="card-text">
              <img src="${productos[i].url}" style="width:100%;">
               </p>
               <a href="#" class="btn btn-info">Precio ${productos[i].precio}</a>
             </div>
           </div>
         </div>
       </div>`
        
        
      };



      div.innerHTML = contenido;
    }
}

mostrarProductos();