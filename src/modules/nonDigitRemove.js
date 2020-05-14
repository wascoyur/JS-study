import calc from './calc';

const nonDigitRemove = (tag) => {
  const inputs = document.querySelectorAll(tag);
  inputs.forEach((elem) => {
    elem.addEventListener('input', () => {
      inputs.forEach((element) => {
        // element.value = element.value.replace(/e/g, '');
        calc();
      });
    });
  });
};
export default nonDigitRemove;