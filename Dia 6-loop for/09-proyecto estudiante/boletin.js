let array = [7, 4, 2, 9, 6];//array de notas

function listarNotas() {
    let lista = document.getElementById("listaNotas");//variable notas del id lista notas
    
    for(let nota of array) {//loop for of donde recorre las notas de la array de notas
        let item = document.createElement("li");//se cera una variable item la cual crea en el documento una listado de notas
        item.innerText = nota;//en la lista creada se muestras las notas de la array de notas
        lista.appendChild(item);//lista trae como un hijo a item
    }
}

function calcularPromedio() {
    let suma = 0;//se variable suma en 0

    for(i=0; i<5; i++) {//loop for donde la condicion es que comience en indice 0, i sea menoa 5 y que sume uno en cada iteracion del loop.
        suma += array[i];//se suma las notas de la array 
    }

    let promedio = (suma / 5);//se crea una variable promedio donde se divide por 5 para sacar el promedios
    document.getElementById("promedio").textContent = promedio;//se muestra en eñ documento el resultado del promedio
}

function notaMasAlta() {
    let notaAlta = 0;//variable que comienza en 0
    let i = 0;//variable de control que comience en 0
    while(i < 5) {//cantidad de notas que debe recorrer 
        if(array[i] > notaAlta) {//la primera nota del array i debe ser mayor a notaAlta que es 0
            notaAlta = array[i];//se sobreescribira el valor de notaAlta conforme avanza el loop
        }
        i++;//i debe sumar un valor con cada vuelta
    }
    document.getElementById("nota").textContent = notaAlta;//se indica en el documento atraves del id de la nota mas alta de la array
}

function hayAplazo() {
    let aplazo = "No";//variable que inidque que no hay aplazos
    let i = 0;//variable de control apra siclar
    do {//mientras
        if(array[i] < 4) {//alguna nota de la array sea menor a 4 siga cicalndo
            aplazo = "Si";//cuando una nota sea inferor la respuesta sera SI
            break;//se pone un break para termina el loop
        } 
        i++;//se be sumar uno en cada vuelta de la variable de control
    } while (i < 5);//todo esto hasta que cicle todas la notas y determine que ya no hay notas inferiores a 4
    document.getElementById("aplazo").textContent = aplazo;//se muestra en el documento del id aplazo las notas que si tienen aplazo
}