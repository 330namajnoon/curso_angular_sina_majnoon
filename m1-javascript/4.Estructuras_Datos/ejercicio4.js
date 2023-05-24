
/*
Crear y manipular un Objeto
1. Crea un objeto llamado persona con las propiedades nombre, apellido, edad y ciudad.
2. Cambia el valor de la propiedad ciudad a una nueva ciudad.
3. Agrega una propiedad ocupacion al objeto.
4. Muestra en consola todas las propiedades y sus valores usando un bucle for…in
*/

class Persona { 
    nombre = "Nombre";
    apellido = "Apellido";
    edad = 18;
    ciudad = "Madrid";
}

// Crear un nuevo objeto a partir de una clase
const persona1 = new Persona();
console.log(persona1);

// cambiar ciudad
persona1.ciudad = "Barcelona";
console.log(persona1);

// agregar nuevo atributo
persona1.puesto = "developer";
console.log(persona1)

// agregar un array de teléfonos
persona1.telefonos = ["655765888", "667899765"];
console.log(persona1);

// Muestra en consola todas las propiedades y sus valores usando un bucle for…in

// ejemplo de key: nombre, apellido, edad, ciudad
for (const propiedad in persona1) {
    console.log(`${propiedad} = ${persona1[propiedad]}`);

    // if (Object.hasOwnProperty.call(object, key)) { // comprueba si existe la clave en el objeto
    //     const element = object[key];
        
    // }
}

