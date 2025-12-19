// TIMER
let time = 25 * 60;
let timerInterval = null;
const timeDisplay = document.getElementById('time');

function updateTime() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timeDisplay.textContent =
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.getElementById('start').addEventListener('click', () => {
  if (timerInterval) return;

  timerInterval = setInterval(() => {
    if (time > 0) {
      time--;
      updateTime();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      alert('🎉 Focus session complete!');
    }
  }, 1000);
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(timerInterval);
  timerInterval = null;
  time = 25 * 60;
  updateTime();
});

// TASKS
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

document.getElementById('addTask').addEventListener('click', () => {
  if (taskInput.value.trim() === '') return;

  const li = document.createElement('li');
  li.textContent = taskInput.value;

  li.addEventListener('click', () => {
    li.classList.toggle('done');
  });

  const del = document.createElement('button');
  del.textContent = '✖';
  del.onclick = () => li.remove();

  li.appendChild(del);
  taskList.appendChild(li);

  taskInput.value = '';
});

updateTime();
