function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Deklaruokite kintamąjį(jeigu reikia kelis kintamuosius) už ciklo ribų.
// Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…25. 
// Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;
// A. Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;
console.log('--------8---------------');
console.log('--------8A---------------');

let a8;
let i = 0;
let suma = 0;
let neatmestuSkaicius = 0; //uzdavinio salyga nepraso
let sumaAtmestu = 0;
let atmestuSkaicius = 0;
do {
    a8 = rand(10, 25);
    console.log(a8);
    if (a8 > 18) {
            suma = suma + a8;
        neatmestuSkaicius++;
    } else{
        sumaAtmestu = sumaAtmestu + a8;
    
        atmestuSkaicius++;
    }
    i = i + 1;
} while (a8 >= 12);


// B. Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
console.log('--------8B---------------');

console.log('iteraciju: ', i)


// C. Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami(neskaičiuodami) skaičius, 
// kurie yra didesni nei 18, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų.
// Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
console.log('--------8C---------------');

console.log('suma neatmetus: ', suma);
console.log('neatmestu skaicius: ', neatmestuSkaicius);

// D. Sumą skaičiuokite kaip C dalyje, bet papildomai susikurkite kintamąjį, 
// kuriame suskaičiuokite kiek reikšmių atmetėte(nesumavote).
// Rezultatą su suma ir atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų;
console.log('--------8D---------------');

console.log('suma atmetus: ', sumaAtmestu);
console.log('atmestu skaicius: ', atmestuSkaicius);

// E. Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek nelyginių skaičių.
// Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus.
console.log('--------8E---------------');

// F. Ciklą iš dalies B kartokite tol, kol to ciklo iteracijų kiekis bus didesnis nei 20(vieno ciklo).
// Paskaičiuokite kiek pakartojimų buvo atlikta ir rezultatą atspauzdinkite pabaigoje.







// 9. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 5 - 10. 
// Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius 5;

// A. Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, koks skaičius buvo sugeneruotas.
// Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų padarė vidinis ciklas.
// Rezultatus atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;

// B. Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą, 
// bet trečią kartą ir paskaičiuokite iteracijas analogiškai kaip A dalyje;

// C. Padarykite analogiškai kaip B dalyje, bet tik kai 5 yra sugeneruojami 3 kartus iš eilės;

// 10. Kazys ir Petras žaidžiai bingo.Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20, 
// Kazys - surenka taškų kiekį nuo 5 iki 25. Console.log išvesti žaidėjų vardus su taškų kiekiu ir 
// “Partiją laimėjo: laimėtojo vardas​”.Taškų kiekį generuokite funkcija ​rand().Žaidimą laimi tas, 
// kas greičiau surenka 222 taškus.Partijas kartokite tol, kol kažkuris žaidėjas pirmas surenks 222 arba daugiau taškų.


