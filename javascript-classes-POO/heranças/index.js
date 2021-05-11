class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar () {
        if(this.ligado) {
            console.log(`${nome} está ligado`)
            return;
        }
        this.ligado = true;
    }

    desligado() {
        if(!this.ligado) {
            console.log(`${nome} está desligado`)
            return;
        }
        this.ligado = false;
    }

}

const d1 = new DispositivoEletronico('Celular');
d1.ligar();
console.log(d1)

class Celular extends DispositivoEletronico{
    constructor(nome,cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Celular('iPhone', 'Preto', '12');
