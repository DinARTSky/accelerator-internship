//import Swiper from 'swiper';
//import {Navigation, Pagination} from "swiper/modules";
//import 'swiper/css';
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper/modules';

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
          initialSlide:0,
          allowTouchMove: false,
        },
      },
    });
  }
};

initProgramsSlider();

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

