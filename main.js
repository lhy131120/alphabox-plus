import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

// Import Swiper styles
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Bootstrap tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Initialize Bootstrap popovers
  const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

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
        rows: 1, 
      },
      slidesPerView: 3,
    },
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

});