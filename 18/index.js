// console.log('--------------------1-----------------------');

const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");

const input2 = document.querySelector("#input2");
const btn2 = document.querySelector("#btn2");

const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");

btn1.addEventListener('click', () => {
    console.log(input1.value);

});


btn2.addEventListener('click', () => {
    console.log(input2.value);
});


btn3.addEventListener('click', () => {
    console.log(input1.value.length + input2.value.length)
});

btn4.addEventListener('click', () => {
    input1.value = '';
    input2.value = '';
});


const masyvas = [];
btn5.addEventListener('click', () => {
    masyvas.push(input1.value, input2.value);
    console.log(masyvas);
});


const photos = document.querySelector('.photo-container');


let lowestPrice;
let title;
let type;

fetch('https://in3.dev/knygos/')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        lowestPrice = data[0].price;
        title = data[0].title;
        type = data[0].type;
        data.forEach(book => {
            console.log(book.price);
            console.log(book.title);
            if (book.price < lowestPrice) {
                lowestPrice = book.price;
                title = book.title;
                type = book.type;
                
            }
        });


        fetch('https://in3.dev/knygos/types/')
            .then(response => response.json())
            .then(data => {
                data.forEach(types =>{
                    if(types.id === type){
                        type = types.title;
                    }
                });
            console.log(lowestPrice, title, type);    
            });

        
    });

