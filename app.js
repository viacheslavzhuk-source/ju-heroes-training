// ===== JU Heroes Training — App =====

// ===== Quest Data =====
const QUESTS = [
    // Pull-ups
    {
        id: 'pullup-1', cat: 'pullup', icon: '🏋️', name: 'Первое подтягивание',
        desc: 'Подтянись хотя бы 1 раз на турнике', points: 50, diff: 'Легко',
        requirements: ['Подтянуться 1 раз', 'Подбородок выше перекладины', 'Полное выпрямление рук внизу'],
    },
    {
        id: 'pullup-3', cat: 'pullup', icon: '💪', name: '3 подтягивания',
        desc: 'Выполни 3 подтягивания подряд без пауз', points: 100, diff: 'Средне',
        requirements: ['3 подтягивания подряд', 'Чистая техника', 'Без раскачки'],
    },
    {
        id: 'pullup-5', cat: 'pullup', icon: '🔥', name: '5 подтягиваний',
        desc: 'Серия из 5 подтягиваний — ты сильный!', points: 150, diff: 'Средне',
        requirements: ['5 подтягиваний подряд', 'Полная амплитуда', 'Контролируемый спуск'],
    },
    {
        id: 'pullup-10', cat: 'pullup', icon: '⚡', name: '10 подтягиваний',
        desc: 'Выполни 10 подтягиваний — уровень героя!', points: 300, diff: 'Сложно',
        requirements: ['10 подтягиваний подряд', 'Чистая техника', 'Без помощи ног'],
    },
    {
        id: 'pullup-wide', cat: 'pullup', icon: '🦅', name: 'Широкий хват',
        desc: 'Подтягивания широким хватом — 5 раз', points: 200, diff: 'Сложно',
        requirements: ['5 подтягиваний широким хватом', 'Руки шире плеч', 'Грудью к перекладине'],
    },

    // Push-ups
    {
        id: 'pushup-5', cat: 'pushup', icon: '👊', name: '5 отжиманий',
        desc: 'Отожмись от пола 5 раз', points: 30, diff: 'Легко',
        requirements: ['5 отжиманий от пола', 'Корпус прямой', 'Грудь касается пола'],
    },
    {
        id: 'pushup-10', cat: 'pushup', icon: '💪', name: '10 отжиманий',
        desc: 'Серия из 10 отжиманий', points: 60, diff: 'Легко',
        requirements: ['10 отжиманий подряд', 'Ровная спина', 'Полная амплитуда'],
    },
    {
        id: 'pushup-20', cat: 'pushup', icon: '🔥', name: '20 отжиманий',
        desc: '20 отжиманий без остановки — отлично!', points: 120, diff: 'Средне',
        requirements: ['20 отжиманий подряд', 'Без пауз на верху', 'Чистая техника'],
    },
    {
        id: 'pushup-diamond', cat: 'pushup', icon: '💎', name: 'Алмазные отжимания',
        desc: 'Отжимания с узкой постановкой рук — 10 раз', points: 180, diff: 'Сложно',
        requirements: ['10 алмазных отжиманий', 'Руки вместе (ромб)', 'Локти вдоль корпуса'],
    },
    {
        id: 'pushup-50', cat: 'pushup', icon: '🏆', name: '50 отжиманий',
        desc: 'Полсотни отжиманий — настоящий воин!', points: 350, diff: 'Сложно',
        requirements: ['50 отжиманий подряд', 'Можно 2 паузы по 3 сек', 'Видео от начала до конца'],
    },

    // Bars (брусья)
    {
        id: 'bars-3', cat: 'bars', icon: '🤸', name: '3 раза на брусьях',
        desc: 'Отжимания на брусьях — 3 повторения', points: 80, diff: 'Средне',
        requirements: ['3 отжимания на брусьях', 'Полный спуск до угла 90°', 'Полное выпрямление вверху'],
    },
    {
        id: 'bars-5', cat: 'bars', icon: '💪', name: '5 раз на брусьях',
        desc: 'Уверенные 5 отжиманий на брусьях', points: 130, diff: 'Средне',
        requirements: ['5 отжиманий подряд', 'Контролируемое движение', 'Без раскачки'],
    },
    {
        id: 'bars-10', cat: 'bars', icon: '⚡', name: '10 раз на брусьях',
        desc: 'Десятка на брусьях — мощь!', points: 250, diff: 'Сложно',
        requirements: ['10 отжиманий на брусьях', 'Чистая техника', 'Полная амплитуда'],
    },
    {
        id: 'bars-hold', cat: 'bars', icon: '🧘', name: 'Удержание на брусьях',
        desc: 'Удержи себя на прямых руках 30 секунд', points: 100, diff: 'Средне',
        requirements: ['Удержание 30 секунд', 'Руки полностью прямые', 'Корпус стабилен'],
    },

    // Abs (пресс)
    {
        id: 'abs-20', cat: 'abs', icon: '🔥', name: '20 скручиваний',
        desc: 'Базовые скручивания — 20 раз', points: 40, diff: 'Легко',
        requirements: ['20 скручиваний', 'Лопатки отрываются от пола', 'Руки за головой или на груди'],
    },
    {
        id: 'abs-plank30', cat: 'abs', icon: '🧘', name: 'Планка 30 сек',
        desc: 'Удержи планку полминуты', points: 50, diff: 'Легко',
        requirements: ['Планка 30 секунд', 'Тело в линии', 'Без прогиба в пояснице'],
    },
    {
        id: 'abs-plank60', cat: 'abs', icon: '⚡', name: 'Планка 60 сек',
        desc: 'Минута в планке — железный пресс!', points: 120, diff: 'Средне',
        requirements: ['Планка 60 секунд', 'Стабильное положение', 'Дыхание ровное'],
    },
    {
        id: 'abs-legs', cat: 'abs', icon: '🦵', name: 'Подъём ног',
        desc: 'Подъём ног лёжа — 15 раз', points: 100, diff: 'Средне',
        requirements: ['15 подъёмов ног', 'Ноги прямые', 'Поясница прижата к полу'],
    },
    {
        id: 'abs-vup', cat: 'abs', icon: '🏆', name: 'V-складка',
        desc: 'Одновременный подъём рук и ног — 10 раз', points: 200, diff: 'Сложно',
        requirements: ['10 V-складок', 'Руки и ноги встречаются наверху', 'Контролируемый спуск'],
    },
];

