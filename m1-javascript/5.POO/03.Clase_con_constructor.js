
// Ejemplo de clase con constructor y atributos de instancia

class SmartPhone {

    constructor(model, cores, ram, isAndroid) {
        this.model = model;
        this.cores = cores;
        this.ram = ram;
        this.isAndroid = isAndroid;
    }
}

const phone1 = new SmartPhone("One Plus 11", 4, 12, true);
const phone2 = new SmartPhone("Xiaomi Redmi 13", 6, 16, true);
// Ctrl + Shift + Space dentro de los paréntesis del constructor permite ver los argumentos que necesita
const phone3 = new SmartPhone();
