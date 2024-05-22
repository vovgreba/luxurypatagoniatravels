import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';



const swiperReview = new Swiper('.swiper__tours', {

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
      slidesPerView: 1.2,
    },

    768: {
      slidesPerView: 1,
    },

    1180: {
      slidesPerView: 1,
    },
  },
});



const swiper = new Swiper(".mySwiper", {
  modules: [Scrollbar],

  draggable: true,
  grabCursor: true,
  spaceBetween: 30,
  speed: 1000,

  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },

  on: {
    slideChange: () => {
        updateActiveHeading(swiper.activeIndex);
    }
  }
})


function updateActiveHeading(activeIndex) {

  const headings = document.querySelectorAll('.featured__hidding h3');

  headings.forEach((heading, index) => {

      if (index === activeIndex) {
          heading.classList.add('active');
      } else {
          heading.classList.remove('active');
      }
  });
}

function changeSlide(index) {
  swiper.slideTo(index);
}

document.addEventListener('DOMContentLoaded', () => {
  const headings = document.querySelectorAll('.featured__hidding h3');

  headings.forEach( (heading, index) => {
      heading.addEventListener('click', () => {
          changeSlide(index);
      });
  });

  updateActiveHeading(swiper.activeIndex);
});