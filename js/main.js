/**
 * Portfolio Interactive Scripts
 * Stepan - Full-Stack / Frontend Developer
 */

// --- Localization Dictionary ---
const translations = {
  ru: {
    navAbout: "Обо мне",
    navSkills: "Навыки",
    navProjects: "Проекты",
    navExperience: "Опыт",
    navContact: "Контакты",
    statusAvailable: "Доступен для новых проектов",
    heroGreeting: "Привет! Я Степан —",
    heroDesc: "Создаю быстрые, масштабируемые и интуитивно понятные веб-приложения с современным стеком технологий. Превращаю сложные идеи в элегантный код.",
    btnProjects: "Посмотреть проекты",
    btnContact: "Связаться со мной",
    btnResume: "Резюме / CV",
    statExp: "Года опыта",
    statProjects: "Завершенных проектов",
    statCommits: "Коммитов за год",
    statPassion: "Внимание к деталям",
    aboutTag: "Обо мне",
    aboutTitle: "Увлеченный разработчик, создающий продукты с душой",
    aboutP1: "Привет! Меня зовут Степан. Я веб-разработчик, увлеченный созданием современных пользовательских интерфейсов и надежной архитектуры веб-сервисов.",
    aboutP2: "Мой фокус — чистый, поддерживаемый код, адаптивный дизайн и отличный пользовательский опыт (UX/UI). Постоянно изучаю передовые технологии и оптимизирую производительность приложений.",
    featureCleanTitle: "Чистый код",
    featureCleanDesc: "Модульная структура, читаемость и лучшие практики разработки.",
    featureUxTitle: "UX & Перфоманс",
    featureUxDesc: "Быстрая загрузка, доступность и плавные анимации.",
    featureStackTitle: "Современный стек",
    featureStackDesc: "TypeScript, React, Node.js и актуальный инструментарий.",
    featureSolveTitle: "Решение задач",
    featureSolveDesc: "Фокус на бизнес-логике и достижении измеримых результатов.",
    infoNameLabel: "Имя:",
    infoLocationLabel: "Локация:",
    infoLocationVal: "Москва, Россия (Удаленно)",
    infoEmailLabel: "Email:",
    infoSpecialtyLabel: "Специализация:",
    infoSpecialtyVal: "Frontend / Full-Stack",
    skillsTag: "Стек технологий",
    skillsTitle: "Инструменты и навыки",
    skillsSubtitle: "Технологии, которые я использую для решения реальных задач",
    skillCatFrontend: "Frontend разработка",
    skillCatBackend: "Backend & Базы данных",
    skillCatTools: "Инструменты & DevOps",
    skillCatSoft: "Методологии & Soft Skills",
    projectsTag: "Портфолио",
    projectsTitle: "Избранные проекты",
    projectsSubtitle: "Некоторые из моих недавних работ и пет-проектов",
    filterAll: "Все",
    filterFullstack: "Full-Stack",
    filterFrontend: "Frontend",
    filterBackend: "Сервисы & API",
    btnLive: "Демо",
    btnCode: "GitHub",
    expTag: "Траектория",
    expTitle: "Опыт и образование",
    expSubtitle: "Мой профессиональный путь и ключевые этапы",
    exp1Date: "2024 — Настоящее время",
    exp1Role: "Frontend / Full-Stack Разработчик",
    exp1Company: "Freelance & Pet-проекты",
    exp1Desc: "Разработка современных веб-приложений с использованием React, TypeScript, Tailwind CSS и REST API. Проектирование UI/UX и внедрение адаптивной верстки.",
    exp2Date: "2023 — 2024",
    exp2Role: "Младший веб-разработчик",
    exp2Company: "Коммерческие проекты",
    exp2Desc: "Создание интерактивных компонентов, интеграция сторонних API, оптимизация скорости загрузки страниц и верстка под мобильные устройства.",
    exp3Date: "2021 — 2023",
    exp3Role: "Базовое образование & Изучение CS",
    exp3Company: "Курсы, практика и самообразование",
    exp3Desc: "Углубленное изучение JavaScript, алгоритмов, структур данных, архитектуры баз данных и паттернов проектирования ПО.",
    contactTag: "Контакты",
    contactTitle: "Давайте работать вместе",
    contactSubtitle: "Всегда открыт для предложений, интересных проектов и обсуждения идей",
    contactInfoTitle: "Связаться со мной",
    contactInfoDesc: "Напишите мне в Telegram или отправьте письмо на почту. Я обычно отвечаю в течение нескольких часов!",
    btnCopy: "Копировать",
    copiedToast: "Скопировано в буфер!",
    formName: "Ваше имя",
    formEmail: "Ваш Email",
    formMessage: "Сообщение",
    formPlaceholderName: "Иван Иванов",
    formPlaceholderEmail: "ivan@example.com",
    formPlaceholderMessage: "Привет, Степан! Хочу обсудить проект...",
    formSubmit: "Отправить сообщение",
    formSentSuccess: "Спасибо! Ваше сообщение принято к отправке.",
    footerText: "© 2026 Степан. Все права защищены.",
    typingRoles: [
      "Frontend Developer",
      "Full-Stack Разработчик",
      "React & TypeScript",
      "Создатель веб-приложений"
    ]
  },
  en: {
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navExperience: "Experience",
    navContact: "Contact",
    statusAvailable: "Available for new projects",
    heroGreeting: "Hello! I'm Stepan —",
    heroDesc: "Building fast, scalable, and intuitive web applications with modern tech stack. Turning complex ideas into elegant, production-ready code.",
    btnProjects: "View Projects",
    btnContact: "Get In Touch",
    btnResume: "Resume / CV",
    statExp: "Years Experience",
    statProjects: "Completed Projects",
    statCommits: "Yearly Commits",
    statPassion: "Attention to Detail",
    aboutTag: "About Me",
    aboutTitle: "Passionate developer crafting digital products with care",
    aboutP1: "Hi! My name is Stepan. I am a web developer with a passion for building modern user interfaces and robust web architecture.",
    aboutP2: "My focus is clean, maintainable code, responsive web design, and delivering seamless user experiences (UX/UI). Constantly learning cutting-edge technologies and tuning web performance.",
    featureCleanTitle: "Clean Code",
    featureCleanDesc: "Modular architecture, readability, and modern engineering standards.",
    featureUxTitle: "UX & Performance",
    featureUxDesc: "Fast loading times, accessibility, and delightful animations.",
    featureStackTitle: "Modern Tech Stack",
    featureStackDesc: "TypeScript, React, Node.js and current best-of-breed tools.",
    featureSolveTitle: "Problem Solver",
    featureSolveDesc: "Laser-focused on solving business challenges with measurable impact.",
    infoNameLabel: "Name:",
    infoLocationLabel: "Location:",
    infoLocationVal: "Moscow, Russia (Remote)",
    infoEmailLabel: "Email:",
    infoSpecialtyLabel: "Specialty:",
    infoSpecialtyVal: "Frontend / Full-Stack",
    skillsTag: "Tech Stack",
    skillsTitle: "Skills & Technologies",
    skillsSubtitle: "The tools and technologies I use to build robust software",
    skillCatFrontend: "Frontend Development",
    skillCatBackend: "Backend & Databases",
    skillCatTools: "Tools & DevOps",
    skillCatSoft: "Methodologies & Soft Skills",
    projectsTag: "Portfolio",
    projectsTitle: "Featured Projects",
    projectsSubtitle: "A selection of my recent works and open-source pet projects",
    filterAll: "All",
    filterFullstack: "Full-Stack",
    filterFrontend: "Frontend",
    filterBackend: "Services & API",
    btnLive: "Live Demo",
    btnCode: "GitHub",
    expTag: "Trajectory",
    expTitle: "Experience & Education",
    expSubtitle: "My professional journey and career milestones",
    exp1Date: "2024 — Present",
    exp1Role: "Frontend / Full-Stack Developer",
    exp1Company: "Freelance & Pet Projects",
    exp1Desc: "Building modern web applications using React, TypeScript, Tailwind CSS, and RESTful APIs. UI/UX design and responsive layout implementation.",
    exp2Date: "2023 — 2024",
    exp2Role: "Junior Web Developer",
    exp2Company: "Commercial Projects",
    exp2Desc: "Crafting interactive UI components, integrating third-party APIs, optimizing page speed, and mobile responsiveness.",
    exp3Date: "2021 — 2023",
    exp3Role: "Core Foundations & CS Studies",
    exp3Company: "Courses, Practice & Self-learning",
    exp3Desc: "In-depth study of JavaScript, data structures, algorithms, database architectures, and software design patterns.",
    contactTag: "Contact",
    contactTitle: "Let's Work Together",
    contactSubtitle: "Open for freelance opportunities, full-time roles, and interesting collaborative projects",
    contactInfoTitle: "Get in touch",
    contactInfoDesc: "Drop me a message on Telegram or send me an email. I usually reply within a couple of hours!",
    btnCopy: "Copy",
    copiedToast: "Copied to clipboard!",
    formName: "Your Name",
    formEmail: "Your Email",
    formMessage: "Message",
    formPlaceholderName: "John Doe",
    formPlaceholderEmail: "john@example.com",
    formPlaceholderMessage: "Hi Stepan! Let's discuss a project...",
    formSubmit: "Send Message",
    formSentSuccess: "Thank you! Your message was submitted successfully.",
    footerText: "© 2026 Stepan. All rights reserved.",
    typingRoles: [
      "Frontend Developer",
      "Full-Stack Engineer",
      "React & TypeScript",
      "Web App Creator"
    ]
  }
};

