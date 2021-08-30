"use strict";

$(function () {
  console.log('Hello Bootstrap5'); //swiper index page

  var mySwiper = document.querySelector('.mySwiper');

  if (mySwiper) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      slidesPerGroup: 1,
      grid: {
        rows: 2,
        //slidesPerColumn: 2, swiper6寫法
        fill: 'row' //slidesPerColumnFill: 'row',  swiper6寫法

      },
      loopFillGroupWithBlank: false,
      spaceBetween: 30,
      loop: false,
      breakpoints: {
        992: {
          slidesPerView: 1.3,
          grid: {
            rows: 1,
            //slidesPerColumn: 1, swiper6寫法
            fill: 'row' //slidesPerColumnFill: 'row',  swiper6寫法

          }
        }
      }
    });
  } //index connent


  var commentSwiper = document.querySelector('.commentSwiper');

  if (commentSwiper) {
    var _swiper = new Swiper(".commentSwiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
      grid: {
        rows: 3,
        //slidesPerColumn: 3,  swiper6寫法
        fill: 'row' //slidesPerColumnFill: 'column',  swiper6寫法

      },
      loop: false,
      loopFillGroupWithBlank: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".fa-arrow-left",
        prevEl: ".fa-arrow-right"
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          grid: {
            rows: 2,
            //slidesPerColumn: 2,  swiper6寫法
            fill: 'row' //slidesPerColumnFill: 'row',  swiper6寫法

          },
          spaceBetween: 0
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 0
        }
      }
    });
  } //reservation page


  var courseLevelSwiper = document.querySelector('.courseLevelSwiper');

  if (courseLevelSwiper) {
    var _swiper2 = new Swiper(".courseLevelSwiper", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 3,
        // slidesPerColumn: 3,swiper6寫法
        fill: 'row' // slidesPerColumnFill: 'row',swiper6寫法

      },
      loopFillGroupWithBlank: false,
      spaceBetween: 30,
      loop: false,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          grid: {
            rows: 1,
            fill: 'row'
          }
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });
  } //CourseDescription-teacher


  var swiperCourseDecription = document.querySelector('.swiperCourseDecription');

  if (swiperCourseDecription) {
    var _swiper3 = new Swiper(".swiperCourseDecription", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 4,
        fill: 'row'
      },
      loopFillGroupWithBlank: false,
      spaceBetween: 70,
      loop: false,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          grid: {
            rows: 1,
            fill: 'row'
          }
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }
    });
  } //recomedCourseSwiper


  var recomedCourseSwiper = document.querySelector('.recomedCourseSwiper');

  if (recomedCourseSwiper) {
    var _swiper4 = new Swiper(".recomedCourseSwiper", {
      slidesPerView: 1.3,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
        fill: 'row'
      },
      loopFillGroupWithBlank: false,
      spaceBetween: 30,
      loop: false,
      breakpoints: {
        768: {
          slidesPerView: 2,
          grid: {
            rows: 1,
            fill: 'row'
          }
        },
        992: {
          slidesPerView: 4
        }
      }
    });
  }
}); //first-experience

$('.first-experience').click(function (e) {
  $('.card-first-experience').toggleClass('active');

  if (document.body.clientWidth < 992) {
    $('.card-short-experience').toggleClass('none');
    $('.card-long-experience').toggleClass('none');
  }
}); //vanillajs-datepicker

var elem = document.querySelector('input[name="datepicker"]');
var datepicker = new Datepicker(elem, {
  nextArrow: '>',
  prevArrow: '<',
  buttonClass: 'btn primary'
});
var show = document.querySelector('.chooseCourse');
var basic = document.querySelector('#chooseCourse-base');
var intermediate = document.querySelector('#chooseCourse-intermediate');
var advanced = document.querySelector('#chooseCourse-advanced');
var courseLevel = document.querySelector('.courseLevel'); //getAttribute
//remove the hide class

function display(e) {
  e.preventDefault();
  show.classList.remove('hide');
  show.classList.add('display');
}

function wbasic() {
  courseLevel.innerHTML = "基礎";
}

function wintermediate() {
  courseLevel.innerHTML = "中階";
}

function wadvanced() {
  courseLevel.innerHTML = "進階";
}

basic.addEventListener('click', display, false);
basic.addEventListener('click', wbasic, false);
intermediate.addEventListener('click', display, false);
intermediate.addEventListener('click', wintermediate, false);
advanced.addEventListener('click', display, false);
advanced.addEventListener('click', wadvanced, false);
//# sourceMappingURL=all.js.map
