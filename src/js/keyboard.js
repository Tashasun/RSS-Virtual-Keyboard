import Key from "./key"
import KeyArrowLeft from "./keyArrowLeft"
import KeyArrowRight from "./keyArrowRight"
import KeyArrowUp from "./keyArrowUp"
import KeyArrowDown from "./keyArrowDown"
import Line from "./line";

const arrKeyboard = [
    new Line({
        keys: [
            new Key({en: "`",ru:"", code:"Backquote"}),
            new Key({en:"1", ru:"",code:"Digit1"}),
            new Key({en:"2", ru:"",code:"Digit2"}),
            new Key({en:"3", ru:"",code:"Digit3"}),
            new Key({en:"4", ru:"",code:"Digit4"}),
            new Key({en:"5", ru:"",code:"Digit5"}),
            new Key({en:"6", ru:"",code:"Digit6"}),
            new Key({en:"7", ru:"",code:"Digit7"}),
            new Key({en:"8", ru:"",code:"Digit8"}),
            new Key({en:"9", ru:"",code:"Digit9"}),
            new Key({en:"0", ru:"",code:"Digit0"}),
            new Key({en:"-", ru:"",code:"Minus"}),
            new Key({en:"=", ru:"",code:"Equal"}),
            new Key({en:"Backspace", ru:"",code:"Backspace"}),
        ]
    }),
    new Line({ keys: [
        new Key({en:"Tab", ru:"",code:"Tab"}),
        new Key({en:"Q", ru:"",code:"KeyQ"}),
        new Key({en:"W", ru:"",code:"KeyW"}),
        new Key({en:"E", ru:"",code:"KeyE"}),
        new Key({en:"R", ru:"",code:"KeyR"}),
        new Key({en:"T", ru:"",code:"KeyT"}),
        new Key({en:"Y", ru:"",code:"KeyY"}),
        new Key({en:"U", ru:"",code:"KeyU"}),
        new Key({en:"I", ru:"",code:"KeyI"}),
        new Key({en:"O", ru:"",code:"KeyO"}),
        new Key({en:"P", ru:"",code:"KeyP"}),
        new Key({en:"[", ru:"",code:"BracketLeft"}),
        new Key({en:"]", ru:"",code:"BracketRight"}),
        new Key({en:"Del", ru:"",code:"Delete"}),
    ]}),
    new Line({ keys: [
        new Key({en:"CapsLock", ru:"",code:"CapsLock"}),
        new Key({en:"A", ru:"",code:"KeyA"}),
        new Key({en:"S", ru:"",code:"KeyS"}),
        new Key({en:"D", ru:"",code:"KeyD"}),
        new Key({en:"F", ru:"",code:"KeyF"}),
        new Key({en:"G", ru:"",code:"KeyG"}),
        new Key({en:"H", ru:"",code:"KeyH"}),
        new Key({en:"J", ru:"",code:"KeyJ"}),
        new Key({en:"K", ru:"",code:"KeyK"}),
        new Key({en:"L", ru:"",code:"KeyL"}),
        new Key({en:";", ru:"",code:"Semicolon"}),
        new Key({en:"'", ru:"",code:"Quote"}),
        new Key({en:"ENTER", ru:"",code:"Enter"}),
    ]}),
    new Line({ keys: [
        new Key({en:"Shift", ru:"",code:"ShiftLeft"}),
        new Key({en:"Z", ru:"",code:"KeyZ"}),
        new Key({en:"X", ru:"",code:"KeyX"}),
        new Key({en:"C", ru:"",code:"KeyC"}),
        new Key({en:"V", ru:"",code:"KeyV"}),
        new Key({en:"B", ru:"",code:"KeyB"}),
        new Key({en:"N", ru:"",code:"KeyN"}),
        new Key({en:"M", ru:"",code:"KeyM"}),
        new Key({en:",", ru:"",code:"Comma"}),
        new Key({en:".", ru:"",code:"Period"}),
        new Key({en:"/", ru:"",code:"Slash"}),
        new KeyArrowUp({code:"ArrowUp"}),
        new Key({en:"Shift", ru:"",code:"ShiftRight"}),
    ]}),
    new Line({ keys: [
        new Key({en:"Ctrl", ru:"",code:"ControlLeft"}),
        new Key({en:"Win", ru:"",code:"MetaLeft"}),
        new Key({en:"Alt", ru:"",code:"AltLeft"}),
        new Key({en:"", ru:"",code:"Space"}),
        new KeyArrowLeft({code:"ArrowLeft"}),
        new KeyArrowDown({code:"ArrowDown"}),
        new KeyArrowRight({code:"ArrowRight"}),
        new Key({en:"Ctrl", ru:"",code:"ControlRight"}),
    ]}),

]

class Keyboard {
    constructor(property) {
        this._element = document.createElement('div');
        this._element.classList.add('keyboard')
        for (let i = 0; i < arrKeyboard.length; i++) {
            this._element.append(arrKeyboard[i].getElement())
        }
    }
    getElement() {
        return this._element;
    }

}

document.addEventListener('keydown', (event)=>{
    console.log(event.code)
})

const keyboard = new Keyboard();
export default keyboard;

