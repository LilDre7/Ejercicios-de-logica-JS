/* 
    Crear un juego de adivinanza de números:
    Generar un número aleatorio entre 1 y 100.
    Pedir al usuario que adivine el número.
    Si el número adivinado es incorrecto, decirle al usuario si el número que debe adivinar es mayor o menor que el número adivinado.
    Continuar pidiendo al usuario que adivine hasta que adivine el número correcto. 
*/

    let numberAleatorio = Math.floor(Math.random() * 5) + 1;                                   
    console.log(numberAleatorio);
    let numUser = 4;
    numUser = parseInt(numUser);

    if ( numUser === numberAleatorio ) {
        console.log('Haz ganado');
    } if( numUser > numberAleatorio) {
        console.log(`Tu numero es mayor que ${numUser}`);
    }else if ( numUser < numberAleatorio){
        console.log(`Tu numero es menor a ${numberAleatorio}`);
    }

/*
    * Crear una función que reciba una cadena y la convierta en su forma de "kebab case":
    * Eliminar cualquier espacio en blanco y convertir la primera letra de cada palabra en minúscula.
    * Reemplazar los espacios con guiones "-".
    * Ejemplo: "Hello World" => "hello-world".
*/

        let text = 'Hola soy Alvaro Aburto y me encanta el coding'
        
        function changetext () {
            let resultado = text.toLocaleLowerCase().replace(/ /g, "-" )
            return resultado
        }
        console.log(changetext());



/*
    * Crear una función que reciba un objeto y devuelva una cadena de consulta URL codificada:
    * Convertir cada propiedad y valor del objeto en una cadena de consulta URL (por ejemplo, "nombre=Juan").
    * Unir cada cadena de consulta URL con el carácter "&".
    * Codificar la cadena resultante con la función encodeURIComponent().
*/

    const player = {
        name: "Manz",
        apellidp: 'Aburto',
        edad: 20,
        estudia: 'Programacion',
        vive: 'Costa Rica'
    };
    
    let queryString = Object.keys(player)
    .map(key => key + '=' + encodeURIComponent(player[key]))
    .join('&');

    console.log(queryString);




/*
    * Crear una función que calcule el producto escalar de dos vectores:
    * Recibir dos vectores como parámetros, que pueden ser arreglos de cualquier longitud.
    * Multiplicar cada elemento del primer vector por el elemento correspondiente del segundo vector.
    * Sumar los productos resultantes.
    * Ejemplo: [1, 2, 3] y [4, 5, 6] => 14 + 25 + 3*6 = 32.
*/
    let vec1 = [1, 2, 3] 
    let vec2 = [4, 5, 6]
    function vectores () {
    // if (vec1.length !== vec2.length) {
    //     throw "Los vectores deben tener la misma longitud.";
    // }
    let result = 0;
    for (let i = 0; i < vec1.length; i++) {
    result += vec1[i] * vec2[i];
    }
    return result;
    }
    console.log(vectores());

/* 
    * Crear una función que busque el elemento más común en una matriz:
    * Recibir una matriz como parámetro.
    * Crear un objeto que contenga cada elemento de la matriz como propiedad y su frecuencia como valor.
    * Recorrer el objeto y devolver la propiedad con el valor máximo.
    * Ejemplo: [1, 2, 3, 2, 2, 4, 5] => 2.
*/ 
    let numbers = [1, 2, 3, 2, 2, 4, 5]
    
    function moda (numbers) {
        let contador = []
        let numeroModa;
        let contadorMasAlto = 0
        for ( let i = 0; i < numbers.length; i++){
            const numero = numbers[i];
            if (contador[numero]) {
                contador[numero]++
            }else {
                contador[numero] = 1
            }
            if ( contador[numero] > contadorMasAlto) {
                contadorMasAlto = contador[numero]
                numeroModa = numero;
            }
        }
        return numeroModa
    }
    console.log(moda(numbers));
