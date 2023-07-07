const piedra = 'piedra';
const papel = 'papel';
const tijera = 'tijera';
let compu = 0;
let usuario =0;
let contador = 0;
function obtenerJugadaAleatoria() {
    let numeroAleatorio = Math.floor(Math.random() * 3);
    let resultado;
    if (numeroAleatorio == 0) {
        resultado = piedra;
    } else if (numeroAleatorio == 1) {
        resultado = papel;
    } else if (numeroAleatorio == 2) {
        resultado = tijera;
    } 
    return resultado;
}

function obtenerJugadaUsuario(){
    let resultadoUsuario = readlineSync.question("Bien, ahora ingresa tu jugada de piedra, papel o tijera: ");
    return resultadoUsuario;
}

function determinarGanador(jugada,jugadaUsuario) {
    if (jugada == piedra && jugadaUsuario == tijera) {
        console.log('La computadora eligió: ', jugada, '. \nEl usuario eligió : ', jugadaUsuario, ' \nEl resultado fue : Gana la computadora!')
        compu ++;
    } else if (jugada == papel && jugadaUsuario == piedra) {
        console.log('La computadora eligió: ', jugada, '. \nEl usuario eligió : ', jugadaUsuario, ' \nEl resultado fue : Gana la computadora!')
        compu ++;
    } else if (jugada == tijera && jugadaUsuario == papel) {
        console.log('La computadora eligió: ', jugada, '. \nEl usuario eligió : ', jugadaUsuario, ' \nEl resultado fue : Gana la computadora!')
        compu ++;
    } else if (jugada == tijera && jugadaUsuario == piedra) {
        console.log('La computadora eligió: ', jugada, '. \nEl usuario eligió : ', jugadaUsuario, ' \nEl resultado fue : Gana el usuario!') 
        usuario ++;
    } else if (jugada == papel && jugadaUsuario == tijera) {
        console.log('La computadora eligió: ', jugada, '. \nEl usuario eligió : ', jugadaUsuario, ' \nEl resultado fue : Gana el usuario!')
        usuario ++;
    } else if (jugada == piedra && jugadaUsuario == papel) {
        console.log('La computadora eligió: ', jugada, '. \nEl usuario eligió : ', jugadaUsuario, ' \nEl resultado fue : Gana el usuario!') 
        usuario ++;
    }  else if (jugada == jugadaUsuario) { 
        (console.log('La computadora eligió: ', jugada, '. \nEl usuario eligió : ', jugadaUsuario, '. \nEs un empate!'))
    } else if (jugadaUsuario != piedra || jugadaUsuario != papel || jugadaUsuario != tijera) {
            console.log('Debes ingresar una opción valida');
        }
        return usuario, compu, contador;
    }
    const readlineSync = require('readline-sync');

        let cantJugada = readlineSync.question('Hola!! Bienvenido a piedra papel o tijera. En cuantas partidas deseas jugar? (1 jugada, 2 jugadas o al menos de 3')
        console.log(cantJugada);
        if (cantJugada == 1){
        determinarGanador(jugada, jugadaUsuario); }
        else if (cantJugada == 2){
            console.log('entra?');
            do {
                console.log('entra?')
                let jugada = obtenerJugadaAleatoria();
                let jugadaUsuario = obtenerJugadaUsuario();
                determinarGanador(jugada, jugadaUsuario);
                contador ++;
                console.log('el contador sería ', contador);
            }
            while (contador <= 1);
            }
            else if (cantJugada == 3) {
            do {
                let jugada = obtenerJugadaAleatoria();
                let jugadaUsuario = obtenerJugadaUsuario();
                determinarGanador(jugada, jugadaUsuario);
                console.log(compu,usuario)
            }
            while (compu < 2 && usuario < 2);

            if (compu == 2) {
            console.log('Ha ganado la computadora con 2 victorias');
        } else if (usuario == 2) {
            console.log('Ha ganado el usuario con 2 victorias');
        } }
    