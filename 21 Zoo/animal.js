
class Animal {

    static animals = []; //saugomi visi gyvunai ir zverys
    static showAnimals = []; //visi rodomi gyvuliai
    static filterSet;
    element; //nuoroda i html taga su animal

    static start() {
        this.buttonCreate();
        this.buttonHideModal();
        this.buttonEdit(); //cia yra mygtukai kurie yra po viena
        this.buttonConfirmDelete();
        this.filterButton();
        this.showAllButton();
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
        this.animals.unshift(new Animal(specie, tail, color, hasHorn));
        this.showAnimals = this.animals.slice();
        this.save();
        this.renderZoo(); //is naujo sudedame visus gyvunus

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

            };
        });
        this.save();
        this.renderZoo();
        this.hideModal('edit-container');
    }

    static renderZoo() {
        this.showAnimals.forEach(e => {
            e.render();
        });
        this.filterSelect();

    }

    //todo pataisyti clear
    static clearZoo() {
        // this.animals.forEach(e => document.querySelector('.container').removeChild(e.element));
        document.querySelector('.container').innerHTML = '';
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
        this.animals.forEach((e, i) => {
            if (id === `${e.id}`) {
                this.clearZoo(); //istrinam html
                this.animals.splice(i, 1); //trina masyve, ne html, i nurodo indeksa kuri trinti, 1, kad trinti 1 elementa
                this.showAnimals = this.animals.slice();
            };
        });
        this.save();
        this.renderZoo(); //perrenderinam visa html per nauja
    }

    static save() {

        // į tą masyvą irašyti objektus, turinčius keturias pagrindidines savybes iš kiekvieno animals masyve esančio objekto

        const data = [];
        this.animals.forEach(e => {
            data.unshift(
                {
                    specie: e.specie,
                    tail: e.tail,
                    color: e.color,
                    horn: e.hasHorn,
                });
        })
        // console.log(data);

        localStorage.setItem('zooApp', JSON.stringify(data)); //zooApp yra raktas localStoragui
    }

    static load() {
        if (null === localStorage.getItem('zooApp')) {
            localStorage.setItem('zooApp', JSON.stringify([]));
        }
        JSON.parse(localStorage.getItem('zooApp')).forEach(e => {
            this.createAnimal(e.specie, e.tail, e.color, e.horn);
        });

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
    }

    static filterButton() {
        document.querySelector('#filter').
            addEventListener('click', (e) => {
                this.showFiltered()
            });
    }

    static showAllButton() {
        document.querySelector('#all').
            addEventListener('click', (e) => {
                this.animals = [];
                this.load();
            });
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
    //todo neveikia
    static showFiltered() {
        const filterValue = document.querySelector("#animals_list").value;
        const an = [];
        this.showAnimals.forEach((animal, i) => {
            if (animal.specie == filterValue) {
                an.push(animal);
            }
        });

        this.showAnimals = an;
        this.clearZoo();
        this.renderZoo();

        document.querySelector(".editBtn").setAttribute('disabled', true);
        document.querySelector(".deleteBtn").setAttribute('disabled', true);
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
        this.element.innerHTML = html;

    }

    createAnimalId() {
        //todo check uniqueness
        this.id = Math.floor(Math.random() * 9000000) + 100000;
    }

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

Animal.start();

