/*

for: cuando iteramos sobre una estructura de datos utilizando un i (índice) como posición

for of: cuando iteramos sobre estructuras de datos como arrays, set o mapas y solo queremos los valores

for in: cuando iteramos sobre propiedades de un objeto y necesitamos conocer nombres de atributos y sus valores

forEach: recibe una función y ejecuta ese comportamiento sobre cada elemento de la estructura de datos
*/
let personas = ["Alan", "Gloria", "Vanesa"];
personas.forEach(persona => console.log(persona) );
personas.push(5);
console.log(personas);