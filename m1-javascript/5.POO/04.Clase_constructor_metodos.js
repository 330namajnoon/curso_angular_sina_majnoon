
// Ejemplo de clase con constructor y métodos

const MAX_SPEED = 120;
/*

 Crear clase Vehiculo que tenga un constructor con atributos para vehiculos

 Crear métodos en la clase relacionados con Vehiculo: acelerar, frenar, encender, apagar

 Utilizar métodos
 */

class Vehiculo {

    constructor(fabricante, modelo, color, caballos) {
        // estado de un objeto
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.color = color;
        this.caballos = caballos;
        this.estaEncendido = false; // el coche inicialmente está apagado
        this.velocidad = 0;
    }

    // comportamiento
    encender() {
        this.estaEncendido = true;
    }

    apagar() {
        this.velocidad = 0;
        this.estaEncendido = false;
    }

    acelerar(cantidad) {

        // qué pasa si se quierer acelerar pero el coche está apagado
        if(!this.estaEncendido) // comprobar si está apagado
            return; 
            

        // 1. qué pasa si la cantidad a acelerar es negativa
        if (cantidad <= 0) 
            return; // sale del método

        // 2. qué pasa si la cantidad a acelerar hace que se supere el límite de 120 km h
        // en ese caso dejaremos 120, pero no debe sobrepasar ese límite
        if (this.velocidad + cantidad > MAX_SPEED) {
            console.log("Se ha excedido la velocidad máxima, se queda en el máximo de 120.");
            this.velocidad = MAX_SPEED;
            return;
        }

        this.velocidad += cantidad;
    }

    frenar(cantidad) {
        // TODO ajustar límites
        this.velocidad -= cantidad;
    }

} 

let vehiculo1 = new Vehiculo("Toyota", "Prius", "rojo", 120);
console.log(vehiculo1.estaEncendido); // false

vehiculo1.encender();
console.log(vehiculo1.estaEncendido); // true

vehiculo1.apagar();
console.log(vehiculo1.estaEncendido); // false

vehiculo1.encender();

console.log(vehiculo1.velocidad); // 0
vehiculo1.acelerar(50); // 50 km / h
console.log(vehiculo1.velocidad); // 50

// vehiculo1.frenar(20); 
// console.log(vehiculo1.velocidad); // 30 km / h



// casos límite:

// 1. qué pasa si la cantidad a acelerar es negativa

console.log("Comprobar acelerar con un número negativo: ")
console.log(vehiculo1.velocidad); // 30
vehiculo1.acelerar(-40); // En vez de restar, no hace nada, para evitar que la velocidad se quede negativa
console.log(vehiculo1.velocidad); // comprobar que la velocidad no cambia

// 2. qué pasa si la cantidad a acelerar hace que se supere el límite de 120 km h

console.log("Comprobar acelerar más de 120: ")
vehiculo1.acelerar(240);
console.log(vehiculo1.velocidad); // 120


// 3. Apagar el coche y volver a acelerar
console.log("Comprobar acelerar con el coche apagado: ")
vehiculo1.apagar(); // 0
console.log(vehiculo1.velocidad);


vehiculo1.acelerar(50); // 0

console.log(vehiculo1.velocidad); // 0


