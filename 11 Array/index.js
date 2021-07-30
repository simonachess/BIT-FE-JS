let a1 = [`atsuktuvas`, `pjuklas`, `plaktukas`, `reples`];

console.log(a1[1]);


a1[2] = `kirvis`; //i plaktuko vieta irasome(idedame) kirvi

//jei desime i dideni indeksa nei yra daiktu masyve, tai js ir ides i ta vieta, o tarpines vietos bus tuscios 

console.log(a1);


a1.push(`kaltas`); //idedame i sekanti indeksa masyve, i pabaoga masyvo
console.log(`-----------------push---------------`)
console.log(a1);
a1.push(`mazesnis atsuktuvas`, `didesnis atsuktuvas`);
console.log(a1);

console.log(`-----------------unshift---------------`)
a1.unshift(`graztas`); //prideda elementa i masyvo pradzia
console.log(a1);

console.log(`-----------------shift---------------`)
a1.shift(); //isima pirma elementa is masyvo, skliaustuose nieko rasyt nereikia
console.log(a1);

console.log(`-----------------pop---------------`)
a1.pop(); //isima paskutini elementa is masyvo, skliaustuose rasyti nieko nereikia
console.log(a1);

console.log(`-----------------1uzd-----------------------`)
for (i = 0; i < a1.length; i++) {
    console.log(a1[i]);
}

console.log(`-----------------2uzd-----------------------`)
//Sukurti masyvą, kurio ilgis 22 ir kurio reikšmės atsitiktiniai skaičiai nuo 5 iki 15
let a2 = [];

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 22; i++) {
    let skaicius = rand(5, 15);
    a2.push(skaicius);
}

console.log(a2);

console.log(`-----------------3uzd-----------------------`)

let a3 = [];

for (let i = 0; i < 22; i++) {
    let skaicius = rand(5, 14);
    if (skaicius % 2 !== 0) {
        a3.push(skaicius);
    } else {
        a3.push(++skaicius);
    }
}

console.log(a3);
console.log(`-----------------3uzd kitas budas-----------------------`)
let a4 = [];
while (a4.length < 22) {
    let skaicius = rand(5, 15);
    if (skaicius % 2 !== 0) {
        a4.push(skaicius);
    }
}
console.log(a4);

console.log(`---------------------priskyrimas pagal nuoroda-------------------`)
//priskyrimas pagal reiksme
let d1 = 5;
let d2 = d1;

d1 = 7; //d1=7, d2=5
console.log(d1, d2);


//priskyrimas pagal nuoroda

let m1 = [77, 99];
let m2 = m1;
let m3 = m2.slice();// kai pridedame slice() padarome masyvo kopija t.y. m3 yra m2 kopija
console.log('pries pushinima: ', m1, m2);
m1.push(11);
m2.push(55);
m3.push('kate');
console.log('m1: ', m1, 'm2: ', m2); //kintamasis yra vienas, tik jis turi du vardus
console.log('m1: ', m1, 'm2: ', m2, 'm3: ', m3);

m2 = 5; //sugriauna nuoroda ir priskiria reiksme
console.log('m1: ', m1, 'm2: ', m2, 'm3: ', m3);

console.log(`----------------------------------------`)

let string4 = new String('A string object');
console.log(string4);

