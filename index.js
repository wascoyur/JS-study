window.addEventListener('DOMContentLoaded',function () {
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
  countTimer("25 april 2020 22:00:00");
//menu
  const toggleMenu = ()=>{
    const btnMenu = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = document.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li')
    const handlerMenu = () =>{
      menu.classList.toggle('active-menu')
    }
  btnMenu.addEventListener('click', handlerMenu);
  closeBtn.addEventListener("click", handlerMenu);
  menuItems.forEach((el) =>{
    el.addEventListener("click", handlerMenu);
  })
  // for(let i = 0; i < menuItems.length; i++){
  //   menuItems[i].addEventListener("click", handlerMenu);
  //   }
  }
  toggleMenu();

  //popup
  const  togglePopUp = () =>{
    const popup = document.querySelector('.popup');
    const btnPopup = document.querySelectorAll('.popup-btn');
    const closePopup = document.querySelector('.popup-close');
    const poupContent = document.querySelector('.popup-content');
    btnPopup.forEach((el) =>{
      el.addEventListener('click', ()=>{
        popup.style.display = 'block';

      })
    })
    closePopup.addEventListener('click', () =>{
      popup.style.display='none';
    })
    popup.addEventListener('click', (event)=>{
      let target = event.target;
      target = target.closest('.popup-content')
      if(!target){
        popup.style.display = "none";
      }
    })
  }
  togglePopUp();

  //tabs

  const tabs =()=>{
    const serviceHeader = document.querySelector('.service-header');
    const tab = document.querySelectorAll('.service-header-tab');
    const tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = (index)=>{
      for(let i = 0; i < tabContent.length; i++){
        if(index === i){
          tabContent[i].classList.remove('d-none');
          tab[i].classList.add('active');
        }else{
          tab[i].classList.remove("active");
          tabContent[i].classList.add("d-none");
        }
      }
  }
    serviceHeader.addEventListener('click', (event)=>{
      let target = event.target;
      target = target.closest('.service-header-tab');
      if(target){
        tab.forEach((item, index) => {
          if (item === target) {
            toggleTabContent(index)
          }
        })
      }
    })

  }
  tabs();
})
