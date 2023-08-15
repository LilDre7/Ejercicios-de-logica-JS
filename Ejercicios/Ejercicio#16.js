/*
 * Crea una función que sea capaz de detectar si existe un viernes 13
 * en el mes y el año indicados.
 * - La función recibirá el mes y el año y retornará verdadero o falso.
 */

function detectarViernes13(mes, año) {
  const fecha = new Date(año, mes - 1, 13);
  return fecha.getDay() === 5;
}

console.log(detectarViernes13(10, 2023));

/*
 * Dada una URL con parámetros, crea una función que obtenga sus valores.
 * No se pueden usar operaciones del lenguaje que realicen esta tarea directamente.
 *
 * Ejemplo: En la url https://retosdeprogramacion.com?year=2023&challenge=0
 * los parámetros serían ["2023", "0"]
 */

const url = "https://retosdeprogramacion.com?year=2023&challenge=0&perfil=120";

const searchUrl = (url) => {
  const paramValor = url.split("?")[1].split("&");
  const paramValors = paramValor.map((param) => param.split("=")[1]);
  return paramValors;
};
console.log(searchUrl(url));
