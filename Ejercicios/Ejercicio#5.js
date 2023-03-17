/*
    * Crea una función que reciba dos números como parámetros y devuelva la suma de ellos.
*/

const suma = (a,b) =>  a + b
console.log(suma(5 , 2));

/*  
    * Crea una función que reciba una cadena de texto como parámetro  y devuelva la longitud de la cadena.
*/

const texto = (text) => text.length

console.log(texto('Hola mundo soy Alvaro y me gusta mucho el coding'));



/* 
    *Crea una función que reciba un número como parámetro y devuelva "par" si el número es par y "impar" si el número es impar.
*/
let parNumber = 2 

const parNumberImpar = (parNumber) => {    
    if ( parNumber % 2 == 0) {
        return 'Es numero Par'
    }else {
        return 'Es un numero impar'
    }
}
console.log(parNumberImpar());

/*
    *Crea una función que reciba una cadena de texto como parámetro y devuelva la misma cadena pero con todas las letras en mayúscula.
*/

let texto1 = 'Me gusta mcuho el coding y me gusta js'

const mayúsculaCase = () => {
    return texto1.toLocaleUpperCase()
}

console.log(mayúsculaCase());

/*
    * Crea una función que reciba una cadena de texto como parámetro y devuelva la misma cadena pero con todas las letras en minúscula.
*/

    const minúsculaCase = () => {
        return texto1.toLocaleLowerCase()
    }
    console.log(minúsculaCase());

/*   
    * Crea una función que reciba un arreglo de números como parámetro y devuelva la suma de todos los números del arreglo.
*/

    let arregloNum = [ 2 , 5 , 6 , 4 , 8 , 8 , 7 , 8];

    const sumaNumber = () => {
        const sumaArray = arregloNum.reduce (( a , b) => a + b )
        return sumaArray;
    }
    console.log(sumaNumber());

    /*
    * sumar arregloNum
    * let sum = 0
    * for
    * sum += numero[i]
    * console.log(object);
    */

/* 
    * Crea una función que reciba un arreglo de números como parámetro y devuelva el número más grande del arreglo.
*/
    let arregloMax = [ 2 , 5 , 6 , 4 , 8 , 10 , 7 , 8];

    const maxNumber = () => {
        const max = Math.max(...arregloMax)
        return max
    }
    console.log(maxNumber());
    


/* 
    * Crea una función que reciba un objeto con dos propiedades "nombre" y "edad" como parámetro y devuelva un mensaje que diga "Hola [nombre], tienes [edad] años".
*/

let persona = {
    nombre: 'Alvaro',
    apellido: 'Abueto',
    edad: 20,
    cuidad: 'Costa Rica'
}
console.log(`Hola soy ${persona.nombre} y tengo ${persona.edad} años`);

const user = () => {
    return `Hola soy ${persona.nombre} y tengo ${persona.edad} años`
}

console.log(user());

/* 
    * Crea una función que reciba un arreglo de objetos con dos propiedades "nombre" y "edad" como parámetro y devuelva un arreglo con los nombres de las personas que tienen más de 18 años.
*/

let usuario = [
    {
        nombre: 'Alvaro',
        edad: 20
    },
    {
        nombre: 'Erick',
        edad: 18
    },
    {
        nombre: 'Winston',
        edad: 15
    },
    {
        nombre: 'Aaron',
        edad: 9
    },
    {
        nombre: 'Flor',
        edad: 40
    },
    {
        nombre: 'Papa Varo',
        edad: 39
    },
]

const userEdad = () => {
    let maxAge = usuario.filter(usuario => usuario.edad > 18)
    return maxAge
}
console.log(userEdad());


/* 
    * Crea una función que reciba dos arreglos de números como parámetros y devuelva un nuevo arreglo con los números que están en ambos arreglos.
*/

    let number = [1 , 2 ,3 ]
    let number1 = [4 , 5 ,6 ]

    const unirNumbers = () => {
        let unir = number.concat(number1)
        return unir
    }
    console.log(unirNumbers());




/*
    * Risas Locas van a recibir un arreglo con "j" y "a" de manera desorganizada, la idea es que creen un programa en el que ordenen el arreglo para que al final quede una risa como ejemplo "[j , a, j, a, j, a]"
*/
    const arregloDesordenado = ['j', 'a', 'a', 'a', 'j', 'a', 'a', 'j'];



/* ***************************
    * Unir arreglos de objetos 
*************************** */

// const arr = [{id: 1, n: 'a'}, {id: 2, n: 'b'}]

// const arr2 = [{arr_1: 2}, {arr_1: 1}]

// console.log(arr2[0].n = arr[1].n)
// console.log(arr2[1].n = arr[0].n)

// console.log(arr2)

/* ************************ */
