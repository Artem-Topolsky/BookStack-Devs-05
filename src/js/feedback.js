import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/pagination';

const swiper = new Swiper('.feedback-swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
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
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 3,
      }
    }
});