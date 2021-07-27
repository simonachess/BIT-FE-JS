function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Sukurkite tris kintamuosius ir priskirkite jiems skirtingus sveikus skaičius iš intervalo 5…25;
// A. Paskaičiuokite jų sumą ir priskirkite ją kintamajam.Pasinaudokite console.log atspauzdinkite sumos kintamąjį;
// B. Sudėkite skaičius į stringo tipo kintamąjį ir jį atspauszdinkite pasinaudodami console.log;
// C. Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir jį atspauszdinkite pasinaudodami console.log;
// D. Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir gale pridedėkite trijų skaičių sumą, paskaičiuotą A dalyje.Atspausdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log;

console.log('--------1A---------------');

let a = rand(5, 25);
let b = rand(5, 25);
let c = rand(5, 25);

let suma = a + b + c;
console.log('a: ', a);
console.log('b: ', b);
console.log('c: ', c);
console.log('suma: ', suma);

console.log('--------1b---------------');

let sumaStringas = String(a) + String(b) + String(c);

console.log('suma stringas: ', sumaStringas);

//jeigu js pamato stringa pirmiau, tai sekancius elementus konvertuoja automatiskai
let sumaStringasTrumpasisBudas = ' ' + a + b + c;

console.log('suma stringas trumpasis budas: ', sumaStringasTrumpasisBudas);

console.log('--------1c---------------');

let sumaStringas2 = String(a) + ' ' + String(b) + ' ' + String(c);


console.log('suma stringas: ', sumaStringas2);

console.log('--------1d---------------');

console.log('suma stringas plius skaiciu suma: ', sumaStringas2 + ' ' + suma);

console.log('suma stringas plius skaiciu suma 2 budas: ', + a + ' ' + b + ' ' + c + ' ' + (a + b + c));
//pirmiau skaiciuoja kas skliausteliuose, todel nepavercia suma (a+b+c) i stringa, pavercia tik po to kai pamato stringa




// Sukurkite vieną kintamąjį, jam priskirkite skaičių(iš intervalo 5…10), 
// kurį sugeneruoja funkcija rand(5, 10) ir jį atspauszdinkite pasinaudojus console.log;

console.log('--------2---------------');

let a2 = rand(5, 10);

console.log(a2);


// Sukurkite kintamąjį ir jam priskirkite stringą “Labas”.Pasinaudodami ciklu ir console.log atspauzdinkite kintamąjį 5 kartus;
console.log('--------3---------------');

let var1 = 'Labas';

for (let i = 0; i < 5; i++) {
    console.log(var1);
}


// Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 7 kartus;

console.log('--------4---------------');

for (let i = 0; i < 7; i++) {
    console.log(a2);
}

// Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas;
console.log('--------5---------------');

for (let i = 0; i < a2; i++) {
    console.log(a2);
}

// Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas, bet tik tada jeigu jis didesnis už 7;

console.log('--------6---------------');

if (a2 > 7) {
    for (i = 0; i < a2; i++) {
        console.log(a2);
    }
} else {
    console.log('mazesnis uz 7');
}

// Deklaruokite kintamąjį už ciklo ribų.Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), 
// kurie yra iš intervalo 10…20. Ciklą kartokite 5 kartus;
// A. Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;
console.log('--------7---------------');

let a7;

for (i = 0; i < 5; i++) {

    console.log(a7 = rand(10, 20));
}


// B. Skaičiuokite ciklo viduje generuojamų reikšmių sumą, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų.
// Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;

console.log('--------7B---------------');

let suma7A = 0;

for (i = 0; i < 5; i++) {

    let a7A = rand(10, 20);
    suma7A = suma7A + a7A;
    console.log(a7A);
    console.log('suma ciklo viduje: ', suma7A);
}
console.log('suma: ', suma7A);


// C. Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą.
// Stringo tipo kintamąjį atspazdinkite už ciklo ribų jam pasibaigus;

console.log('--------7C---------------');


let a7C = '';  //vercia i stringa
for (let i = 0; i < 5; i++) {
    a7C = a7C + rand(10, 20) + ' ';
}

console.log(a7C);


// D. Skaičius, generuojamus ciklo viduje dėkite ji į stringo tipo kintamąjį tarp skaičių darydami tarpą.
// Ciklui pasibaigus prie stringo tipo kintamojo pridėkite ciklo viduje generuotų skaičių sumą, 
// paskaičiuotą kaip B dalyje.Stringo tipo kintamąjį atspausdinkite pasinaudodami console.log;

console.log('--------7D---------------');

let a7d = '';
let suma7d = 0;
for (let i = 0; i < 5; i++) {
    let randomas7d = rand(10, 20);
    a7d = a7d + randomas7d + ' ';
    suma7d = suma7d + randomas7d;
}
a7d += suma7d;
console.log(a7d);

// Deklaruokite kintamąjį(jeigu reikia kelis kintamuosius) už ciklo ribų.
// Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…25. 
// Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;
// A. Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;
console.log('--------8---------------');

let a8;
do {
    a8 = rand(10, 25);
    console.log(a8);
} while (a8 >= 12);

console.log('--------8A---------------');

// let a8;
// do {
//     a8 = rand(10, 25);
//     console.log(a8);
// } while (a8 < 12);

// B. Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;

