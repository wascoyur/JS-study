// window.addEventListener('DOMContentLoaded',function () {
  'use strict';
  let timerHours = document.querySelector("#timer-hours"),
          timerMinutes = document.querySelector("#timer-minutes"),
          timerSeconds = document.querySelector("#timer-seconds");

  function countTimer(deadline) {

    function getTimeRemaning() {
      let dateNow = new Date().getTime(),
        dateStop = new Date(deadline).getTime(),
        timeRemining = (dateStop - dateNow)/1000,
        seconds = Math.floor(timeRemining%60);
        seconds = seconds < 10? '0'+seconds : seconds;
        let minutes = Math.floor((timeRemining/60)%60);
        minutes = minutes <10 ? '0' + minutes : minutes;
        let hourse = Math.floor((timeRemining/60/60)%24);
        hourse = hourse < 10? '0' + hourse : hourse;
        let day = Math.floor((timeRemining/60/60)/24);
      return{timeRemining, hourse, minutes, seconds};
    };

    function updateClock(params) {
      let timer = getTimeRemaning(params);
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
  countTimer("23 april 2020 22:03:00");
// })
