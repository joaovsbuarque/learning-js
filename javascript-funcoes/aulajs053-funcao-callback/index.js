// Uma das utilidades do callback é para que se execute 
// As funçoes de maneira organizada na Web pois podemos receber dados de um Json
// ou de algum lugar com tempo diferente  como nesse exemplo criamos uma função chamada rand 
// para representar um numero aleatorio de 1 a 3 segundos e organizo de f1 a f3 usando
// a função callback é pra chamar quando uma coisa acaba de acontecer

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max -min) + min;
    return Math.floor(num)
}

function f1(callback) {
    setTimeout(function () {
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if (callback) callback();
    }, rand());
};

function f3(callback) {
    setTimeout( () => {
        console.log('f3');
        if(callback) callback();
    }, rand());
};

// Organizado mas é conhecido como hell callback
// f1( () => {
//     f2( () => {
//         f3( () => {
//             console.log()
//         })
//     })
// });

// Esse proximo exemplo é a mesmma coisa que o exemplo acima
// Usado para ficar mais visivel e melhor organização do codigo

f1(f1Callback)

function f1Callback() {
    f2(f2Callback);
};

function f2Callback() {
    f3(f3Callback);
};

function f3Callback(){
    console.log('Olá mundo');
};