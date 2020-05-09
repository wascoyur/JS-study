document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('cars');
  const output = document.querySelector('.list-group-item');

  select.addEventListener('change', () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    request.setRequestHeader('Content-type', 'application/json');
    request.send();
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        data.forEach(item => {
          if (select.value == String(item.completed)) {
            const {id, title, userId} = item;
            let el = document.createElement('div');
            el.classList.add('list-group-item');
            el.insertAdjacentText('afterbegin',`Id task: ${id}, Title: ${title}, Userid: ${userId}`);
            output.insertAdjacentElement('beforeend', el);
          }
        });
      } else {
        // output.insertAdjacentHTML(`Произошла ошибка`)
      }
    })
  });
});
