class Pessoa {
    constructor(nome, sobrenome, idade, profissao, habilidades) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.profissao = profissao;
        this.habilidades = habilidades;
        this.anoNascimento = new Date().getFullYear() - idade;

    }

    apresentar() {
        return `Olá, meu nome é ${this.nome} ${this.sobrenome} e nasci em ${this.anoNascimento} portanto tenho ${this.idade} anos.`;
    }

}

// Exemplo de uso da classe pessoa
(function (){
    const thiago = new pessoa("Thiago", "Silva", 36, "Desenvolvedor", ["JavaScript", "Python", "Java", "Power Apps"]);

    // Acessando propriedades do objeto
    thiago.apresentar(); // Acessa a propriedade 'nome'    

    console.log(thiago.apresentar()); // Acessa o objeto e chama o método 'apresentacao'
})();