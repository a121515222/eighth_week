$(function() {
  console.log('Hello Bootstrap5');
});

//swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      992:{
        slidesPerView: 1,
        spaceBetween: 30,
      },
    }
});

var swiper = new Swiper(".commentSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768:{
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992:{
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});