//isvesti sarasa visa, pradedant pvz nuo 3: 3,4,5,0,1
let a = [10, 20, 30, 40, 50];

for (let i = 0; i < a.length; i++) {
    k = (i + 2) % a.length;
    console.log('a: ', a[k], k);
}


//zaidimas zirkles, popierius, akmuo
//I win:

// s == s2
// s == (s2 - 1 + 3) % 3
// s == (s2 - 1 + 3) % 3
// s == (s2 - 1 + 3) % 3
//0-popierius
//1-zirkles
//2-akmuo

// 2 == 2 % 3 //nes liekana 2

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let s = rand(0, 2);
let s2 = rand(0, 2);
console.log('I: ', s);
console.log('You: ', s2);

if (s == (s2 - 1 + 3) % 3) {

    console.log('You');
} else if (s == s2) {
    console.log('Draw');
}
else {
    console.log('I win');
}

