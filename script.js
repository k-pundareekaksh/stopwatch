let timerDisplay = document.getElementById('timer');
let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let resetBtn = document.getElementById('reset');

let timerInterval;
let running = false;
let elapsedTime = 0;

function formatTime(ms) {
  let totalSeconds = Math.floor(ms / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  return (
    String(hours).padStart(2, '0') + ' hr ' +
    String(minutes).padStart(2, '0') + ' m ' +
    String(seconds).padStart(2, '0') + ' s'
  );
}

function startTimer() {
  if (!running) {
    let startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      timerDisplay.innerHTML = formatTime(elapsedTime);
    }, 1000);
    running = true;
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  running = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  running = false;
  elapsedTime = 0;
  timerDisplay.innerHTML = '00 hr 00 m 00 s';
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
