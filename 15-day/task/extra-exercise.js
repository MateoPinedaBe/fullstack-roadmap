//funcion que reciba 2 numeros la funcion debe imprimir los numeros del 0 hasta el primer parametro, 
// si dentro de la impresion hay un numero igual al segundo parametro en lugar de imprimir el numero correspondiente imprima 
// globant hasta el doble del segundo parametro

function multiplyWordTillParam2(param1, param2) {
    for (let i = 0; i <= param1; i++) {
        if (i >= param2 && i <= param2 * 2) {
            console.log("Globant")
        }
        else console.log(i)
    }
}

multiplyWordTillParam2(5, 1);
