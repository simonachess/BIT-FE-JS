function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




// let darzove = 'kopustas';
let darzove = 'bulve';
// let darzove = 'pomidoras';

console.log('---------------if else-------------------');
if (darzove == 'kopustas') {
    console.log('verdam kopustiene');
} else if (darzove == 'bulve') {
    console.log('kepam bulvinius blynus');
} else if (darzove == 'pomidoras') {
    console.log('darom kecupa');
}

console.log('---------------switch-------------------');
switch (darzove) {
    case 'kopustas':
        console.log('verdam kopustiene');
    case 'bulve':
        console.log('kepam bulvinius blynus');
    case 'pomidoras':
        console.log('darom kecupa');
    default:
        console.log('Nieko nedarom');
}

console.log('---------------kur panaudoti SWITCH-------------------');

// pastomate turim siunas s, m, l, xl dydziu

let siuntinioDydis = 'm';

switch (siuntinioDydis) {
    case 's':
        console.log('Ar yra laisvu s dezuciu');
        if (rand(0, 3)) {
            console.log('nera vietu');
        } else {
            break;
        }
    case 'm':
        console.log('Ar yra laisvu m dezuciu');
        if (rand(0, 3)) {
            console.log('nera vietu');
        } else {
            break;
        }
    case 'l':
        console.log('Ar yra laisvu l dezuciu');
        if (rand(0, 3)) {
            console.log('nera vietu');
        } else {
            break;
        }
    default:
        console.log('Ar yra laisvu xl dezuciu');
        if (rand(0, 3)) {
            console.log('visai visai nera vietu');
        }
}


console.log('---------------BREAK-------------------');

for (let i = 77; i < 777; i++) {
    if (i % 23 === 0) {
        console.log('ieskomas skaicius: ', i);
        break;
    }
}

console.log('---------------BREAK ciklas cikle-------------------');


bigCycle: for (let i = 77; i < 777; i++) {

    for (let i = 77; i < 777; i++) {

        console.log('mazas');

        if (i % 23 === 0) {
            console.log('ieskomas skaicius: ', i);
            break bigCycle;
        }
    }
}

//nelabai geras pvz., bet labai aiskus
console.log('---------------BREAK ciklas cikle-------------------');

for (let i = 77; i < 777; i++) {

    console.log('mazas');

    if (i % 23 === 0) {
        console.log('ieskomas skaicius: ', i);
        break;
    }
}

//nelabai geras pvz.
console.log('---------------BREAK-------------------');
let counter = 0;
while (true) {
    console.log(counter);
    counter++;
    if (counter >= 10) {
        break;
    }
}



//Dauguma break galima pakeisti i while
let skaicius = 77;
do {

} while (++skaicius % 23 !== 0);

console.log('while ', skaicius);


console.log('---------------Uzdavinys-------------------');
// Rasti trečią skaičių pradedant 5 iki 100 kuris be liekanos dalijasi iš 3 ?


let kiekSkaiciuUzd = 0;
let skaiciusUzd;

for (skaiciusUzd = 5; skaiciusUzd < 100; skaiciusUzd++) {

    if (skaiciusUzd % 3 == 0) {
        console.log(skaiciusUzd);
        kiekSkaiciuUzd++;
        if (kiekSkaiciuUzd == 3) {
            break;
        }
    }
}
console.log('treacias skaicius: ', skaiciusUzd);


console.log('---------------Uzdavinys tas pats su while-------------------');
// Rasti trečią skaičių pradedant 5 iki 100 kuris be liekanos dalijasi iš 3 ? parasyti su while
let skaiciusA = 5;
let treciasSkaicius = 0;

while (treciasSkaicius < 3) {
    skaiciusA++;
    if (skaiciusA % 3 == 0) {
        treciasSkaicius++;
    };
};

console.log('skaicius: ', skaiciusA);

console.log('---------------Uzdavinys tas pats su while destytojo-------------------');

let sk = 4;
let c = 3; //rasome toki skaiciu, kelinta skaiciu reikia surasti, kadangi ieskome trecio kuris dalinasi is 12

do { } while (++sk % 3 || --c); //liekana nenulis, todel jisai yra true. tai ++c neprideda. Uzsibaige ties 12 nes tada gavosi false ir false salygoje, reikia davesti c iki 0

console.log(sk);