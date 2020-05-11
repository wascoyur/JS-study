import countTimer from './src/modules/countTimer';
import toggleMenu from './src/modules/toggleMenu';
import togglePopUp from './src/modules/togglePopup';
import tabs from './src/modules/tabs';
import sliderF from './src/modules/sliderF';
import dataSet from './src/modules/dataSet';
import nonDigitRemove from './/src/modules/nonDigitRemove';
import calc from './src/modules/calc';
import sendForm from './src/modules/sendForm';
import validationTel from './src/modules/validationTel';



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

  // calc();

  dataSet();

  nonDigitRemove('input');

  sendForm();

  validationTel(phones);
  validationUserName(userNames);
});
