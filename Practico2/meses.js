const readlineSync = require('readline-sync');
const mes = readlineSync.question('Por favor, ingrese un numero del 1 al 12 que represente los 12 meses del anio ');
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let cantidadDias = [31,28,31,30,31,30,31,31,30,31,30,31];
for (let i = 0; i <= meses.length; i++) {
     if((mes-1) == i) {
        console.log('La cantidad de dias del mes de '+meses[i]+ ' es de '+cantidadDias[i]);
     }
}