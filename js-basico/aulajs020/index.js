// const array = [1,2,3];
// array.push(4);
// array[0] = 'Luiz';

// console.log(array)
// [] === array
// {} === objeto

// const nome01 = 'Luiz';
// const sobrenome01 = 'Miranda';
// const idade01 = '25';

// const nome02 = 'Maria';
// const sobrenome02 = 'Oliveira';
// const idade02 = '30';

// const pessoal = {
//     nome:'Luiz',
//     sobrenome:'Miranda',
//     idade: 25
// };


function criarPessoa (nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa1 = criarPessoa('Luiz', 'Otavio', 25)

// quando eu envio um valor é um argumento que é enviado para o parametro

// console.log(pessoa1.nome)

// a palavra this.

// fala () {
//     console.log(`${this.nome} ${this.sobrenome} olá tudo bem?`)
// }