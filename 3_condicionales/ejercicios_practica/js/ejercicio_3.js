"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

//  Ejercicios de práctica numérica
//  Condicionales anidados
let numero1 = 7;
let numero2 = -2;

//  Verifique si el numero1 es mayor a 5
//    --> En caso afirmativo, verifique si el numero2
//        es positivo
//        --> En caso afirmativo imprima en pantalla "Resp=1"
//        --> En caso negativo imprima en pantalla   "Resp=2"
//   --> En caso negativo (numero1 no es mayor a 5)
//       verifique si el numero2 es mayor a 5
//        --> En caso afirmativo imprima en pantalla "Resp=3"
//        --> En caso negativo imprima en pantalla "Resp=4"

if (numero1>5) {
    if (numero2>0) {
        alert('Resp=1');
    } else {
        alert('Resp=2');
    }
} else {
    if (numero2>5) {
        alert('Resp=3');
    } else {
        alert('Resp=4');
    }
}

//  Verifique la calificación de un estudiante según su
//  puntaje en un examen
let puntaje = 70;

//  Si el puntaje es mayor igual a 90 "use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

//  Ejercicios de práctica numérica
//  Condicionales anidados
let numero1 = 7;
let numero2 = -2;

//  Verifique si el numero1 es mayor a 5
//    --> En caso afirmativo, verifique si el numero2
//        es positivo
//        --> En caso afirmativo imprima en pantalla "Resp=1"
//        --> En caso negativo imprima en pantalla   "Resp=2"
//   --> En caso negativo (numero1 no es mayor a 5)
//       verifique si el numero2 es mayor a 5
//        --> En caso afirmativo imprima en pantalla "Resp=3"
//        --> En caso negativo imprima en pantalla "Resp=4"

if (numero1>5) {
    if (numero2>0) {
        alert('Resp=1');
    } else {
        alert('Resp=2');
    }
} else {
    if (numero2>5) {
        alert('Resp=3');
    } else {
        alert('Resp=4');
    }
}

//  Verifique la calificación de un estudiante según su
//  puntaje en un examen
let puntaje = 70;

//  Si el puntaje es mayor igual a 90 --> imprimir A
//  Si el puntaje es mayor igual a 80 --> imprimir B
//  Si el puntaje es mayor igual a 70 --> imprimir C
//  Si el puntaje es mayor igual a 60 --> imprimir D
//  Si el puntaje es manor a  60      --> imprimir F

// Debe imprimir en pantalla la calificacion
// Utilizar "if" anidados

if (puntaje>=90) {
    alert('A');
}   else if (puntaje>=80) {
    alert('B');
} else if (puntaje>=70) {
    alert('C');
} else if (puntaje>=60) {
    alert('D');
} else if (puntaje<60) {
    alert('F');
}