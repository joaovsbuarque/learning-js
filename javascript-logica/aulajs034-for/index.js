// Estrutura de repetição for 

// criar uma variavel de controle quase sempre 
// chamada de i
// inicializando for com 0 mas pode começar em qualquiser 
// pular mais do que um em um diferente do exeplo abaixo
// tambem pode decrementar ou controlar o laço quantas vezes vai ser
        // EXEMPLOS
for (let i = 0; i <= 100; i++) {

}

for (let i = 0; i <= 10; i++) {
    const par = i % 2 == 0 ? 'par' : 'impar'
    console.log(i, par);
}

const frutas = ['Maça', 'Perâ', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
}