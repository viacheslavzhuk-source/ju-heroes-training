// ===== JU Heroes Training — Education Module =====
// Pilot: Module 1 — AI-грамотность и промпт-инжиниринг (10 лет)

const EDU_QUESTS = [
    // === Тема 1: Что такое AI ===
    {
        id: 'ai-1-flashcards', cat: 'learn', type: 'flashcard', icon: '🃏',
        name: 'Карточки: Что такое AI',
        desc: 'Изучи 6 карточек об искусственном интеллекте',
        points: 40, diff: 'Легко', module: 'ai-literacy', topic: 1,
        content: {
            cards: [
                {
                    front: 'Что такое искусственный интеллект (AI)?',
                    back: 'Это компьютерная программа, которая умеет учиться на примерах и принимать решения — почти как человек, но без эмоций и сознания.',
                    emoji: '🤖'
                },
                {
                    front: 'Чем AI отличается от обычной программы?',
                    back: 'Обычная программа выполняет только то, что написал программист. AI может учиться на данных и улучшать свои ответы со временем.',
                    emoji: '⚡'
                },
                {
                    front: 'Где мы встречаем AI каждый день?',
                    back: 'Голосовые помощники (Siri, Алиса), рекомендации в YouTube и TikTok, автокоррекция текста, фильтры в Instagram, навигатор в машине.',
                    emoji: '📱'
                },
                {
                    front: 'Что такое нейронная сеть?',
                    back: 'Это математическая модель, вдохновлённая мозгом человека. Она состоит из «нейронов» — узлов, которые передают информацию друг другу.',
                    emoji: '🧠'
                },
                {
                    front: 'Может ли AI думать как человек?',
                    back: 'Нет! AI не понимает смысл слов и не имеет чувств. Он находит закономерности в данных и генерирует ответы на основе статистики.',
                    emoji: '🤔'
                },
                {
                    front: 'Что такое «обучение» AI?',
                    back: 'Это процесс, когда AI анализирует миллионы примеров (текстов, картинок) и запоминает закономерности. Как ты учишься по учебнику, только в миллион раз быстрее!',
                    emoji: '📚'
                },
            ]
        }
    },
    {
        id: 'ai-1-quiz', cat: 'learn', type: 'quiz', icon: '📝',
        name: 'Тест: Что такое AI',
        desc: 'Проверь свои знания об искусственном интеллекте',
        points: 60, diff: 'Легко', module: 'ai-literacy', topic: 1,
        content: {
            questions: [
                {
                    q: 'Что такое искусственный интеллект?',
                    options: [
                        'Робот из фильма',
                        'Программа, которая учится на данных',
                        'Суперкомпьютер в космосе',
                        'Электронный мозг с чувствами'
                    ],
                    correct: 1,
                    explanation: 'AI — это программа, которая анализирует данные и учится находить закономерности, чтобы решать задачи.'
                },
                {
                    q: 'Какой из этих примеров использует AI?',
                    options: [
                        'Калькулятор',
                        'Будильник',
                        'Рекомендации видео в YouTube',
                        'Электронные часы'
                    ],
                    correct: 2,
                    explanation: 'YouTube использует AI, чтобы анализировать что тебе нравится и предлагать похожие видео.'
                },
                {
                    q: 'Чем AI отличается от обычной программы?',
                    options: [
                        'AI работает быстрее',
                        'AI дороже',
                        'AI умеет учиться на примерах',
                        'AI всегда прав'
                    ],
                    correct: 2,
                    explanation: 'Главное отличие — AI может обучаться на данных и улучшать свои результаты, а обычная программа делает только то, что запрограммировали.'
                },
                {
                    q: 'Может ли AI по-настоящему думать и чувствовать?',
                    options: [
                        'Да, как человек',
                        'Нет, он только обрабатывает данные',
                        'Да, но только дорогие модели',
                        'Скоро сможет'
                    ],
                    correct: 1,
                    explanation: 'AI не имеет сознания и эмоций. Он обрабатывает данные по математическим правилам и находит закономерности.'
                },
                {
                    q: 'Что вдохновило учёных на создание нейронных сетей?',
                    options: [
                        'Интернет',
                        'Мозг человека',
                        'Компьютерные игры',
                        'Социальные сети'
                    ],
                    correct: 1,
                    explanation: 'Нейронные сети названы так потому, что их структура вдохновлена работой нейронов в мозге человека.'
                }
            ]
        }
    },
    {
        id: 'ai-1-infographic', cat: 'learn', type: 'infographic', icon: '📊',
        name: 'Инфографика: Как работает AI',
        desc: 'Изучи визуальную схему работы искусственного интеллекта',
        points: 30, diff: 'Легко', module: 'ai-literacy', topic: 1,
        content: {
            title: 'Как AI учится и работает',
            steps: [
                { icon: '📦', title: 'Данные', desc: 'AI получает миллионы примеров: тексты, картинки, числа', color: '#6c5ce7' },
                { icon: '🧠', title: 'Обучение', desc: 'Нейронная сеть находит закономерности в данных', color: '#00cec9' },
                { icon: '🎯', title: 'Модель', desc: 'Результат обучения — модель, которая умеет предсказывать', color: '#fdcb6e' },
                { icon: '💬', title: 'Запрос', desc: 'Ты задаёшь вопрос или даёшь задание AI', color: '#e17055' },
                { icon: '✨', title: 'Ответ', desc: 'AI генерирует ответ на основе выученных закономерностей', color: '#00b894' },
            ],
            funFact: 'ChatGPT обучался на текстах из интернета объёмом более 500 миллиардов слов — это как прочитать все книги в 1000 библиотеках!'
        }
    },
    {
        id: 'ai-1-audio', cat: 'learn', type: 'audio', icon: '🎧',
        name: 'Аудио: Знакомство с AI',
        desc: 'Послушай рассказ о том, что такое искусственный интеллект',
        points: 35, diff: 'Легко', module: 'ai-literacy', topic: 1,
        content: {
            sections: [
                {
                    title: 'Что такое AI?',
                    text: 'Представь, что у тебя есть очень умный помощник, который никогда не устаёт и может обработать огромное количество информации за секунду. Это и есть искусственный интеллект, или AI. Но важно понимать: AI не думает как человек. Он не понимает шутки, не чувствует радость и не мечтает. AI — это математическая программа, которая находит закономерности в данных.'
                },
                {
                    title: 'Как AI учится?',
                    text: 'AI учится примерно так же, как ты учишься различать кошек и собак. Когда тебе показали сотни фотографий кошек, ты запомнил, что у них острые уши, усы и пушистый хвост. AI делает то же самое, только ему нужны миллионы примеров. Он анализирует данные, находит закономерности и запоминает их. Этот процесс называется машинное обучение.'
                },
                {
                    title: 'AI вокруг нас',
                    text: 'Ты уже используешь AI каждый день, даже если не замечаешь! Когда YouTube рекомендует тебе видео — это AI. Когда телефон исправляет опечатки — это AI. Когда навигатор строит маршрут, обходя пробки — это тоже AI. Голосовые помощники Сири и Алиса — это AI, который понимает человеческую речь. Фильтры в Инстаграме, которые меняют твоё лицо — это тоже нейронные сети!'
                }
            ]
        }
    },

    // === Тема 2: Основы работы с ChatGPT ===
    {
        id: 'ai-2-flashcards', cat: 'learn', type: 'flashcard', icon: '🃏',
        name: 'Карточки: ChatGPT и чат-боты',
        desc: 'Узнай как работают чат-боты и нейросети',
        points: 40, diff: 'Легко', module: 'ai-literacy', topic: 2,
        content: {
            cards: [
                {
                    front: 'Что такое ChatGPT?',
                    back: 'Это AI-чатбот от компании OpenAI. Он умеет вести диалог, отвечать на вопросы, писать тексты и помогать с учёбой. Работает на модели GPT.',
                    emoji: '💬'
                },
                {
                    front: 'Что значит «GPT»?',
                    back: 'GPT = Generative Pre-trained Transformer. Generative — генерирует текст. Pre-trained — предварительно обученный. Transformer — тип нейросети.',
                    emoji: '🔤'
                },
                {
                    front: 'Как ChatGPT генерирует ответ?',
                    back: 'Он предсказывает следующее слово в предложении, одно за другим. Каждое новое слово зависит от всех предыдущих. Как автозаполнение, только гораздо умнее!',
                    emoji: '⚙️'
                },
                {
                    front: 'Какие ещё есть AI-чатботы?',
                    back: 'Claude (Anthropic), Gemini (Google), Copilot (Microsoft), YandexGPT (Яндекс). Каждый имеет свои сильные стороны.',
                    emoji: '🤖'
                },
                {
                    front: 'Безопасно ли использовать AI-чатботы?',
                    back: 'Да, если соблюдать правила: не делиться личными данными (пароли, адрес), проверять ответы AI, не верить всему на слово.',
                    emoji: '🔒'
                },
                {
                    front: 'В чём AI-чатбот может ошибаться?',
                    back: 'AI может: придумывать факты (галлюцинации), давать устаревшую информацию, не понимать контекст, предвзято отвечать. Всегда проверяй!',
                    emoji: '⚠️'
                },
            ]
        }
    },
    {
        id: 'ai-2-quiz', cat: 'learn', type: 'quiz', icon: '📝',
        name: 'Тест: ChatGPT и нейросети',
        desc: 'Проверь знания о чат-ботах и нейросетях',
        points: 60, diff: 'Средне', module: 'ai-literacy', topic: 2,
        content: {
            questions: [
                {
                    q: 'Что делает ChatGPT при генерации ответа?',
                    options: [
                        'Ищет ответ в интернете',
                        'Предсказывает следующее слово',
                        'Копирует из энциклопедии',
                        'Спрашивает у программиста'
                    ],
                    correct: 1,
                    explanation: 'ChatGPT генерирует текст, предсказывая самое вероятное следующее слово, основываясь на контексте разговора.'
                },
                {
                    q: 'Что такое «галлюцинации» AI?',
                    options: [
                        'Когда AI видит картинки',
                        'Когда AI уверенно выдаёт ложную информацию',
                        'Когда AI зависает',
                        'Когда AI показывает рекламу'
                    ],
                    correct: 1,
                    explanation: 'Галлюцинации — это когда AI генерирует ответ, который звучит правдоподобно, но на самом деле неверен. Поэтому ответы AI нужно проверять!'
                },
                {
                    q: 'Какую информацию НЕ стоит сообщать AI-чатботу?',
                    options: [
                        'Тему школьного проекта',
                        'Свой домашний адрес и пароли',
                        'Вопрос по математике',
                        'Название любимого фильма'
                    ],
                    correct: 1,
                    explanation: 'Никогда не делись с AI личными данными: паролями, адресом, номером телефона, данными банковских карт.'
                },
                {
                    q: 'Какая компания создала ChatGPT?',
                    options: [
                        'Google',
                        'Apple',
                        'OpenAI',
                        'Microsoft'
                    ],
                    correct: 2,
                    explanation: 'ChatGPT создан компанией OpenAI. Google создал Gemini, а Anthropic создал Claude.'
                },
                {
                    q: 'За что расшифровывается «T» в GPT?',
                    options: [
                        'Text',
                        'Transformer',
                        'Technology',
                        'Training'
                    ],
                    correct: 1,
                    explanation: 'T = Transformer — это архитектура нейронной сети, которая особенно хорошо работает с текстом и языком.'
                }
            ]
        }
    },

    // === Тема 3: Промпт-инжиниринг ===
    {
        id: 'ai-3-infographic', cat: 'learn', type: 'infographic', icon: '📊',
        name: 'Инфографика: Промпт-инжиниринг',
        desc: 'Узнай секреты правильных запросов к AI',
        points: 40, diff: 'Средне', module: 'ai-literacy', topic: 3,
        content: {
            title: 'Как составить идеальный промпт',
            steps: [
                { icon: '🎯', title: 'Будь конкретным', desc: '«Напиши сочинение про космос» → «Напиши сочинение на 200 слов про Марс для 5-го класса»', color: '#6c5ce7' },
                { icon: '🎭', title: 'Задай роль', desc: '«Ты — учитель физики. Объясни гравитацию простыми словами для 10-летнего ребёнка»', color: '#00cec9' },
                { icon: '📏', title: 'Укажи формат', desc: '«Ответь списком из 5 пунктов» или «Сделай таблицу сравнения»', color: '#fdcb6e' },
                { icon: '🔄', title: 'Уточняй', desc: 'Если ответ не понравился — попроси переделать: «Сделай короче» или «Добавь примеры»', color: '#e17055' },
                { icon: '✅', title: 'Проверяй', desc: 'Всегда проверяй факты из ответа AI. Спроси себя: «Это точно правда?»', color: '#00b894' },
            ],
            funFact: 'Профессия «промпт-инженер» — одна из самых новых в мире! Хорошие специалисты зарабатывают от $100,000 в год, просто правильно формулируя запросы к AI.'
        }
    },
    {
        id: 'ai-3-quiz', cat: 'learn', type: 'quiz', icon: '📝',
        name: 'Тест: Мастер промптов',
        desc: 'Покажи, что умеешь составлять запросы к AI',
        points: 70, diff: 'Средне', module: 'ai-literacy', topic: 3,
        content: {
            questions: [
                {
                    q: 'Какой промпт даст лучший результат?',
                    options: [
                        '«Напиши что-нибудь»',
                        '«Напиши стих»',
                        '«Напиши весёлый стих про кота в 4 строчки для детей»',
                        '«Стих. Кот. Весёлый.»'
                    ],
                    correct: 2,
                    explanation: 'Чем конкретнее запрос (тема, стиль, длина, аудитория), тем лучше результат. Третий промпт содержит все важные детали.'
                },
                {
                    q: 'Что такое «роль» в промпте?',
                    options: [
                        'Когда AI притворяется',
                        'Когда мы говорим AI, от чьего лица отвечать',
                        'Это пароль для AI',
                        'Это название модели'
                    ],
                    correct: 1,
                    explanation: '«Роль» — это когда мы просим AI отвечать как эксперт. Например: «Ты — опытный повар. Дай рецепт пиццы.» Это помогает получить более качественный ответ.'
                },
                {
                    q: 'Что делать, если AI дал плохой ответ?',
                    options: [
                        'Сразу закрыть чат',
                        'Уточнить запрос и попросить переделать',
                        'Пожаловаться',
                        'Ничего, AI всегда прав'
                    ],
                    correct: 1,
                    explanation: 'AI можно попросить переделать ответ! Уточни что не так: «Сделай проще», «Добавь примеры», «Перепиши короче».'
                },
                {
                    q: 'Какой элемент НЕ помогает улучшить промпт?',
                    options: [
                        'Указать формат ответа',
                        'Написать КАПСОМ',
                        'Дать пример желаемого результата',
                        'Добавить контекст'
                    ],
                    correct: 1,
                    explanation: 'КАПС не улучшает ответ AI. А вот формат, примеры и контекст реально помогают получить лучший результат.'
                },
                {
                    q: 'Что такое «few-shot prompting»?',
                    options: [
                        'Быстрый запрос',
                        'Когда даёшь AI несколько примеров перед заданием',
                        'Когда спрашиваешь мало вопросов',
                        'Короткий промпт'
                    ],
                    correct: 1,
                    explanation: 'Few-shot — это когда ты даёшь AI 2-3 примера формата ответа перед основным заданием. Это помогает AI понять, что именно ты хочешь.'
                }
            ]
        }
    },
    {
        id: 'ai-3-audio', cat: 'learn', type: 'audio', icon: '🎧',
        name: 'Аудио: Секреты промптов',
        desc: 'Послушай советы по составлению запросов к AI',
        points: 35, diff: 'Средне', module: 'ai-literacy', topic: 3,
        content: {
            sections: [
                {
                    title: 'Зачем учиться писать промпты?',
                    text: 'Промпт — это запрос, который ты пишешь AI. От того, как ты его сформулируешь, зависит качество ответа. Это как разговор с очень умным, но буквальным собеседником. Если ты скажешь «расскажи про животных», он может рассказать про муравьёв, а ты хотел про дельфинов. Поэтому важно быть точным!'
                },
                {
                    title: 'Формула хорошего промпта',
                    text: 'Вот простая формула: Роль плюс Задача плюс Контекст плюс Формат. Например: Ты учитель биологии. Объясни фотосинтез. Для ребёнка 10 лет. Простыми словами с примерами из жизни. Чем больше деталей ты дашь, тем точнее будет ответ.'
                },
                {
                    title: 'Главное правило',
                    text: 'Запомни: AI — это инструмент, а не волшебник. Он не читает мысли. Если тебе не понравился ответ — не стесняйся переспрашивать и уточнять. Лучшие промпт-инженеры переписывают свои запросы по 5-10 раз, чтобы получить идеальный результат. И это совершенно нормально!'
                }
            ]
        }
    },

    // === Тема 4: AI для учёбы и творчества ===
    {
        id: 'ai-4-flashcards', cat: 'learn', type: 'flashcard', icon: '🃏',
        name: 'Карточки: AI в учёбе',
        desc: 'Узнай как AI может помочь с учёбой и творчеством',
        points: 40, diff: 'Средне', module: 'ai-literacy', topic: 4,
        content: {
            cards: [
                {
                    front: 'Как AI может помочь с домашкой?',
                    back: 'AI может объяснить тему простыми словами, помочь разобрать задачу по шагам, предложить план сочинения, проверить орфографию. Но делать домашку ЗА тебя — нечестно!',
                    emoji: '📖'
                },
                {
                    front: 'Что такое AI-генерация изображений?',
                    back: 'Нейросети вроде Midjourney и DALL-E создают картинки по текстовому описанию. Ты пишешь «кот в космосе» — и AI рисует это!',
                    emoji: '🎨'
                },
                {
                    front: 'Как AI помогает в творчестве?',
                    back: 'AI может: генерировать идеи для историй, помочь написать стих или песню, создать иллюстрацию, предложить дизайн, помочь с музыкой.',
                    emoji: '✨'
                },
                {
                    front: 'Можно ли использовать тексты AI в школе?',
                    back: 'Можно использовать AI как помощника для ПОНИМАНИЯ темы. Но выдавать текст AI за свою работу — это плагиат. Учителя могут это проверить!',
                    emoji: '⚖️'
                },
                {
                    front: 'Какие AI-инструменты полезны для учёбы?',
                    back: 'ChatGPT/Claude для объяснений, Notion AI для заметок, Quizlet для карточек, Grammarly для проверки текста, Khan Academy с AI-репетитором.',
                    emoji: '🛠️'
                },
            ]
        }
    },
    {
        id: 'ai-4-infographic', cat: 'learn', type: 'infographic', icon: '📊',
        name: 'Схема: AI-инструменты',
        desc: 'Карта AI-инструментов для учёбы и творчества',
        points: 35, diff: 'Средне', module: 'ai-literacy', topic: 4,
        content: {
            title: 'AI-инструменты для школьников',
            steps: [
                { icon: '💬', title: 'Чат-боты', desc: 'ChatGPT, Claude, Gemini — объясняют темы, помогают с задачами', color: '#6c5ce7' },
                { icon: '🎨', title: 'Генерация картинок', desc: 'Midjourney, DALL-E, Kandinsky — рисуют по описанию', color: '#e17055' },
                { icon: '📝', title: 'Работа с текстом', desc: 'Grammarly, Notion AI — проверка и улучшение текстов', color: '#00cec9' },
                { icon: '🎵', title: 'Музыка и звук', desc: 'Suno, Udio — генерация музыки по описанию стиля', color: '#fdcb6e' },
                { icon: '🎬', title: 'Видео', desc: 'Runway, Pika — создание коротких видео из текста', color: '#00b894' },
            ],
            funFact: 'В 2025 году более 60% школьников в мире уже использовали AI-инструменты для учёбы. Главное — использовать их правильно!'
        }
    },

    // === Тема 5: Этика AI ===
    {
        id: 'ai-5-quiz', cat: 'learn', type: 'quiz', icon: '📝',
        name: 'Тест: Этика и AI',
        desc: 'Разберись в правилах честного использования AI',
        points: 80, diff: 'Средне', module: 'ai-literacy', topic: 5,
        content: {
            questions: [
                {
                    q: 'Одноклассник скопировал ответ ChatGPT и сдал как своё сочинение. Это нормально?',
                    options: [
                        'Да, все так делают',
                        'Нет, это нечестно — как списать у друга',
                        'Да, AI сам написал',
                        'Зависит от учителя'
                    ],
                    correct: 1,
                    explanation: 'Выдавать работу AI за свою — это плагиат. AI можно использовать для помощи в понимании темы, но сочинение нужно писать самому!'
                },
                {
                    q: 'AI создал картинку, очень похожую на работу известного художника. Чьи авторские права?',
                    options: [
                        'Твои — ты написал промпт',
                        'AI — он нарисовал',
                        'Это сложный вопрос без простого ответа',
                        'Художника — AI скопировал'
                    ],
                    correct: 2,
                    explanation: 'Авторское право на AI-контент — это новая и сложная тема. Законы разных стран пока по-разному решают этот вопрос.'
                },
                {
                    q: 'Что такое «предвзятость» (bias) AI?',
                    options: [
                        'Когда AI любит одних людей больше других',
                        'Когда AI даёт неравные ответы из-за данных обучения',
                        'Когда AI работает медленно',
                        'Когда AI показывает рекламу'
                    ],
                    correct: 1,
                    explanation: 'Если AI обучался на неравных данных, он может давать предвзятые ответы. Например, стереотипы о профессиях или народах.'
                },
                {
                    q: 'Как правильно указать, что в проекте использовался AI?',
                    options: [
                        'Не нужно указывать',
                        'Написать «Создано AI» и всё',
                        'Указать какой AI использовался и для чего',
                        'Скрыть это от всех'
                    ],
                    correct: 2,
                    explanation: 'Честно указывай: «Использовал ChatGPT для генерации идей» или «Иллюстрация создана с помощью Midjourney». Это показывает твою честность!'
                },
                {
                    q: 'AI написал неправильную информацию в твоём проекте. Кто виноват?',
                    options: [
                        'AI виноват',
                        'Компания-разработчик AI',
                        'Ты — потому что не проверил',
                        'Никто не виноват'
                    ],
                    correct: 2,
                    explanation: 'Ты несёшь ответственность за свою работу. AI — инструмент, и ты должен проверять всё, что он генерирует. Критическое мышление — твоя суперсила!'
                }
            ]
        }
    },
    {
        id: 'ai-5-audio', cat: 'learn', type: 'audio', icon: '🎧',
        name: 'Аудио: Этика AI',
        desc: 'Послушай о правилах честного использования AI',
        points: 35, diff: 'Средне', module: 'ai-literacy', topic: 5,
        content: {
            sections: [
                {
                    title: 'Честность и AI',
                    text: 'Использовать AI — это нормально и даже полезно. Но есть важное правило: будь честен. Если ты используешь AI для школьного проекта, скажи об этом. Если AI помог тебе разобраться в теме — отлично! Но если ты просто скопировал ответ AI и выдал за свой — это нечестно, как списывание.'
                },
                {
                    title: 'Критическое мышление',
                    text: 'AI может ошибаться. Он может уверенно говорить неправду — это называется галлюцинации. Поэтому всегда включай своё критическое мышление. Проверяй факты из AI через надёжные источники: учебники, энциклопедии, научные сайты. Не верь AI на слово, даже если ответ звучит убедительно.'
                },
                {
                    title: 'Твоя ответственность',
                    text: 'Запомни главное правило: AI — это инструмент, как калькулятор или ручка. Ответственность за результат всегда лежит на тебе. Если ты используешь AI, чтобы стать лучше и умнее — это здорово. Если используешь, чтобы обмануть — это плохо. Выбор за тобой, и от этого выбора зависит, каким человеком ты станешь.'
                }
            ]
        }
    },
];

