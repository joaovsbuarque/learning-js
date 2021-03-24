const verdadeira = true

let nome = 'Luiz';
var nome2 = 'Luiz';

// Não posso redeclarar a variavel usando let 
// Mas Let tem escopo de bloco { ... bloco } ou 
// seja pode ser alterado dentro do bloco buscando sempre no espcopo que esta de dentro para fora

// Var só tem escopo de função 
// sempre que usar var vai ser redeclarado 

// Um bloco dentro do outro é chamado de bloco aninhado 

// Exemplo de Let
if (verdadeira) {
    let nome = 'Otavio'
    console.log(nome, nome2);

    if(verdadeira){
        let nome = 'Outra coisa'
        console.log(nome, nome2)
    }
}

// Exemplo para mostra que o var só pega dentro da função 
// isso demostra que var é uma variavel de função
// dica: mas tem como pegar ao seu entorno se colocar o var fora da função 

function falaOi () {
    var nome = 'Luiz'
    console.log('Oi')
}

console.log(nome)
falaOi()

// var tambem pode haver uma elevação e aparece o codigo como undefined
// let não ocorre o hoist aparece o erro para debugar com var voce vai ter que caçar o erro 

// Exemplo com var 

console.log(testeHoist)

var testeHoist = 'Ok'
// retorno undefined


// Exemplo com let

console.log(testeHoist)

let testeHoist = 'Ok'
//retorno erro