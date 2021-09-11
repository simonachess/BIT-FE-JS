// 1. Sukurti masyvą iš 11 elementų, kurie yra atsitiktiniai skaičiai nuo 3 iki 7
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('=================1===================')
const masyvas = [];

for (let i = 0; i < 11; i++) {
    let skaicius = rand(3, 7);
    masyvas.push(skaicius);
}

console.log(masyvas.slice());

// 2. išrūšiuoti nuo didžiausio iki mažiausio
console.log('=================2===================')
function lygintuvas(a, b) {
    return b - a;
}
console.log(masyvas.sort(lygintuvas));


// 3. Sukurti Set'ą iš 11 elementų, kurie yra atsitiktiniai skaičiai nuo 3 iki 17
console.log('=================3===================')

const set1 = new Set();
let counter = 0;
while (set1.size < 11) {
    counter++;
    set1.add(rand(3, 17));
}
console.log(set1);
console.log('kiek kartu prasisuko, kol uzpilde seta is 11:', counter)

// 4. padidinti Set'ą iki 15 elementų (tie patys atsitiktiniai skaičiai nuo 3 iki 17)
console.log('=================4===================')
while (set1.size < 15) {
    counter++;
    set1.add(rand(3, 17));
}

console.log(set1);
console.log('kiek kartu prasisuko, kol uzpilde seta is 11:', counter)


// 5. iš seto išmesti visas reikšmes, kurios dalinasi iš 3
console.log('=================5===================')

// for (let i = 3; i < 17; i+=3) {
//     set1.delete(i);
// }
// console.log(set1)

set1.forEach(i => {
    i % 3 ? '' : set1.delete(i); //triname nurodydame ne indeksa o reiksme
})
console.log(set1)


//6. išrūšiuoti gautą Set'ą didėjimo tvarka (tą patį Setą, o ne sukurtą naują).
console.log('=================6===================')
const mas6 = [...set1].sort((a, b) => a - b); //is seto padarome masyva ir rusiuojame. return nereikia, nes arrow funkcija yra viena eilute
set1.clear();
mas6.forEach(e => set1.add(e));
console.log(set1)
// 7. išrūšiuoti 1 uždavinio masyvą taip, kad pirma eitų lyginiai skaičiai, o toliau nelyginiai
console.log('=================7===================')
masyvas.sort((a, b) => a % 2 - b % 2)
console.log(masyvas.slice());

masyvas.sort((a, b) => {
    if (a % 2 === 0) {
        return -1;
    }
    return 1;
})
console.log(masyvas.slice());


// 8 sukurkite Map tipo objektą, kuriame būtų įrašyti keturi skirtingi gyvuliai, kurių pavadinimai eitų kaip indeksai, o reikšmės būtų uodegų ilgiai cm.
console.log('=================8===================')
map1 = new Map();
['Zuikis', 'Kiskis', 'Triusis', 'Rabitas'].forEach(z => map1.set(z, rand(5, 25)))
console.log(map1)

// 9 Išrūšiuokite Mapą pagal uodegų ilgius didėjančia tvarka
console.log('=================9===================')

const mas9 = [...map1].sort((a, b) => {
    if (a[0] < b[0]) { //ieskome pagal varda
        return -1;
    }
    if (a[0] > b[0]) {
        return 1;
    }
    return 0
});

console.log(mas9.slice());
console.log(new Map(mas9))

map1.clear(); //isvalome masyva ir sukrausime per nauja
mas9.forEach(v => map1.set(v[0], v[1]));


// 10 išrūšiuokite mapą pagal gyvulių pavadinimus abėcėlės tvarka
console.log('=================10===================')

const mas10 = [...map1].sort((a, b) => a[1] - b[1]);
console.log(mas10.slice())



