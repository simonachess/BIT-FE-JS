function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('------');

// AAA
// B
// B
// B
// AAA
// B
// B
// B
// AAA
// B
// B
// B
// AAA
// B
// B
// B

/*
DIDELIS START
B
B
B
DIDELIS END
DIDELIS START
B
B
B
DIDELIS END
DIDELIS START
B
B
B
DIDELIS END
DIDELIS START
B
B
B
DIDELIS END
*/

let i = 0;
let j = 0;
let k = 3;

for (i = 0; i < 4; i++) {
    console.log('Didelis Startas');

    for (j = 0; j < k; j++) {
        console.log('B', j);
    }
    console.log('Didelis endas');
    k++;
}

/*
DIDELIS START
B
B
B
DIDELIS END
DIDELIS START
B
B
B
B
DIDELIS END
DIDELIS START
B
B
B
B
B
DIDELIS END
DIDELIS START
B
B
B
B
B
B
DIDELIS END
*/
