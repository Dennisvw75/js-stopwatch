'user strict';
// Button listeners
const startBTN = document.querySelector('.start');
const stopBTN = document.querySelector('.stop');
const resetBTN = document.querySelector('.reset');
// Inserting DOM elements
const minutesEL = document.querySelector('.minutes');
const secondsEL = document.querySelector('.seconds');
const milisecondsEL = document.querySelector('.miliseconds');

// Starting values
minutesEL.textContent = '00:';
secondsEL.textContent = '00:';
milisecondsEL.textContent = '000';

// GLobal trackers
let min = 0;
let sec = 0;
let mili = 0;

function startStopwatch() {
  mili += 10;
  if (mili === 1000) {
    sec++;
    mili = 0;
  }
  if (sec === 60) {
    min++;
    sec = 0;
  }
  if (min < 10) {
    minutesEL.textContent = '0' + min + ':';
  } else {
    minutesEL.textContent = min + ':';
  }

  if (sec < 10) {
    secondsEL.textContent = '0' + sec + ':';
  } else {
    secondsEL.textContent = sec + ':';
  }
  milisecondsEL.textContent = mili;
}

startBTN.addEventListener('click', function () {
  action = setInterval(startStopwatch, 10);
});

stopBTN.addEventListener('click', function () {
  clearInterval(action);
});

resetBTN.addEventListener('click', function () {
  minutesEL.textContent = '00:';
  secondsEL.textContent = '00:';
  milisecondsEL.textContent = '000';
});
