// ===== YouTube Video Config for 20 Education Modules =====
// Replace YOUR_YOUTUBE_ID_X with actual YouTube video IDs after uploading

const YOUTUBE_MODULES = [
    { id: 1, youtubeId: 'wpX_mBaubGw', title: 'Знакомство с AI — твой новый суперинструмент', desc: 'Узнай что такое искусственный интеллект и как он работает', diff: 'Легко', points: 50 },
];

// Auto-generate VIDEO_QUESTS and merge into EDU_QUESTS
const VIDEO_QUESTS = YOUTUBE_MODULES.map(m => ({
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
        youtubeId: m.youtubeId,
        title: m.title,
        moduleNum: m.id,
    }
}));

// Merge into EDU_QUESTS
if (typeof EDU_QUESTS !== 'undefined') {
    EDU_QUESTS.push(...VIDEO_QUESTS);
}
