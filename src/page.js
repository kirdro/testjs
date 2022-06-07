'use strict'

const arrayNameButton = [
    'Главная',
    'Каталог',
    'Галерея',
    'О нас',
    'Контакты'
]

const onChangeInput = (status) => (e) => {

    console.log('>>>>', status, e.target.value)
    const span = document.getElementById('spanForm');

    span.innerText = e.target.value
}

// const onChange

const onClickHeaderButton = (status) => (e) => {
    console.log('><><><>>>', status)
    if (status === 'Контакты') {
        const formContact = document.createElement('div')
        const content = document.getElementById('content')
        const inputFormFirst = document.createElement('input')
        const inputFormSecond = document.createElement('input');
        const buttonForm = document.createElement('button');
        const spanForm = document.createElement('span')

        inputFormFirst.setAttribute('placeholder', 'Name');
        inputFormSecond.setAttribute('placeholder', 'Last Name');
        inputFormFirst.setAttribute('class', 'inputFormFirst');
        inputFormSecond.setAttribute('class', 'inputFormSecond');
        spanForm.setAttribute('id', 'spanForm');


        inputFormFirst.addEventListener('input', onChangeInput('inputFormFirst'));
        inputFormSecond.addEventListener('input', onChangeInput('inputFormSecond'));
        // inputFormFirst.onchange = onChangeInput('inputFormFirst');
        // inputFormSecond.onchange = onChangeInput('inputFormSecond');
        formContact.setAttribute('class', 'form')

        buttonForm.setAttribute('class', 'buttonForm')
        buttonForm.innerText = 'Click'

        formContact.appendChild(spanForm);
        formContact.appendChild(inputFormFirst);
        formContact.appendChild(inputFormSecond);
        formContact.appendChild(buttonForm);
        content.appendChild(formContact)
    }
}

const addFirstElement = () => {
    const header = document.createElement('div');
    const content = document.createElement('div');
    const rootElem = document.getElementById('root');
    const tempHeader = document.createElement('div');

    let arrayButtons = []


    header.setAttribute('class', 'header');
    for (const item of arrayNameButton) {
        const button = document.createElement('button')
        button.classList.add('buttonHeader');
        button.innerText = item;
        button.onclick = onClickHeaderButton(item)
        arrayButtons.push(button)
        header.appendChild(button)
    }

    content.setAttribute('class', 'content');
    content.setAttribute('id', 'content');
    tempHeader.setAttribute('class', 'backgroundHeader')

    rootElem.appendChild(tempHeader)
    rootElem.appendChild(header);
    rootElem.appendChild(content);
};

document.body.onload = addFirstElement;