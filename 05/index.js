function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log('--------WHILE---------------');

let i = 1;
if (i < 5) {
    console.log('IF');
}


// while (i < 5) {
//     console.log('WHILE');
// }
//ciklas begalinis

while (i < 5) {
    console.log('WHILE I', i);
    i++;
}

console.log('-----------------------');

let j = 1;
while (j < 5) {
    console.log('WHILE J', ++j);
}

console.log('-----------------------');

let k = rand(0, 100);
//nuo 0 iki daug
while (k != 55) {
    k = rand(0, 100);
    console.log('while', k);
}

console.log('-----------------------');
//nuo 1 iki daug
do{
    l=rand(0,100);
    console.log('do while', l);
}while (l !=55);


console.log('-----------------------');

let m = 0;

while (m < 5) {
   
    console.log('while m', m);
    m++;
}

console.log('--------- FOR --------------');

for (let t = 0; t < 5; t++){
    console.log('for t', t);
}
