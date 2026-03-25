// ===== Детальная страница ребёнка — JU Heroes =====

(function () {
    const style = document.createElement('style');
    style.textContent = `
        /* ── Child Detail Screen ── */
        #child-detail-screen {
            padding: 0 0 2rem 0;
            min-height: 100vh;
        }

        .cd-nav {
            position: sticky;
            top: 0;
            z-index: 10;
            padding: 0.75rem 1rem 0.5rem;
            background: linear-gradient(180deg, rgba(15,10,40,0.95) 70%, transparent);
            backdrop-filter: blur(8px);
        }

        .cd-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem 1.25rem 1.25rem;
            background: linear-gradient(135deg, rgba(108,92,231,0.18) 0%, rgba(162,89,255,0.10) 100%);
            border-bottom: 1px solid rgba(108,92,231,0.25);
            margin-bottom: 0.25rem;
        }

        .cd-hero-emoji {
            font-size: 2.8rem;
            line-height: 1;
            filter: drop-shadow(0 0 12px rgba(162,89,255,0.6));
        }

        .cd-hero-name {
            font-size: 1.5rem;
            font-weight: 800;
            color: #fff;
            letter-spacing: -0.5px;
        }

        .cd-hero-sub {
            font-size: 0.78rem;
            color: rgba(255,255,255,0.5);
            margin-top: 0.15rem;
        }

        /* ── Sections ── */
        .cd-section {
            margin: 0.75rem 1rem;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(108,92,231,0.2);
            border-radius: 16px;
            overflow: hidden;
        }

        .cd-section-title {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1rem;
            font-size: 0.85rem;
            font-weight: 700;
            color: rgba(255,255,255,0.75);
            text-transform: uppercase;
            letter-spacing: 0.04em;
            background: rgba(108,92,231,0.12);
            border-bottom: 1px solid rgba(108,92,231,0.18);
        }

        .cd-section-icon {
            font-size: 1rem;
        }

        .cd-section-count {
            margin-left: auto;
            background: rgba(108,92,231,0.35);
            color: #c8b9ff;
            font-size: 0.72rem;
            font-weight: 700;
            padding: 0.15rem 0.55rem;
            border-radius: 20px;
            min-width: 1.6rem;
            text-align: center;
        }

        .cd-empty {
            padding: 1.5rem 1rem;
            text-align: center;
            color: rgba(255,255,255,0.35);
            font-size: 0.9rem;
        }

        /* ── Quest list ── */
        .cd-quest-list {
            display: flex;
            flex-direction: column;
        }

        .cd-quest-item {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            padding: 0.85rem 1rem;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            transition: background 0.15s;
        }

        .cd-quest-item:last-child {
            border-bottom: none;
        }

        .cd-quest-item:active {
            background: rgba(108,92,231,0.08);
        }

        .cd-quest-icon {
            font-size: 1.4rem;
            line-height: 1;
            flex-shrink: 0;
            margin-top: 0.1rem;
        }

        .cd-quest-body {
            flex: 1;
            min-width: 0;
        }

        .cd-quest-name {
            font-size: 0.92rem;
            font-weight: 600;
            color: #fff;
            line-height: 1.3;
            margin-bottom: 0.35rem;
        }

        .cd-quest-done .cd-quest-name {
            color: rgba(255,255,255,0.85);
        }

        .cd-quest-active .cd-quest-name {
            color: #fff;
        }

        .cd-quest-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 0.3rem;
            margin-bottom: 0.25rem;
        }

        .cd-quest-desc {
            font-size: 0.75rem;
            color: rgba(255,255,255,0.4);
            margin-top: 0.2rem;
            line-height: 1.4;
        }

        .cd-quest-date,
        .cd-quest-video {
            font-size: 0.72rem;
            color: rgba(255,255,255,0.38);
            margin-top: 0.2rem;
        }

        .cd-quest-video {
            color: rgba(162,89,255,0.7);
        }

        .cd-quest-check {
            flex-shrink: 0;
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            background: linear-gradient(135deg, #00b894, #00cec9);
            color: #fff;
            font-size: 0.75rem;
            font-weight: 800;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 8px rgba(0,184,148,0.4);
            margin-top: 0.15rem;
        }

        /* ── Badges ── */
        .cd-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.2rem;
            font-size: 0.68rem;
            font-weight: 600;
            padding: 0.15rem 0.45rem;
            border-radius: 8px;
            line-height: 1.4;
        }

        .cd-badge-cat {
            background: rgba(108,92,231,0.25);
            color: #c8b9ff;
            border: 1px solid rgba(108,92,231,0.35);
        }

        .cd-badge-pts {
            background: rgba(253,203,110,0.15);
            color: #fdcb6e;
            border: 1px solid rgba(253,203,110,0.3);
        }

        .cd-badge-module {
            background: rgba(0,184,148,0.15);
            color: #55efc4;
            border: 1px solid rgba(0,184,148,0.3);
        }

        .cd-badge-diff {
            border: 1px solid transparent;
        }

        .cd-diff-easy {
            background: rgba(0,184,148,0.15);
            color: #55efc4;
            border-color: rgba(0,184,148,0.3);
        }

        .cd-diff-med {
            background: rgba(253,203,110,0.15);
            color: #fdcb6e;
            border-color: rgba(253,203,110,0.3);
        }

        .cd-diff-hard {
            background: rgba(255,118,117,0.15);
            color: #ff7675;
            border-color: rgba(255,118,117,0.3);
        }

        /* ── Category groups for active quests ── */
        .cd-group {
            border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .cd-group:last-child {
            border-bottom: none;
        }

        .cd-group-label {
            font-size: 0.75rem;
            font-weight: 700;
            color: rgba(255,255,255,0.45);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            padding: 0.5rem 1rem 0.25rem;
            background: rgba(0,0,0,0.12);
        }
    `;
    document.head.appendChild(style);
})();

// ── Helpers (shared with parent-dashboard.js) ──────────────────
// formatDateShort and allQuests are defined in parent-dashboard.js

// ── Child Detail: full overlay render ──────────────────────────

function showChildDetail(childId, childName) {
    const child = (typeof PARENT_CHILDREN !== 'undefined')
        ? PARENT_CHILDREN.find(c => c.id === childId)
        : null;

    const resolvedName  = childName || (child && child.name) || childId;
    const resolvedEmoji = (child && child.emoji) || '🧒';

    const childState   = loadChildState(childId);
    const completedIds = new Set(childState.completed || []);
    const historyMap   = {};
    (childState.history || []).forEach(h => { historyMap[h.questId] = h; });

    // Build timestamp + video map from analytics events
    const analyticsEvents = (typeof getAllEvents === 'function') ? getAllEvents() : [];
    const myEvents        = analyticsEvents.filter(e => e.userId === childId);
    const completionTimes = {};
    const videoFiles      = {};
    myEvents.forEach(e => {
        if (e.type === 'quest_complete' || e.type === 'edu_quest_complete') {
            if (!completionTimes[e.questId] || e.timestamp > completionTimes[e.questId]) {
                completionTimes[e.questId] = e.timestamp;
            }
        }
        if (e.type === 'video_upload' && e.filename) {
            videoFiles[e.questId] = { filename: e.filename, timestamp: e.timestamp };
        }
    });

    const quests    = (typeof allQuests === 'function') ? allQuests() : [];
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

    // Separate edu completed for dedicated section
    const eduCompleted = completed.filter(q => q.cat === 'learn');

    const catLabels = (typeof CAT_LABELS !== 'undefined') ? CAT_LABELS : {};

    function catOf(q) {
        return catLabels[q.cat] || { label: q.cat || '—', icon: '❓' };
    }

    function fmtDate(ts) {
        return (typeof formatDateShort === 'function') ? formatDateShort(ts) : ts;
    }

    // ── Build HTML ──────────────────────────────────────────────

    let html = `
        <div class="cd-nav">
            <button class="back-btn" id="cd-back-btn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
                Назад
            </button>
        </div>

        <div class="cd-header">
            <span class="cd-hero-emoji">${resolvedEmoji}</span>
            <div>
                <div class="cd-hero-name">${resolvedName}</div>
                <div class="cd-hero-sub">${completedIds.size} из ${quests.length} квестов выполнено</div>
            </div>
        </div>`;

    // ── Завершённые квесты ──
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
            const cat = catOf(q);
            const ts  = completionTimes[q.id] || (historyMap[q.id] && historyMap[q.id].date) || null;
            const vid = videoFiles[q.id] || (historyMap[q.id] && historyMap[q.id].videoName
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
                    ${ts  ? `<div class="cd-quest-date">🕐 ${fmtDate(ts)}</div>` : ''}
                    ${vid ? `<div class="cd-quest-video">🎥 ${vid.filename}${vid.timestamp ? ' · ' + fmtDate(vid.timestamp) : ''}</div>` : ''}
                </div>
                <div class="cd-quest-check">✓</div>
            </div>`;
        });
        html += `</div>`;
    }
    html += `</div>`;

    // ── Активные квесты ──
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
            const cat = catLabels[g] || { label: g, icon: '❓' };
            html += `
            <div class="cd-group">
                <div class="cd-group-label">${cat.icon} ${cat.label}</div>
                <div class="cd-quest-list">`;
            list.forEach(q => {
                const diffClass = q.diff === 'Легко' ? 'easy' : q.diff === 'Средне' ? 'med' : 'hard';
                html += `
                <div class="cd-quest-item cd-quest-active">
                    <div class="cd-quest-icon">${q.icon || cat.icon}</div>
                    <div class="cd-quest-body">
                        <div class="cd-quest-name">${q.name}</div>
                        <div class="cd-quest-meta">
                            ${q.diff ? `<span class="cd-badge cd-badge-diff cd-diff-${diffClass}">${q.diff}</span>` : ''}
                            ${q.points ? `<span class="cd-badge cd-badge-pts">+${q.points} баллов</span>` : ''}
                        </div>
                        ${q.desc ? `<div class="cd-quest-desc">${q.desc}</div>` : ''}
                    </div>
                </div>`;
            });
            html += `</div></div>`;
        });
    }
    html += `</div>`;

    // ── Обучающий контент ──
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
                    ${ts ? `<div class="cd-quest-date">🕐 ${fmtDate(ts)}</div>` : ''}
                </div>
                <div class="cd-quest-check">✓</div>
            </div>`;
        });
        html += `</div></div>`;
    }

    html += `<div style="height:2rem"></div>`;

    // ── Render ──
    const screen = document.getElementById('child-detail-screen');
    if (!screen) return;
    screen.innerHTML = html;

    document.getElementById('cd-back-btn').addEventListener('click', () => {
        if (typeof showScreen === 'function') showScreen('parent-dashboard-screen');
    });

    if (typeof showScreen === 'function') showScreen('child-detail-screen');
}
