// const a = 1;

// if (3 === a)
//     console.log('yes');
// else
//     console.log('maybe');
// console.log('baby');



class Burbulai {

    static burbulai;
    static w;
    static h;

    static start() {
        document.querySelector('body').addEventListener('click', () => this.naujasBurbulas());
        this.ekranoDydis();
        this.burbulai = new Map();
        const startButton = document.querySelector('button#start');
        startButton.addEventListener('click', e => {
            e.stopPropagation();
            for (let i = 0; i < 5; i++) {
               setTimeout(this.naujasBurbulas, this.rand(1, 1000));
            }
            startButton.style.display = 'none';
        })
    }

    static naujasBurbulas = () => {

        const b = new Burbulai();
        this.burbulai.set(b.id, b);
    }

    static ekranoDydis() {
        this.w = window.innerWidth - 200;
        this.h = window.innerHeight - 200;
    }

    static rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static pagautas(b) {
        document.querySelector('body').removeChild(b.element); //trynimas is html
        this.burbulai.delete(b.id); //trynimas is mapo
    }

    constructor() {
        this.id = Math.floor(Math.random() * 9000000) + 100000;
        this.element = document.createElement('div');
        this.element.classList.add('ball');
        // this.element.style.backgroundColor='#' + Math.floor(Math.random() * 16777215).toString()

        this.varyk();
        setTimeout(this.varyk, 30);
        this.element.addEventListener('click', e => {
            e.stopPropagation();
            this.constructor.pagautas(this);
        })
        document.querySelector('body').appendChild(this.element);
        this.timerId = setInterval(this.varyk, 3000);
    }

    varyk = () => {
        this.element.style.top = this.constructor.rand(0, this.constructor.h) + 'px';
        this.element.style.left = this.constructor.rand(0, this.constructor.w) + 'px';
    }
}




Burbulai.start();

// Ant sukurto burbulo elemento uždėti click eventą kuris paleistų statinį metodą pagautas(id) ir jam perduotų pagauto burbulo id
// evente sustabdyti bublinimą
// statinis metodas pagautas() savo viduje turi ištrinti burbulą iš html ir tada ištrinti iš mapO
// naujai sukurtam burbulo elementui uždėti random background spalvą: https://css-tricks.com/snippets/javascript/random-hex-color/

//padaryti kad kai visus sugaunam burbulus atsiranda start mygtukas
//skaiciuoti klikus
//suskaiciuoti per kiek sekundziu buvo sugaudyti burbulai
//salia mygtuko padaryti ivedima vardui
//rezultatus issaugo local storage
//skirtingus levelius: mazensi kamuoliai, greiciau laksto