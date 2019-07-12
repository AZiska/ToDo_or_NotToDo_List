const toDoButton = document.getElementById('toDoButton');
const notToDoButton = document.getElementById('notToDoButton');
const deleteButton = document.getElementById('deleteButton');
const inputField = document.getElementById('inputField');


toDoButton.onclick = () => {
    addTaskToList('toDoButton')
}

notToDoButton.onclick = () => {
    addTaskToList('notToDoButton')
}

const removeTaskFromList = (e) => {
    e.parentNode.remove();
}

const addTaskToList = (button) => {
    const newToDo = inputField.value;
    if (button === 'toDoButton') {
        createListItem(newToDo, 'toDoButton');
        resetInputField(newToDo, 'toDoButton');
    } else if (button === 'notToDoButton') {
        createListItem(newToDo, 'notToDoButton');
        resetInputField(newToDo, 'notToDoButton');
    }
}

const createListItem = (newTask, button) => {
    // Frank: je controleert drie keer of de newTask leeg is
    // het kan ook 1 keer gechecked worden
    if (newTask !== '' && button === 'toDoButton') {
        let listItem = document.createElement('li');
        listItem.innerHTML = `<button class="deleteButton" onclick='removeTaskFromList(this)'>X</button>
        <p class="listItem">${newTask}</p>`;
        document.getElementById('toDoList').appendChild(listItem);
    } else if (newTask !== '' && button === 'notToDoButton') {
        let listItem = document.createElement('li');
        listItem.innerHTML = `<button class="deleteButton" onclick='removeTaskFromList(this)'>X</button>
        <p class="listItem">${newTask}</p>`;
        document.getElementById('notToDoList').appendChild(listItem);
    }
}


const resetInputField = (newTask) => {
    if (newTask !== '') {
        inputField.value = ''
        inputField.placeholder = 'Enter another task here...'
    }
}