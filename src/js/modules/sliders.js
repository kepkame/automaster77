export default () => {
  // init Swiper:
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
};
