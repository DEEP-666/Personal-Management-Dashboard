// Add Task
document.getElementById('add-task-btn').addEventListener('click', function () {
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  if (taskInput.value.trim() !== "") {
      const newTask = document.createElement('li');
      newTask.textContent = taskInput.value;
      taskList.appendChild(newTask);
      taskInput.value = '';
  }
});

// for --> deleting function
document.getElementById('delete-task-btn').addEventListener('click', function () {
  const taskList = document.getElementById('task-list');
  if (taskList.lastChild) {
      taskList.removeChild(taskList.lastChild);
  }
});


document.getElementById('save-note-btn').addEventListener('click', function () {
  const noteInput = document.getElementById('note-input');
  const noteList = document.getElementById('note-list');
  if (noteInput.value.trim() !== "") {
      const newNote = document.createElement('li');
      newNote.textContent = noteInput.value;
      noteList.appendChild(newNote);
      noteInput.value = '';
  }
});

// for --> deleting function
document.getElementById('delete-note-btn').addEventListener('click', function () {
  const noteList = document.getElementById('note-list');
  if (noteList.lastChild) {
      noteList.removeChild(noteList.lastChild);
  }
});


document.getElementById('add-goal-btn').addEventListener('click', function () {
  const goalInput = document.getElementById('goal-input');
  const goalList = document.getElementById('goal-list');
  if (goalInput.value.trim() !== "") {
      const newGoal = document.createElement('li');
      newGoal.textContent = goalInput.value;
      goalList.appendChild(newGoal);
      goalInput.value = '';
  }
});

// for --> deleting function
document.getElementById('delete-goal-btn').addEventListener('click', function () {
  const goalList = document.getElementById('goal-list');
  if (goalList.lastChild) {
      goalList.removeChild(goalList.lastChild);
  }
});

  // You can later add functionality for fetching weather from an API, etc.
  