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
    if (taskArray === tasks.toDo) {
        htmlList = document.getElementById('toDoList')
    } else if (taskArray === tasks.notToDo) {
        htmlList = document.getElementById('notToDoList')
    } else {
        console.error('Unknown task type:', taskArray);
    };

    htmlList.innerHTML = ''
    for (let i = 0; i < taskArray.length; i++) {
        const listItem = document.createElement('li');
        htmlList.appendChild(listItem);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'deleteButton';
        deleteButton.innerText = 'X';
        deleteButton.onclick = () => {
            removeTaskFromList(taskArray, i);
            renderTasks(taskArray);
        }
        listItem.appendChild(deleteButton);

        const itemText = document.createElement('p');
        itemText.className = 'listItem';
        itemText.innerText = taskArray[i];
        listItem.appendChild(itemText);

    };
    resetInputField()
}

const resetInputField = () => {
    inputField.value = '';
}

const removeTaskFromList = (taskArray, index) => {
    taskArray.splice(index, 1);
}


renderTasks(tasks.toDo);
renderTasks(tasks.notToDo)