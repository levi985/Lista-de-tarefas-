document.getElementById('add-task').addEventListener('click', addTask);

document.getElementById('new-task').addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        addTask();
    } else if (event.key === 'Enter' && event.shiftKey) {
        event.preventDefault();
        insertLineBreak();
    }
});

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText.length <= 150) {
        if (taskText) {
            const taskList = document.getElementById('task-list');

            const li = document.createElement('li');
            li.innerHTML = taskText.replace(/\n/g, '<br>');

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Remover';
            deleteButton.addEventListener('click', function() {
                taskList.removeChild(li);
            });

            li.appendChild(deleteButton);
            taskList.appendChild(li);

            taskInput.value = '';
        }
    } else {
        alert('A tarefa não pode exceder 150 caracteres.');
    }
}

function insertLineBreak() {
    const taskInput = document.getElementById('new-task');
    const cursorPosition = taskInput.selectionStart;
    if (taskInput.value.length < 150) {
        taskInput.value = taskInput.value.substring(0, cursorPosition) + '\n' + taskInput.value.substring(cursorPosition);
        taskInput.selectionEnd = cursorPosition + 1;
    } else {
        alert('A tarefa não pode exceder 150 caracteres.');
    }
}