console.log('--------8B---------------');
let a8b;
let iteracijos = 0;
do {
    a8b = rand(10, 25);
    console.log(a8b);
    iteracijos = iteracijos + 1;
} while (a8b >= 12);

console.log('iteracijos: ', iteracijos);

// C. Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami(neskaičiuodami) skaičius, 
// kurie yra didesni nei 18, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų.
// Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
console.log('--------8C---------------');

let a8c;
let suma8c = 0;
let suma8cAtmestu = 0;
do {
    a8c = rand(10, 25);

    if (a8c < 18) {
        suma8c = suma8c + a8c;
    } else {
        suma8cAtmestu += a8c;
    }
    console.log(a8c);

} while (a8c >= 12);

console.log('suma ', suma8c);

// D. Sumą skaičiuokite kaip C dalyje, bet papildomai susikurkite kintamąjį, 
// kuriame suskaičiuokite kiek reikšmių atmetėte(nesumavote).
// Rezultatą su suma ir atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų;
console.log('--------8D---------------');

console.log('Atmesti ', suma8cAtmestu);

// E. Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek nelyginių skaičių.
// Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus.
console.log('--------8E---------------');

let a8e;
let lyginiu = 0;
let nelyginiu = 0;

do {
    a8e = rand(10, 25);

    if (a8e % 2 == 0) {
        lyginiu++;
    } else {
        nelyginiu++;
    }
    console.log(a8e);

} while (a8e >= 12);

console.log('lyginiu ', lyginiu);
console.log('nelyginiu ', nelyginiu);

// F. Ciklą iš dalies B kartokite tol, kol to ciklo iteracijų kiekis bus didesnis nei 20(vieno ciklo).
// Paskaičiuokite kiek pakartojimų buvo atlikta ir rezultatą atspauzdinkite pabaigoje.
console.log('--------8F---------------');
let a8F;
let iteracijosF = 0;
let ciklas = 0;

while (iteracijosF <= 20) {
    ciklas++;
    console.log('ciklas ', ciklas);
    do {
        a8F = rand(10, 25);
        console.log(a8F);
        iteracijosF = iteracijosF + 1;
    } while (a8F >= 12);
}
console.log('iteracijosF: ', iteracijosF);
console.log('ciklu kiekis: ', ciklas);


console.log('--------8FFFFFFFFFFFFFFFF-------Destytojo--------');
let random8b;
let mazasCiklas = 0;
let didelisCiklas = 0;
do {
    didelisCiklas++;

    do {
        random8b = rand(10, 25);
        console.log(random8b);
        mazasCiklas = mazasCiklas + 1;
    } while (random8b >= 12);
} while (mazasCiklas <= 20);

console.log('mazasCiklas: ', mazasCiklas);
console.log('didelisCiklas: ', didelisCiklas);


// 9. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 5 - 10. 
// Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius 5;
console.log('--------9---------------');
let a9;
do {
    a9 = rand(5, 10);
    console.log('randomas: ', a9);
} while (a9 != 5);


// A. Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, koks skaičius buvo sugeneruotas.
// Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų padarė vidinis ciklas.
// Rezultatus atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
console.log('--------9A---------------');

let a9A;
let a9Ai = 0;
let vidinisCiklas = 0;
let isorinisCiklas = 0;
do {
    a9A = rand(5, 10);
    console.log('randomas: ', a9A);
    isorinisCiklas = isorinisCiklas + 1;
    console.log('isorinis ciklas', isorinisCiklas);
    for (a9Ai = 0; a9Ai < a9A; a9Ai++) {
        vidinisCiklas = vidinisCiklas + 1;
        console.log('vidinis ciklas', vidinisCiklas);
    }
} while (a9A != 5);


// B. Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą, 
// bet trečią kartą ir paskaičiuokite iteracijas analogiškai kaip A dalyje;

console.log('--------9B---------------');
let a9B;
let a9Bi = 0;
let trysPenketai = 0;
let vidinisCiklasB = 0;
let isorinisCiklasB = 0;

for (trysPenketai = 0; trysPenketai < 3; trysPenketai++) {
    do {
        a9B = rand(5, 10);
        console.log('randomas: ', a9B);

        isorinisCiklasB = isorinisCiklasB + 1;
        // console.log('isorinis ciklas B', isorinisCiklasB);
        for (a9Bi = 0; a9Bi < a9B; a9Bi++) {
            vidinisCiklasB = vidinisCiklasB + 1;
            // console.log('vidinis ciklas B', vidinisCiklasB);
        }
    } while (a9B != 5);
}
console.log('isorinis ciklas B', isorinisCiklasB);

// C. Padarykite analogiškai kaip B dalyje, bet tik kai 5 yra sugeneruojami 3 kartus iš eilės;

// 10. Kazys ir Petras žaidžiai bingo.Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20, 
// Kazys - surenka taškų kiekį nuo 5 iki 25. Console.log išvesti žaidėjų vardus su taškų kiekiu ir 
// “Partiją laimėjo: laimėtojo vardas​”.Taškų kiekį generuokite funkcija ​rand().Žaidimą laimi tas, 
// kas greičiau surenka 222 taškus.Partijas kartokite tol, kol kažkuris žaidėjas pirmas surenks 222 arba daugiau taškų.


