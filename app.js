const button = document.querySelector(".button");
const circle = document.querySelector(".circle")
let buttonOn = false;
button.addEventListener("click", () => {
    if (!buttonOn) {
        buttonOn = true;
        button.style.animation = "transformToBlue 1s ease-in-out 0s forwards"
        circle.style.animation = "moveCircleRight 1s ease-in-out 0s forwards"
        invertOn();

    }
    else {
        buttonOn = false;
        button.style.animation = "transformToYellow 1s ease-in-out 0s forwards"
        circle.style.animation = "moveCircleLeft 1s ease-in-out 0s forwards"
        console.log("b")
    }
})


// function invertOn() {
//     var head = document.getElementsByTagName('head')[0];
//     var link = document.createElement('link');
//     link.rel = 'stylesheet';
//     link.type = 'text/css';
//     link.href = 'styles.css';
//     head.appendChild(link);
// }
// function invertOff() {
//     var head = document.getElementsByTagName('head')[0];
//     var link = document.getElementsByTagName('link')[1];
//     head.removeChild(link)

// }