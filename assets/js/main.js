// Swiper instances with unique names and adjusted pagination selectors
var homeSwiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".home-swiper-pagination", // Adjust selector if needed
    clickable: true,
  },
  loop: true,
});

var animeSwiper = new Swiper(".anime-slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".anime-swiper-pagination", // Adjust selector if needed
    clickable: true,
  },
  loop: true,
});

var actionSwiper = new Swiper(".action-slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".action-swiper-pagination", // Adjust selector if needed
    clickable: true,
  },
  loop: true,
});

var childSwiper = new Swiper(".child-slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".child-swiper-pagination", // Adjust selector if needed
    clickable: true,
  },
  loop: true,
});

var familySwiper = new Swiper(".family-slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".family-swiper-pagination", // Adjust selector if needed
    clickable: true,
  },
  loop: true,
});