const ul = document.querySelector('ul');


document.querySelector('button').addEventListener('click', () => {
    fetch('http://in3.dev/knygos/')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach(books => {
                const html = `
                <i class="super">${books.id}</i> 
                <b>${books.author}</b>
                <img src=${books.img}></img>
                <u style="color:red">Kaina: ${books.price} EUR</u>
                `;

                const li = document.createElement('li');
                li.innerHTML = html;
                ul.appendChild(li);


            });
        });
})