const nome = 'Luiz';

function  falaNome() {
    console.log(nome);
}

falaNome();

// A função reconhece o que está fora no escopo global 
// ela conhece onde está declarada e sabe o que tenha nos seus vizinhos 
// ou seja em uma bolha se ou seja se uma variavel não encontra no seu escopo
// aquela variavel ela vai buscar no pai dela depois no pai do pai dela e assim
// sucessivamente ate encontra a variavel se ela não encontra da erro
// se ele encontra no seu escopo a variavel vai para de buscar em outro lugar
// ela sabe onde ela foi declarada e quais são seu vizinhos