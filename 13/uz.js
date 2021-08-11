// Atskiri elementai
// Tamsiai žaliai nuspalvinti h1 tagą;
// Tagui i pridėti klasę small;
// Iš tago h1 pašalinti klasę main;
// Tik tam h2 tagui, kuris iškart eina po h1 tagui pridėti klasę first ir pašalinti klasę main;
// Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai
console.log('----------------------1a-------------------------------');
const h1New = document.querySelector("h1");
h1New.style.color = "green";

console.log('----------------------1b-------------------------------');
const iTagas = document.querySelector("h1");
iTagas.classList.add("small");

console.log('----------------------1c-------------------------------');
h1New.classList.remove("main");

console.log('----------------------1d-------------------------------');
const h2New = document.querySelector("h1 + h2");
h2New.classList.remove("main");
h2New.classList.add("first");

console.log('----------------------1e-------------------------------');
const spanNew = document.querySelector("h2 > span");
spanNew.style.fontSize = "10px";
spanNew.style.color = "grey";

// Elemetų grupės(nodeList) skaičiavimus išvest į consolę
// Suskaičiuoti kiek yra h2 tagų;
// Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
// Visus h2 tagus nuspalvinti šviesiai mėlynai
// Tagams kurie yra div su klase prices viduje esantiems h2 tagams pridėti klasę price - tag;
// Pabraukti visus tagus su klase new;
// Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų(jos yra ul tagai);
// Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;
// Suskaičiuoti kiek yra naujų gyvūnų(su klase new);
// Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;
console.log('----------------------2a-------------------------------');
const h2All = document.querySelectorAll("h2");
const h2AllLength = h2All.length
const h2AllclassFirst = document.querySelectorAll("h2.first").length;
console.log('kiek yra h2 tagu:', h2AllLength);
const h2WithoutClassFirst = h2AllLength - h2AllclassFirst;
console.log('kiek yra h2 tagu su first klase:', h2WithoutClassFirst);
// let counter = 0;
// for (let i = 0; i < h2AllLength; i++) {
//     if (!h2All[i].classList.contains(".first")) {
//         counter++;
//     }
// }
// console.log('kiek yra h2 tagu:', counter)

console.log('----------------------2c-------------------------------');
for (let i = 0; i < h2AllLength; i++) {
    h2All[i].style.color = "lightblue";
}

console.log('----------------------2d-------------------------------');
const priceTag = document.querySelectorAll("div.prices h2");
priceTag.forEach(i => i.classList.add("price-tag"));

console.log(priceTag);
// for (let i = 0; i < priceTag.length; i++) {
//     priceTag[i].classList.add("price-tag");
// }

console.log('----------------------2e-------------------------------');
const tagsWithClassNew = document.querySelectorAll(".new");
console.log(tagsWithClassNew);
for (let i = 0; i < tagsWithClassNew.length; i++) {
    tagsWithClassNew[i].style.textDecoration = "underline";
}

console.log('----------------------2fg-------------------------------');
const animalsGiraffe = document.querySelectorAll("ul");
console.log('gyvunu ir zirafu:', animalsGiraffe.length);
for (let i = 0; i < animalsGiraffe.length; i++) {
    animalsGiraffe[i].style.border = "1px solid red";
    animalsGiraffe[i].style.padding = "15px 50px";
}

console.log('----------------------2h-------------------------------');
const newAnimal = document.querySelectorAll("ul .new");
console.log('nauju gyvunu:', newAnimal.length);

console.log('----------------------2i-------------------------------');

//skaiciuoja .new klases tik ule, o ne visame dokumente, nes pries querySelectorAll('.new') nurodeme ul
const ats = {}; //tuscias objektas
document.querySelectorAll("ul").forEach(ul => {
    ats[ul.id] = ul.querySelectorAll('.new').length;
});
console.log(ats);



// Elementų events
// Padaryti tai ką liepia mygtukai Header1 sekcijoje;
// Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
// Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;
// Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color;
// Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;
// Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos https://stackoverflow.com/questions/18691655/remove-style-on-element
// Padaryti tai ką liepia mygtukai Header2 sekcijoje;

console.log('----------------------3a-------------------------------');
const headerButton = document.querySelector("#h1-color");
headerButton.addEventListener("click", () => {
    const h1Green = document.querySelector("h1");
    h1Green.style.color = "blue";
});

const headerButton2 = document.querySelector("#h1-font");
headerButton2.addEventListener("click", () => {
    const h1Font = document.querySelector("h1");
    h1Font.style.fontSize = "100px";
});

console.log('----------------------3b-------------------------------');

const iTagasSpausti = document.querySelector("i");
iTagasSpausti.addEventListener("click", () => {
    const iBold = document.querySelector("i");
    iBold.style.fontWeight = "bold";
});

console.log('----------------------3c-------------------------------');

const priceTagasSpausti = document.querySelector(".prices");
priceTagasSpausti.addEventListener("click", () => {
    const priceBackground = document.querySelector(".prices");
    if (priceBackground.style.backgroundColor === "grey") {
        priceBackground.style.backgroundColor = "white"
    } else {
        priceBackground.style.backgroundColor = "grey"
    }
});


