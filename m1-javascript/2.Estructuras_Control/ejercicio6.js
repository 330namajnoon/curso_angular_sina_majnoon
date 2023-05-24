
/*

Uso de bucle for anidado
1. Escribe un bucle for anidado que muestre en consola una tabla de multiplicar del 1 al 10.

*/

// la tabla del 5
// for (let i = 1; i <= 10; i++) 
//     console.log(`5 * ${i} = ${5 * i}`);



// todas las tablas
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log("\n")
}
