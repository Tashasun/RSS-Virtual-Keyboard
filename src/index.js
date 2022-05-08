import "./scss/main-style.scss";
import keyboard from "./js/keyboard"; "./js/keyboard.js"

const root = document.querySelector('body')
console.log(root)
const container = document.createElement('div');
container.classList.add('container');
root.append(container);
container.append(keyboard.getElement());

const textAria = document.createElement('div');
textAria.classList.add('textAria');
container.prepend(textAria)

const title = document.createElement('div');
title.classList.add('title');
title.innerText="RSS Виртуальная клавиатура"
container.prepend(title);

const description = document.createElement('p')
description.classList.add('description');
description.innerText = "Клавиатура создана в операционной системе Windows"
container.append(description);

const instruction= document.createElement('p')
instruction.classList.add('instruction');
instruction.innerText = "Переключение языка: Shift + Alt"
container.append(instruction);