console.log('----------------------3d-------------------------------');

const contactsTagSpausti = document.querySelector("#contacts");
contactsTagSpausti.addEventListener("click", () => {
    const contactsCssColor = document.querySelector("#contacts");
    contactsCssColor.style.color = "orange";
});

console.log('----------------------3e------------------------------');

const spaustiPadidinti = document.querySelector("#contacts u");
spaustiPadidinti.addEventListener("click", e => {
    e.stopPropagation();
    const contactsTag = document.querySelector("#contacts");
    contactsTag.style.fontSize = "20px";
});

console.log('----------------------3f-------------------------------');

const spaustiX = document.querySelector("#contacts b");
spaustiX.addEventListener("click", e => {
    e.stopPropagation(); //kadangi reikia du propercius nuimti del to rasome stop propagation
    const xTag = document.querySelector("#contacts");
    xTag.style.fontSize = null;
    xTag.style.color = null;
});

console.log('----------------------3g-------------------------------');

const headerButtonGrazintiSpalva = document.querySelector("#h1-color-back");
headerButtonGrazintiSpalva.addEventListener("click", () => {
    const h1Green = document.querySelector("h1");
    h1Green.style.color = null;
});

const headerButtonGrazintiFontoDydi = document.querySelector("#h1-font-back");
headerButtonGrazintiFontoDydi.addEventListener("click", () => {
    const h1Font = document.querySelector("h1");
    h1Font.style.fontSize = null;
});

// Elementų grupių events
// Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
// Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130 % didesniu fonto dydžiu.“PATINKA” tas neturi galioti.
// Padaryti, kad paspaudus ant “PATINKA”, atitinkamai sekcijai būtų priskirta klasė like;
console.log('----------------------4a-------------------------------');

document.querySelectorAll("ul .new").forEach((element, i) => {
    element.addEventListener("dblclick", () => {
        document.querySelectorAll("ul .new")[i].style.color = "red";
    });
});

console.log('----------------------4b-------------------------------');
// fancy selectorius not included

document.querySelectorAll("li:not(.like-button)").forEach((element, i) => {
    element.addEventListener("click", () => {
        document.querySelectorAll("li:not(.like-button)")[i].style.fontSize = "130%";
    });
});

console.log('----------------------4c-------------------------------');

document.querySelectorAll(".like-button").forEach((element, i) => {
    element.addEventListener("click", () => {
        element.closest('ul').classList.add('like'); //kitas budas
        // element.parentElement.classList.add('like'); //kitas budas
        // document.querySelectorAll("ul")[i].classList.add("PATINKA");
    });
});



// Dinaminis elementų kūrimas
// Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;
// Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur” Padaryti, kad pridėtas 
// elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;
// Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like
// Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant analogišką html tagų struktūrą kaip ir HEADER 1 ir HEADER 2. Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”.Mygtukai turi daryti tai kas ant jų parašyta
console.log('----------------------5a-------------------------------');

const newPrice = document.createElement("h2");
const newSeniorPrice = document.createTextNode("Senjorai tik: 1.99 eur");
newPrice.appendChild(newSeniorPrice);
const pricesList = document.querySelector(".prices");
pricesList.appendChild(newPrice);

console.log('----------------------5b-------------------------------');

const newPriceSeniorUpTo10 = document.createElement("h2");
newPriceSeniorUpTo10.classList.add("new");

const seniorPriceUpTo10 = document.createTextNode("Senjorų grupė iki 10: tik 5.99 eur");
newPriceSeniorUpTo10.appendChild(seniorPriceUpTo10);

const pricesList2 = document.querySelector(".prices");
pricesList2.appendChild(newPriceSeniorUpTo10);

const seniorPriceGreen = document.querySelector("h2.new:not(.price-tag)");
seniorPriceGreen.addEventListener("click", e => {
    e.stopPropagation();
    document.querySelector("h2.new:not(.price-tag)").style.color = "green";
});


console.log('----------------------5c-------------------------------');

document.querySelectorAll("ul").forEach((ul) => {
    let newLi = document.createElement("li");
    let nepatinka = document.createTextNode("NEPATINKA");
    newLi.appendChild(nepatinka);
    ul.insertBefore(newLi, ul.querySelector(".like-button").nextSibling);
    newLi.addEventListener("click", () => {
        ul.classList.remove("like");
    });
});


console.log('----------------------5d-------------------------------');

const html = `
<legend> HEADER 3</legend>
<button id="h1-line">Pabraukti H1 tagą</button>
<button id="h1-line-off">Nepabraukti H1 tagą</button>
`;

const f = document.createElement("fieldset"); //f reikalingas kas su innerhtml odetumem mygtukus
const cont = document.querySelector("#contacts");
const body = document.querySelector("body");

body.insertBefore(f, cont);

f.innerHTML = html;

const header3button = document.querySelector("#h1-line");
header3button.addEventListener("click", () => {
    document.querySelector("h1").style.textDecoration = "underline";
});

const header3buttonLineOff = document.querySelector("#h1-line-off");
header3buttonLineOff.addEventListener("click", () => {
    document.querySelector("h1").style.textDecoration = null;
});