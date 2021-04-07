function mostrarHora() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// function funcaoDoIntercal() {
//     console.log(mostrarHora());
// }

// setInterval(funcaoDoIntercal, 1000)

// maneira mais facil de fazer 

setInterval (function funcaoDoIntercal() {
    console.log(mostrarHora());
}, 1000);

// tambem podemos jogar dentro de uma variavel 

const timer = setInterval (function funcaoDoIntercal() {
    console.log(mostrarHora());
}, 1000);

setTimeout(function(){
    clearInterval(timer)
}, 10000)

// setTimeOut é só para executar uma vez 

setTimeout(function(){
    console.log('Olá Mundo')
}, 5000);