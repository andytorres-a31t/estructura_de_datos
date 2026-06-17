/*
    Condicionales
*/

// if
//Ejecuta un bloque de código si la condición es verdadera.

let edad = 20;

if (edad >= 18) { // Si la edad es 18 o más, se ejecuta este bloque
    console.log("Eres mayor de edad");
}
//if...else
//Permite ejecutar un bloque si la condición es verdadera y otro si es falsa.

let edad = 20;

if (edad >= 18) { // Si la edad es 18 o más, se ejecuta este bloque
    console.log("Mayor de edad"); // si la edad es 20, esta línea se ejecuta porque la condición es verdadera
} else { /// Si la edad es menor de 18, se ejecuta este bloque
    console.log("Menor de edad");// Output: "Menor de edad"
}


//if...else if...else
//Permite evaluar varias condiciones.

let nota = 85

if (nota >= 90) {  // Si la nota es 90 o más, se ejecuta este bloque
    console.log("Excelente")
} else if (nota >= 70) { // Si la nota es 70 o más pero menos de 90, se ejecuta este bloque
    console.log("Aprobado")
} else {  // Si la nota es menos de 70, se ejecuta este bloque
    console.log("Reprobado")
}


// switch
//Se usa cuando hay múltiples casos posibles para una misma variable.

let dia = 3; 

switch (dia) { // Evalúa el valor de la variable 'dia'
    case 1:
        console.log("Lunes"); // Si 'dia' es 1, se ejecuta este bloque y luego se sale del switch
        break; // El break es importante para evitar que se ejecuten los siguientes casos
    case 2: // Si 'dia' es 2, se ejecuta este bloque y luego se sale del switch
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    default:
        console.log("Día no válido");
}