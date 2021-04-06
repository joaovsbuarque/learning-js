let i = 0

while (i <= 10 ) {
console.log(i)
i++; //Nunca esquecer essa liha pq vai travar o navegador por ser um laço infinito
}

console.log('Segue a vida...')

// Outro exemplo de while criando um numero aleatorio de 1 a 50

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}


let rand = random(1, 50);
console.log(rand);

while (rand !== 10) {
    rand = random(1, 50)
    console.log(rand);
}

// doWhile significa faça e depois cheque a condição
// Exemplo de do While como usar e onde usar  

do {
rand = random(1,50);
console.log|(ran)
} while(rand !== 10)

