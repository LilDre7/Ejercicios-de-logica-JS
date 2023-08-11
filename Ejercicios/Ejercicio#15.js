// Ejercicio 1
// Escriba una función que reciba un numero y devuelva el factorial de ese numero.
// Ejemplo:
// Factorial de 5: 5 * 4 * 3 * 2 * 1 = 120

let numbers = 5;

const factorial = (numbers) => {
  for (i = numbers - 1; i > 0; i--) {
    console.log(numbers - 1);
    numbers = numbers * i;
  }
  return numbers;
};

const resultFact = factorial(numbers);
console.log(resultFact);

// Ejercicio 2
// Escriba una función que reciba un numero y devuelva el cubo de ese numero.
// Ejemplo:
// Cubo de 5: 5 * 5 * 5 = 125

console.log("Hello World");

const numberCubes = 5;

const numberCube = (numberCubes) => {
  const cubo = numberCubes * numberCubes * numberCubes;
  return cubo;
};

const resultCube = numberCube(numberCubes);
console.log(resultCube);

// Ejercicio 3
// Escriba una función que reciba un numero y devuelva el cuadrado de ese numero.
// Ejemplo:
// Cuadrado de 5: 5 * 5 = 25

const numberCubeX = (numberCubes) => {
  const cuadrado = numberCubes * numberCubes;
  return cuadrado;
};

const resultCubeX = numberCubeX(numberCubes);
console.log(resultCubeX);

// Contar las edades de los usuarios del array

const users = [
  { name: "Juan", age: 20 },
  { name: "Pedro", age: 30 },
  { name: "Maria", age: 40 },
  { name: "Luis", age: 50 },
  { name: "Ana", age: 60 },
];

const totalAge = users.reduce((obj, user) => {
  obj[user.age] ? obj[user.age]++ : (obj[user.age] = 1);
  return obj;
}, {});

console.log(totalAge);

// Hacer una implementacion del reduce

// ** Invierte el orden de un subarreglo ** //
// Ejemplo: faaff es true porque alrevez es la misma frase
// Ejemplo: affaajkk es false porque alrevez es la misma frase pero con unos caracteres mas

let text = "pedro";

// !! Esta es la forma resumida 😁🐧
function isPalindromo(text) {
  let frequency = {};
  for (let i in text) {
    frequency[text[i]] = frequency[text[i]] + 1 || 1;
    console.log(frequency[text[i]]);
  }

  let countImpar = 0;
  for (let char in frequency) {
    frequency[char] % 2 !== 0 ? countImpar++ : countImpar;
  }
  return countImpar > 1 ? false : true;
}

console.log(isPalindromo(text));

// !! Esta es la forma tradicional 🤺🎉
function isPalindromo2(text) {
  const minText = text.toLowerCase().trim();

  const frecuency = {};

  for (const i in minText) {
    const char = minText[i];
    frecuency[char] = frecuency[char] + 1 || 1;
  }

  let cantidadImpares = 0;
  for (const char in frecuency) {
    if (frecuency[char] % 2 !== 0) {
      cantidadImpares++;
    }
    if (cantidadImpares > 1) {
      return false;
    }
  }
  return true;
}

console.log(isPalindromo2(text));

// !! Invierte el orden de un subarreglo //
// !! La función reverseSubArray() recibe los siguientes parámetros //

const array = [1, 2, 3, 4, 5];

function reverseSubArray(array, startIndex, endIndex) {
  const newArr = [...array];
  const cantidadElementos = endIndex - startIndex + 1;

  const mitad = Math.floor(cantidadElementos / 2);

  for (let i = 0; i < mitad; i++) {
    const temp = newArr[startIndex + i];
    newArr[startIndex + i] = newArr[endIndex - i];
    newArr[endIndex - i] = temp;
  }
  return newArr;
}

console.log(reverseSubArray(array, 1, 3));

/*
El método slice() toma una porción del arreglo desde el índice startIndex hasta endIndex + 1. Esto crea un nuevo arreglo llamado subArray que contiene los elementos que queremos invertir. El endIndex + 1 se utiliza para que el rango sea inclusivo.
subArray.reverse():

El método reverse() invierte el orden de los elementos en el arreglo subArray. Ahora, los elementos que estaban al principio del subarreglo estarán al final y viceversa.
array.splice(startIndex, subArray.length, ...subArray):

El método splice() se utiliza para reemplazar una porción de elementos dentro del arreglo original (array). Los parámetros son:
startIndex: El índice a partir del cual se realizará el reemplazo.
subArray.length: La cantidad de elementos a ser reemplazados, que es igual a la longitud del subArray invertido.
...subArray: Los nuevos elementos que serán insertados en lugar de los elementos originales. Aquí usamos el operador de propagación (...) para pasar los elementos individuales del subArray.
return array;

Finalmente, la función retorna el arreglo array modificado con los elementos invertidos dentro del rango especificado.
En resumen, este enfoque utiliza los métodos slice() para obtener el subarreglo, reverse() para invertirlo y splice() para reemplazar los elementos originales en el arreglo con los elementos invertidos del subarreglo. El resultado final es que el subarreglo dentro del rango dado es invertido en el arreglo original.
*/

function reverseArray(array, startIndex, endIndex) {
  // Uso slice para obtener un subarreglo y reverse() para invertirlo
  // Y uso splice para reemplazar los elementos originales en el arreglo con los elementos invertidos del subarreglo
  const subArray = array.slice(startIndex, endIndex + 1).reverse();
  array.splice(startIndex, subArray.length, ...subArray);
  return array;
}

console.log(reverseArray(array, 1, 3));
