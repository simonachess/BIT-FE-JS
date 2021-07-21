function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//pirmas

// Naudokite funkcija rand().Sukurkite du kintamuosius ir naudodamiesi 
// funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. 
// Didesnę reikšmę padalinkite iš mažesnės.Atspausdinkite rezultatą naudodami console.log()

console.log('--------------------------------------pirmas uzd--------------------------------------------')
let pirmas = rand(0, 4);
let antras = rand(0, 4);
console.log(pirmas);
console.log(antras);

if (pirmas > antras && antras != 0) {
    console.log(pirmas / antras);
}
else if (antras > pirmas && pirmas != 0) {

    console.log(antras / pirmas);
}
else if (antras = pirmas) {
    console.log(antras / pirmas);
}
else {
    console.log('negalima');
}

// if(pirmas*antras==0){
//     console.log('dalyba is nulio');
// }else if(pirmas<antras){
//     console.log(antras/pirmas);
// }else{
//     console.log(pirmas/antras);
// }


//antras
// Naudokite funkcija rand().Sukurkite tris kintamuosius ir 
// naudodamiesi funkcija rand() jiems priskirkite atsitiktines 
// reikšmes nuo 0 iki 25. Raskite ir su console.log() atspausdinkite 
// kintąmąjį turintį vidurinę reikšmę.


console.log('----antras uzd-----')
let trecias = rand(0, 25);
let ketvirtas = rand(0, 25);
let penktas = rand(0, 25);
console.log(trecias);
console.log(ketvirtas);
console.log(penktas);
console.log('----------------------------------------rezultatas antras uzd------------------------------------')

// if (trecias != ketvirtas && ketvirtas != penktas && trecias != penktas) {
//     if (trecias < ketvirtas && trecias < penktas) {
//         if (ketvirtas < penktas) {
//             console.log(ketvirtas);
//         }
//         else {
//             console.log(penktas);
//         }
//     }
//     else if (ketvirtas < trecias && ketvirtas < penktas) {
//         if (trecias < penktas) {
//             console.log(trecias);
//         }
//         else {
//             console.log(penktas);
//         }
//     }
//     else if (penktas < ketvirtas && penktas < trecias) {
//         if (trecias < ketvirtas) {
//             console.log(trecias);
//         }
//         else {
//             console.log(ketvirtas);
//         }
//     }
// } else {
//     console.log('nera vidurinio');
// }

if (trecias != ketvirtas && ketvirtas != penktas && trecias != penktas) {
    if (trecias < ketvirtas && ketvirtas < penktas ||
        penktas < ketvirtas && ketvirtas < trecias) {
        console.log(ketvirtas);
    }
    else if (ketvirtas < trecias && trecias < penktas ||
        penktas < trecias && trecias < ketvirtas) {
        console.log(trecias);
    }
    else {
        console.log(penktas);
    }

} else {
    console.log('nera vidurinio');
}

//trecias
// Įvedami skaičiai - a, b, c –kraštinių ilgiai, trys 
// kintamieji(naudokite ​rand()​ funkcija nuo 1 iki 10).
// Parašykite skriptą, kuris nustatytų, ar galima sudaryti 
// trikampį ir atsakymą atspausdintų naudojant console.log().

console.log('----trecias uzd-----')
let a = rand(1, 10);
let b = rand(1, 10);
let c = rand(1, 10);
console.log('a: ' + a);
console.log('b: ' + b);
console.log('c: ' + c);

console.log('-------------------------------------------rezultatas trecias uzd------------------------------')

// surasti ilgiausia krastine
//patikrinti ar jinai trumpesne uz kitu dvieju krastiniu suma

