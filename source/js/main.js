//import Swiper from 'swiper';
//import {Navigation, Pagination} from "swiper/modules";
//import 'swiper/css';
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Scrollbar, Grid } from 'swiper/modules';

const initHeroSlider = () => {

  const heroSlider = document.querySelector('.hero__slider');
  const heroPagination = document.querySelector('.hero__pagination');

  if (heroSlider) {
    // eslint-disable-next-line
    new Swiper(heroSlider, {
      modules: [Navigation, Pagination, Autoplay, Scrollbar],
      // If we need pagination
      pagination: {
        el: heroPagination,
        clickable: true,
        bottom: 343,
      },
      loop: true,
      /*autoplay: {
        delay: 3000,
      },*/
    });
  }
};

initHeroSlider();

const initProgramsSlider = () => {

  const programsSlider = document.querySelector('.programs__slider');
  const programsScrollbar = document.querySelector('.swiper-scrollbar');
  const programsButtonPrev = document.querySelector('.programs__button--prev');
  const programsButtonNext = document.querySelector('.programs__button--next');

  if (programsSlider) {
    // eslint-disable-next-line
    new Swiper(programsSlider, {
      modules: [Navigation, Pagination, Autoplay],
      // And if we need scrollbar
      scrollbar: {
        el: programsScrollbar,
      },
      // Navigation arrows
      navigation: {
        nextEl: programsButtonNext,
        prevEl: programsButtonPrev,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          initialSlide: 0,
          loop: true,
        },
        768: {
          slidesPerView: 2.125,
          spaceBetween: 30,
          initialSlide: 0,
          loop: true,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 32,
          initialSlide: 0,
          allowTouchMove: false,
        },
      },
    });
  }
};

initProgramsSlider();

const initnewsSlider = () => {

  const newsSlider = document.querySelector('.news__slider');
  const newsPagination = document.querySelector('.news__pagination');
  const newsButtonPrev = document.querySelector('.news__button--prev');
  const newsButtonNext = document.querySelector('.news__button--next');

  if (newsSlider) {
    // eslint-disable-next-line
    new Swiper(newsSlider, {
      modules: [Navigation, Pagination, Autoplay, Grid],
      // And if we need scrollbar
      pagination: {
        el: newsPagination,
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: newsButtonNext,
        prevEl: newsButtonPrev,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          initialSlide: 0,
          loop: true,
        },
        768: {
          autoHeight: false,
          slidesPerView: 2,
          slidesPerColumn: 2,
          grid: {
            rows: 2,
            column: 2,
          },
          spaceBetween: 30,
          initialSlide: 0,
        },
        1440: {
          slidesPerView: 'auto',
          spaceBetween: 32,
          initialSlide: 0,
        },
      },
    });
  }
};

initnewsSlider();


import { initAccordions } from './init-accordion';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initAccordions();
  });
});


//export { initHeroSlider };

//import { initHeroSlider } from './modules/slider/hero-slider';

// init Swiper:
/*
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
  },
});

swiper();
*/