// ===== Education Quest Logic =====

// Current education state
let eduState = {
    currentCardIndex: 0,
    quizAnswers: [],
    quizCurrentQ: 0,
    quizScore: 0,
    audioPlaying: false,
    audioSection: 0,
    isFlipped: false,
};

function resetEduState() {
    eduState = {
        currentCardIndex: 0,
        quizAnswers: [],
        quizCurrentQ: 0,
        quizScore: 0,
        audioPlaying: false,
        audioSection: 0,
        isFlipped: false,
    };
}

// ===== Open Education Quest =====
function openEduQuest(questId) {
    const quest = EDU_QUESTS.find(q => q.id === questId);
    if (!quest) return;

    currentQuestId = questId;
    resetEduState();

    const screen = document.getElementById('edu-screen');
    document.getElementById('edu-back-btn').onclick = () => {
        stopAudio();
        showScreen('dashboard-screen');
        updateDashboard();
    };

    document.getElementById('edu-quest-name').textContent = quest.name;
    document.getElementById('edu-quest-desc').textContent = quest.desc;
    document.getElementById('edu-points-badge').textContent = quest.points + ' баллов';
    document.getElementById('edu-diff-badge').textContent = quest.diff;

    const contentArea = document.getElementById('edu-content-area');

    switch (quest.type) {
        case 'flashcard':
            renderFlashcards(quest, contentArea);
            break;
        case 'quiz':
            renderQuiz(quest, contentArea);
            break;
        case 'infographic':
            renderInfographic(quest, contentArea);
            break;
        case 'audio':
            renderAudio(quest, contentArea);
            break;
    }

    // Complete button
    const completeBtn = document.getElementById('edu-complete-btn');
    const done = state.completed.includes(questId);
    if (done) {
        completeBtn.textContent = '✓ Квест выполнен';
        completeBtn.disabled = true;
        completeBtn.className = 'btn btn-glow btn-lg edu-complete-done';
    } else {
        completeBtn.textContent = 'Завершить квест';
        completeBtn.disabled = (quest.type === 'quiz'); // Quiz needs to be completed first
        completeBtn.className = 'btn btn-glow btn-lg';
        completeBtn.onclick = () => completeEduQuest(questId);
    }

    showScreen('edu-screen');
}

