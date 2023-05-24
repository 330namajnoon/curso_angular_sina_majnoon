
/*

Concatenación de strings
1. Crea dos variables saludo y persona con los valores "¡Hola!" y tu nombre, respectivamente.
2. Utiliza el operador + para concatenar las dos variables y mostrar en consola el mensaje
completo, por ejemplo, "¡Hola, Juan!"

*/


let saludo = "Muy buenas";
let firstName = "Alan";
let lastName = "Sastre";

let saludoCompleto1 = saludo + " " + firstName + " " + lastName;
console.log(saludoCompleto1);

console.log(`${saludo} ${firstName} ${lastName}`);
