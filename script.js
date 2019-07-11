const submitButton1 = document.getElementById('submitButton1');
const submitButton2 = document.getElementById('submitButton2');
const inputField = document.getElementById('inputField');


submitButton1.onclick = () => {
    submitNewTask()
}

inputField.onkeydown = (e) => {
    console.log(e)
    if (e.keyCode === 13) {
        submitNewTask()
    }
};

const submitNewTask = () => {
    const newTask = inputField.value;
    addTaskToList(newTask);
    resetInputField(newTask);
}

const addTaskToList = (task) => {
    if (task !== '') {
        let listItem = document.createElement('li');
        listItem.innerHTML = task;
        document.getElementById('toDoList').appendChild(listItem);
    }
}

const resetInputField = (task) => {
    if (task !== '') {
        inputField.value = ''
        inputField.placeholder = 'Enter another task here...'
    }
}