// ===== Flashcard Renderer =====
function renderFlashcards(quest, container) {
    const cards = quest.content.cards;
    container.innerHTML = `
        <div class="flashcard-container">
            <div class="flashcard-progress">
                <span id="fc-counter">1 / ${cards.length}</span>
                <div class="fc-progress-bar"><div id="fc-progress-fill" style="width: ${100/cards.length}%"></div></div>
            </div>
            <div class="flashcard-wrapper">
                <div class="flashcard" id="flashcard" onclick="flipCard()">
                    <div class="flashcard-front">
                        <div class="fc-emoji">${cards[0].emoji}</div>
                        <div class="fc-text">${cards[0].front}</div>
                        <div class="fc-hint">Нажми чтобы перевернуть</div>
                    </div>
                    <div class="flashcard-back">
                        <div class="fc-text">${cards[0].back}</div>
                    </div>
                </div>
            </div>
            <div class="flashcard-nav">
                <button class="btn btn-sm fc-prev" id="fc-prev" onclick="prevCard()" disabled>
                    ← Назад
                </button>
                <button class="btn btn-sm btn-glow fc-next" id="fc-next" onclick="nextCard()">
                    Далее →
                </button>
            </div>
        </div>
    `;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    eduState.isFlipped = !eduState.isFlipped;
    card.classList.toggle('flipped', eduState.isFlipped);
}

