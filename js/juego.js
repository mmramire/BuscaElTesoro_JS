//alert('Funciona JS, está linkeado a index.html');

//Definimos constantes del tamaño del mapa
const ancho = 600;
const alto = 600;
let clicksEfectuados = 0;

//Generamos el punto (x,y) donde se encuentra el tesoro en el mapa de forma aleatoria
let ubicacionTesoro = {
    x: obtenerNumeroAleatorio(ancho),
    y: obtenerNumeroAleatorio(alto),

};

//console.log(ubicacionTesoro);
//guardamos en una variable el mapa que lo sacamos del DOM
let $mapa = document.getElementById('mapa');
let $pista = document.getElementById('pista');


$mapa.addEventListener('click',function(e) {
    //console.log('Click');
    clicksEfectuados++;
    let distancia = obtenerDistancia(e,ubicacionTesoro);
    //console.log(distancia);
    let mensajePista = obtenerIndicioDeDistancia(distancia);
    $pista.innerHTML = mensajePista;
    $pista.textContent = mensajePista;
    //Damos una condición para completar el juego
    if (distancia < 20) {
        alert(`Felicitaciones, encontraste el tesoro en ${clicksEfectuados} cliks`);
        //recargamos la página reiniciando el juego
        location.reload();
    }

});
/*
const enlace = document.createElement("a");
enlace.id = 'pista'
enlace.textContent = mensajePista; 
enlace.appendChild(pista)
document.querySelector('#pista').appendChild(enlace);  */