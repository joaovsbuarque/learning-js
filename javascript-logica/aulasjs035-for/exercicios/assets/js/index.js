// ASSOCIÇÃO VIA DESESTRUTURAÇÃO

const elementos = [
    {tag: 'p', texto: 'Qualquer texto que vc quiser'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const container = document.querySelector('.container')
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i ++) {
    let { tag, texto } = elementos[i];
    let createTag = document.createElement(tag);
    createTag.innerText = texto;
    div.appendChild(createTag)
    console.log(tag)
}

container.appendChild(div);