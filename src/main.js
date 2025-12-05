
import './style.css';
import './utils/spotlight.js';
import './utils/slider.js';

window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  const hero = document.querySelector('.hero');

  if (hero) hero.classList.add('visible');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) en.target.classList.add('visible');
    });
  }, { threshold: 0.18 });

  sections.forEach(s => observer.observe(s));
});
