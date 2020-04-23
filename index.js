window.addEventListener('DOMContentLoaded',function () {
  'use strict';
  function countTimer(deadline) {
    let timerHours = document.querySelector("#timer-hours"),
          timerMinutes = document.querySelector("#timer-minutes"),
          timerSeconds = document.querySelector("#timer-seconds");

    function getTimeRemaning() {
      let dateNow = new Date().getTime(),
        dateStop = new Date(deadline).getTime(),
        timeRemining = (dateStop - dateNow)/1000,
        seconds = Math.floor(timeRemining%60),
        minutes = Math.floor((timeRemining/60)%60),
        hourse = Math.floor((timeRemining/60/60)%24),
        day = Math.floor((timeRemining/60/60)/24);
      return{timeRemining, hourse, minutes, seconds};
    };

    function updateClock(params) {
      let timer = getTimeRemaning();
      timerHours.textContent = timer.hourse;
      timerMinutes.textContent = timer.minutes;
      timerSeconds.textContent = timer.seconds;

      if (timer.timeRemining > 0) {
        setTimeout(updateClock, 1000)
      }
    }
    updateClock();

  }
  // countTimer('01 july 2020');
  setInterval(countTimer("01 july 2020"), 1000);
})
