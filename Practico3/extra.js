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

console.log('La lista ordenada de invitados admitidos es: ')

for (let i = 0; i < listaAdmitidos.length; i++) {
    for (let j = 0; j < listaAdmitidos.length ; j++) {
      if (listaAdmitidos[j] > listaAdmitidos[j + 1]) {
        let temp = listaAdmitidos[j];
        listaAdmitidos[j] = listaAdmitidos[j + 1];
        listaAdmitidos[j + 1] = temp;
      }
    }
  }
console.log(listaAdmitidos);