// OPERAÇÃO VIA DESESTRUTURAÇÃO ARRAY
let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const numeros = [b, c, a];
[a, b, c] = numeros ;

console.log(a, b, c)

//               0  1  2  ...
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90]
const primeiroNumero = numeros[0]
console.log(primeiroNumero)
// pegando mais de um elemento do Array
const [segundoNumero, terceiroNumero, ...resto] = numeros;
console.log(segundoNumero, terceiroNumero)
console.log(resto)
// resto pega o restante do Array
// rest operator
// spread operator

const [um, ,três, ,cinco] = numeros
console.log(um, três, cinco) 


// Array dentro de array
//                  0           1           2
//                0  1  2    0  1  2    0  1  2
const numero = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

console.log(numero[1][2])