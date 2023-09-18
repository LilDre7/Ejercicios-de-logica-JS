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

Ejercicio 1: Encontrar el número mayor
Escribe una función que tome un arreglo de números como argumento y devuelva el número más grande en el arreglo.

Consejo: Puedes usar un bucle para recorrer el arreglo y mantener un seguimiento del número más grande a medida que avanzas.

Ejercicio 2: Contar palabras en una cadena
Escribe una función que cuente cuántas palabras hay en una cadena de texto. Puedes asumir que las palabras están separadas por espacios.

Consejo: Puedes dividir la cadena en un arreglo usando split(' ') y luego contar cuántos elementos hay en ese arreglo.

Ejercicio 3: Comprobar si una palabra es un palíndromo
Escribe una función que determine si una palabra es un palíndromo (se lee igual de izquierda a derecha y viceversa), ignorando los espacios y mayúsculas/minúsculas.

Consejo: Puedes eliminar los espacios y convertir la palabra a minúsculas o mayúsculas para simplificar la comparación.

Ejercicio 4: Calcular el factorial de un número
Escribe una función que calcule el factorial de un número entero. El factorial de un número es el producto de todos los enteros positivos menores o iguales a ese número.

Consejo: Puedes usar un bucle para calcular el factorial. Asegúrate de manejar el caso especial de 0.

Ejercicio 5: Encontrar números primos
Escribe una función que tome un número como argumento y determine si es primo (solo divisible por 1 y por sí mismo).

Consejo: Puedes usar un bucle para verificar si el número es divisible por algún otro número entre 2 y su raíz cuadrada (para mejorar la eficiencia).