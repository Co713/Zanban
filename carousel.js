(() => {
  const track = document.getElementById("adTrack");
  const stage = document.getElementById("adStage");
  const dotsWrap = document.getElementById("adDots");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  if (!track || !stage || !dotsWrap || !prevBtn || !nextBtn) return;

  const slides = Array.from(track.querySelectorAll(".ad-slide"));
  const total = slides.length;
  const INTERVAL = 5500;

  let index = 0;
  let timer = null;
  let paused = false;

  slides.forEach((_, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "ad-dot" + (i === 0 ? " is-active" : "");
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-label", `第 ${i + 1} 则广告`);
    btn.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(btn);
  });

  const dots = Array.from(dotsWrap.querySelectorAll(".ad-dot"));

  function render() {
    track.style.transform = `translateX(-${index * 100}%)`;
    slides.forEach((slide, i) => {
      const on = i === index;
      slide.classList.toggle("is-active", on);
      slide.setAttribute("aria-hidden", on ? "false" : "true");
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("is-active", i === index);
    });
  }

  function goTo(i) {
    index = (i + total) % total;
    render();
    restartTimer();
  }

  function next() {
    goTo(index + 1);
  }

  function prev() {
    goTo(index - 1);
  }

  function restartTimer() {
    clearInterval(timer);
    if (paused) return;
    timer = setInterval(next, INTERVAL);
  }

  function pause() {
    paused = true;
    clearInterval(timer);
  }

  function resume() {
    paused = false;
    restartTimer();
  }

  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);

  stage.addEventListener("mouseenter", pause);
  stage.addEventListener("mouseleave", resume);
  stage.addEventListener("focusin", pause);
  stage.addEventListener("focusout", (e) => {
    if (!stage.contains(e.relatedTarget)) resume();
  });

  let touchX = null;
  stage.addEventListener(
    "touchstart",
    (e) => {
      touchX = e.changedTouches[0].screenX;
      pause();
    },
    { passive: true }
  );
  stage.addEventListener(
    "touchend",
    (e) => {
      if (touchX == null) return;
      const dx = e.changedTouches[0].screenX - touchX;
      touchX = null;
      if (Math.abs(dx) > 40) {
        dx < 0 ? next() : prev();
      } else {
        resume();
      }
    },
    { passive: true }
  );

  document.addEventListener("keydown", (e) => {
    if (!document.getElementById("view-landing")?.classList.contains("is-active")) return;
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!reduceMotion.matches) restartTimer();
  else paused = true;

  render();
})();
