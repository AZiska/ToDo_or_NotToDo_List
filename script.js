const submitButton1 = document.getElementById('submitButton1');
const submitButton2 = document.getElementById('submitButton2');
const inputField = document.getElementById('inputField');


submitButton1.onclick = () => {
    submitNewTask('button1')
}

submitButton2.onclick = () => {
    submitNewTask('button2')
}

// inputField.onkeydown = (e) => {
//     console.log(e)
//     if (e.keyCode === 13) {
//         submitNewTask(button1)
//     }
// };

const submitNewTask = (button) => {
    const newToDo = inputField.value;
    if(button === 'button1'){
    addTaskToList(newToDo, 'button1');
    resetInputField(newToDo, 'button1');
    } else if (button === 'button2'){
        addTaskToList(newToDo, 'button2');
        resetInputField(newToDo, 'button2');
        } 
}

const addTaskToList = (newTask, button) => {
    if (newTask !== '' && button === 'button1') {
        let listItem = document.createElement('li');
        listItem.innerHTML = newTask;
        document.getElementById('toDoList').appendChild(listItem);
    } else if (newTask !== '' && button === 'button2') {
        let listItem = document.createElement('li');
        listItem.innerHTML = newTask;
        document.getElementById('notToDoList').appendChild(listItem);
    }
}

const resetInputField = (newTask) => {
    if (newTask !== '') {
        inputField.value = ''
        inputField.placeholder = 'Enter another task here...'
    }
}