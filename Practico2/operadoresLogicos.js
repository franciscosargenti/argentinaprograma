const readlineSync = require('readline-sync');
const num = readlineSync.question('Por favor, ingrese un numero ');
if (num > 0 && num % 2 == 0) {
    console.log('El numero es positivo y es par');
} else if (num > 0 && num % 2 == !0) {
    console.log('El numero es positivo e impar');
} else if(num < 0) {
    console.log('El numero es negativo');
} else if (num == 0) {
    console.log('El numero es 0');
}