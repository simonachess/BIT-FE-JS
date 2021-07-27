function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('----kauliukai--');
let isridenta;
let mazasisCiklas = 0;
let didelisCiklas = 0;
do {
    isridenta = rand(1, 6);

    didelisCiklas++;
    for (let i = 0; i < isridenta; i++) {
        mazasisCiklas++;
    }

}
while (isridenta != 5);

console.log('Didelis ciklas: ', didelisCiklas);
console.log('Mazas ciklas: ', mazasisCiklas);