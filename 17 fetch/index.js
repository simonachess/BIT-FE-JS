const ul = document.querySelector('ul');


document.querySelector('button').addEventListener('click', () => {
    fetch('http://in3.dev/vinted/api/brands/all')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach(brand => {
                //1
                const newLi = document.createElement('li');
                //2
                const brandText = document.createTextNode(brand.title);
                //3
                newLi.appendChild(brandText);
                //4
                //turime ul html doklumente
                //5
                ul.appendChild(newLi);

            });
        });
})