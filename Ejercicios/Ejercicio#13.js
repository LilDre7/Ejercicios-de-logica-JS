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
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 7, 7, 8, 9];
const objetivo = 10;

const encontrarParesQueSumen = (numbersArray, objetivo) => {
  const resultado = [];

  for (let i = 0; i < numbersArray.length - 1; i++) {
    for (let j = i + 1; j < numbersArray.length; j++) {
      const num1 = numbersArray[i];
      const num2 = numbersArray[j];
      if (num1 % 2 === 0 && num2 % 2 === 0 && num1 + num2 === objetivo) {
        resultado.push([num1, num2]);
      }
    }
  }

  return resultado;
};

const searchObjetivo = encontrarParesQueSumen(numbersArray, objetivo);
console.log(searchObjetivo);

// ! Escribe una función que reciba un array de objetos, donde cada objeto representa una persona con su nombre y edad, y devuelva un array con los nombres de las personas mayores de edad.

const people = [
  { name: "Alvaro", age: 12 },
  { name: "Jesus", age: 44 },
  { name: "Ana", age: 33 },
  { name: "LIl", age: 18 },
];

const searchPeople = (people) => {
  const only18 = people.filter((x) => x.age >= 18);
  return only18;
};

const onlyPersonMax = searchPeople(people);
console.log(onlyPersonMax);

// ! Escribe una función que reciba dos arrays de números y devuelva un array con los números que se repiten en ambos arrays.

const numbersArray1 = [1, 2, 3, 4, 5, 6, 7, 7, 7, 8, 9];
const numbersArray2 = [1, 2, 3];

const repeatNumbers = (numbersArray1, numbersArray2) => {
  const result = [];
  for (i in numbersArray1) {
    for (j in numbersArray2) {
      if (numbersArray1[i] === numbersArray2[j]) {
        result.push(numbersArray1[i]);
      }
    }
  }
  return result;
};

const resultEqual = repeatNumbers(numbersArray1, numbersArray2);
console.log(resultEqual);

// ! Escribe una función que reciba un array de números y devuelva un objeto con dos propiedades: la cantidad de números pares y la cantidad de números impares.

const numbersArray3 = [1, 2, 3];

const dobleArray = (numbersArray3) => {
  const result = {};

  for (i in numbersArray3) {
    if (numbersArray3[i] % 2 === 0) {
      result.pares = result.pares + 1 || 1;
    } else {
      result.impares = result.impares + 1 || 1;
    }
  }
  return result;
};

const resultDoble = dobleArray(numbersArray3);
console.log(resultDoble);

// ! Escribe una función que reciba un array de números y devuelva un array con los números ordenados de forma ascendente, sin utilizar el método sort().

const numArr = [1, 6, 56, 3, 2, 8, 4, 12];

const orderNumbers = (numArr) => {
  for (let i in numArr) {
    for (let j in numArr) {
      let numberAsc = numArr[i];
      let numberDesc = numArr[j];
      if (numberAsc < numberDesc) {
        numArr[i] = numberDesc;
        numArr[j] = numberAsc;
      }
    }
  }
  return numArr;
};

const resultOfOrder = orderNumbers(numArr);
console.log(resultOfOrder);

// ! Escribe una función que reciba un array de objetos, donde cada objeto representa una canción con su nombre y duración en segundos, y devuelva el tiempo total de reproducción de todas las canciones del array, en minutos y segundos.

const songs = [
  { name: "Bad Religion", duration: 220 },
  { name: "Sweet Child O' Mine", duration: 276 },
  { name: "I Will Survive", duration: 291 },
  { name: "The Greatest Showman", duration: 271 },
  { name: "The Queen Is Dead", duration: 275 },
  { name: "The King Is Dead", duration: 275 },
];

const totalTime = (songs) => {
  const newTime = [];

  for (i in songs) {
    const time = songs[i].duration;
    console.log(time);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const totalTime = `Minutos: ${minutes} Segundos: ${seconds}`;
    newTime.push(totalTime);
  }
  return newTime;
};

const resultTotalTime = totalTime(songs);
console.log(resultTotalTime);

// ! Escribe una función que reciba un array de números y devuelva un array con la suma acumulada de los números en cada posición del array.
const numbersArray4 = [1, 2, 3, 4, 5, 6, 7, 7, 7, 8, 9];

const sumAccrued = (numbersArray4) => {
  let sum = 0;

  for (i in numbersArray4) {
    for (j in numbersArray4) {
      sum += numbersArray4[j];
      result.push(sum);
    }
    return sum;
  }
};
const resultTotalSum = sumAccrued(numbersArray4);
console.log(resultTotalSum);

// ! Escribe una función que reciba un array de objetos, donde cada objeto representa un producto con su nombre, precio y cantidad en stock, y devuelva el precio total de todos los productos en stock.

const products = [
  { name: "Laptop", price: 1200, quantity: 2 },
  { name: "Mouse", price: 40, quantity: 4 },
  { name: "Keyboard", price: 60, quantity: 3 },
  { name: "Monitor", price: 200, quantity: 1 },
  { name: "Headset", price: 100, quantity: 2 },
  { name: "Mousepad", price: 20, quantity: 2 },
];

const totalPrice = (products) => {
  const result = [];

  const price = products.map((x) => x.price);
  console.log(price);

  const totalPrice = price.reduce((a, b) => a + b);
  console.log(totalPrice);

  result.push(totalPrice);

  return result;
};

const newTotalStock = totalPrice(products);
console.log(newTotalStock);

// ! Escribe una función que reciba un array de objetos, donde cada objeto representa una canción con su nombre, duración en segundos, y precio, y devuelva el nombre de la canción más cara.
