
let newH12 = document.createElement("h1");
let oldH1 = document.querySelector(".old"); //imame kaip klase is html failo;
console.log(oldH1);

let body = document.querySelector("body");
    console.log(body); //imame pagal taga is html failo;

// body.insertBefore(newH1, oldH1); //skliaustuose rasome pirma ka norime ideti, o po kablelio po ko norime ideti



// container.appendChild(newH1);
// container.appendChild(newH1); //nepasidaugina, jei norime daugiau ,tai reikia sukurti kintamaji su kitu pavadinimu
// container.appendChild(newH1);
// container.appendChild(newH12);



//kaip viska kuriame:
//1. sukuriame elementa su js
let newH1 = document.createElement("h1");
//2. sukuriam text elementa
let labasVakaras = document.createTextNode("Labas vakaras! (pridetas apaciosj)");
//3. Text noda idedame i html elementa
newH1.appendChild(labasVakaras);
//4. surandame html'e tevini taga (turi buti vaikas su tevu, negali buti anukas) i kuri desime elementa
let container = document.querySelector(".container");
//5. i teva idedame sukurta elementa
container.appendChild(newH1);