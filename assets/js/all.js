"use strict";

$(function () {
  console.log('Hello Bootstrap5'); //swiper index page

  var mySwiper = document.querySelector('.mySwiper');

  if (mySwiper) {
    var swiper = new Swiper(".mySwiper", {
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
          spaceBetween: 30
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
      slidesPerColumn: 3,
      slidesPerColumnFill: 'column',
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
          slidesPerColumn: 2,
          slidesPerColumnFill: 'row',
          spaceBetween: 0
        },
        992: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          slidesPerColumnFill: 'row',
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
      slidesPerColumn: 3,
      slidesPerColumnFill: 'row',
      loopFillGroupWithBlank: false,
      spaceBetween: 0,
      loop: false,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          slidesPerColumnFill: 'row'
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerColumnFill: 'row'
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
