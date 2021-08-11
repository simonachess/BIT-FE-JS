console.log('--------------------1-----------------------');

const input1 = document.querySelector("#uzd1_input");
const btn1 = document.querySelector("#uzd1_btn");

btn1.addEventListener('click', () => {
    console.log(input1.value);
    rezultatas.innerHTML = input1.value;
});


console.log('--------------------2-----------------------');

const select2 = document.querySelector("#paros_laikas");

select2.addEventListener('change', () => {
    console.log(select2.value);
    rezultatas.innerHTML = select2.value;
});


console.log('--------------------3-----------------------');
//surasti html elementa pagal atributa
const radio = document.querySelectorAll('[name=para]');

radio.forEach(element => {
    element.addEventListener('change', () => {
        console.log(element.value);
    });
});


console.log('--------------------4-----------------------');

const checked = document.querySelector("#pazymeta");

checked.addEventListener('change', e => {
    if (e.target.checked) {
        console.log("Pazymeta");
        rezultatas.innerHTML = "Pazymeta";
    } else {
        console.log("Nepazymeta");
        rezultatas.innerHTML = "Nepazymeta";
    }

});


console.log('--------------------5-----------------------');

const checked5 = document.querySelectorAll('[name=para5]');

function show6(tekstas) {
    rezultatas.innerHTML += tekstas + ' ';
}

checked5.forEach(element => {
    element.addEventListener('change', () => {

        checked5.forEach(elementAntras => {
            if (elementAntras.checked) {
                console.log(elementAntras.value);
                show6(elementAntras.value);
            }
        });
        console.log('-----------')
    });

});

console.log('--------------------6-----------------------');

const rezultatas = document.querySelector("h1");


console.log('--------------------7-----------------------');

//surasti html elementa pagal atributa
const radio7 = document.querySelectorAll('[name=para]');

radio7.forEach(element => {
    element.addEventListener('change', () => {
        const rez = document.createElement('h2');
        const container = document.querySelector("#span7");
        container.parentNode.insertBefore(rez, container);
        rez.innerText = element.value;
        console.log(element.value);
    });

});

console.log('--------------------8------nebaigtas-----------------');

let results = {};


results[0] = [input1.value];
results[1] = [select2.value];
results[2] = [select2.value];
results[3] = [select2.value];
results[4] = [select2.value];

console.log('astuntas: ', results)