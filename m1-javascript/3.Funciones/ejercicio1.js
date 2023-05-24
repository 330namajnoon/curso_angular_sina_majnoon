
/*
Crear una función simple
1. Escribe una función llamada saludar que acepte un argumento nombre y muestre en consola
un saludo personalizado, por ejemplo, "¡Hola, Juan!"
*/

// python

// def saludar(nombre):
//     pass

// java
// public String saludo(String nombre){
//     return "Hola " + nombre; 
// }

// javascript

function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

// se puede invocar tantas veces como se necesite
saludar("Patricia");
saludar("Alan");

let username = "alansastre";


const MIN_STRING_LENGTH = 0;

function isValidUsername(username) {

    const MAX_STRING_LENGTH = 50;
    return username.length > MIN_STRING_LENGTH
        && username.length < MAX_STRING_LENGTH;
}

let validUser = isValidUsername("ejemplousuario");

if (isValidUsername("otrousuario")) {
    console.log("es usuario valido");
}



