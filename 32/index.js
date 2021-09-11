class BookShelf {
    bookShelf;
    element;

    constructor(...books) {

        this.bookShelf = new Set(books);
        this.createHTML();
        this.bookShelf.forEach(book => {
            if (book.amount) {
                this.element.appendChild(book.element);   //jeigu knygos 0vnt., nededame knygos i lentyna
                book.element.addEventListener('bookchange', (e) => {
                    if(e.target.dataset.amount == 0){
                        e.target.remove();
                    }
                    // console.log(e.target);
                })
            }
        });
    }

    createHTML() {
        this.element = document.createElement('div');
        this.element.classList.add('book-card');
        document.querySelector('body').appendChild(this.element);
    }
}


class Book {
    author;
    pages;
    price;
    amount;
    title;
    element;

    // static bookShelf = new Set();

    static bookChange = new Event('bookchange');

    constructor(title, pages, price, amount, ...author) {
        this.title = title;
        this.pages = pages;
        this.author = author;
        this.price = price;
        this.amount = amount;
        this.createHTML();

        // this.constructor.bookShelf.add(this) statinis kreipinys objektiniame kontekste
    }

    createHTML() {

        let authors = '';
        for (const author of this.author) {
            authors += `<h3><i>${author}</i></h3>`;
        }

        const html = `
        <div class="book-card">
        <h2 >${this.title}</h2>` +
            authors
            + `
        <div class="page-price">
        <small>${this.pages} psl.</small>
        <span class="price">${this.price} eur. </span>
        <b id="amount">${this.amount} vnt. </b>
        </div>
        <div class="buy"><button>Pirkti</button></div>
        </div>
        `;
        this.element = document.createElement('div');
        this.element.innerHTML = html;
        this.addCover();
        this.element.querySelector('button').addEventListener('click', () => { //this.element rasome, nes mygtuko ieskome musu kuriamame dive, o ne visame dokumente, nes visame dokumente buttonu gali buti daug
            this.amount--;
            this.element.dataset.amount = this.amount;
            this.element.querySelector('b').innerText = `${this.amount} vnt.`;
            this.element.dispatchEvent(this.constructor.bookChange);
        })
    }

    addCover() {
        this.element.classList.add('no-cover');
    }

}


class YellowBook extends Book { //klase YellowBook yra klases Book vaikas
    addCover() {
        this.element.classList.add('yellow-cover');
    }

}

class GreenBook extends Book {
    addCover() {
        this.element.classList.add('green-cover');
    }
}

const book1 = new YellowBook('Penki mėnuliai', 258, 15.25, 15, 'Jonas Biliūnas');
const book2 = new Book('Negirdėtos pasakos', 374, 16.79, 7, 'Ragana Piktoji', 'Ragana Žalioji');
const book3 = new GreenBook('Didelis upės skonis', 142, 9.39, 0, 'Bebras Aštriadantis');
const book4 = new Book('Drakono galvų trilogija', 890, 35.27, 9, 'Hobitas Trobitas');
// console.log(book1, book2, book3)
// console.log(Book.bookShelf);

const bs1 = new BookShelf(book1, book2, book3)
const bs2 = new BookShelf(book4)