function nextCard() {
    const quest = EDU_QUESTS.find(q => q.id === currentQuestId);
    if (!quest) return;
    const cards = quest.content.cards;

    if (eduState.currentCardIndex < cards.length - 1) {
        eduState.currentCardIndex++;
        eduState.isFlipped = false;
        updateFlashcard(quest);
    }
}

function prevCard() {
    const quest = EDU_QUESTS.find(q => q.id === currentQuestId);
    if (!quest) return;

    if (eduState.currentCardIndex > 0) {
        eduState.currentCardIndex--;
        eduState.isFlipped = false;
        updateFlashcard(quest);
    }
}

function updateFlashcard(quest) {
    const cards = quest.content.cards;
    const i = eduState.currentCardIndex;
    const card = document.getElementById('flashcard');

    card.classList.remove('flipped');

    setTimeout(() => {
        card.querySelector('.flashcard-front .fc-emoji').textContent = cards[i].emoji;
        card.querySelector('.flashcard-front .fc-text').textContent = cards[i].front;
        card.querySelector('.flashcard-back .fc-text').textContent = cards[i].back;
    }, 150);

    document.getElementById('fc-counter').textContent = `${i + 1} / ${cards.length}`;
    document.getElementById('fc-progress-fill').style.width = `${((i + 1) / cards.length) * 100}%`;
    document.getElementById('fc-prev').disabled = (i === 0);

    const nextBtn = document.getElementById('fc-next');
    if (i === cards.length - 1) {
        nextBtn.textContent = '✓ Готово';
        nextBtn.onclick = () => {
            document.getElementById('edu-complete-btn').disabled = false;
        };
    } else {
        nextBtn.textContent = 'Далее →';
        nextBtn.onclick = nextCard;
    }
}

