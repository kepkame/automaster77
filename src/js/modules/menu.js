export default () => {
  // Mobile menu
  const header = document.querySelector('#masthead');
  const btnBurger = header.querySelector('.site-header__burger');
  const mfp = document.querySelector('#mfp-menu');
  const mfpBg = document.querySelector('#mfp-menu-bg');
  const itemsHasChildren = mfp.querySelectorAll('.menu-item-has-children > .nav-top-link');

  function mfpOpen(btn, popup) {
    btn.classList.add('active');
    const windowWidth = window.innerWidth - document.documentElement.clientWidth;
    const px = 'px';
    document.body.style.paddingRight = windowWidth + px;
    document.body.style.overflow = 'hidden';
    popup.classList.add('mfp-menu--show');
    btnBurger.setAttribute('aria-label', 'Закрыть меню');
    setTimeout(() => {
      popup.classList.add('mfp-menu--open');
    }, 10);
  }

  function mfpClose(btn, popup) {
    btn.classList.remove('active');
    popup.classList.remove('mfp-menu--open');
    btnBurger.setAttribute('aria-label', 'Открыть меню');
    setTimeout(() => {
      popup.classList.remove('mfp-menu--show');
      document.body.removeAttribute('style');
    }, 300);
  }

  function openSubmenu(parent) {
    parent.classList.toggle('show');
    setTimeout(() => {
      parent.classList.toggle('open');
    }, 10);
  }

  btnBurger.addEventListener('click', () => {
    if (!btnBurger.classList.contains('active')) {
      mfpOpen(btnBurger, mfp);
    } else {
      mfpClose(btnBurger, mfp);
    }
  });

  mfpBg.addEventListener('click', () => {
    mfpClose(btnBurger, mfp);
  });

  document.addEventListener('keydown', (e) => {
    const { keyCode } = e.keyCode;
    // document.getElementById("result").innerHTML = "Key Code: "+keyCode+"<br/> Key: "+e.key+"<br/>";
    if (keyCode === 27 && mfp.classList.contains('mfp-menu--open')) {
      mfpClose(btnBurger, mfp);
    }
  });

  // Open/close submenu in .mfp-menu
  itemsHasChildren.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const itemParent = item.parentNode;
      openSubmenu(itemParent);
    });
  });
};
