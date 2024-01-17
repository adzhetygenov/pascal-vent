import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export function init() {
  const swiper = new Swiper(".js-slider-companies", {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    loop: false,
    spaceBetween: 15,
    slidesPerView: "auto",

    navigation: {
      nextEl: ".btn--slider-next",
      prevEl: ".btn--slider-prev",
      disabledClass: "btn--slider-disabled"
    }

    // breakpoints: {
    //   576: {
    //     slidesPerView: 2
    //   }
    // }
  });
}
