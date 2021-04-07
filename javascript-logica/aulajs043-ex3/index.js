// Escreva a função que recebe um numero e 
// retorne o seguinte :
// Numero divisivel por 3 = Fizz
// Numero divisivel por 5 = Buzz
// Numero divisivel por 3 = FizBuzz
// Numero divisivel por 3 e 5 = FizBuzz
// Numero NÃO divisivel por 3 e 5 = retorne o proprio o numero
// Use a função com numeros de 0 a 100

function fizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "FizzBuzz"
    } else if (numero % 5 === 0){
        return "Buzz"
    } else if (numero % 3 === 0){
        return "Fizz"
    } else {
        return numero
    }
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}