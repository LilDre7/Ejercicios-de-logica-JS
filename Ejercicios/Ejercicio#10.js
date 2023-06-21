// ! Escribe una función que reciba un array de números y devuelva un array con los números pares del array original.
let arrayNumbers = [
  2, 4, 5, 6, 64, 4, 9, 3, 33, 1, 22, 1, 2, 4, 5, 4, 6, 34, 77, 99,
];

const arrayPares = (arrayNumbers) => {
  const onlyPares = arrayNumbers.filter((x) => x % 2 == 0);
  return onlyPares;
};
const result = arrayPares(arrayNumbers);
console.log(result);

// ! Escribe una función que reciba un array de palabras y devuelva un array con las palabras que empiecen con la letra "a".

let palabrasRandom = [
  "Jack",
  "Alvaro",
  "Jesus",
  "Ana",
  "Britanny",
  "Juanita",
  "Teresa",
  "Winston",
  "Erick",
  "aaron",
];

const letraA = (palabrasRandom) => {
  const changeOne = palabrasRandom.map((x) => x.toLocaleLowerCase());

  const palabras = [];

  for (i in changeOne) {
    if (changeOne[i][0].includes("a")) {
      palabras.push(changeOne[i]);
    }
  }

  return palabras;
};

const palabraEncontrada = letraA(palabrasRandom);
console.log(palabraEncontrada);

// ! Escribe una función que reciba un array de números y un número objetivo, y devuelva un array con los pares de números del array original que sumen el número objetivo.

let numberObj = [2, 5, 6, 9, 10, 12, 15, 18, 77];

let obj = 10;

const numberObjPar = (numberObj, obj) => {
  const result = [];

  for (i in numberObj) {
    if (numberObj[i] % 2 == 0) {
      result.push(numberObj[i] + obj);
    }
  }
  return result;
};

const resultadoParSum = numberObjPar(numberObj, obj);
console.log(resultadoParSum);

// ! Escribe una función que reciba un array de objetos, donde cada objeto representa una persona con su nombre y edad, y devuelva un array con los nombres de las personas mayores de edad.

let users = [
  { name: "Ana", age: 25, city: "Madrid" },
  { name: "Juan", age: 30, city: "Barcelona" },
  { name: "María", age: 21, city: "Sevilla" },
  { name: "Carlos", age: 29, city: "Valencia" },
  { name: "Laura", age: 26, city: "Bilbao" },
  { name: "Pedto", age: 15, city: "Sevilla" },
  { name: "Juanita", age: 16, city: "Valencia" },
  { name: "Keyla", age: 14, city: "Bilbao" },
];

const userMax = (users) => {
  const userAgeMax = [];

  const mayorAge = users.filter((a) => a.age > 18);
  return mayorAge;
};

const mayorEdad = userMax(users);
console.log(mayorEdad);

// ! Escribe una función que reciba dos arrays de números y devuelva un array con los números que se repiten en ambos arrays.

let numOne = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numTwo = [10, 20, 3, 40, 50, 6, 70, 80, 9];

const numRep = (numOne, numTwo) => {
  const combinarArray = [...numOne, ...numTwo];
  const result = [];

  for (let i = 0; i < combinarArray.length; i++) {
    for (let j = i + 1; j < combinarArray.length; j++) {
      if (combinarArray[i] === combinarArray[j]) {
        result.push(combinarArray[i]);
      }
    }
  }
  return result;
};

const numeroMoreRep = numRep(numOne, numTwo);
console.log(numeroMoreRep);

// ! Escribe una función que reciba un array de números y devuelva un objeto con dos propiedades: la cantidad de números pares y la cantidad de números impares.

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 17, 19, 21, 23, 24, 27];

const objPar = (numArray) => {
  let conPar = 0;
  let conImpar = 0;
  let result = [];

  const searchPar = numArray.filter((a) => a % 2 == 0);
  const searchImpar = numArray.filter((a) => a % 2 == 1);

  conPar = searchImpar.length;
  conImpar = searchPar.length;

  result.push(conPar, conImpar);
  return result;
};

const arrayPareImpar = objPar(numArray);
console.log(arrayPareImpar);

// ! Escribe una función que reciba un array de números y devuelva un array con los números ordenados de forma ascendente, sin utilizar el método sort().

let arr = [6, 2, 1, 9, 43, 41, 21, 10, 6, 5];

const searchOrder = (arr) => {
  let orderResult = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
      }
    }
    orderResult.push(arr[i]);
  }
  return orderResult;
};

const orderNumber = searchOrder(arr);
console.log(orderNumber);

// ! Escribe una función que reciba un array de objetos, donde cada objeto representa una canción con su nombre y duración en segundos, y devuelva el tiempo total de reproducción de todas las canciones del array, en minutos y segundos.

const songArr = [
  {
    song1: "waith",
    Duration: 400,
  },
  {
    song1: "Wanna",
    Duration: 200,
  },
  {
    song1: "gloria",
    Duration: 242,
  },
  {
    song1: "Tells",
    Duration: 211,
  },
  {
    song1: "Bob Marley",
    Duration: 312,
  },
  {
    song1: "Sometime else",
    Duration: 311,
  },
];

const timeSong = (songArr) => {
  const totalTime = songArr.map((x) => x.Duration);
  const sum = totalTime.reduce((a, b) => a + b);
  const minutes = Math.floor(sum / 60);
  const totalMinXSec =
    "Total de segundos es de " + sum + " Total de minutos es de " + minutes;
  return totalMinXSec;
};

const durationSong = timeSong(songArr);
console.log(durationSong);

// ! Escribe una función que reciba un array de números y devuelva un array con la suma acumulada de los números en cada posición del array.

// ! Escribe una función que reciba un array de objetos, donde cada objeto representa un producto con su nombre, precio y cantidad en stock, y devuelva el precio total de todos los productos en stock.

// * Este ejercicio consiste en convertir las expresiones camelCase en expresiones normales, con espacios: "camelCase"    => "camel Case" // "setIsLoading" => "set Is Loading"

// Primera forma de hacerlo
return string.replace(/([a-z])([A-Z])/g, "$1 $2");
// Segunda forma de hacerlo
function convertToNormalCase(camelCaseString) {
  let normalCaseString = "";
  for (let i = 0; i < camelCaseString.length; i++) {
    const currentChar = camelCaseString[i];
    const nextChar = camelCaseString[i + 1];
    // si la letra actual es una mayúscula y la siguiente es una minúscula, añadir un espacio antes de la letra actual
    if (
      currentChar === currentChar.toUpperCase() &&
      nextChar &&
      nextChar === nextChar.toLowerCase()
    ) {
      normalCaseString += " ";
    }
    normalCaseString += currentChar;
  }
  return normalCaseString;
}
