// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)
// As funçoes construtoras e fabricas são moldes 
// para gerar novos objetos 
// não podemos esquecer de usar o new

function Pessoa( nome, sobrenome ) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome +':eu sou um metodo')
    }
}

const p1 = new Pessoa('João', 'Vitor');
const p1 = new Pessoa('Julia', 'Santana');
p2.metodo();