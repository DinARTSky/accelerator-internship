//import Swiper from 'swiper';
//import {Navigation, Pagination} from "swiper/modules";
//import 'swiper/css';
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const initHeroSlider = () => {

  const heroSlider = document.querySelector('.hero__slider');
  const heroPagination = document.querySelector('.hero__pagination');

  if (heroSlider) {
    // eslint-disable-next-line
    new Swiper(heroSlider, {
      modules: [Navigation, Pagination],
      // If we need pagination
      pagination: {
        el: heroPagination,
        clickable: true,
        bottom: 343,
      },
    });
  }
};

initHeroSlider();

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

