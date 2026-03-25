// ===== Firebase Sync — JU Heroes =====
// Handles writing events to Firebase Realtime Database
// and subscribing to real-time updates for the parent dashboard.
// All functions are no-ops when Firebase is not configured.

let _db = null;
let _fbReady = false;
let _valueListener = null;
let _childListener = null;
let _initializationDone = false; // true after first onValue fires

function initFirebase() {
    if (!FIREBASE_ENABLED) return;
    try {
        firebase.initializeApp(FIREBASE_CONFIG);
        _db = firebase.database();
        _fbReady = true;
        console.log('[Firebase] Инициализация успешна');
    } catch (e) {
        console.warn('[Firebase] Ошибка инициализации:', e.message);
    }
}

/**
 * Write a single analytics event to Firebase.
 * Called from analytics.js logEvent() after localStorage write.
 */
function writeEventToFirebase(event) {
    if (!_fbReady || !_db) return;
    try {
        _db.ref('analytics').push(event);
    } catch (e) {
        console.warn('[Firebase] Ошибка записи:', e.message);
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
