// // let cliente = prompt("Dime tu numero de cliente");
// // alert("Hola " + cliente);
// // let nombre = prompt("Dime tu nombre");
// // alert("Hola " + nombre);
// // let number = 0;
// // number += cliente
// // alert("Tu numero de cliente es: " + number);

// // let numero1 = 10;
// // let numero2 = 5;
// // alert("Tu numero es: " + (numero1 + numero2));

// // let saludo = " Hola pedro "
// // let pregunta = "Como estas?"
// // let frase = saludo + pregunta
// // document.write(frase);
// // // Metodo de cadena -- String para concat
// // let frase1 = "soy " + nombre + " y estoy caminando";
// // document.write(frase1);
// // // Backticks
// // let frase2 = `"Hola" + 'como estas' ${saludo}`
// // alert(frase2);
// // // Compare
// // let frase3 = "23";
// // let frase4 = 23;
// // document.write(frase3 == frase4); // TRUE --> Es igual en valor
// // document.write(frase4 === frase3);// FALSE --> Es diferente el tipo de dato
// // Es mayor >
// // Es Menor <
// // Es Mayor o igual >=
// // Es Menor o igual <=
// // Es diferente !

// /*OPERADORES LOGICOS*/
// //AND todas deben ser Verdaderas para obtener TRUE
// let valor = 12;
// let valor2 = 24;
// let afirmacion1 = valor < valor2; // true
// let afirmacion2 = valor2 != valor; // true
// document.write(afirmacion1 && afirmacion2) // Se obtiene TRUE

// // OR -- una verdadera, ES VERDADERO.
// let afirmacion3 = valor > valor2; // false
// let afirmacion4 = valor2 != valor; // true
// document.write(afirmacion1 || afirmacion2) // Se obtiene TRUE por que una es true

// let sumaNueva = (2 > 4 && (50 * 5) >= 250) || (52 >= 78 || 65 > 65)
// //alert(!sumaNueva); //

// function suma(num1, num2) {
//     return num1 + num2;
// }

// let resultado = suma(2, 6)
// alert("El resultado de la suma es: " + resultado); // se alertara 8


// //funcion para convertir farenheits a celcius -> (32 °F − 32) × 5/9 = 0 °C
// function convertidor(farenheits) {
//     return (5 / 9) * (farenheits - 32)
// }

// let toCelcius = convertidor(77);
// alert("Los grados celcius son: " + toCelcius + "°");
// // OBJETOS
// const myCar = {
//     type: "Coupe",
//     brand: "Chevrolet",
//     model: "cavalier",
//     age: 1990,
//     frase: function () {
//         alert("soy un Automovil: "
//             + this.brand
//             + " //Modelo: "
//             + this.model
//             + " //Tipo: "
//             + this.type
//             + " //De el año: "
//             + this.age)
//     }
// }
// myCar.frase()
// myCar.age = 1997;
// myCar.brand = "Mazda";
// myCar.model = "Mx-5";
// myCar.frase()
// let abc = "abcdefghijklmnopqrstuvwxyz"
// let abcLenght = abc.length
// // let fraseCompletaConError = "Tu recordaras "Este" Momento";
// // let fraseCompletaSinError = "Tu recordaras \"este\" momento"

// //La comparación de dos objetos de JavaScript siempre devuelve falso .
// let x = new String("John");
// let y = new String("John");
// (x === y)//¿verdadero o falso?
// let str1 = "Hello";
// let str2 = "World!";
// alert(str1 + " " + str2);
// //SLICE
// let fraseDeFrutas = "Apple, Banana, Kiwi";
// let primeraFruta = fraseDeFrutas.slice(0, 5);
// let dosultimasFrutas = fraseDeFrutas.slice(-12);
// let ultimaFruta = fraseDeFrutas.slice(-5);
// let primerasDosFrutas = fraseDeFrutas.slice(0, 13);
// let segundaFruta = fraseDeFrutas.slice(-12, -6);
// alert("Esta es la frase completa: "
//     + fraseDeFrutas
//     + "//Esta es la primera fruta: "
//     + primeraFruta
//     + "//Estas son las dos ultimas frutas: "
//     + dosultimasFrutas
//     + "//Esta es la ultima fruta: "
//     + ultimaFruta
//     + "//Estas son las dos primeras frutas: "
//     + primerasDosFrutas
//     + "//Esta es la segunda fruta: "
//     + segundaFruta
// );
// //METODOS REPLACE
// let fraseQueSeraRemplazada = "Hola soy nuevo en esto";
// let fraseRemplazada = fraseQueSeraRemplazada.replace("Esta es la nueva frase");

