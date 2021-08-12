//Sukurti objekta kalkuliatorių. Objektas turi turėti du metodus suma ir 
// skirtumas ir vieną savybę rezultatas, 
// kuriai būtų priskiriama funkcijų sumavimo arba skirtumavimo rezultatas
// pridėti savybę istorija.Savybė yra masyvas ir jame turi kauptis visi rezultatai
// Parašyti metodą, kuris ištrintų istoriją

const calc = {
    suma: function (a, b) {
        this.rezultatas = a + b;
        this.istorija.push(this.rezultatas);
        return this;
    },
    skirtumas: function (a, b) {
        this.rezultatas = a - b;
        this.istorija.push(this.rezultatas);
        return this;
    },
    istrinti: function () {
        this.istorija = [];
    },

    clear3: function () {
        console.log(1, this.rezultatas);
        return function () {
            console.log(2, this);
        }
    },
    rezultatas: null,
    istorija: [],
    t: this,
}



calc.suma(5, 5).skirtumas(5, 4).suma(17, 5).suma(10, 15).rezultatas;
console.log(calc);

calc.clear3()();

calc.istrinti();
console.log(calc);


console.log(calc.t);

//funkcija deklaruota globaliame kontekste, todel this iskonsolina window
//funkcija sukuria zodeli this pagal tai kokiame kontekste ji yra paleista
//kiekviena funkcija kuria nauja this
//jeigu this neranda objekto tai tada isveda windows
//arrow funkcija nekuria savo this. I arrow funkcija gali ateiti this 
// jeigu arrow funkcija patalpinta i funkcija function

function jonas() {
    console.log(this);
}

jonas();


console.log('------------------')

String.prototype.labas = function () {
    console.log('labas, ' + this.valueOf());
}

let a = 'blabla';
let b = 'kuku';
a.labas();
b.labas();
console.log('------------------')

