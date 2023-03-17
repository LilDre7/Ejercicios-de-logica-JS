// Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.
// alert(`Hello Word`)


// Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).
document.write("Hello Word" , "<br>" , "<br>")


// Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
document.write( 3 + 5 , "<br>" , "<br>" );


// Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”
// let nombre = prompt("Escribe tu nombre: ");
// document.write(`Tu nombre es ${nombre} un saludo: ${nombre} `)

// Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
// let n1 = prompt("Escribe un número");
// let n2 = prompt("Escribe otro número");
// document.write("La suma es: " + ( parseInt(n1)+ parseInt(n2) ) );

// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// let number1  = prompt("Dime un numero:")
// let number2 = prompt("Dime otro numero:")
// if ( number1 >= number2){
//     document.write(`El primer numero es mayor porque era el numero:  ${number1} 
//     y tu coloste como segunda opcion el numero ${number2} `)
// }else{
//     document.write(`El segundo numero es mayor porque era el numero ${number2}
//     y tu coloste como primera opcion el numero ${number2} ` )
// }

// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// let opcion1 = prompt("Dime un numero soldado: ");
// let opcion2 = prompt("Dime tu segundo numero soldado: ")
// let opcion3 = prompt("Dime tu tercer numero pelado: " )
// if ( opcion1 > opcion2 && opcion1 > opcion3 ){
//     document.write("El numero mayor de estos 3 datos fue la opcion")
// }else if (opcion2 > opcion3) {
//     document.write(opcion2)
// }else {
//     document.write(opcion3)
// }


// Escribe un programa que pida un número y diga si es divisible por 2
// let op1 = prompt("Dime un numero" );
// if (op1 % 2){
//     document.write( "Es divisible por 2" )
// }else {
//     document.write( "No es divisible por 2" )
// }

// Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
// let frase = prompt( "Escribe tu frase favorita" );
// let caracter = "a";
// let contadores = 0;
// for (let i = 0; i < frase.length; i++ ){
//     if (frase.charAt(i) === caracter )
//     contadores++;
// }
// document.write(`En tu frase tuvimos una cantidad de letra a de  ${contadores}` )

// Escribe un programa que pida una frase y escriba las vocales que aparecen
// function vowelCounter(str) {
//     let allVowels = 'aeiouAEIOU';
//     let vCounter = 0;

//     for(let i = 0; i < str.length; i++) {
//         if(allVowels.indexOf(str[i]) !== -1) {
//         console.log("The value of str[i] is: " + str[i]);
//         vCounter += 1;
//         }   
//     }
//     return vCounter;
//     }
//     console.log(vowelCounter("Hello YoUtUbe"));


/*    Method nº 2:
Javascript exercise: How to count the number of vowels in a
string using Javascript.
*/
// let allVowels = ["a", "e", "i", "o", "u"];
// function vowelCounter(str) {
//     let vCounter = 0;

//     for (let i of str.toLowerCase()){
//         if (allVowels.includes(i)) { vCounter++;
//         }
//     }
//     console.log(`Your original string is: \n ${str} \n `);
//     console.log(`The text contains ${vCounter} vowel(s)`);
//     return vCounter;
// }


