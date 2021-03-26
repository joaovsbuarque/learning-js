const pessoa ={
    nome: 'João',
    sobrenome: 'Buarque',
    idade: 24,
    endereco: {
        rua: 'Rua Marina Moises',
        numero: 389,
    }
}

// Atribuição via desestruturação
const { sobrenome } = pessoa;
console.log(sobrenome);

// outra maneira de atribuição via 
// desestruturação e pegar o resto é
// ...resto
