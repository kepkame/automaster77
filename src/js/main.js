/* eslint-disable-next-line */
import 'focus-visible';
import polyfills from './libraries/polyfills';
// import svgxuse from './libraries/svgxuse';
import documentReady from './helpers/documentReady';
import lazyImages from './modules/lazyImages';
import nojs from './modules/nojs';
import menu from './modules/menu';
import sliders from './modules/sliders';
import inputMask from './modules/inputMask';
import uploadFile from './modules/uploadFile';
import map from './modules/map';

polyfills();
// svgxuse();

documentReady(() => {
  nojs();
  lazyImages();
  menu();
  sliders();
  inputMask();
  uploadFile();
  map();
});
