


/*
 

Uso de map, filter y reduce en Arrays
1. Crea un array llamado calificaciones que contenga calificaciones numéricas (por ejemplo, 85,
90, 78, 92, 88).
2. Utiliza el método map para aumentar cada calificación en 5 puntos.
3. Utiliza el método filter para quedarte solo con las calificaciones mayores o iguales a 90.
4. Utiliza el método reduce para calcular la calificación promedio.

 */

let calificaciones = [85, 90, 70, 60, 85, 95];
console.log(calificaciones);

let sumar5 = calificacion => calificacion + 5;
let calificacionesDefinitivas = calificaciones.map(sumar5);

console.log(calificaciones); // se mantiene intacto
console.log(calificacionesDefinitivas); // tiene las calificaciones aumentadas 5 puntos


