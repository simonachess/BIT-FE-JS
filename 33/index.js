const setas = new Set(['Lietus', 'Sniegas', 'Puga', 'Vetra']);

console.log('setas1:',setas)
//kuo skiriasi setas nuo masyvo: setas negali tureti vienodu reiksmiu
//ir is seto lengviau istrinti


const mas = [...setas];

console.log(mas);

localStorage.setItem('orai', JSON.stringify(mas));

const setas3 = new Set([...JSON.parse(localStorage.getItem('orai'))]);

const a = { lietus: 5 };
const b = { lietus: 5 };
const c = { lietus: 5 };

const setas2 = new Set([a, b, c, b, c]);

console.log('setas2:',setas2);
console.log('setas3:',setas3);

console.log('------------------')

const m =[];

m[9999999] = 2;

m.forEach(e=>{
    if(e ==2){
        console.log('forEach pabaiga')
    }
})