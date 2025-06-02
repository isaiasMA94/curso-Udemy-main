function recomendar(genero) {
    let edad = document.getElementById("selectorEdad").value;
    let elementoRespuesta = document.getElementById("Respuesta");

    switch(genero) {
        case "Comedia":
            if(edad <= 13){
                elementoRespuesta.textContent = "scoby doo";
            } else {
                if(edad <= 16) {
                elementoRespuesta.textContent = "scary movie";
            } else {
                elementoRespuesta.textContent = "irene yo y mi otro yo";
            }
        }break;
        case "Drama":
            if(edad <= 13){
                elementoRespuesta.textContent = "la vaca";
            } else {
                if(edad <= 16) {
                elementoRespuesta.textContent = "matrix";
            } else {
                elementoRespuesta.textContent = "underworld";
            }
        }break;
        case "Musical":
            if(edad <= 13){
                elementoRespuesta.textContent = "bolgoood";
            } else {
                if(edad <= 16) {
                elementoRespuesta.textContent = "la fabrica";
            } else {
                elementoRespuesta.textContent = "mosncherry";
            }
        }break;
        case "Crimen":
            if(edad <= 13){
                elementoRespuesta.textContent = "No se recomiernda a esta esta edad";
            } else {
                if(edad <= 16) {
                elementoRespuesta.textContent = "the boys";
            } else {
                elementoRespuesta.textContent = "El padrino";
            }
        }break;
    }
}