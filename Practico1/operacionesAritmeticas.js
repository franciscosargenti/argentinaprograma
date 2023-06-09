let num1 = 2, num2 = 2, num3 = 4, num4 = 15;
let suma = num1 + num2;
let resta = num4 - num3;
let resultadoFinal = suma*resta;
let esPar;
if ((resultadoFinal % 2) === 0) {
   esPar= true;
}
console.log('Mis variables iniciales fueron: '+num1+ ', '+num2+ ', '+num3+ ', '+num4+'. La respuesta a verificar si el resultado final es par es: '+esPar);
