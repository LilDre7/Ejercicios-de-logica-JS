/* ************
 * Ejercicios *
************ */

const usuarios = [
  {
    nombre: 'Erik',
    edad: 29,
    correo: 'erik@academlo.com'
  },
  {
    nombre: 'Georg',
    edad: 33,
    correo: 'georg@academlo.com'
  },
  {
    nombre: 'Andrea',
    edad: 29,
    correo: 'andrea@hotmail.com'
  }
]


// Iteración
/* 1) Completa la siguiente función que use el ciclo for para recorrer todos los elementos de un arreglo y ejecute una función callback por cada uno de los elementos, cada vez que el callback se ejecute recibirá como parámetro el elemento en la posición i y este podrá ser utilizado en el callback. */

// Función de orden superior
function recorrer(arreglo, callback) {
  // Tu código aquí
  for(i in arreglo){
    callback(arreglo[i])
  }
};

// Función callback
function imprimirNombre(elemento) {
  // Tu código aquí
  console.log(elemento);
}


recorrer(usuarios, imprimirNombre)

// Busqueda - find
/* 2) Completa la siguiente función que use el ciclo for para recorrer todos los elementos de un arreglo y ejecute una función callback por cada uno de los elementos hasta que encuentre un elemento que cumpla con una condición provista por el callback, cuando un elemento cumpla con la condición nuestra función principal retornara el elemento que cumplió con la condición. */

/* Función de orden superior */
function encontrar(arreglo, callback) {
  // Tu código aquí
  for(i in arreglo){
    if (callback(arreglo[i])) {
        solucion = arreglo[i]
    }
  }
  return solucion
}

/* Función callback */
/* La condición del callback será que, el elemento que recibe sea iagual a 33, al ejecutar el callback para cada elemento la función principal retornará el objeto que contiene al usuario Georg, ya que es el elemento que cumple la condición. */

function buscarPorEmail(elemento) {
  return elemento.edad === 33
}

const resultado = encontrar(usuarios, buscarPorEmail)

console.log(resultado) // { name: 'Georg', age: 33, ...}



// filtrado - filter 
/* 3) Completa la siguiente función que use el ciclo for para recorrer todos los elementos de un arreglo y ejecute una función callback para cada uno de los elementos, cada vez que el callback se ejecute recibirá como parámetro el elemento en la posición i y retornará el elemento si cumple con una condición especificada en el callback, en caso contrario retornara un arreglo vacio []. */

/* Función de orden superior */
function filtrar(arreglo, callback) {
  // Tu código aquí
  let resultado = []
  for ( i in arreglo){
    if ( callback (arreglo[i])) {
      resultado.push(arreglo[i])
    }
  }
  return resultado
}

/* Función callback */
/* La condición del callback será que, el elemento que reciba sea menor o igual a 29, al ejecutar el callback para cada elemento la función principal retornará un arreglo con los elementos que cumplan con la condición, en este caso el arreglo que retornará será el siguiente: */
function buscarPorEdad(elemento) {
  return elemento.edad <= 29
}

const resultado2 = filtrar(usuarios, buscarPorEdad)
console.log(resultado2)


// Transformar - map
/* 4) Completa la siguiente función que use el ciclo for para recorrer todos los elementos de un arreglo y ejecute una función callback para cada uno de los elementos, cada vez que el callback se ejecute recibirá como parámetro el elemento en la posición i y retornará un nuevo arreglo con los resultados especificados en el callback, en caso contrario retornara un arreglo vacio. */

/* Función de orden superior */
function mapear(arreglo, callback) {
  // Tu código aquí
  let result = []
  for ( i in arreglo){
    if (callback (arreglo[i]))
    result.push(arreglo[i].nombre)
  }
  return result
}

/* Función callback */
/* Si en el callback especificamos lo siguiente "elemento.nombre", al ejecutar el callback para cada elemento la función principal retornará un nuevo arreglo que contendrá los nombres de todos los usuarios. */

function obtenerNombre(elemento) {
  return elemento.nombre
}

const resultado3 = mapear(usuarios, obtenerNombre)
console.log(resultado3)
