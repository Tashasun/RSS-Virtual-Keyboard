import Key from './key'

class KeyArrowRight extends Key {
    constructor(property) {
        super(property);
        this.div = document.createElement('div'); 
        this._element.classList.add('arrow');
        // this.div.innerHTML= "&#8592"
        this._element.append(this.div); 
    }
}

export default KeyArrowRight;
