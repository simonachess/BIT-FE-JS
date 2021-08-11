
console.log('-------------------------function----------------------');
//funkcija uzdeklaruojame ir ja galima kviesti kiek norime kartu
function vardas() {
    console.log('ja ja');
};

vardas();
vardas();
vardas();


//i funkcijos vidu galima perduoti kintamuosius (argumentus);
// default argumentas bus perduodamas, jeigu funkcijos kvietimo metu neperduodamas argumentas
function vardasSuArgumentu(vardas = 'Default Argumentas') {
    console.log(`ja ja, ${vardas}`);
    return 'valio';
};
vardasSuArgumentu('Jonas');
vardasSuArgumentu('Janina');
vardasSuArgumentu('Brisius');

// console.log(vardas()); // <-- undifined, nes funkcija nieko negrazina (nera return);
// console.log(vardas) // <--be skliausteliu console atspausdins visa funkcija

const rez = vardasSuArgumentu(); //rez bus lygu funkcijos vardasSuArgumentu() rezultatui(return)
// rez yra tiesiog kintamojo priskyrimas funkcijai (funkcijos pervadinimas);

console.log(rez);

console.log('------------------funkcija funkcijoje-------------------');
function pirma() {
    function antra() {
        return [5, 9, 'labas'];
    }
    return antra;
};
console.log(pirma()()[2][2]);



console.log('---------------arrow funkcija funkcijoje----------------');
//ta pati galima uzrasyti su arrow funkcija, dvi rodykles reiskia funkcija funkcijoje
const fun = () => () => [5, 9, 'labas']; //populiarus uzrasymas React
console.log(fun()()[2][2]);

//paimti pirmoje funkcijoje esancios antros funkcijos masyvo trecio elemento(antro indekso) trecia raide (raides indeksas 2),
//su kliausteliais nurodome funkcija, su lauztiniais indeksus
//skliausteliai nurodo kokios funkcijos rezultata isvesti.

//kad nereiktu dvieju skliaustu, galima priskyrima padaryti funkcijai
console.log('------------funkcijos priskyrimas kintamajam----------------');
const antraFunkcija = pirma();
antraFunkcija();


console.log('---------------forEach yra arrow funkcija--------------');

const masyvas = ['vienas', 'zalias', 'ir', 'trys', 'raudoni'];

console.log('---------------------------------');

const ff = function (e) {
    console.log(e);
}
masyvas.forEach(ff);

console.log('---------------------------------');

masyvas.forEach(e => console.log(e));

console.log('---------------------------------');

masyvas.forEach(function (e) {
    console.log(e);
})

//forEach nieko negrazina

console.log('------------------map---------------');
//map yra tas pats kas forEach, tik skiriasi tuo kad forEach nieko negrazina, o map daro ta pati ka
//forEach tik graazina reiksme


console.log('--------------------1 uzd----------------');

function suma(a, b) {
    const blablabla = a + b;
    return blablabla;
}

console.log('suma:', suma(5, 7));

console.log('--------------------2 uzd----------------');

function skirtumas(a, b) {
    const blablabla = a - b;
    return blablabla;
}

console.log('skirtumas:', skirtumas(5, 7));

console.log('----------------------3 uzd--------------');

function skaiciuoti(veiksmas, a, b) {
    if (veiksmas === 'sudeti') {
        return suma(a, b);
    } else {
        return skirtumas(a, b);
    }
}

let rezultatas = skaiciuoti('atimti', 5, 7);
console.log(rezultatas);

console.log('----------------------4 uzd--------------');

function skaiciuoti2(veiksmas) {
    if (veiksmas === 'sudeti') {
        return function suma(a, b) {
            return a + b;
        }
    } else {
        return function skirtumas(a, b) {
            return a - b;
        }
    }
}

console.log(skaiciuoti2('atimti')(8, 3));
console.log(skaiciuoti2('sudeti')(8, 3));


console.log('----------------------5 uzd--------------');
//duotame masyve pakeisti Z raides, ir isvesti nauja masyva su pakeistom raidem

const m = ['V', 'U', 'A', 'A', 'R', 'A', 'B'];

function changeLetter(a) {
    const changedWord = [];

    a.forEach(e => {
        if (e === 'A') {
            changedWord.push('Z');
        } else {
            changedWord.push(e)
        }
    });
    return changedWord;
}

console.log(changeLetter(m));

//kitas budas
//map iskarto grazina masyvo kopija pakeista pagal nurodytas taisykles, nereikia kurtis naujo masyvo
const masyvoPerdirbejas = mas => mas.map(e => e == 'A' ? 'Z' : e);

console.log(masyvoPerdirbejas(m));