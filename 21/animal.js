
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



console.log('----------------------------------------');
//klases sablonas
class Animal {
    constructor(specie, tailLong, color, hasHorn) {
        this.specie = specie;
        this.tailLong = tailLong;
        this.color = color;
        this.hasHorn = hasHorn;
        console.log(this.specie);
        this.createAnimalId();
        this.createAnimalElement(); //sukurti keturi divai nes yra keturi gyvunai (keturi new zodeliai);
        this.createAnimalHtml();
    }
    createAnimalElement() {
        this.element = document.createElement("div");
        document.body.appendChild(this.element);
    }
    createAnimalHtml() {
        const horn = this.hasHorn ? 'Has horn' : 'No horn';
        const html = `
        <div style="width: 200px; border: 1px solid grey; padding: 10px 20px">
        <h1 style="text-decoration: underline">${this.specie}</h1>
        <p>Tail long: ${this.tailLong} cm</p>
        <i>Color: ${this.color}</i>
        <p style="background-color: lightgrey">${horn}</p>
        <button data-id=${this.id}>Delete</button>
        </div>
        <br>
        `;
        this.element.innerHTML = html;
    }
    createAnimalId() {
        this.id = Math.floor(Math.random() * 9000000) + 100000;
    }
}

const animalArray = [];

animalArray.push(new Animal('zebras', 36, 'black-white', false));
animalArray.push(new Animal('elk', 14, 'brown', true));
animalArray.push(new Animal('goat', 26, 'white', true));
animalArray.push(new Animal('dog', 18, 'black', false));


console.table(animalArray);




const specie = document.querySelector("#specie");
const tailLong = document.querySelector("#tailLong");
const color = document.querySelector("#color");
const horn = document.querySelector("#horn");
const btnCreate = document.querySelector("button");

btnCreate.addEventListener('click', () => {
    animalArray.push(new Animal(specie.value, tailLong.value, color.value, horn.checked));
});

