// Dynamic image transitions
const images = document.querySelectorAll('.slideshow img');
let current = 0;

function showNextImage() {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}
setInterval(showNextImage, 3000);

// Create 21 candles dynamically
const candleHolder = document.querySelector('.candles');
for (let i = 0; i < 1; i++) {
  const candle = document.createElement('div');
  candle.classList.add('candle');
  const flame = document.createElement('div');
  flame.classList.add('flame');
  candle.appendChild(flame);
  candleHolder.appendChild(candle);
}

// Set name dynamically
document.getElementById('name').textContent = 'Nsovo';

// Scroll animation for images
const scrollImages = document.querySelectorAll('.scroll-animate');
function handleScroll() {
  const triggerBottom = window.innerHeight * 0.8;
  scrollImages.forEach(img => {
    const rect = img.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      img.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', handleScroll);
handleScroll();
