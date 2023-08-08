// Ejercicio 1
// Escriba una función que reciba un numero y devuelva el factorial de ese numero.
// Ejemplo:
// Factorial de 5: 5 * 4 * 3 * 2 * 1 = 120

let numbers = 5;

const factorial = (numbers) => {
  for (i = numbers - 1; i > 0; i--) {
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
