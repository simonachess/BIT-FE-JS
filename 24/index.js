const h1=document.querySelector('h1');

h1.dataset.darDaugiau = 103;

console.log(h1.dataset); //.dataset pasiekti uzsaugota informacija tage

console.log(h1.dataset.rowNumber); //pasiekti rowNumberi - bruksniukai keiciasi i camelCase

console.log(h1.dataset.darDaugiau);