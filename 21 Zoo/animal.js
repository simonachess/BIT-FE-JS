
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
    static filterSet;
    element; //nuoroda i html taga su animal

    static start() {
        this.buttonCreate();
        this.buttonHideModal();
        this.buttonEdit(); //cia yra mygtukai kurie yra po viena
        this.buttonConfirmDelete();

        //laikini gyvunai
        // Animal.createAnimal('zebras', 36, 'black-white', false);
        // Animal.createAnimal('elk', 14, 'brown', true);
        // Animal.createAnimal('goat', 26, 'white', true);
        // Animal.createAnimal('dog', 18, 'black', false);
        //laikinai pabaiga

        this.load();
    }

    static createAnimal(specie, tail, color, hasHorn) {
        this.clearZoo(); //is htmlo istrinam visus gyvunus
        this.animals.push(new Animal(specie, tail, color, hasHorn));
        this.renderZoo(); //is naujo sudedame visus gyvunus
        this.save();
    }
    
    static editAnimal(id, specie, tail, color, hasHorn) {

        this.animals.forEach(animal => {

            if (id === `${animal.id}`) {
                this.clearZoo();
                console.log(specie);
                animal.specie = specie;
                animal.tail = tail;
                animal.color = color;
                animal.hasHorn = hasHorn;
                this.renderZoo();
            };
        });
        this.save();
        this.hideModal('edit-container');
    }

    static renderZoo() {
        this.animals.forEach(e => {
            e.render();
        });
        this.filterSelect();

    }

    static clearZoo() {
        this.animals.forEach(e => document.querySelector('.container').removeChild(e.element));
        this.clearFilterSelect();
    }


    static buttonCreate() {
        const specie = document.querySelector("#create-container [name=specie]");
        const tail = document.querySelector("#create-container [name=tailLong]");
        const color = document.querySelector("#create-container [name=color]");
        const horn = document.querySelector("#create-container [name=horn]");
        const btnCreate = document.querySelector("#create");
        btnCreate.addEventListener('click', () => {
            this.createAnimal(
                specie.value,
                tail.value,
                color.value,
                horn.checked);
        });
    }

    static buttonEdit() {
        const specie = document.querySelector("#edit-container [name=specie]");
        const tail = document.querySelector("#edit-container [name=tailLong]");
        const color = document.querySelector("#edit-container [name=color]");
        const horn = document.querySelector("#edit-container [name=horn]");

        document.querySelector('.modal-footer .btn-primary').addEventListener('click', (e) => {
            this.editAnimal(e.target.dataset.id, specie.value, tail.value, color.value, horn.checked); //susiranda animala pagal uzdeta id

            console.log('paspaudziau');
        });

    }


    static deleteAnimal(id) {
        //susirandame indeksa masyvo elemente kuri norime istrinti ir tada naudojame  istrinti ta elementa

        //destytojas: masyve animals surasti objektą kurio id yra lygus id argumentui ir atspausdinti indeksą
        this.animals.forEach((e, i) => {
            if (id === `${e.id}`) {
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
                    tail: e.tail,
                    color: e.color,
                    horn: e.hasHorn,
                });
        })
        // console.log(data);

        localStorage.setItem('zooApp', JSON.stringify(data)); //zooApp yra raktas localStoragui
        this.makeFilterSet();
    }

    static load() {
        if (null === localStorage.getItem('zooApp')) {
            localStorage.setItem('zooApp', JSON.stringify([]));
        }
        JSON.parse(localStorage.getItem('zooApp')).forEach(e => {
            this.createAnimal(e.specie, e.tail, e.color, e.horn);
        });

        this.makeFilterSet();

    }


    static showEditModal(animal) {

        const modal = document.querySelector("#edit-container");
        modal.style.display = "block";
        modal.style.opacity = 1;
        modal.querySelector('.btn-primary').dataset.id = animal.id; //susirandame modale mygtuka save changes ir uzdedame jam dataset.id ir prilyginam ji to animalo id sugeneruotam
        const specie = document.querySelector("#edit-container [name=specie]");
        const tail = document.querySelector("#edit-container [name=tailLong]");
        const color = document.querySelector("#edit-container [name=color]");
        const horn = document.querySelector("#edit-container [name=horn]");

        specie.value = animal.specie;
        tail.value = animal.tail;
        color.value = animal.color;
        horn.checked = animal.hasHorn;

    }

    static showDeleteConfirmModal(id) {
        const modal = document.querySelector("#confirm-delete");
        modal.style.display = "block";
        modal.style.opacity = 1;
        modal.querySelector('.btn-primary').dataset.id = id;
    }

    static hideModal(id) {
        const modal = document.querySelector('#' + id);
        modal.style.display = 'none';
        modal.style.opacity = 0;
        delete modal.querySelector('.btn-primary').dataset.id; //ta ka iraseme showEditModal cia istriname
    }

    static buttonConfirmDelete() {

        document.querySelector('#confirm-delete .btn-primary').
            addEventListener('click', (e) => {
                this.deleteAnimal(e.target.dataset.id);
                this.hideModal('confirm-delete')
            })

    }

    static buttonHideModal() {
        document.querySelectorAll('[data-dismiss=modal]').forEach(button => {
            button.addEventListener('click', (e) => {

                this.hideModal(e.target.closest('.modal').id);
            })
        });
    }

    static sortButton() {
        document.querySelector('#sort_specie').addEventListener('click', e => {
            this.showSorted(e.target.id);
        }
        );
        document.querySelector('#sort_tail_long').addEventListener('click', e => {
            this.showSorted(e.target.id);
        })
        // document.querySelector('#sort_specie, #sort_tail_long')
        // .forEach(b => {
        //     b.addEventListener('click', e=> this.showSorted(e.target.id));
        // });
    }
    static showSorted(id) {
        if ('sort_tail_long' == id) {
            if (document.querySelector('#sort_acs').checked) {
                this.animals.sort(function (a, b) {
                    return a.tail - b.tail;
                })
            }
            else {
                this.animals.sort(function (a, b) {
                    return b.tail - a.tail;
                })
            }
        }
        if ('sort_specie' == id) {
            this.animals.sort(function (a, b) {
                const nameA = a.specie.toUpperCase();
                const nameB = b.specie.toUpperCase();
                if (document.querySelector('#sort_acs').checked) {
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                }
                else {
                    if (nameA < nameB) {
                        return 1;
                    }
                    if (nameA > nameB) {
                        return -1;
                    }
                    return 0;
                }
            })
        }

        this.clearZoo();
        this.renderZoo();
    }

    static makeFilterSet() {
        this.filterSet = new Set();
        this.animals.forEach(animal => this.filterSet.add(animal.specie));
        this.filterSet = new Set([...this.filterSet].sort());
        console.log(this.filterSet)
    }

    static filterSelect() {
        if (undefined === this.filterSet) {
            return
        }
        const select = document.querySelector('#animals_list');
        this.filterSet.forEach(a => {
            const element = document.createElement('option');
            element.innerText = a;
            element.value = a;
            select.appendChild(element);
        });

    }

    static clearFilterSelect() {
        document.querySelector('#animals_list').innerHTML = '';
    }

    constructor(specie, tail, color, hasHorn) {
        this.specie = specie;
        this.tail = tail;
        this.color = color;
        this.hasHorn = hasHorn;
        this.createAnimalId();
    }

    render() {
        this.createAnimalElement();
        this.createAnimalHtml();
        this.deleteButton(); //butono eventas
        this.editButton()
    }

    createAnimalElement() {
        this.element = document.createElement("div");
        document.querySelector(".container").appendChild(this.element);
    }
    createAnimalHtml() {
        const horn = this.hasHorn ? 'Has horn' : 'No horn';
        const html = `
        <div class="container-create">
        <h1>${this.specie}</h1>
        <p>Tail long: ${this.tail} cm</p>
        <p><i>Color: ${this.color}</i></P>
        <p>${horn}</p>
        <div class="delete-edit">
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
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

    // deleteButton() {
    //     this.element.querySelector('.deleteBtn').addEventListener('click', () =>  //ieskant mygtuko naudojam ne document o this.element, kas yra nuoroda i html taga i tam tikra zveri
    //         this.constructor.deleteAnimal(this.id) //savybe id is metodo createAnimalId. this.constructor atitinka klase Animal
    //         //  console.log(this.id)

    //     );
    // }

    deleteButton() {
        this.element.querySelector('.deleteBtn').addEventListener('click', () =>  //ieskant mygtuko naudojam ne document o this.element, kas yra nuoroda i html taga i tam tikra zveri
            this.constructor.showDeleteConfirmModal(this.id) //savybe id is metodo createAnimalId. this.constructor atitinka klase Animal
            //  console.log(this.id)

        );
    }



    editButton() {
        this.element.querySelector('.editBtn').addEventListener('click', () =>
            this.constructor.showEditModal(this) //this issiuncia visus ne statinius elementus
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



//2021-08-18

// 1. sukurti editButton metodą ir į jį įdėti evetą click, kurį paspaududus 
// yra iškviečiams statinis metodas showEditModal

// 2. edit buttono metodo paleidimą idedame į render metodą

// 3. Atvaizduojame Edit modalą su užpildytais laukeliais

