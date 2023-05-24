

/*

Crear una función que utilice otra función
1. Escribe una función llamada operacion que acepte tres argumentos: a, b y una función
operador. La función operacion debe ejecutar la función operador con los argumentos a y b y
devolver el resultado

*/

function operacion(num1, num2, funcionOperador) {
    const result = funcionOperador(num1, num2);
    console.log(`operacion ${num1} con ${num2} = ${result}`);

}

operacion(5, 3, (a, b) => a + b);
operacion(5, 3, (a, b) => a * b);
operacion(5, 3, (a, b) => a - b);

const sumar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;
operacion(4, 4, sumar);
operacion(4, 4, multiplicar);
