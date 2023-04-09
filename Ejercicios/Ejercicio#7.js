// Crea una función que reciba un arreglo de números y devuelva la suma de los elementos pares.

let numbersPar = [1, 5, 6, 8, 2, 4, 10, 24, 3, 11];

const sumaDeNumerosPares = (numbersPar) => {
     const result = numbersPar.filter((numero) => numero % 2 === 0);
     const sumaPar = result.reduce((date, sum) => date + sum);
     return sumaPar;
};

const suma = sumaDeNumerosPares(numbersPar);
console.log(suma);

// Crea una función que reciba un arreglo de objetos con la siguiente estructura: {nombre: 'nombre', edad: 20} y devuelva la persona más joven.
const arregloAge = [
     { nombre: "nombre", edad: 20 },
     { nombre: "nombre", edad: 23 },
     { nombre: "nombre", edad: 19 },
     { nombre: "nombre", edad: 34 },
];

const personMoreYoung = (arregloAge) => {
     const personaMasJoven = arregloAge.reduce((min, p) =>
          p.edad < min.edad ? p : min
     );
     return personaMasJoven;
};

const moreYoungOne = personMoreYoung(arregloAge);
console.log(moreYoungOne);

// Crea una función que reciba un arreglo de números y devuelva el segundo número más grande.

const NUMBER_ARRAY = [1, 23, 33, 74, 63, 5, 42, 43, 64, 100];

const secondMax = (NUMBER_ARRAY) => {
     const numbers = NUMBER_ARRAY.sort((max, min) => min - max);
     return numbers[1];
};

const secondNumber = secondMax(NUMBER_ARRAY);
console.log(secondNumber);

// Crea una función que reciba una cadena de texto y devuelva la longitud de la palabra más larga.

const cadenaDetexto = "Me gustan los chanchitos felices";

const palabraMasLarga = (cadenaDetexto) => {
     const palabras = cadenaDetexto.split(" ");

     return palabras.reduce((a, b) => {
          return b.length > a.length ? b : a;
     }, "");
};

const moreText = palabraMasLarga(cadenaDetexto);
console.log(moreText);

// Aqui lo que hacemos es recorrer el array del texto
const largeText = (cadenaDetexto) => {
     let resultado = "";
     cadenaDetexto.split("").forEach((elemento) => {
          resultado += elemento;
     });
     return resultado;
};

const encontrarCadena = largeText(cadenaDetexto);
console.log(encontrarCadena);

// Crea una función que reciba un arreglo de números y un número n, y devuelva un nuevo arreglo con los elementos mayores que n.

const numeros = [1, 3, 5, 19, 12, 73, 2];
const n = 5;

const numeroMayor = (numeros, n) => {
     const result = numeros.filter((numero) => numero > n);
     return result;
};

const getNumber = numeroMayor(numeros, n);
console.log(getNumber);

// Crea una función que reciba un arreglo de objetos con la siguiente estructura: {nombre: 'nombre', edad: 20} y devuelva la edad promedio.

const student = [
     { nombre: "nombre", edad: 20 },
     { nombre: "nombre", edad: 24 },
     { nombre: "nombre", edad: 19 },
     { nombre: "nombre", edad: 54 },
     { nombre: "nombre", edad: 63 },
     { nombre: "nombre", edad: 12 },
     { nombre: "nombre", edad: 15 },
];

const edadPromedio = (student) => {
     const edades = student.map((estudiante) => estudiante.edad);
     const sumaEdad = edades.reduce((total, edad) => total + edad);
     const promedio = sumaEdad / edades.length;
     return promedio.toFixed(0);
};

const edadPromedioDelosEstudiantes = edadPromedio(student);
console.log(edadPromedioDelosEstudiantes);

// Crea una función que reciba una cadena de texto y devuelva la misma cadena pero con las palabras en orden inverso.

const wordreverse = "La programacion es dificil pero es muy hermosa";

const alreves = (wordreverse) => {
     const cadenitaAlreves = wordreverse.split("").reverse().join("");
     return cadenitaAlreves;
};

const reverseElTexto = alreves(wordreverse);
console.log(reverseElTexto);

// Crea una función que reciba un arreglo de números y devuelva el producto de todos los elementos.

const sumNumeros = [36, 27, 33, 55, 72, 53, 48, 53, 12];

const sumNumbers = (sumNumeros) => {
     const sumarse = sumNumeros.reduce((num, sum) => num + sum);
     return sumarse;
};

const resultadoDelaSuma = sumNumbers(sumNumeros);
console.log(resultadoDelaSuma);

// Crea una función que reciba un arreglo de objetos con la siguiente estructura: {nombre: 'nombre', edad: 20} y devuelva un nuevo arreglo con los nombres de las personas mayores de edad.

const personasMayores = [
     { nombre: "nombre", edad: 20 },
     { nombre: "nombre", edad: 12 },
     { nombre: "nombre", edad: 13 },
     { nombre: "nombre", edad: 19 },
     { nombre: "nombre", edad: 13 },
     { nombre: "nombre", edad: 21 },
     { nombre: "nombre", edad: 64 },
     { nombre: "nombre", edad: 34 },
     { nombre: "nombre", edad: 18 },
];

const mayoresDeEdad = (personasMayores) => {
     const person = personasMayores
          .map((element) => element.edad)
          .filter((a) => a >= 18);
     return person;
};

const entranSoloMayoresDeEdad = mayoresDeEdad(personasMayores);
console.log(entranSoloMayoresDeEdad);

// Crea una función que reciba una cadena de texto y devuelva la cantidad de veces que aparece cada letra en la cadena.

const letra = "Soy Alvaro desarrollador de Software";

// const letraForSeach = (letra) => {

//      const frase = letra.split(" ")
//      const letraGet = []

//      for (i in frase) {
//           const letraX = frase[i];

//           for (j in letraX) {
//                const letraY = letraX[j];

//                if (letraY in letraGet) {
//                     letraGet[letraY] += 1;
//                } else {
//                     letraGet[letraY] = 1;
//                }
//           }
//      }

//      return letraGet;

//   };
// Segunda forma mas facil o bueno maso menos

const contar_letras = (letra) => {
     const letraGet = {};

     const partirLetras = letra.split(" ");

     const letraFilter = partirLetras.filter((x) => x.match(/[a-z]/i));

     letraFilter.forEach((x) => {
          x = x.toLowerCase();
          letraGet[x] = (letraGet[x] || 0) + 1;
     });

     return letraGet;
};

const letraRepetida = contar_letras(letra);
console.log(letraRepetida);

function contarLetras(letra) {
     const letraGet = {};

     for (let i = 0; i < letra.length; i++) {
          const letraActual = letra[i].toLowerCase();

          if (letraActual.match(/[a-z]/i)) {
               if (letraActual in letraGet) {
                    letraGet[letraActual] += 1;
               } else {
                    letraGet[letraActual] = 1;
               }
          }
     }

     return letraGet;
}
const letraRepetida2 = contarLetras(letra);
console.log(letraRepetida2);
