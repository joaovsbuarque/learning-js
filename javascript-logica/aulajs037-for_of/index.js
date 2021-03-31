const nome = ['João Vitor'];

// For clássico - Geralmente com iteraveis (array ou string);
// For in - Retorna o indice ou chaves (string, array ou objeto); 
// For of - Retorna o valor em si (interáveis)

// for(let i = 0; i < nome.length; i++) {
//     console.log(nome[i])
// }


// for ( let i in nome ) {
//     console.log(nome[i]);
// }


// No for of ela é interado ou sejá retorna 
// retornara somente o valor
for(let valor of nome){
    console.log(valor)
}

nomes.array.forEach(function(valor, indice) {
    console.log(valor, indice, array)
});