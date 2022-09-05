export default () => {
  const inputTel = document.querySelectorAll('input[type="tel"]');
  const im = Inputmask('+7 (999) 999-99-99');
  im.mask(inputTel);
};
