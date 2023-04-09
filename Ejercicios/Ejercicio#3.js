// Programa un script que pida al usuario su nombre y lo salude. Por ejemplo: "Hola, Juan".

let usuario = "Alvaro";
console.log(`Hola como estas ${usuario}`);

// Escribe un programa que pida al usuario un número y lo multiplique por 2.

let num = 3;
console.log(num * 2);

// Crea un programa que pida al usuario dos números y muestre en la consola el resultado de su suma.

let user = [20, 50];
console.log(user[0] + user[1]);

// Escribe un programa que muestre en la consola los números del 1 al 10.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Crea un programa que pida al usuario su edad y muestre en la consola si es mayor de edad o no.

let age = 18
let edadMaxima = 18

const mayorOrNot = (age) => {
    if (age >= edadMaxima ){
        return 'Pasa es mayor'
    }else {
        return 'No pasa'
    }
}
const paseOrNot = mayorOrNot(age);
console.log(paseOrNot);



// Escribe un programa que pida al usuario un número y determine si es par o impar.







// Crea un programa que pida al usuario un número y muestre en la consola si es positivo, negativo o cero.

let getNumber3 = -100;

function typeNumber() {
    if (getNumber3 > 0) {
        return "Es positivo tu numero";
    } else if (getNumber3 < 0) {
        return "Es negativo tu numero";
    } else if (getNumber3 == 0) {
        return "Es es cero tu numero";
    } else {
        return "No es un numero";
    }
}

console.log(typeNumber());

// Escribe un programa que pida al usuario su nombre y su edad, y muestre en la consola un mensaje personalizado. Por ejemplo: "Hola Juan, tienes 25 años".

let yourName = "Alvaro";
let yourAge1 = 20;

console.log(
    yourName + " " + "felicidades hoy cumples" + " " + yourAge1 + " " + "pelotudo"
);

// Crea un programa que pida al usuario un número y muestre en la consola todos los números pares desde el 1 hasta ese número.

let dameUnNumero = 27;
let resultado = [];

function getNumberPair() {
    for (let i = 1; i <= dameUnNumero; i++) {
        if (i % 2 == 0) {
            resultado.push(i);
        }
    }
    return resultado;
}
console.log(getNumberPair(resultado));

// Escribe un programa que pida al usuario su peso y su altura, y calcule su índice de masa corporal (IMC). El IMC se calcula como peso / (altura * altura). Muestra el resultado en la consola.

let yourWeigth = "50kg";
let yourSize = 1.86;

let indiceIMC = (parseInt(yourWeigth) / yourSize) * yourSize;

function calculaImc() {
    if (indiceIMC == indiceIMC) {
        return (
            `Tu indice de masa corporal es de` +
            " " +
            indiceIMC +
            "," +
            " " +
            "un saludo" +
            " " +
            nombreUsuario
        );
    }
    return calculaImc;
}
console.log(calculaImc());
