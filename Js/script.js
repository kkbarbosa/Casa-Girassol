  // ── menu mobile ──
  const toggle = document.getElementById('navToggle');
  const menu   = document.getElementById('navMenu');
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    menu.classList.toggle('open');
  });
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      menu.classList.remove('open');
    });
  });

  // ── reveal on scroll ──
  const fades = document.querySelectorAll('.fade');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('in'), i * 60);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  fades.forEach(el => obs.observe(el));