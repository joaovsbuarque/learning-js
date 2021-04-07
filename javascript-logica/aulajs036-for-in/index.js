const frutas = ['Pera', 'Maça', 'Uva'];

for ( let i in frutas) {
    console.log(frutas[i])
}

// for in -> Esse for lê o indice ou chaves dos objetos
// outro exemplo agora com objetos 

const pessoa = {
    nome: 'João',
    sobrenome: 'Buarque',
    idade:24,
};

for (let i in pessoa) {
    console.log(i)
}

console.log(pessoa.nome);