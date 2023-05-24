

/*

Crear y manipular un Array
1. Crea un array llamado frutas que contenga tres frutas: "manzana", "plátano" y "naranja".
2. Agrega una fruta al final del array usando el método push.
3. Elimina la primera fruta del array usando el método shift.
4. Muestra en consola la longitud del array


*/



let nombres = ["Gloria", "Alberto", "Juan"];
console.log(nombres.length); // 3
console.log(nombres);

let nuevoAlumno = "Alan";
let nombresLongitud = nombres.push(nuevoAlumno);
console.log(nombresLongitud); // 4
console.log(nombres);

nombresLongitud = nombres.push("Martín");
console.log(nombresLongitud); // 5
console.log(nombres);

console.log(nombres.push("Torrente")); // 6
console.log(nombres);

// Eliminar el primer elemento:
let primerNombre = nombres.shift();
console.log(primerNombre);
console.log(nombres);

primerNombre += " superguay";
nombres.push(primerNombre);
console.log(nombres);

// A Martín añadirle el apellido García:
nombres[3] += " García";

console.log(nombres);
