// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 6,          // Show 6 product cards at a time
    spaceBetween: 20,          // Adjust the space between slides if needed
    slidesPerGroup: 1,         // Move one slide per click
    loop: false,               // Set to true if you want an endless loop
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  