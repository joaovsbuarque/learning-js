// // Factory functions / Constructor functions
// const pessoa = {
//     nome: 'João',
//     sobrenome: 'Buarque'
// };

// const chave = 'nome'
// console.log(pessoa[chave])
// // Isso é a mesma coisa que chamado de notação de ponto
// console.log(pessoa['nome'])

// // new Array -> para criar um novo array podemos
// // fazer isso com object é a mesma coisa que o cont pessoa ali acima 

// const pessoa1 = new Object();
// pessoa1.nome = 'João';
// pessoa1.sobrenome = 'Buarque';
// pessoa1.idade = 24

// // delete -> para apagar 
// // delete pessoa1.nome;
// // Agora só tem o sobrenome 

// pessoa1.getDataNascimento = () => {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// }

// console.log(pessoa1.getDataNascimento())

// for (let chave in pessoa1) {
//     console.log(pessoa1)
// }


// function criarPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`
//         }
//     };
// }

// const p1 = criarPessoa('João', 'Buarque');
// console.log(p1.nomeCompleto())

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome; 
}

// {} <- this -> this é o retorno que representa um objeto vazio
const p1 = new Pessoa('João', 'Buarque');
console.log(p1)