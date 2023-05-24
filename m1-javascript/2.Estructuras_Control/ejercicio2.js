
/*

Uso de la estructura switch
1. Crea una variable fruta y asígnale el nombre de una fruta.
2. Utiliza una estructura switch para determinar si la fruta es roja (manzana, fresa), amarilla
(plátano, piña) o de otro color (naranja, uva) y muestra el resultado en consola.

*/

let fruta = "manzana";

switch (fruta) {
    case "manzana":
    case "fresa":
        console.log("Color rojo");
        break;

    case "platano":
    case "piña":
        console.log("Color amarillo");
        break;
        
    case "naranja":
    case "uva":
        console.log("Color morado");
        break;

    default:
        break;
}