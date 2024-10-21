const swiper = new Swiper(".swiper", {
  mousewheel: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  direction: "vertical",
  speed: 1700,
});

swiper.on("slideChange", function () {
  document.querySelectorAll(".hero__content").forEach(function (item, index) {
    return swiper.activeIndex === index ? item.classList.add("hero__content--active") : item.classList.remove("hero__content--active");
  });
});
