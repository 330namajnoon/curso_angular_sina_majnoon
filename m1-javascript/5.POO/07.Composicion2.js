
/*
Un evento puede tener una lista de invitados
*/
class User {
    constructor(firstName, email) {
        this.firstName = firstName;
        this.email = email;
    }
}

let juan = new User("juan", "juan@company.com");
let jeane = new User("jeane", "jeane@company.com");
let alan = new User("alan", "alan@company.com");
let user4 = new User("usuario4", "user4@company.com");
let user5 = new User("usuario5", "user5@company.com");

class Event {
    constructor(title, date, adminUser) {
        this.title = title;
        this.date = date;
        this.adminUser = adminUser; // objeto de la clase User
        this.users = [];  // Lista de usuarios invitados
    }

    // metodo para añadir invitado
    addUser(user) {
        this.users.push(user);
    }
}
let date1 = new Date();
let event1 = new Event("Clase de JavaScript", date1, juan);
event1.addUser(jeane);
event1.addUser(alan);
event1.addUser(user4);
event1.addUser(user5);
console.log(event1);
console.log(`Hay un total de ${event1.users.length} usuarios invitados`);
console.log(`La reunión ${event1.title} ha ido organizada por ${event1.adminUser.firstName}`)