function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//1. padaryti liniuote

const ruleContainer = document.querySelector(".container");
const ruleTextContainer = document.querySelector(".rule-text");


for (let i = 0; i <= 3000; i += 200) {
    const ruleElement = document.createElement("div");
    const ruleText = document.createElement("span");
    let text = document.createTextNode(`${i}` + 'px');
    ruleText.appendChild(text);
    ruleElement.appendChild(ruleText);
    ruleContainer.appendChild(ruleElement);
    ruleElement.classList.add("rule-element");
    ruleText.classList.add("rule-text");
}

document.addEventListener('scroll', () => console.log(window.scrollY));

//2. padaryti kad kamuoliukas butu vietoje skrolinant

const ball = document.querySelector('.ball');

document.addEventListener('scroll', () => {
    ball.style.top = 400 + window.scrollY + 'px';
})

//todo kamuolys negrizta atgal
const ball2 = document.querySelector('.ball-2');

document.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        ball2.style.top = window.scrollY + 'px';
    }
})

// judantis kamuoliukas


// let intervalID = setInterval(go, 1000);

let count = 0;

const ballGame = document.querySelector(".ball-game");

function go() {
    ballGame.style.top = rand(0, h) + 'px';
    ballGame.style.left = rand(0, w) + 'px';
}

let w = window.innerWidth - 200;
let h = window.innerHeight - 200;

window.addEventListener('resize', () => {
    w = window.innerWidth - 200;
    h = window.innerHeight - 200;
})


let isGo = false;
let intervalID;
ballGame.addEventListener('click', () => {
    if (isGo) {
        clearTimeout(intervalID);
        isGo = false;
    } else {
        go();
        intervalID = setInterval(go, 1000);
        isGo = true;
    }
})



