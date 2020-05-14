/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-destructuring */
const sendForm = () => {
  const errorMsg = 'Что-то пошло не так';
  const loadMsg = 'Загрузка...';
  const successMsg = 'Спасибо, мы скоро с Вами свяжемся';

  const form = document.getElementById('form1');
  const form2 = document.getElementById('form2');
  const form3 = document.getElementById('form3');
  const statusMsg = document.createElement('div');
  statusMsg.classList.add('status-message');

  const removeStatusMessage = () => {
    const status = document.querySelector('.status-message');
    if (!status) return;
    setTimeout(() => {
      status.remove();
    }, 5000);
  };
  const postData = (data) => fetch('/server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'form/multipart',
    },
    body: (data),
    // mode: 'no-cors',
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.appendChild(statusMsg);
    const formData = new FormData(form);
    const body = {};
    for (const val of formData.entries()) {
      body[val[0]] = val[1];
    }
    console.log(body);
    formData.forEach((el) => {
      console.log(el);
    });
    postData(formData)
      .then(statusMsg.textContent = successMsg)
      .catch((error) => {
        statusMsg.textContent = errorMsg;
        console.error(error);
      });
    form.reset();
  });

  form3.addEventListener('submit', (event) => {
    event.preventDefault();
    form3.appendChild(statusMsg);
    statusMsg.style.cssText = `font-size: 2rem;
            color: #fff; `;
    const formData = new FormData(form3);

    postData(formData)
      .then(statusMsg.textContent = successMsg)
      .catch((error) => {
        statusMsg.textContent = errorMsg;
        console.error(error);
      });
    form3.reset();
    removeStatusMessage();
  });

  form2.addEventListener('submit', (event) => {
    event.preventDefault();
    form2.appendChild(statusMsg);
    statusMsg.style.cssText = `font-size: 2rem;
            color: #fff; `;
    const formData = new FormData(form2);

    postData(formData)
      .then(statusMsg.textContent = successMsg)
      .catch((error) => {
        statusMsg.textContent = errorMsg;
        console.error(error);
      });
    form2.reset();
    removeStatusMessage();
  });
};
export default sendForm;