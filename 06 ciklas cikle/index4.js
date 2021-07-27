function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('------');

//AAAA
//AAAA
//AAAA
//AAAA

let A = 'A';

for (let i = 0; i < 5; i++) {
    let eilute = '';
    for (let j = 0; j < 5; j++) {
        eilute = eilute + A;
    }
    console.log(i + 1, 'eilute: ', eilute)
}

console.log('------');

// A
// AA
// AAA
// AAAA
// AAAAA
let A2 = 'A';

for (let i = 0; i < 1; i++) {
    let eilute = '';
    for (let j = 0; j < 5; j++) {
        eilute = eilute + A2;
        console.log(i + 1, 'eilute: ', eilute)
    }

}


console.log('------');

/*
A AA AAA AAAA AAAAA
*/

let B = 'A';
let C = 1;
let eiluteB = '';
let D = 1;
let j;

for (let i = 0; i <= 9; i++) {

    for (j = 0; j < C; j++) {
        eiluteB = eiluteB + B;
        
    }
    eiluteB = eiluteB + ' ';
    if (i==5){
        D*= -1;
        j*= -1;
    }
}

console.log('eilute: ', eiluteB);


/*
A AA AAA AAAA AAAAA AAAA AAA AA A
*/