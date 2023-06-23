const readlineSync = require('readline-sync');
const num = readlineSync.question('Por favor, ingrese un numero: ');
if (num > 0) {
    console.log('El numero es positivo.')
} else if (num < 0) {
    console.log('El numero es negativo')
} else if (num == 0) {console.log('El numero es 0');}