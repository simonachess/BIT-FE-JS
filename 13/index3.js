for (i = 0; i < 10; i++) {
    let newDiv = document.createElement("div");
    let hello = document.createTextNode("Hello!");
    let body = document.querySelector("body");
    body.appendChild(newDiv);
    newDiv.appendChild(hello);
        

    if (i % 3 === 0) {
        newDiv.style.color = "green";
        newDiv.style.backgroundColor = "lightgrey";
        newDiv.style.fontSize= "x-large";
        newDiv.style.padding = "20px";
    }
    else{
        newDiv.style.border = "5px solid purple";
        newDiv.style.borderRadius = "25px";
        newDiv.style.padding = "10px";
    }
}

//klases priskyrimas

let h1 = document.querySelector(".old"); //susirandam h1 su klase old
h1.classList.add('bla'); //cia nereikia tasko rasyti, tik pavadinima klases

h1.classList.remove('old'); //istrina klase