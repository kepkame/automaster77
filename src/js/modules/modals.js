export default () => {
  // Closes a modal window
  function closeModal(
    modal,
    selfСleaning = false,
    modalTitle = false,
    oldModalTitleText = false,
    newModalTitleText = false,
    modalHiddenTitle = false,
    modalHiddenTitleValue = false) {
    if (modal.classList.contains('modal--show')) {
      // Find the content and background elements inside the modal
      const content = modal.querySelector('.modal__content');
      const bg = modal.querySelector('.modal__bg');

      // Hide the content and background elements by adding CSS classes
      content.classList.add('modal__content--hidden');
      bg.classList.add('modal__bg--hidden');

      // After a short delay, remove the 'modal--show' class and any classes that
      // were added to hide the content and background elements
      setTimeout(() => {
        modal.classList.remove('modal--show');

        content.classList.remove('modal__content--show');
        content.classList.remove('modal__content--hidden');

        bg.classList.remove('modal__bg--show');
        bg.classList.remove('modal__bg--hidden');

        // Restore the default style of the <body> element
        document.body.removeAttribute('style');

        if (modalTitle) {
          modalTitle.innerText = oldModalTitleText;
          modalHiddenTitle.value = modalHiddenTitleValue;
        }
      }, 600);

      // If the 'selfСleaning' argument is true, remove the content of the
      // modal body element
      if (selfСleaning === true) {
        content.querySelector('.modal__body').innerHTML = '';
      }
    }
  }

  // Open a modal window
  function openModal(
    modal,
    selfСleaning = false,
    modalTitle = false,
    modalTitleText = false,
    newModalTitleText = false,
    modalHiddenTitle = false,
    modalHiddenTitleValue = false) {
    const content = modal.querySelector('.modal__content');
    const bg = modal.querySelector('.modal__bg');
    const btnClose = modal.querySelector('.modal__close');
    let windowBarWidth = '';

    // Adding classes to display a module
    modal.classList.add('modal--show');
    bg.classList.add('modal__bg--show');
    content.classList.add('modal__content--show');

    if (modalTitle) {
      modalTitle.innerText = `Записаться на ${newModalTitleText}`;
      modalHiddenTitle.value = `Запись на ${newModalTitleText}`;
    }

    // Preventing screen scrolling when a modal window is open
    if (!document.body.hasAttribute('style')) {
      windowBarWidth = String(window.innerWidth - document.documentElement.clientWidth);

      document.body.style.paddingRight = `${windowBarWidth}px`;
      document.body.style.overflow = 'hidden';
    } else {
      if (document.body.style.paddingRight !== '') {
        document.body.style.paddingRight = `${document.body.style.paddingRight}px`;
      }

      if (document.body.style.overflow !== '') {
        document.body.style.overflow = 'hidden';
      }
    }

    // Focus on the form field, if there is a field
    if (content.querySelector('input')) {
      content.querySelector('input:not([type="hidden"])').focus();
    }

    // Close when clicking on the cross
    btnClose.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal(modal, selfСleaning, modalTitle, modalTitleText, newModalTitleText, modalHiddenTitle, modalHiddenTitleValue);
    });

    // Close when you click on the background
    bg.addEventListener('click', () => {
      closeModal(modal, selfСleaning, modalTitle, modalTitleText, newModalTitleText, modalHiddenTitle, modalHiddenTitleValue);
    });

    // Close by pressing the Esc key
    document.addEventListener('keydown', (e) => {
      /* eslint-disable-next-line */
      const keyCode = e.keyCode;
      if (keyCode === 27) {
        closeModal(modal, selfСleaning, modalTitle, modalTitleText, newModalTitleText, modalHiddenTitle, modalHiddenTitleValue);
      }
    });
  }

  // Close mobile menu
  function mfpClose() {
    document.querySelector('#masthead .site-header__burger').classList.remove('active');
    document.querySelector('#masthead .site-header__burger').setAttribute('aria-label', 'Открыть меню');
    document.querySelector('#mfp-menu').classList.remove('mfp-menu--open');

    setTimeout(() => {
      document.querySelector('#mfp-menu').classList.remove('mfp-menu--show');
      document.body.removeAttribute('style');
    }, 300);
  }

  // Switching the modal window
  function swapModal(modal, isMenu = false) {
    if (isMenu) {
      mfpClose();
    } else if (document.querySelector('.modal--show')) {
      const oldModal = document.querySelector('.modal--show');
      closeModal(oldModal);
    }

    openModal(modal);
  }

  // A copy of the function code from the file  youtube.js
  // This function extracts the video ID from a YouTube link
  function getIdVideo(link) {
    const { href } = link;
    const index = href.lastIndexOf('/'); // Find the last index of '/' in href

    return href.substring(index + 1);
  }

  // This function generates a YouTube embed URL for a given video ID
  function generateURL(id) {
    const query = '?rel=0&showinfo=0&autoplay=1'; // URL parameters for autoplay

    return `https://www.youtube.com/embed/${id}${query}`; // Return the generated URL
  }

  // This function creates an iframe element for a given video ID
  function createIframe(id) {
    const iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('modal__video');

    return iframe;
  }

  // Route
  if (document.querySelector('#modal-video') && document.querySelector('.route')) {
    const modal = document.querySelector('#modal-video');
    const btn = document.querySelector('.route');

    btn.addEventListener('click', (e) => {
      e.preventDefault();

      const modalBody = modal.querySelector('.modal__body');
      const href = btn.getAttribute('data-href');
      const index = href.lastIndexOf('/');
      const id = href.substring(index + 1);
      const iframe = createIframe(id);

      openModal(modal, true);
      modalBody.appendChild(iframe);
    });
  }

  // Slider
  if (document.querySelector('.slider-coverflow__media')) {
    const arrSliders = document.querySelectorAll('.slider-coverflow__media');
    const modal = document.querySelector('#modal-video');

    arrSliders.forEach((slide) => {
      const link = slide.querySelector('.youtube-video__inner');

      slide.addEventListener('click', (e) => {
        e.preventDefault();

        const modalBody = modal.querySelector('.modal__body');
        const id = getIdVideo(link);
        const iframe = createIframe(id);

        openModal(modal, true);
        modalBody.appendChild(iframe);
      });
    });
  }

  // Navigators
  if (document.querySelector('.js-modal-navigators')) {
    const modal = document.querySelector('#modal-navigator');
    const btns = document.querySelectorAll('.js-modal-navigators');

    btns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();

        openModal(modal);
      });
    });
  }

  // Make an appointment
  if (document.querySelector('#modal-make-an-appointment')) {
    const btns = document.querySelectorAll('.js-btn-appointment');

    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const modal = document.querySelector('#modal-make-an-appointment');
        openModal(modal);
      });
    });
  }

  // Order polishing
  if (document.querySelector('.service-types__button')) {
    const btnsOrderPolishing = document.querySelectorAll('.service-types__button');
    const listServiceName = [
      ['Восстановительная (абразивная)', 'восстановительную полировку'],
      ['Мягкая (безабразивная, предпродажная)', 'мягкую полировку'],
      ['Финишная (антиголограммная)', 'финишную полировку'],
      ['Обработка защитным составом', 'обработку защитным составом'],
    ];

    btnsOrderPolishing.forEach((btn) => {
      btn.addEventListener('click', () => {
        const modal = document.querySelector('#modal-make-an-appointment');
        const modalTitle = modal.querySelector('.modal__title');
        const modalTitleText = modalTitle.innerText;
        const modalHiddenTitle = modal.querySelector('[name="form-estimate-service-name"]');
        const modalHiddenTitleValue = modalHiddenTitle.value;
        let newModalTitleText = btn.parentNode.querySelector('.service-types__name').innerText;

        for (let i = 0; i < listServiceName.length; i++) {
          if (newModalTitleText === listServiceName[i][0]) {
            newModalTitleText = listServiceName[i][1];
          }
        }

        openModal(modal, false, modalTitle, modalTitleText, newModalTitleText, modalHiddenTitle, modalHiddenTitleValue);
      });
    });
  }

  // Callback
  if (document.querySelector('#modal-callback')) {
    const btns = document.querySelectorAll('.js-btn-callback');

    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const modal = document.querySelector('#modal-callback');
        swapModal(modal, true);
      });
    });
  }
};
