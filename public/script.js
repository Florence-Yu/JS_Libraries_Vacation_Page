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

// Leaflet map initialization
const map = L.map('map').setView([48.8566, 2.3522], 5); // Centered on Paris, zoom level 5

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker for Paris
L.marker([48.8566, 2.3522]).addTo(map)
  .bindPopup('Paris, France')
  .openPopup();
L.marker([41.3851, 2.1734]).addTo(map).bindPopup('Barcelona, Spain');
L.marker([41.9028, 12.4964]).addTo(map).bindPopup('Rome, Italy');
L.marker([52.3676, 4.9041]).addTo(map).bindPopup('Amsterdam, Netherlands');
L.marker([50.0755, 14.4378]).addTo(map).bindPopup('Prague, Czech Republic');
L.marker([48.2082, 16.3738]).addTo(map).bindPopup('Vienna, Austria');

