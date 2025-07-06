import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

new Swiper('.hero-swiper', {
  modules: [Navigation],
  spaceBetween: 20,
  loop: false,
  speed: 1500,
  slidesPerView: 1,
  touchRatio: 0.7,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  navigation: {
    nextEl: '.hero-swiper-button-next',
    prevEl: '.hero-swiper-button-prev',
  },

  on: {
    init() {
      toggleButtons(this);
    },
    slideChange() {
      toggleButtons(this);
    },
  },
});

function toggleButtons(swiper) {
  document
    .querySelector('.hero-swiper-button-prev')
    .classList.toggle('disabled', swiper.isBeginning);
  document
    .querySelector('.hero-swiper-button-next')
    .classList.toggle('disabled', swiper.isEnd);
}
