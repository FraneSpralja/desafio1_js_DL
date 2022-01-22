//Define firs var
var days;

//Ask de user for a number to convert;

alert("Convierte días en años, semanas y días")

days = prompt("Ingresa la cantidad de días:")

//Convert string in numbers
days = parseInt(days);

//Convert days in years
var year = days/365;
year = Math.floor(year);

//Convert days in weeks
    //Define how many weeks
    // days - (365*years) = days_weeks 
    //390 - (365*1) = 25
    //25 / 7 = weeks
const daysWeek = days - 365 * year;
var week = daysWeek / 7;
week = Math.floor(week);

//Define how many days rest
    // restDays = days - (365*year) - (week*7)
var restDay = days - 365*year - week*7;

alert("son: " + year + " año(s), " + week + " semana y " + restDay + "día(s)");