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

let text = "affaajkk";

// !! Esta es la forma resumida 😁🐧
function isPalindromo(text) {
  let frequency = {};
  for (let i in text) {
    frequency[text[i]] = frequency[text[i]] + 1 || 1;
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
