// ===== Vimeo Video Config for 20 Education Modules =====
// Replace YOUR_VIMEO_ID_X with actual Vimeo video IDs after uploading

const VIMEO_MODULES = [
    { id: 1, vimeoId: 'YOUR_VIMEO_ID_1', title: 'Знакомство с AI — твой новый суперинструмент', desc: 'Узнай что такое искусственный интеллект и как он работает', diff: 'Легко', points: 50 },
    { id: 2, vimeoId: 'YOUR_VIMEO_ID_2', title: 'Как не поверить фейкам', desc: 'Научись проверять информацию и распознавать фейки', diff: 'Легко', points: 50 },
    { id: 3, vimeoId: 'YOUR_VIMEO_ID_3', title: 'Личный бренд в интернете', desc: 'Построй хороший образ в сети и защити себя', diff: 'Легко', points: 50 },
    { id: 4, vimeoId: 'YOUR_VIMEO_ID_4', title: 'Копирайтинг для начинающих', desc: 'Научись писать тексты, которые люди хотят читать', diff: 'Средне', points: 60 },
    { id: 5, vimeoId: 'YOUR_VIMEO_ID_5', title: 'SMM и соцсети', desc: 'Как привлекать людей и создавать сообщество', diff: 'Средне', points: 60 },
    { id: 6, vimeoId: 'YOUR_VIMEO_ID_6', title: 'Контент-мейкинг', desc: 'Создавай контент как профессионал', diff: 'Средне', points: 60 },
    { id: 7, vimeoId: 'YOUR_VIMEO_ID_7', title: 'SEO — поиск в интернете', desc: 'Как люди находят информацию в интернете', diff: 'Средне', points: 60 },
    { id: 8, vimeoId: 'YOUR_VIMEO_ID_8', title: 'Основы дизайна', desc: 'Изучи базовые принципы графического дизайна', diff: 'Средне', points: 60 },
    { id: 9, vimeoId: 'YOUR_VIMEO_ID_9', title: 'UI/UX дизайн', desc: 'Проектируй удобные интерфейсы', diff: 'Средне', points: 60 },
    { id: 10, vimeoId: 'YOUR_VIMEO_ID_10', title: 'Программирование на Python', desc: 'Первые шаги в мире кода', diff: 'Сложно', points: 70 },
    { id: 11, vimeoId: 'YOUR_VIMEO_ID_11', title: 'Telegram-боты', desc: 'Создай своего цифрового помощника', diff: 'Сложно', points: 70 },
    { id: 12, vimeoId: 'YOUR_VIMEO_ID_12', title: 'No-Code и AI', desc: 'Создавай приложения без кода', diff: 'Средне', points: 60 },
    { id: 13, vimeoId: 'YOUR_VIMEO_ID_13', title: 'Финансовая грамотность', desc: 'Управляй своим капиталом в цифровом мире', diff: 'Средне', points: 60 },
    { id: 14, vimeoId: 'YOUR_VIMEO_ID_14', title: 'Блокчейн и криптовалюты', desc: 'Узнай про будущее денег', diff: 'Сложно', points: 70 },
    { id: 15, vimeoId: 'YOUR_VIMEO_ID_15', title: 'Предпринимательство', desc: 'Стань своим боссом — бизнес с нуля', diff: 'Сложно', points: 70 },
    { id: 16, vimeoId: 'YOUR_VIMEO_ID_16', title: 'Data-аналитика', desc: 'Открой магию чисел и данных', diff: 'Сложно', points: 70 },
    { id: 17, vimeoId: 'YOUR_VIMEO_ID_17', title: 'E-commerce', desc: 'Создай свой интернет-магазин', diff: 'Средне', points: 60 },
    { id: 18, vimeoId: 'YOUR_VIMEO_ID_18', title: 'Управление проектами', desc: 'Научись организовывать большие дела', diff: 'Средне', points: 60 },
    { id: 19, vimeoId: 'YOUR_VIMEO_ID_19', title: 'Кибербезопасность', desc: 'Защити свой цифровой мир', diff: 'Сложно', points: 70 },
    { id: 20, vimeoId: 'YOUR_VIMEO_ID_20', title: 'Публичные выступления', desc: 'Стань звездой на сцене', diff: 'Средне', points: 60 },
];

// Auto-generate VIDEO_QUESTS and merge into EDU_QUESTS
const VIDEO_QUESTS = VIMEO_MODULES.map(m => ({
    id: `video-module-${m.id}`,
    cat: 'learn',
    type: 'video',
    icon: '🎬',
    name: `Видео: ${m.title}`,
    desc: m.desc,
    points: m.points,
    diff: m.diff,
    module: `module-${m.id}`,
    topic: m.id,
    content: {
        vimeoId: m.vimeoId,
        title: m.title,
        moduleNum: m.id,
    }
}));

// Merge into EDU_QUESTS
if (typeof EDU_QUESTS !== 'undefined') {
    EDU_QUESTS.push(...VIDEO_QUESTS);
}
