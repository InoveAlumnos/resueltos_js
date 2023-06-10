"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Ejercicios de práctica numérica
// En este ejercicio les pediremos que investiguen por su cuentan
// algunas propiedades de javascript para manipular números
// usando la librería "Math":
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math

// Realice un programa que solicite ingresar tres valores de temperatura
// De las temperaturas ingresadas por consola determinar:
// 1 - ¿Cuáles de ellas es la máxima temperatura ingresada?
// Para este caso haga uso de la herramienta "Math.max",
// investigue y busque como utilizarla.
// 2 - ¿Cuáles de ellas es la mínima temperatura ingresada?
// Para este caso haga uso de la herramienta "Math.min",
// investigue y busque como utilizarla.

// En cada caso imprimir en pantalla el resultado

// let temperatura=prompt("Ingrese tres temperaturas separadas por una coma");
// let temperaturaArray=temperatura.split(",");
// let temperatura1=parseInt(te"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Ejercicios de práctica numérica
// Realice un programa que solicite ingresar tres valores de temperatura
// De las temperaturas ingresadas por consola determinar:
// 1 - ¿Cuáles de ellas es la máxima temperatura ingresada?
// 2 - ¿Cuáles de ellas es la mínima temperatura ingresada?
// 3 - ¿Cuál es el promedio de las temperaturas ingresadas?
// En cada caso imprimir en pantalla el resultado

// IMPORTANTE: Para ordenar las temperatuas debe utilizar condicionales compuestos o anidados,
// no se busca utilizar bucles o algoritmos de ordenamiento ya que aún no hemos llegado a ese
// contenido. Recomendamos pensar bien este problema de lógica con un lápiz y papel.

let temperatura1 = parseInt(prompt("Ingrese temperatura 1"));
let temperatura2 = parseInt(prompt("Ingrese temperatura 2"));
let temperatura3 = parseInt(prompt("Ingrese temperatura 3"));

let temperaturaMaxima = Math.max(temperatura1,temperatura2,temperatura3);
let temperaturaMinima = Math.min(temperatura1,temperatura2,temperatura3);
let temperaturaPromedio = (temperatura1+temperatura2+temperatura3)/3;
console.log("La temperatura máxima es: "+temperaturaMaxima);
console.log("La temperatura mínima es: "+temperaturaMinima);
console.log("El promedio de las temperaturas es: "+temperaturaPromedio);

// Resuelto con condicionales puros
if (temperatura1 > temperatura2 && temperatura1 > temperatura3) {
    console.log("La temperatura máxima es: "+temperatura1);
    if(temperatura2 > temperatura3) {
        console.log ("La temperatura mínima es: "+temperatura3);
    }
    else {
        console.log ("La temperatura mínima es: "+temperatura2);
    }
} else if (temperatura2 > temperatura1 && temperatura2 > temperatura3) {
    console.log("La temperatura máxima es: "+temperatura2);
    if(temperatura1 > temperatura3) {
        console.log ("La temperatura mínima es: "+temperatura3);
    }
    else {
        console.log ("La temperatura mínima es: "+temperatura1);
    }
} else if (temperatura3 > temperatura2 && temperatura3 > temperatura1) {
    console.log("La temperatura máxima es: "+temperatura3);
    if(temperatura2 > temperatura1) {
        console.log ("La temperatura mínima es: "+temperatura1);
    }
    else {
        console.log ("La temperatura mínima es: "+temperatura2);
    }
}