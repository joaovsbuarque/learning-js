function ValidaCPF(cpfEnviado) {


    Object.defineProperty(this, 'cpfLimpo', {
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    })
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito();

    return true;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    
    const regressivo = cpfArray.length + 1;
    const digito = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--
        return ac;
    }, 0);
};

const cpf = new ValidaCPF('444.189.428-74');
cpf.valida();
