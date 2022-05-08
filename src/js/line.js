class Line {
    constructor(property) {
        this._element = document.createElement('div');
        this._element.classList.add('line')
        if(property.keys){
            for (let i = 0; i < property.keys.length; i++) {
                this._element.append(property.keys[i].getElement())
            }
        }
    }
    getElement() {
        return this._element;
    }

}

export default Line;
