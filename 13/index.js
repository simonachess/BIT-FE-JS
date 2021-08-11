console.log('--------------------skaiciu lyginimo, rusiavimo funkcija--------------------')

let masyvas = [3, 2, 5, 1, 4];
console.log(masyvas.slice());

function lygintuvas(a, b) {

    console.log('a:', a, 'b:', b);
    return a - b; //reikia grazinti minusini skaiciu, tam kad skaicius sukeistu vietomis
}

masyvas.sort(lygintuvas);
console.log(masyvas);

console.log('--------------------raidziu lyginimo funkcija--------------------')
let raidziuMasyvas = ['f', 'l', 'c', 'v', 'r', 'b', 'w'];
function raidziuLygintuvas(a, b) {

    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1
    } else {
        return 0;
    }

}
raidziuMasyvas.sort(raidziuLygintuvas)
console.log(raidziuMasyvas);

console.log('--------------------lyginimo rusiavimo uzdavinys--------------------');

let ezerai = [
    [2, 'Didelis'],
    [44, 'Ilgas'],
    [11, 'Trumpas'],
    [9, 'Apvalus'],
    [7, 'Gilus']
];

function ezeruLygintuvas(a, b) {
    if (a[1] > b[1]) { //kadangi pavadinimai sedi pirmam indekse, del to kreipiames su 1
        return 1;
    } else if (a[1] < b[1]) {
        return -1
    } else {
        return 0;
    }
}

raidziuMasyvas.sort(ezeruLygintuvas)
console.log('pagal raides: ', ezerai.sort(ezeruLygintuvas).slice());


function ezeruLygintuvasPagalSkaicius(a, b) {
    return a[0] - b[0]; //kadangi skaiciai sedi pirmam indekse, del to kreipiames su 1
}
console.log('pagal skaicius: ', ezerai.sort(ezeruLygintuvasPagalSkaicius).slice());


function ezeruLygintuvasPagalIlgi(a, b) {
    if (a[1].length > b[1].length) { //kadangi pavadinimai sedi pirmam indekse, del to kreipiames su 1
        return 1;
    } else if (a[1].length < b[1].length) {
        return -1
    } else if (a[1].length === b[1].length) {
        if (a[1] < b[1]) {
            return -1
        } else {
            return 0;
        }
    }
}

console.log('pagal pavadinimo ilgi: ', ezerai.sort(ezeruLygintuvasPagalIlgi).slice());