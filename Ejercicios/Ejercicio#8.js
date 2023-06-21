// Ejercicos de JavaScript codeChef

/* ******************************************************************************************************************
 * Chef y Chefina están jugando con dados. En un turno, ambos tiran sus dados a la vez.
 * Consideran que un turno es bueno si la suma de los números en sus dados es mayor que 6
 * Dado que en un giro particular Chef y Chefina obtuvieron X y Y En sus respectivos dados, averigua si el turno fue bueno.
 ****************************************************************************************************************** */

let X = 1;
let Y = 2;

const dicesTest = (X, Y) => {
<<<<<<< HEAD
  return X + Y < 6 ? "Giro no es bueno" : "Giro es bueno";
=======
     return X + Y < 6 ? "Giro no es bueno" : "Giro es bueno";
>>>>>>> a2e10ee20bf637be7e2db727a024580a4bed06cf
};

const testResult = dicesTest(X, Y);
console.log(testResult);

/* ******************************************************************************************************************
     * Apple considera que cualquier iPhone con una salud de batería de 80 % o superior, para estar en óptimas condiciones.
     * Dado que tu iPhone tiene X% estado de la batería, averigüe si está en condiciones óptimas.

     * Formato de entrada 
     * La primera línea de entrada contendrá un solo entero T, que indica el número de casos de prueba.
     * La primera y única línea de cada caso de prueba contiene un entero X — el estado de la batería.
     * Formato de salida

     * Para cada caso de prueba, salida en una nueva línea, YES, si la batería está en condiciones óptimas, y NO de lo contrario.
****************************************************************************************************************** */

let batería = 79;

const stateBatery = (batería) => {
<<<<<<< HEAD
  const state =
    batería >= 80
      ? "Bateria en buen estado"
      : "Estado de la bateria es precaria";
  return state;
=======
     const state =
          batería >= 80
               ? "Bateria en buen estado"
               : "Estado de la bateria es precaria";
     return state;
>>>>>>> a2e10ee20bf637be7e2db727a024580a4bed06cf
};

const estadoDeBateria = stateBatery(batería);
console.log(estadoDeBateria);

/* ******************************************************************************************************************
     * En una persecución clásica, Tom corre detrás de Jerry mientras Jerry ha comido la comida favorita de Tom.

     * Jerry está corriendo a una velocidad de X metros por segundo mientras Tom lo persigue a una velocidad de Y metros por segundo. Determina si Tom podrá atrapar a Jerry.

     * Tenga en cuenta que inicialmente Jerry no está en la misma posición que Tom.

     * Formato de entrada
     * La primera línea de entrada contendrá un solo entero T, que indica el número de casos de prueba.
     * Cada caso de prueba consta de dos enteros separados por espacio X y Y — las velocidades de Jerry y Tom respectivamente.

     * Formato de salida
     * Para cada caso de prueba, salida en una nueva línea, YES, si Tom podrá atrapar a Jerry. De lo contrario, la salida NO.
****************************************************************************************************************** */

const casosDePrueba = [[4, 3]];

const distaciaInicial = 100;

const JerryAndTom = (casosDePrueba) => {
<<<<<<< HEAD
  for (i in casosDePrueba) {
    const [X, Y] = casosDePrueba[i];
    const puntoDeEscape = (X / Y) * distaciaInicial;
    return puntoDeEscape > distaciaInicial
      ? "Lo atrapo Tom que sad 😓"
      : "No lo atrapo Tom";
  }
=======
     for (i in casosDePrueba) {
          const [X, Y] = casosDePrueba[i];
          const puntoDeEscape = (X / Y) * distaciaInicial;
          return puntoDeEscape > distaciaInicial
               ? "Lo atrapo Tom que sad 😓"
               : "No lo atrapo Tom";
     }
>>>>>>> a2e10ee20bf637be7e2db727a024580a4bed06cf
};

const loatrapo = JerryAndTom(casosDePrueba);
console.log(loatrapo);

// Suma de multiplos

let n = 9;

const multipliacionMultiplos = (n) => {
<<<<<<< HEAD
  let suma = 0;

  for (i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      suma += i;
    }
  }
  return suma;
