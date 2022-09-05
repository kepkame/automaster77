export default () => {
  const classNmae = 'no-js';
  const tagBody = document.body;

  if (tagBody.classList.contains(classNmae)) {
    tagBody.classList.remove(classNmae);
  }
};
