/*

Definição de protótipo 
Protótipo é o termo usado para se redefinir ao que foi criado pela 
primeira vez, servindo de modelo ou molde para futuras produções.

Todo os objetos tem um referencia interna o protótipo (_proto_) 
que vem da propriedade prototypes da função construtora que foi usada 
para criá-lo. Quando tentamos acessar um membro de um objeto
primeiro o motor JS vai tentar encontrar beste membro no próprio objeto e depois na cadeia

O nomeCompleto está dentro de pessoa vai ter tudp que tem no metodo
.prototype
*/
// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = () => {
    return this.nome + ' ' + this.sobrenome
}

// instância
const pessoa1 =new Pessoa('João', 'O.') // <- Pessoa = função construtora
const pessoa2 =new Pessoa('Julia', 'A.') // <- Pessoa = função construtora

console.dir(pessoa1)

