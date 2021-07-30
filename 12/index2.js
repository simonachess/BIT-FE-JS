function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('startas');
function randomSkirtumas(betkas) { //bet kas yra funkcijos paramentras
    console.log('random skirtumas', betkas);

    let r = rand(100, 200);
    console.log(r - betkas);
}

randomSkirtumas();

let skaicius1 = 55; //bus funkcijos argumentas
let skaicius2 = 88;
console.log('endas');

randomSkirtumas(skaicius1);
randomSkirtumas(skaicius2);
randomSkirtumas(254);

//argumento vardas, gali nesutapti su funkcijos parametru. jie perduodami pagal vieta tarp skliaustu.

console.log('-------------------------------------');

function suma(a, b) {
    let suma = a + b;
    return suma;
}

console.log('suma: ', suma(5, 7));


let str = 'Zvirblis';

console.log('be funkcijos 5 raide: ',str[4])

function paimtiRaide(raide){
    let raidePaimta = str[raide];
    return raidePaimta;
}

console.log('raide su funkcija: ',paimtiRaide(4));


function raideZmogiskai(zodis, raide) {
    let norimaRaide = zodis[raide - 1];  
    return norimaRaide;
}

// let zmogiskai = raideZmogiskai(str, 5);

console.log('raide su funkcija zmogiskai: ', raideZmogiskai(str, 5));