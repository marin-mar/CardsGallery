function showSlides(activeSlide = 0) {
  const slides = document.querySelectorAll(".slide");
  const mainWindow = document.querySelector(".main-window");
  const slideShowBtn = document.querySelector(".slide-show-btn");
  const slideShowStartNumber = document.querySelector(".slide-show-nmb");

  slides[activeSlide].classList.add("active");
  mainWindow.style.backgroundImage = slides[activeSlide].style.backgroundImage;

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses();
      slide.classList.add("active");
      mainWindow.style.backgroundImage = slide.style.backgroundImage;
    });
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }

  slideShowBtn.addEventListener("click", (e) => {
    e.preventDefault();
    clearActiveClasses();
    let startSlide = slideShowStartNumber.value - 1;
    showSlides(startSlide);
  });
}

showSlides();