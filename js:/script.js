document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in, .slide-up, .zoom-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  elements.forEach(el => {
    observer.observe(el);
  });

  // Scroll-to-top button (optional enhancement)
  const scrollBtn = document.createElement('button');
  scrollBtn.textContent = '↑';
  scrollBtn.className = 'scroll-top';
  document.body.appendChild(scrollBtn);

  scrollBtn.style.display = 'none';
  window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});