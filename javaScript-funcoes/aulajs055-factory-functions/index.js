function criaPessoa(nome, sobrenome, a, p) {
    return{
        nome, 
        sobrenome,
        fala(assunto) {
            return `${this.nome} está ${assunto}`
        },
        // Getter
        get nomeCompleto(valor){
            return `${nome} ${sobrenome}`
        },
        peso: a,
        altura: p,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
        }
    };
}

const p1 = criaPessoa('João', 'Buarque', 80, 1.8);
console.log(p1.imc());
console.log(p1.sobrenome)
// const p2 = criaPessoa('Julia', 'Santana', 50, 1.6);
// console.log(p2.imc());