// ===== Quiz Renderer =====
function renderQuiz(quest, container) {
    eduState.quizCurrentQ = 0;
    eduState.quizScore = 0;
    eduState.quizAnswers = [];
    renderQuizQuestion(quest, container);
}

function renderQuizQuestion(quest, container) {
    const questions = quest.content.questions;
    const qi = eduState.quizCurrentQ;
    const q = questions[qi];

    container.innerHTML = `
        <div class="quiz-container">
            <div class="quiz-progress">
                <span>Вопрос ${qi + 1} из ${questions.length}</span>
                <div class="quiz-progress-bar"><div id="quiz-progress-fill" style="width: ${((qi + 1) / questions.length) * 100}%"></div></div>
            </div>
            <div class="quiz-question">
                <h3>${q.q}</h3>
            </div>
            <div class="quiz-options" id="quiz-options">
                ${q.options.map((opt, oi) => `
                    <button class="quiz-option" data-index="${oi}" onclick="selectQuizOption(${oi})">
                        <span class="qo-letter">${['A', 'B', 'C', 'D'][oi]}</span>
                        <span class="qo-text">${opt}</span>
                    </button>
                `).join('')}
            </div>
            <div class="quiz-explanation" id="quiz-explanation" hidden>
                <div class="quiz-exp-icon" id="quiz-exp-icon"></div>
                <p id="quiz-exp-text"></p>
                <button class="btn btn-glow btn-sm" id="quiz-next-btn" onclick="nextQuizQuestion()">
                    ${qi < questions.length - 1 ? 'Следующий вопрос →' : 'Результаты'}
                </button>
            </div>
        </div>
    `;
}

