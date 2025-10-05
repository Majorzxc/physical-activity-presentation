<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Презентация: Низкая физическая активность</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div id="root"></div>
    
    <script type="text/babel">
        const { useState } = React;
        
        const Presentation = () => {
          const [currentSlide, setCurrentSlide] = useState(0);
          const [showQuiz, setShowQuiz] = useState(false);
          const [quizAnswers, setQuizAnswers] = useState({});
          const [quizCompleted, setQuizCompleted] = useState(false);
          const [score, setScore] = useState(0);

          const ChevronLeft = ({ className }) => (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          );

          const ChevronRight = ({ className }) => (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          );

          const Activity = ({ className }) => (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          );

          const Users = ({ className }) => (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          );

          const TrendingDown = ({ className }) => (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
            </svg>
          );

          const DollarSign = ({ className }) => (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          );

          const AlertTriangle = ({ className }) => (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          );

          const CheckCircle = ({ className }) => (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          );

          const Target = ({ className }) => (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          );

          const XCircle = ({ className }) => (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          );

          const ClipboardCheck = ({ className }) => (
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          );

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

          const slides = [
            {
              title: "Низкая физическая активность",
              subtitle: "Поведенческий фактор риска неинфекционных заболеваний",
              type: "title",
              icon: Activity
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
                { value: "1,4 млрд", label: "человек с низкой активностью", icon: Users },
                { value: "5 млн", label: "смертей ежегодно", icon: TrendingDown },
                { value: "$54 млрд", label: "прямые расходы здравоохранения", icon: DollarSign },
                { value: "6-10%", label: "основных НИЗ связаны с гиподинамией", icon: AlertTriangle }
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

          const nextSlide = () => {
            if (currentSlide < slides.length - 1) {
              setCurrentSlide(currentSlide + 1);
            }
          };

          const prevSlide = () => {
            if (currentSlide > 0) {
              setCurrentSlide(currentSlide - 1);
            }
          };

          const handleAnswerSelect = (questionIndex, answerIndex) => {
            if (!quizCompleted) {
              setQuizAnswers({...quizAnswers, [questionIndex]: answerIndex});
            }
          };

          const submitQuiz = () => {
            let correctCount = 0;
            quizQuestions.forEach((q, idx) => {
              if (quizAnswers[idx] === q.correct) {
                correctCount++;
              }
            });
            setScore(correctCount);
            setQuizCompleted(true);
          };

          const resetQuiz = () => {
            setQuizAnswers({});
            setQuizCompleted(false);
            setScore(0);
          };

          const getGrade = (score) => {
            if (score >= 9) return { grade: "Отлично!", color: "text-green-600", emoji: "🌟" };
            if (score >= 7) return { grade: "Хорошо!", color: "text-blue-600", emoji: "👍" };
            if (score >= 5) return { grade: "Удовлетворительно", color: "text-yellow-600", emoji: "📚" };
            return { grade: "Нужно повторить материал", color: "text-red-600", emoji: "📖" };
          };

          const slide = slides[currentSlide];

          if (showQuiz) {
            return (
              <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 p-8">
                <div className="max-w-4xl mx-auto">
                  <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <div className="flex items-center justify-between mb-8">
                      <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                        <ClipboardCheck className="w-8 h-8 text-purple-600" />
                        Тест на знание материала
                      </h1>
                      <button
                        onClick={() => setShowQuiz(false)}
                        className="px-4 py-2 text-gray-600 hover:text-gray-800"
                      >
                        Назад к презентации
                      </button>
                    </div>

                    {!quizCompleted ? (
                      <div className="space-y-6">
                        {quizQuestions.map((q, qIdx) => (
                          <div key={qIdx} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                            <h3 className="font-semibold text-lg mb-4 text-gray-800">
                              {qIdx + 1}. {q.question}
                            </h3>
                            <div className="space-y-3">
                              {q.options.map((option, oIdx) => (
                                <button
                                  key={oIdx}
                                  onClick={() => handleAnswerSelect(qIdx, oIdx)}
                                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                                    quizAnswers[qIdx] === oIdx
                                      ? 'border-purple-600 bg-purple-50'
                                      : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                                  }`}
                                >
                                  <span className="flex items-center gap-3">
                                    <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                      quizAnswers[qIdx] === oIdx
                                        ? 'border-purple-600 bg-purple-600'
                                        : 'border-gray-300'
                                    }`}>
                                      {quizAnswers[qIdx] === oIdx && (
                                        <span className="w-3 h-3 bg-white rounded-full"></span>
                                      )}
                                    </span>
                                    {option}
                                  </span>
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}

                        <button
                          onClick={submitQuiz}
                          disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                          className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all"
                        >
                          {Object.keys(quizAnswers).length < quizQuestions.length
                            ? `Ответьте на все вопросы (${Object.keys(quizAnswers).length}/${quizQuestions.length})`
                            : 'Проверить результаты'}
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-8">
                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 text-center">
                          <div className="text-6xl mb-4">{getGrade(score).emoji}</div>
                          <h2 className={`text-4xl font-bold mb-2 ${getGrade(score).color}`}>
                            {getGrade(score).grade}
                          </h2>
                          <p className="text-2xl text-gray-700">
                            Ваш результат: <span className="font-bold">{score}</span> из {quizQuestions.length}
                          </p>
                          <div className="mt-4">
                            <div className="w-full bg-gray-200 rounded-full h-4">
                              <div
                                className="bg-gradient-to-r from-purple-600 to-pink-600 h-4 rounded-full transition-all"
                                style={{ width: `${(score / quizQuestions.length) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {quizQuestions.map((q, qIdx) => {
                            const userAnswer = quizAnswers[qIdx];
                            const isCorrect = userAnswer === q.correct;
                            
                            return (
                              <div key={qIdx} className={`border-2 rounded-xl p-6 ${
                                isCorrect ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'
                              }`}>
                                <div className="flex items-start gap-3">
                                  {isCorrect ? (
                                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                  ) : (
                                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                                  )}
                                  <div className="flex-1">
                                    <h3 className="font-semibold text-lg mb-3 text-gray-800">
                                      {qIdx + 1}. {q.question}
                                    </h3>
                                    <div className="space-y-2">
                                      {q.options.map((option, oIdx) => (
                                        <div
                                          key={oIdx}
                                          className={`p-3 rounded-lg ${
                                            oIdx === q.correct
                                              ? 'bg-green-200 border-2 border-green-500 font-semibold'
                                              : oIdx === userAnswer && !isCorrect
                                              ? 'bg-red-200 border-2 border-red-500'
                                              : 'bg-white'
                                          }`}
                                        >
                                          {option}
                                          {oIdx === q.correct && <span className="ml-2 text-green-700">✓ Правильный ответ</span>}
                                          {oIdx === userAnswer && !isCorrect && <span className="ml-2 text-red-700">✗ Ваш ответ</span>}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <div className="flex gap-4">
                          <button
                            onClick={resetQuiz}
                            className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all"
                          >
                            Пройти тест заново
                          </button>
                          <button
                            onClick={() => setShowQuiz(false)}
                            className="flex-1 py-4 bg-gray-200 text-gray-800 rounded-xl font-semibold text-lg hover:bg-gray-300 transition-all"
                          >
                            Вернуться к презентации
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex flex-col">
              <div className="flex-1 flex items-center justify-center p-8">
                <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-blue-600 to-cyan-600 p-12 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    </div>
                    
                    {slide.type === 'title' && (
                      <div className="relative z-10 text-center">
                        {slide.icon && <slide.icon className="w-24 h-24 mx-auto mb-6 text-white" />}
                        <h1 className="text-5xl font-bold text-white mb-4">{slide.title}</h1>
                        <p className="text-2xl text-blue-100">{slide.subtitle}</p>
                      </div>
                    )}

                    {slide.type === 'content' && (
                      <div className="relative z-10">
                        <h2 className="text-4xl font-bold text-white mb-8">{slide.title}</h2>
                        <div className="space-y-4">
                          {slide.points.map((point, idx) => (
                            <div key={idx} className="flex items-start">
                              <div className="w-3 h-3 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                              <p className="text-xl text-white leading-relaxed">{point}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {slide.type === 'stats' && (
                      <div className="relative z-10">
                        <h2 className="text-4xl font-bold text-white mb-8 text-center">{slide.title}</h2>
                        <div className="grid grid-cols-2 gap-6">
                          {slide.stats.map((stat, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                              <stat.icon className="w-12 h-12 mx-auto mb-3 text-white" />
                              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                              <div className="text-lg text-blue-100">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {slide.type === 'two-column' && (
                      <div className="relative z-10">
                        <h2 className="text-4xl font-bold text-white mb-8 text-center">{slide.title}</h2>
                        <div className="grid grid-cols-2 gap-8">
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                            <h3 className="text-2xl font-bold text-white mb-4">{slide.left.title}</h3>
                            <div className="space-y-3">
                              {slide.left.items.map((item, idx) => (
                                <div key={idx} className="flex items-start">
                                  <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" />
                                  <p className="text-white text-lg">{item}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                            <h3 className="text-2xl font-bold text-white mb-4">{slide.right.title}</h3>
                            <div className="space-y-3">
                              {slide.right.items.map((item, idx) => (
                                <div key={idx} className="flex items-start">
                                  <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" />
                                  <p className="text-white text-lg">{item}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {slide.type === 'conclusion' && (
                      <div className="relative z-10">
                        <h2 className="text-4xl font-bold text-white mb-8 text-center">{slide.title}</h2>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                          <div className="space-y-5">
                            {slide.points.map((point, idx) => (
                              <div key={idx} className="flex items-start">
                                <Target className="w-6 h-6 text-white mr-4 flex-shrink-0 mt-1" />
                                <p className="text-xl text-white leading-relaxed font-medium">{point}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-white border-t border-gray-200 p-6">
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                  <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Назад
                  </button>
                  
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setShowQuiz(true)}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
                    >
                      <ClipboardCheck className="w-5 h-5" />
                      Пройти тест
                    </button>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-semibold text-gray-700">
                        {currentSlide + 1} / {slides.length}
                      </span>
                      <div className="flex gap-2">
                        {slides.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`w-3 h-3 rounded-full transition-all ${
                              idx === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={nextSlide}
                    disabled={currentSlide === slides.length - 1}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    Вперед
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          );
        };

        ReactDOM.render(<Presentation />, document.getElementById('root'));
    </script>
</body>
</html>