const ACHIEVEMENTS = [
    { id: 'first-quest', icon: '🌟', name: 'Первый шаг', desc: 'Выполни первый квест', condition: s => s.completedQuests >= 1 },
    { id: '5-quests', icon: '⭐', name: 'На разогреве', desc: 'Выполни 5 квестов', condition: s => s.completedQuests >= 5 },
    { id: '10-quests', icon: '🔥', name: 'Огонь!', desc: 'Выполни 10 квестов', condition: s => s.completedQuests >= 10 },
    { id: 'all-quests', icon: '👑', name: 'Легенда', desc: 'Выполни все квесты', condition: s => s.completedQuests >= QUESTS.length },
    { id: '100-pts', icon: '💰', name: '100 баллов', desc: 'Набери 100 баллов', condition: s => s.points >= 100 },
    { id: '500-pts', icon: '💎', name: '500 баллов', desc: 'Набери 500 баллов', condition: s => s.points >= 500 },
    { id: '1000-pts', icon: '🏆', name: '1000 баллов', desc: 'Набери 1000 баллов', condition: s => s.points >= 1000 },
    { id: 'streak-3', icon: '📅', name: '3 дня подряд', desc: 'Тренируйся 3 дня подряд', condition: s => s.streak >= 3 },
    { id: 'streak-7', icon: '🗓️', name: 'Неделя героя', desc: 'Тренируйся 7 дней подряд', condition: s => s.streak >= 7 },
    { id: 'pullup-master', icon: '🏋️', name: 'Мастер турника', desc: 'Выполни все квесты на турнике', condition: s => QUESTS.filter(q => q.cat === 'pullup').every(q => s.completed.includes(q.id)) },
    { id: 'pushup-master', icon: '👊', name: 'Мастер отжиманий', desc: 'Выполни все квесты отжиманий', condition: s => QUESTS.filter(q => q.cat === 'pushup').every(q => s.completed.includes(q.id)) },
    { id: 'abs-master', icon: '🔥', name: 'Железный пресс', desc: 'Выполни все квесты на пресс', condition: s => QUESTS.filter(q => q.cat === 'abs').every(q => s.completed.includes(q.id)) },
];

