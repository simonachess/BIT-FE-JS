//Padrykite funkciją labas kur console.logintų pasisveikinimą ir tą funkciją iškvieskite 20 kartų panaudoję ciklą.

function labas() {
    console.log(`labas vakaras!`)
}

for (i = 0; i < 20; i++) {
    labas();
}

//Padarykite funkcija skaicius kuri console.logintų skaičių perduodamą į tą funkciją kaip argumentas. 
//Paleiskite ciklą 20 kartų ir tegul funkcija skaičius atspausdina ciklo numerį

function skaicius(skaic) {
    console.log(`ciklo numeris ${skaic}`)
}

for (i = 0; i < 20; i++) {
    skaicius(i);
}


//Parašyti funkciją, kuri nuspręstų ar skaičius yra porinis. Pasinaudokite šia funkcija ir iš ciklo 
//sukamo 20 kartų atspausdinkite neporinius (nelyginius) ciklo numerius

function arLyginis(tikrinamasSkaicius) {
    if (tikrinamasSkaicius % 2 === 0) {
        return true;
    }
}

for (j = 0; j < 20; j++) {
    if (arLyginis(j) !== true) {
        console.log(`nelyginis ${j}`);
    }
}


console.log(`-------------------------1--------------------------------`)
// 1.
//suskaiciuoti kiek a raidziu yra duotame stringe
function kiekARaidziu(string) {

    let raidziuA = 0;
    for (let j = 0; j < string.length; j++) {
        if (string[j] === `a`) {
            raidziuA++;
        }
    }
    return raidziuA;
}

console.log('Yra a raidžių:', kiekARaidziu('Papūga'));
console.log('Yra a raidžių:', kiekARaidziu('Vilkas'));
console.log('Yra a raidžių:', kiekARaidziu('Zuikisaaaaa'));

console.log(`-------------------------2--------------------------------`)
// 2.
// suskaiciuoti kiek konkreciu raidziu yra zodyje
function kiekRaidziu(string, raide) {
    let raidziu = 0;
    for (let j = 0; j < string.length; j++) {
        if (string[j].toLowerCase() === raide) {
            raidziu++;
        }
    }
    return raidziu;
}

console.log('Yra p raidžių:', kiekRaidziu('Ppppapūga', 'p'));
console.log('Yra k raidžių:', kiekRaidziu('VilkKKas', 'k'));
console.log('Yra u raidžių:', kiekRaidziu('Zuikis', 'u'));


console.log(`-------------------------3--------------------------------`)
//3.
//parasyti zodi is antro galo
function reverseWord(word) {
    let newWord = ``;
    for (i = 0; i < word.length; i++) {
        newWord =  word[i] + newWord;
    }
    return newWord;
}

console.log(reverseWord('sula')); // alus
console.log(reverseWord('Simona')); // anomiS

console.log(`-------------------------4--------------------------------`)
// //4.
// // pakeisti balses i zvaogzdutes Papūga ====> P * p * g *

function changeLetter(word){
    let changedWord=``;
for(i=0; i<word.length; i++){
    if (word[i] === `a` || word[i] === `e` || word[i] === `i` || word[i] === `o` || word[i] === `u`){
        changedWord = changedWord + `*`;
    }else{
        changedWord = changedWord + word[i];
    }
}
return changedWord;
}

console.log(changeLetter(`papuga`));
console.log(changeLetter(`pomidoras`));
console.log(changeLetter(`automobilis`));