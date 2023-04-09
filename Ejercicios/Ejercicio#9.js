// Ejercicio Fibonacci

// ! Con ciclo for
const fibonacci = (limit) => {
  let result = [0, 1];
  let suma = 0;
  for (let i = 1; i < result.length; i++) {
    if (suma <= limit) suma = result[i] + result[i - 1];
    else break;
    result.push(suma);
  }
  result.pop();
  return result;
};

// ! Con ciclo while
const fibonacci2 = (limit) => {
  let result = [0, 1];
  let i = 1;
  while (result[i] + result[i - 1] <= limit) {
    result.push(result[i] + result[i - 1]);
    i++;
  }
  return result;
};

// ! Ordenar array de objetos: Escribe una función que acepte un array de objetos y los ordene en función de un atributo en común.

const arrObj = [
  {
    user: "Juanita",
    age: 18,
    school: "San Francisco",
  },
  {
    user: "Ana",
    age: 28,
    school: "San Francisco",
  },
  {
    user: "Varo",
    age: 78,
    school: "San Francisco",
  },
  {
    user: "Pedro",
    age: 28,
    school: "San Francisco",
  },
  {
    user: "Alvaro",
    age: 20,
    school: "San Francisco",
  },
];

const orderObj = (arrObj, user) => {
  let orderName = arrObj.sort((a , b) => a.user > b.user ? 1 : -1 ) 
  return orderName
};

const arrOrder = orderObj(arrObj);
console.log(arrOrder);


// ! Validar palíndromos: Escribe una función que acepte una cadena y verifique si es un palíndromo.

const poliName = "Alvaro";

const polidromos = (poliName) => {
  let x = poliName.toLowerCase();
  let j = x.split("").reverse().join("");
  if (j == x) {
    return "Si es un polindromo";
  } else {
    return "No es un polindromo";
  }
};

const isPolindromo = polidromos(poliName);
console.log(isPolindromo);

// ! FizzBuzz: Escribe una función que acepte un número n y devuelva una lista de números del 1 al n. Para los múltiplos de 3, la lista debe mostrar "Fizz" en su lugar, para los múltiplos de 5 "Buzz" y para los múltiplos de ambos "FizzBuzz".

// Encontrar la suma más grande: Escribe una función que acepte un array de números y encuentre la suma más grande de una subsecuencia contigua.

let arr = [23, 53, 46, 39, 33, 103, 633, 773, 98, 66];

const sumMoretall = (arr) => {
  let maxSum = arr[0];
  let currentSum = arr[0];

  for (i in arr) {
    currentSum = Math.max((currentSum += arr[i])); // calculamos la suma máxima hasta el elemento actual
    maxSum = Math.max(maxSum, currentSum); // actualizamos la suma máxima total
  }

  return maxSum;
};

const subSearch = sumMoretall(arr);
console.log(subSearch);

// Combinar dos arrays ordenados: Escribe una función que acepte dos arrays ordenados y devuelva un nuevo array combinado, también ordenado.



// Encontrar el elemento único: Escribe una función que acepte un array de números donde todos los elementos aparecen dos veces, excepto uno. La función debe devolver el número que aparece una sola vez.

let numberRep = [ 2 , 2 , 4 , 4 , 5 , 5 , 6 , 6 , 7];
let numberRep2 = [ 2 , 2 , 4 , 4 , 5 , 5 , 6 , 6 , 7];

const repTwoNumber = (numberRep) => {
  let n = 0
  for (let i = 0; i < numberRep.length; i++) {
    resultado = n ^= numberRep[i]
  }
  return resultado
}

const onlyNumb = repTwoNumber(numberRep)
console.log(onlyNumb);



const repTwoNumber2 = (numberRep2) => {
  let x = arr.filter((num, index) => numberRep2.indexOf(num) === index);
  return  x
}

console.log(repTwoNumber(numberRep2));

// Cálculo de factorial: Escribe una función que acepte un número y calcule su factorial.
const n = 8;

const factorial = (n) => {
  let res = 1;
  n == 0 || n == 1 ? (res = 1) : (res = n * factorial(n - 1));
  return res;
};

const easy = factorial(n);
console.log(easy);