let currentLang = localStorage.getItem("preferred_lang") || "ru";

// --- Theme Management ---
const themeToggleBtn = document.getElementById("theme-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("preferred_theme", theme);
  const icon = themeToggleBtn.querySelector("i");
  if (icon) {
    icon.className = theme === "light" ? "ri-moon-line" : "ri-sun-line";
  }
}

const savedTheme = localStorage.getItem("preferred_theme") || (prefersDarkScheme.matches ? "dark" : "light");
setTheme(savedTheme);

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    setTheme(activeTheme);
  });
}

// --- Typing Animation ---
let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout = null;

function handleTyping() {
  const typingEl = document.getElementById("typing-text");
  if (!typingEl) return;

  const roles = translations[currentLang].typingRoles;
  const currentRole = roles[typingIndex % roles.length];

  if (isDeleting) {
    typingEl.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingEl.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 40 : 90;

  if (!isDeleting && charIndex === currentRole.length) {
    speed = 1800; // Pause at full word
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    typingIndex++;
    speed = 400; // Pause before next word
  }

  clearTimeout(typingTimeout);
  typingTimeout = setTimeout(handleTyping, speed);
}

// --- Language Switching ---
const langToggleBtn = document.getElementById("lang-toggle");

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("preferred_lang", lang);
  if (langToggleBtn) {
    langToggleBtn.textContent = lang.toUpperCase();
  }

  // Update text elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update placeholder attributes
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  // Restart typing animation
  charIndex = 0;
  isDeleting = false;
  handleTyping();
}

