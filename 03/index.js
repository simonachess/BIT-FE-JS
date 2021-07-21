function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('------');

let a = rand(2, 10);
let b = rand(2, 10);
let c = rand(2, 10);
console.log(a);
console.log(b);
console.log(c);

// Surasti ir i console.log išvesti dviejų mažesnių kintamųjų sumą
//find and print sum of two smallest values

// let total = 0;

// if (a >= b && a >= c) {
//     total = b + c;
// } else if (b >= c) {
//     total = a + c;
// } else {
//     total = a + b;
// }

// console.log('suma: ' + total);

if (a >= b) {
    if (a >= c) {
        console.log('b + c', b + c);
    }
}

if (b > a) {
    if (b >= c) {
        console.log('a + c', a + c);
    }
}

if (c > a) {
    if (c > b) {
        console.log('a + b', a + b);
    }
}

console.log('------pirmas----------------');

let = egzaminoRezultatas = rand(1, 10);

if (egzaminoRezultatas >= 4) {
    console.log('Islaikytas: ', egzaminoRezultatas)
} else {
    console.log('Neislaikytas:', egzaminoRezultatas)
}

console.log('------antras----------------');
//2.

let eksperimentoRezultatas = rand(1, 4);

// I6vesti eksperimento rezultatą ir sprendimą ar pavyko. Pavykęs eksperimentas tas, kurio rezultatas 1 arba 4

if (eksperimentoRezultatas == 4 || eksperimentoRezultatas == 1) {
    console.log('Pavyko. Rezultatas: ', eksperimentoRezultatas)
} else {
    console.log('Nepavyko. Rezultatas: ', eksperimentoRezultatas)
}

console.log('------trecias----------------');
//3.

let automobilioGreitis = rand(40, 125);
let bauda = 0;

// Išvesti automobilio greitį ir baudos dydį, jeigu greiti didesnis nei 60. Bauda yra viršytas greitis X 5
console.log('Greitis: ', automobilioGreitis);
if (automobilioGreitis > 60) {
    bauda = (automobilioGreitis - 60) * 5;
    console.log('Virsytas greitis km/h: ', (automobilioGreitis - 60));
    console.log('Bauda: ', bauda);
} else {
    console.log('Greitis nevirsytas', automobilioGreitis);
}

console.log('------ketvirtas----------------');
//4.

let eilesNumeris = rand(1, 30);

//Išvesti eilės numerį ir sprendimą ar tai porinė eilė ar neporinė

if (eilesNumeris % 2 == 0) {
    console.log('porinis, ', eilesNumeris);
} else {
    console.log('neporinis, ', eilesNumeris);
}

console.log('------penktas----------------');
//5.

//Pasinaudojus funkcija rand() sugeneruoti atsitiktinę raidę A, B ar C 
// ir priskirti ją kintamajam raideABC. Kintamąjį išvesti į konsolę

let raideABC = rand(1, 3);

if (raideABC == 1) {
    console.log('raide: ', 'A');
} else if (raideABC == 2) {
    console.log('raide: ', 'B');
}
else {
    console.log('raide: ', 'C');

}

console.log('------sestas----------------');
//6.

let pirmas = rand(0, 2);
let antras = rand(0, 2);

// Išvesti abu skaičius ir sprendimą ar yra didesnė tų skaičių sandauga ar suma 

console.log('pirmas: ', pirmas);
console.log('antras: ', antras);

let suma = pirmas + antras;
let sandauga = pirmas * antras;


if (suma > sandauga) {
    console.log('didesne suma');

} else if (suma < sandauga) {
    console.log('didesne sandauga');
} else {
    console.log('suma ir sandauga lygios');
}

console.log('------septintas----------------');
//7.

let asilai = rand(0, 2);
let karves = rand(0, 2);

// Išvesti asilų ir karvių skaičių ir išvesti rezultatą "gyvulių yra" 
// kai yra nors viena karvė ar asilas arba "gyvulių nėra" jeigu nėra 
// nei karvių nei asilų

console.log('asilu: ', asilai);
console.log('karviu: ', karves);

if (asilai > 0 || karves > 0) {
    console.log('gyvuliu yra');

} else {
    console.log('gyvuliu nera');
}

console.log('------astuntas----------------');
//8.

let dalyvis1 = rand(1, 4);
let dalyvis2 = rand(1, 4);

// Išvesti dalyvių pasirinktus skaičius ir pranešimą "Laimėjo", 
// jeigu dalyvių skaičių suma didesnė nei 6 arba tie skaičiai yra vienodi. 
// Pranešimą "Pralaimėjo" - priešingu atveju
console.log('dalyvis1: ', dalyvis1);
console.log('dalyvis2: ', dalyvis2);

let sumaDalyviu = dalyvis1 + dalyvis2;

if (sumaDalyviu > 6 || dalyvis1 == dalyvis2) {
    console.log('Laimejo');
} else {
    console.log('Pralaimejo');
}


console.log('------devintas----------------');
//9.
// Išvesti skaičių daug ir suskaičiuoti iš kelių duotų skaičių: 5, 10, 33 
// jis dalijasi be liekanos. Rezultatą išvesti.

let daug = rand(1000000, 9999999);

let dalijasiIs = 0;

console.log('skaicius daug: ', daug);

if (daug % 5 == 0) {
    dalijasiIs++;
} 
if (daug % 10== 0) {
    dalijasiIs++;
}
if (daug % 33 == 0) {
    dalijasiIs++;
}

console.log('dalijasi is: ', dalijasiIs)


console.log('------desimtas----------------');
//10.

let asAs = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';
let tuTu = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';

// console.log('asAs: ', asAs);
// console.log('tuTu: ', tuTu);

// Išvesti as ir tu kintamuosius ir kas laimėjo as ar tu
// if(){

// }


console.log('------desimtas--------desimtas--------');

let s;

s = rand(1, 3);

if (s == 1) {
    as = 'akmuo';
} else if (s == 2) {
    as = 'zirkles';
} else {
    as = 'popierius';
}

let s2;

s2 = rand(1, 3);

if (s2 == 1) {
    tu = 'akmuo';
} else if (s2 == 2) {
    tu = 'zirkles';
} else {
    tu = 'popierius';
}

console.log('I: ', as);
console.log('You: ', tu);

if ((s == 1 && s2 == 2) || (s == 3 && s2 == 1) || (s == 2 && s2 == 3)){
console.log('I win');
} else if (s == s2){
    console.log('Draw');
}
else{
    console.log('You win');
}