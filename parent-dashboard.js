// ===== Родительская панель — JU Heroes =====

const PARENT_CHILDREN = [
    { id: 'lev',   name: 'Лев',   emoji: '🦁' },
    { id: 'danil', name: 'Данил', emoji: '⚡' },
];

const EVENT_LABELS = {
    quest_complete:     { icon: '🏋️', text: 'выполнил физический квест' },
    edu_quest_complete: { icon: '📚', text: 'выполнил обучающий квест' },
    video_upload:       { icon: '🎥', text: 'загрузил видео' },
};

const CAT_LABELS = {
    pullup: { label: 'Турник',      icon: '🏋️' },
    pushup: { label: 'Отжимания',   icon: '👊' },
    bars:   { label: 'Брусья',      icon: '🤸' },
    abs:    { label: 'Пресс',       icon: '🔥' },
    learn:  { label: 'Обучение',    icon: '📚' },
};

const STORAGE_PREFIX = 'ju-heroes-';

// ── Helpers ────────────────────────────────────────────────────

function loadChildState(childId) {
    try {
        const raw = localStorage.getItem(STORAGE_PREFIX + childId);
        return raw ? JSON.parse(raw) : { completed: [], history: [] };
    } catch (e) {
        return { completed: [], history: [] };
    }
}

function allQuests() {
    const physical = (typeof QUESTS !== 'undefined') ? QUESTS : [];
    const edu      = (typeof EDU_QUESTS !== 'undefined') ? EDU_QUESTS : [];
    return [...physical, ...edu];
}

function formatDT(isoStr) {
    if (!isoStr) return '—';
    const d = new Date(isoStr);
    return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' }) +
           ' ' + d.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
}

function formatDateShort(isoStr) {
    if (!isoStr) return '';
    const d = new Date(isoStr);
    const today = new Date().toDateString();
    const yest  = new Date(Date.now() - 86400000).toDateString();
    if (d.toDateString() === today) return 'Сегодня, ' + d.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
    if (d.toDateString() === yest)  return 'Вчера, '   + d.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
    return formatDT(isoStr);
}

// ── Stats computation (for main dashboard) ─────────────────────

function computeStatsFromEvents(events, childId) {
    const mine     = events.filter(e => e.userId === childId);
    const todayStr = new Date().toDateString();
    const yestStr  = new Date(Date.now() - 86400000).toDateString();

    function count(type, dateStr) {
        return mine.filter(e => {
            const typeOk = type    ? e.type === type : true;
            const dayOk  = dateStr ? new Date(e.timestamp).toDateString() === dateStr : true;
            return typeOk && dayOk;
        }).length;
    }

    return {
        today:     { physical: count('quest_complete', todayStr),     edu: count('edu_quest_complete', todayStr),     video: count('video_upload', todayStr) },
        yesterday: { physical: count('quest_complete', yestStr),      edu: count('edu_quest_complete', yestStr),      video: count('video_upload', yestStr) },
        total:     { physical: count('quest_complete', null),         edu: count('edu_quest_complete', null),         video: count('video_upload', null) },
    };
}

// ── Toast notifications ─────────────────────────────────────────

function showParentToast(event) {
    const child = PARENT_CHILDREN.find(c => c.id === event.userId);
    if (!child) return;
    const label = EVENT_LABELS[event.type];
    if (!label) return;

    const existing = document.getElementById('pd-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'pd-toast';
    toast.className = 'pd-toast pd-toast-enter';
    toast.innerHTML = `
        <span class="pd-toast-emoji">${child.emoji}</span>
        <span class="pd-toast-msg"><strong>${child.name}</strong> ${label.text}! ${label.icon}</span>
        <button class="pd-toast-close" onclick="this.parentElement.remove()">✕</button>
    `;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('pd-toast-visible'));
    setTimeout(() => {
        toast.classList.remove('pd-toast-visible');
        setTimeout(() => toast.remove(), 400);
    }, 5000);
}

// ── Main dashboard card HTML ────────────────────────────────────

