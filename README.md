# 🧠 Портфолио | Степан Прибытков — Junior ML Engineer

Персональный сайт-портфолио и интерактивное резюме **Степана Прибыткова** (Junior ML Engineer / NLP / LLM).  
Сайт полностью оптимизирован для публикации на **GitHub Pages** (поддерживает как ручной выбор ветки, так и автоматический деплой через GitHub Actions).

---

## 🌟 Ключевые разделы сайта

1. **Главная (Hero)**:
   - Статус: *«Ищу стажировку ML-инженером»*.
   - Динамический заголовок с печатной машинкой (*Junior ML Engineer*, *NLP & LLM Researcher*, *RAG Systems Specialist*).
   - Интерактивный терминал с кодом на Python (`stepan_ml.py`).
   - Быстрые контакты: Telegram [@StepanPEme](https://t.me/StepanPEme), Email [code_stepan@mail.ru](mailto:code_stepan@mail.ru), телефон `+7 (996) 287-63-74`.

2. **Интерактивные метрики**:
   - `81%` — Recall@10 в ColBERT RAG ретривере.
   - `15k+` — записей в датасете хакатона «Альфа-Будущее».
   - `1.8s` — p95 время ответа агентной системы.
   - `4 курс` — ПМИ (РГУ им. А. Н. Косыгина).

3. **Научная деятельность (ВКР 2026–2027)**:
   - Исследование влияния квантования (INT8, INT4) и дистилляции (DistilBERT, TinyBERT) на устойчивость моделей к адверсальным атакам (TextFooler, BERT-Attack).
   - Интерактивные карточки результатов экспериментов на датасете SST-2.

4. **Проекты и хакатоны**:
   - **Интеллектуальная RAG-система** (Хакатон «Альфа-Будущее», диплом участника) — ColBERT, FAISS-GPU, LangChain, Qwen2.5-7B.
   - **Бенчмарк робастности сжатых моделей** (HuggingFace, TextAttack, BitsAndBytes).
   - **Пайплайны ранжирования и ML** (CatBoost, scikit-learn, VK Education & DLS).

5. **Образование и курсы**:
   - РГУ им. А. Н. Косыгина (Бакалавриат ПМИ, 2023–2027).
   - Deep Learning School (ФПМИ МФТИ, 2026).
   - VK Education (ML и информационный поиск, 2026).
   - Spectral::Technologies / Stepik (Алгоритмы и RL, 2026).

6. **📄 Отдельная страница резюме для печати**:
   - [`resume.html`](resume.html) — сверстанный документ в формате A4 с поддержкой тёмной/светлой темы и кнопкой **«Печать / Скачать PDF»**.

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
