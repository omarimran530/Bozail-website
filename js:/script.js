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

  /* ─────────────────────────────────────────────
     MOBILE BURGER MENU
  ────────────────────────────────────────────── */
  const burger = document.getElementById('burger');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (burger && mobileDrawer) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      mobileDrawer.classList.toggle('show');
    });
  }

  /* ─────────────────────────────────────────────
     ACCORDION SPEC SHEETS
  ────────────────────────────────────────────── */
  document.querySelectorAll('.toggle-spec').forEach(btn => {
    btn.addEventListener('click', () => {
      const body = btn.closest('.product-card').querySelector('.spec-body');
      body.classList.toggle('open');
      btn.textContent = body.classList.contains('open') ? 'Hide Specs' : 'View Specs';
    });
  });

  /* ─────────────────────────────────────────────
     CATEGORY RIBBON SCROLL-SPY
  ────────────────────────────────────────────── */
  const spyLinks = document.querySelectorAll('.category-ribbon a');
  const spySections = Array.from(spyLinks).map(link => document.querySelector(link.getAttribute('href')));
  const spyObs = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const idx = spySections.indexOf(entry.target);
        if (idx >= 0) {
          spyLinks[idx].classList.toggle('active', entry.isIntersecting);
        }
      });
    },
    { threshold: 0.5 }
  );
  spySections.forEach(sec => sec && spyObs.observe(sec));
});