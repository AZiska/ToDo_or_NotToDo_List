const toDoButton = document.getElementById('toDoButton');
const notToDoButton = document.getElementById('notToDoButton');
const deleteButton = document.getElementById('deleteButton');
const inputField = document.getElementById('inputField');

const tasks = {
    toDo: ['Read a good book'],
    notToDo: ['Read a boring book']
};

toDoButton.onclick = () => {
    const newTask = inputField.value;
    if (newTask !== '') {
        tasks.toDo.push(newTask);
        renderTasks(tasks.toDo);
    }
}

notToDoButton.onclick = () => {
    const newTask = inputField.value;
    if (newTask !== '') {
        tasks.notToDo.push(newTask);
        renderTasks(tasks.notToDo);
    }
}

const renderTasks = (taskArray) => {
    let htmlList;
    let startIndex;
    if (taskArray === tasks.toDo) {
        htmlList = document.getElementById('toDoList')
        startIndex = tasks.toDo.length - 1 ;
    } else if (taskArray === tasks.notToDo) {
        htmlList = document.getElementById('notToDoList')
        startIndex = tasks.notToDo.length - 1 ;
    } else {
        console.error('Unknown task type:', taskArray);
    };

    for (let i = startIndex; i < taskArray.length; i++) {
        let listItem = document.createElement('li');
        listItem.innerHTML = `<button class="deleteButton" onclick='removeTaskFromList(this)'>X</button>
            <p class="listItem">${taskArray[i]}</p>`;
        htmlList.appendChild(listItem);
    };
    resetInputField()
}

const resetInputField = () => {
    inputField.value = '';
    // inputField.placeholder = 'Enter another task here...';
}

const removeTaskFromList = (e) => {
    e.parentNode.remove();
}


renderTasks(tasks.toDo);
renderTasks(tasks.notToDo)