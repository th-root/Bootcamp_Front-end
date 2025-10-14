/* Calcular custo de uma viagem
    - Preço do Etanol
    - Preço da gasolina
    - Tipo de combustível em uso
    - Consumo de combustível do carro por KM
    - Distância a ser percorrida
*/

//import { input } from 'readline-sync'; // Importa a biblioteca readline-sync para ler entradas do usuário
import readlineSync from 'readline-sync';
const input = readlineSync.question;


function calcularCustoViagem(distancia, precoCombustivel, tipoCombustivel) {

    let consumoCarro; // Variável para armazenar o consumo do carro em KM por litro
    // Define o consumo do carro com base no tipo de combustível    
    if (tipoCombustivel === 'etanol') {
        consumoCarro = 10; // Consumo do carro em KM por litro para etanol
    } else if (tipoCombustivel === 'gasolina') {        
        consumoCarro = 12; // Consumo do carro em KM por litro para gasolina
    }
    else {
        console.log("Tipo de combustível inválido. Use 'etanol' ou 'gasolina'.");
        return; 
    }
    // Calcula o custo total da viagem    
    const custoTotal = (distancia / consumoCarro) * precoCombustivel // litrosNecessarios * precoCombustivel; // Custo total da viagem
    return custoTotal;
}

// Exemplo de uso da função
function main() {
    let precoCombustivel = parseFloat(input("Digite o preço do combustível por litro: ")); // Preço do combustível por litro
    let tipoCombustivel = input("Digite o tipo de combustível (etanol ou gasolina): "); // Tipo de combustível em uso          
    let distancia = parseFloat(input("Digite a distância a ser percorrida em KM: ")); // Distância a ser percorrida em KM

    console.log(`O custo desta viagem é de R$ ${calcularCustoViagem(distancia, precoCombustivel, tipoCombustivel).toFixed(2)}`);
}

main(); // Chama a função principal para executar o programa