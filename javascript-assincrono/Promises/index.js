// veio para substituir a arvore de natal de callback

function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject(false);
            return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + 'Passei na promisse');
        }, tempo);
    });

}

// Promisse de maneira comum

// esperaAi('Frase 1 ', rand(1, 3))
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi('Frase 2 ', rand(1, 3));
//     })
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi('Frase 3 ', rand(1, 3));
//     })
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi('Eu serei o último  a ser exibido ', rand(1, 3));
//     })
//     .then(resposta => {
//         console.log(resposta);
//     })
// .catch()


// Promise.all Promise.race Promise.resolve Promise.reject 


// Promise.All -> entrega todas as funções na ordem como foi feito acima se uma der errado ai mostra o erro
// const promises = [
//     'Primeiro valor',
//     esperaAi('Promise 1', 3000),
//     esperaAi('Promise 2', 500),
//     esperaAi('Promise 3', 1000),
// ];

// Promise.all(promises)
// .then((valor) => {
//     console.log(valor);
// })
// .catch((erro) => {
//     console.log(erro);
// })


// Promise.race -> vai entregar o primeiro valor a ser executado não mostra se não cair no erro
// const promises = [
//     esperaAi('Promise 1', 3000),
//     esperaAi('Promise 2', 500),
//     esperaAi('Promise 3', 1000),
// ];

// Promise.race(promises)
// .then((valor) => {
//     console.log(valor);
// })
// .catch((erro) => {
//     console.log(erro);
// })

// Promise.resolve
function baixarPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Pagina em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixarPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log('ERRO'))
