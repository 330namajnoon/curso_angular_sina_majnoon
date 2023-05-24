
let preciosSinIVA = [4.9, 10.24, 40.99, 100.0];

// Obtener un array preciosConIVA (21 %) utilizando la función map:


let preciosConIVA = preciosSinIVA.map(precio => precio + precio * 0.21);

console.log(preciosSinIVA);
console.log(preciosConIVA);