/*
 * Crea una función que sea capaz de detectar si existe un viernes 13
 * en el mes y el año indicados.
 * - La función recibirá el mes y el año y retornará verdadero o falso.
 */

let mes = 1;
let año = 2020;
// Función existeViernes13(mes, año):
const existeViernes13 = (mes, año) => {
  // Paso 1: Obtener el día de la semana para el 13 de ese mes y año
  let díaDeLaSemana13 = obtenerDíaDeLaSemana(13, mes, año);
  // Paso 2: Verificar si el día de la semana es viernes (5) y retornar verdadero o falso
  if (díaDeLaSemana13 === 5) {
    return true;
  } else {
    false;
  }
};

//     si díaDeLaSemana13 es igual a 5 entonces
//         retornar verdadero
//     sino
//         retornar falso

// Fin Función

// Función obtenerDíaDeLaSemana(día, mes, año):
// Algoritmo de Zeller para calcular el día de la semana
//     si mes es igual a 1 o mes es igual a 2 entonces
//         mes = mes + 12
//         año = año - 1

//     k = año % 100
//     j = año / 100
//     díaDeLaSemana = (día + (13 * (mes + 1)) / 5 + k + (k / 4) + (j / 4) + 5 * j) % 7

//     retornar díaDeLaSemana

// Fin Función
