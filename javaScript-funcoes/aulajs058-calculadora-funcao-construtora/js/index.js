function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
    };
    
    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.cotains('btn-num')) this.addNumDisplay(el);
            if (el.classList.cotains('btn-clear')) this.clear(el);
            if (el.classList.cotains('btn-del')) this.del(el);
            if (el.classList.cotains('btn-eq')) this.realizaContas(el);
        });
    };

    this.realizaContas = () => {
        try{
            const conta = eval(this.display.value)

            if(!conta) {
                alert('Conta Inválida');
                return;
            }

        } catch(e) {
            alert('Conta Inválida');
            return;
        }
    }

    this.addNumDisplay = el => this.display.value += el.innerText;
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);
};

const calculadora = new Calculadora();
calculadora.inicia();