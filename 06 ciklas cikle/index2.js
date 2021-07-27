function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('------');

/*
DIDELIS START
B
B
B
DIDELIS MID
C
C
C
DIDELIS END
DIDELIS START
B
B
B
DIDELIS MID
C
C
C
DIDELIS END
DIDELIS START
B
B
B
DIDELIS MID
C
C
C
DIDELIS END
DIDELIS START
B
B
B
DIDELIS MID
C
C
C
DIDELIS END
*/


let i = 0;
let j = 0;
let k = 0;

for (i = 0; i < 4; i++) {
    console.log('Didelis Startas');

    for (j = 0; j < 3; j++) {
        console.log('B', j);
    }
    console.log('Didelis Midas');
    for (k = 0; k < 3; k++) {
        console.log('C', k);
    }
    console.log('Didelis Endas');
    
}