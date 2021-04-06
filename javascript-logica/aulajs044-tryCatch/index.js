// Qualquer codigo que pode potencialmente causar um erro
// é muito util utilizar
// try significa tentar 

try{
    console.log(naoExisto)
} catch(err) {
    console.log('nãoExisto não existe')
}

function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw ('x e y precisam ser numeros.');
    }
    return x + y;
}

console.log(soma(1, 2));
console.log(soma('1', 2));