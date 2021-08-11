//Kintamuju deklaravimas
//1. let galima deklaruoti ir nieko nepriskirti(gali buti tuscia deklaracija), 
//const reikia is karto deklaruoti. 
//2. let galima uzrasyti reiksme ant virsaus (priskirti kita reiksme)
//const reiksmes negalima uzrasyti ant virsaus. Jeigu const yra masyvas, tai masyvo reiksmes galima
// prideti ir atimti i masyva
//3. kada ka naudoti? Jeigu nereikia priskyrimo tai naudoti const, jeigu reikia daug priskyrimu
//naudoti let. 

let vienas = 'namuose';

const du = 'gaideliai';

//4. ir let ir const yra blokinio matomumo kinamieji

if (true) {
    let keturi = 4;
}
// console.log(keturi); // <-- keturi is not defined, net jis veikia tik tarp riestiniu skliaustu

let a1 = 5;
let a2 = [5];

console.log(a2.slice());

let b1 = a1;
let b2 = a2;

a1++;
a2.push(6);

console.log(a2);

console.log(a1, a2); //priskyrem 6
console.log(b1, b2); // b = a


console.log('-----------------------------------');

console.log(a2);
// const [c, d] = a2; //sitoks uzrasymas populiarus React
// virsutine eilute tas pats kas zemiau esancios dvi eilutes:
const c = a2[0];
const d = a2[1];

console.log(c, d); // <-- galime is masyvo i atskirus kintamuosius susiskirstyti reiksmes


console.log('-------------1 uzd ----------------------');

const masyvas = ['vienas', 'zalias', 'ir', 'trys', 'raudoni'];
//for
//while
//forEach
//for in
console.log('-------------1 uzd---------for----------------------');

for (let i = 0; i < masyvas.length; i++) {
    console.log(masyvas[i]);
};

console.log('-------------1 uzd--------while----------------------');

let j = 0;
while (j < masyvas.length) {
    console.log(masyvas[j]);
    j++;
};

console.log('-------------1 uzd--------forEach----------------------');

masyvas.forEach(element => {
    console.log(element);
});

console.log('-------------1 uzd-------for in----------------------');
// naudojamas pereiti per objekta
// prop yra propercio(kintamojo) pavadinimas sugalvotas savo
// isvedant i console nurodome objekta ir lauztiniuose skliaustuose properti(kintamaji)
for (const prop in masyvas) {
    // console.log(`${prop}: ${masyvas[prop]}`);
    console.log(masyvas[prop]);
};

console.log('--------------------------for of-------');
// nuo for in skiriasi kad 'for in' duoda indeksus, o 'for of' duoda reiksmes
for(const prop of masyvas){
    console.log(prop);
};



