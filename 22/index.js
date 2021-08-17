class Kibiras1 {
    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni() {
        this.akmenuKiekis = this.akmenuKiekis + 1;
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis = this.akmenuKiekis + kiekis;
    }

    kiekPririnktaAkmenu() {
        console.log('Akmenu kibire: ', this.akmenuKiekis)
    }
};

const kibiras = new Kibiras1();

kibiras.prideti1Akmeni();
kibiras.prideti1Akmeni();
kibiras.pridetiDaugAkmenu(15);

kibiras.kiekPririnktaAkmenu();


console.log('-------------2---------------');


class Pinigine {
    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
        this.monetuKiekis = [];
        this.banknotuKiekis = [];
    }

    ideti(kiekis) {
        if (kiekis <= 2) {
            this.metaliniaiPinigai = this.metaliniaiPinigai + kiekis;
            this.monetuKiekis.push('metalinis');
        } else {
            this.popieriniaiPinigai = this.popieriniaiPinigai + kiekis;
            this.banknotuKiekis.push('banknotas');
        }
    }
    kiekPririnktaAkmenu() {
        console.log(this.akmenuKiekis)
    }
    skaiciuoti() {
        console.log('metaliniu:', this.metaliniaiPinigai, ', popieriniu:', this.popieriniaiPinigai);
    }
    monetos() {
        console.log(this.monetuKiekis.length);
    }

    banknotai() {
        console.log(this.banknotuKiekis.length);
    }
};


const pinigineObjektas = new Pinigine();

pinigineObjektas.ideti(1);
pinigineObjektas.ideti(5);
pinigineObjektas.ideti(10);
pinigineObjektas.ideti(10);
pinigineObjektas.ideti(2);
pinigineObjektas.skaiciuoti();
pinigineObjektas.ideti(10);
pinigineObjektas.ideti(2);
pinigineObjektas.skaiciuoti();

pinigineObjektas.monetos();
pinigineObjektas.banknotai();


console.log('-------------3---------------');

class Troleibusas {
    constructor() {
        this.keleiviuSkaicius = 0;
    }

    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius = this.keleiviuSkaicius + keleiviuSkaicius;
    }

    islipa(keleiviuSkaicius) {
        if (keleiviuSkaicius <= this.keleiviuSkaicius) {
            this.keleiviuSkaicius = this.keleiviuSkaicius - keleiviuSkaicius;
        } else {
            console.log(`gali islipti tik`, this.keleiviuSkaicius);
        }
    }
    vaziuoja() {
        console.log(this.keleiviuSkaicius);
    }
};

const keleiviai = new Troleibusas();

keleiviai.ilipa(1);
keleiviai.ilipa(5);
keleiviai.islipa(7);
keleiviai.vaziuoja();


console.log('-------------8---------------');

// Sukurti klasę Stikline.Sukurti savybes turis ir kiekis.Turis turi būti 
// pasirenkamas objekto kūrimo metu.Parašyti metodą ipilti($kiekis), kuris 
// keistų savybę kiekis.Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis - kiekis netelpa
//  ir būna lygus tūriui.Parašyti metodą ispilti(), kuris grąžiną kiekį.
//  Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.
//  Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje yra skysčio.
//  Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. Didžiausią pripilti pilną ir
//   tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.

class Stikline {
    constructor(turis) {
        this.turis = turis;
        this.kiekis = 0;
    }

    ipilti(kiekis) {
        if (this.turis < kiekis) {
            this.turis = this.turis;
        } else {
            this.kiekis = kiekis;
        }
    }
    ispilti() {
        return this.kiekis;
    }
    stiklinejeYra() {
        console.log(this.kiekis);
    }
};

const stikline1 = new Stikline(200);
const stikline2 = new Stikline(150);
const stikline3 = new Stikline(100);

stikline1.ipilti(70);
stikline1.stiklinejeYra();

stikline2.ipilti(200);
stikline2.stiklinejeYra();



console.log('----------------TV ---------------------');

class TV {

    static programa = ['LRT', 'TV3', 'LNK', 'Polonia'];

    static naujaPrograma(pr) {
        this.programa = pr; //statiniame etode this zodelis kreipiasi ne i objekta bet i klase
    }

    constructor() {
        this.savininkas = 'Parduotuve';
        this.kanalas = null;
    }

    pirkimas(vardas) {
        this.savininkas = vardas;
    }

    perjungtiKanala(nr) {
        this.kanalas = nr;
    }
    infoApieTv() {
        console.log(`Savininkas: ${this.savininkas} 
        Kanalas: ${this.kanalas}
        Programa: ${TV.programa[this.kanalas]}`);
    }
}

// klaseje static reikalinga, kad po objekto sukurimo galetume keisti savybes


const tv1 = new TV();
const tv2 = new TV();
const tv3 = new TV();

tv2.pirkimas('Antanas');
tv2.perjungtiKanala(2);

tv3.pirkimas('Birute');
tv3.perjungtiKanala(3);

tv1.infoApieTv();
tv2.infoApieTv();
TV.naujaPrograma (['MTV', 'TNT', 'TV6', 'RenTV']); //trecias tv jau ziures pagal nauja programa
tv3.infoApieTv();



console.log('-----------------------9----------------------')

// Sukurti klasę Grybas.Sukurti klasę Krepsys.Krepsys turi savybę dydis, kuriai 
// konstriktoriuje yra priskiriama reikšmė 500 ir savybę prikrauta (kuri pradžioje lygi 0). 
// Grybas turi tris savybes, kurios
// taip pat yra paskaičiuojamos konstruktoriuje: valgomas, sukirmijes, svoris.
// Kuriant Grybo objektą jo savybės turi būti atsitiktinai(rand funkcija) priskiriamos taip: 
// valgomas - true arba false, sukirmijes - true arba false ir svoris - nuo 5 iki 45. 
// Eiti grybauti, t.y.Kurti naujus Grybas objektus, jeigu nesukirmijęs ir valgomas dėti 
// į Krepsi objektą,  t.y. vykdyti deti(grybas) metodą kol bus pririnktas pilnas 
// krepšys nesukirmijusių ir valgomų grybų (gali būti truputį daugiau nei dydis).

