//              -5       -4        -3          -2        -1
//               0        1         2           3         4 
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

// nomes.splice(indice, delete, elem1, elem2, elem3)

// mais completa que as fuções aprendidas ate agora pq tem tudo
// como adicionar remover apagar e selecionar o indice

// simular a função pop
//para remover a julia por exemplo
const removidos = nomes.splice(4, 1)
console.log(nomes, removidos)
// ele pode ser salvo em outra variavel como no exemplo acima foi criado um outro array chamado 
// removidos que está só com a variavel julia

// Pop
// const removidos = nomes.splice(-1, 1)

// Push
// nomes.splice(nomes.length, 0, 'Luiz');

// unshift
// nomes.splice(0, 0, 'Luiz');

// Shift
// const removidos = nomes.splice(0, 1)