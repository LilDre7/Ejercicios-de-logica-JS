// Programa un script que pida al usuario su nombre y lo salude. Por ejemplo: "Hola, Juan".

let nombreUsuario = 'Alvaro';
console.log(`Bienvenido mi estimado ${nombreUsuario}`);


// Escribe un programa que pida al usuario un número y lo multiplique por 2.

let  getNumber = 7

console.log(getNumber * 2);

// Crea un programa que pida al usuario dos números y muestre en la consola el resultado de su suma.

let getSuma = 2
let getSuma1 = 3

console.log(getSuma + getSuma1);

// Escribe un programa que muestre en la consola los números del 1 al 10.

let number = 10
for(let i = 0; i <= number; i++ ){
    console.log(i);
}

// Crea un programa que pida al usuario su edad y muestre en la consola si es mayor de edad o no.

let yourAge = 15

function getAge () {
    if ( yourAge >= 18 ) {
        return `Puedes pasar ${nombreUsuario}`
    }else {
        return `No puedes pasar ${nombreUsuario}`
    }
    return getAge
}
console.log(getAge());

// Escribe un programa que pida al usuario un número y determine si es par o impar.

let getNumber2 = 7 

function numberPar () {
    if ( getNumber % 2 == 0 ) {
        return 'Es numero par'
    }else {
        return 'Es un numero impar'
    }
}

console.log(numberPar());

// Crea un programa que pida al usuario un número y muestre en la consola si es positivo, negativo o cero.

let getNumber3 = -100 

function typeNumber () {
    if (getNumber3 > 0) {
        return 'Es positivo tu numero'
    } else if ( getNumber3 < 0 ){ 
        return 'Es negativo tu numero'
    } else if ( getNumber3 == 0) {
        return 'Es es cero tu numero'
    }else {
        return 'No es un numero'
    }
}

console.log(typeNumber());


// Escribe un programa que pida al usuario su nombre y su edad, y muestre en la consola un mensaje personalizado. Por ejemplo: "Hola Juan, tienes 25 años".

let yourName = 'Alvaro'
let yourAge1 = 20

console.log
(yourName + ' ' + 'felicidades hoy cumples' + ' ' + yourAge1 + ' ' + 'pelotudo');


// Crea un programa que pida al usuario un número y muestre en la consola todos los números pares desde el 1 hasta ese número.

let dameUnNumero = 27
let resultado = []

    function getNumberPair () {
        for( let i = 1; i <= dameUnNumero; i++){
            if (i % 2 == 0) {
                resultado.push(i)
            }
        }
        return resultado
    }
    console.log(getNumberPair(resultado));

// Escribe un programa que pida al usuario su peso y su altura, y calcule su índice de masa corporal (IMC). El IMC se calcula como peso / (altura * altura). Muestra el resultado en la consola.

let yourWeigth = '50kg'
let yourSize = 1.86

let indiceIMC = parseInt(yourWeigth) / yourSize * yourSize

    function calculaImc () {
        if ( indiceIMC == indiceIMC) {
            return `Tu indice de masa corporal es de` + ' ' + indiceIMC + ',' + ' ' + 'un saludo' + ' ' + nombreUsuario
        }
        return calculaImc
    }
    console.log(calculaImc());
