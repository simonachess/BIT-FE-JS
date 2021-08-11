//json naudojamas masyvams ir objektams saugoti

const masyvas = [5, 5, 6, { labas: 'labas', obj: ['labas', 'vakaras', 'ačiū'] }, 7, 7];


let jsonString = JSON.stringify(masyvas);


const masyvasAtgal = JSON.parse(jsonString);


console.log(masyvas, jsonString, masyvasAtgal);


//informacijos saugojimas narsykleje local storage
// let myStorage = window.localStorage;
// console.log(myStorage);


let pirstukai = (null ===localStorage.getItem('pirst')) ? [0] : JSON.parse(localStorage.getItem('pirst'));
console.log('pirstukai:', pirstukai);
document.querySelector("button").addEventListener("click", () => {
    
    pirstukai[0]++;
    console.log('pirstukai:', pirstukai);
    localStorage.setItem('pirst', JSON.stringify(pirstukai));
});