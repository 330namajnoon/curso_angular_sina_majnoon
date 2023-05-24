
/* clase Usuario */

class User {
    constructor(firstName, email) {
        this.firstName = firstName;
        this.email = email;
    }
}

let user1 = new User("usuario1", "usuario1@gmail.com");
let user2 = new User("usuario2", "usuario2@gmail.com");
let user3 = new User("usuario3", "usuario3@gmail.com");

/*

Clase Evento que tenga titulo, fecha, usuario admin
*/
class Event {
    constructor(title, date, adminUser) {
        this.title = title;
        this.date = date;
        this.adminUser = adminUser; // objeto de la clase User
    }
}

// PASAR EL OBJETO USUARIO EN EL CONSTRUCTOR
let event1 = new Event("Reunión de desarrollo", new Date("2023-04-18"), user1);

console.log(event1.title);
console.log(event1.date);
console.log(event1.adminUser.email); // acceder al email del usuario
console.log(event1.adminUser.firstName); // acceder al nombre del usuario

event1.adminUser = user2; // ambiar el usuario del evento

console.log(event1.adminUser.email); // acceder al email del usuario
console.log(event1.adminUser.firstName); // acceder al nombre del usuario
// cambiar el usuario admin del event1



/*
Clase Evento que tenga titulo, fecha, usuario admin, lista de invitados
*/



/*
Aula con alumnos y ordenadores
*/

