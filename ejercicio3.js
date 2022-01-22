//Define variables and const
var celsius;

//Ask user for a number
celsius = prompt("Ingresa la temperatura en grados Celsius para convertir a Farenheit y Kelvin");

//Transform the string in to number
celsius = parseInt(celsius);

//Transform the temperater;
        //X°C + 273.15°K = 273.15°K
        //celsious + kelvin = X°K
        const kelvin = celsius + 273.15;
        //(X°C * 9/5) + 32 = 32°F
        //(celsius *)

const fareUno = 9/5;
const fareDos = celsius * fareUno;
const faren = fareDos + 32;

//Show the convertion
document.write("La temperatura es: ");
document.write("<br>");
document.write("Farenheit: " + faren + "°F");
document.write("<br>");
document.write("Kelvin: " + kelvin + "°K");

