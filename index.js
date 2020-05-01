window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  let timerHours = document.querySelector("#timer-hours"),
    timerMinutes = document.querySelector("#timer-minutes"),
    timerSeconds = document.querySelector("#timer-seconds");

  function countTimer(deadline) {
    function getTimeRemaning() {
      let dateNow = new Date().getTime(),
        dateStop = new Date(deadline).getTime(),
        timeRemining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemining % 60);
      seconds = seconds < 10 ? "0" + seconds : seconds;
      let minutes = Math.floor((timeRemining / 60) % 60);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      let hourse = Math.floor((timeRemining / 60 / 60) % 24);
      hourse = hourse < 10 ? "0" + hourse : hourse;
      let day = Math.floor(timeRemining / 60 / 60 / 24);
      return { timeRemining, hourse, minutes, seconds };
    }

    function updateClock(params) {
      let timer = getTimeRemaning(params);
      timerHours.textContent = timer.hourse;
      timerMinutes.textContent = timer.minutes;
      timerSeconds.textContent = timer.seconds;
      if (timer.timeRemining <= 0) {
        timerHours.textContent = "00";
        timerMinutes.textContent = "00";
        timerSeconds.textContent = "00";
        clearInterval(start);
      }
    }
    let start = setInterval(updateClock, 1000, deadline);
  }
  countTimer("01 may 2020 22:00:00");
  //menu
  const toggleMenu = () => {
    const btnMenu = document.querySelector(".menu");
    const menu = document.querySelector("menu");
    const closeBtn = document.querySelector(".close-btn");
    const menuItems = menu.querySelectorAll("ul>li");
    const handlerMenu = () => {
      menu.classList.toggle("active-menu");
    };
    menu.addEventListener('click', (event)=>{
      let target = event.target;
        target = target.closest('ul');
      if (target) {
        handlerMenu();
        return;
      }
      handlerMenu();
    })

    btnMenu.addEventListener("click", handlerMenu);
  };
  toggleMenu();

  //popup
  const togglePopUp = () => {
    const popup = document.querySelector(".popup");
    const btnPopup = document.querySelectorAll(".popup-btn");
    const closePopup = document.querySelector(".popup-close");
    const poupContent = document.querySelector(".popup-content");
    btnPopup.forEach((el) => {
      el.addEventListener("click", () => {
        popup.style.display = "block";
      });
    });
    closePopup.addEventListener("click", () => {
      popup.style.display = "none";
    });
    popup.addEventListener("click", (event) => {
      let target = event.target;
      target = target.closest(".popup-content");
      if (!target) {
        popup.style.display = "none";
      }
    });
  };
  togglePopUp();

  //tabs

  const tabs = () => {
    const serviceHeader = document.querySelector(".service-header");
    const tab = document.querySelectorAll(".service-header-tab");
    const tabContent = document.querySelectorAll(".service-tab");

    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tabContent[i].classList.remove("d-none");
          tab[i].classList.add("active");
        } else {
          tab[i].classList.remove("active");
          tabContent[i].classList.add("d-none");
        }
      }
    };
    serviceHeader.addEventListener("click", (event) => {
      let target = event.target;
      target = target.closest(".service-header-tab");
      if (target) {
        tab.forEach((item, index) => {
          if (item === target) {
            toggleTabContent(index);
          }
        });
      }
    });
  };
  tabs();

  //slider
  const slider =() =>{
    const slide = document.querySelectorAll('.portfolio-item');
    const parentOfDots = document.querySelector('.portfolio-dots');
    const slider = document.querySelector('.portfolio-content');
    addDots(slide);
    const dot = document.querySelectorAll('.dot');//TODO надо вставить точки до иницилизации этой строки.

    let currentSlide = 0;
    let interval;

    function addDots (array){
          array.forEach((elrm, index)=>{
              let newDot = document.createElement('li');
              newDot.classList.add('dot');
              parentOfDots.append(newDot);
          })
        }
    const nextSlide = (elem, index, strClass)=>{
      elem[index].classList.add(strClass);
    }
    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const autoPlaySlide = (i)=>{
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if(currentSlide >= slide.length ){
        currentSlide = 0
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, "dot-active");
    }
    const startSlide = (time = 3000)=>{
      interval = setInterval(autoPlaySlide, time);
    }
    const stopSlide = ()=>{
      clearInterval(interval);
    }
    slider.addEventListener('click', (event) =>{
      event.preventDefault();
      let target = event.target;

      if (!target.matches(".portfolio-btn, .dot"))return;
      prevSlide(slide, currentSlide, "portfolio-item-active");
      prevSlide(dot, currentSlide, "dot-active");

      if (target.matches(".next")) {
        currentSlide++;
        if (currentSlide >= slide.length) {
          currentSlide = 0;
        }
      } else if (target.matches(".prev")) {
        currentSlide--;
        if (currentSlide < 0) {
          currentSlide = slide.length -1;
        }
      } else if(target.matches('.dot')){
          dot.forEach((elem, index) =>{
            if (elem === target) {
                currentSlide = index;
            }
          })
      }
      nextSlide(slide, currentSlide, "portfolio-item-active");
      nextSlide(dot, currentSlide, "dot-active");
    })

    slider.addEventListener('mouseover', (event) =>{
      if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
        stopSlide();
        // console.log('stopSlide: ');
      }
    });
    slider.addEventListener('mouseout', (event) =>{
      if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
        startSlide();
        // console.log('startSlide: ');
      }
    });
    startSlide(1500);
  }
  slider();

  const dataSet = ()=>{
    const images = document.querySelectorAll("img.command__photo");
    let oldValuePhoto = 's';
    let targetObject = document.querySelector('.command');
    const photos = document.querySelector(".command");

    photos.addEventListener('mouseover',(event)=>{
      if (event.target.matches('img.command__photo')) {
        images.forEach((elem, index) =>{
          let attr = elem.getAttribute('src')
          if (event.target.getAttribute('src') == attr) {
            elem.addEventListener("mouseover", changer(elem));
          }
        })
      }
    })
    photos.addEventListener('mouseout',(event)=>{
      if (event.target.matches('img.command__photo')) {
        images.forEach((elem) =>{
          let attr = elem.getAttribute("src");
          if (event.target.getAttribute("src") == attr) {
            elem.addEventListener("mouseout", unchanger(elem));
          }
        })
      }
    })

    const changer = (elem)=>{
      oldValuePhoto = elem.getAttribute('src')
      let newAttr = elem.getAttribute('data-img');
      elem.setAttribute('src', newAttr);
    }
    const unchanger = (elem)=>{
      // oldValuePhoto = elem.getAttribute('src')
      let newAttr = elem.getAttribute('data-img');
      elem.setAttribute('src', oldValuePhoto);
    }
  }

  dataSet();

});
