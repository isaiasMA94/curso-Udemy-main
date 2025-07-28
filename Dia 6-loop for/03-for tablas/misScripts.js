function multiplicar() {
    //obetener el numero
    let elementoTextoTabla = document.getElementById("textoTabla");
    let textoNumeroTabla = elementoTextoTabla.value;
    let numeroTabla = Number(textoNumeroTabla);

    //obtener la tabla 
    let elementoTablaMultiplicar = document.getElementById("listaTabla");

    //producir y mostrar resultados
    for(x=1; x<=10; x++) {
        //calcular resultado
        let numeroResultado = numeroTabla * x;
    
        //armar string con resultado
        let textoResultado = numeroTabla +" por "+ x +" es igual "+ numeroResultado;

        //crear un elemnto de la lista
        let itemLista = document.createElement("li");
        itemLista.innerText = textoResultado;
        elementoTablaMultiplicar.appendChild(itemLista);
    }    
}