if ((a > b) && (a > c) && ((b + c) > a)) {
    console.log('galima, ilgiausia a');
    console.log('suma kitu dvieju: ' + (b + c));
}
else if ((b > a) && (b > c) && ((a + c) > b)) {
    console.log('galima, ilgiausia b');
    console.log('suma kitu dvieju: ' + (a + c));
}
else if ((c > a) && (c > b) && ((a + b) > c)) {
    console.log('galima, ilgiausia c');
    console.log('suma kitu dvieju: ' + (a + b));
}
else {
    console.log('negalima');
}

//ketvirtas
// Sukurkite keturis kintamuosius ir ​rand()​ funkcija 
// sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite 
// kiek yra nulių, vienetų ir dvejetų.Rezultatus atspauzdinkite 
// su console.log()


console.log('------------------------------ketvirtas uzd -------------------------')
let firstVar = rand(0, 2);
let secondVar = rand(0, 2);
let thirdVar = rand(0, 2);
let fourthVar = rand(0, 2);

let zero = 0;
let one = 0;
let two = 0;

console.log(firstVar);
console.log(secondVar);
console.log(thirdVar);
console.log(fourthVar);

if (firstVar == 0) { zero++; }
else if (firstVar == 1) { one++; }
else { two++; }

if (secondVar == 0) { zero++; }
else if (secondVar == 1) { one++; }
else { two++; }

if (thirdVar == 0) { zero++; }
else if (thirdVar == 1) { one++; }
else { two++; }

if (fourthVar == 0) { zero++; }
else if (fourthVar == 1) { one++; }
else { two++; }

console.log('nuliu = ' + zero);
console.log('vienetu = ' + one);
console.log('dvejetu = ' + two);

//kitas budas
// let __2 = 0;
// //suzinome kiek yra dvejetu
// if (a1 == 2) __2++;
// if (a2 == 2) __2++;
// if (a3 == 2) __2++;
// if (a4 == 2) __2++;


// let __1 = a1 + a2 + a3 + a4 - (2 * __2);
// let __0 = 4 - __1 - __2;
// console.log(__0, __1, __2);



//penktas
// Naudokite funkcija rand().Atspausdinkite 3 skaičius 
// naudodami console.log() nuo - 10 iki 10. Prie skaičių 
// mažesnių už 0 iš abiejų pusių atspauzdinkite “+” simbolius, 
// didesnių už 0 iš abiejų pusių atspauzdinkite “-” simbolius, o prie 0 “*” simbolius

console.log('---------------------------penktas uzd-----------------------------')

let pirmas5 = rand(-10, 10);
let antras5 = rand(-10, 10);
let trecias5 = rand(-10, 10);

console.log('pirmas: ' + pirmas5);
console.log('antras: ' + antras5);
console.log('trecias: ' + trecias5);


if (pirmas5 < 0) {
    console.log('+ ' + pirmas5 + ' +');
} else if (pirmas5 > 0) {
    console.log('- ' + pirmas5 + ' -');
} else {
    console.log('* ' + pirmas5 + ' *');
}
if (antras5 < 0) {
    console.log('+ ' + antras5 + ' +');
} else if (antras5 > 0) {
    console.log('- ' + antras5 + ' -');
} else {
    console.log('* ' + antras5 + ' *');
}
if (trecias5 < 0) {
    console.log('+ ' + trecias5 + ' +');
} else if (trecias5 > 0) {
    console.log('- ' + trecias5 + ' -');
} else {
    console.log('* ' + trecias5 + ' *');
}

console.log('------------------------------sestas uzd-------------------------------------------')
//sestas
// Įmonė parduoda žvakes po 1 EUR.Perkant daugiau kaip už 1000 EUR
//  taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida.
// Parašykite skriptą, kuri skaičiuos žvakių kainą ir atspausdintų 
// atsakymą su console.log() kiek žvakių ir kokia kaina perkama.
// Žvakių kiekį generuokite ​rand()​ funkcija nuo 5 iki 3000.
// 1 candle costs 1eur. if you by more than total 1000eur, then discount is 3%
// if total sum is 2000eur, discount is 4%. Count candle price and print home many candles
// are buying and the price of candle.

