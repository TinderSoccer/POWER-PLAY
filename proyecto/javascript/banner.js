document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll('.carousel-item');
  const indicators = document.querySelectorAll('.indicator');
  let currentIndex = 0;

  function showSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${index * 100}%)`;

    indicators.forEach((ind, i) => {
      ind.classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  // indicadores click
  indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => showSlide(i));
  });

  // rotación automática
  setInterval(() => {
    let nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }, 6000);
});
