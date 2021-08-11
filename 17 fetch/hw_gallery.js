const photos = document.querySelector('.photo-container');


document.querySelector('button').addEventListener('click', () => {
    fetch('https://picsum.photos/v2/list')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach(photo => {
                const html = `
                <a href='https://picsum.photos/id/${photo.id}/${photo.width}/${photo.height}' target="_blank" id="img"><img src='https://picsum.photos/id/${photo.id}/200/300'></img></a>
                <p class="author"><span>${photo.author}</span></p>
                
                `;

                const div = document.createElement('div');
                div.classList.add("card-small");
                div.innerHTML = html;

                photos.appendChild(div);

                document.querySelector('.btn-container').style.display = "none";

            });
        });
});



