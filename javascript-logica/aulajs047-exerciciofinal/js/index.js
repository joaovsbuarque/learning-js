const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function craiBotaoApagar(li){
    li.innerText +=  ' ';
    const botaoApagar = document.createElement('button');
    // botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.innerText = 'Apagar';
    li.appendChild(botaoApagar)
}

inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13) {
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    craiBotaoApagar(li)
    salvarTarefa()
}

btnTarefa.addEventListener('click', function() {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('apagar')){
        el.parentElement.remove()
        salvarTarefa();
    }
})

function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText
    tarefaTexto = tarefaTexto.replace('Apagar', ' ').trim()
    listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
    console.log(tarefasJSON)
}

function adicionaTarfasSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarfasSalvas()