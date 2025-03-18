document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".banner__items");
  const dots = document.querySelectorAll(".banner__slider--dots");
  const bannerTitle = document.querySelector('.banner__content--title');
  const bannerDesc = document.querySelector('.banner__content--desc p');
  const totalSlides = slides.length;

  const bannerData = [
    "GO-KARTS",
    "JUMPARENA",
    "Virtuální realita",
    "MULTIBALL",
    "Laserová střelnice",
  ]

  function showSlide(index) {
    if (index >= totalSlides) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalSlides - 1;
    } else {
      currentIndex = index;
    }

    document.querySelector(
      ".banner__container"
    ).style.transform = `translateX(${-currentIndex * 100}%)`;

    if (dots.length > 0) {
      dots.forEach((dot) => dot.classList.remove("active"));
      dots[currentIndex].classList.add("active");
    }

    // Cập nhật caption text
    if (bannerTitle) {
      bannerTitle.textContent = bannerData[currentIndex];
  }
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  setInterval(nextSlide, 3000);

  showSlide(currentIndex);
});
