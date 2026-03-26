// ===== Firebase Sync — JU Heroes =====
// Handles writing events to Firebase Realtime Database
// and subscribing to real-time updates for the parent dashboard.
// All functions are no-ops when Firebase is not configured.

let _db = null;
let _fbReady = false;
let _valueListener = null;
let _childListener = null;
let _initializationDone = false; // true after first onValue fires
let _flushingQueue = false;

const PENDING_EVENTS_KEY = 'ju-heroes-firebase-pending';

function _getPendingEvents() {
    try {
        return JSON.parse(localStorage.getItem(PENDING_EVENTS_KEY) || '[]');
    } catch (e) {
        return [];
    }
}

function _savePendingEvents(events) {
    localStorage.setItem(PENDING_EVENTS_KEY, JSON.stringify(events));
}

function _addToPendingQueue(event) {
    const pending = _getPendingEvents();
    pending.push(event);
    // Keep max 500 pending events to avoid localStorage overflow
    if (pending.length > 500) pending.splice(0, pending.length - 500);
    _savePendingEvents(pending);
}

/**
 * Flush all pending events to Firebase.
 * Called when connection is restored or Firebase becomes ready.
 */
function _flushPendingQueue() {
    if (_flushingQueue || !_fbReady || !_db) return;
    const pending = _getPendingEvents();
    if (pending.length === 0) return;

    _flushingQueue = true;
    console.log(`[Firebase] Отправка ${pending.length} отложенных событий...`);

    const ref = _db.ref('analytics');
    let sent = 0;
    const failed = [];

    function sendNext() {
        if (sent + failed.length >= pending.length) {
            // Done — save any that failed back to queue
            _savePendingEvents(failed);
            _flushingQueue = false;
            if (sent > 0) console.log(`[Firebase] Отправлено ${sent} отложенных событий`);
            if (failed.length > 0) console.warn(`[Firebase] ${failed.length} событий не удалось отправить`);
            return;
        }

        const event = pending[sent + failed.length];
        try {
            ref.push(event)
                .then(() => { sent++; sendNext(); })
                .catch(() => { failed.push(event); sendNext(); });
        } catch (e) {
            failed.push(event);
            sendNext();
        }
    }

    sendNext();
}

function initFirebase() {
    if (!FIREBASE_ENABLED) return;
    try {
        firebase.initializeApp(FIREBASE_CONFIG);
        _db = firebase.database();
        _fbReady = true;
        console.log('[Firebase] Инициализация успешна');
        // Flush any events that were queued while offline
        _flushPendingQueue();
    } catch (e) {
        console.warn('[Firebase] Ошибка инициализации:', e.message);
    }
}

// Retry pending events when connection is restored
if (typeof window !== 'undefined') {
    window.addEventListener('online', () => {
        console.log('[Firebase] Сеть восстановлена, проверяю очередь...');
        _flushPendingQueue();
    });

    // Periodic retry every 5 minutes (in case online event was missed)
    setInterval(() => {
        if (navigator.onLine) _flushPendingQueue();
    }, 5 * 60 * 1000);
}

/**
 * Write a single analytics event to Firebase.
 * Called from analytics.js logEvent() after localStorage write.
 * If Firebase is unavailable, event is queued for retry.
 */
function writeEventToFirebase(event) {
    if (!_fbReady || !_db || !navigator.onLine) {
        _addToPendingQueue(event);
        return;
    }
    try {
        const pushRef = _db.ref('analytics').push(event);
        // If push returns a promise (thenable), handle failure
        if (pushRef && typeof pushRef.catch === 'function') {
            pushRef.catch(() => {
                _addToPendingQueue(event);
            });
        }
    } catch (e) {
        console.warn('[Firebase] Ошибка записи, событие в очередь:', e.message);
        _addToPendingQueue(event);
    }
}

/**
 * Subscribe to real-time analytics updates.
 *
 * @param {function} onAllEvents  - called with full events array on every change
 * @param {function} onNewEvent   - called with a single event object when a new one arrives
 *                                  (not called for the initial data load)
 */
function subscribeToFirebaseEvents(onAllEvents, onNewEvent) {
    if (!_fbReady || !_db) return;

    const ref = _db.ref('analytics');
    _initializationDone = false;

    // onValue: full refresh whenever data changes
    _valueListener = ref.on('value', snapshot => {
        const data = snapshot.val() || {};
        const events = Object.values(data).sort(
            (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
        );
        onAllEvents(events);
        _initializationDone = true;
    });

    // onChildAdded: fires for existing children first, then for truly new ones.
    // After _initializationDone is set by onValue, new children are real new events.
    _childListener = ref.on('child_added', snapshot => {
        if (_initializationDone) {
            onNewEvent(snapshot.val());
        }
    });
}

/**
 * Unsubscribe all Firebase listeners (call when leaving parent dashboard).
 */
function unsubscribeFirebaseEvents() {
    if (!_fbReady || !_db) return;
    const ref = _db.ref('analytics');
    if (_valueListener)  ref.off('value',       _valueListener);
    if (_childListener)  ref.off('child_added',  _childListener);
    _valueListener  = null;
    _childListener  = null;
    _initializationDone = false;
}

function isFirebaseReady() {
    return _fbReady;
}

// Init immediately — Firebase SDK scripts are loaded before this file,
// so `firebase` global is already available. Do NOT wait for DOMContentLoaded:
// app.js calls init() synchronously at parse time, which may trigger
// showParentDashboard() before DOMContentLoaded fires.
initFirebase();
