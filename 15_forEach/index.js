const array1 = ['a', 'b', 'c'];

array1.forEach(element => {
    console.log(element);
});

console.log('----------------------forEach-----------------------');

let suma = 0;
let suma2 = 0;
let iteracijos = 0;
const array2 = [3, 6, 10];
//element yra pirma karta 3, antra karta 6, trecia karta 10 ir t.t.
array2.forEach((element, i) => {
    suma = suma + element;
    iteracijos++;
    suma2 = suma2 + (element * i);
});

console.log('suma:', suma);
console.log('iteracijos:', iteracijos);
//suma2 = skaiciu dauginam is jo indekso ir sudedame rezultatus
console.log('suma2:', suma2);


console.log('--------------------forEach indekso pasiemimas-------------------------');

const array3 = [3, 6, 10];
//element, i nurodo indeksa
array3.forEach((element, i) => {
    console.log('skaicius:', element, 'jo indekas:', i);
});

console.log('--------------------forEach trys parametrai-------------------------');

let suma55 = 0;
//trecias parametras isveda visa pati masyvas 
// 0
// 3 + 6 = 9 + 0 = 9
// 6 + 10 = 16 + 9 = 25
// 10 + <+ ignore ats=> 25
[3, 6, 10].forEach((element, i, trecias) => {
    if (i < trecias.length - 1) {
        suma55 = suma55 + element + trecias[i + 1];
    }
    console.log(element, i, trecias);
});

// [3, 6, 10].forEach((element, i, trecias) => suma55 += trecias[i+1] ? element + trecias[i+1] : 0);

console.log(suma55);