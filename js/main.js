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

  /* ---------- Terminal staggered reveal ---------- */

  const terminal = document.getElementById('terminal');
  const tLines = Array.from(document.querySelectorAll('#terminal-body .t-line'));

  const terminalObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        tLines.forEach((line, i) => {
          setTimeout(() => line.classList.add('visible'), 250 + i * 350);
        });
        terminalObserver.disconnect();
      }
    },
    { threshold: 0.3 }
  );
  if (terminal) terminalObserver.observe(terminal);

  /* ---------- Command palette ---------- */

  const cmdOverlay = document.getElementById('cmd-overlay');
  const cmdInput = document.getElementById('cmd-input');
  const cmdItems = Array.from(document.querySelectorAll('.cmd-item'));

  function openPalette() {
    cmdOverlay.classList.add('open');
    cmdOverlay.setAttribute('aria-hidden', 'false');
    cmdInput.value = '';
    filterPalette('');
    setTimeout(() => cmdInput.focus(), 30);
  }

  function closePalette() {
    cmdOverlay.classList.remove('open');
    cmdOverlay.setAttribute('aria-hidden', 'true');
  }

  function filterPalette(query) {
    const q = query.trim().toLowerCase();
    cmdItems.forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(q) ? '' : 'none';
    });
  }

  document.getElementById('cmd-open').addEventListener('click', openPalette);
  cmdOverlay.addEventListener('click', (e) => {
    if (e.target === cmdOverlay) closePalette();
  });
  cmdInput.addEventListener('input', () => filterPalette(cmdInput.value));

  cmdItems.forEach((item) => {
    item.addEventListener('click', () => {
      const target = item.getAttribute('data-cmd-target');
      closePalette();
      if (target.startsWith('#') && target.length > 1) {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (target.startsWith('http')) {
        window.open(target, '_blank', 'noopener');
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    const typing =
      e.target.tagName === 'INPUT' ||
      e.target.tagName === 'TEXTAREA' ||
      e.target.isContentEditable;

    if (e.key === '/' && !typing && !cmdOverlay.classList.contains('open')) {
      e.preventDefault();
      openPalette();
    }
    if (e.key === 'Escape' && cmdOverlay.classList.contains('open')) {
      closePalette();
    }
  });

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

  /* ---------- Copy buttons ---------- */

  document.querySelectorAll('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(
          () => showToast('Скопировано в буфер обмена!'),
          () => fallbackCopy(text)
        );
      } else {
        fallbackCopy(text);
      }
    });
  });

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast('Скопировано в буфер обмена!');
    } catch (err) {
      showToast('Не удалось скопировать');
    }
    ta.remove();
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
