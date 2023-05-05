// let cliente = prompt("Dime tu numero de cliente");
// alert("Hola " + cliente);
// let nombre = prompt("Dime tu nombre");
// alert("Hola " + nombre);
// let number = 0;
// number += cliente
// alert("Tu numero de cliente es: " + number);

// let numero1 = 10;
// let numero2 = 5;
// alert("Tu numero es: " + (numero1 + numero2));

// let saludo = " Hola pedro "
// let pregunta = "Como estas?"
// let frase = saludo + pregunta
// document.write(frase);
// // Metodo de cadena -- String para concat
// let frase1 = "soy " + nombre + " y estoy caminando";
// document.write(frase1);
// // Backticks
// let frase2 = `"Hola" + 'como estas' ${saludo}`
// alert(frase2);
// // Compare
// let frase3 = "23";
// let frase4 = 23;
// document.write(frase3 == frase4); // TRUE --> Es igual en valor
// document.write(frase4 === frase3);// FALSE --> Es diferente el tipo de dato
// Es mayor >
// Es Menor <
// Es Mayor o igual >=
// Es Menor o igual <=
// Es diferente !

/*OPERADORES LOGICOS*/
//AND todas deben ser Verdaderas para obtener TRUE
let valor = 12;
let valor2 = 24;
let afirmacion1 = valor < valor2; // true
let afirmacion2 = valor2 != valor; // true
document.write(afirmacion1 && afirmacion2) // Se obtiene TRUE

// OR -- una verdadera, ES VERDADERO. 
let afirmacion3 = valor > valor2; // false
let afirmacion4 = valor2 != valor; // true
document.write(afirmacion1 || afirmacion2) // Se obtiene TRUE por que una es true

let sumaNueva = (2 > 4 && (50 * 5) >= 250) || (52 >= 78 || 65 > 65)
alert(!sumaNueva); //