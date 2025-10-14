const pessoas = [
  { nome: 'João', idade: 25 },  
  { nome: 'Maria', idade: 30 },
  { nome: 'José', idade: 22 },  
]

pessoas.forEach(pessoa => {
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
});

console.log("--------------------");

pessoas[2] = { nome: 'Ana', idade: 28 };

pessoas.forEach(pessoa => {
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
});

