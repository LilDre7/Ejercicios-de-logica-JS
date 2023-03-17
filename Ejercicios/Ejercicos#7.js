// Crea una función que reciba un arreglo de números y devuelva la suma de los elementos pares.

let numbersPar = [1, 5, 6, 8, 2, 4, 10, 24, 3, 11];


const sumaDeNumerosPares = (numbersPar) => {
     const result = numbersPar.filter(numero => numero % 2 === 0);
     const sumaPar = result.reduce((date, sum) => date + sum);
     return sumaPar;
}

const suma = sumaDeNumerosPares(numbersPar)
console.log(suma);

// Crea una función que reciba un arreglo de objetos con la siguiente estructura: {nombre: 'nombre', edad: 20} y devuelva la persona más joven.
const arregloAge = [
     { nombre: 'nombre', edad: 20 },
     { nombre: 'nombre', edad: 23 },
     { nombre: 'nombre', edad: 19 },
     { nombre: 'nombre', edad: 34 }
]

const personMoreYoung = (arregloAge) => {
     const personaMasJoven = arregloAge.reduce((min, p) => p.edad < min.edad ? p : min);
     return personaMasJoven
}

const moreYoungOne = personMoreYoung(arregloAge)
console.log(moreYoungOne);


// Crea una función que reciba un arreglo de números y devuelva el segundo número más grande.

const NUMBER_ARRAY = [1, 23, 33, 74, 63, 5, 42, 43, 64, 100]

const secondMax = (NUMBER_ARRAY) => {
     const numbers = NUMBER_ARRAY.sort((max, min) => min - max)
     return numbers[1]
}

const secondNumber = secondMax(NUMBER_ARRAY);
console.log(secondNumber);

// Crea una función que reciba una cadena de texto y devuelva la longitud de la palabra más larga.

const cadenaDetexto = "Me gustan los chanchitos felices"


const palabraMasLarga = (cadenaDetexto) => {

     const palabras = cadenaDetexto.split(' ');

     return palabras.reduce((a, b) => {
          return b.length > a.length ? b : a;
     } , "" );

};

const moreText = palabraMasLarga(cadenaDetexto)
console.log(moreText);


// Aqui lo que hacemos es recorrer el array del texto
const largeText = (cadenaDetexto) => {
     let resultado = "";
     cadenaDetexto.split('').forEach(elemento => {
          resultado += elemento;
     });
     return resultado;
};

const encontrarCadena = largeText(cadenaDetexto)
console.log(encontrarCadena);




// Crea una función que reciba un arreglo de números y un número n, y devuelva un nuevo arreglo con los elementos mayores que n.

const numeros = [ 1, 3 , 5 , 19 , 12 , 73 , 2]
const n = 5;

const numeroMayor = (numeros , n) => {
     const result = numeros.filter(numero => numero > n);
     return result
}

const getNumber = numeroMayor(numeros , n);
console.log(getNumber);





// Crea una función que reciba un arreglo de objetos con la siguiente estructura: {nombre: 'nombre', edad: 20} y devuelva la edad promedio.

// Crea una función que reciba una cadena de texto y devuelva la misma cadena pero con las palabras en orden inverso.

// Crea una función que reciba un arreglo de números y devuelva el producto de todos los elementos.

// Crea una función que reciba un arreglo de objetos con la siguiente estructura: {nombre: 'nombre', edad: 20} y devuelva un nuevo arreglo con los nombres de las personas mayores de edad.

// Crea una función que reciba una cadena de texto y devuelva la cantidad de veces que aparece cada letra en la cadena.