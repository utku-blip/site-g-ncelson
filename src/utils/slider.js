
(function(){
  const slider = document.querySelector("#test-slider");
  const dotsContainer = document.querySelector("#test-dots");
  if(!slider || !dotsContainer) return;

  const items = Array.from(slider.children);
  let index = 0;

  function renderDots(){
    dotsContainer.innerHTML = "";
    items.forEach((_, i) => {
      const dot = document.createElement("div");
      dot.className = "dot" + (i === 0 ? " active" : "");
      dot.addEventListener("click", () => {
        index = i;
        update();
        resetAuto();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function update(){
    if(!items.length) return;
    const width = items[0].offsetWidth + 18;
    slider.style.transform = `translateX(-${index * width}px)`;
    Array.from(dotsContainer.children).forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function next(){
    index = (index + 1) % items.length;
    update();
  }

  let auto = setInterval(next, 4500);
  function resetAuto(){
    clearInterval(auto);
    auto = setInterval(next, 4500);
  }

  renderDots();
  window.addEventListener("resize", update);
})();
