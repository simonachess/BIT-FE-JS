console.log('----------------------Anonimines funkcijos-------------------------------');

function labas(name) {
    console.log(`Labas, ${name}`);
}

labas('Simona');
labas('Sofija');


//Anonimine funkcija 1, iskvieciama paimant kintamaji, o ne funkcijos varda
const hello = function (name) {
    console.log(`Hello, ${name}`);
}

hello('John');

//Anonimine arrow funkcija
//jeigu name yra vienas argumentas tai galime neskliausti.
//jeigu argumentu nera(yra nulis), turime rasyti tuscius skliaustus
//jeigu yra daugiau nei vienas argumentas skliaustus turime rasyti
//jeigu funkcijos turime viena funkcijos eilute, galime nerasyti riestiniu skliaustu
//ir ta eilute returnina (nors nera parasyta)
//jeigu yra riestiniai skliaustai tai tam kad returnintu reikia zodzio return
// const hi = name => console.log(`Hello, ${name}`) yr tas pats kas zemiau esanti funkcija
const hi = (name) => { console.log(`Hello, ${name}`); }

hi('Tom');
hi('Julia');

console.log('----------------------Arrow funkcija su viena eilute-------------------------------');
const ezerai = [
    [2, 'Didelis'],
    [44, 'Ilgas'],
    [11, 'Trumpas'],
    [9, 'Apvalus'],
    [1, 'Gilus'],
];

function ezeretuvas1(a, b) {
    return a[0] - b[0];
}
console.log(ezerai.slice().sort(ezeretuvas1));

console.log(ezerai.slice().sort((a, b) => a[0] - b[0]));


console.log('----------------------Arrow funkcija su daugiau eiluciu -------------------------------');

console.log(ezerai.slice().sort((a, b) => {
    if (a[1] > b[1]) {
        return 1;
    } else if (a[1] < b[1]) {
        return -1;
    } else {
        return 0;
    }
}));


console.log('----------------------Events -------------------------------');

const spaustiButton = document.querySelector("button");

spaustiButton.addEventListener("click", e => {
    console.log(e);

});

spaustiButton.addEventListener("dblclick", e => {
    console.log(e);
    spaustiButton.style.display = "none";
});

spaustiButton.addEventListener("mouseover", e => {
    console.log(e);
    spaustiButton.style.color = "red";
});

spaustiButton.addEventListener("mouseout", e => {
    console.log(e);
    spaustiButton.style.color = "black";
});