const array = [3, 6, 10];
const object = {
    nulinis: 3,
    pirmas: 6,
    antras: 10
};

object.trecias = 22;
//objekte js isrusiuoja pagal abecele consoleje
console.log(object);
console.log('objekte nuskaityti reiksme per taska, pvz.: object.trecias: ', object.trecias);

array.push(22);
console.log(array.slice());

//objectams naudojam for in cikla, forEach naudojamas masyvui (array);

object.suma = function (a, b) { return a + b };
console.log('isveda objekte idetos funkcijos rezultata:', object.suma(5, 9));

console.log('-------------Objects----------------------');

console.log('-------------1----------------------');

//Sukurti tuščią objektą ir jam priskirti dvi savybes savybeA ir savybeB. Abi savybės lygios skaičiui 25
const object1 ={};
object1.savybeA = 25;
object1.savybeB = 25;
console.log(object1);

// Objektui pridėti savybę sumaAB, kuri yra lygi savybių sumai
console.log('-------------2----------------------');
object1.sumaAB = object1.savybeA + object1.savybeB;
console.log(object1);

//Objektui pridėti savybę objektasC, kuri yra lygi tuščiam objektui
console.log('-------------3----------------------');
object1.objectasC = {};
console.log(object1);

//Objekto savybei objektasC priskirti dvi savybes savybeA ir savybeB. Abi savybės lygios skaičiui 42
console.log('-------------4----------------------');
object1.objectasC.savybeA = 42;
object1.objectasC.savybeB = 42;
console.log(object1);


//Objekto savybei objektasC pridėti savybę sumaAB, kuri yra lygi objekto objektasC savybių savybeA ir savybeB sumai
console.log('-------------5----------------------');
object1.objectasC.sumaAB = object1.objectasC.savybeA + object1.objectasC.savybeB;
console.log(object1);

console.log('-------------Objecto savybes pvadinimas kintamajame----------------------');

let suo = 'bobikas';

object1[suo] = 55;
console.log(object1);
//Objektui pridėti savybes iš masyvo: const objektoSavybes = ['bobikas', 'sarikas', 'margis']; kurios lygios 0
console.log('-------------6----------------------');
const objektoSavybes = ['bobikas', 'sarikas', 'margis'];

// object1[objektoSavybes[0]] = 0;
// object1[objektoSavybes[1]] = 0;
// object1[objektoSavybes[2]] = 0;

objektoSavybes.forEach(element => {
    object1[element]= 0;
});


console.log(object1);