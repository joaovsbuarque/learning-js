// Argumentos que sustenta total de argumentos enviados
function funcao(){
    let total = 0
    for (let argumentos of arguments) {
        total += argumentos;
    }
    console.log(total)
}
funcao(1, 2, 3, 4, 5, 6, 7)

// Atribuição via desestruturação
function funcao({ nome, sobrenome, idade}) {
console.log(nome, sobrenome, idade)
}

funcao({ nome: 'João', sobrenome: 'Vitor', idade:20})

