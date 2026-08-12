const images = [
  './assets/image-content/image-1.png',
  './assets/image-content/image-2.png',
  './assets/image-content/image-3.png',
  './assets/image-content/image-4.png',
  './assets/image-content/image-5.png'
];

const container = document.querySelector('.container');
const imageContent = document.querySelector('.image-content');
const mainButton = document.getElementById('main-button');
const letterContainer = document.getElementById('letterContainer');

let clickCount = 0;
let currentIndex = 0;


// =========================================
// SHOW FIRST IMAGE
// =========================================

imageContent.style.backgroundImage = `url('${images[0]}')`;


// =========================================
// IMAGE BUTTON
// =========================================

mainButton.addEventListener('click', () => {

  clickCount++;

  // -------------------------------
  // CLICKS 1–4
  // Change images
  // -------------------------------

  if (clickCount < 5) {

      currentIndex++;

      imageContent.style.opacity = 0;

      setTimeout(() => {

          imageContent.style.backgroundImage =
              `url('${images[currentIndex]}')`;

          imageContent.style.opacity = 1;

      }, 300);

  }


  // -------------------------------
  // CLICK 5
  // Image 5 disappears
  // Container disappears
  // Letter appears
  // -------------------------------

  else if (clickCount === 5) {

      imageContent.style.opacity = 0;
      mainButton.style.opacity = 0;

      setTimeout(() => {

          container.classList.add('hidden');

          letterContainer.classList.add('letter-visible');

      }, 800);

  }

});


// =========================================
// LETTER
// =========================================

let letterClickCount = 0;

letterContainer.addEventListener('click', () => {

  letterClickCount++;


  // CLICK 1
  if (letterClickCount === 1) {

      letterContainer.classList.add('opening');

  }


  // CLICK 2
  else if (letterClickCount === 2) {

      letterContainer.classList.remove('opening');

      letterContainer.classList.add('paper-only');

  }


  // CLICK 3
  else if (letterClickCount === 3) {

      letterContainer.classList.remove('paper-only');

      letterContainer.classList.add('expanded');

  }

});