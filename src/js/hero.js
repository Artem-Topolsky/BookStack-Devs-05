import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/pagination';

const swiper = new Swiper('.hero-swiper', {
  slidesPerView: 1,
  loop: false,
  autoHeight: false,
  observer: true,
  observeParents: true,
  watchSlidesProgress: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.hero-swiper-button-next',
    prevEl: '.hero-swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    1440: {
      slidesPerView: 1,
    },
  },
});
