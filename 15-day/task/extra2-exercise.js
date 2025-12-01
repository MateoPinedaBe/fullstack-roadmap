// Hacer una funcion que reciba dos parametro, jugador1 (el que inicia el juego) y otro que se llama jugador 
// 2. despues de cada 2 puntos se necesita que la funcion diga quien es la persona que saca; decirle a la funcion los puntos que lleva cada jugador.
// Gana el jugador que llegue a 11.

function juegoMultiplayer(jugador1, jugador, puntos1, puntos2) {
    let puntosJugador1 = puntos1;
    let puntosJugador = puntos2;

    puntosJugador1 = parseInt(puntosJugador1);
    puntosJugador = parseInt(puntosJugador);

    if (isNaN(puntosJugador1) || isNaN(puntosJugador)) {
        console.log("Por favor, ingresar un puntaje válido.")
        return null
    }

    let jugador1Nombre = String(jugador1);
    let jugadorNombre = String(jugador);

    let saqueActual = jugador1Nombre;
    let saqueAnterior = null;

    let totalPuntos = puntosJugador + puntosJugador1;

    const PUNTOS_PARA_GANAR = 11;

    if (totalPuntos === 0) {
        console.log(`Comienza el partido entre ${jugador1Nombre} y ${jugadorNombre}.`);
        console.log(`El primer saque es para ${saqueActual}.`)
    } else {
        console.log(`El partido entre ${jugador1Nombre} y ${jugadorNombre} continúa desde el marcador: [${puntosJugador1}] - [${puntosJugador}]`)
        console.log(`El primer saque lo tuvo ${jugador1Nombre}`)
    }

    while (puntosJugador1 < PUNTOS_PARA_GANAR && puntosJugador < PUNTOS_PARA_GANAR) {

        saqueAnterior = saqueActual;

        (Math.floor(totalPuntos / 2) % 2 === 0) ? saqueActual = jugador1Nombre : saqueActual = jugadorNombre;

        if (saqueAnterior !== saqueActual) {
            console.log("¡Cambio de Saque!");
            console.log(`Ahora le toca a: ${saqueActual}`);
        }

        let anotador;

        if (Math.random() < 0.50) {
            puntosJugador1++;
            anotador = jugador1Nombre;
        } else {
            puntosJugador++;
            anotador = jugadorNombre;
        }
        totalPuntos++;

        console.log(`\n${anotador} hace un punto!`);
        console.log(`Marcador actual: \n${jugador1Nombre} - [${puntosJugador1}]\n${jugadorNombre} - [${puntosJugador}]`);
    }

    console.log("Fin del Partido");
    (puntosJugador1 === PUNTOS_PARA_GANAR) ? console.log(`${jugador1Nombre} ha ganado el partido con ${puntosJugador1} puntos.`) :
        console.log(`${jugadorNombre} ha ganado el partido con ${puntosJugador} puntos.`)

    console.log(`Marcador final: ${jugador1Nombre} [${puntosJugador1}] - ${jugadorNombre} [${puntosJugador}]`);
}


juegoMultiplayer("Mateo", "Jose", 0, 0)