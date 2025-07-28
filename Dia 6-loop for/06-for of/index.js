//Implementar en la función testLoop, 
// un Loop For Of que recorra miArray y 
// en cada vuelta del ciclo, vaya acumulando
//  en la variable suma el valor de los 
// numeros contenidos en el array. 
// Se pide acumular, lo que indica que
//  debo sumar el valor que ya contiene 
// la variable suma, más el valor del 
// elemento que estoy recorriendo y 
// ese resultado asignarlo a suma.

let miArray = [5, 9, 6, 4, 8];
let suma = 0;
 
function testLoop() {
    for (let num of miArray) {
        suma = suma + num;
    }
}

//Implementar la función testLoop, que mediante
//  la utilización de un Loop For Of,
//  recorra mi Array e imprima en consola 
// cada uno de los elementos que contiene el array.

let miArray = ['Mensaje 1', 'Mensaje 2', 'Mensaje 3'];

function testLoop() {
    for(let elemento of miArray){
        console.log(elemento);
    }
}
