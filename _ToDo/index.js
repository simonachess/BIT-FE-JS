const toggleModal = () => {
    document.querySelector('.modal')
        .classList.toggle('modal-hidden');
};

document.querySelector('.create-new').addEventListener('click', toggleModal);

// document.querySelector('#saveBtn').addEventListener('click', toggleModal);

document.querySelector('#close-btn').addEventListener('click', toggleModal);

class createtedTask {

    static tasks = [];

    static createTask(title, description) {
        this.tasks.push(new createtedTask(title, description));
    }

    static renderTasks() {
        this.tasks.forEach(e => {
            e.render();
        });
    }

    static clearTasks() {
        this.tasks.forEach(e => document.querySelector('.created').removeChild(e.element));
        // document.querySelector('.created').remove();
    }

    constructor(title, description) {
        this.title = title;
        this.description = description;
        // this.createTaskId();
    }

    render() {
        this.createTaskElement();
        this.createTaskHtml();
    }

    createTaskElement() {
        this.element = document.createElement("div");
        document.querySelector(".created").appendChild(this.element);
    }
    createTaskHtml() {
        const html = `
        <div style="
        position:relative;
        display: flex; 
        flex-direction: row; 
        justify-content: space-between; 
        align-items: center; 
        background-color: #fbced4; 
        border: 1px solid grey; 
        border-radius: 10px; 
        padding: 5px 10px 5px 10px; 
        margin-bottom: 10px">
        <div style="margin-right: 20px">
        <p style="font-weight: bold; padding-bottom:5px">${this.title}</p>
        <p style="font-size: 14px">${this.description}</p>
        </div>
        <div style="position:absolute; right:0; cursor: pointer;">
        <img src="trash-icon.png" alt="delete" id="btnDelete" data-id=${this.id} style="padding: 10px;">
        </div>
        </div>
        `;
        this.element.innerHTML = html;
    }
    createTaskId() {
        this.id = Math.floor(Math.random() * 9000000) + 100000;
    }
}


createtedTask.createTask('pirma', 'išsivalyti dantis');

const titleTask = document.querySelector("#titleTask");
const descriptionTask = document.querySelector("#descriptionTask");
const btnSave = document.querySelector("#saveBtn");

btnSave.addEventListener('click', () => {
    createtedTask.clearTasks();
    createtedTask.createTask(titleTask.value, descriptionTask.value);
    createtedTask.renderTasks();
    titleTask.value = '';
    descriptionTask.value = '';
    toggleModal();

});


createtedTask.renderTasks();


