// Minimal site JS: nav toggle, set year, reveal on scroll
document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(toggle => {
    const navList = document.getElementById('nav-list');
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      if (navList) navList.classList.toggle('open');
    });
  });

  // Set years on pages
  const years = ['year','year2','year3','year4','year5'];
  years.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = new Date().getFullYear();
  });

  // Reveal animations using IntersectionObserver
  const revealEls = document.querySelectorAll('.section, .card, .project-card, .team-card, .case');
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => io.observe(el));
});
