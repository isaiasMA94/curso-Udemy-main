function consultaPrecio() {
    let elementoRespuesta = document.getElementById("textoPrecio");

    let elementoFruta = document.getElementById("numeroFruta");
    let fruta = elementoFruta.value;

    switch (fruta) {
        case "1":
            elementoRespuesta.textContent = "$3.50";
            break;
        case "2":
            elementoRespuesta.textContent = "$4.50";
            break;
        case "3":
            elementoRespuesta.textContent = "$6.89";
            break;
        case "4":
            elementoRespuesta.textContent = "$7.90";
            break;
        case "5":
            elementoRespuesta.textContent = "$2.67";
            break;    
    }
}