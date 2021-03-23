const h1 = document.querySelector('.container h1');
const data = new Date();
const diaSemana = data.getDate();
const numeroMes = data.getMonth();

function getDiaSemanaTexto (diaSemana){
    let diaSemanaTexto 

    switch(diaSemana) {
        case 0: 
        diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1: 
        diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2: 
        diaSemanaTexto = 'Terça';
            return diaSemanaTexto;    
        case 3: 
        diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;    
        case 4: 
        diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;    
        case 5: 
        diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;    
        case 6: 
        diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}
function getNomeMes (numeroMes){
    let numeroMesTexto

    switch(numeroMes) {
        case 0: 
        numeroMesTexto = 'Janeiro';
            return numeroMesTexto;
        case 1: 
        numeroMesTexto = 'Fevereiro';
            return numeroMesTexto;
        case 2: 
        numeroMesTexto = 'Março';
            return numeroMesTexto;    
        case 3: 
        numeroMesTexto = 'Abril';
            return numeroMesTexto;    
        case 4: 
        numeroMesTexto = 'Maio';
            return numeroMesTexto;    
        case 5: 
        numeroMesTexto = 'Junho';
            return numeroMesTexto;    
        case 6: 
        numeroMesTexto = 'Julho';
            return numeroMesTexto;
        case 7: 
        numeroMesTexto = 'Agosto';
            return numeroMesTexto;
        case 8: 
        numeroMesTexto = 'Setembro';
            return numeroMesTexto;
        case 9: 
            numeroMesTexto = 'Outubro';
            return numeroMesTexto;        
        case 10: 
            numeroMesTexto = 'Novembro';
            return numeroMesTexto;        
        case 11: 
        numeroMesTexto = 'Dezembro';
            return numeroMesTexto;        
        numeroMesTexto = '';
            return numeroMesTexto;
    }
}

function criarData(data) {
    const diaSemana = data.getDate();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);
    
    // // console.log(nomeMes, nomeDia)
    // return (
    // `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${getFullYear()}` +
    // `${getHours()}`
    // );
}

h1.innerHTML = criarData(data)

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = data.toLocaleDateString('pt-BR',{ dataStyle: 'full'});
