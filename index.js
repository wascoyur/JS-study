import countTimer from './src/modules/countTimer';
import toggleMenu from './src/modules/toggleMenu';
import togglePopUp from './src/modules/togglePopup';
import tabs from './src/modules/tabs';
import sliderF from './src/modules/sliderF';
import dataSet from './src/modules/dataSet';
import nonDigitRemove from './/src/modules/nonDigitRemove';
import calc from './src/modules/calc';


window.addEventListener('DOMContentLoaded', () => {
  countTimer('11 may 2020 22:00:00');

  // menu
  toggleMenu();

  // popup
  togglePopUp();

  // tabs
  tabs();

  // slider
  sliderF();

  dataSet();

  nonDigitRemove('input');

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
