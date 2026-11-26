# 🧠 Портфолио | Степан Прибытков — Junior ML Engineer / Data Scientist

Персональный сайт-портфолио и интерактивное резюме **Степана Прибыткова** (Junior ML Engineer / Data Scientist · NLP и LLM).  
Сайт полностью оптимизирован для публикации на **GitHub Pages** (поддерживает как ручной выбор ветки, так и автоматический деплой через GitHub Actions).

---

## 🌟 Ключевые разделы сайта

1. **Главная (Hero)**:
   - Статус: *«Открыт к стажировкам и Junior-позициям · Москва»*.
   - Крупный serif-заголовок «ML-системы от данных до сервиса».
   - Карточка-профиль: фокус, город, образование, статус занятости.
   - Быстрые контакты: Telegram [@StepanPEme](https://t.me/StepanPEme), Email [code_stepan@mail.ru](mailto:code_stepan@mail.ru), телефон `+7 (996) 287-63-74`.

2. **Интерактивные метрики**:
   - `0.774` — ROC-AUC в кредитном скоринге (holdout, CatBoost).
   - `0.675` — MRR в RAG-поиске после реранкинга (было 0.560).
   - `355` — документов в базе знаний Tourist RAG.
   - `4 курс` — ПМИ (РГУ им. А. Н. Косыгина).

3. **Научная деятельность (ВКР 2026–2027)**:
   - Исследование влияния квантования (INT8, INT4) и дистилляции (DistilBERT, TinyBERT) устойчивость квантованных и дистиллированных моделей к адверсальным атакам (TextFooler, BERT-Attack, DeepWordBug).
   - Интерактивные карточки результатов экспериментов на датасете SST-2.

4. **Проекты**:
   - **Tourist RAG** (Pet-проект на основе задания DLS МФТИ) — гибридный поиск (dense + BM25 + RRF), реранкинг cross-encoder, Chroma, Qwen2.5, собственные RAGAS-метрики; MRR 0.675, Hit@3 0.74.
   - **Кредитный скоринг** (Home Credit Default Risk) — CatBoost против LogReg + WOE, ROC-AUC 0.7737, Gini/KS/PSI, SHAP, FastAPI, Docker, SQL.
   - **Бенчмарк робастности сжатых моделей** (ВКР) — HuggingFace, PyTorch, адверсальные атаки, квантование INT8/INT4.

5. **Образование и курсы**:
   - РГУ им. А. Н. Косыгина (Бакалавриат ПМИ, 2023–2027).
   - Deep Learning School (ФПМИ МФТИ, 2026).
   - VK Education (ML и информационный поиск, 2026).
   - Spectral::Technologies / Stepik (Алгоритмы и RL, 2026).

6. **📄 Отдельная страница резюме для печати**:
   - [`resume.html`](resume.html) — сверстанный документ в формате A4 с поддержкой тёмной/светлой темы и кнопкой **«Печать / Скачать PDF»**.

---

## 🎨 Дизайн

Светлая бело-синяя тема в духе Nous Research: светло-синий фон (`#EDF1FE`), белые карточки, фирменный синий акцент (`#0000F2`), синяя полоса метрик, бегущая mono-строка-тикер с технологиями, секционные метки в скобках (`[ 01 · ОБО МНЕ ]`), прямые углы (радиус 0), Playfair Display для заголовков, Inter для текста, JetBrains Mono для меток. Сайт полностью на русском языке.

---

## 🚀 Публикация на GitHub Pages

В репозитории уже настроен готовый GitHub Actions workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Чтобы опубликовать:
1. Закоммитьте и отправьте файлы в GitHub:
   ```bash
   git add .
   git commit -m "feat: portfolio for Junior ML Engineer"
   git push origin main
   ```
2. Откройте **Settings** в вашем репозитории [`https://github.com/code-stepan/portfolio`](https://github.com/code-stepan/portfolio).
3. Перейдите в раздел **Pages**:
   - В выпадающем списке **Source** выберите **GitHub Actions** (либо *Deploy from a branch* -> ветка `main` / root).
4. Через 1 минуту сайт будет доступен по адресу:
   👉 **`https://code-stepan.github.io/portfolio/`**

---

## 💻 Локальный просмотр

Просто откройте файл `index.html` или запустите локальный сервер:
```powershell
python -m http.server 3000
```
После чего перейдите по адресу `http://localhost:3000`.
