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
export default tabs;