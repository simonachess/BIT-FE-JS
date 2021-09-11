// const a = 1;

// if (3 === a)
//     console.log('yes');
// else
//     console.log('maybe');
// console.log('baby');


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


class Burbulai {

    static burbulai;
    static w;
    static h;
    static startButton = document.querySelector('#start');
    static timerDiv = document.querySelector('.timer');
    static nameInput = document.querySelector('#gamer');
    static tableUl = document.querySelector('.results');
    static timeStart;
    static clockId;
    static gamer;
    static table;


    static start() {

        this.ekranoDydis();
        this.burbulai = new Map();
        this.load();
        this.displayTable();

        const startButton = document.querySelector('#start');
        startButton.addEventListener('click', e => {
            e.stopPropagation();
            for (let i = 0; i < 5; i++) {
                setTimeout(this.naujasBurbulas, this.rand(1, 2000));
            }
            document.querySelector('body').addEventListener('click', this.naujasBurbulas());

            this.startButton.style.display = 'none';
            this.nameInput.style.display = 'none';
            this.gamer = this.nameInput.value;
            this.timeStart = new Date();
            this.clockId = setInterval(this.doTick, 100);
        })
    }

    static doTick = () => {
        const tic = new Date();
        const time = tic.getTime() - this.timeStart.getTime();
        const sec = Math.floor(time / 1000);
        const sec1 = Math.floor((time - (sec * 1000)) / 100);
        this.timerDiv.innerText = sec + ':' + sec1;
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
        clearTimeout(this.timerId);

        if (this.burbulai.size === 0) {
            this.gameEnd();
        }
    }

    //to do nuimti eventa nuo bagraundo
    static gameEnd() {
        const tic = new Date();
        const time = tic.getTime() - this.timeStart.getTime();
        const sec = Math.floor(time / 1000);
        const sec1 = Math.floor((time - (sec * 1000)) / 10);
        this.timerDiv.innerText = sec + ':' + sec1;
        this.startButton.style.display = "block";
        this.nameInput.style.display = "block";
        document.querySelector('body').removeEventListener('click', this.naujasBurbulas);
        clearTimeout(this.clockId);
        this.table.push({ name: this.gamer , score: sec + ":" + sec1, time: time });
        this.table.sort((a, b) => a.time - b.time);
        localStorage.setItem('ballApp', JSON.stringify(this.table.slice(-5)));
        this.table = this.table.slice(-5);
        this.displayTable();
    }

    static load() {
        if (null === localStorage.getItem('ballApp')) {
            localStorage.setItem('ballApp', JSON.stringify([]));
        }
        this.table = JSON.parse(localStorage.getItem('ballApp'))
    }

    static displayTable() {
        let html = '';
        this.table.forEach(g => {
            html += `<p>${g.name} ${g.score}</p>`
        })
        this.tableUl.innerHTML = html;
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