// let fraseReplace = "Please visit microsoft & microsoft website";
// let nuevaFraseReplace = fraseReplace.replace(/microsoft/g, "Google");
// alert(nuevaFraseReplace)
// //METODO UPPER CASE & LOWER CASE
// let cadena1 = "Hello my friends!";
// let cadenaUpperCase = cadena1.toUpperCase()
// alert(cadenaUpperCase);
// let cadenaLowerCase = cadena1.toLowerCase();
// alert(cadenaLowerCase);
// // METODO CONCAT
// let cadena2 = "vamos a concatenar algo";
// let cadenaConcatendada = cadena2.concat(" ", "a partir de aqui esta concatenado")
// alert(cadenaConcatendada);
// // Las cadenas son inmutables: las cadenas no se pueden cambiar, solo reemplazar.

// //METODO TRIM()
// let cadena3 = "     Cinco Espacios     ";
// alert(cadena3.trim());
// //METODO padStar()
// let cadena4 = "4";
// alert(cadena4.padStart(10, "0")); //40000000000
// alert(cadena4.padEnd(2, "x")); //4x
// //METODO toString()
// let cadena5 = 5;
// let nuevacadena5 = cadena5.toString();
// alert(nuevacadena5.padEnd(10, "0")); //5000000000

// //METODO para extraer caracteres
// let text1 = "Hola amigos";
// alert(text1.charAt(5));
// alert(text1[6]);

// //CONVERTIR CADENA EN MATRIZ
// let cadena = "HOLA A TODOS";
// let nuevaCadena = cadena.split("");
// alert(nuevaCadena);
// alert(cadena.split("O"));

// //METODO indexOf() & lastIndexOf()
// let sometext = "Algunos amigos son mas enemigos que amigos";
// let textIndexOf = sometext.indexOf("amigos");
// alert(textIndexOf); //output: 8 -> Primera aparicion
// alert(sometext.lastIndexOf("amigos", 9)); //output: 8 -> Primera aparicion antes de index 9
// alert(sometext.lastIndexOf("amigos")); //output:36 -> ultima aparicion

// //METODO search()
// let searchText = "Este es un texto random";
// alert(searchText.search("random")); //output: 17
// alert(searchText.search(/texto/)); //output: 11

// //METODO match()
// let textMatch = "Este es un texto que contiene Texto en el texto random que contiene el texto"
// alert(textMatch.match(/ext/g)); //output: ext la cantidad de veces que lo encuentra
// alert(textMatch.match("ext")); //output: ext -> por que la coincidencia es correcta
// alert(textMatch.match("noEstaEnElArray")); //output: null -> por que no hay coincidencia
// alert(textMatch.match(/Text/gi)); //output: -> Text LA CANTIDAD de veces que lo encuentra INDIFERENTE de mayu o minus

// //METODO matchAll()
// let textMatchAll = "Hola es te es un Te de llervas y hola es una llervas";
// alert(textMatchAll.matchAll("este"));  //output: -> [object RegExp String Iterator]
// alert(textMatchAll.matchAll(/te/gi)); //output: -> [object RegExp String Iterator]

// //METODO includes()
// let textIncludes = "hola randome randome hola";
// alert(textIncludes.includes("randome")); //output: -> true
// alert(textIncludes.includes("striingdesconocido")); //output: -> false
// alert(textIncludes.includes("Randome", 19)); //output: -> false -> distingue entre mayúsculas y minúsculas.

// //METODO startsWith()
// let textStartWith = "hola amigos necesito un favor";
// alert(textStartWith.startsWith("hola")) //Output: -> true
// alert(textStartWith.startsWith("amigos")) //Output: -> false
// alert(textStartWith.startsWith("Necesito", 12)) //Output: -> true -> distingue entre mayúsculas y minúsculas.

// //METODO endsWith()
// let textEndWith = "hola amigos necesito un favor";
// alert(textEndWith.endsWith("favor")) //Output: -> true
// alert(textEndWith.endsWith("amigos")) //Output: -> false
// alert(textEndWith.endsWith("amigos", 11)) //Output: -> true -> los primeros 11 caracteres terminan en "".

// BACKTICKS
let stringSinBacktics = "tengo la edad de: "
let myAge = 27;
let medida = "años";
let stringConBacktics = `Yo benjamin ${stringSinBacktics} ${myAge} ${medida} y soy muy feliz`;
alert(stringConBacktics);
