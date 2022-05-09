
import { currentLanguage } from "./language";

class Key {
    constructor(property) {
        this._element = document.createElement('div');
        this._element.classList.add('key', `key-${property.code.toLowerCase()}`)
        this.property = property;
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
}

export default Key;
