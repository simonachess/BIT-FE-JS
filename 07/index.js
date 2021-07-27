function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('---------DARZOVES--------------');

let paspaustoMygtukoNumeris = rand(1, 3);

console.log(paspaustoMygtukoNumeris);

if (paspaustoMygtukoNumeris == 1) {
    console.log('Dedam pomidora');
}
if (paspaustoMygtukoNumeris == 3) {
    console.log('Dedam kriause');
}
if (paspaustoMygtukoNumeris == 2) {
    console.log('Dedam agrastus');
}

console.log('---------SRIUBA--------------');

let kiekIpiltaSriubos = rand(280, 300);
let saukstuSkaitiklis = 0;

do {

    let vienuSaukstuPasemtaMl = rand(15, 19); //kiek ml
    if (vienuSaukstuPasemtaMl > kiekIpiltaSriubos) { //neleidziame pasemti daugiau nei yra like
        vienuSaukstuPasemtaMl = kiekIpiltaSriubos;
    }
    kiekIpiltaSriubos = kiekIpiltaSriubos - vienuSaukstuPasemtaMl;
    saukstuSkaitiklis++;

} while (kiekIpiltaSriubos > 0);

console.log('Viso sausktu buvo pasemta: ', saukstuSkaitiklis);
console.log('Liko sriubos: ', kiekIpiltaSriubos);


console.log('---------STEIKAS--------------');

let steikas = rand(350, 450); // kiek gramais
let sakuciuSkaitiklis = 0;
let kramtymuSkaitiklis = 0;



do {

    let atpjautaSteiko = rand(10, 30); //kiekis gramais

    // neatpjauname daugiau nei yra
    if (atpjautaSteiko > steikas) {
        atpjautaSteiko = steikas;

    }

    steikas = steikas - atpjautaSteiko;
    sakuciuSkaitiklis++;


    do {
        let kiekVienuKrimstelejimuSuvalgomAtpjautoSteiko = rand(1, 7);

        //nekrimstelim daugiau nei yra
        if (kiekVienuKrimstelejimuSuvalgomAtpjautoSteiko > atpjautaSteiko) {
            kiekVienuKrimstelejimuSuvalgomAtpjautoSteiko = atpjautaSteiko;
        }
        atpjautaSteiko = atpjautaSteiko - kiekVienuKrimstelejimuSuvalgomAtpjautoSteiko;
        kramtymuSkaitiklis++;

        console.log('liko atpjauto steiko: ', atpjautaSteiko);



    } while (atpjautaSteiko > 0);


} while (steikas > 0);


console.log('viso tiek kartu dirbta su sakute: ', sakuciuSkaitiklis);
console.log('viso tiek kramtyta: ', kramtymuSkaitiklis);
console.log('liko steiko: ', steikas);