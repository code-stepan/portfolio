/**
 * Portfolio Interactive Scripts
 * Stepan Pribytkov - Junior ML Engineer (NLP / LLM)
 */

// --- Localization Dictionary ---
const translations = {
  ru: {
    navAbout: "Обо мне",
    navSkills: "Навыки",
    navResearch: "Научная работа",
    navProjects: "Проекты",
    navEducation: "Образование",
    navContact: "Контакты",
    statusAvailable: "Ищу стажировку или Junior-позицию в ML / NLP / Data Science",
    heroGreeting: "Привет! Я Степан Прибытков —",
    heroDesc: "Студент 4 курса ПМИ. Строю ML-системы от данных до сервиса: кредитный скоринг (CatBoost, WOE-логрегрессия, FastAPI, Docker) и RAG-пайплайн с гибридным поиском, реранкингом и собственными RAGAS-метриками.",
    btnProjects: "Смотреть проекты",
    btnContact: "Связаться со мной",
    btnResume: "Резюме / CV (PDF)",
    statRecall: "ROC-AUC в кредитном скоринге (holdout)",
    statDataset: "MRR в RAG-поиске (было 0.560)",
    statLatency: "Документов в базе знаний RAG",
    statCourse: "Курс ПМИ (Бакалавриат)",
    aboutTag: "Обо мне",
    aboutTitle: "ML-инженер: от данных до сервиса — классический ML, NLP и LLM",
    aboutP1: "Я студент 4 курса бакалавриата «Прикладная математика и информатика» в РГУ им. А. Н. Косыгина. Строю ML-системы от данных до сервиса: от классического машинного обучения (кредитный скоринг) до NLP и больших языковых моделей (RAG).",
    aboutP2: "Разработал кредитный скоринг (CatBoost, WOE-логрегрессия, Gini/KS/PSI, SHAP, FastAPI, Docker) и RAG-пайплайн с гибридным поиском, реранкингом и собственной реализацией RAGAS-метрик. В рамках ВКР исследую устойчивость квантованных и дистиллированных языковых моделей к адверсальным атакам (TextFooler, BERT-Attack, DeepWordBug). Осваиваю PySpark, MLflow и LangChain.",
    featureRagTitle: "RAG & Информационный поиск",
    featureRagDesc: "Гибридный поиск (dense + BM25 + RRF), реранкинг cross-encoder, Chroma, собственные RAGAS-метрики.",
    featureRobustTitle: "Робастность & Сжатие",
    featureRobustDesc: "Исследование адверсальных атак, квантование весов (INT8/4), дистилляция знаний.",
    featureLlmTitle: "Классический ML & Скоринг",
    featureLlmDesc: "Кредитный скоринг: CatBoost, WOE/IV, отраслевые метрики Gini/KS/PSI, интерпретация через SHAP, FastAPI.",
    featureMathTitle: "Математический фундамент",
    featureMathDesc: "Теория вероятностей, статистика, линейная алгебра и алгоритмическая база.",
    infoNameLabel: "Имя:",
    infoSpecialtyLabel: "Специализация:",
    infoSpecialtyVal: "Junior ML Engineer / NLP",
    infoLocationLabel: "Локация:",
    infoLocationVal: "Москва (Ищу стажировку / Junior)",
    infoEmailLabel: "Email:",
    infoPhoneLabel: "Телефон:",
    infoEduLabel: "ВУЗ:",
    infoEduVal: "РГУ им. А. Н. Косыгина (ПМИ, 2023–2027)",
    skillsTag: "Стек технологий",
    skillsTitle: "Инструменты и навыки",
    skillsSubtitle: "Стек машинного обучения, обработки языка и работы с данными",
    skillCatMl: "Python & Machine Learning",
    skillCatNlp: "NLP, LLM & Поиск",
    skillCatRobust: "Метрики & Робастность",
    skillCatTools: "Инфраструктура & Базы",
    researchTag: "Научная деятельность",
    researchTitle: "Исследование робастности квантованных и дистиллированных моделей",
    researchSubtitle: "Выпускная квалификационная работа (ВКР 2026–2027)",
    projectsTag: "Практический опыт",
    projectsTitle: "Проекты",
    projectsSubtitle: "ML-системы от данных до сервиса: классический ML, RAG и NLP",
    filterAll: "Все работы",
    filterRag: "RAG & LLM",
    filterResearch: "Научные исследования",
    filterMl: "ML & Данные",
    btnDetails: "Подробнее",
    btnGithub: "GitHub",
    eduTag: "Траектория",
    eduTitle: "Образование и курсы",
    eduSubtitle: "Фундаментальная подготовка и профильные программы обучения",
    contactTag: "Контакты",
    contactTitle: "Открыт к предложениям",
    contactSubtitle: "Ищу стажировку или Junior позицию ML-инженера в амбициозной команде",
    contactInfoTitle: "Связаться со мной",
    contactInfoDesc: "Напишите мне в Telegram или отправьте письмо на почту. Всегда открыт к профессиональному диалогу и техническим интервью!",
    btnCopy: "Копировать",
    copiedToast: "Скопировано в буфер обмена!",
    formName: "Ваше имя",
    formEmail: "Ваш Email",
    formMessage: "Сообщение или приглашение",
    formPlaceholderName: "Имя или компания",
    formPlaceholderEmail: "hr@company.com",
    formPlaceholderMessage: "Здравствуйте, Степан! Хотим пригласить вас на собеседование...",
    formSubmit: "Отправить сообщение",
    formSentSuccess: "Спасибо за сообщение! Я обязательно свяжусь с вами.",
    footerText: "© 2026 Степан Прибытков · Junior ML Engineer",
    typingRoles: [
      "Junior ML Engineer",
      "Data Scientist",
      "NLP & LLM",
      "RAG & Hybrid Search",
      "Credit Scoring · CatBoost",
      "Adversarial Robustness"
    ]
  },
  en: {
    navAbout: "About",
    navSkills: "Skills",
    navResearch: "Research",
    navProjects: "Projects",
    navEducation: "Education",
    navContact: "Contact",
    statusAvailable: "Looking for an ML / Data Science internship or Junior role",
    heroGreeting: "Hello! I'm Stepan Pribytkov —",
    heroDesc: "Senior student in Applied Mathematics & CS. Building end-to-end ML systems: credit scoring (CatBoost, WOE logistic regression, FastAPI, Docker) and a RAG pipeline with hybrid search, reranking, and custom RAGAS metrics.",
    btnProjects: "View Projects",
    btnContact: "Get In Touch",
    btnResume: "Resume / CV (PDF)",
    statRecall: "ROC-AUC in Credit Scoring (Holdout)",
    statDataset: "MRR in RAG Retrieval (up from 0.560)",
    statLatency: "Documents in RAG Knowledge Base",
    statCourse: "Year CS & Applied Math",
    aboutTag: "About Me",
    aboutTitle: "ML Engineer: from data to service — classical ML, NLP, and LLMs",
    aboutP1: "I am a 4th-year undergraduate student in Applied Mathematics and Computer Science at Kosygin Russian State University. I build end-to-end ML systems, from classical ML (credit scoring) to NLP and large language models (RAG).",
    aboutP2: "I developed a credit scoring system (CatBoost, WOE logistic regression, Gini/KS/PSI, SHAP, FastAPI, Docker) and a RAG pipeline with hybrid search, reranking, and my own implementation of RAGAS metrics. In my Bachelor thesis, I study the robustness of quantized and distilled language models against adversarial attacks (TextFooler, BERT-Attack, DeepWordBug). Currently learning PySpark, MLflow, and LangChain.",
    featureRagTitle: "RAG & Information Retrieval",
    featureRagDesc: "Hybrid retrieval (dense + BM25 + RRF), cross-encoder reranking, Chroma, custom RAGAS metrics.",
    featureRobustTitle: "Robustness & Compression",
    featureRobustDesc: "Adversarial attack benchmarking, model quantization (INT8/4), knowledge distillation.",
    featureLlmTitle: "Classical ML & Scoring",
    featureLlmDesc: "Credit scoring: CatBoost, WOE/IV, industry metrics Gini/KS/PSI, SHAP interpretability, FastAPI.",
    featureMathTitle: "Mathematical Foundations",
    featureMathDesc: "Strong background in probability theory, mathematical statistics, linear algebra, and optimization.",
    infoNameLabel: "Name:",
    infoSpecialtyLabel: "Specialty:",
    infoSpecialtyVal: "Junior ML Engineer / NLP",
    infoLocationLabel: "Location:",
    infoLocationVal: "Moscow, Russia (Open for Internship / Junior)",
    infoEmailLabel: "Email:",
    infoPhoneLabel: "Phone:",
    infoEduLabel: "University:",
    infoEduVal: "Kosygin State University (AM&CS, 2023–2027)",
    skillsTag: "Tech Stack",
    skillsTitle: "Skills & Technologies",
    skillsSubtitle: "Machine learning, natural language processing, and data engineering toolkit",
    skillCatMl: "Python & Machine Learning",
    skillCatNlp: "NLP, LLMs & Retrieval",
    skillCatRobust: "Metrics & Robustness",
    skillCatTools: "Infrastructure & Databases",
    researchTag: "Research",
    researchTitle: "Adversarial Robustness of Quantized & Distilled Models",
    researchSubtitle: "Bachelor Thesis (2026–2027)",
    projectsTag: "Practical Work",
    projectsTitle: "Projects",
    projectsSubtitle: "End-to-end ML systems: classical ML, RAG, and NLP",
    filterAll: "All Works",
    filterRag: "RAG & LLMs",
    filterResearch: "Research",
    filterMl: "ML & Data",
    btnDetails: "Details",
    btnGithub: "GitHub",
    eduTag: "Trajectory",
    eduTitle: "Education & Courses",
    eduSubtitle: "Academic foundations and specialized deep learning programs",
    contactTag: "Contact",
    contactTitle: "Let's Connect",
    contactSubtitle: "Open for Machine Learning Engineer internships and junior positions",
    contactInfoTitle: "Get in touch",
    contactInfoDesc: "Reach out via Telegram or send an email. Always open to technical discussions and interviews!",
    btnCopy: "Copy",
    copiedToast: "Copied to clipboard!",
    formName: "Your Name",
    formEmail: "Your Email",
    formMessage: "Message or Invitation",
    formPlaceholderName: "Name or Company",
    formPlaceholderEmail: "hr@company.com",
    formPlaceholderMessage: "Hello Stepan! We would like to invite you for an interview...",
    formSubmit: "Send Message",
    formSentSuccess: "Thank you for reaching out! I will get back to you shortly.",
    footerText: "© 2026 Stepan Pribytkov · Junior ML Engineer",
    typingRoles: [
      "Junior ML Engineer",
      "Data Scientist",
      "NLP & LLM",
      "RAG & Hybrid Search",
      "Credit Scoring · CatBoost",
      "Adversarial Robustness"
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
  const icon = themeToggleBtn?.querySelector("i");
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

  let speed = isDeleting ? 35 : 85;

  if (!isDeleting && charIndex === currentRole.length) {
    speed = 1900; // Pause on complete title
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    typingIndex++;
    speed = 350;
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

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

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

// --- Interactive Background Canvas (Desktop fine pointer only, 0 CPU on mobile) ---
const canvas = document.getElementById("bg-canvas");
const isDesktopPointer = window.innerWidth > 768 && window.matchMedia("(pointer: fine)").matches;

if (canvas && isDesktopPointer) {
  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });

  const particles = [];
  const particleCount = 28;

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.35;
      this.vy = (Math.random() - 0.5) * 0.35;
      this.radius = Math.random() * 1.8 + 0.8;
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
    if (document.hidden) {
      requestAnimationFrame(animateCanvas);
      return;
    }
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distSq = dx * dx + dy * dy;

        if (distSq < 125 * 125) {
          const dist = Math.sqrt(distSq);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(99, 102, 241, ${0.14 * (1 - dist / 125)})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animateCanvas);
  }
  animateCanvas();
}

// --- Cursor Glow Effect (Desktop Fine Pointer Only) ---
const cursorGlow = document.querySelector(".cursor-glow");
if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {
  let glowTicking = false;
  window.addEventListener("mousemove", (e) => {
    if (!glowTicking) {
      requestAnimationFrame(() => {
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
        glowTicking = false;
      });
      glowTicking = true;
    }
  }, { passive: true });
}

// --- High-Performance Navbar Scroll & Active Section (Zero Layout Thrashing) ---
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
const backToTopBtn = document.getElementById("back-to-top");
const sections = document.querySelectorAll("section[id]");

let isScrollTicking = false;

function updateScrollState() {
  const scrollY = window.scrollY || window.pageYOffset;

  if (scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  if (backToTopBtn) {
    if (scrollY > 350) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  }

  isScrollTicking = false;
}

window.addEventListener("scroll", () => {
  if (!isScrollTicking) {
    requestAnimationFrame(updateScrollState);
    isScrollTicking = true;
  }
}, { passive: true });

// Use IntersectionObserver for active section highlighting without scroll overhead
if ('IntersectionObserver' in window && sections.length > 0) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, {
    rootMargin: "-20% 0px -65% 0px"
  });

  sections.forEach((sec) => sectionObserver.observe(sec));
}

