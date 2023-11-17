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
