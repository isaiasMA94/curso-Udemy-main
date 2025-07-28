//Implemente la función testLoop, donde debe utilizar un Loop While
//  que itere tantas veces como lo indique el parámetro vueltas y 
// que imprima en la consola en cada iteración el número de vuelta 
// de la siguiente forma: Vuelta 0, Vuelta 1, etc. Utilice la variable 
// contador para ir contando la cantidad de vueltas que va dando el ciclo.

function testLoop(vueltas){
    let contador = 0;
    do {
        console.log("Vuelta " + contador)
        contador++;
    } while (contador<vueltas)
}

//Implementar la funcion testLoop, utilizando un Loop While cuya condición verifique
 //que el ciclo itere mientras el parámetro sea menor a 10. Mientras eso suceda, 
 //en cada ciclo se deberá imprimir en consola el valor actual del parametro y 
 //luego incrementar el valor del parametro en uno.

 function testLoop(parametro) {
    while(parametro < 10) {
        console.log(parametro);
        parametro++;
    }
}
