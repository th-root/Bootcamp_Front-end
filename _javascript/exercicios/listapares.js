let numeros = [];
for (let i = 0; i < 10; i++) {
    numeros.push(Math.floor(Math.random() * 100));
}

function listaPares(numeros) {
    let pares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        }
    }
    return pares;
}

(function() {
    console.log("Números gerados:", numeros);
    console.log("Números pares:", listaPares(numeros));
})();