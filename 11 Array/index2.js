function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



console.log('-------------------------1--------------------------');

let masyvas = [];
let i = 0;
let masyvoIlgis = rand(10, 30);

while (masyvas.length < masyvoIlgis) {
    let masyvoSkaicius = rand(0, 10);
    masyvas.push(masyvoSkaicius);
}
console.log(masyvas.slice());


console.log('-------------------------2--------------------------');

let suma = 0;
for (let i = 0; i < masyvoIlgis; i++) {
    suma = suma + masyvas[i];
}

console.log('suma: ', suma);

console.log('-------------------------3--------------------------');


let sumaPopieriniu = 0;
for (let i = 0; i < masyvoIlgis; i++) {
    if (masyvas[i] > 2) {
        sumaPopieriniu = sumaPopieriniu + masyvas[i];
        console.log('pinigai didesni uz 2: ', masyvas[i]);
    }
}

console.log('suma: ', sumaPopieriniu);

console.log('-------------------------4--------------------------');

let isleistiMetaliniai = 0;
for (let i = 0; i < masyvoIlgis; i++) {

    if (masyvas[i] <= 2) {
        masyvas[i] = 0;

    }
}
console.log('pinigai mazesni arba lygus uz 2: ', masyvas.slice());

console.log('-------------------------5--------------------------');



let didziausiuReiksmiuSuma = 0;
let didziausiaReiksme = Math.max(...masyvas);
for (let i = 0; i < masyvoIlgis; i++) {

    if (didziausiaReiksme === masyvas[i]) {
        didziausiuReiksmiuSuma++;
    }
}
console.log(`didziausia reiksme: ${didziausiaReiksme}, didziausiu reiksmiu is viso: ${didziausiuReiksmiuSuma}`);


console.log('-------------------------6--------------------------');

for (let i = 0; i < masyvoIlgis; i++) {

    if (masyvas[i] === 0) {
        masyvas[i] = i;
    }
}

console.log(masyvas.slice());

console.log('-------------------------7--------------------------');

while (masyvas.length < 30) {
    let skaicius = rand(0, 10);

    masyvas.push(skaicius);

}
console.log(masyvas.slice());


console.log('-------------------------8--------------------------');

let naujasMasyvas1 = [];
let naujasMasyvas2 = [];

for (let i = 0; i < masyvoIlgis; i++) {
    if (masyvas[i] > 2) {
        naujasMasyvas1.push(masyvas[i]);

    } else {
        naujasMasyvas2.push(masyvas[i]);
    }
}

console.log(naujasMasyvas1, naujasMasyvas2);
console.log('masyvo ilgis: ', masyvoIlgis);


console.log('-------------------------9--------------------------');

let pinigine = [];
pinigine.push(naujasMasyvas1, naujasMasyvas2);
console.log(pinigine.slice());


console.log('-------------------------10--------------------------');

let masyvasKorteliu = ['KIKA', 'Euro Vaistine', 'Drogas', 'Aciu', 'Lietuvos Gelezinkeliai', 'Mano Rimi'];

pinigine.push(masyvasKorteliu);
console.log(pinigine.slice());


console.log('-------------------------11--------------------------');

console.log(masyvasKorteliu.sort());
console.log('pinigines masyvas: ', pinigine.slice());

console.log('-------------------------12--------------------------');

let korteliuMaster = 0;
let korteliuVisa = 0;

while (masyvasKorteliu.length < 20) {
    let kortele = rand(0, 1);
    if (kortele === 1) {
        masyvasKorteliu.push('MasterCard');
        korteliuMaster++; //13uzd
    }
    else {
        masyvasKorteliu.push('VISA');
        korteliuVisa++;  //13uzd
    }
}
console.log(masyvasKorteliu.slice());
console.log('pinigines masyvas: ', pinigine.slice());

console.log('-------------------------13--------------------------');

console.log(`korteliu Master: ${korteliuMaster}, korteliu VISA: ${korteliuVisa}`);

console.log('-------------------------14--------------------------');

let loterijosBilietai = [];
let laimingiBilietai = 0;
pinigine.push(loterijosBilietai);
for (let i = 0; i < 10; i++) {
    let bilietoNr = rand(1000000000, 9999999999);
    loterijosBilietai.push(bilietoNr);
    if (bilietoNr%2===0){
        console.log('laimingo bilieto nr: ',bilietoNr);
        laimingiBilietai++; //17uzd
    }
}

console.log(loterijosBilietai.slice());
console.log('pinigines masyvas: ', pinigine.slice());

console.log('-------------------------15--------------------------');
console.log(loterijosBilietai.sort());


console.log('-------------------------16--------------------------');
// Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom 
// kupiūrom(generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus 
// elementus, kol įdėta suma bus lygi 500);
let idetaSuma = 0;
while (idetaSuma <= 500) {
    let dedamasPinigas = rand(3, 10);
    idetaSuma = idetaSuma + dedamasPinigas;
    naujasMasyvas1.push(dedamasPinigas);

}
console.log('ideta suma: ', idetaSuma);
console.log('popieriniu pinigu skyrelio reiksmes: ', naujasMasyvas1);



console.log('-------------------------17--------------------------');
// Patikrinti ar ką nors laimėjote.Bilieto numerius dalinkite iš 777 ir jeigu numeris 
// išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.
// let laimingiBilietai = 0;

console.log('laimingi bilietai: ', laimingiBilietai);


console.log('-------------------------18--------------------------');
// Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis',
//  'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų 
// trumpiausi žodžiai;

let nuotraukuSkyrius=[];
nuotraukuSkyrius.push('suo', 'kate', 'automobilis', 'namas', 'kiemas');

nuotraukuSkyrius.sort(function (a, b) {
    return a.length - b.length; //b.length - a.length butu mazejancia tvarka
});

console.log('isrikiuotas nuotrauku skyrius pagal ilgi: ', nuotraukuSkyrius);
