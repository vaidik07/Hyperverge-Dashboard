let timer;
let isRunning = false;
let isPaused = false;
let remainingTime = 25 * 60 * 1000; // 25 minutes in milliseconds

const timerDisplay = document.getElementById('pomodoro-timer');
const startButton = document.getElementById('start-timer');
const pauseButton = document.getElementById('pause-timer');
const resetButton = document.getElementById('reset-timer');

function updateDisplay() {
  const minutes = Math.floor(remainingTime / 60000);
  const seconds = Math.floor((remainingTime % 60000) / 1000);
  timerDisplay.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (!isRunning && !isPaused) {
    isRunning = true;
    timer = setInterval(() => {
      if (remainingTime > 0) {
        remainingTime -= 1000;
        updateDisplay();
      } else {
        clearInterval(timer);
        isRunning = false;
        alert('Time for a break!');
      }
    }, 1000);
  } else if (isPaused) {
    isPaused = false;
    isRunning = true;
    timer = setInterval(() => {
      if (remainingTime > 0) {
        remainingTime -= 1000;
        updateDisplay();
      } else {
        clearInterval(timer);
        isRunning = false;
        alert('Time for a break!');
      }
    }, 1000);
  }
}

function pauseTimer() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
    isPaused = true;
  }
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  isPaused = false;
  remainingTime = 25 * 60 * 1000;
  updateDisplay();
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// Initialize the display
updateDisplay();