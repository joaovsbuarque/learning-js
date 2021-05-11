class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`)
    }

    comer() {
        console.log(`${this.nome} está comendo.`)
    }

    beber() {
        console.log(`${this.nome} está bebendo.`)
    }
}

const p1 = new Pessoa('Joao', 'Vitor');
const p2 = new Pessoa('Marcio', 'Fernando');
const p3 = new Pessoa('Julia', 'Moreira');
console.log(p1)