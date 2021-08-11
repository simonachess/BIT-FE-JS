const dukrosClick = document.querySelector("#d");
const tevoClick = document.querySelector("#t");
const senelioClick = document.querySelector("#s");

dukrosClick.addEventListener("click", e => {
    e.stopPropagation(); //sustabdo teviniu elementu eventus(burbuliavima);
    e.preventDefault();
    console.log('Dukra');
});

senelioClick.addEventListener("click", e => {
    console.log('Senis Saltis');
});

tevoClick.addEventListener("click", e => {
    console.log('Tevelis');
});

const kvads = document.querySelectorAll(".kvadratas").forEach(k =>{
    k.addEventListener('click', e=>{
        e.stopPropagation(); 
        e.preventDefault();
        // k.style.borderColor = "blue";
        e.target.style.borderColor = "blue"; //paimame ta elementa kuriame ivyko eventas
    });
});
