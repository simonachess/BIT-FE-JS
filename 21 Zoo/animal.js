
// 5. Sukurkite createAnimalElement metodą, kuris sukuria naują DIV elementą ir jį įdeda į DOM'ą (htmlą)
// 6. Nuorodą į tą elementą užsaugokite naujai sukurtoje savybėje element
// 7. createAnimalElement įdėkite į konstruktorių ir paleiskite jame
// 8. sukurti metodą animalHtml, kuriame sudėliojame animalo apraš htmlą
// 9. aprašą įdėti su innerHTML į sukurtą savybę element su div tagu
// 10. paleisti padarytą metodą konstruktoriuje
// 11. htmle nusipaišyt formą su 3 inputais ir vienu mygtuku.Type text, o prasmė 4 animalo savybės
// 12. Ketvirtas input checkbox pasirinkimas dėl uodegos
// 13. Paspaudus mygtuką, turi susikurti naujas gyvūnas ir įsirašyti į masyvą, prie kitų
// 14. sukurti metodą kuris generuotų atsitiktinius skaičius nuo 1000000 iki 9999999 ir priskirti tą 
// skaičių savybei id, ir pasileistų konstruktoriuje
// 15. Aštuntą punktą papildyti mygtuku 'istrinti'
// 16. Mygtukui pridėti atributą data - id="" animal id savybei
//CRUD - create, read, update, delete


//klases sablonas
class Animal {

    static animals = []; //saugomi visi gyvunai ir zverys

    element; //nuoroda i html taga su animal

    static start() {
        this.buttonCreate();

        //laikini gyvunai
        // Animal.createAnimal('zebras', 36, 'black-white', false);
        // Animal.createAnimal('elk', 14, 'brown', true);
        // Animal.createAnimal('goat', 26, 'white', true);
        // Animal.createAnimal('dog', 18, 'black', false);
        //laikinai pabaiga

        this.load();
    }

    static createAnimal(specie, tailLong, color, hasHorn) {
        this.clearZoo(); //is htmlo istrinam visus gyvunus
        this.animals.push(new Animal(specie, tailLong, color, hasHorn));
        this.renderZoo(); //is naujo sudedame visus gyvunus
        this.save();
    }

    static renderZoo() {
        this.animals.forEach(e => {
            e.render();
        });
    }

    static clearZoo() {
        this.animals.forEach(e => document.querySelector('.container').removeChild(e.element));
    }

    static buttonCreate() {
        const specie = document.querySelector("#specie");
        const tailLong = document.querySelector("#tailLong");
        const color = document.querySelector("#color");
        const horn = document.querySelector("#horn");
        const btnCreate = document.querySelector("#create");
        btnCreate.addEventListener('click', () => {
            this.createAnimal(specie.value, tailLong.value, color.value, horn.checked);
        });
    }

    static deleteAnimal(id) {
        //susirandame indeksa masyvo elemente kuri norime istrinti ir tada naudojame  istrinti ta elementa

        //destytojas: masyve animals surasti objektą kurio id yra lygus id argumentui ir atspausdinti indeksą
        this.animals.forEach((e, i) => {
            if (id === e.id) {
                this.clearZoo(); //istrinam html
                this.animals.splice(i, 1); //trina masyve, ne html, i nurodo indeksa kuri trinti, 1, kad trinti 1 elementa
                this.renderZoo(); //perrenderinam visa html per nauja
            };
        });
        this.save();
    }

    static save() {

        // į tą masyvą irašyti objektus, turinčius keturias pagrindidines savybes iš kiekvieno animals masyve esančio objekto

        const data = [];
        this.animals.forEach(e => {
            data.push(
                {
                    specie: e.specie,
                    tail: e.tailLong,
                    color: e.color,
                    horn: e.hasHorn,
                });
        })
        console.log(data);

        localStorage.setItem('zooApp', JSON.stringify(data)); //zooApp yra raktas localStoragui

    }

    static load() {
        if (null === localStorage.getItem('zooApp')) {
            localStorage.setItem('zooApp', JSON.stringify([]));
        }
        JSON.parse(localStorage.getItem('zooApp')).forEach(e => {
            this.createAnimal(e.specie, e.tailLong, e.color, e.hasHorn);
        });
    }

    constructor(specie, tailLong, color, hasHorn) {
        this.specie = specie;
        this.tailLong = tailLong;
        this.color = color;
        this.hasHorn = hasHorn;
        this.createAnimalId();
    }

    render() {
        this.createAnimalElement();
        this.createAnimalHtml();
        this.deleteButton(); //butono eventas
    }

    createAnimalElement() {
        this.element = document.createElement("div");
        document.querySelector(".container").appendChild(this.element);
    }
    createAnimalHtml() {
        const horn = this.hasHorn ? 'Has horn' : 'No horn';
        const html = `
        <div style="width: 200px; border: 1px solid lightgrey; border-radius: 15px; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; padding: 10px 20px; margin: 10px">
        <h1 style="text-align: center; background-color: lightgrey; border-radius: 15px; letter-spacing: 3px; text-transform: uppercase; padding: 5px">${this.specie}</h1>
        <p>Tail long: ${this.tailLong} cm</p>
        <i>Color: ${this.color}</i>
        <p>${horn}</p>
        <div style="display:flex; justify-content: space-between">
        <button id="edit" style="padding: 10px; margin: 5px; color: green; cursor: pointer; width: 80px;">Edit</button>
        <button id="delete" style="padding: 10px; margin: 5px; color: red; cursor: pointer; width: 80px;">Delete</button>
        </div>
        </div>
        <br>
        `;
        //data-id="${this.id} reikalingas kad saugotu id tage
        this.element.innerHTML = html;

    }

    createAnimalId() {
        //todo check uniqueness
        this.id = Math.floor(Math.random() * 9000000) + 100000;
    }

    deleteButton() {
        this.element.querySelector('#delete').addEventListener('click', () =>  //ieskant mygtuko naudojam ne document o this.element, kas yra nuoroda i html taga i tam tikra zveri
            this.constructor.deleteAnimal(this.id) //savybe id is metodo createAnimalId. this.constructor atitinka klase Animal
            //  console.log(this.id)
        );

    }
}

//2021-08-16
//1. animalArray masyvą paversti statine savybe animals
//2. Sukurti statini metodą createAnimal su keturiais argumentais, kuris gamintų Animal objektą ir dėtų jį į statinę savybę animals
//3. sukurti objektiną metoda render() ir į jį iš konstruktoriaus perkelti
// this.createAnimalElement();
// this.createAnimalHtml();
//4. Sukurti statinį metodą renderZoo, kuris atvaizduotų visus sukurtus 
// gyvūnus iš statinės savtbės - masyvo animals
//5. Sukurti statinį metodą clearZoo() kuris ištrintų visus 
// žvėris iš DOM HTML, bet ne iš masyvo animals

//2021-08-17
// 1. buttono create animal eventą perkelti į statinį metodą buttonCreate()
// 2. sukurti statinį metodą start() kuriame paleisti buttonCreate() metodą

Animal.start();

// 3. sukurti metoda deleteButton kuris ant animalo delete mygtuko uždeda click eventą.
// eventas paleidžia metodą(dar nesukurtą) deleteAnimal

// gautą masyvą sustringifaiinti ir įdėti į localstorage su raktu zooApp

// sukurti statinį metodą load, kuris iš localstorage nuskaito duomenis ir juos suparsina

// iš gauto išparsinto masyvo prigaminti naujų Animal objektų naudojant metodą createAnimal