//Define vars
var num1;
var num2;
var num3;
var num4;
var num5;

//Ask for numbers to user
alert("Escribe 5 números")
num1 = prompt("Escribe un número");
num2 = prompt("Escribe un número");
num3 = prompt("Escribe un número");
num4 = prompt("Escribe un número");
num5 = prompt("Escribe un número");

//Transform string to numbers
num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);
num4 = parseInt(num4);
num5 = parseInt(num5);

//Exercise
var totalSum = num1 + num2 + num3 + num4 + num5;
var promedio = totalSum / 5;

//Show results
alert("la suma total es " + totalSum + " y el promedio es " + promedio);