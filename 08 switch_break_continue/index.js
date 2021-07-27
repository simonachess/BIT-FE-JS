function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Kiek yra skaičių nuo 5 iki 100 kurie be liekanos dalijasi iš 3 ?
console.log('-----------1------------');

let kiekSkaiciu = 0;
let skaicius;

for (skaicius = 5; skaicius < 100; skaicius++) {
    if (skaicius % 3 == 0) {
        kiekSkaiciu = kiekSkaiciu + 1;
    }
}
console.log('kiek skaiciu: ', kiekSkaiciu);


// Kiek yra skaičių nuo 5 iki 100 kurie be liekanos dalijasi iš 3 arba iš 5 ?
console.log('-----------2------------');

let kiekSkaiciu2 = 0;
let skaicius2;

for (skaicius2 = 5; skaicius2 < 100; skaicius2++) {
    if (skaicius2 % 3 == 0 || skaicius2 % 5 == 0) {
        kiekSkaiciu2 = kiekSkaiciu2 + 1;
    }
}
console.log('kiek skaiciu2: ', kiekSkaiciu2);


// Kiek yra skaičių nuo 5 iki 100 kurie be liekanos dalijasi iš 3 ir iš 5 ?
console.log('-----------3------------');

let kiekSkaiciu3 = 0;
let skaicius3;


for (skaicius3 = 5; skaicius3 < 100; skaicius3++) {
    if (skaicius3 % 3 == 0 && skaicius3 % 5 == 0) {
        kiekSkaiciu3 = kiekSkaiciu3 + 1;
    }
}
console.log('kiek skaiciu3: ', kiekSkaiciu3);
