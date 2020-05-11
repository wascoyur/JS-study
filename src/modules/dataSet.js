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
export default dataSet;