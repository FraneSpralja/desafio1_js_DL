//Define numers
var num1;
var num2;

//Ask the user for numers

num1 = prompt("Elige un número del 1 al 10: ");
num2 = prompt("Elige un número diferente al anterior del 1 al 10: ");

//Transform string to numbers

num1 = parseInt(num1);
num2 = parseInt(num2);

//Define new vars with exercise

var exc1 = num1 + num2;
var exc2 = num1 - num2;
var exc3 = num1 * num2;
var exc4 = num1 / num2;
var exc5 = num1 % num2;

//Print the results

document.write("la suma de ambos números es: " + exc1);
document.write("<br>");
document.write("la resta de ambos números es: " + exc2);
document.write("<br>");
document.write("la multiplicación de ambos números es: " + exc3);
document.write("<br>");
document.write("la división de ambos números es: " + exc4);
document.write("<br>");
document.write("el módulo de ambos números es: " + exc5);