function buildChildCardHTML(child, events) {
    const s = computeStatsFromEvents(events, child.id);
    const todayTotal = s.today.physical + s.today.edu + s.today.video;
    const yestTotal  = s.yesterday.physical + s.yesterday.edu + s.yesterday.video;
    const allTotal   = s.total.physical + s.total.edu + s.total.video;

    return `
    <div class="pd-child-card glass" id="pd-card-${child.id}" onclick="showChildDetail('${child.id}')" role="button" tabindex="0">
        <div class="pd-child-header">
            <span class="pd-child-emoji">${child.emoji}</span>
            <span class="pd-child-name">${child.name}</span>
            <span class="pd-card-arrow">›</span>
        </div>

        <div class="pd-periods">
            <div class="pd-period pd-period-today">
                <div class="pd-period-label">Сегодня</div>
                <div class="pd-period-count">${todayTotal}</div>
                <div class="pd-period-sub">заданий</div>
            </div>
            <div class="pd-period pd-period-yest">
                <div class="pd-period-label">Вчера</div>
                <div class="pd-period-count">${yestTotal}</div>
                <div class="pd-period-sub">заданий</div>
            </div>
            <div class="pd-period pd-period-total">
                <div class="pd-period-label">Всего</div>
                <div class="pd-period-count">${allTotal}</div>
                <div class="pd-period-sub">за всё время</div>
            </div>
        </div>

        <div class="pd-breakdown">
            <div class="pd-breakdown-title">Разбивка сегодня</div>
            <div class="pd-breakdown-rows">
                <div class="pd-breakdown-row">
                    <span class="pd-breakdown-icon">🏋️</span>
                    <span class="pd-breakdown-label">Физические квесты</span>
                    <span class="pd-breakdown-val">${s.today.physical}</span>
                </div>
                <div class="pd-breakdown-row">
                    <span class="pd-breakdown-icon">📚</span>
                    <span class="pd-breakdown-label">Обучающие квесты</span>
                    <span class="pd-breakdown-val">${s.today.edu}</span>
                </div>
                <div class="pd-breakdown-row">
                    <span class="pd-breakdown-icon">🎥</span>
                    <span class="pd-breakdown-label">Видео загружено</span>
                    <span class="pd-breakdown-val">${s.today.video}</span>
                </div>
            </div>
        </div>

        <div class="pd-today-detail">
            <div class="pd-breakdown-title">Всего за всё время</div>
            <div class="pd-breakdown-rows">
                <div class="pd-breakdown-row">
                    <span class="pd-breakdown-icon">🏋️</span>
                    <span class="pd-breakdown-label">Физические</span>
                    <span class="pd-breakdown-val">${s.total.physical}</span>
                </div>
                <div class="pd-breakdown-row">
                    <span class="pd-breakdown-icon">📚</span>
                    <span class="pd-breakdown-label">Обучающие</span>
                    <span class="pd-breakdown-val">${s.total.edu}</span>
                </div>
                <div class="pd-breakdown-row">
                    <span class="pd-breakdown-icon">🎥</span>
                    <span class="pd-breakdown-label">Видео</span>
                    <span class="pd-breakdown-val">${s.total.video}</span>
                </div>
            </div>
        </div>

        <div class="pd-card-tap-hint">Нажми для подробностей →</div>
    </div>`;
}

function flashCard(childId) {
    const card = document.getElementById(`pd-card-${childId}`);
    if (!card) return;
    card.classList.remove('pd-card-flash');
    void card.offsetWidth;
    card.classList.add('pd-card-flash');
    setTimeout(() => card.classList.remove('pd-card-flash'), 1000);
}

// ── Full dashboard render ───────────────────────────────────────

let _currentParentId = null;
let _liveEvents = null;

function renderParentDashboard(parentId, events) {
    const parentUser = [
        { id: 'papa', name: 'Папа', emoji: '💪' },
        { id: 'mama', name: 'Мама', emoji: '✨' },
    ].find(u => u.id === parentId);

    const container = document.getElementById('parent-dashboard-screen');
    if (!container) return;

    const isLive      = typeof isFirebaseReady === 'function' && isFirebaseReady();
    const sourceLabel = isLive ? '🟢 В реальном времени' : '🔴 Только локальные данные';

    let html = `
        <div class="pd-header">
            <div class="pd-greeting">Привет, ${parentUser.emoji} ${parentUser.name}!</div>
            <div class="pd-subtitle">Прогресс детей</div>
            <div class="pd-live-status ${isLive ? 'pd-live-on' : 'pd-live-off'}">${sourceLabel}</div>
        </div>
        <div class="pd-children">
    `;
    for (const child of PARENT_CHILDREN) {
        html += buildChildCardHTML(child, events);
    }
    html += '</div>';
    container.innerHTML = html;
}

