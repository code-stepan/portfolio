/* ============================================================
   Portfolio — Прибытков Степан
   Russian-only. No i18n, no canvas particles, no cursor glow.
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Navbar scroll state ---------- */

  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('back-to-top');

  function onScroll() {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 24);
    backToTop.classList.toggle('show', y > 600);
    highlightNav();
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Active nav link ---------- */

  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  function highlightNav() {
    const pos = window.scrollY + 120;
    let current = null;
    sections.forEach((section) => {
      if (section.offsetTop <= pos) current = section.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  /* ---------- Mobile burger ---------- */

  const burger = document.getElementById('burger');
  const navLinksEl = document.getElementById('nav-links');
  const backdrop = document.getElementById('nav-backdrop');

  function closeMenu() {
    burger.classList.remove('open');
    navLinksEl.classList.remove('open');
    backdrop.classList.remove('show');
  }

  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navLinksEl.classList.toggle('open');
    backdrop.classList.toggle('show');
  });
  backdrop.addEventListener('click', closeMenu);
  navLinks.forEach((link) => link.addEventListener('click', closeMenu));

  /* ---------- Reveal on scroll ---------- */

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el));



  /* ---------- Project filters ---------- */

  const filterBtns = Array.from(document.querySelectorAll('.filter-btn'));
  const projectCards = Array.from(document.querySelectorAll('.project-card'));

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      projectCards.forEach((card) => {
        const show = filter === 'all' || card.getAttribute('data-category') === filter;
        card.classList.toggle('hidden', !show);
      });
    });
  });

  /* ---------- Toasts ---------- */

  const toastContainer = document.getElementById('toast-container');

  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = '<i class="ri-check-line"></i><span></span>';
    toast.querySelector('span').textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('hide');
      setTimeout(() => toast.remove(), 320);
    }, 3200);
  }


  /* ---------- Contact form (simulated) ---------- */

  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('form-submit');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const original = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Отправка...';
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = original;
      form.reset();
      showToast('Спасибо за сообщение! Я обязательно свяжусь с вами.');
    }, 900);
  });

  /* ---------- Back to top ---------- */

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Init ---------- */

  onScroll();
})();
