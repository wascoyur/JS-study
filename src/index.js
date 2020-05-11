import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopup';
import tabs from './modules/tabs';
import sliderF from './modules/sliderF';
import dataSet from './modules/dataSet';
import nonDigitRemove from './modules/nonDigitRemove';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import validationTel from './modules/validationTel';
import validationUserName from './modules/validationUserNames';



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