function selectQuizOption(optionIndex) {
    const quest = EDU_QUESTS.find(q => q.id === currentQuestId);
    if (!quest) return;

    const q = quest.content.questions[eduState.quizCurrentQ];
    const isCorrect = optionIndex === q.correct;

    if (isCorrect) eduState.quizScore++;
    eduState.quizAnswers.push(optionIndex);

    // Highlight answers
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((opt, i) => {
        opt.disabled = true;
        opt.style.pointerEvents = 'none';
        if (i === q.correct) {
            opt.classList.add('correct');
        } else if (i === optionIndex && !isCorrect) {
            opt.classList.add('wrong');
        }
    });

    // Show explanation
    const expEl = document.getElementById('quiz-explanation');
    const expIcon = document.getElementById('quiz-exp-icon');
    const expText = document.getElementById('quiz-exp-text');

    expIcon.textContent = isCorrect ? '✅' : '❌';
    expText.textContent = q.explanation;
    expEl.hidden = false;
}

function nextQuizQuestion() {
    const quest = EDU_QUESTS.find(q => q.id === currentQuestId);
    if (!quest) return;

    const questions = quest.content.questions;
    eduState.quizCurrentQ++;

    if (eduState.quizCurrentQ >= questions.length) {
        renderQuizResults(quest);
    } else {
        renderQuizQuestion(quest, document.getElementById('edu-content-area'));
    }
}

