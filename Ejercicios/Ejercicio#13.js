// ! Escribe una función que reciba un array de números y devuelva un array con los números pares del array original.
  let arrayNumbers = [2, 4, 5, 6, 64, 4, 9, 3, 33, 1, 22, 1, 2, 4, 5, 4, 6, 34, 77 , 99];

  const arrayPares = (arrayNumbers) => {
    const onlyPares = arrayNumbers.filter( x => x % 2 == 0 )
    return onlyPares
  }
  const result = arrayPares(arrayNumbers);
  console.log(result);


// ! Escribe una función que reciba un array de palabras y devuelva un array con las palabras que empiecen con la letra "a".

  let palabrasRandom = [ 
    "Alvaro",
    "Jesus",
    "Ana", 
    "Britanny",
    "Juanita",
    "Teresa",
    "Winston",
    "Erick",
    "aaron"
  ];

  const letraA = (palabrasRandom) => {
    const changeOne = palabrasRandom.map( x => x.toLocaleLowerCase())

    const palabras = [];

    for ( i in changeOne) {
          if ( changeOne[i][0].includes("a")) {
            palabras.push(changeOne[i])
          }
    }
    
    return palabras
  } 

  const palabraEncontrada = letraA(palabrasRandom);
  console.log(palabraEncontrada);

// ! Escribe una función que reciba un array de números y un número objetivo, y devuelva un array con los pares de números del array original que sumen el número objetivo.

// ! Escribe una función que reciba un array de objetos, donde cada objeto representa una persona con su nombre y edad, y devuelva un array con los nombres de las personas mayores de edad.

// ! Escribe una función que reciba dos arrays de números y devuelva un array con los números que se repiten en ambos arrays.

// ! Escribe una función que reciba un array de números y devuelva un objeto con dos propiedades: la cantidad de números pares y la cantidad de números impares.

// ! Escribe una función que reciba un array de números y devuelva un array con los números ordenados de forma ascendente, sin utilizar el método sort().

// ! Escribe una función que reciba un array de objetos, donde cada objeto representa una canción con su nombre y duración en segundos, y devuelva el tiempo total de reproducción de todas las canciones del array, en minutos y segundos.

// ! Escribe una función que reciba un array de números y devuelva un array con la suma acumulada de los números en cada posición del array.

// ! Escribe una función que reciba un array de objetos, donde cada objeto representa un producto con su nombre, precio y cantidad en stock, y devuelva el precio total de todos los productos en stock.