
import { currentLanguage } from "./language";

class Key {
    constructor(property) {
        this.pressedMouse = false;
        this.code = property.code;

        this._element = document.createElement('div');
        this._element.classList.add('key', `key-${property.code.toLowerCase()}`)
        this.property = property;
        this.addListener(this);
        this.repaint();
    }


    getElement() {
        return this._element;
    }
    repaint() {
        if (this.property[currentLanguage]) {
            this._element.textContent = this.property[currentLanguage];
        }
    }

    pressed() {
        if (this.code !== 'CapsLock') {
            if (this.pressedMouse) {
                this._element.classList.add('selected');
                console.log('xxxxx', this.code, Key.pressedCapsLock);
            } else {
                this._element.classList.remove('selected');
            }
        }
    };
    pressMouse(p) {
        if (p !== this.pressedMouse) {
            if (this.code === 'ShiftLeft') {
                Key.pressedShift = p;
            }
            if (this.code === 'CapsLock' && p) {
                Key.pressedCapsLock = !Key.pressedCapsLock;
                if (Key.pressedCapsLock) {
                    this._element.classList.add('selected');
                } else {
                    this._element.classList.remove('selected');
                }
            }
            if (p && currentLanguage == "en" && !Key.pressedCapsLock) {
                const textArea = document.querySelector('textArea');
                let v = '???';
                if (this.code.substr(0, 3) === 'Key') {
                    v = this.code.substr(3, 1).toLowerCase();
                }
                if (this.code.substr(0, 5) === 'Digit') {
                    v = this.code.substr(5, 1);
                }

                if (this.code === "Backquote") {
                    v = "`"
                }
                if (this.code === "Minus") {
                    v = "-"
                }
                if (this.code === "Equal") {
                    v = "="
                }
                if (this.code === "Backspace") {
                    textArea.value = textArea.value.substr(0, textArea.value.length - 1);
                    v = ""
                }
                if (this.code === "Tab") {
                    textArea.value = textArea.value+ "\t";
                    v = ""
                }
                if (this.code === "BracketLeft") {
                    v = "["
                }
                if (this.code === "BracketRight") {
                    v = "]"
                }

                if (this.code === "Delete") {
                    textArea.value = textArea.value.substr(0, textArea.value.length - 1);
                    v = ""
                }
                if (this.code === "CapsLock") {
                    v = ""
                }
                if (this.code === "Semicolon") {
                    v = ";"
                }
                if (this.code === "Quote") {
                    v = "'"
                }

                if (this.code === 'Enter') {
                    textArea.value = textArea.value +  "\n"
                    v = ""
                }

                if (this.code.substr(0, 5) === 'Shift') {
                    v = "";
                }

                if (this.code === "Comma") {
                    v = ","
                }

                if (this.code === "Period") {
                    v = "."
                }

                if (this.code === 'Slash') {
                    v = "/";
                }

                if (this.code === 'ArrowUp') {
                    v = "↑";
                }
                if (this.code.substr(0, 7) === 'Control') {
                    v = "";
                }

                if (this.code === 'MetaLeft') {
                    v = "";
                }

                if (this.code === 'AltLeft') {
                    v = "";
                }

                if (this.code === 'Space') {
                    v = " ";
                }

                if (this.code === 'ArrowLeft') {
                    v = "←";
                }

                if (this.code === 'ArrowDown') {
                    v = "↓";
                }

                if (this.code === 'ArrowRight') {
                    v = "→";
                }

                textArea.value = textArea.value + v;
            }

            if (p && currentLanguage == "en" && Key.pressedCapsLock) {
                const textArea = document.querySelector('textArea');
                let v = '???';
                if (this.code.substr(0, 3) === 'Key') {
                    v = this.code.substr(3, 1);
                }
                if (this.code.substr(0, 5) === 'Digit') {
                    v = this.code.substr(5, 1);
                }

                if (this.code === "Backquote") {
                    v = "`"
                }
                if (this.code === "Minus") {
                    v = "-"
                }
                if (this.code === "Equal") {
                    v = "="
                }
                if (this.code === "Backspace") {
                    textArea.value = textArea.value.substr(0, textArea.value.length - 1);
                    v = ""
                }
                if (this.code === "Tab") {
                    textArea.value = textArea.value+ "\t";
                    v = ""
                }
                if (this.code === "BracketLeft") {
                    v = "["
                }
                if (this.code === "BracketRight") {
                    v = "]"
                }

                if (this.code === "Delete") {
                    textArea.value = textArea.value.substr(0, textArea.value.length - 1);
                    v = ""
                }
                if (this.code === "CapsLock") {
                    v = ""
                }
                if (this.code === "Semicolon") {
                    v = ";"
                }
                if (this.code === "Quote") {
                    v = "'"
                }

                if (this.code === 'Enter') {
                    textArea.value = textArea.value +  "\n"
                    v = ""
                }

                if (this.code.substr(0, 5) === 'Shift') {
                    v = "";
                }

                if (this.code === "Comma") {
                    v = ","
                }

                if (this.code === "Period") {
                    v = "."
                }

                if (this.code === 'Slash') {
                    v = "/";
                }

                if (this.code === 'ArrowUp') {
                    v = "↑";
                }
                if (this.code.substr(0, 7) === 'Control') {
                    v = "";
                }

                if (this.code === 'MetaLeft') {
                    v = "";
                }

                if (this.code === 'AltLeft') {
                    v = "";
                }

                if (this.code === 'Space') {
                    v = " ";
                }

                if (this.code === 'ArrowLeft') {
                    v = "←";
                }

                if (this.code === 'ArrowDown') {
                    v = "↓";
                }

                if (this.code === 'ArrowRight') {
                    v = "→";
                }

                textArea.value = textArea.value + v;
            }
            if (p && currentLanguage == "ru" && !Key.pressedCapsLock) {
                const textArea = document.querySelector('textArea');
                let v = '???';
                if (this.code.substr(0, 3) === 'Key') {
                    v = this.property.ru.toLowerCase();
                }
                if (this.code.substr(0, 5) === 'Digit') {
                    v = this.code.substr(5, 1);
                }

                if (this.code === "Backquote") {
                    v = this.property.ru.toLowerCase()
                }
                if (this.code === "Minus") {
                    v = this.property.ru.toLowerCase()
                }
                if (this.code === "Equal") {
                    v = this.property.ru.toLowerCase()
                }
                if (this.code === "Backspace") {
                    textArea.value = textArea.value.substr(0, textArea.value.length - 1);
                    v = ""
                }
                if (this.code === "Tab") {
                    textArea.value = textArea.value+ "\t";
                    v = ""
                }
                if (this.code === "BracketLeft") {
                    v = this.property.ru.toLowerCase()
                }
                if (this.code === "BracketRight") {
                    v = this.property.ru.toLowerCase()
                }

                if (this.code === "Delete") {
                    textArea.value = textArea.value.substr(0, textArea.value.length - 1);
                    v = ""
                }
                if (this.code === "CapsLock") {
                    v = ""
                }
                if (this.code === "Semicolon") {
                    v = this.property.ru.toLowerCase()
                }
                if (this.code === "Quote") {
                    v = this.property.ru.toLowerCase()
                }

                if (this.code === 'Enter') {
                    textArea.value = textArea.value + "\n"
                    v = ""
                }

                if (this.code.substr(0, 5) === 'Shift') {
                    v = "";
                }

                if (this.code === "Comma") {
                    v = this.property.ru.toLowerCase()
                }

                if (this.code === "Period") {
                    v = this.property.ru.toLowerCase()
                }

                if (this.code === 'Slash') {
                    v = this.property.ru
                }

                if (this.code === 'ArrowUp') {
                    v = "↑";
                }
                if (this.code.substr(0, 7) === 'Control') {
                    v = "";
                }

                if (this.code === 'MetaLeft') {
                    v = "";
                }

                if (this.code === 'AltLeft') {
                    v = "";
                }

                if (this.code === 'Space') {
                    v = " ";
                }

                if (this.code === 'ArrowLeft') {
                    v = "←";
                }

                if (this.code === 'ArrowDown') {
                    v = "↓";
                }

                if (this.code === 'ArrowRight') {
                    v = "→";
                }

                textArea.value = textArea.value + v;
            }

            if (p && currentLanguage == "ru" && Key.pressedCapsLock) {
                const textArea = document.querySelector('textArea');
                let v = '???';
                if (this.code.substr(0, 3) === 'Key') {
                    v = this.property.ru;
                }
                if (this.code.substr(0, 5) === 'Digit') {
                    v = this.code.substr(5, 1);
                }

                if (this.code === "Backquote") {
                    v = this.property.ru
                }
                if (this.code === "Minus") {
                    v = this.property.ru
                }
                if (this.code === "Equal") {
                    v = this.property.ru
                }
                if (this.code === "Backspace") {
                    textArea.value = textArea.value.substr(0, textArea.value.length - 1);
                    v = ""
                }
                if (this.code === "Tab") {
                    textArea.value = textArea.value+ "\t";
                    v = ""
                }
                if (this.code === "BracketLeft") {
                    v = this.property.ru
                }
                if (this.code === "BracketRight") {
                    v = this.property.ru
                }

                if (this.code === "Delete") {
                    textArea.value = textArea.value.substr(0, textArea.value.length - 1);
                    v = ""
                }
                if (this.code === "CapsLock") {
                    v = ""
                }
                if (this.code === "Semicolon") {
                    v = this.property.ru
                }
                if (this.code === "Quote") {
                    v = this.property.ru
                }

                if (this.code === 'Enter') {
                    textArea.value = textArea.value +  "\n"
                    v = ""
                }

                if (this.code.substr(0, 5) === 'Shift') {
                    v = "";
                }

                if (this.code === "Comma") {
                    v = this.property.ru
                }

                if (this.code === "Period") {
                    v = this.property.ru
                }

                if (this.code === 'Slash') {
                    v = this.property.ru
                }

                if (this.code === 'ArrowUp') {
                    v = "↑";
                }
                if (this.code.substr(0, 7) === 'Control') {
                    v = "";
                }

                if (this.code === 'MetaLeft') {
                    v = "";
                }

                if (this.code === 'AltLeft') {
                    v = "";
                }

                if (this.code === 'Space') {
                    v = " ";
                }

                if (this.code === 'ArrowLeft') {
                    v = "←";
                }

                if (this.code === 'ArrowDown') {
                    v = "↓";
                }

                if (this.code === 'ArrowRight') {
                    v = "→";
                }

                textArea.value = textArea.value + v;
            }




            this.pressedMouse = p;
            this.pressed();
        }
    }

    addListener() {
        this._element.addEventListener("mousedown", () => {
            this.pressMouse(true);
        });
        this._element.addEventListener("mouseup", () => {
            this.pressMouse(false);
        });
        this._element.addEventListener("mouseenter", (e) => {
            this.pressMouse(e.buttons % 2 == 1);
        });
        this._element.addEventListener("mouseleave", (e) => {
            this.pressMouse(false);
        });
    }
}

Key.pressedShift = false;
Key.pressedCapsLock = false;

export default Key;
