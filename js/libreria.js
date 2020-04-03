//Usamos notación de ECMAScrip6 para funciones con notacion flecha

//Me permite obtener una posición aleatoria en el mapa
let obtenerNumeroAleatorio = tamanioMaximo => {
    //Math.floor me deja la parte entera de un decimal
    //Math random me devuelve número entre 0 y 1
    return Math.floor(Math.random() * tamanioMaximo);
}

/*
Obtenemos la distancia con Pitágoras entre el objetivo(tesoro) y 
nuestro click en el mapa (evento)
*/
let obtenerDistancia = (evento,objetivo) => {
    let deltaX = evento.offsetX - objetivo.x;
    let deltaY = evento.offsetY - objetivo.y;
    //Elevamos al cuadrado
    let a = Math.pow(deltaX,2);
    let b = Math.pow(deltaY,2);
    //Calculamos la distancia con Pitagoras
    return Math.floor(Math.sqrt(a+b));
}

//Damos pistas al jugador con indicios de la distancia al tesoro
let obtenerIndicioDeDistancia = distancia => {
    if (distancia < 30) {
        return "Me quemo!!!";
    } else if (distancia < 40) {
        return "Muy caliente";
    } else if (distancia < 60) {
        return "Caliente";
    } else if (distancia < 140) {
        return "Tibio";
    } else if (distancia < 200) {
        return "Frío";
    } else if (distancia < 400) {
        return "Muy frío";
    } else {
        return "Me congelo!!!";
    }    
}