const toggleModal = () => {
    document.querySelector('.modal')
        .classList.toggle('modal-hidden');
};

document.querySelector('.create-new').addEventListener('click', toggleModal);
document.querySelector('#close-btn').addEventListener('click', toggleModal);

class State {
    static created = 0;
    static doing = 1;
    static done = 2;
}

class createtedTask {

    static tasks = [];

    static start() {
        this.btnNew();

        //laikinai
        // createtedTask.createTask('pirma', 'išsivalyti dantis');
        this.load();

    }

    static createTask(title, description, state) {
        this.clearTasks()
        this.tasks.push(new createtedTask(title, description, state));
        this.renderTasks();
        this.save();

    }

    static renderTasks() {
        this.tasks.forEach(e => {
            e.render();
        });
    }

    static clearTasks() {

        this.tasks.forEach(e => {
            let parent = e.element.parentNode;
            if (parent) {
                parent.removeChild(e.element);
            }

        });
    }

    static btnNew() {

        const titleTask = document.querySelector("#titleTask");
        const descriptionTask = document.querySelector("#descriptionTask");
        const btnSave = document.querySelector("#saveBtn");
        const textArea = document.querySelector("#descriptionTask")
        //todo get focus on load modal box

        btnSave.addEventListener('click', () => {

            this.createTask(titleTask.value, descriptionTask.value);
            titleTask.value = '';
            descriptionTask.value = '';
            toggleModal();

        });

        textArea.addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                btnSave.click();
            }
        })
    }

    static deleteTask(id) {

        this.tasks.forEach((e, i) => {
            if (id === e.id) {
                this.clearTasks();
                this.tasks.splice(i, 1);
                this.renderTasks();
            };
        });
        this.save();
    }

    static save() {
        const data = [];
        this.tasks.forEach(e => {
            data.push({
                title: e.title,
                description: e.description,
                state: e.state,
            })
        })
        console.log(data);

        localStorage.setItem('tasksApp', JSON.stringify(data));
    }

    static load() {
        if (null === localStorage.getItem('tasksApp')) {
            localStorage.setItem('tasksApp', JSON.stringify([]));
        }
        JSON.parse(localStorage.getItem('tasksApp')).forEach(e => {
            this.createTask(e.title, e.description, e.state);
        });
    }

    static moveTask(id) {
        this.tasks.forEach(task => {
            if (id === task.id) {
                const taskElement = document.getElementById(id);
                if (task.state === State.created) {
                    task.state = State.doing;
                    console.log(task.state);
                    document.querySelector(".doing").appendChild(taskElement);
                    this.save();
                }
                else if (task.state === State.doing) {
                    task.state = State.done;
                    document.querySelector(".done").appendChild(taskElement);
                    this.save();
                }
            };
        })
    }



    constructor(title, description, state = State.created) {
        this.title = title;
        this.description = description;
        this.state = state;
        this.createTaskId();
    }

    render() {
        this.createTaskElement();
        this.createTaskHtml();
        this.addDeleteButtonListener();
        this.addDblClikListener();

    }
    //to do patikrinti kur ipaiso divus
    createTaskElement() {
        this.element = document.createElement("div");
        this.element.setAttribute('id', this.id);
        // document.querySelector(".created").appendChild(this.element);

        if (this.state === State.created) {
            document.querySelector(".created").appendChild(this.element);
        } else if (this.state === State.doing) {
            document.querySelector(".doing").appendChild(this.element);
        } else if (this.state === State.done) {
            document.querySelector(".done").appendChild(this.element);
        }


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
        margin-bottom: 10px" class="createdTask">
        <div style="margin-right: 20px">
        <p style="font-weight: bold; padding-bottom:5px">${this.title}</p>
        <p style="font-size: 14px">${this.description}</p>
        </div>
        <div style="position:absolute; right:0; cursor: pointer;">
        <img src="trash-icon.png" alt="delete" id="btnDelete-${this.id}" style="padding: 10px;">
        </div>
        </div>
        `;
        this.element.innerHTML = html;
    }
    createTaskId() {
        this.id = Math.floor(Math.random() * 9000000) + 100000;
    }
    addDeleteButtonListener() {
        this.element.querySelector(`#btnDelete-${this.id}`).addEventListener('click', () =>
            this.constructor.deleteTask(this.id))
    }
    addDblClikListener() {
        this.element.addEventListener('dblclick', () => {
            this.constructor.moveTask(this.id)
        })

    }


}


createtedTask.start();
