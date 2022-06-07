var count = 50;

var k = 1.05
const addNewElem = () => {
    const content = document.getElementById('content')
    const divOld = document.getElementById('box')
    let idInterval
    if (divOld) {
        content.removeChild(divOld);
        count = 50
        clearInterval(idInterval)
        k = 1.05
    }

    const divElem = document.createElement('div')
    divElem.classList.add('box');
    divElem.setAttribute('id', 'box');
    divElem.style.top = `${count}px`
    content.appendChild(divElem)

    idInterval = setInterval(() => {
        count = (count + 1) * k
        divElem.style.top = `${count}px`
        if (k === 1.05 && count >= 600) {
            k = 0.95
            // clearInterval(idInterval)
        }
        if (k === 0.95 && count <= 300) {
            k = 1.005
        }
        if (k === 1.005 && count >= 600) {
            clearInterval(idInterval)
        }
    }, 10)
};





const addFirstElem = () => {
    const rootElem = document.getElementById('root');

    const header = document.createElement('div');
    const content = document.createElement('div');
    const button = document.createElement('button');


    header.classList.add('header');
    content.classList.add('content');
    button.classList.add('buttonHeader');
    button.innerText = 'click me';
    button.style.color = '#d5cece';
    button.onclick = addNewElem
    content.setAttribute('id', 'content')


    header.appendChild(button)
    rootElem.appendChild(header)
    rootElem.appendChild(content)
}

document.body.onload = addFirstElem