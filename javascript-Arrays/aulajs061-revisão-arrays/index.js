// Array são valores por referencia 
//                  0        1        2        3           4
// const nomes = ['Eduardo', 'Maria', 'Joao', 'Wallace', 'Cleber'];
// Outra maneira de fazer um array com o construtor 
// const nomes = new Array('Eduardo', 'Maria', 'Joana');
// nomes[2] = 'Joana';
// quando quero pegar o resto = ... ou espalha/spread
// const novo = [...nomes];

// nomes.push() // -> adiciona no final 
// novo.pop(); // -> para remover do final
// nomes.shift() // -> adiciona no inicio do array não é bom pq desloca todos os elementos do array
// nomes.unshift() // -> remove do começo mesmo problema da anterior 
// novo aponta pro mesmo valor na memoria que o nomes
// const novo = nomes.slice(0, 3)

// console.log(nomes);
// console.log(nomes.length) // -> para ver tamanho do array

// COMO FARIA PARA SEPARA UMA STRING EM UM ARRAY

const nome = 'João Vitor da Silva Buarque';
const nomes = nome.split(' '); // -> separra
console.log(nomes);

// E para juntar todos array em uma string
const arrNome = [ 'João', 'Vitor', 'da', 'Silva', 'Buarque' ];
const srtNome = arrNome.join(' '); // -> juntar
console.log(srtNome)