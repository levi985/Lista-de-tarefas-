function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskList = document.getElementById('task-list');
        const listItem = document.createElement('li');
        listItem.innerHTML = `${taskText} <button onclick="removeTask(this)">Remover</button>`;
        listItem.onclick = () => listItem.classList.toggle('completed');
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

function removeTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
}