function renderQuizResults(quest) {
    const total = quest.content.questions.length;
    const score = eduState.quizScore;
    const pct = Math.round((score / total) * 100);
    const passed = pct >= 60;

    const container = document.getElementById('edu-content-area');
    container.innerHTML = `
        <div class="quiz-results">
            <div class="qr-icon">${passed ? '🎉' : '📚'}</div>
            <h3>${passed ? 'Отличный результат!' : 'Попробуй ещё раз!'}</h3>
            <div class="qr-score">${score} / ${total}</div>
            <div class="qr-pct">${pct}% правильных ответов</div>
            <div class="qr-bar"><div class="qr-bar-fill" style="width: ${pct}%; background: ${passed ? 'var(--success)' : 'var(--danger)'}"></div></div>
            <div class="qr-stars">
                ${pct >= 20 ? '⭐' : '☆'}${pct >= 40 ? '⭐' : '☆'}${pct >= 60 ? '⭐' : '☆'}${pct >= 80 ? '⭐' : '☆'}${pct >= 100 ? '⭐' : '☆'}
            </div>
            ${!passed ? '<button class="btn btn-glow btn-sm" onclick="retryQuiz()" style="margin-top:12px">Попробовать снова</button>' : ''}
        </div>
    `;

    if (passed) {
        document.getElementById('edu-complete-btn').disabled = false;
    }
}

function retryQuiz() {
    const quest = EDU_QUESTS.find(q => q.id === currentQuestId);
    if (!quest) return;
    resetEduState();
    renderQuiz(quest, document.getElementById('edu-content-area'));
}

// ===== Infographic Renderer =====
function renderInfographic(quest, container) {
    const info = quest.content;
    container.innerHTML = `
        <div class="infographic-container">
            <h3 class="info-title">${info.title}</h3>
            <div class="info-steps">
                ${info.steps.map((step, i) => `
                    <div class="info-step" style="animation-delay: ${i * 100}ms">
                        <div class="info-step-num" style="background: ${step.color}20; color: ${step.color}; border-color: ${step.color}40">${i + 1}</div>
                        <div class="info-step-icon">${step.icon}</div>
                        <div class="info-step-content">
                            <h4 style="color: ${step.color}">${step.title}</h4>
                            <p>${step.desc}</p>
                        </div>
                        ${i < info.steps.length - 1 ? '<div class="info-step-line" style="background: ' + step.color + '30"></div>' : ''}
                    </div>
                `).join('')}
            </div>
            ${info.funFact ? `
                <div class="info-funfact">
                    <span class="ff-icon">💡</span>
                    <p><strong>Интересный факт:</strong> ${info.funFact}</p>
                </div>
            ` : ''}
        </div>
    `;
    document.getElementById('edu-complete-btn').disabled = false;
}

// ===== Audio Renderer =====
let speechSynth = window.speechSynthesis;
let currentUtterance = null;

