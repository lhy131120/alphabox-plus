import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

// Import Swiper styles
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {
  
  // Initialize Bootstrap tooltips
  // const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  // const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  //   return new bootstrap.Tooltip(tooltipTriggerEl);
  // });

  // Initialize Bootstrap popovers
  // const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  // const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  //   return new bootstrap.Popover(popoverTriggerEl);
  // });

  const swiper = new Swiper('.share-swiper', {
  // Optional parameters
  spaceBetween: "1.5rem",
  slidesPerView: 1,
  loop: false,
  grid: {
    rows: 4,
  },
  breakpoints: {
    992: {
      grid: {
        rows: 1,      },
      slidesPerView: 3,
    },
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  });

  const swiperBaseConfig = {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: false,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  }

  if(document.querySelector(".about .swiper")) {
    new Swiper('.about .swiper', {
      ...swiperBaseConfig,
      navigation: {
        nextEl: '.about .swiper-button-next',
        prevEl: '.about .swiper-button-prev',
      },
    })
  }

  if(document.querySelector("#products")) {
    const swipers = document.querySelectorAll('.tab-swiper');
    swipers.forEach(swiper => {
      new Swiper(swiper, {
        ...swiperBaseConfig,
        navigation: {
          nextEl: swiper.querySelector(".swiper-button-next"),
          prevEl: swiper.querySelector(".swiper-button-prev"),
        },
      })
    })
  }

});