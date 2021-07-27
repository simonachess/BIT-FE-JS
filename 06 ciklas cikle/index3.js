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


for (i = 1; i < 4; i++) {
    console.log('Didelis Startas');

    for (j = 1; j <= 7; j++) {
        if (j <= 3) {
            console.log('B', j);
        }
        else if (j == 4) {
            console.log('Didelis Mid');
        } else {
            console.log('C', j);
        }
    }
    console.log('Didelis Endas');

}