function updateParentDashboardCard(childId, events) {
    const child = PARENT_CHILDREN.find(c => c.id === childId);
    if (!child) return;
    const cardEl = document.getElementById(`pd-card-${childId}`);
    if (!cardEl) return;
    const tmp = document.createElement('div');
    tmp.innerHTML = buildChildCardHTML(child, events);
    cardEl.replaceWith(tmp.firstElementChild);
    flashCard(childId);
}

// ── Child Detail Screen ─────────────────────────────────────────

function showChildDetail(childId) {
    const child = PARENT_CHILDREN.find(c => c.id === childId);
    if (!child) return;

    const childState   = loadChildState(childId);
    const completedIds = new Set(childState.completed || []);
    const historyMap   = {};
    (childState.history || []).forEach(h => { historyMap[h.questId] = h; });

    // Build timestamp map from analytics events (most reliable)
    const analyticsEvents = (typeof getAllEvents === 'function') ? getAllEvents() : [];
    const myEvents        = analyticsEvents.filter(e => e.userId === childId);
    const completionTimes = {};
    const videoFiles      = {};
    myEvents.forEach(e => {
        if (e.type === 'quest_complete' || e.type === 'edu_quest_complete') {
            // Keep latest timestamp for each quest
            if (!completionTimes[e.questId] || e.timestamp > completionTimes[e.questId]) {
                completionTimes[e.questId] = e.timestamp;
            }
        }
        if (e.type === 'video_upload' && e.filename) {
            videoFiles[e.questId] = { filename: e.filename, timestamp: e.timestamp };
        }
    });

    const quests    = allQuests();
    const completed = quests.filter(q => completedIds.has(q.id));
    const active    = quests.filter(q => !completedIds.has(q.id));

    // Sort completed: newest first
    completed.sort((a, b) => {
        const ta = completionTimes[a.id] || (historyMap[a.id] && historyMap[a.id].date) || '';
        const tb = completionTimes[b.id] || (historyMap[b.id] && historyMap[b.id].date) || '';
        return tb.localeCompare(ta);
    });

    // Group active quests by category
    const activeByGroup = {};
    active.forEach(q => {
        const g = q.cat || 'other';
        if (!activeByGroup[g]) activeByGroup[g] = [];
        activeByGroup[g].push(q);
    });

    // Separate completed edu quests for the "content" section
    const eduCompleted = completed.filter(q => q.cat === 'learn');

    // ── Build HTML ──

    let html = `
        <div class="cd-nav">
            <button class="back-btn" id="cd-back-btn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
                Назад
            </button>
        </div>

        <div class="cd-header">
            <span class="cd-hero-emoji">${child.emoji}</span>
            <div>
                <div class="cd-hero-name">${child.name}</div>
                <div class="cd-hero-sub">${completedIds.size} из ${quests.length} квестов выполнено</div>
            </div>
        </div>`;

    // ── Completed quests ──
    html += `<div class="cd-section">
        <div class="cd-section-title">
            <span class="cd-section-icon">✅</span> Завершённые квесты
            <span class="cd-section-count">${completed.length}</span>
        </div>`;

    if (completed.length === 0) {
        html += `<div class="cd-empty">Пока нет выполненных квестов</div>`;
    } else {
        html += `<div class="cd-quest-list">`;
        completed.forEach(q => {
            const cat       = CAT_LABELS[q.cat] || { label: q.cat, icon: '❓' };
            const ts        = completionTimes[q.id] || (historyMap[q.id] && historyMap[q.id].date) || null;
            const vid       = videoFiles[q.questId] || (historyMap[q.id] && historyMap[q.id].videoName
                              ? { filename: historyMap[q.id].videoName, timestamp: historyMap[q.id].date } : null);

            html += `
            <div class="cd-quest-item cd-quest-done">
                <div class="cd-quest-icon">${q.icon || cat.icon}</div>
                <div class="cd-quest-body">
                    <div class="cd-quest-name">${q.name}</div>
                    <div class="cd-quest-meta">
                        <span class="cd-badge cd-badge-cat">${cat.icon} ${cat.label}</span>
                        ${q.points ? `<span class="cd-badge cd-badge-pts">+${q.points} баллов</span>` : ''}
                    </div>
                    ${ts ? `<div class="cd-quest-date">🕐 ${formatDateShort(ts)}</div>` : ''}
                    ${vid ? `<div class="cd-quest-video">🎥 ${vid.filename}${vid.timestamp ? ' · ' + formatDateShort(vid.timestamp) : ''}</div>` : ''}
                </div>
                <div class="cd-quest-check">✓</div>
            </div>`;
        });
        html += `</div>`;
    }
    html += `</div>`;

    // ── Active quests (grouped by category) ──
    html += `<div class="cd-section">
        <div class="cd-section-title">
            <span class="cd-section-icon">⏳</span> Активные квесты
            <span class="cd-section-count">${active.length}</span>
        </div>`;

    if (active.length === 0) {
        html += `<div class="cd-empty">🏆 Все квесты выполнены!</div>`;
    } else {
        const groupOrder = ['pullup', 'pushup', 'bars', 'abs', 'learn'];
        const groups = [...new Set([...groupOrder, ...Object.keys(activeByGroup)])];
        groups.forEach(g => {
            const list = activeByGroup[g];
            if (!list || list.length === 0) return;
            const cat = CAT_LABELS[g] || { label: g, icon: '❓' };
            html += `
            <div class="cd-group">
                <div class="cd-group-label">${cat.icon} ${cat.label}</div>
                <div class="cd-quest-list">`;
            list.forEach(q => {
                html += `
                <div class="cd-quest-item cd-quest-active">
                    <div class="cd-quest-icon">${q.icon || cat.icon}</div>
                    <div class="cd-quest-body">
                        <div class="cd-quest-name">${q.name}</div>
                        <div class="cd-quest-meta">
                            <span class="cd-badge cd-badge-diff cd-diff-${q.diff === 'Легко' ? 'easy' : q.diff === 'Средне' ? 'med' : 'hard'}">${q.diff || ''}</span>
                            ${q.points ? `<span class="cd-badge cd-badge-pts">+${q.points} баллов</span>` : ''}
                        </div>
                        <div class="cd-quest-desc">${q.desc || ''}</div>
                    </div>
                </div>`;
            });
            html += `</div></div>`;
        });
    }
    html += `</div>`;

    // ── Educational content consumed ──
    if (eduCompleted.length > 0) {
        html += `<div class="cd-section">
            <div class="cd-section-title">
                <span class="cd-section-icon">🎓</span> Обучающий контент
                <span class="cd-section-count">${eduCompleted.length}</span>
            </div>
            <div class="cd-quest-list">`;
        eduCompleted.forEach(q => {
            const ts = completionTimes[q.id] || (historyMap[q.id] && historyMap[q.id].date) || null;
            const typeLabel = q.type === 'flashcard' ? '🃏 Карточки'
                            : q.type === 'quiz'      ? '📝 Тест'
                            : q.type === 'video'     ? '🎥 Видео-урок'
                            : '📖 Урок';
            html += `
            <div class="cd-quest-item cd-quest-done">
                <div class="cd-quest-icon">${q.icon || '📚'}</div>
                <div class="cd-quest-body">
                    <div class="cd-quest-name">${q.name}</div>
                    <div class="cd-quest-meta">
                        <span class="cd-badge cd-badge-cat">${typeLabel}</span>
                        ${q.module ? `<span class="cd-badge cd-badge-module">🤖 AI-грамотность</span>` : ''}
                    </div>
                    ${ts ? `<div class="cd-quest-date">🕐 ${formatDateShort(ts)}</div>` : ''}
                </div>
                <div class="cd-quest-check">✓</div>
            </div>`;
        });
        html += `</div></div>`;
    }

    html += `<div style="height:2rem"></div>`;

    // Render into screen
    const screen = document.getElementById('child-detail-screen');
    if (!screen) return;
    screen.innerHTML = html;

    document.getElementById('cd-back-btn').addEventListener('click', () => {
        showScreen('parent-dashboard-screen');
    });

    showScreen('child-detail-screen');
}

// ── Entry point ─────────────────────────────────────────────────

function showParentDashboard(parentId) {
    _currentParentId = parentId;
    _liveEvents = null;

    renderParentDashboard(parentId, getAllEvents());
    showScreen('parent-dashboard-screen');

    if (typeof subscribeToFirebaseEvents === 'function') {
        subscribeToFirebaseEvents(
            (events) => {
                _liveEvents = events;
                if (_currentParentId === parentId) {
                    renderParentDashboard(parentId, events);
                }
            },
            (event) => {
                if (_currentParentId !== parentId) return;
                showParentToast(event);
                if (_liveEvents) {
                    updateParentDashboardCard(event.userId, _liveEvents);
                }
            }
        );
    }
}

function teardownParentDashboard() {
    _currentParentId = null;
    _liveEvents = null;
    if (typeof unsubscribeFirebaseEvents === 'function') unsubscribeFirebaseEvents();
    const toast = document.getElementById('pd-toast');
    if (toast) toast.remove();
}