const FAKE_LEADERS = [
    { name: 'Артём', avatar: '🦸', points: 2450, level: 8 },
    { name: 'Маша', avatar: '🦸‍♀️', points: 2100, level: 7 },
    { name: 'Дима', avatar: '🥷', points: 1800, level: 6 },
    { name: 'Лиза', avatar: '🤸', points: 1500, level: 5 },
    { name: 'Макс', avatar: '🧗', points: 1200, level: 5 },
];

// ===== State =====
const STORAGE_KEY = 'ju-heroes-training';

function defaultState() {
    return {
        profile: null,
        points: 0,
        level: 1,
        xp: 0,
        xpNext: 100,
        completed: [],
        completedQuests: 0,
        streak: 0,
        lastTrainDate: null,
        history: [],
        unlockedAchievements: [],
    };
}

let state = loadState();

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) return { ...defaultState(), ...JSON.parse(raw) };
    } catch (e) {}
    return defaultState();
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// ===== Init =====
function init() {
    if (state.profile) {
        showScreen('dashboard-screen');
        updateDashboard();
    } else {
        showScreen('profile-screen');
    }
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if (id === 'dashboard-screen') updateNav();
}

function updateNav() {
    document.getElementById('nav-points').textContent = state.points + ' ⭐';
    document.getElementById('nav-level').textContent = 'Уровень ' + state.level;
}

// ===== Profile =====
let selectedAvatar = null;

document.querySelectorAll('.avatar-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.avatar-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedAvatar = btn.dataset.avatar;
        checkProfileReady();
    });
});

document.getElementById('profile-name').addEventListener('input', checkProfileReady);
document.getElementById('profile-age').addEventListener('input', checkProfileReady);

function checkProfileReady() {
    const name = document.getElementById('profile-name').value.trim();
    const age = document.getElementById('profile-age').value;
    document.getElementById('profile-save-btn').disabled = !selectedAvatar || !name || !age;
}

document.getElementById('profile-save-btn').addEventListener('click', () => {
    state.profile = {
        name: document.getElementById('profile-name').value.trim(),
        age: parseInt(document.getElementById('profile-age').value),
        avatar: selectedAvatar,
    };
    saveState();
    showScreen('dashboard-screen');
    updateDashboard();
});

document.getElementById('nav-profile-btn').addEventListener('click', () => {
    if (confirm('Сбросить профиль?')) {
        localStorage.removeItem(STORAGE_KEY);
        location.reload();
    }
});

// ===== Dashboard =====
function updateDashboard() {
    if (!state.profile) return;
    const p = state.profile;

    document.getElementById('dash-avatar').textContent = p.avatar;
    document.getElementById('dash-name').textContent = p.name;

    const xpPct = Math.min(100, (state.xp / state.xpNext) * 100);
    document.getElementById('xp-fill').style.width = xpPct + '%';
    document.getElementById('dash-xp-text').textContent = `${state.xp}/${state.xpNext} XP до уровня ${state.level + 1}`;

    document.getElementById('stat-points').textContent = state.points;
    document.getElementById('stat-quests').textContent = state.completedQuests;
    document.getElementById('stat-streak').textContent = state.streak;

    renderQuests('all');
    renderHistory();
    renderAchievements();
    renderLeaderboard();
    updateNav();
}

// ===== Tabs =====
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
    });
});

// ===== Quest Categories =====
document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderQuests(btn.dataset.cat);
    });
});

