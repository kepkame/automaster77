/* eslint-disable-next-line */
import 'focus-visible';
import polyfills from './libraries/polyfills';
// import svgxuse from './libraries/svgxuse';
import documentReady from './helpers/documentReady';
import lazyImages from './modules/lazyImages';
import nojs from './modules/nojs';
import menu from './modules/menu';
import forms from './modules/forms';
import modals from './modules/modals';
import copy from './modules/copy';
import sliders from './modules/sliders';
import inputMask from './modules/inputMask';
import uploadFile from './modules/uploadFile';
import map from './modules/map';
import youtube from './modules/youtube';

polyfills();
// svgxuse();

documentReady(() => {
  nojs();
  lazyImages();
  menu();
  forms();
  modals();
  copy();
  sliders();
  inputMask();
  uploadFile();
  map();
  youtube();
});