=======
     let suma = 0;

     for (i = 1; i < n; i++) {
          if (i % 3 === 0 || i % 5 === 0) {
               suma += i;
          }
     }
     return suma;
>>>>>>> a2e10ee20bf637be7e2db727a024580a4bed06cf
};

const sumaMultiplo = multipliacionMultiplos(n);
console.log(sumaMultiplo);

// Contar vocales: Escribe una función que acepte una cadena y cuente el número de vocales en ella.

const f = "Hola mundo";

const vocalEncontrada = (f) => {
<<<<<<< HEAD
  const v = 0;

  const cArray = f
    .split("  ")
    .filter((c) => c == "a" || c == "e" || c == "i" || c == "o" || c == "u");
=======
     const v = 0;

     const cArray = f
          .split("  ")
          .filter((c) => c == "a" || c == "e" || c == "i" || c == "o" || c == "u");
>>>>>>> a2e10ee20bf637be7e2db727a024580a4bed06cf
};

const cuantasVocales = vocalEncontrada(f);
console.log(cuantasVocales);

// Invertir palabras: Escribe una función que acepte una cadena y devuelva una nueva cadena con las palabras invertidas.

const phrase = "Hola mundo";

const revesePhrase = (phrase) => {
<<<<<<< HEAD
  const x = phrase.split(" ").reverse().join();
  return x;
};
=======
     const x = phrase.split(" ").reverse().join()
     return x
}
>>>>>>> a2e10ee20bf637be7e2db727a024580a4bed06cf

const terPhrase = revesePhrase(phrase);
console.log(terPhrase);

<<<<<<< HEAD
/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  */

function ultimoCaracter(texto) {
  return texto.split(" ").at(-1);
=======

/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  */

function ultimoCaracter(texto) {
     return texto.split(" ").at(-1);
>>>>>>> a2e10ee20bf637be7e2db727a024580a4bed06cf
}

// Los test no deben modificarse
const test = ultimoCaracter("Hola, me llamo Jesús");
console.log(test == "Jesús");

let cadena = "Hola, me llamo Jesús";
console.log(cadena.includes("Jesús"));

let text1 = "Hola, me llamo Jesús";
console.log(text1.split(" ").at(-1));

const letters = ["Hola, me llamo Jesús"];

letters.at(1);
letters.at(3);
letters.at(-1);
letters.at(-2);

console.log(letters[0].split(" ").at(-1));

function findLastWord(text) {
<<<<<<< HEAD
  // escribe tu solución aquí
  let word = text.split(" ");
  // let resultado = word[1]
  return word[1];
=======
     // escribe tu solución aquí
     let word = text.split(" ");
     // let resultado = word[1]
     return word[1];
>>>>>>> a2e10ee20bf637be7e2db727a024580a4bed06cf
}

let text = findLastWord("Estoy aprendiendo JavaScript en Academlo");
console.log(text == "aprendiendo");

user = { name: "Jesús", email: "jesus@academlo.com" };
let correo = user.email;

console.log(correo);

// Suma los elementos de un arreglo el resultado debe ser == 6

let numbers = [1, 2, 3];

let sum1 = numbers[1] + [2] + [0];

console.log(sum1);

// Suma los elementos de un arreglo el resultado debe ser == 6
const array = [1, 2, 3];
let sum = 0;

for (let i = 0; i < array.length; i++) {
<<<<<<< HEAD
  sum += array[i];
=======
     sum += array[i];
>>>>>>> a2e10ee20bf637be7e2db727a024580a4bed06cf
}
console.log(numbers.length);

const arr = [1, 2, 3];

const reducer = (accumulator, curr) => accumulator + curr;
console.log(arr.reduce(reducer));

// Contar los numeros el resultado debe ser == 3

function resultadotres(number) {
<<<<<<< HEAD
  // escribe tu solución aquí
  let word = number;
  let resultado = word.toString();
  return resultado;
=======
     // escribe tu solución aquí
     let word = number;
     let resultado = word.toString();
     return resultado;
>>>>>>> a2e10ee20bf637be7e2db727a024580a4bed06cf
}

let number = resultadotres(128);
console.log(number == 3);

let number1 = 128;

let suma = number1.toString().split("");
let resultado = suma.length;

console.log(resultado);
