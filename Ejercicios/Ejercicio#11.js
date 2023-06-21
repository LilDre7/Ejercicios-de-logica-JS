/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

for (let i = 0; i < 100; )
  console.log((++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);

/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/)
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */

// 1: Se declara la frase que quiero que se pase a lenguaje hacker
const phrase = "Hecho por lil dree";
phrase.toString();

// 2: Se declara una constante leet que es un objeto que mapea letras del alfabeto a sus equivalentes en el lenguaje hacker.
const lenguajeHacker = (phrase) => {
  const leet = {
    a: "4",
    b: "8",
    c: "(",
    d: ")",
    e: "3",
    f: "f",
    g: "6",
    h: "[-]",
    i: "!",
    j: "_|",
    k: "|<",
    l: "1",
    m: "{V}",
    n: "<>",
    o: "|*",
    p: "|o",
    q: "0_",
    r: "|2",
    s: "5",
    t: "7",
    u: "(_)",
    v: "|/",
    w: "พ",
    x: "><",
    y: "`/",
    z: "%",
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    100: "Malparido",
  };

  // Lo que hace este hasOwnProperty es que si el objeto leet tiene una propiedad con ese nombre, entonces devuelve el valor de esa propiedad. De lo contrario enviara un error
  if (leet.hasOwnProperty(phrase)) {
    return leet[phrase];
  }

  for (i in leet) {
    phrase = phrase.replace(new RegExp(i, "g"), leet[i].toString());
  }

  return phrase;
};

console.log(lenguajeHacker(phrase));
