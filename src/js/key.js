
class Key {
    constructor(property) {
        this._element = document.createElement('div');
        this._element.classList.add('key',`key-${property.code.toLowerCase()}`)
        if(property.en){
            this._element.textContent = property.en;
        }
    }

    getElement() {
        return this._element;
    }

}

export default Key;
