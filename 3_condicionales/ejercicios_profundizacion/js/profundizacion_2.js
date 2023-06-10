"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Práctica numérica
// Realice un programa que solicite el ingreso de tres números
// enteros, y luego en cada caso informe si el número es par
// o impar.
// Para cada caso imprimir el resultado en pantalla.

let numero1 = parseInt(prompt("Ingrese numero1"));
let numero2 = parseInt(prompt("Ingrese numero2"));
let numero3 = parseInt(prompt("Ingrese numero3"));

if (numero1%2 == 0) {
    console.log("El número "+numero1+" es par");
} else{
    console.log("El número "+numero1+" es impar");

}
if (numero2%2 == 0) {
    console.log("El número "+numero2+" es par");
} else{
    console.log("El número "+numero2+" es impar");

}
if (numero3%2 == 0) {
    console.log("El número "+numero3+" es par");
} else{
    console.log("El número "+numero3+" es impar");

}