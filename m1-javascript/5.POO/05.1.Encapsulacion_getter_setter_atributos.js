
// Ejemplo de clase con atributos encapsulados utilizando getter y setter
// Se encapsula el atributo edad para que solamente se pueda modificar a través de set

class Persona {

    #edad;

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.#edad = edad;
    }

    // 1. getter: mértodo para obtener atributos privados
    get edad() {
        return this.#edad;
    }
    // 2. setter: se utiliza para modificar un atributo privado
    set edad(nuevaEdad) { 
        if (nuevaEdad >= 18)
            this.#edad = nuevaEdad;
    }
}

let persona1 = new Persona("persona1", 20);
persona1.edad = 3; // asignación directa, funciona si el atributo es público
console.log(persona1.edad); // 20
persona1.edad = 25; // Esta asignación invoca al método set automáticamente
console.log(persona1.edad); // 25



