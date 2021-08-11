function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log('------------1--------------');
// console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;
for (let i = 0; i < 5; i++) {
    console.log('labas');
}


console.log('-------------2-------------');
// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4(vienas skaičius vienoje eilutėje);
for (let i = 0; i < 5; i++) {
    console.log('skaicius:', i);
}

console.log('-------------3-------------');
// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40(vienas skaičius vienoje eilutėje);
for (let i = 0; i < 5; i++) {
    console.log('skaicius:', i * 10);

}

console.log('-------------4-------------');
// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53(vienas skaičius vienoje eilutėje);
let skaiciusSpausdinti4 = 48;
for (let i = 0; i < 5; i++) {
    skaiciusSpausdinti4 = skaiciusSpausdinti4 + 1;
    console.log('skaicius:', skaiciusSpausdinti4);
}

console.log('-------------5-------------');
// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0(vienas skaičius vienoje eilutėje);
for (let i = 4; i >= 0; i--) {
    console.log('skaicius:', i);
}

console.log('-------------6-------------');
// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8(vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);

for (let i = 0; i < 10; i = i + 2) {
    console.log('skaicius:', i);
}

console.log('-------------7-------------');
// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti atsitiktinius skaičius nuo 0 iki 10(vienas skaičius vienoje eilutėje);
for (let i = 0; i < 5; i++) {
    let skaicius = rand(0, 10);
    console.log('skaicius:', skaicius);
}

console.log('-------------8-------------');
// console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10(vienas skaičius vienoje eilutėje).Paskutinis atspausdintas skaičius turi būti 5;
let skaicius;
do {
    skaicius = rand(0, 10);
    console.log('skaicius:', skaicius);

} while (skaicius !== 5)

console.log('-------------9-------------');
// console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10(vienas skaičius vienoje eilutėje).Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;

let skaiciuSuma = 0;
do {
    let skaicius = rand(0, 10);
    console.log('skaicius:', skaicius);
    skaiciuSuma = skaiciuSuma + skaicius;

} while (skaiciuSuma < 100);
console.log("skaiciu suma: ", skaiciuSuma);


console.log('-------------10-------------');
// console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10(vienas skaičius vienoje eilutėje).Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;
let skaicius10;
let cikluSuma = 0;
do {

    skaicius10 = rand(0, 10);
    console.log('skaicius:', skaicius10);
    cikluSuma++;
} while ((skaicius10 !== 5) && (skaicius10 !== 7)); //kai naudojam while jei salyga 'or' tai revertiname i &&
console.log('kiek ciklu: ', cikluSuma);

console.log('-------------11-------------');
// console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10(vienas skaičius vienoje eilutėje).Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;
let skaiciuSuma11 = 0;
for (i = 0; i <= 11; i++) {
    do {
        skaicius = rand(0, 10);
        console.log('skaicius:', skaicius);
        skaiciuSuma11 = skaiciuSuma11 + skaicius;
    } while (skaiciuSuma11 < 20);
    console.log('ciklai: ', i)
}
console.log('skaiciu Suma: ', skaiciuSuma11);

console.log('-------------12-------------');
// console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10(vienas skaičius vienoje eilutėje).Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;
let lyginis = 0;
let nelyginis = 0;
do {
    skaicius = rand(0, 10);
    console.log('skaicius:', skaicius);
    if (skaicius % 2 === 0) {
        lyginis++;
    } else {
        nelyginis++;
    }
} while (nelyginis !== 3);

console.log('-------------13-------------');
// console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10(abu skaičiai vienoje eilutėje).Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;
let randomas131=0;
let randomas132=0;
do {
    randomas131 = rand(0, 10);
    randomas132 = rand(0, 10);
    console.log('skaiciai:', randomas131, randomas132);
} while (randomas131 != randomas132);


console.log('-------------14-------------');
// console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10(abu skaičiai vienoje eilutėje).Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose.Ciklą kartoti tol, kol akiekviena iš sumų bus daugiau nei 100
let randSkaicius1;
let randSkaicius2;
let skaiciuSuma1 = 0;
let skaiciuSuma2 = 0;
do {
    randSkaicius1 = rand(0, 10);
    randSkaicius2 = rand(0, 10);
    console.log('skaiciai:', randSkaicius1, randSkaicius2);
    skaiciuSuma1 = skaiciuSuma1 + randSkaicius1;
    skaiciuSuma2 = skaiciuSuma2 + randSkaicius2;
} while (skaiciuSuma1 < 100 || skaiciuSuma2 < 100);
console.log('Skaiciu suma 1: ', skaiciuSuma1, 'Skaiciu suma 2: ', skaiciuSuma2);

console.log('-------------15-------------');
// console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10(abu skaičiai vienoje eilutėje).Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių
let randomasSkaicius1;
let randomasSkaicius2;
let nelyginiai15rand1 = 0;
let nelyginiai15rand2 = 0;
do {
    randomasSkaicius1 = rand(0, 10);
    randomasSkaicius2 = rand(0, 10);
    console.log('skaiciai:', randomasSkaicius1, randomasSkaicius2);
    if (randomasSkaicius1 % 2 === 1) {
        nelyginiai15rand1++;
    }
    if (randomasSkaicius2 % 2 === 1) {
        nelyginiai15rand2++;
    }

} while (nelyginiai15rand1 < 3 || nelyginiai15rand2 < 3);
console.log('nelyginiai rand1:', nelyginiai15rand1, 'nelyginiai rand2:', nelyginiai15rand2);