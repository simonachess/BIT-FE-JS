console.log('------------1--------------')
//1. Duotas masyvas, console.log atspausdinti masyvo ilgį
const mas1 = [12, 5, 9, 7, 5, 4];

console.log('masyvo ilgis: ', mas1.length)

console.log('------------2--------------')
//2. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę;
const mas2 = [13, '785', 92, 'labas', 522, 6984];

for(let i=0; i<mas2.length; i++){
    console.log(i, mas2[i])
}

console.log('------------3--------------')
//3. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę, jeigu ta reikšmė yra lyginė (porinė)
const mas3 = [889, 52, 698, 752, 9333, 7];
for (let i = 0; i < mas2.length; i++) {
    if (mas2[i]%2===0){
      console.log(i, mas2[i])  
    }
 
}

console.log('------------4--------------')
//4. Duotas masyvas, masyvą iteruoti ciklu forEach ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę, jeigu ta reikšmė prasideda raide A arba a
const mas4 = ['Agurkas', 'Bananas', 'arbūzas', 'Bebras', 'Voverė', 'Ąžuolas', 'Mažas triušis'];
mas4.forEach((element, i )=> {
    if (element[0] === 'A' || element[0] === 'a'){
        console.log(element, i)
    }
});


console.log('------------5--------------')
//5. Duotas stringas, suskaičiuoti kiek stringe yra raidžių z
const str1 = 'Storas zebras, bėga nuo zuulu genties medžiotojų.';

function kiekARaidziu(str1) {

    let raidziuZ = 0;
    for (let j = 0; j < str1.length; j++) {
        if (str1[j] === `z`) {
            raidziuZ++;
        }
    }
    return raidziuZ
   
}
console.log('z raidziu:', kiekARaidziu(str1))


console.log('------------6--------------')

//6. Duotas Setas, į kurį reikia pridėti reikšmes (stringus) 'Labas' ir 'Ate' ir console.log
// atspausdinti Seto ilgį
//prideti i seta skirtingas reiksmes
const set1 = new Set(['Labas', 'Vakaras', 'Rytas', 'Valio']);

set1.add('Labas')
set1.add('Ate')
console.log(set1, set1.size)

console.log('------------7--------------')
//7. Suprototaipinti standartinį String tipo objektą, pridedant metodą lastCharIs(), 
// kuris grąžintų paskutinį stringo simbolį. Pademonstruoti veikimą su stringu 'Ku Ku';
const str2 = 'Ku ku';
// console.log(str2.lastCharIs()) po prototaipinimo eilutė turi veikti
//atspausdina sakinio paskutine raide
String.prototype.lastCharIs = function(){
    return this.valueOf()[this.valueOf().length-1];
}

console.log(str2.lastCharIs())

console.log('------------8--------------')
//8. Duotas objektas, kurį reikia iteruoti, kiekvienoje iteracijoje išvedant savybę
// ir jos reikšmę
const obj1 = { labas: 'vakaras', laba: 'diena', labs: 'ryts' };

for (const i in obj1) {
    console.log(i, obj1[i])
}

console.log('------------9--------------')
//9. Sukurti klasę Grybas. Klasėje sukurti savybė tipas. Iš klasės sukurti
// 3 Grybo objektus, savybei tipas priskiriant "Baravykas", "Ūmedė" ir "Lepšis"

class Grybas{
    tipas;
    constructor(tipas) {
        this.tipas = tipas;
    }
}

const grybas1 = new Grybas('Baravykas');
const grybas2 = new Grybas('Ūmedė');
const grybas3 = new Grybas('Lepšis');

console.log(grybas1, grybas2, grybas3)



console.log('------------///--------------')

const map = new Map([
    ['a', 'labas'],
    ['b', 'ate'],
    ['x', 'xxx']
]);
for(const s of map){
    console.log(s)
}