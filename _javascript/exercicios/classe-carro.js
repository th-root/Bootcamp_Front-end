import readlineSync from 'readline-sync';
const input = readlineSync.question;

class Carro {
    constructor(marca, cor, combustivel) {
        this.marca = marca;
        this.cor = cor;
        this.combustivel = combustivel;

        if (combustivel === 'etanol') {
            this.consumo = 10; // Consumo do carro em KM por litro para etanol
        } else if (combustivel === 'gasolina') {        
            this.consumo = 12; // Consumo do carro em KM por litro para gasolina
        }
        else {
            console.log("Tipo de combustível inválido. Use 'etanol' ou 'gasolina'.");
            return; 
        }

    }

    calcularCustoViagem(distancia, precoCombustivel) {
        return (distancia / this.consumo) * precoCombustivel; // Custo total da viagem`;
    }
}

// Exemplo de uso da classe Carro
(function () {
    const meuCarro = new Carro("Toyota", "azul", "etanol");
    console.log(meuCarro.calcularCustoViagem(100, 4.50).toFixed(2)); // Exemplo de custo de viagem para 100 KM com preço do etanol a R$ 4.50
})();