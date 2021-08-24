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