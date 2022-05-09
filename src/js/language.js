import keyboard from "./keyboard.js"

let currentLanguage = "en";
if(!localStorage.getItem("language")) {
    localStorage.setItem("language", `${currentLanguage}`)
}
else {
    currentLanguage = localStorage.getItem("language") 
}



function setLanguage() {
    let arrLanguage = ["en", "ru"];
    if (currentLanguage == arrLanguage[0]) {
        currentLanguage = arrLanguage[1];
        localStorage.setItem("language",`${currentLanguage}`)
    }
    else {
        currentLanguage = arrLanguage[0];
        localStorage.setItem("language",`${currentLanguage}`)
    }
    return currentLanguage;
}

document.addEventListener('keydown', (event) => {

    if (event.code == "ShiftLeft" ||
        event.code == "AltLeft") {
        if (event.altKey && event.shiftKey) {
            setLanguage()
            const lines = keyboard.getArrKeyboard();
            for (let i = 0; i < lines.length; i++) {
                const keys = lines[i].keys;
                for (let j = 0; j < keys.length; j++) {
                    keys[j].repaint();
                }
            }
        }
    }
})

export { currentLanguage }