function countTimer(deadline) {
  const timerHours = document.querySelector('#timer-hours');
  const timerMinutes = document.querySelector('#timer-minutes');
  const timerSeconds = document.querySelector('#timer-seconds');
  function getTimeRemaning() {
    const dateNow = new Date().getTime();
    const dateStop = new Date(deadline).getTime();
    const timeRemining = (dateStop - dateNow) / 1000;
    let seconds = Math.floor(timeRemining % 60);
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    let minutes = Math.floor((timeRemining / 60) % 60);
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    let hourse = Math.floor((timeRemining / 60 / 60) % 24);
    hourse = hourse < 10 ? `0${hourse}` : hourse;
    return {
      timeRemining, hourse, minutes, seconds,
    };
  }

  function updateClock(params) {
    const timer = getTimeRemaning(params);
    timerHours.textContent = timer.hourse;
    timerMinutes.textContent = timer.minutes;
    timerSeconds.textContent = timer.seconds;
    if (timer.timeRemining <= 0) {
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
      clearInterval(start);
    }
  }
  let start = setInterval(updateClock, 1000, deadline);
}
export default countTimer;
