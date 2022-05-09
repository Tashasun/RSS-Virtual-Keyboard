import "./scss/main-style.scss";
import keyboard from "./js/keyboard"; "./js/keyboard.js"


const root = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
root.append(container);
container.append(keyboard.getElement());

const textArea = document.createElement('textarea');
textArea.classList.add('textArea');
textArea.setAttribute("rows", "5");
textArea.setAttribute("cols", "45");
window.tArea = textArea;
container.prepend(textArea);

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
function onFocus(){
    textArea.focus()
}
document.addEventListener("DOMContentLoaded", onFocus);
document.addEventListener("click", onFocus);







