// Objetos literais em JavaScript
// Objetos são coleções de propriedades e métodos
// Cada propriedade é uma chave associada a um valor    
// Exemplo de objeto literal
const pessoa = {
    nome: "Thiago",
    sobrenome: "Silva",
    idade: 30,      
    profissao: "Desenvolvedor",
    habilidades: ["JavaScript", "Python", "Java", "Power Apps"], 
    apresentacao: function() {
        return `Olá, meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos.`;
    }
}
// Acessando propriedades do objeto
console.log(process.nome); // Acessa a propriedade 'nome'    
console.log(process.sobrenome); // Acessa a propriedade 'sobrenome'
console.log(process.idade); // Acessa a propriedade 'idade'  
console.log(process.profissao); // Acessa a propriedade 'profissao'
console.log(process.habilidades); // Acessa a propriedade 'habilidades'

pessoa.idade = 36; // Atualiza a propriedade 'idade'
console.log(pessoa.idade); // Exibe a nova idade

// Adicionando uma nova propriedade ao objeto
pessoa.email = "thiagodevoliveira@hotmail.com";
console.log(pessoa);

console.log(pessoa.apresentacao()); // Chama o método 'apresentacao' do objeto