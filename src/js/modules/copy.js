export default () => {
  function copySuccessfully(btn) {
    if (btn.querySelector('.icon')) {
      const icon = btn.querySelector('.icon');
      const useElement = icon.querySelector('use');
      const spanElement = btn.querySelector('span');

      if (useElement) {
        const xlinkHref = useElement.getAttribute('xlink:href');
        const newHref = xlinkHref.replace('copy', 'check');
        useElement.setAttribute('xlink:href', newHref);
      }

      spanElement.innerText = 'Скопированы';
      btn.classList.add('btn--success');
    }
  }

  function copyText(item) {
    // Get the value of the data-copy attribute
    const text = item.getAttribute('data-copy');

    // Create a textarea element to copy the text to clipboard
    const textarea = document.createElement('textarea');
    textarea.value = text;

    // Add the textarea element to the page
    document.body.appendChild(textarea);

    // Select the text inside the textarea element
    textarea.select();

    // Copy the selected text to clipboard
    // document.execCommand('copy');
    navigator.clipboard.writeText(text);

    // Remove the textarea element from the page
    document.body.removeChild(textarea);

    copySuccessfully(item);
  }

  if (document.querySelector('.js-copy')) {
    const btns = document.querySelectorAll('.js-copy');

    // For each button, add a click event handler
    btns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();

        copyText(btn);
      });
    });
  }
};
