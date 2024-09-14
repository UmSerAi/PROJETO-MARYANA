// Carousel JavaScript
  const carouselImages = document.querySelector('.carousel-images');
  const images = document.querySelectorAll('.carousel-images img');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentIndex = 0;
  const totalImages = images.length;
  const imageWidth = images[0].clientWidth;

  function updateCarousel() {
      carouselImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalImages;
      updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      updateCarousel();
  });

  // Adjust carousel on window resize
  window.addEventListener('resize', () => {
      const newImageWidth = images[0].clientWidth;
      carouselImages.style.transform = `translateX(-${currentIndex * newImageWidth}px)`;
  });