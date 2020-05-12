/* eslint-disable import/newline-after-import */
/* eslint-disable import/first */
// var Promise = require('es6-promise').Promise;
import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
require('formdata-polyfill');


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
import validationMsg from './modules/validationMsg';

// import 'cross-browser-polyfill';


window.addEventListener('DOMContentLoaded', () => {
  countTimer('12 may 2020 22:00:00');

  // menu
  toggleMenu();

  // popup
  togglePopUp();

  // tabs
  tabs();

  // slider
  sliderF();

  calc();

  dataSet();

  nonDigitRemove('input');

  sendForm();
  const phones = document.querySelectorAll("input[type='tel']");
  const userNames = document.querySelectorAll("input[name='user_name']");
  const message = document.querySelector('#form2-message');
  validationTel(phones);
  validationUserName(userNames);
  validationMsg(message);
});
