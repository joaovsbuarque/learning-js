// Filter -> Sempre vai retorna um array com mesma quantidade de elementos ou menos 

// Retorne os números  maiores que 10 
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosFiltrados = numeros.filter( valor =>  valor > 10);
// console.log(numerosFiltrados)

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome terminar com a 

const pessoas = [
    {nome: 'Joao', idade: 63},
    {nome: 'Maria', idade: 23},
    {nome: 'Julia', idade: 37},
    {nome: 'Wallace', idade: 80},
    {nome: 'Marcos', idade: 51},
    {nome: 'Bruno', idade: 28},
];

// const pessoasComNomeGrande = pessoas.filter( obj => obj.nome.length >= 5);
// console.log(pessoasComNomeGrande)

// const pessoasComMaisDeCinquentaAnos = pessoas.filter( obj => obj.idade >= 50);
// console.log(pessoasComMaisDeCinquentaAnos)

const pessoasQueTerminaComA = pessoas.filter( obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoasQueTerminaComA)