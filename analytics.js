// ===== JU Heroes Analytics =====

const ANALYTICS_KEY = 'ju-heroes-analytics';

function getAllEvents() {
    try {
        return JSON.parse(localStorage.getItem(ANALYTICS_KEY) || '[]');
    } catch (e) {
        return [];
    }
}

function logEvent(userId, type, data) {
    if (!userId) return;
    const events = getAllEvents();
    const event = {
        userId,
        type,
        questId: data.questId || null,
        timestamp: new Date().toISOString(),
        filename: data.filename || null,
    };
    events.push(event);
    localStorage.setItem(ANALYTICS_KEY, JSON.stringify(events));
}

function getStats(userId, date) {
    const dateStr = date
        ? (date instanceof Date ? date.toDateString() : new Date(date).toDateString())
        : new Date().toDateString();
    const events = getAllEvents().filter(e => {
        if (userId && e.userId !== userId) return false;
        return new Date(e.timestamp).toDateString() === dateStr;
    });
    const quests = events.filter(e => e.type === 'quest_complete' || e.type === 'edu_quest_complete');
    const videos = events.filter(e => e.type === 'video_upload');
    const lastEvent = events.length ? events[events.length - 1] : null;
    return {
        date: dateStr,
        questsCompleted: quests.length,
        videosUploaded: videos.length,
        lastActivity: lastEvent ? lastEvent.timestamp : null,
    };
}

// ===== Stats Panel =====

function formatTime(isoStr) {
    if (!isoStr) return '—';
    const d = new Date(isoStr);
    return d.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
}

function formatDateLabel(dateStr) {
    const d = new Date(dateStr);
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (d.toDateString() === today) return 'Сегодня';
    if (d.toDateString() === yesterday) return 'Вчера';
    return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
}

function getRecentDates(n) {
    const dates = [];
    for (let i = 0; i < n; i++) {
        dates.push(new Date(Date.now() - i * 86400000));
    }
    return dates;
}

function renderStatsPanel() {
    const panel = document.getElementById('stats-panel');
    if (!panel) return;

    const users = [
        { id: 'lev', name: 'Лев 🦁' },
        { id: 'danil', name: 'Данил ⚡' },
    ];

    const dates = getRecentDates(7);

    let html = '<div class="stats-panel-inner">';
    html += '<div class="stats-panel-header"><h3>📊 Статистика тренировок</h3><button id="stats-close-btn" class="stats-close-btn">✕</button></div>';

    for (const user of users) {
        html += `<div class="stats-user-block"><div class="stats-user-name">${user.name}</div>`;
        html += '<div class="stats-days">';
        for (const date of dates) {
            const s = getStats(user.id, date);
            const hasActivity = s.questsCompleted > 0 || s.videosUploaded > 0;
            html += `<div class="stats-day ${hasActivity ? 'stats-day-active' : ''}">
                <div class="stats-day-label">${formatDateLabel(date.toDateString())}</div>
                <div class="stats-day-row"><span class="stats-icon">🏅</span> <span>${s.questsCompleted}</span></div>
                <div class="stats-day-row"><span class="stats-icon">🎥</span> <span>${s.videosUploaded}</span></div>
                <div class="stats-day-time">${s.lastActivity ? formatTime(s.lastActivity) : '—'}</div>
            </div>`;
        }
        html += '</div></div>';
    }

    html += '</div>';
    panel.innerHTML = html;

    document.getElementById('stats-close-btn').addEventListener('click', () => {
        panel.hidden = true;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('nav-stats-btn');
    const panel = document.getElementById('stats-panel');
    if (btn && panel) {
        btn.addEventListener('click', () => {
            if (panel.hidden) {
                renderStatsPanel();
                panel.hidden = false;
            } else {
                panel.hidden = true;
            }
        });
    }
});
