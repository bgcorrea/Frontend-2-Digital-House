/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */
function iniciarJuego() {

    // saludar al usuario
    alert("Bienvenido al piedra papel o tijera de Frontend II.");
    // guardar en una variable el nombre ingresado
    let nombre = "";
    while (nombre === null || nombre.length < 3) {
        nombre = prompt("Ingese su nombre por favor:")
    }
    nombre = nombre.toUpperCase();

    alert("Gracias por jugar " + nombre + ". ¡Mucha suerte!");

    // mostramos los datos por consola
    console.log("----------------------------");
    console.log("El jugador es:")
    console.log(nombre);
    console.log("----------------------------");

    return nombre;
}


// Guardo el nombre del jugador que devuelve la función
const nombreJugador = iniciarJuego();

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.

