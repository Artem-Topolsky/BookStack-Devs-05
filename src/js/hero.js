import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

new Swiper('.hero-swiper', {
  modules: [Navigation],
  loop: false,
  speed: 600,

  navigation: {
    nextEl: '.hero-swiper-button-next',
    prevEl: '.hero-swiper-button-prev',
  },
  slidesPerView: 1,
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
