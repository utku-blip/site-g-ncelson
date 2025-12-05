
const spotlight = document.createElement('div');
spotlight.className = 'spotlight';
document.body.appendChild(spotlight);

window.addEventListener('pointermove', (e) => {
  const x = e.clientX + 'px';
  const y = e.clientY + 'px';
  spotlight.style.setProperty('--mx', x);
  spotlight.style.setProperty('--my', y);
});
