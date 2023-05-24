
/*
Uso de la estructura if-else
1. Crea una variable numero y asígnale un número entero.
2. Escribe una estructura if-else que muestre en consola 
si el número es positivo, negativo o cero.
*/

let number = 0;


if (number > 0) {
    console.log(`${number} es un número positivo`);
} else if (number < 0) {
    console.log(`${number} es un número negativo`);
} else if (number === 0) {
    console.log(`${number} es 0`);
}


if (number > 0) {
    console.log(`${number} es un número positivo`);
} else if (number < 0) {
    console.log(`${number} es un número negativo`);
} else {
    console.log(`${number} es 0`);
}


if (number > 0)
    console.log(`${number} es un número positivo`);

else if (number < 0)
    console.log(`${number} es un número negativo`);

else
    console.log(`${number} es 0`);



if (number > 0) console.log(`${number} es un número positivo`);

else if (number < 0) console.log(`${number} es un número negativo`);

else console.log(`${number} es 0`);


// comprobar si el salario está comprendido entre 28000 y 34000
let salary = 76000.0;

const MIN_SALARY = 28000;
const MAX_SALARY = 34000;
if (salary >= MIN_SALARY && salary <= MAX_SALARY) {

}


// Programación defensiva


function esMayorDeEdad(edad) {
    return edad >= 18;
}


let edad = null;
console.log(esMayorDeEdad(edad));