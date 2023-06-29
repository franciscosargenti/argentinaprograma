let listaInvitados = ['Jose', 'Maria', 'Juan', 'Andres','Lionel', 'Sofia', 'Leandro','Emilia'];
let listaRechazados = [];
let listaAdmitidos = [];
for (let i = 0; i < listaInvitados.length; i++){
    if (listaInvitados[i] === 'Jose' || listaInvitados[i] === 'Sofia') {
        listaRechazados.push(listaInvitados[i]);
    } else {
        listaAdmitidos.push(listaInvitados[i]);
    }
}

console.log('La lista de invitados admitidos es: ')

for (let i = 0; i < listaAdmitidos.length; i++) {
    console.log(listaAdmitidos[i]);
}
console.log('La lista de invitados rechazados es: ')
for (let i = 0; i < listaRechazados.length; i++) {
    console.log(listaRechazados[i]);
}