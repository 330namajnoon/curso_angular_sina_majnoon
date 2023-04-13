
let numerosData = [2,2,2];

function calcularMedia(datos = []) {
    let suma_de_numeros = datos.reduce((s,n) => {
        return s + n;
    })
    return suma_de_numeros / datos.length;
}
console.log(calcularMedia(numerosData));