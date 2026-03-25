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
