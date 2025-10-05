<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Презентация: Низкая физическая активность</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; background: linear-gradient(to bottom right, #dbeafe, #ffffff, #cffafe); min-height: 100vh; }
        .container { max-width: 1200px; margin: 0 auto; padding: 2rem; }
        .slide-container { background: white; border-radius: 1rem; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); overflow: hidden; margin-bottom: 2rem; }
        .slide-content { background: linear-gradient(to bottom right, #2563eb, #06b6d4); padding: 3rem; min-height: 500px; display: flex; flex-direction: column; justify-content: center; position: relative; }
        .slide-content::before { content: ''; position: absolute; top: 2.5rem; left: 2.5rem; width: 16rem; height: 16rem; background: white; border-radius: 50%; filter: blur(80px); opacity: 0.1; }
        .slide-content::after { content: ''; position: absolute; bottom: 2.5rem; right: 2.5rem; width: 24rem; height: 24rem; background: white; border-radius: 50%; filter: blur(80px); opacity: 0.1; }
        .slide-inner { position: relative; z-index: 10; }
        h1 { font-size: 3rem; color: white; text-align: center; margin-bottom: 1rem; }
        h2 { font-size: 2.25rem; color: white; margin-bottom: 2rem; }
        .subtitle { font-size: 1.5rem; color: #bfdbfe; text-align: center; }
        .point { display: flex; align-items: flex-start; margin-bottom: 1rem; }
        .bullet { width: 0.75rem; height: 0.75rem; background: white; border-radius: 50%; margin-top: 0.5rem; margin-right: 1rem; flex-shrink: 0; }
        .point-text { font-size: 1.25rem; color: white; line-height: 1.75; }
        .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .stat-card { background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 0.75rem; padding: 1.5rem; text-align: center; border: 1px solid rgba(255,255,255,0.2); }
        .stat-value { font-size: 2.25rem; font-weight: bold; color: white; margin-bottom: 0.5rem; }
        .stat-label { font-size: 1.125rem; color: #bfdbfe; }
        .two-column { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
        .column { background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 0.75rem; padding: 1.5rem; border: 1px solid rgba(255,255,255,0.2); }
        .column h3 { font-size: 1.5rem; color: white; margin-bottom: 1rem; }
        .column-item { display: flex; align-items: flex-start; margin-bottom: 0.75rem; }
        .check { color: white; margin-right: 0.75rem; flex-shrink: 0; }
        .item-text { color: white; font-size: 1.125rem; }
        .controls { background: white; padding: 1.5rem; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #e5e7eb; }
        .btn { padding: 0.75rem 1.5rem; border: none; border-radius: 0.5rem; cursor: pointer; font-weight: 600; font-size: 1rem; }
        .btn-primary { background: #2563eb; color: white; }
        .btn-primary:hover { background: #1d4ed8; }
        .btn-primary:disabled { background: #d1d5db; cursor: not-allowed; }
        .btn-quiz { background: linear-gradient(to right, #9333ea, #ec4899); color: white; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
        .btn-quiz:hover { opacity: 0.9; }
        .progress { display: flex; align-items: center; gap: 1rem; }
        .slide-number { font-size: 1.125rem; font-weight: 600; color: #374151; }
        .dots { display: flex; gap: 0.5rem; }
        .dot { width: 0.75rem; height: 0.75rem; border-radius: 50%; background: #d1d5db; border: none; cursor: pointer; transition: all 0.3s; }
        .dot.active { width: 2rem; background: #2563eb; }
        .quiz-container { background: white; border-radius: 1rem; padding: 2rem; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
        .quiz-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; border-bottom: 2px solid #e5e7eb; padding-bottom: 1rem; }
        .quiz-title { font-size: 1.875rem; color: #1f2937; }
        .question { border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 1.5rem; }
        .question-text { font-weight: 600; font-size: 1.125rem; margin-bottom: 1rem; color: #1f2937; }
        .option { width: 100%; text-align: left; padding: 1rem; border-radius: 0.5rem; border: 2px solid #e5e7eb; background: white; margin-bottom: 0.75rem; cursor: pointer; display: flex; align-items: center; gap: 0.75rem; }
        .option:hover { border-color: #9333ea; }
        .option.selected { border-color: #9333ea; background: #f3e8ff; }
        .radio { width: 1.5rem; height: 1.5rem; border-radius: 50%; border: 2px solid #d1d5db; display: flex; align-items: center; justify-content: center; }
        .option.selected .radio { border-color: #9333ea; background: #9333ea; }
        .radio-inner { width: 0.75rem; height: 0.75rem; background: white; border-radius: 50%; display: none; }
        .option.selected .radio-inner { display: block; }
        .submit-btn { width: 100%; padding: 1rem; background: linear-gradient(to right, #9333ea, #ec4899); color: white; border: none; border-radius: 0.75rem; font-weight: 600; font-size: 1.125rem; cursor: pointer; }
        .submit-btn:disabled { background: linear-gradient(to right, #d1d5db, #9ca3af); cursor: not-allowed; }
        .result-card { background: linear-gradient(to right, #f3e8ff, #fce7f3); border-radius: 1rem; padding: 2rem; text-align: center; margin-bottom: 2rem; }
        .result-emoji { font-size: 3.75rem; margin-bottom: 1rem; }
        .result-grade { font-size: 2.25rem; font-weight: bold; margin-bottom: 0.5rem; }
        .result-score { font-size: 1.5rem; color: #374151; }
        .progress-bar { width: 100%; background: #e5e7eb; border-radius: 9999px; height: 1rem; margin-top: 1rem; overflow: hidden; }
        .progress-fill { height: 100%; background: linear-gradient(to right, #9333ea, #ec4899); transition: width 0.5s; }
        .answer-review { border: 2px solid; border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 1rem; }
        .answer-review.correct { border-color: #86efac; background: #dcfce7; }
        .answer-review.incorrect { border-color: #fca5a5; background: #fee2e2; }
        .review-header { display: flex; gap: 0.75rem; margin-bottom: 0.75rem; }
        .review-icon { font-size: 1.5rem; }
        .review-option { padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 0.5rem; background: white; }
        .review-option.correct-answer { background: #86efac; border: 2px solid #22c55e; font-weight: 600; }
        .review-option.wrong-answer { background: #fca5a5; border: 2px solid #ef4444; }
        .btn-secondary { background: #e5e7eb; color: #1f2937; }
        .btn-secondary:hover { background: #d1d5db; }
        .hidden { display: none; }
        .emoji-large { font-size: 4rem; text-align: center; margin-bottom: 1.5rem; }
    </style>
</head>
<body>
    <div class="container">
        <div id="presentationView">
            <div class="slide-container">
                <div class="slide-content">
                    <div class="slide-inner" id="slideContent"></div>
                </div>
            </div>
            <div class="controls">
                <button class="btn btn-primary" id="prevBtn" onclick="prevSlide()">← Назад</button>
                <div class="progress">
                    <button class="btn btn-quiz" onclick="showQuiz()">📋 Пройти тест</button>
                    <span class="slide-number" id="slideNumber">1 / 15</span>
                    <div class="dots" id="dots"></div>
                </div>
                <button class="btn btn-primary" id="nextBtn" onclick="nextSlide()">Вперед →</button>
            </div>
        </div>

        <div id="quizView" class="hidden">
            <div class="quiz-container">
                <div class="quiz-header">
                    <h2 class="quiz-title">📋 Тест на знание материала</h2>
                    <button class="btn btn-secondary" onclick="hideQuiz()">Назад к презентации</button>
                </div>
                <div id="quizContent"></div>
            </div>
        </div>
    </div>

    <script>
        let currentSlide = 0;
        let quizAnswers = {};
        let quizCompleted = false;
        let score = 0;

        const slides = [
            {
                title: "Низкая физическая активность",
                subtitle: "Поведенческий фактор риска неинфекционных заболеваний",
                type: "title"
            },
            {
                title: "Определение проблемы",
                type: "content",
                points: [
                    "Физическая инертность — недостаточный уровень двигательной активности для поддержания здоровья",
                    "ВОЗ рекомендует взрослым 150-300 минут умеренной активности в неделю",
                    "Гиподинамия признана четвертым фактором риска глобальной смертности",
                    "27,5% взрослого населения мира недостаточно активны"
                ]
            },
            {
                title: "Масштаб проблемы",
                type: "stats",
                stats: [
                    { value: "1,4 млрд", label: "человек с низкой активностью" },
                    { value: "5 млн", label: "смертей ежегодно" },
                    { value: "$54 млрд", label: "прямые расходы здравоохранения" },
                    { value: "6-10%", label: "основных НИЗ связаны с гиподинамией" }
                ]
            },
            {
                title: "Причины низкой активности",
                type: "content",
                points: [
                    "Урбанизация и изменение образа жизни",
                    "Сидячий характер работы (офисный труд)",
                    "Развитие транспортных технологий",
                    "Цифровизация досуга и развлечений",
                    "Недостаток безопасных мест для активности",
                    "Низкая мотивация и отсутствие культуры движения"
                ]
            },
            {
                title: "Группы риска",
                type: "content",
                points: [
                    "Офисные работники и специалисты умственного труда",
                    "Пожилые люди (старше 60 лет)",
                    "Женщины (на 8% менее активны, чем мужчины)",
                    "Подростки (81% недостаточно активны)",
                    "Лица с низким социально-экономическим статусом",
                    "Жители мегаполисов"
                ]
            },
            {
                title: "Последствия для здоровья",
                type: "two-column",
                left: {
                    title: "Физические",
                    items: [
                        "Сердечно-сосудистые заболевания",
                        "Сахарный диабет 2 типа",
                        "Ожирение",
                        "Остеопороз",
                        "Некоторые виды рака",
                        "Метаболический синдром"
                    ]
                },
                right: {
                    title: "Психологические",
                    items: [
                        "Депрессия",
                        "Тревожные расстройства",
                        "Снижение когнитивных функций",
                        "Бессонница",
                        "Хронический стресс",
                        "Низкая самооценка"
                    ]
                }
            },
            {
                title: "Влияние на организм",
                type: "content",
                points: [
                    "Увеличение риска ИБС на 30%",
                    "Повышение риска инсульта на 35%",
                    "Риск диабета 2 типа возрастает на 50%",
                    "Вероятность рака толстой кишки выше на 30%",
                    "Снижение продолжительности жизни на 3-5 лет",
                    "Ускорение биологического старения"
                ]
            },
            {
                title: "Социально-экономические последствия",
                type: "content",
                points: [
                    "Снижение производительности труда",
                    "Увеличение дней нетрудоспособности",
                    "Рост расходов на здравоохранение",
                    "Снижение качества жизни населения",
                    "Преждевременный выход на пенсию",
                    "Потеря человеческого капитала"
                ]
            },
            {
                title: "Механизмы профилактики",
                type: "content",
                points: [
                    "Индивидуальный уровень: мотивация к изменению поведения",
                    "Межличностный: поддержка семьи и друзей",
                    "Организационный: корпоративные программы здоровья",
                    "Общественный: создание инфраструктуры для движения",
                    "Государственный: политика и программы по укреплению здоровья"
                ]
            },
            {
                title: "Рекомендации ВОЗ",
                type: "two-column",
                left: {
                    title: "Взрослые (18-64 года)",
                    items: [
                        "150-300 мин умеренной активности",
                        "75-150 мин интенсивной активности",
                        "Силовые упражнения 2+ раза в неделю",
                        "Ограничить сидячий образ жизни"
                    ]
                },
                right: {
                    title: "Пожилые (65+)",
                    items: [
                        "То же + упражнения на баланс",
                        "Функциональные упражнения 3+ раза в неделю",
                        "Адаптация интенсивности",
                        "Регулярность важнее интенсивности"
                    ]
                }
            },
            {
                title: "Стратегии вмешательства",
                type: "content",
                points: [
                    "Информационные кампании и образовательные программы",
                    "Создание велодорожек и пешеходных зон",
                    "Программы на рабочем месте (производственная гимнастика)",
                    "Популяризация активного транспорта",
                    "Развитие массового спорта и фитнеса",
                    "Мобильные приложения и носимые устройства"
                ]
            },
            {
                title: "Барьеры и их преодоление",
                type: "two-column",
                left: {
                    title: "Барьеры",
                    items: [
                        "Нехватка времени",
                        "Усталость",
                        "Отсутствие мотивации",
                        "Финансовые ограничения",
                        "Незнание как начать",
                        "Страх травм"
                    ]
                },
                right: {
                    title: "Решения",
                    items: [
                        "Короткие тренировки (10-15 мин)",
                        "Активность дает энергию",
                        "Постановка целей, трекинг",
                        "Бесплатные варианты (ходьба)",
                        "Консультации специалистов",
                        "Постепенное начало"
                    ]
                }
            },
            {
                title: "Примеры успешных программ",
                type: "content",
                points: [
                    "«10 000 шагов» — международная программа мотивации",
                    "Bike to Work — программы велосипедных поездок на работу",
                    "Active Living — комплексные городские проекты",
                    "Корпоративный фитнес в крупных компаниях",
                    "Школьные программы физического воспитания",
                    "Сообщества бегунов и любителей скандинавской ходьбы"
                ]
            },
            {
                title: "Роль медицинских работников",
                type: "content",
                points: [
                    "Скрининг уровня физической активности пациентов",
                    "Консультирование и «выписывание» физических упражнений",
                    "Мотивационное интервьюирование",
                    "Направление к специалистам по ЛФК",
                    "Мониторинг прогресса и поддержка",
                    "Личный пример здорового образа жизни"
                ]
            },
            {
                title: "Выводы и рекомендации",
                type: "conclusion",
                points: [
                    "Низкая физическая активность — глобальная проблема общественного здоровья",
                    "Требует комплексного подхода на всех уровнях",
                    "Даже небольшая активность лучше, чем ничего",
                    "Профилактика эффективнее и дешевле лечения",
                    "Каждый может внести вклад в решение проблемы"
                ]
            }
        ];

        const quizQuestions = [
            {
                question: "Сколько минут умеренной физической активности в неделю рекомендует ВОЗ для взрослых?",
                options: ["50-100 минут", "150-300 минут", "400-500 минут", "600-700 минут"],
                correct: 1
            },
            {
                question: "Какой процент взрослого населения мира недостаточно активен?",
                options: ["15%", "27,5%", "40%", "50%"],
                correct: 1
            },
            {
                question: "На сколько процентов увеличивается риск ИБС при низкой физической активности?",
                options: ["10%", "20%", "30%", "50%"],
                correct: 2
            },
            {
                question: "Сколько смертей ежегодно связано с низкой физической активностью?",
                options: ["1 млн", "3 млн", "5 млн", "10 млн"],
                correct: 2
            },
            {
                question: "Какая группа населения наиболее подвержена низкой физической активности?",
                options: ["Дети 5-10 лет", "Подростки", "Молодые взрослые", "Все группы одинаково"],
                correct: 1
            },
            {
                question: "На сколько лет может сократиться продолжительность жизни при гиподинамии?",
                options: ["1-2 года", "3-5 лет", "7-10 лет", "более 10 лет"],
                correct: 1
            },
            {
                question: "Каким по значимости фактором риска глобальной смертности признана гиподинамия?",
                options: ["Первым", "Вторым", "Третьим", "Четвертым"],
                correct: 3
            },
            {
                question: "Какие расходы на здравоохранение связаны с низкой физической активностью?",
                options: ["$10 млрд", "$30 млрд", "$54 млрд", "$100 млрд"],
                correct: 2
            },
            {
                question: "Какой процент основных неинфекционных заболеваний связан с гиподинамией?",
                options: ["2-4%", "6-10%", "15-20%", "25-30%"],
                correct: 1
            },
            {
                question: "Сколько раз в неделю рекомендуется выполнять силовые упражнения?",
                options: ["1 раз", "2 или более раз", "4 раза", "Ежедневно"],
                correct: 1
            }
        ];

        function renderSlide() {
            const slide = slides[currentSlide];
            const content = document.getElementById('slideContent');
            
            if (slide.type === 'title') {
                content.innerHTML = `
                    <div class="emoji-large">⚡</div>
                    <h1>${slide.title}</h1>
                    <p class="subtitle">${slide.subtitle}</p>
                `;
            } else if (slide.type === 'content') {
                content.innerHTML = `
                    <h2>${slide.title}</h2>
                    ${slide.points.map(point => `
                        <div class="point">
                            <div class="bullet"></div>
                            <p class="point-text">${point}</p>
                        </div>
                    `).join('')}
                `;
            } else if (slide.type === 'stats') {
                content.innerHTML = `
                    <h2 style="text-align: center;">${slide.title}</h2>
                    <div class="stats-grid">
                        ${slide.stats.map(stat => `
                            <div class="stat-card">
                                <div class="stat-value">${stat.value}</div>
                                <div class="stat-label">${stat.label}</div>
                            </div>
                        `).join('')}
                    </div>
                `;
            } else if (slide.type === 'two-column') {
                content.innerHTML = `
                    <h2 style="text-align: center;">${slide.title}</h2>
                    <div class="two-column">
                        <div class="column">
                            <h3>${slide.left.title}</h3>
                            ${slide.left.items.map(item => `
                                <div class="column-item">
                                    <span class="check">✓</span>
                                    <p class="item-text">${item}</p>
                                </div>
                            `).join('')}
                        </div>
                        <div class="column">
                            <h3>${slide.right.title}</h3>
                            ${slide.right.items.map(item => `
                                <div class="column-item">
                                    <span class="check">✓</span>
                                    <p class="item-text">${item}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            } else if (slide.type === 'conclusion') {
                content.innerHTML = `
                    <h2 style="text-align: center;">${slide.title}</h2>
                    <div class="column">
                        ${slide.points.map(point => `
                            <div class="column-item" style="margin-bottom: 1.25rem;">
                                <span style="font-size: 1.5rem; margin-right: 1rem;">🎯</span>
                                <p style="font-size: 1.25rem; color: white; font-weight: 500;">${point}</p>
                            </div>
                        `).join('')}
                    </div>
                `;
            }
            
            document.getElementById('slideNumber').textContent = `${currentSlide + 1} / ${slides.length}`;
            document.getElementById('prevBtn').disabled = currentSlide === 0;
            document.getElementById('nextBtn').disabled = currentSlide === slides.length - 1;
            
            renderDots();
        }

        function renderDots() {
            const dotsContainer = document.getElementById('dots');
            dotsContainer.innerHTML = slides.map((_, idx) => 
                `<button class="dot ${idx === currentSlide ? 'active' : ''}" onclick="goToSlide(${idx})"></button>`
            ).join('');
        }

        function nextSlide() {
            if (currentSlide < slides.length - 1) {
                currentSlide++;
                renderSlide();
            }
        }

        function prevSlide() {
            if (currentSlide > 0) {
                currentSlide--;
                renderSlide();
            }
        }

        function goToSlide(index) {
            currentSlide = index;
            renderSlide();
        }

        function showQuiz() {
            document.getElementById('presentationView').classList.add('hidden');
            document.getElementById('quizView').classList.remove('hidden');
            renderQuiz();
        }

        function hideQuiz() {
            document.getElementById('quizView').classList.add('hidden');
            document.getElementById('presentationView').classList.remove('hidden');
        }

        function renderQuiz() {
            const content = document.getElementById('quizContent');
            
            if (!quizCompleted) {
                content.innerHTML = `
                    ${quizQuestions.map((q, qIdx) => `
                        <div class="question">
                            <div class="question-text">${qIdx + 1}. ${q.question}</div>
                            ${q.options.map((option, oIdx) => `
                                <button class="option ${quizAnswers[qIdx] === oIdx ? 'selected' : ''}" 
                                        onclick="selectAnswer(${qIdx}, ${oIdx})">
                                    <span class="radio">
                                        <span class="radio-inner"></span>
                                    </span>
                                    ${option}
                                </button>
                            `).join('')}
                        </div>
                    `).join('')}
                    <button class="submit-btn" ${Object.keys(quizAnswers).length < quizQuestions.length ? 'disabled' : ''} 
                            onclick="submitQuiz()">
                        ${Object.keys(quizAnswers).length < quizQuestions.length 
                            ? `Ответьте на все вопросы (${Object.keys(quizAnswers).length}/${quizQuestions.length})`
                            : 'Проверить результаты'}
                    </button>
                `;
            } else {
                const gradeInfo = getGrade(score);
                content.innerHTML = `
                    <div class="result-card">
                        <div class="result-emoji">${gradeInfo.emoji}</div>
                        <div class="result-grade" style="color: ${gradeInfo.colorCode};">${gradeInfo.grade}</div>
                        <div class="result-score">Ваш результат: <strong>${score}</strong> из ${quizQuestions.length}</div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${(score / quizQuestions.length) * 100}%"></div>
                        </div>
                    </div>
                    ${quizQuestions.map((q, qIdx) => {
                        const userAnswer = quizAnswers[qIdx];
                        const isCorrect = userAnswer === q.correct;
                        return `
                            <div class="answer-review ${isCorrect ? 'correct' : 'incorrect'}">
                                <div class="review-header">
                                    <span class="review-icon">${isCorrect ? '✓' : '✗'}</span>
                                    <div style="flex: 1;">
                                        <div class="question-text">${qIdx + 1}. ${q.question}</div>
                                        ${q.options.map((option, oIdx) => `
                                            <div class="review-option ${oIdx === q.correct ? 'correct-answer' : oIdx === userAnswer && !isCorrect ? 'wrong-answer' : ''}">
                                                ${option}
                                                ${oIdx === q.correct ? '<span style="margin-left: 0.5rem; color: #166534;">✓ Правильный ответ</span>' : ''}
                                                ${oIdx === userAnswer && !isCorrect ? '<span style="margin-left: 0.5rem; color: #991b1b;">✗ Ваш ответ</span>' : ''}
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                    <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                        <button class="btn btn-quiz" style="flex: 1; padding: 1rem; font-size: 1.125rem;" onclick="resetQuiz()">
                            Пройти тест заново
                        </button>
                        <button class="btn btn-secondary" style="flex: 1; padding: 1rem; font-size: 1.125rem;" onclick="hideQuiz()">
                            Вернуться к презентации
                        </button>
                    </div>
                `;
            }
        }

        function selectAnswer(questionIndex, answerIndex) {
            if (!quizCompleted) {
                quizAnswers[questionIndex] = answerIndex;
                renderQuiz();
            }
        }

        function submitQuiz() {
            let correctCount = 0;
            quizQuestions.forEach((q, idx) => {
                if (quizAnswers[idx] === q.correct) {
                    correctCount++;
                }
            });
            score = correctCount;
            quizCompleted = true;
            renderQuiz();
        }

        function resetQuiz() {
            quizAnswers = {};
            quizCompleted = false;
            score = 0;
            renderQuiz();
        }

        function getGrade(score) {
            if (score >= 9) return { grade: "Отлично!", colorCode: "#059669", emoji: "🌟" };
            if (score >= 7) return { grade: "Хорошо!", colorCode: "#2563eb", emoji: "👍" };
            if (score >= 5) return { grade: "Удовлетворительно", colorCode: "#d97706", emoji: "📚" };
            return { grade: "Нужно повторить материал", colorCode: "#dc2626", emoji: "📖" };
        }

        // Инициализация
        renderSlide();
    </script>
</body>
</html>
