function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('---------------------')
let sumaTaskuKazio = 0;
let sumaTaskuPetro = 0;


do {
    let taskaiKazio = rand(10, 20);
    let taskaiPetro = rand(5, 25);
    console.log('randomas Kazio: ', taskaiKazio);
    console.log('randomas Petro: ', taskaiPetro);

    sumaTaskuKazio = sumaTaskuKazio + taskaiKazio;
    sumaTaskuPetro = sumaTaskuPetro + taskaiPetro;

    console.log('Suma Kazio:', sumaTaskuKazio);
    console.log('Suma Petro: ', sumaTaskuPetro);

} while (sumaTaskuKazio <= 222 && sumaTaskuPetro <= 222);


if (sumaTaskuKazio >= 222) {
    console.log('laimejo Kazys: ', sumaTaskuKazio);
} else {
    console.log('laimejo Petras: ', sumaTaskuPetro);
}

