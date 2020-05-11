import countTimer from './src/modules/countTimer';

window.addEventListener('DOMContentLoaded', () => {
  countTimer('11 may 2020 22:00:00');
  // menu
  
  toggleMenu();

  // popup
  const togglePopUp = () => {
    const popup = document.querySelector('.popup');
    const btnPopup = document.querySelectorAll('.popup-btn');
    const closePopup = document.querySelector('.popup-close');
    btnPopup.forEach((el) => {
      el.addEventListener('click', () => {
        popup.style.display = 'block';
      });
    });
    closePopup.addEventListener('click', () => {
      popup.style.display = 'none';
    });
    popup.addEventListener('click', (event) => {
      let { target } = event;
      target = target.closest('.popup-content');
      if (!target) {
        popup.style.display = 'none';
      }
    });
  };
  togglePopUp();

  // tabs

  const tabs = () => {
    const serviceHeader = document.querySelector('.service-header');
    const tab = document.querySelectorAll('.service-header-tab');
    const tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tabContent[i].classList.remove('d-none');
          tab[i].classList.add('active');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };
    serviceHeader.addEventListener('click', (event) => {
      let { target } = event;
      target = target.closest('.service-header-tab');
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

  // slider
  const sliderF = () => {
    const slide = document.querySelectorAll('.portfolio-item');
    const parentOfDots = document.querySelector('.portfolio-dots');
    const slider = document.querySelector('.portfolio-content');
    addDots(slide);
    const dot = document.querySelectorAll('.dot');// TODO надо вставить точки до иницилизации этой строки.

    let currentSlide = 0;
    let interval;

    function addDots(array) {
      array.forEach((elrm, index) => {
        const newDot = document.createElement('li');
        newDot.classList.add('dot');
        parentOfDots.append(newDot);
      });
    }
    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };
    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const autoPlaySlide = (i) => {
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    };
    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide = () => {
      clearInterval(interval);
    };
    slider.addEventListener('click', (event) => {
      event.preventDefault();
      const { target } = event;

      if (!target.matches('.portfolio-btn, .dot')) return;
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if (target.matches('.next')) {
        currentSlide++;
        if (currentSlide >= slide.length) {
          currentSlide = 0;
        }
      } else if (target.matches('.prev')) {
        currentSlide--;
        if (currentSlide < 0) {
          currentSlide = slide.length - 1;
        }
      } else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', (event) => {
      if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
        stopSlide();
        // console.log('stopSlide: ');
      }
    });
    slider.addEventListener('mouseout', (event) => {
      if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
        startSlide();
        // console.log('startSlide: ');
      }
    });
    startSlide(1500);
  };
  sliderF();

  const dataSet = () => {
    const images = document.querySelectorAll('img.command__photo');
    let oldValuePhoto = 's';
    const photos = document.querySelector('.command');

    photos.addEventListener('mouseover', (event) => {
      if (event.target.matches('img.command__photo')) {
        images.forEach((elem) => {
          const attr = elem.getAttribute('src');
          if (event.target.getAttribute('src') === attr) {
            elem.addEventListener('mouseover', changer(elem));
          }
        });
      }
    });
    photos.addEventListener('mouseout', (event) => {
      if (event.target.matches('img.command__photo')) {
        images.forEach((elem) => {
          const attr = elem.getAttribute('src');
          if (event.target.getAttribute('src') === attr) {
            elem.addEventListener('mouseout', unchanger(elem));
          }
        });
      }
    });

    const changer = (elem) => {
      oldValuePhoto = elem.getAttribute('src');
      const newAttr = elem.getAttribute('data-img');
      elem.setAttribute('src', newAttr);
    };
    const unchanger = (elem) => {
      elem.setAttribute('src', oldValuePhoto);
    };
  };
  dataSet();

  const nonDigitRemove = (tag) => {
    console.log(tag);
    const inputs = document.querySelectorAll(tag);
    inputs.forEach((elem) => {
      elem.addEventListener('input', () => {
        inputs.forEach((element) => {
          element.value = element.value.replace(/e/g, '');
          calc();
        });
      });
    });
  };

  nonDigitRemove('input');

  function calc(price = 100) {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcDay = document.querySelector('.calc-day');
    const calcCount = document.querySelector('.calc-count');
    const totalValue = document.querySelector('#total');

    const countSum = () => {
      let total = 0;
      const cTSI = calcType.selectedIndex;
      const cTO = calcType.options[cTSI];
      let countValue = 1;
      let dayValue = 1;
      const typeValue = cTO.value;
      const squareValue = +calcSquare.value;

      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }

      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }

      if (typeValue && squareValue) {
        total = price * typeValue * squareValue * countValue * dayValue;
      } else {
        total = 0;
      }
      totalValue.textContent = Math.round(total);
    };
    countSum();
  }

  const sendForm = () => {
    const errorMsg = 'Что-то пошло не так';
    const loadMsg = 'Загрузка...';
    const successMsg = 'Спасибо, мы скоро с Вами свяжемся';

    const form = document.getElementById('form1');
    const form3 = document.getElementById('form3');
    const statusMsg = document.createElement('div');
    statusMsg.textContent = 'Тестове сообщение ';

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      form.appendChild(statusMsg);
      const formData = new FormData(form);
      let body = {};
      for (let val of formData.entries()) {
        body[val[0]] = val[1];
      }
      // postData(body, () => {
      //   statusMsg.textContent = successMsg;
      // },
      // (error) => {
      //   statusMsg.textContent = errorMsg;
      //   console.error(error);
      // });
      postData(body)
        .then(statusMsg.textContent = successMsg)
        .catch((error) => {
          statusMsg.textContent = errorMsg;
          console.error(error);
        });
      form.reset();
    });

    const postData = (req) => {
      return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
          statusMsg.textContent = loadMsg;
          if (request.readyState !== 4) {
            return;
          }
          if (request.status === 200) {
            statusMsg.textContent = successMsg;
            resolve();
          } else {
            statusMsg.textContent = errorMsg;
            reject();
          }
        });
        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(req));
      });

    };
    form3.addEventListener('submit', (event) => {
      event.preventDefault();
      form3.appendChild(statusMsg);
      const formData = new FormData(form3);
      let body = {};
      for (let val of formData.entries()) {
        body[val[0]] = val[1];
      }
      // postData(body,() => {
      //   statusMsg.textContent = successMsg;
      // },
      // (error) => {
      //   statusMsg.textContent = errorMsg;
      //   console.error(error);
      // },
      // );
      postData(body)
        .then(statusMsg.textContent = successMsg)
        .catch((error) => {
          statusMsg.textContent = errorMsg;
          console.error(error);
        });
      form3.reset();
    });
  };
  sendForm();
  const phones = document.querySelectorAll("input[type='tel']");
  const userNames = document.querySelectorAll("input[name='user_name']");
  const validationTel = (listPhones) => {
    listPhones.forEach((fieldTel) => {
      fieldTel.addEventListener('input', () => {
        console.log(fieldTel.value);
        fieldTel.value = fieldTel.value.match(/^[0-9 ()+-]+$/g);
      });
    });
  };
  const validationUserName = (listUserNames) => {
    listUserNames.forEach((fieldUname) => {
      fieldUname.addEventListener('input', () => {
        console.log(fieldUname.value);
        fieldUname.value = fieldUname.value.match(/[А-я]+$/g);
      });
    });
  };
  validationTel(phones);
  validationUserName(userNames);
});
