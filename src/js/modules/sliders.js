export default () => {
  // init Swipers
  const sliderAbout = new Swiper('.slider-about__swiper', {
    loop: false,
    centeredSlides: true,
    spaceBetween: 16,
    speed: 400,
    grabCursor: true,
    slidesPerView: 'auto',
    watchSlidesProgress: true,

    // If we need pagination
    pagination: {
      el: '.slider-about__pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.slider-about__btn--next',
      prevEl: '.slider-about__btn--prev',
    },

    breakpoints: {
      // when window width is >= 576px
      410: {
        slidesPerView: 1,
        spaceBetween: 42,
        centeredSlides: true,
      },
    },
  });

  const sliderCoverflow = new Swiper('.slider-coverflow', {
    loop: true,
    spaceBetween: 15,
    speed: 800,
    grabCursor: true,
    slidesPerView: 'auto',
    watchSlidesProgress: true,

    effect: 'coverflow',
    coverflowEffect: {
      rotate: 60, // Slide rotate in degrees
      stretch: 0, // Stretch space between slides (in px)
      depth: 100, // Depth offset in px (slides translate in Z axis)
      modifier: 1, // Effect multipler
      slideShadows: true, // Enables slides shadows
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    // If we need pagination
    pagination: {
      el: '.slider-coverflow__pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.slider-coverflow__btn--next',
      prevEl: '.slider-coverflow__btn--prev',
    },

    breakpoints: {
      // when window width is >= 576px
      767: {
        slidesPerView: 2,
        spaceBetween: 0,
        centeredSlides: true,

        // If we need pagination
        pagination: {
          el: '.slider-coverflow__pagination',
          clickable: true,
        },

        // Navigation arrows
        navigation: {
          nextEl: '.slider-coverflow__btn--next',
          prevEl: '.slider-coverflow__btn--prev',
        },
      },
      // when window width is >= 992px
      1200: {
        slidesPerView: 2.74,
        spaceBetween: 0,
        centeredSlides: true,

        // coverflowEffect: {
        //   rotate: 48, // Slide rotate in degrees
        //   stretch: 0, // Stretch space between slides (in px)
        //   depth: 39, // Depth offset in px (slides translate in Z axis)
        //   modifier: 1, // Effect multipler
        //   slideShadows: true, // Enables slides shadows
        //   scale: 0.87,
        //   stretch: 0,
        // },

        coverflowEffect: {
          // rotate: 48, // Slide rotate in degrees
          // stretch: 0, // Stretch space between slides (in px)
          // depth: 39, // Depth offset in px (slides translate in Z axis)
          // modifier: 1, // Effect multipler
          // slideShadows: true, // Enables slides shadows
          // scale: 0.87,
          // stretch: 0,
          rotate: 50, // Slide rotate in degrees
          stretch: 0, // Stretch space between slides (in px)
          depth: 75, // Depth offset in px (slides translate in Z axis)
          modifier: 1, // Effect multipler
          slideShadows: true, // Enables slides shadows
          scale: 0.9,
          // stretch: 0,
        },
      },
    },
  });

  const sliderPhoneThumb = new Swiper('.slider-phone__thumb', {
    loop: true,
    speed: 400,
    grabCursor: true,
    watchSlidesProgress: true,
    loopedSlides: 2,
    slidesPerView: 1,
    slidesPerGroup: 1,
    // autoplay: {
    //   delay: 5000,
    // },

    // Navigation arrows
    navigation: {
      nextEl: '.slider-phone__control--next',
      prevEl: '.slider-phone__control--prev',
    },

    // thumbs: {
    //   swiper: sliderPhonePhotos,
    // },
  });

  const sliderPhonePhotos = new Swiper('.slider-phone__photos', {
    loop: true,
    speed: 400,
    grabCursor: true,
    watchSlidesProgress: true,
    loopedSlides: 2,
    slidesPerView: 1,
    slidesPerGroup: 1,
    // autoplay: {
    //   delay: 5000,
    // },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  sliderPhoneThumb.controller.control = sliderPhonePhotos;
  sliderPhonePhotos.controller.control = sliderPhoneThumb;

  // sliderPhonePhotos.controller.control = sliderPhoneThumb;
  // sliderPhoneThumb.controller.control = sliderPhonePhotos;

  const sliderElement = document.querySelector('.slider-double');
  let swiperSlider = {};
  let sliderType = window.innerWidth < 992 ? 'mobile' : 'desktop';

  function initSlider(type) {
    let sliderSettings = {};
    if (type === 'mobile') {
      sliderSettings = {
        loop: true,
        spaceBetween: 15,
        speed: 400,
        grabCursor: true,
        slidesPerView: 'auto',
        watchSlidesProgress: true,
        observer: true,
        resizeObserver: true,
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },

        pagination: {
          el: '.work-examples__pagination--mobile .work-examples__count',
          type: 'fraction',
          /* eslint-disable-next-line */
          renderFraction: function (currentClass, totalClass) {
            /* eslint-disable-next-line */
            return '<span class="work-examples__current ' + currentClass + '"></span> / <span class="work-examples__total ' + totalClass + '"></span>';
          },
        },

        // Navigation arrows
        navigation: {
          nextEl: '.work-examples__btn--next',
          prevEl: '.work-examples__btn--prev',
        },

        // описание настроек для мобильной вариации.
      };
    } else {
      sliderSettings = {
        loop: false,
        spaceBetween: 15,
        speed: 400,
        grabCursor: true,
        slidesPerView: 'auto',
        watchSlidesProgress: true,
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },

        pagination: {
          el: '.work-examples__pagination--desktop .work-examples__count',
          type: 'fraction',
          /* eslint-disable-next-line */
          renderFraction: function (currentClass, totalClass) {
            /* eslint-disable-next-line */
            return '<span class="work-examples__current ' + currentClass + '"></span> / <span class="work-examples__total ' + totalClass + '"></span>';
          },
        },

        // Navigation arrows
        navigation: {
          nextEl: '.work-examples__btn--next',
          prevEl: '.work-examples__btn--prev',
        },

        // описание настроек для десктопной вариации.
      };
    } // конец if-else
    // Проверяем, есть ли в объекте слайдера метод destroy, и если есть - вызываем его.
    if (swiperSlider.destroy && typeof swiperSlider.destroy === 'function') {
      swiperSlider.destroy(); // Возможно, если в круглые скобки передать true то будет лучше.
    }
    swiperSlider = new Swiper(sliderElement, sliderSettings);
  }

  initSlider(sliderType);

  window.addEventListener('resize', () => {
    if (window.innerWidth < 992 && sliderType === 'desktop') {
      sliderType = 'mobile';
      initSlider(sliderType);
    } else if (window.innerWidth >= 992 && sliderType === 'mobile') {
      sliderType = 'desktop';
      initSlider(sliderType);
    }
  });

  // ИЗНАЧАЛЬНЫЙ КОД СЛАЙДЕРА С ДВУМЯ СЛАЙДАМИ
  // const sliderDouble = new Swiper('.slider-double', {
  //   loop: true,
  //   spaceBetween: 15,
  //   speed: 400,
  //   grabCursor: true,
  //   slidesPerView: 'auto',
  //   watchSlidesProgress: true,
  //   observer: true,
  //   resizeObserver: true,
  //   keyboard: {
  //     enabled: true,
  //     onlyInViewport: true,
  //   },

  //   pagination: {
  //     el: '.work-examples__pagination--mobile .work-examples__count',
  //     type: 'fraction',
  //     /* eslint-disable-next-line */
  //     renderFraction: function (currentClass, totalClass) {
  //       /* eslint-disable-next-line */
  //       return '<span class="work-examples__current ' + currentClass + '"></span> / <span class="work-examples__total ' + totalClass + '"></span>';
  //     },
  //   },

  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.work-examples__btn--next',
  //     prevEl: '.work-examples__btn--prev',
  //   },

  //   breakpoints: {
  //     // when window width is >= 992px
  //     992: {
  //       loop: false,
  //       spaceBetween: 15,
  //       grabCursor: true,
  //       slidesPerView: 'auto',
  //       watchSlidesProgress: true,

  //       pagination: {
  //         el: '.work-examples__pagination--desktop .work-examples__count',
  //         type: 'fraction',
  //         /* eslint-disable-next-line */
  //         renderFraction: function (currentClass, totalClass) {
  //           /* eslint-disable-next-line */
  //           return '<span class="work-examples__current ' + currentClass + '"></span> / <span class="work-examples__total ' + totalClass + '"></span>';
  //         },
  //       },

  //       // Navigation arrows
  //       navigation: {
  //         nextEl: '.work-examples__btn--next',
  //         prevEl: '.work-examples__btn--prev',
  //       },
  //     },
  //   },
  // });
};
