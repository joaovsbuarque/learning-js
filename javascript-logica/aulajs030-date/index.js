//função construtora também está envolvida nisso 
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
//01/01/1970 data inicial
//const umDia = 60 * 60* 24 * 1000; isso equivale a um dia 
//O mes em javaScript começa do 0 -> Janeiro
// const data = (2019, 3 ); // ano , mes, dia, hora , minuto, segundo 
// const data = new Date(); se não colocar nada mostra data e hora atual

const data = new Date();
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1 );
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da semana ', data.getDay());
console.log(data.toString());
console.log(Date.now())

