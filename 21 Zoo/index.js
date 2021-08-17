console.log('-------------------1----------------------------')

// 1. Reikia sukurti objektą, kuriame yra savybė name.Ir reikia sukurti metodą 
// setName(vardas) kuris į tą savybę įrašytų vardą.

const objektas = {
    setName: function (vardas) {
        this.name = vardas;
    },
    koksVardas: function () {
        console.log(this.name);
    },
    name: '',
}

objektas.setName('Petras');
console.log(objektas);
// objektas.koksVardas('Zita');

//3. html'e nusipaišyti mygtuką. Tam mygtukui priskirti 
// click eventą kurį paspaudus yra iškviečiamas koksVardas() metodas


const duok = objektas.koksVardas.bind(objektas);


const btn = document.querySelector("button");
//addEventListener nepaleidinejame funkcijos 
btn.addEventListener('click', duok);


console.log('-------------------Classes---------------------');
//klases kurimas

const z2 = {
    vardas: null,
    setName: function (vardas) {
        this.vardas = vardas;
    },
    koksVardas: function () {
        console.log(this.vardas);
    },
};


//constructor metodas pasileidzia kai panaudojama zode new
class Zmogus {
    constructor() {
        this.vardas = null;
        this.koksVardas = this.koksVardas.bind(this);
    }

    setName(vardas) {
        this.vardas = vardas; //metodams nereikia constructor, tik savybems
    }

    koksVardas() {
        console.log(this.vardas);
    }
};

const z1 = new Zmogus();

z1.setName('Anatolija');
z2.setName('Tolija');

console.log(z1, z2)

const duok2 = z2.koksVardas.bind(z2);

const btn2 = document.querySelector("button");
btn2.addEventListener('click', z1.koksVardas);

const btn3 = document.querySelector("button");
btn3.addEventListener('click', duok2);