// ===== Render Quests =====
function renderQuests(cat) {
    const list = document.getElementById('quest-list');
    const filtered = cat === 'all' ? QUESTS : QUESTS.filter(q => q.cat === cat);

    list.innerHTML = filtered.map(q => {
        const done = state.completed.includes(q.id);
        return `
            <div class="quest-item ${done ? 'completed' : ''}" data-quest-id="${q.id}">
                <div class="quest-item-icon">${q.icon}</div>
                <div class="quest-item-info">
                    <h3>${q.name}</h3>
                    <p>${q.desc}</p>
                </div>
                ${done
                    ? '<span class="check-mark">✅</span>'
                    : `<div class="quest-item-reward">
                        <span class="points">${q.points} ⭐</span>
                        <small>${q.diff}</small>
                       </div>`
                }
            </div>
        `;
    }).join('');

    list.querySelectorAll('.quest-item').forEach(item => {
        item.addEventListener('click', () => openQuest(item.dataset.questId));
    });
}

// ===== Open Quest Detail =====
let currentQuestId = null;
let selectedFile = null;

function openQuest(questId) {
    const quest = QUESTS.find(q => q.id === questId);
    if (!quest) return;

    currentQuestId = questId;
    selectedFile = null;

    document.getElementById('quest-icon').textContent = quest.icon;
    document.getElementById('quest-name').textContent = quest.name;
    document.getElementById('quest-desc').textContent = quest.desc;
    document.getElementById('quest-points-badge').textContent = `⭐ ${quest.points} баллов`;
    document.getElementById('quest-diff-badge').textContent = quest.diff;

    const reqList = document.getElementById('quest-requirements-list');
    reqList.innerHTML = quest.requirements.map(r => `<li>${r}</li>`).join('');

    // Reset upload
    document.getElementById('video-preview').hidden = true;
    document.getElementById('upload-zone').style.display = '';
    document.getElementById('video-input').value = '';
    document.getElementById('upload-comment').value = '';
    document.getElementById('submit-quest-btn').disabled = true;

    if (state.completed.includes(questId)) {
        document.getElementById('submit-quest-btn').textContent = '✅ Квест уже выполнен';
        document.getElementById('submit-quest-btn').disabled = true;
    } else {
        document.getElementById('submit-quest-btn').textContent = '✅ Отправить на проверку';
    }

    showScreen('quest-screen');
}

document.getElementById('quest-back-btn').addEventListener('click', () => {
    showScreen('dashboard-screen');
    updateDashboard();
});

// ===== Video Upload =====
const uploadZone = document.getElementById('upload-zone');
const videoInput = document.getElementById('video-input');

uploadZone.addEventListener('click', () => videoInput.click());

videoInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 100 * 1024 * 1024) {
        alert('Файл слишком большой! Максимум 100 МБ.');
        return;
    }

    selectedFile = file;
    const url = URL.createObjectURL(file);
    document.getElementById('preview-video').src = url;
    document.getElementById('video-preview').hidden = false;
    uploadZone.style.display = 'none';

    if (!state.completed.includes(currentQuestId)) {
        document.getElementById('submit-quest-btn').disabled = false;
    }
});

document.getElementById('remove-video-btn').addEventListener('click', () => {
    selectedFile = null;
    videoInput.value = '';
    document.getElementById('preview-video').src = '';
    document.getElementById('video-preview').hidden = true;
    uploadZone.style.display = '';
    document.getElementById('submit-quest-btn').disabled = true;
});

