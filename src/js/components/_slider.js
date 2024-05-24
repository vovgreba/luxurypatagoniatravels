import Swiper, { Navigation, Pagination } from 'swiper';



const swiperReview = new Swiper('.tours__swiper', {

  modules: [Navigation, Pagination],

  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  draggable: true,
  grabCursor: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
  },

});


