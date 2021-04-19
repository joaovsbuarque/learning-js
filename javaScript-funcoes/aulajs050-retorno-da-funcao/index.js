// return 
// Retorna um valor 
// Termina a função

function soma(a, b) {
    return a + b;
};

soma(4, 8)

// tem funçoes que retornam e funcoes que não retorna valor
// como essa aqui nesse caso só exibe na tela o console

// function soma2(a , b) {
//     console.log(a + b);
// };

// Exemplos para entender mais sobre os retornos das funçoes

function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

const p1 = criaPessoa('Luiz', 'Otavio');
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
};

console.log(typeof p1);
console.log(typeof p2);


function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('Mundo!');

console.log(resto)


// função closer 

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);


console.log(duplica(3));
console.log(triplica(3));
console.log(quadriplica(3));