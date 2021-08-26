$(function () {
  console.log('Hello Bootstrap5');



  //swiper index page
  const mySwiper = document.querySelector('.mySwiper');
  if (mySwiper) {
  const  swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: 'row',
      loopFillGroupWithBlank: false,
      spaceBetween: 30,
      loop: false,
      breakpoints: {
        992: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
      }
    });
  }
  //index connent
  const commentSwiper = document.querySelector('.commentSwiper');
  if (commentSwiper) {
  const swiper = new Swiper(".commentSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    slidesPerColumn: 3,
    slidesPerColumnFill: 'column',
    loop: false,
    loopFillGroupWithBlank: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".fa-arrow-left",
      prevEl: ".fa-arrow-right",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
        spaceBetween: 0,
      },
      992: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
        spaceBetween: 0,
      },
    }
  });
}
//reservation page
const courseLevelSwiper = document.querySelector('.courseLevelSwiper');
  if (courseLevelSwiper) {
const swiper = new Swiper(".courseLevelSwiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerColumn: 3,
  slidesPerColumnFill: 'row',
  loopFillGroupWithBlank: false,
  spaceBetween: 0,
  loop: false,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerColumnFill: 'row',
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerColumnFill: 'row',
    },
  }
});
}
});


//first-experience
$('.first-experience').click(function (e) {
  $('.card-first-experience').toggleClass('active');
  if (document.body.clientWidth < 992) {
    $('.card-short-experience').toggleClass('none');
    $('.card-long-experience').toggleClass('none');
  }

});


const show = document.querySelector('.chooseCourse');
const basic = document.querySelector('#chooseCourse-base');
const intermediate = document.querySelector('#chooseCourse-intermediate');
const advanced = document.querySelector('#chooseCourse-advanced');
const courseLevel = document.querySelector('.courseLevel');
//getAttribute


//remove the hide class
function display(e) {
  e.preventDefault()
  show.classList.remove('hide')
  show.classList.add('display')
}
function wbasic() {
  courseLevel.innerHTML = "基礎"
}
function wintermediate() {
  courseLevel.innerHTML = "中階"
}
function wadvanced() {
  courseLevel.innerHTML = "進階"
}
basic.addEventListener('click', display, false)
basic.addEventListener('click', wbasic, false)
intermediate.addEventListener('click', display, false)
intermediate.addEventListener('click', wintermediate, false)
advanced.addEventListener('click', display, false)
advanced.addEventListener('click', wadvanced, false)