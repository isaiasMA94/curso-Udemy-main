function mostrarResultado(resultado) {
    document.getElementById("resultado").value = resultado;
}

function sumar() {
    let elemento1 = +document.getElementById("numero1").value;
    let elemento2 = +document.getElementById("numero2").value;
    mostrarResultado(elemento1 + elemento2);
}

function restar() {
    let elemento1 = +document.getElementById("numero1").value;
    let elemento2 = +document.getElementById("numero2").value;
    mostrarResultado(elemento1 - elemento2);  
}

function multiplicar() {
    let elemento1 = document.getElementById("numero1").value;
    let elemento2 = document.getElementById("numero2").value;
    mostrarResultado(elemento1 * elemento2);
}

function Dividir() {
    let elemento1 = document.getElementById("numero1").value;
    let elemento2 = document.getElementById("numero2").value;
    mostrarResultado(elemento1 / elemento2);
}    

function raizCuadrada() {
    let numero = +document.getElementById("numero2").value;
    mostrarResultado(Math.sqrt(numero));
}

function potenciar() {
    let numero1 = +document.getElementById("numero1").value;
    let numero2 = +document.getElementById("numero2").value;
    mostrarResultado(Math.pow(numero1, numero2));
}

function valorAbsoluto() {
let numero = +document.getElementById("numero2").value;
mostrarResultado(Math.abs(numero));
}

function random() {
let minimo = +document.getElementById("numero1").value;
let maximo = +document.getElementById("numero2").value;
maximo = maximo + 1;
mostrarResultado(Math.floor(Math.random() * maximo - minimo + minimo));
}

function round() {
let resultado = +document.getElementById("resultado").value;
mostrarResultado(Math.round(resultado));
}

function ceil() {
let resultado = +document.getElementById("resultado").value;
mostrarResultado(Math.ceil(resultado));
}

function floor() {
let resultado = +document.getElementById("resultado").value;
mostrarResultado(Math.floor(resultado));
}



        
    