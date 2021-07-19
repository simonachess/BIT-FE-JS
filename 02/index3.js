console.log('3 > 5', 3 > 5);
console.log('3 < 5', 3 < 5);
console.log('3 != 5', 3 != 5);
console.log('-----')
console.log("'Z' > 'A'", 'Z' > 'A');
console.log("'z' > 'Z'", 'z' > 'Z');
console.log("'z' < '5'", 'z' < '5'); //pagal ASCII lentele


function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}
// console.log(rand(1, 10));
console.log('-----');
let check = rand(1, 10);

if (check < 5) {
    console.log(check);
    console.log('check < 5', 'TAIP!');
}

else if (check == 5) {
    console.log(check);
    console.log('check < 5', 'Lygu!');
}


else {
    console.log(check);
    console.log('check < 5', 'NE!');
}
