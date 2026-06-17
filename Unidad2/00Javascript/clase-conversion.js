const string = '47'
const integer = parseInt(string)

console.log(integer) // Output: 47

//decimal
const stringDecimal = '3.14'
const decimal = parseFloat(stringDecimal)

console.log(decimal) // Output: 3.14

//binario
const binary = '101100'
const decimal = parseInt(binary, 2) 

console.log(decimal) // Output: 44

const suma = '5' + 10 // El operador + con un string convierte el número a string y concatena
console.log(suma) // Output: '510' (concatenación de string y número)

const suma= 3 - true // El operador - convierte el booleano a número (true a 1)
console.log(suma) // Output: 2 (3 - 1)


