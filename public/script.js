document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true // animation only happens once
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true
  });

  // Initialize Glide.js
  new Glide('.glide', {
    type: 'carousel',
    autoplay: 3000, // 3 seconds between slides
    hoverpause: true,
    animationDuration: 800,
    perView: 1
  }).mount();
});
