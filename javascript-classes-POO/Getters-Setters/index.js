const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[velocidade] = 0;
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[velocidade] = valor;
    }

    get velocidade() {
        return this[_velocidade];
    }

    acelerar() {
        if(this[velocidade] >= 100) return;
        this[velocidade]++;
    }

    freiar() {
        if(this[velocidade] <= 0) return;
        this[velocidade]--;
    }
}

const c1 = new Carro('Fusca');
