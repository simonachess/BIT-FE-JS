let lis = document.querySelector("li"); //taip suranda tik pirma elementa, bet ne visus li

let visiLis = document.querySelectorAll("li"); //randa visus li
console.log(visiLis);

for (i = 0; i < visiLis.length; i++) {
    // let visiLis = document.querySelectorAll("li");
    if (i % 3 === 0) {
        visiLis[i].style.color = "green"; //su i nurodome kelinta norime spalvinti is surastu elementu su querySelectorAll
    }
}
