// Sempre que colocamos a palavra continue pula a palavra ou numero do array 
// suponha que eu não queira que o numero 2 seja exibido na tela 
// colocar o console.log apos o continue
// Já a palavra Break como vimos em switch ele sai do bloco 
// Ele não olha mais nada depois do break continue pula só para o de baixo e o break para o codigo do laço ali


// Exemplo
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];


for (let numero of numeros) {

    if(numero === 2 ){
        continue; 
    }

    if(numero === 7){
        break;
    }
    console.log(numero);
}


