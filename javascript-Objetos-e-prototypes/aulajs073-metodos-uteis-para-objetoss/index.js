//maneira de copiar propriedade 
// e com spread operator


// const produto = { nome:'Caneca', preco: 1.8 };
// const outraCoisa = { ...produto };

// outraCoisa.nome = 'Outro nome';
// outraCoisa.preco = 2.5;
// console.log(produto);
// console.log(outraCoisa);

// outra maneira de copiar as propriedades de um objeto pra outro
const produto = { nome:'Caneca', preco: 1.8 };
const caneca = Object.assign({}, produto, { material: 'porcelana'});

outraCoisa.nome = 'Outro nome';
outraCoisa.preco = 2.5;
console.log(produto);
console.log(outraCoisa);
