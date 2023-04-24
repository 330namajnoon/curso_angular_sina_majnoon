import {MovieDatabase,Movie} from "./movie";

const database:MovieDatabase = new MovieDatabase(); 
let m1:Movie = {
    id:database.generateNextId(),
    duration:180,
    director:"s",
    genetes:["s"],
    rate:2,
    title:"fg",
    year:2022
} 
database.insertar(m1);
let m2:Movie = {
    id:database.generateNextId(),
    duration:200,
    director:"a",
    genetes:["a"],
    rate:3,
    title:"ag",
    year:2021
} 
database.insertar(m2);
let m3:Movie = {
    id:database.generateNextId(),
    duration:200,
    director:"a",
    genetes:["a"],
    rate:3,
    title:"ag",
    year:2021
} 
database.insertar(m3);

console.log(database.consultar(0));
console.log(database.consultar(1));
console.log(database.consultar(2));

database.borrar(1);

console.log(database.consultar(0));
console.log(database.consultar(1));
console.log(database.consultar(2));








