//main elements
const videoElement = document.getElementById('video');
const startBtn = document.getElementById('start_btn');
const stopBtn = document.getElementById('stop_btn');
const chooseBtn = document.getElementById('choose_btn');

startBtn.addEventListener('click', () => {
  startBtn.innerText = 'Recording';
  startBtn.classList.add('is-danger');
});
stopBtn.addEventListener('click', () => {
  startBtn.innerText = 'Start';
  startBtn.classList.remove('is-danger');
});
