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
export default sliderF;