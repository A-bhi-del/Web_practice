function renderTodos() {
    const todos =
        JSON.parse(localStorage.getItem('todos'))
        || [];

    const div = document.querySelector('#message');

    div.textContent = "";

    for (let todoObj of todos) {

        const todo = document.createElement('div');

        const span = document.createElement('span');
        span.textContent = todoObj.text;

        if (todoObj.completed) {
            span.classList.add('completed');
        }

        const status = document.createElement('button');
        status.textContent = "Complete";

        const btn = document.createElement('button');
        btn.textContent = "Delete";

        status.onclick = function () {

            let todos =
                JSON.parse(localStorage.getItem('todos'))
                || [];

            todos = todos.map(item => {

                if (item.text === todoObj.text) {
                    return {
                        ...item,
                        completed: !item.completed
                    };
                }

                return item;
            });

            localStorage.setItem(
                'todos',
                JSON.stringify(todos)
            );

            renderTodos();
        };

        btn.onclick = function () {

            let todos =
                JSON.parse(localStorage.getItem('todos'))
                || [];

            todos = todos.filter(
                item => item.text !== todoObj.text
            );

            localStorage.setItem(
                'todos',
                JSON.stringify(todos)
            );

            renderTodos();
        };

        todo.appendChild(span);
        todo.appendChild(status);
        todo.appendChild(btn);

        div.appendChild(todo);
    }
}

function addData() {

    const input = document.querySelector('input');

    const todoText = input.value.trim();

    if (todoText === "") {
        alert("Please enter some text");
        return;
    }

    let todos =
        JSON.parse(localStorage.getItem('todos'))
        || [];

    todos.push({
        text: todoText,
        completed: false
    });

    localStorage.setItem(
        'todos',
        JSON.stringify(todos)
    );

    renderTodos();

    input.value = "";
}

renderTodos();