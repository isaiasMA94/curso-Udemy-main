function extraerNumeroDesdeElemento(elemento) {//se pasa un parametro a la funcion desde donde se extrae el numero
    let miElemento = document.getElementById(elemento);//se crea una variable la que extrae el id el parametro elemento
    let mitexto = miElemento.value;//se extrae le valor del elemento que es string
    let miNumero = Number(mitexto);//se trasnforma le valor del elemento a numero

    return miNumero;//devuelve el valor numerico del parametro que se declare en la funcion 
}

function calcular() {
    let ventas1, ventas2, ventas3, ventas4, ventas5, ventas6; //se declaran las 6 variables en una linea

    ventas1 = extraerNumeroDesdeElemento("ventasTienda1");//la funcion trae el valor del parametro, el cual es ingresado en el input por el ususario
    ventas2 = extraerNumeroDesdeElemento("ventasTienda2");
    ventas3 = extraerNumeroDesdeElemento("ventasTienda3");
    ventas4 = extraerNumeroDesdeElemento("ventasTienda4");
    ventas5 = extraerNumeroDesdeElemento("ventasTienda5");
    ventas6 = extraerNumeroDesdeElemento("ventasTienda6");   
    
    let totalVentas = ventas1 + ventas2 + ventas3 + ventas4 + ventas5 + ventas6;//suma de los valores de cada tienda

    let mensajeSalida = "Total Ventas: " + totalVentas;//se declara una variable que muestra la suma total de las ventas
    let elementoSalida = document.getElementById("parrafoSalida");//se crea una variable que extrael el id del parrafo que muestra el resultado de la suma
    
    elementoSalida.textContent = mensajeSalida;//se muestra el mensaje actualizando el valor de elemnto salida.
}