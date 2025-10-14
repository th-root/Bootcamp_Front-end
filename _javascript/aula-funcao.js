import readlineSync from 'readline-sync';
const input = readlineSync.question;

// Funçao para calcular 
function calcularDesconto() {
    // Funcção que realizará uma ação necessária
    let valor = parseFloat(input("Digite o valor do produto: "));
    let forma_pagamento = input("Forma de pagamento: \n[ 0 ] - Dinheiro ou Pix \n[ 1 ] - Crédito à vista \n[ 2 ] - Até 10x sem juros) \n Digite a opção desejada: ");
    let desconto;
    if (forma_pagamento === '0') {
        desconto = 20; // Desconto de 10% para pagamento à vista
    } else if (forma_pagamento === '1') {
        desconto = 10; // Desconto de 5% para pagamento parcelado
    } else if (forma_pagamento === '2') {
        desconto = 0; // Sem desconto para parcelamento
    } else {
        console.log("Opção inválida. Tente novamente.");
        return; // Encerra a função se a opção for inválida
    }
    let total_desconto = valor * (desconto / 100);
    return total_desconto; // Retorna o valor do desconto calculado
}

// main ou função principal, que executa tudo que foi definido
(function (){
    console.log(`O valor do desconto é de R$ ${calcularDesconto().toFixed(2)}`); // Exibe o valor do desconto formatado com duas casas decimais
})();