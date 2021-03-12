function zeroAEsqueda (num) {
    return num >= 10 ? num :`0${num}`;
}

function formataData(data) {
    const dia = zeroAEsqueda(('Dia', data.getDate()));
    const mes = zeroAEsqueda(('Mês', data.getMonth() + 1 ));
    const ano = zeroAEsqueda(('Ano', data.getFullYear()));
    const hora = zeroAEsqueda(('Hora', data.getHours()));
    const min = zeroAEsqueda(('Min', data.getMinutes()));
    const seg = zeroAEsqueda(('Seg', data.getSeconds()));

    return `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`
}

const data  = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)