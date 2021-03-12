const numero = 10

// Se (numero >= 0 && numero <= 5) ocorre, faça isso {código}
// Se não faça isso {o código}

if (numero >= 0 && numero <= 5 ) {
    console.log('O numero está entre 0 e 5.')
} else if(numero >= 6 && numero <= 8) {
    console.log('O numero não está entre 6 e 8.')
} else if (numero >= 9 && numero <= 11) {
    console.lof('O numero não está entre 9 e 11.')
} else {
    console.log('O numero não está entre 0 e 11')
}

// console.log('O número não está entre 0 e 5')
// se colocar a linha de codigo fora e não depende de nada da primeira 
// por isso usamos o else um depende do outro

// sempre que encontrar a correta vai para onde está vai sair fora do codigo 
// ou seja não tem continuidade apos a achar a parte ele é interrompido

// O bloco else if vai checar as condicoes a partir do momento que ele encontrar 
// ele vai ser interrompido vai executar a parte do codigo e acabou 
// so uma condição do bloco if pode ser executada 

// se eu quero fazer mais de uma 
//  e so fazer um if fora pra executar sem estar ligado com aquele 
