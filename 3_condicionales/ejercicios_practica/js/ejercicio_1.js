"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejercicios de práctica numérica
// Comparadores
// Ingrese dos números cualesquiera y realice las sigueintes
// comparaciones entre ellos
let numero1 = parseInt(prompt('Ingrese el primer número:\n'));

let numero2 = parseInt(prompt('Ingrese el segundo número:\n'));

// Compare cual de los dos números es mayor
// Imprima en pantalla según corresponda
if (numero1 > numero2) {
    alert(numero1 + ' es mayor que ' + numero2);
} else if (numero1 < numero2) {
    alert(numero2 + ' es mayor que ' + numero1);
} else {
    alert('Los números son iguales');
}

// Verifique si el numero1 positivo, negativo o cero
// Imprima el resultado en cada caso
if (numero1 > 0) {
    a"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejercicios de práctica numérica
// Comparadores
// Ingrese dos números cualesquiera y realice las sigueintes
// comparaciones entre ellos
let numero1 = parseInt(prompt('Ingrese el primer número:\n'));

let numero2 = parseInt(prompt('Ingrese el segundo número:\n'));

// Compare cual de los dos números es mayor
// Imprima en pantalla según corresponda
if (numero1 > numero2) {
    alert(numero1 + ' es mayor que ' + numero2);
} else if (numero1 < numero2) {
    alert(numero2 + ' es mayor que ' + numero1);
} else {
    alert('Los números son iguales');
}

// Verifique si el numero1 positivo, negativo o cero
// Imprima el resultado en cada caso
if (numero1 > 0) {
    alert(numero1 + ' es positivo');
}   else if (numero1 < 0) {
    alert(numero1 + ' es negativo');
}   else {
    alert(numero1 + ' es cero');
}
// Verifique si el numero1 es mayor a 0 y menor a 100
// Imprima en pantalla si se cumple o no la condición
if (numero1 > 0 && numero1 < 100) {
    alert(numero1 + ' está entre 0 y 100');
} else if (numero1 < 0 && numero1 > -100) {
    alert(numero1 + ' está entre -100 y 0');
}   else {
    alert(numero1 + ' no está entre 0 y 100');
}
// Verifique si el numero1 es menor a 10 o el numero2
// es mayor a - 2
// Imprima en pantalla si se cumple o no la condición

if (numero1 < 10 || numero2 > -2) {
    alert('Cumple la condición');
} else if (numero1 > 10 && numero2 < -2) {
    alert('Cumple la condición');
} else {
    alert('No cumple la condición');
}