import Alpine from 'alpinejs';
import swiper from '@js/parts/swiper';

window.Alpine = Alpine;
Alpine.start();

let swipers = (document.getElementsByName("swiper"));

for (let i = 0; i < swipers.length; i++) {
  if (swipers[i].id) {
    let swiperName = swipers[i].id;
    swiper(swiperName);
  }
}

import "@js/parts/css";
