// Conversor de números romanos
// Convierte el número proporcionado en un número romano.

function convertirARomano(numero) {
  const valoresRomanos = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  const simbolosRomanos = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let resultado = "";

  for (let i = 0; i < valoresRomanos.length; i++) {
    while (numero >= valoresRomanos[i]) {
      resultado += simbolosRomanos[i];
      numero -= valoresRomanos[i];
    }
  }

  return resultado;
}

// Prueba
console.log(convertirARomano(3549)); // Salida: MMMDXLIX

// Devuelve true si la cadena proporcionada es un palíndromo. De lo contrario, devuelve false.

// Un palíndromo es una palabra o frase que se escribe de la misma manera hacia adelante y hacia atrás, ignorando la puntuación, mayúsculas, minúsculas y espaciado.

const palabra = "Yo gane";

function esPalindrom(palabra) {
  const cadenaLimpia = palabra.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const longitud = cadenaLimpia.length;

  let initial = 0;
  let final = longitud - 1;

  while (initial < final) {
    if (cadenaLimpia[initial] !== cadenaLimpia[final]) {
      return false;
    }
    initial++;
    final--;
  }
  return true;
}

const deleteNoAlfanumeric = (palabra) => {
  let cleanWord = "";

  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i].match(/[a-zA-Z0-9]/)) {
      cleanWord += palabra[i];
    }
  }
  return cleanWord;
};

console.log(deleteNoAlfanumeric(palabra));
