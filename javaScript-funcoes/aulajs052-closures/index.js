// closures é a habilidade da função de acessar seu escopo lexico
//  é a variavel definida fora dela 

//Global
function retornaFuncao() {
    const nome = 'Luiz';
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao();
console.dir(funcao) 
// console.dir é a mesma coisa que console.log
