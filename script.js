const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const slideIcons = document.querySelectorAll('.slide-icon');
const slider = document.querySelector('.slider');
const numberOfSlides = slides.length;
var slideNumber = 0;

// next image
nextBtn.addEventListener('click', () => {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove('active');
  });

  slideNumber++;

  if (slideNumber > numberOfSlides - 1) {
    slideNumber = 0;
  }

  slides[slideNumber].classList.add('active');
  slideIcons[slideNumber].classList.add('active');
});

// previous image
prevBtn.addEventListener('click', () => {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove('active');
  });

  slideNumber--;

  if (slideNumber < 0) {
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add('active');
  slideIcons[slideNumber].classList.add('active');
});

// auto slide

var playSlider;

var repeater = () => {
  playSlider = setInterval(function () {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });

    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove('active');
    });

    slideNumber++;

    if (slideNumber > numberOfSlides - 1) {
      slideNumber = 0;
    }

    slides[slideNumber].classList.add('active');
    slideIcons[slideNumber].classList.add('active');
  }, 2.5 * 1000);
};
repeater();

// stop slider on hover

slider.addEventListener('mouseover', () => {
  clearInterval(playSlider);
});

slider.addEventListener('mouseout', () => {
  repeater();
});
