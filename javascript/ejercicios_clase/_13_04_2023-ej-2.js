let numeros = [3,7,65,89,76,34,98,234,76,45,890,345];

function filter(maxN = 1,data = []) {
    return data.filter(d => d > maxN);
}

function filter_(maxN = 1,data = []) {
    let nf = [];
    data.forEach(d => {
        d > maxN ? nf.push(d) : null;
    })
    return nf;
}

console.log(filter(90,numeros));
console.log(filter_(90,numeros));