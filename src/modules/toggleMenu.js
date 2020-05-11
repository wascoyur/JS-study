const toggleMenu = () => {
  const btnMenu = document.querySelector('.menu');
  const menu = document.querySelector('menu');
  const handlerMenu = () => {
    menu.classList.toggle('active-menu');
  };
  menu.addEventListener('click', (event) => {
    let { target } = event;
    target = target.closest('ul');
    if (target) {
      handlerMenu();
      return;
    }
    handlerMenu();
  });

  btnMenu.addEventListener('click', handlerMenu);
}
export default toggleMenu;