/* Calcular custo de uma viagem
    - Preço do combustível
    - Consumo de combustível do carro por KM
    - Distância a ser percorrida
*/

const precoCombustivel = 5.79; // Preço do combustível por litro
const consumoCarro = 12; // Consumo do carro em KM por litro
// let distancia = 1580; // Distância a ser percorrida em KM

function calcularCustoViagem(distancia) {
    const litrosNecessarios = distancia / consumoCarro; // Litros necessários para a viagem
    const custoTotal = litrosNecessarios * precoCombustivel; // Custo total da viagem
    return custoTotal;
}

// Exemplo de uso da função
console.log(`O custo desta viagem é de R$ ${calcularCustoViagem(1501).toFixed(2)}`); // Chama a função passando a distância em KM como parâmetro e exibe o custo total da viagem