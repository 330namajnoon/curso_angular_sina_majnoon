

/*
Operadores lógicos
1. Crea tres variables booleanas condicion1, condicion2 y condicion3 con diferentes valores.
2. Utiliza operadores lógicos (&&, ||, !) para combinar las condiciones y muestra los resultados en
consola.
*/

let edad = 17;

let esMayorDeEdad = edad >= 18;

let completeName = "Juanito garcia";

let esJuan = completeName.includes("Juan");

// Opción 1
let apto1 = esMayorDeEdad && esJuan;

// opción 2
let apto2 = edad >= 18 && completeName.includes("Juan");

function esMayorDeEdad(edad){
    return edad >= 18;
}

function esInvitado(name){
    return name.includes("invitado1") || name.includes("invitado2");
}