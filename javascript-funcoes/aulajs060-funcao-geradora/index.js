// Ela não entrega todos os valores de uma vez
// cada vez que chama ela manda um valor 
//Exemplo 

function* geradora1() {
    // Código qualquer ...
    yield 'Valor 1';
    // Código qualquer ...
    yield 'Valor 2';
    // Código qualquer ...
    yield 'Valor 3';
};

const g1 =  geradora1();

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());
console.log(g1.next());

// É a mesma coisa que o codigo acima só interado
// for (let valor of g1){
//     console.log(valor)
// }


// Esse gerador aqui é infinito então sempre vai gerar um novo valor 

function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

//Uma função geradora usando outra função geradora 
// delegando uma função geradora 
function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4) {
    console.log(valor);
}

function* geradora5() {
    yield function() {
        console.log('vim do y1');
    };

    yield function() {
        console.log('vim do y2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();