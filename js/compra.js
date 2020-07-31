const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra');



cargarEventos();

function cargarEventos() {
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

    //Eliminar productos del carrito
    carrito.addEventListener('click', (e) => { compra.eliminarProducto(e) });

    compra.calcularTotal();

    //cuando se selecciona procesar Compra en Efectivo
    procesarCompraBtn.addEventListener('click', procesarCompra);


    carrito.addEventListener('change', (e) => { compra.obtenerEvento(e) });
    carrito.addEventListener('keyup', (e) => { compra.obtenerEvento(e) });


}

function procesarCompra() {
        
       var request = require('request'); //bash: npm install request
         // URL for request POST /message
       var url =  'https://eu146.chat-api.com/instance156280/';
       var data = {
        phone: '593979025335', // Receivers phone
        body: 'Hello, world!', // Message
       };
      // Send a request
       request({
       url: url,
       method: "POST",
       json: data
    });
   
}