// let quantity = rand(5, 3000);
// let price = 1;


let quantity = rand(5, 3000);
let price = 1;
let totalPrice = price * quantity;

if (totalPrice > 2000) {
    totalPrice = totalPrice * 0.96;
}
else if (totalPrice > 1000) {
    totalPrice = totalPrice * 0.97;
}

console.log('price of 1: ' + totalPrice / quantity + ' Euro');
console.log('quantity: ' + quantity + ' candle(s)');
console.log('total: ' + totalPrice + ' Euro');



//septintas
// Naudokite funkcija rand().Sukurkite tris kintamuosius 
// su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite 
// jų aritmetinį vidurkį.Ir aritmetinį vidurkį atmetus tas reikšmes, 
// kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius 
// atspausdinkite su console.log()
// USe function rand(). Create 3 variables with value from 0 to 100. 
// Count the average of three values and the average of values excluding
//  the value if it is less than 10 or greater than 90. Both averages print in console

console.log('------------------------------septintas uzd------------------------------------------')

// let var1 = rand(0, 100);
// let var2 = rand(0, 100);
// let var3 = rand(0, 100);
// let total = 0;
// let totalNoExclusion = 0;

// console.log('var1: ' + var1);
// console.log('var2: ' + var2);
// console.log('var3: ' + var3);

// totalNoExclusion = (var1 + var2 + var3) / 3;

// if (var1 > 10 && var1 < 91) {
//     if (var2 > 10 && var2 < 91) {
//         if (var3 > 10 && var3 < 91) {
//             total = (var1 + var2 + var3) / 3;
//             console.log('3 number average: ' + total);
//             console.log('average no exclusion: ' + totalNoExclusion);
//         } else {
//             total = (var1 + var2) / 2;
//             console.log('2 number average: ' + total);
//             console.log('average no exclusion: ' + totalNoExclusion);
//         }
//     } else {
//         if (var3 > 10 && var3 < 91) {
//             total = (var1 + var3) / 2;
//             console.log('2 number average: ' + total);
//             console.log('average no exclusion: ' + totalNoExclusion);
//         } else {
//             total = var1;
//             console.log('1 number average: ' + total);
//             console.log('average no exclusion: ' + totalNoExclusion);
//         }
//     }
// }

// else if (var2 > 10 && var2 < 91) {
//     if (var3 > 10 && var3 < 91) {
//         total = (var2 + var3) / 2;
//         console.log('2 number average: ' + total);
//         console.log('average no exclusion: ' + totalNoExclusion);
//     } else {
//         total = var2;
//         console.log('1 number average: ' + total);
//         console.log('average no exclusion: ' + totalNoExclusion);
//     }
// }
// else if (var3 > 10 && var3 < 91) {
//     total = var3;
//     console.log('1 number average: ' + total);
//     console.log('average no exclusion: ' + totalNoExclusion);
// } else {
//     total = (var1 + var2 + var3) / 3;
//     console.log('no average');
//     console.log('average no exclusion: ' + totalNoExclusion);
// }

let var1 = rand(0, 100);
let var2 = rand(0, 100);
let var3 = rand(0, 100);
let total = 0;
let divisor = 0;
let averageWithoutExclusion = (var1 + var2 + var3) / 3;

console.log('var1: ' + var1);
console.log('var2: ' + var2);
console.log('var3: ' + var3);

if (var1 >= 10 && var1 <= 90) {
    total = total + var1;
    divisor++;
}

if (var2 >= 10 && var2 <= 90) {
    total = total + var2;
    divisor++;
}

if (var3 >= 10 && var3 <= 90) {
    total = total + var3;
    divisor++;
}

let averageWithExclusion = total / divisor;

console.log(divisor + ' number average: ' + averageWithExclusion);
console.log('average no exclusion: ' + averageWithoutExclusion);