function renderAudio(quest, container) {
    const sections = quest.content.sections;
    container.innerHTML = `
        <div class="audio-container">
            <div class="audio-player">
                <div class="audio-visualizer" id="audio-visualizer">
                    ${Array(12).fill(0).map((_, i) => `<div class="audio-bar" style="animation-delay: ${i * 0.1}s"></div>`).join('')}
                </div>
                <div class="audio-status" id="audio-status">Готов к воспроизведению</div>
                <div class="audio-controls">
                    <button class="btn btn-sm" id="audio-prev-btn" onclick="audioNavSection(-1)" disabled>⏮</button>
                    <button class="btn btn-glow audio-play-btn" id="audio-play-btn" onclick="toggleAudio()">
                        ▶ Слушать
                    </button>
                    <button class="btn btn-sm" id="audio-next-btn" onclick="audioNavSection(1)" ${sections.length <= 1 ? 'disabled' : ''}>⏭</button>
                </div>
                <div class="audio-section-info">
                    <span id="audio-section-name">${sections[0].title}</span>
                    <span id="audio-section-counter">1 / ${sections.length}</span>
                </div>
            </div>
            <div class="audio-sections">
                ${sections.map((s, i) => `
                    <div class="audio-section-item ${i === 0 ? 'active' : ''}" id="audio-section-${i}" onclick="jumpToSection(${i})">
                        <div class="as-num">${i + 1}</div>
                        <div class="as-info">
                            <h4>${s.title}</h4>
                            <p>${s.text.substring(0, 80)}...</p>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="audio-transcript" id="audio-transcript">
                <h4>${sections[0].title}</h4>
                <p>${sections[0].text}</p>
            </div>
        </div>
    `;
    document.getElementById('edu-complete-btn').disabled = false;
}

function toggleAudio() {
    const quest = EDU_QUESTS.find(q => q.id === currentQuestId);
    if (!quest) return;

    if (speechSynth.speaking) {
        speechSynth.cancel();
        setAudioPlaying(false);
        return;
    }

    const section = quest.content.sections[eduState.audioSection];
    speakText(section.text, section.title);
}

function speakText(text, title) {
    speechSynth.cancel();

    currentUtterance = new SpeechSynthesisUtterance(text);
    currentUtterance.lang = 'ru-RU';
    currentUtterance.rate = 0.9;
    currentUtterance.pitch = 1.0;

    // Try to find a Russian voice
    const voices = speechSynth.getVoices();
    const ruVoice = voices.find(v => v.lang.startsWith('ru'));
    if (ruVoice) currentUtterance.voice = ruVoice;

    currentUtterance.onstart = () => setAudioPlaying(true);
    currentUtterance.onend = () => {
        setAudioPlaying(false);
        // Auto-play next section
        const quest = EDU_QUESTS.find(q => q.id === currentQuestId);
        if (quest && eduState.audioSection < quest.content.sections.length - 1) {
            audioNavSection(1);
            setTimeout(() => toggleAudio(), 500);
        }
    };

    speechSynth.speak(currentUtterance);
}

function setAudioPlaying(playing) {
    eduState.audioPlaying = playing;
    const btn = document.getElementById('audio-play-btn');
    const vis = document.getElementById('audio-visualizer');
    const status = document.getElementById('audio-status');

    if (playing) {
        btn.innerHTML = '⏸ Пауза';
        vis.classList.add('playing');
        status.textContent = 'Воспроизведение...';
    } else {
        btn.innerHTML = '▶ Слушать';
        vis.classList.remove('playing');
        status.textContent = 'Готов к воспроизведению';
    }
}

function audioNavSection(dir) {
    const quest = EDU_QUESTS.find(q => q.id === currentQuestId);
    if (!quest) return;

    const sections = quest.content.sections;
    const newIndex = eduState.audioSection + dir;
    if (newIndex < 0 || newIndex >= sections.length) return;

    speechSynth.cancel();
    setAudioPlaying(false);
    eduState.audioSection = newIndex;

    // Update UI
    document.querySelectorAll('.audio-section-item').forEach((el, i) => {
        el.classList.toggle('active', i === newIndex);
    });
    document.getElementById('audio-section-name').textContent = sections[newIndex].title;
    document.getElementById('audio-section-counter').textContent = `${newIndex + 1} / ${sections.length}`;
    document.getElementById('audio-transcript').innerHTML = `<h4>${sections[newIndex].title}</h4><p>${sections[newIndex].text}</p>`;
    document.getElementById('audio-prev-btn').disabled = (newIndex === 0);
    document.getElementById('audio-next-btn').disabled = (newIndex === sections.length - 1);
}

function jumpToSection(index) {
    const diff = index - eduState.audioSection;
    if (diff !== 0) audioNavSection(diff);
}

function stopAudio() {
    if (speechSynth.speaking) {
        speechSynth.cancel();
        setAudioPlaying(false);
    }
}

// ===== Complete Education Quest =====
function completeEduQuest(questId) {
    if (state.completed.includes(questId)) return;

    const quest = EDU_QUESTS.find(q => q.id === questId);
    if (!quest) return;

    state.history.unshift({
        questId: quest.id,
        questName: quest.name,
        questIcon: quest.icon,
        points: quest.points,
        comment: `Образовательный квест: ${quest.type}`,
        date: new Date().toISOString(),
        status: 'approved',
        isEdu: true,
    });

    state.completed.push(quest.id);
    state.completedQuests++;
    state.points += quest.points;
    state.xp += quest.points;

    while (state.xp >= state.xpNext) {
        state.xp -= state.xpNext;
        state.level++;
        state.xpNext = Math.floor(state.xpNext * 1.5);
    }

    const today = new Date().toDateString();
    if (state.lastTrainDate) {
        const last = new Date(state.lastTrainDate);
        const diff = Math.floor((new Date(today) - last) / 86400000);
        if (diff === 1) state.streak++;
        else if (diff > 1) state.streak = 1;
    } else {
        state.streak = 1;
    }
    state.lastTrainDate = today;

    // Check achievements
    let newAchievement = null;
    ACHIEVEMENTS.forEach(ach => {
        if (!state.unlockedAchievements.includes(ach.id) && ach.condition(state)) {
            state.unlockedAchievements.push(ach.id);
            newAchievement = ach;
        }
    });

    saveState();
    stopAudio();

    document.getElementById('success-text').textContent = `Квест «${quest.name}» выполнен!`;
    document.getElementById('success-points').textContent = `+${quest.points}`;

    const achEl = document.getElementById('success-achievement');
    if (newAchievement) {
        achEl.hidden = false;
        achEl.textContent = `Новое достижение: ${newAchievement.icon} ${newAchievement.name}`;
    } else {
        achEl.hidden = true;
    }

    document.getElementById('success-modal').hidden = false;
}

// Load voices (needed for some browsers)
speechSynthesis.onvoiceschanged = () => {};
