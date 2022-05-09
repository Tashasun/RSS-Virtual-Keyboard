import Key from "./key"
import KeyArrowLeft from "./keyArrowLeft"
import KeyArrowRight from "./keyArrowRight"
import KeyArrowUp from "./keyArrowUp"
import KeyArrowDown from "./keyArrowDown"
import Line from "./line";
import { currentLanguage } from "./language"

const arrKeyboard = [
    new Line({
        keys: [
            new Key({ en: "`", ru: "Ё", code: "Backquote" }),
            new Key({ en: "1", ru: "1", code: "Digit1" }),
            new Key({ en: "2", ru: "2", code: "Digit2" }),
            new Key({ en: "3", ru: "3", code: "Digit3" }),
            new Key({ en: "4", ru: "4", code: "Digit4" }),
            new Key({ en: "5", ru: "5", code: "Digit5" }),
            new Key({ en: "6", ru: "6", code: "Digit6" }),
            new Key({ en: "7", ru: "7", code: "Digit7" }),
            new Key({ en: "8", ru: "8", code: "Digit8" }),
            new Key({ en: "9", ru: "9", code: "Digit9" }),
            new Key({ en: "0", ru: "0", code: "Digit0" }),
            new Key({ en: "-", ru: "-", code: "Minus" }),
            new Key({ en: "=", ru: "=", code: "Equal" }),
            new Key({ en: "Backspace", ru: "Backspace", code: "Backspace" }),
        ]
    }),
    new Line({
        keys: [
            new Key({ en: "Tab", ru: "Tab", code: "Tab" }),
            new Key({ en: "Q", ru: "Й", code: "KeyQ" }),
            new Key({ en: "W", ru: "Ц", code: "KeyW" }),
            new Key({ en: "E", ru: "У", code: "KeyE" }),
            new Key({ en: "R", ru: "К", code: "KeyR" }),
            new Key({ en: "T", ru: "Е", code: "KeyT" }),
            new Key({ en: "Y", ru: "Н", code: "KeyY" }),
            new Key({ en: "U", ru: "Г", code: "KeyU" }),
            new Key({ en: "I", ru: "Ш", code: "KeyI" }),
            new Key({ en: "O", ru: "Щ", code: "KeyO" }),
            new Key({ en: "P", ru: "З", code: "KeyP" }),
            new Key({ en: "[", ru: "Х", code: "BracketLeft" }),
            new Key({ en: "]", ru: "Ъ", code: "BracketRight" }),
            new Key({ en: "Del", ru: "Del", code: "Delete" }),
        ]
    }),
    new Line({
        keys: [
            new Key({ en: "CapsLock", ru: "CapsLock", code: "CapsLock" }),
            new Key({ en: "A", ru: "Ф", code: "KeyA" }),
            new Key({ en: "S", ru: "Ы", code: "KeyS" }),
            new Key({ en: "D", ru: "В", code: "KeyD" }),
            new Key({ en: "F", ru: "А", code: "KeyF" }),
            new Key({ en: "G", ru: "П", code: "KeyG" }),
            new Key({ en: "H", ru: "Р", code: "KeyH" }),
            new Key({ en: "J", ru: "О", code: "KeyJ" }),
            new Key({ en: "K", ru: "Л", code: "KeyK" }),
            new Key({ en: "L", ru: "Д", code: "KeyL" }),
            new Key({ en: ";", ru: "Ж", code: "Semicolon" }),
            new Key({ en: "'", ru: "Э", code: "Quote" }),
            new Key({ en: "ENTER", ru: "ENTER", code: "Enter" }),
        ]
    }),
    new Line({
        keys: [
            new Key({ en: "Shift", ru: "Shift", code: "ShiftLeft" }),
            new Key({ en: "Z", ru: "Я", code: "KeyZ" }),
            new Key({ en: "X", ru: "Ч", code: "KeyX" }),
            new Key({ en: "C", ru: "С", code: "KeyC" }),
            new Key({ en: "V", ru: "М", code: "KeyV" }),
            new Key({ en: "B", ru: "И", code: "KeyB" }),
            new Key({ en: "N", ru: "Т", code: "KeyN" }),
            new Key({ en: "M", ru: "Ь", code: "KeyM" }),
            new Key({ en: ",", ru: "Б", code: "Comma" }),
            new Key({ en: ".", ru: "Ю", code: "Period" }),
            new Key({ en: "/", ru: "/", code: "Slash" }),
            new KeyArrowUp({ code: "ArrowUp" }),
            new Key({ en: "Shift", ru: "Shift", code: "ShiftRight" }),
        ]
    }),
    new Line({
        keys: [
            new Key({ en: "Ctrl", ru: "Ctrl", code: "ControlLeft" }),
            new Key({ en: "Win", ru: "Win", code: "MetaLeft" }),
            new Key({ en: "Alt", ru: "Alt", code: "AltLeft" }),
            new Key({ en: "", ru: "", code: "Space" }),
            new KeyArrowLeft({ code: "ArrowLeft" }),
            new KeyArrowDown({ code: "ArrowDown" }),
            new KeyArrowRight({ code: "ArrowRight" }),
            new Key({ en: "Ctrl", ru: "Ctrl", code: "ControlRight" }),
        ]
    }),

]

class Keyboard {
    constructor(property) {
        this._element = document.createElement('div');
        this._element.classList.add('keyboard');
        this._element.id ="keyboard"
        for (let i = 0; i < arrKeyboard.length; i++) {
            this._element.append(arrKeyboard[i].getElement())
        }
    }
    getElement() {
        return this._element;
    }
    getArrKeyboard() {
        return arrKeyboard;
    }
}

document.addEventListener('keydown', (event) => {

    if (`key-${event.code.toLowerCase()}` == "key-capslock") {
        document.querySelector(`.key-${event.code.toLowerCase()}`).classList.toggle("selected");
    }
    else {
        document.querySelector(`.key-${event.code.toLowerCase()}`).classList.add("selected");
    }
})

document.addEventListener('keyup', (event) => {
    if (`key-${event.code.toLowerCase()}` !== "key-capslock") {
        document.querySelector(`.key-${event.code.toLowerCase()}`).classList.remove("selected")
    }
})




const keyboard = new Keyboard();
export default keyboard;

