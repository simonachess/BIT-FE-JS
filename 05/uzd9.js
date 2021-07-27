function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// A. Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, koks skaičius buvo sugeneruotas.
// Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų padarė vidinis ciklas.
// Rezultatus atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
//make 2 loops. one loop outside, the other inside. use rand(5,10) to generate number. make the inside loop to work the number rand(5,10) generated. 
// 1. make inside loop working till was generated number 5. count number of both loops. 
// 2. make the outside loop working till random generated number 5 three times.
// 3. make the outside loop working till random generated number 5 three times queuing.
//
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

console.log('--------9C---------------');
let randomas;
let j = 0;
let i = 0;
let vidinisCiklasSuma = 0;
let isorinisCiklasSuma = 0;
let vienodiPenketai = 0;


while (vienodiPenketai < 3) {

    do {
        randomas = rand(5, 10);
        console.log('randomas: ', randomas);

        isorinisCiklasSuma = isorinisCiklasSuma + 1;

        if (randomas ==5) {
            vienodiPenketai = vienodiPenketai + 1;
        } else {
            vienodiPenketai = 0;
        }

        for (j = 0; j < randomas; j++) {
            vidinisCiklasSuma = vidinisCiklasSuma + 1;
        }

    } while (randomas != 5);

}
console.log('isorinis ciklas Suma: ', isorinisCiklasSuma);