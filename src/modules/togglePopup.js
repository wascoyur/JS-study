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
export default togglePopUp;