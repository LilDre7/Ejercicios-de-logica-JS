// Ejercios JS

/*
    * Calcular el factorial de un numero dado
*/

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }
}
console.log(factorial(5));

/*
* Escribe una función que tome una cadena como parámetro y devuelva la cadena en orden inverso.
*/


const string = "Soy Alvaro y soy developer";
const reverseString = str => str.split('').reverse().join('');

console.log(reverseString(string));

/*
    *Escribe una función que tome un número como parámetro y devuelva verdadero si es un número primo, de lo contrario, falso.
*/

const number = 3

const isCousin = (number) => {
    if (number % 2 == 0) {
        return 'Es primo'
    } else {
        return 'No es primo'
    }
}
console.log(isCousin(number));

/*
    * Escribe una función que tome una matriz de números como parámetro y devuelva la suma de los dos números más grandes en la matriz.
*/

let sumMasLargo = [3, 7, 14, 21, 77, 9, 40, 39, 20]
console.log(sumMasLargo.sort());

const sumMasLarge = (sumMasLargo) => {
    sumMasLargo.sort((a, b) => b - a);
    let sumaSearch = sumMasLargo[0] + sumMasLargo[1];
    return sumaSearch
}

console.log(sumMasLarge(sumMasLargo));

/*
* Crea un archivo JS que contenga las siguientes líneas
    * Una variable que contenga la lista de la compra (mínimo 5 elementos) ✔️
    * Modifica la lista de la compra y añádele "Aceite de Girasol"✔️
    * Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol" ✔️
    * Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha) ✔️
    * Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
    * Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
    * Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
    * Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
    * Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
*/

let buys = ['Vegetales', 'Frutas', 'Juguetes', 'Tenis', 'Joyas'];

const modifyingBuys = () => {
    buys.splice(1, 0, 'Iphone')
    buys.splice(1, 1)
    return buys
}

console.log(modifyingBuys());

const peliculasFavoritas = [
    {
        titulo: 'El Padrino',
        director: 'Francis Ford Coppola',
        fecha: 1972
    },
    {
        titulo: 'The Dark Knight',
        director: 'Christopher Nolan',
        fecha: 2008
    },
    {
        titulo: 'La La Land',
        director: 'Damien Chazelle',
        fecha: 2016
    },
    {
        titulo: 'Piñocho',
        director: 'Victor Muñez',
        fecha: 2022
    }
];

const modifyingArray = () => {
    const fechaSearch = 
    filter(x => x == peliculasFavoritas.fecha == x == 2010)
    return fechaSearch
}

console.log(modifyingArray());

const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 16 },
    { nombre: 'Pedro', edad: 32 },
    { nombre: 'Lucía', edad: 19 }
];

const personasMayores = personas.filter(function(persona) {
return persona.edad >= 18;
});
console.log(personasMayores);

