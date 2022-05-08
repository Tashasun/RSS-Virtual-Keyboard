class Key {
    constructor(property) {
        this._element = document.createElement('div');
        this._element.classList.add('key')
    }
    getElement() {
        return this._element;
    }

}

export default Key;
