// ===== Родительская панель — JU Heroes =====

const PARENT_CHILDREN = [
    { id: 'lev',   name: 'Лев',   emoji: '🦁' },
    { id: 'danil', name: 'Данил', emoji: '⚡' },
];

function getParentStats(userId) {
    const events = getAllEvents().filter(e => e.userId === userId);
    const todayStr   = new Date().toDateString();
    const yestStr    = new Date(Date.now() - 86400000).toDateString();

    function countFor(list, type, dateStr) {
        return list.filter(e => {
            const match = type ? e.type === type : true;
            const dayMatch = dateStr ? new Date(e.timestamp).toDateString() === dateStr : true;
            return match && dayMatch;
        }).length;
    }

    return {
        today: {
            physical: countFor(events, 'quest_complete',     todayStr),
            edu:      countFor(events, 'edu_quest_complete', todayStr),
            video:    countFor(events, 'video_upload',       todayStr),
        },
        yesterday: {
            physical: countFor(events, 'quest_complete',     yestStr),
            edu:      countFor(events, 'edu_quest_complete', yestStr),
            video:    countFor(events, 'video_upload',       yestStr),
        },
        total: {
            physical: countFor(events, 'quest_complete',     null),
            edu:      countFor(events, 'edu_quest_complete', null),
            video:    countFor(events, 'video_upload',       null),
        },
    };
}

function renderParentDashboard(parentId) {
    const parentUser = [
        { id: 'papa', name: 'Папа', emoji: '💪' },
        { id: 'mama', name: 'Мама', emoji: '✨' },
    ].find(u => u.id === parentId);

    const container = document.getElementById('parent-dashboard-screen');
    if (!container) return;

    let html = `
        <div class="pd-header">
            <div class="pd-greeting">Привет, ${parentUser.emoji} ${parentUser.name}!</div>
            <div class="pd-subtitle">Прогресс детей за сегодня</div>
        </div>
        <div class="pd-children">
    `;

    for (const child of PARENT_CHILDREN) {
        const s = getParentStats(child.id);
        const todayTotal   = s.today.physical   + s.today.edu   + s.today.video;
        const yestTotal    = s.yesterday.physical + s.yesterday.edu + s.yesterday.video;
        const allTotal     = s.total.physical   + s.total.edu   + s.total.video;

        html += `
        <div class="pd-child-card glass">
            <div class="pd-child-header">
                <span class="pd-child-emoji">${child.emoji}</span>
                <span class="pd-child-name">${child.name}</span>
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
                <div class="pd-breakdown-title">Разбивка по типам (всего)</div>
                <div class="pd-breakdown-rows">
                    <div class="pd-breakdown-row">
                        <span class="pd-breakdown-icon">🏋️</span>
                        <span class="pd-breakdown-label">Физические квесты</span>
                        <span class="pd-breakdown-val">${s.total.physical}</span>
                    </div>
                    <div class="pd-breakdown-row">
                        <span class="pd-breakdown-icon">📚</span>
                        <span class="pd-breakdown-label">Обучающие квесты</span>
                        <span class="pd-breakdown-val">${s.total.edu}</span>
                    </div>
                    <div class="pd-breakdown-row">
                        <span class="pd-breakdown-icon">🎥</span>
                        <span class="pd-breakdown-label">Видео загружено</span>
                        <span class="pd-breakdown-val">${s.total.video}</span>
                    </div>
                </div>
            </div>

            <div class="pd-today-detail">
                <div class="pd-breakdown-title">Сегодня по типам</div>
                <div class="pd-breakdown-rows">
                    <div class="pd-breakdown-row">
                        <span class="pd-breakdown-icon">🏋️</span>
                        <span class="pd-breakdown-label">Физические</span>
                        <span class="pd-breakdown-val">${s.today.physical}</span>
                    </div>
                    <div class="pd-breakdown-row">
                        <span class="pd-breakdown-icon">📚</span>
                        <span class="pd-breakdown-label">Обучающие</span>
                        <span class="pd-breakdown-val">${s.today.edu}</span>
                    </div>
                    <div class="pd-breakdown-row">
                        <span class="pd-breakdown-icon">🎥</span>
                        <span class="pd-breakdown-label">Видео</span>
                        <span class="pd-breakdown-val">${s.today.video}</span>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    html += '</div>';
    container.innerHTML = html;
}

function showParentDashboard(parentId) {
    showScreen('parent-dashboard-screen');
    renderParentDashboard(parentId);
}
