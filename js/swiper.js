const swiper = new swiper('.swiper-container', {
  slidesPerView: 6,
  spaceBetween: 35,
  slidesPerGroup: 1,
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // For responsive design
    320: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 6,
      slidesPerGroup: 1,
    },
  },
});

  