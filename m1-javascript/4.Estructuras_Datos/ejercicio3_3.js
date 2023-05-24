
/*
 

Uso de map, filter y reduce en Arrays
1. Crea un array llamado calificaciones que contenga calificaciones numéricas (por ejemplo, 85,
90, 78, 92, 88).
2. Utiliza el método map para aumentar cada calificación en 5 puntos.
3. Utiliza el método filter para quedarte solo con las calificaciones mayores o iguales a 90.
4. Utiliza el método reduce para calcular la calificación promedio.

 */

let calificaciones = [85, 90, 70, 60, 85, 95];


// Opción 1: Con for of
let calificacionesAltas = [];
for (const calificacion of calificaciones) {
    if (calificacion >= 90)
        calificacionesAltas.push(calificacion);
}

console.log(calificaciones);
console.log(calificacionesAltas);

// Opción 2: Con filter y función flecha

let calificacionesAltas2 = calificaciones.filter(calificacion => calificacion >= 90);
console.log(calificacionesAltas2);