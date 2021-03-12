const nomeProfessor = 'Luiz Otávio';
const sobreNome = 'Miranda';
const  idade = 30;
const peso = 84;
const altura = 1.80;

let indiceMassaCorporal = peso / (altura * altura) ; // peso / (altura * altura )
let anoNascimento = 2021 - 30 ;

// console.log(nomeProfessor, sobreNome,'tem' , idade, 'pesa', peso ,'tem', altura ,'e seu imc', indiceMassaCorporal, nomeProfessor, sobreNome, anoNascimento)
// console.log(imc)
// console.log(anoNascimento)
// depois fazer com template string para facilitar a leitura e para gravar melhor 

// Template String

console.log(`${nomeProfessor} ${sobreNome} tem ${idade} anos e pesa ${peso} tem ${altura} de altura e seu imc é de ${indiceMassaCorporal} ${nomeProfessor} ${sobreNome} nasceu em ${anoNascimento}`)