if (langToggleBtn) {
  langToggleBtn.addEventListener("click", () => {
    const newLang = currentLang === "ru" ? "en" : "ru";
    applyLanguage(newLang);
  });
}

// --- Interactive Background Canvas (Ambient Constellation) ---
const canvas = document.getElementById("bg-canvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(window.innerWidth / 25), 45);

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 2 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(99, 102, 241, 0.4)";
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animateCanvas() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - dist / 130)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animateCanvas);
  }
  animateCanvas();
}

// --- Cursor Glow Effect ---
const cursorGlow = document.querySelector(".cursor-glow");
if (cursorGlow && window.matchMedia("(hover: hover)").matches) {
  window.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  });
}

// --- Navbar Scroll & Active Link ---
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Back to top button visibility
  const backToTopBtn = document.getElementById("back-to-top");
  if (backToTopBtn) {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  }

  // Active section indicator
  let currentSecId = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSecId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSecId}`) {
      link.classList.add("active");
    }
  });
});

// Mobile burger menu
const burgerBtn = document.getElementById("burger-btn");
const navList = document.querySelector(".nav-links");

if (burgerBtn && navList) {
  burgerBtn.addEventListener("click", () => {
    navList.classList.toggle("open");
    const icon = burgerBtn.querySelector("i");
    if (navList.classList.contains("open")) {
      icon.className = "ri-close-line";
    } else {
      icon.className = "ri-menu-4-line";
    }
  });

  // Close menu when clicking a link
  navList.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("open");
      const icon = burgerBtn.querySelector("i");
      if (icon) icon.className = "ri-menu-4-line";
    });
  });
}

// --- Project Filter System ---
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.getAttribute("data-filter");

    projectCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");
      if (category === "all" || cardCategory === category) {
        card.style.display = "flex";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
        }, 10);
      } else {
        card.style.opacity = "0";
        card.style.transform = "scale(0.95)";
        setTimeout(() => {
          card.style.display = "none";
        }, 200);
      }
    });
  });
});

// --- Toast Notification System ---
function showToast(message, iconClass = "ri-checkbox-circle-fill") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <i class="${iconClass} toast-icon"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3200);
}

// --- Copy Email to Clipboard ---
const copyEmailBtn = document.getElementById("copy-email-btn");
if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", () => {
    const emailToCopy = copyEmailBtn.getAttribute("data-email") || "stepan.developer@example.com";
    navigator.clipboard.writeText(emailToCopy).then(() => {
      showToast(translations[currentLang].copiedToast);
    }).catch(() => {
      showToast("Email: " + emailToCopy);
    });
  });
}

// --- Contact Form Submission Mock ---
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="ri-loader-4-line ri-spin"></i> Отправка...`;

    setTimeout(() => {
      showToast(translations[currentLang].formSentSuccess);
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }, 800);
  });
}

// --- Back to top scroll ---
const backToTopBtn = document.getElementById("back-to-top");
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// --- Initialize Everything ---
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLang);
});
