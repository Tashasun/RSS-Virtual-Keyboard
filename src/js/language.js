import keyboard from "./keyboard.js"

let currentLanguage = "ru";
function setLanguage() {
    let arrLanguage = ["en", "ru"];
    if (currentLanguage == arrLanguage[0]) {
        currentLanguage = arrLanguage[1]
    }
    else {
        currentLanguage = arrLanguage[0]
    }

    return currentLanguage;
}

document.addEventListener('keydown', (event) => {

    if (event.code == "ShiftLeft" ||
        event.code == "AltLeft") {
        if (event.altKey && event.shiftKey) {
            setLanguage()
            console.log(currentLanguage);
            const lines = keyboard.getArrKeyboard();
            for (let i = 0; i < lines.length; i++) {
                const keys = lines[i].keys;
                for (let j = 0; j < keys.length; j++) {
                    console.log(keys[j]);
                    keys[j].repaint();
                }
            }
        }
    }
    // console.log(event)
})

export { currentLanguage }