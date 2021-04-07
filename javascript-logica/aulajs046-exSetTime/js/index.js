function relogio() {
    function getTimeFromSection(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR',{
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;
    
    function startTimer() {
        const timer = setInterval(() => {
            segundos++,
            relogio.innerHTML = getTimeFromSection(segundos);
        }, 1000);
    };
    
    document.addEventListener('click', function(e){
        const el = e.target;
        
        if(el.classList.contains('zerar')){
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    
        if(el.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            startTimer();
        }
    
        if(el.classList.contains('pausar')){
            relogio.classList.add('pausado');
            clearInterval(timer);
        }
        
    });
}

relogio();
