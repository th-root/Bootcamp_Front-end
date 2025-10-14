class pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura ** 2);
    };

    classificarImc() {
        const imc = this.peso / (this.altura ** 2);
        if (imc < 18.5) {
            return 'abaixo do peso';
        } else if (imc < 25) {
            return 'com peso normal';
        } else if (imc < 30) {
            return 'com sobrepeso';
        } else {
            return 'com obesidade';
        }
    };

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e meu IMC é ${this.calcularImc().toFixed(2)} e sou uma pessoa ${this.classificarImc()}.`);
    }
}

(function() {
    const pessoa1 = new pessoa('João', 122  , 1.75);
    const pessoa2 = new pessoa('José', 60, 1.65);
    
    pessoa1.apresentar();
    console.log("--------------------"); 
    pessoa2.apresentar();
})();