// ===== Submit Quest =====
document.getElementById('submit-quest-btn').addEventListener('click', () => {
    if (!selectedFile || !currentQuestId) return;
    if (state.completed.includes(currentQuestId)) return;

    const quest = QUESTS.find(q => q.id === currentQuestId);
    const comment = document.getElementById('upload-comment').value.trim();

    // Save video as blob URL (in real app — upload to server)
    const videoUrl = URL.createObjectURL(selectedFile);

    // Add to history
    state.history.unshift({
        questId: quest.id,
        questName: quest.name,
        questIcon: quest.icon,
        points: quest.points,
        comment: comment,
        videoUrl: videoUrl,
        videoName: selectedFile.name,
        date: new Date().toISOString(),
        status: 'approved', // auto-approve for now
    });

    // Update state
    state.completed.push(quest.id);
    state.completedQuests++;
    state.points += quest.points;
    state.xp += quest.points;

    // Level up
    while (state.xp >= state.xpNext) {
        state.xp -= state.xpNext;
        state.level++;
        state.xpNext = Math.floor(state.xpNext * 1.5);
    }

    // Streak
    const today = new Date().toDateString();
    if (state.lastTrainDate) {
        const last = new Date(state.lastTrainDate);
        const diff = Math.floor((new Date(today) - last) / 86400000);
        if (diff === 1) {
            state.streak++;
        } else if (diff > 1) {
            state.streak = 1;
        }
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

    // Show success
    document.getElementById('success-text').textContent = `Квест "${quest.name}" выполнен!`;
    document.getElementById('success-points').textContent = `+${quest.points} ⭐`;

    const achEl = document.getElementById('success-achievement');
    if (newAchievement) {
        achEl.hidden = false;
        achEl.textContent = `🏅 Новое достижение: ${newAchievement.icon} ${newAchievement.name}`;
    } else {
        achEl.hidden = true;
    }

    document.getElementById('success-modal').hidden = false;
});

document.getElementById('success-close-btn').addEventListener('click', () => {
    document.getElementById('success-modal').hidden = true;
    showScreen('dashboard-screen');
    updateDashboard();
});

// ===== Render History =====
function renderHistory() {
    const list = document.getElementById('history-list');
    const empty = document.getElementById('history-empty');

    if (state.history.length === 0) {
        list.innerHTML = '';
        empty.style.display = '';
        return;
    }

    empty.style.display = 'none';
    list.innerHTML = state.history.map(h => {
        const date = new Date(h.date);
        const dateStr = date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
        const statusClass = h.status === 'approved' ? 'status-approved' : 'status-pending';
        const statusText = h.status === 'approved' ? '✅ Принято' : '⏳ На проверке';

        return `
            <div class="history-item">
                <div class="history-thumb">${h.questIcon}</div>
                <div class="history-info">
                    <h4>${h.questName}</h4>
                    <span class="date">${dateStr}</span>
                    <span class="status ${statusClass}">${statusText}</span>
                </div>
                <span class="history-points">+${h.points} ⭐</span>
            </div>
        `;
    }).join('');
}

// ===== Render Achievements =====
function renderAchievements() {
    const list = document.getElementById('achievements-list');
    list.innerHTML = ACHIEVEMENTS.map(ach => {
        const unlocked = state.unlockedAchievements.includes(ach.id);
        return `
            <div class="achievement-item ${unlocked ? 'unlocked' : 'locked'}">
                <div class="achievement-icon">${ach.icon}</div>
                <h4>${ach.name}</h4>
                <p>${unlocked ? ach.desc : '???'}</p>
            </div>
        `;
    }).join('');
}

// ===== Render Leaderboard =====
function renderLeaderboard() {
    const list = document.getElementById('leaderboard-list');
    const me = state.profile ? {
        name: state.profile.name,
        avatar: state.profile.avatar,
        points: state.points,
        level: state.level,
        isMe: true,
    } : null;

    let leaders = [...FAKE_LEADERS];
    if (me) leaders.push(me);
    leaders.sort((a, b) => b.points - a.points);

    list.innerHTML = leaders.map((l, i) => {
        const rank = i + 1;
        const rankClass = rank <= 3 ? `rank-${rank}` : '';
        const meClass = l.isMe ? 'me' : '';
        return `
            <div class="leader-item ${meClass}">
                <div class="leader-rank ${rankClass}">${rank <= 3 ? ['🥇','🥈','🥉'][rank-1] : rank}</div>
                <span class="leader-avatar">${l.avatar}</span>
                <div class="leader-info">
                    <h4>${l.name}${l.isMe ? ' (ты)' : ''}</h4>
                    <small>Уровень ${l.level}</small>
                </div>
                <span class="leader-points">${l.points} ⭐</span>
            </div>
        `;
    }).join('');
}

// ===== Drag & Drop on upload zone =====
uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadZone.style.borderColor = 'var(--primary-light)';
});
uploadZone.addEventListener('dragleave', () => {
    uploadZone.style.borderColor = '';
});
uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadZone.style.borderColor = '';
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('video/')) {
        const dt = new DataTransfer();
        dt.items.add(file);
        videoInput.files = dt.files;
        videoInput.dispatchEvent(new Event('change'));
    }
});

// ===== Start =====
init();
