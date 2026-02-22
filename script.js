// ─── CUSTOM CURSOR ───
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

// Smooth lagging ring animation
function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top = ringY + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

// Cursor grows when hovering links/buttons
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(2)';
    cursorRing.style.width = '60px';
    cursorRing.style.height = '60px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorRing.style.width = '36px';
    cursorRing.style.height = '36px';
  });
});

// ─── SCROLL REVEAL ───
const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -60px 0px'
});

reveals.forEach(el => revealObserver.observe(el));

// ─── PARALLAX HERO ───
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroGrid = document.querySelector('.hero-grid');
  const heroBg = document.querySelector('.hero-bg');

  if (heroGrid) {
    heroGrid.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
  if (heroBg) {
    heroBg.style.transform = `translateY(${scrolled * 0.15}px)`;
  }
});
