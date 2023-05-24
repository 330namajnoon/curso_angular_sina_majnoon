

// Ejemplo de cómo crear una clase con atributos de clase

class Computer {
    fabricante = "MSI";
    modelo = "1551 A34";

}

const computer1 = new Computer();
const computer2 = new Computer();
console.log(typeof computer1);

console.log(`computer1.fabricante = ${computer1.fabricante}`);
computer1.fabricante = "ASUS";
console.log(`computer1.fabricante = ${computer1.fabricante}`);


console.log(`computer2.fabricante = ${computer2.fabricante}`);
