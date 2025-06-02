function evaluarCompra() {
    let elementoRespuesta = document.getElementById("Descicion");
    
    let elementoPrecio = document.getElementById("textoPrecio");
    let Precio = elementoPrecio.value;

    if (Precio < 5 ) {
        elementoRespuesta.textContent = "Comprar dos cartones de leche"
    }

}