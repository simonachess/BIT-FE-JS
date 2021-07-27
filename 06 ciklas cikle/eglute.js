function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('------');


/*
A AA AAA AAAA AAAAA
*/

/*
A AA AAA AAAA AAAAA AAAA AAA AA A
*/
let A = 'A';
let eilute = '';
let kiekis = 1;

let pirmyn = true;

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < kiekis; j++) {
        eilute += A
    }
    eilute += ' ';
    if (i == 4) {
        pirmyn = !pirmyn; //pirmyn gaunasi folsas
    }
    pirmyn ? kiekis++ : kiekis--;
}

console.log(eilute);
