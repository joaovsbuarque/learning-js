// como congelar um objeto sem ser com o freeze
// defineProperty - defineProperties

function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable:true, // pegar o valor-> ou seja mostra a chave
        value: estoque, // mostrar o valor 
        writable: false, // pode alterar valor ou não
        configurable: false, // pode reconfigurar a chave 
    });

    Object.defineProperties(this, {
        nome: {
            enumerable:true, // pegar o valor-> ou seja mostra a chave
            value: nome, // mostrar o valor 
            writable: false, // pode alterar valor ou não
            configurable: false, // pode reconfigurar a chave 
        },
        preco: {
            enumerable:true, // pegar o valor-> ou seja mostra a chave
            value: preco, // mostrar o valor 
            writable: false, // pode alterar valor ou não
            configurable: false, // pode reconfigurar a chave 
        }
    });
}

//Essa variavel nome e preco são publica posso 
// acessar fora do meu e visualizar ela
// já estoque é privada não podendo ver  
const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 50000;
delete p1.estoque;
console.log(p1);

for(let chave in p1) {
    console.log(chave)
}