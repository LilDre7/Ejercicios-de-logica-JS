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

/*
 * Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
 * El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
 * gane cada punto del juego.
 *
 * - Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
 * - Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
 *   15 - Love
 *   30 - Love
 *   30 - 15
 *   30 - 30
 *   40 - 30
 *   Deuce
 *   Ventaja P1
 *   Ha ganado el P1
 * - Si quieres, puedes controlar errores en la entrada de datos.
 * - Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.
 */

const secuencia = ["P2", "P2", "P2", "P2", "P1", "P2", "P1", "P1"];
const puntosGame = ["Love", 15, 30, 40, "Deuce"];

let p1 = 4;
let p2 = 4;

const juego = (secuencia) => {
  for (let i of secuencia) {
    i === "P1" ? p1++ : p2++;
    if (p1 === 4 && p2 === 4) {
      console.log("Deuce");
    } else if (p1 === p2 && p1 >= 3) {
      console.log("Deuce");
    } else if (p1 >= 4 && p1 - p2 === 1) {
      console.log("Ventaja P1");
    } else if (p2 >= 4 && p2 - p1 === 1) {
      console.log("Ventaja P2");
    } else if (p1 >= 4 && p1 - p2 >= 2) {
      console.log("Ha ganado el P1");
      return "Fin del juego";
    } else if (p2 >= 4 && p2 - p1 >= 2) {
      console.log("Ha ganado el P2");
      return "Fin del juego";
    } else {
      console.log(`${puntosGame[p1]} - ${puntosGame[p2]}`);
    }
  }

  return "Fin del juego";
};

juego(secuencia);

/*
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
 */

const generarContrasena = () => {
  let password = "";
  const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
  const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numerosAleatorios = "0123456789";
  const simbolos = "!@#$%^&*()_+";
  const longitud = Math.floor(Math.random() * (16 - 8) + 8);

  password = letrasMayusculas ? password.concat(letrasMayusculas) : password;
  password = letrasMinusculas ? password.concat(letrasMinusculas) : password;
  password = numerosAleatorios ? password.concat(numerosAleatorios) : password;
  password = simbolos ? password.concat(simbolos) : password;

  let contrasena = "";
  for (let i = 0; i < longitud; i++) {
    contrasena += password.charAt(Math.floor(Math.random() * password.length));
  }

  return contrasena;
};

console.log(generarContrasena());
