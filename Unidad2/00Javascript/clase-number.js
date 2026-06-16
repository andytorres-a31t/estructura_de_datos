//TIPOS DE DATOS NUMERICOS
//Enteros y decimales
const entero = 10
const decimal = 3.14
console.log(typeof entero, typeof decimal)

//NOTACION CIENTIFICA
const cientifico = 5e6 // 1 x 10^6


//representacion de otros contextos
const infinito = Infinity
const noEsUnNumero = NaN

//OPERACIONES ARITMETICAS


//Sumas Restas
const suma = 5 + 3
const resta = 10 - 4

//Multiplicacion y Division
const multiplicacion = 6 * 7
const division = 20 / 5

//Modulo Exponenciacion(resto de una division)
const modulo = 10 % 3

//Resultados de operaciones con decimales pueden ser imprecisos
//resultade de presicion
const exponenciacion = 0.1 + 0.2 // resultado no es exactamente 0.3 debido a la representacion binaria de los numeros decimales
console.log(exponenciacion) // muestra 0.30000000000000004
console.log(exponenciacion.toFixed(2)) // muestra 0.30, redondeando a 2 decimales
console.log(exponenciacion.toFixed(1)) // muestra 0.3, redondeando a 1 decimal y convirtiendo a numero


const raizCuadrada = Math.sqrt(16) // raiz cuadrada de 16 es 4
const potencia = Math.pow(2, 3) // 2 elevado a la potencia de 3 es 8
const valorAbsoluto = Math.abs(-5) // valor absoluto de -5 es 5
const numeroAleatorio = Math.random() // genera un numero aleatorio entre 0 y 1
const numeroAleatorioEntre1y10 = Math.floor(Math.random() * 10) + 1 // genera un numero aleatorio entre 1 y 10
console.log(raizCuadrada)
console.log(potencia)
console.log(valorAbsoluto)
console.log(numeroAleatorio)
console.log(numeroAleatorioEntre1y10)