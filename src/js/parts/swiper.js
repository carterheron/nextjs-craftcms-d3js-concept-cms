import Swiper, { Pagination} from 'swiper';

import 'swiper/css/bundle';

Swiper.use([Pagination]);

export default function createNewSwiper(swiperName) {
    if (!document.getElementById(swiperName)) {
        return;
    }
    const swiperFullName = '.' + swiperName;

    let options = {
        observer: true,
        observeParents: true,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination' + swiperFullName + '-pagination',
            clickable: true,
        },
        spaceBetween: 20,
        slidesPerView: 2,
        centerInsufficientSlides: true,
        breakpoints: {
            1280: {
              slidesPerView: 10,
              spaceBetween: 30
            }
        }
    }
    const swiper = new Swiper(swiperFullName, options);
}
