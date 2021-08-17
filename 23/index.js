console.log('---------------Kibiras1');

// Daro Marytė
class Kibiras1 {

    static visiAkmenys = 0;

    static akmenuSkaiciusVisuoseKibiruose() {
        console.log('Visuose kibiruose yra akmenų:', this.visiAkmenys);
    }

    static bendrasAkmenuSkaicius(akmenuSkaicius) {
        this.visiAkmenys += akmenuSkaicius;
    }

    // this === klase

    //----------------------------------------

    //this === objektas

    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni() {
        this.akmenuKiekis++; // i objekta, kokretus kibiras
        this.constructor.bendrasAkmenuSkaicius(1); // i bendra statine, t.y. visiems kibirams
        //this.constructor === Kibiras1
        //this.constructor Sitas objektas (this) yra konstruojamas (constructor) ===> Klase
    }
    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
        Kibiras1.bendrasAkmenuSkaicius(kiekis);
    }
    kiekPririnktaAkmenu() {
        console.log('Kibire akmenų:', this.akmenuKiekis);
    }
}
// Marytės pabaiga

// Marius

const viedras55 = new Kibiras1();
const viedras66 = new Kibiras1();
const viedras77 = new Kibiras1();

console.log(viedras55);

viedras55.prideti1Akmeni();
viedras55.pridetiDaugAkmenu(9);
viedras55.kiekPririnktaAkmenu();

viedras66.prideti1Akmeni();
viedras66.pridetiDaugAkmenu(19);
viedras66.kiekPririnktaAkmenu();

viedras77.prideti1Akmeni();
viedras77.pridetiDaugAkmenu(29);
viedras77.kiekPririnktaAkmenu();

Kibiras1.akmenuSkaiciusVisuoseKibiruose();

// Mariaus pabaiga


console.log('---------------------------4--------------------')

    // (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), 
    // kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose.
    // Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą 
    // bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų 
    // keleivius iš statinės savybės visiKeleiviai(kurioje yra įrašytas bendras 
    // keleivių skaičius).Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) 
    // ir islipa(keleiviuSkaicius).


class Troleibusas {

    static visiKeleiviai = 0;

    static keleiviuSkaiciusVisuoseTroleibusuose(){
        console.log('Keleiviu skaicius visuose troleibusuose:', this.visiKeleiviai);
    }

    static bendrasKeleiviuSkaicius(keleiviuSkaicius){
        this.visiKeleiviai += keleiviuSkaicius;
    }

    constructor() {
        this.keleiviuSkaicius = 0;
    }

    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius = this.keleiviuSkaicius + keleiviuSkaicius;
        this.constructor.bendrasKeleiviuSkaicius(keleiviuSkaicius);

    }

    islipa(keleiviuSkaicius) {
        if (this.keleiviuSkaicius <= keleiviuSkaicius) {

            keleiviuSkaicius = this.keleiviuSkaicius;
                   
        } 
        this.keleiviuSkaicius-= keleiviuSkaicius;
        this.constructor.bendrasKeleiviuSkaicius(-keleiviuSkaicius);

    }
    vaziuoja() {
        console.log(this.keleiviuSkaicius);
    }
};

const keleiviai = new Troleibusas();
const keleiviai2 = new Troleibusas();


keleiviai.ilipa(1);
keleiviai.ilipa(5);
keleiviai.islipa(3);
keleiviai.vaziuoja();
keleiviai2.ilipa(1);
keleiviai2.ilipa(5);
keleiviai2.islipa(3);
keleiviai2.vaziuoja();


Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose();