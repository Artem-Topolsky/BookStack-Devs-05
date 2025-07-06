import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

new Swiper('.mySwiper', {
  modules: [Navigation],
  loop: false,
  speed: 600,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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
    .querySelector('.swiper-button-prev')
    .classList.toggle('disabled', swiper.isBeginning);
  document
    .querySelector('.swiper-button-next')
    .classList.toggle('disabled', swiper.isEnd);
}
