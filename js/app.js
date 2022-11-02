const galleryImage = document.querySelectorAll('.gallery-img');

galleryImage.forEach((img, i) => {
  img.dataset.aos = 'fade-up';
  // delay
  img.dataset.aosDelay = i * 100;
});

AOS.init({
  duration: 1000,
  once: true,
});
