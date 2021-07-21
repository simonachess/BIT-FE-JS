function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let salyga = rand(1, 2);
let k = 'krokodilas';
let z = 'zebras';

console.log(salyga);

let kazkasPriskirta = salyga == 1 ? k : z;

// if(salyga == 1){
//     kazkasPriskirta = k;
// } else{
//     kazkasPriskirta = z;
// }

console.log(kazkasPriskirta);

let salygaNr2 = rand(1, 3);
let kNr2 = 'krokodilas';
let zNr2 = 'zebras';
let dNr2 = 'dramblys';

console.log(salygaNr2);

let kazkasPriskirtaNr2 = salygaNr2 == 1 ? kNr2 : ((salygaNr2 == 2) ? zNr2 : dNr2);

// if(salygaNr2 == 1){
//     kazkasPriskirtaNr2 = k;
// } else if(salygaNr2 == 2){
//     kazkasPriskirtaNr2 = z;
// }else{
// kazkasPriskirtaNr2 = d;
// }

console.log(kazkasPriskirtaNr2);

let salygaNr3 = rand(1, 4);
let kNr3 = 'krokodilas';
let zNr3 = 'zebras';
let dNr3 = 'dramblys';
let rNr3 = 'raganosis';

console.log(salygaNr3);

let kazkasPriskirtaNr3 = (salygaNr3 == 1 || salygaNr3 == 4) ? ((salygaNr3 == 1) ? kNr3 : rNr3) : ((salygaNr3 == 2) ? zNr3 : dNr3);

// if(salygaNr3 == 1){
//     kazkasPriskirtaNr3 = k;
// } else if(salygaNr3 == 2){
//     kazkasPriskirtaNr3 = z;
// }else if(salygaNr3 == 4){
// kazkasPriskirtaNr3 = r;
// } else{
// kazkasPriskirtaNr3 = d;
// }

console.log(kazkasPriskirtaNr3);

console.log('-------------------------------')
let a1 = rand(0, 2);
let a2 = rand(0, 2);
let a3 = rand(0, 2);
let a4 = rand(0, 2);

let _0 = 0;
let _1 = 0;
let _2 = 0;

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);

(a1 == 2) ? _2++ : ((a1 == 1) ? _1++ : _0++);
(a2 == 2) ? _2++ : ((a2 == 1) ? _1++ : _0++);
(a3 == 2) ? _2++ : ((a3 == 1) ? _1++ : _0++);
(a4 == 2) ? _2++ : ((a4 == 1) ? _1++ : _0++);

console.log('nuliu = ' + _0);
console.log('vienetu = ' + _1);
console.log('dvejetu = ' + _2);


console.log('-----------pirmas su ternary--------------------')

// Išvesti rezultatą ir sprendimą ar egzaminas išlaikytas. Mažiausias išlaikymo balas yra 4

let egzaminoRezultatas = rand(1, 10);

console.log((egzaminoRezultatas >= 4) ? 'islaikytas: ' + egzaminoRezultatas : 'neislaikytas: ' + egzaminoRezultatas);

console.log('-----------antras su ternary--------------------')

// Išvesti eksperimento rezultatą ir sprendimą ar pavyko. Pavykęs eksperimentas tas, kurio rezultatas 1 arba 4
let eksperimentoRezultatas = rand(1, 4);

console.log(eksperimentoRezultatas == 1 || eksperimentoRezultatas == 4 ? 'pavyko: ' + eksperimentoRezultatas : 'nepavyko: ' + eksperimentoRezultatas);


console.log('-----------astuntas su ternary--------------------')

// Išvesti dalyvių pasirinktus skaičius ir pranešimą "Laimėjo", jeigu dalyvių skaičių suma didesnė nei 6 arba tie skaičiai yra vienodi. Pranešimą "Pralaimėjo" - priešingu atveju

let dalyvis1 = rand(1, 4);
let dalyvis2 = rand(1, 4);
console.log(dalyvis1);
console.log(dalyvis2);
console.log((dalyvis1 + dalyvis2) > 6 || dalyvis1 == dalyvis2 ? 'laimejo ' : 'nelaimejo ');

console.log('')
console.log('-----------GRIEZTA LYGYBE--------------------')

console.log(1 == 1);

console.log(2 == true);

console.log(1 == '1'); //negriezta lygybe


console.log(1 === '1'); //griezta lygybe, identiska. Pirma lygini tipus, jei tipai nesutampa - nebelygina

console.log(1 === true);