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
    const formData = new FormData();
    // formData.status
    console.log('formData.status: ', formData.textContent);
    const postData = (data) => {
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
        request.setRequestHeader('Content-Type', 'form/multipart');
        request.send(JSON.stringify(data));
      });
    };
    postData(formData)
      .then(statusMsg.textContent = successMsg)
      .catch((error) => {
        statusMsg.textContent = errorMsg;
        console.error(error);
      });
    // form.reset();
  });

  form3.addEventListener('submit', (event) => {
    event.preventDefault();
    form3.appendChild(statusMsg);
    const formData = new FormData(form3);
    // let body = {};
    // for (let val of formData.entries()) {
    //   body[val[0]] = val[1];
    // }
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
    postData(formData)
      .then(statusMsg.textContent = successMsg)
      .catch((error) => {
        statusMsg.textContent = errorMsg;
        console.error(error);
      });
    form3.reset();
  });
};
export default sendForm;