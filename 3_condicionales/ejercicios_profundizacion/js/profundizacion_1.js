"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Ejercicios de práctica numérica
// Realice un programa que solicite por consola 2 números
// Calcule la diferencia entre ellos e informe por pantalla
// si el resultado es positivo, negativo o cero.

let numeros=prompt("Ingrese dos números separados por una coma");
let numerosArray=numeros.split(",");
let numero1=parseInt(numerosArray[0]);
let numero2=parseInt(numerosArray[1]);
let resultado=numero1-numero2;
if (resultado==0) {
    console.log("El resultado es cero");
} else if (resultado >0) {
    console.log("El resultado es positivo");
} else {
    console.log("El resultado es negativo");
"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Ejercicios de práctica numérica
// Realice un programa que solicite por consola 2 números
// Calcule la diferencia entre ellos e informe por pantalla
// si el resultado es positivo, negativo o cero.

let numeros=prompt("Ingrese dos números separados por una coma");
let numerosArray=numeros.split(",");
let numero1=parseInt(numerosArray[0]);
let numero2=parseInt(numerosArray[1]);
let resultado=numero1-numero2;
if (resultado==0) {
    console.log("El resultado es cero");
} else if (resultado >0) {
    console.log("El resultado es positivo");
} else {
    console.log("El resultado es negativo");
}