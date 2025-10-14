function tabuada(numero) {
    for(i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}   

(function() {
    tabuada(5);
    console.log("--------------------");
    tabuada(7);
})();