// --- Mobile Drawer & Backdrop ---
const burgerBtn = document.getElementById("burger-btn");
const navList = document.querySelector(".nav-links");
const navBackdrop = document.getElementById("nav-backdrop");

function closeMobileMenu() {
  if (navList) navList.classList.remove("open");
  if (navBackdrop) navBackdrop.classList.remove("active");
  const icon = burgerBtn?.querySelector("i");
  if (icon) icon.className = "ri-menu-4-line";
}

if (burgerBtn && navList) {
  burgerBtn.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("open");
    if (navBackdrop) navBackdrop.classList.toggle("active", isOpen);
    const icon = burgerBtn.querySelector("i");
    if (icon) {
      icon.className = isOpen ? "ri-close-line" : "ri-menu-4-line";
    }
  });

  if (navBackdrop) {
    navBackdrop.addEventListener("click", closeMobileMenu);
  }

  navList.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
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

// --- Copy to Clipboard Buttons ---
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const textToCopy = btn.getAttribute("data-copy");
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(translations[currentLang].copiedToast);
      }).catch(() => {
        showToast(textToCopy);
      });
    }
  });
});

// --- Contact Form Submission Handler ---
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

// --- Back to top scroll (uses backToTopBtn declared above at scroll handler) ---
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// --- Initialize Everything ---
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLang);
});
