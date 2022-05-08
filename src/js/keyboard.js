import Key from "./key"
import Line from "./line";

const arrKeyboard = [
    new Line({
        keys: [
            new Key(),
            new Key(),
            new Key(),
            new Key(),
            new Key(),
            new Key(),
            new Key(),
            new Key(),
            new Key(),
            new Key(),
            new Key(),
            new Key(),
            new Key(),
            new Key(),
        ]
    }),
    new Line({ keys: [
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
    ]}),
    new Line({ keys: [
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
    ]}),
    new Line({ keys: [
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
    ]}),
    new Line({ keys: [
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
        new Key(),
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

const keyboard = new Keyboard();
export default keyboard;

