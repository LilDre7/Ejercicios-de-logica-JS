//? Ejercios de JavaScript de logica de programacion

// !Considere una lista / matriz de ovejas.
// Cada oveja tiene un nombre y un color(separado por comas).

//* Haga un algoritmo que obtenga el número de ovejas y el nombre y el color de cada uno e imprima en la consola los nombres de las ovejas que son rojas y cuyo nombre también contiene las letras n y a, independientemente del orden, la capitalización o los espacios.

//* Recordar.Debe contener las dos letras n y a en el nombre.No cuente ovejas que solo tienen una de las letras, debe tener ambas.

// Por ejemplo:

//* Aporte:
// 3
// Noé, azul
// Euge, rojo
// Ki na ma, rojo

//* Producción:
// Ki na ma

// const listSheep = '3\nNoé, azul\nEuge, rojo\nKi na ma, rojo';

//********************** Logica *******************************//

const input = '3\nNoé, azul\nEuge, rojo\nKi na ma, rojo';

console.log(input)

const main = (input) => {
   const array = input.split('\n');

   console.log(array);
}

console.log(main(input));

//! ¡Estamos haciendo los ajustes finales al trineo de Santa!

//* Como ya sabe, el trineo está volando y estamos ajustando el motor para que haga que las paracolás sean lo más óptimas posible.Para esto, el salto siempre debe ser hacia arriba y, desde el punto más alto, siempre debe ir hacia abajo ...

//* Nuestro mecánico de confianza, Alexander, que tiene un gran Tesla, nos ha explicado que los saltos pueden verse como matrices ... y que solo tenemos que asegurarnos de que los números suban y bajen correctamente.También nos advierte que solo pasaremos matrices de al menos tres posiciones.

//* Haga un algoritmo que reciba en la consola un texto con valores(separados por comas) e imprima verdadero en la consola si los valores suben y bajan estrictamente, de lo contrario imprime falso

//********************** Logica *******************************//

