const obj1 = {};

const obj2 = {
    savybe1: 'zaluma',
    savybe2: 'geltonuma',
    savybe3: 42,
    savybe4: [1, 5, 6],
    metodas1: function(){
        console.log('as metodas'); //funkcija, kuri  yra savybeje yra vadinama metodu
    },
    metodas2: function () {
        console.log('as metodas2'); 
    },
    metodas3: function () {
        console.log('as metodas3');
    },
};

console.log(obj2);

for(const savybe in obj2){
    console.log(savybe);  //atspausdina savybe, ne savybes reiksme
};

for (const savybe in obj2) {
    console.log(savybe, obj2[savybe]);  //atspausdina savybe it jos reiksme
};

for (const savybe in obj2) {
    console.log(savybe, obj2[savybe], typeof obj2[savybe]);  //atspausdina tipus
};


console.log('--------------------');
//viduje objekto naudojame zodi this
const obj3 = {
    savybe1: 'zaluma',
    savybe2: 'geltonuma',
    savybe3: 42,
    savybe4: [1, 5, 6],
    metodas1: function () {
        console.log(this.savybe2)
    },
    metodas2: function () {
        console.log(this.savybe3)
    },
    metodas3: function () {
        console.log(this.savybe1)
    }
};

//1. Parašyti ciklą, kuris paleistų visas objekto funkcijas iš eilės
console.log('-----------1---------');
// for (const savybe in obj3) {
//     console.log(savybe, obj3[savybe]()); 
// };

//2. Tas pat, kas pirma uzd, tik su atkomentuotom savybėm
console.log('------------2--------');
for (const savybe in obj3) {
    if (typeof obj2[savybe] === 'function'){
     savybe, obj3[savybe]();   
    }
};

//3. Pakoreguoti objekto metodus taip, kad pirmas metodas atspausdintų savybę 2, 
// antras metodas- savybę 3 ir trečias metodas - savybę 1
console.log('------------3--------');
for (const savybe in obj3) {
    if (typeof obj2[savybe] === 'function') {
        obj3[savybe]();
    }
};

console.log('----------------this-----------------');

let objektas1 ={
    savybe: 'labas',
    metodas1: function(){
        console.log(this.savybe);
    }
} 

let objektas2 = objektas1;

objektas1.metodas1();
objektas2.metodas1();