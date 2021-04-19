// Declaração de função (Function hoisting)

falaOi();
function falaOi(){
    console.log('Oie');
};

// First-class objext (objetos de primeira classe)
// Function expression

const souUmDado = function(){
    console.log('Sou um dado')
};
souUmDado();

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro do Objeto 
const obj = {
    falar(){
        console.log('Estou falando')
    }
}
obj.falar()