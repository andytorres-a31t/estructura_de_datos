/* Operadores de Comparación 
== Igualdad (compara solo el valor, no el tipo)
=== Estrictamente igual (compara valor y tipo)
!= Desigualdad (compara solo el valor)
!== Estrictamente desigual (compara valor y tipo)
> Mayor que
< Menor que
>= Mayor o igual que
<= Menor o igual que
&& AND lógico
|| OR lógico
! NOT lógico


html en blanco hacer
*/

const a = 51
const b = '51'
const c = 10

//== Igualdad
console.log(a == b) // Output: true (compara solo el valor, no el tipo),
// dado que ambos tienen el mismo valor numérico aunque uno es string y otro es number

//=== Estrictamente igual
console.log(a === b) // Output: false (compara valor y tipo), 
// porque a es un número y b es una cadena de texto

//!= Desigualdad
console.log(a != b) // Output: false (compara solo el valor, no el tipo), 
// por que ambos son 5 aunque uno es string y otro es number

//!== Estrictamente desigual
console.log(a !== b) // Output: true (compara valor y tipo), 
// por que a es un número y b es una cadena de texto, son diferentes en tipo

//> Mayor que
console.log(a > 3) // Output: true , porque 51 es mayor que 3

//< Menor que
console.log(a < 10) // Output: false , porque 51 es mayor que 10, entonces la comparación a < 10 es falsa
//>= Mayor o igual que 
console.log(a >= 5) // Output: true , porque 51 es mayor que 5, entonces la comparación a >= 5 es verdadera,
//  pero si fuera 5 también sería verdadera

//<= Menor o igual que
console.log(a <= 4) // Output: false , porque 51 es mayor que 4, entonces la comparación a <= 4 es falsa

//&& AND lógico
console.log(a > 3 && c < 15) // Output: true (ambas condiciones son verdaderas), 
// porque 51 es mayor que 3 y 10 es menor que 15, entonces la comparación a > 3 && c < 15 es verdadera

//|| OR lógico
console.log(a < 3 || c < 15) // Output: true (al menos una condición es verdadera), 
// por que aunque a < 3 es falso, c < 15 es verdadero, entonces la comparación a < 3 || c < 15 es verdadera

//! NOT lógico
console.log(!(a > 3)) // Output: false (la condición a > 3 es verdadera, pero el NOT la invierte),
//  por que a > 3 es verdadero, entonces !(a > 3) es falso