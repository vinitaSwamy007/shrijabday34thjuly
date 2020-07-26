var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: "true",
  coverflowEffect: {
    rotate: 40,
    stretch: 0,
    depth: 380,
    modifier: 1,
    slideShadows: true
  },
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   }
});
