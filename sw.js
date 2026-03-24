// ===== JU Heroes Training — Service Worker =====
const CACHE_NAME = 'ju-heroes-v3';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './icons.js',
    './education.js',
    './vimeo_config.js',
    './audio/ai-1-audio-s1.mp3',
    './audio/ai-1-audio-s2.mp3',
    './audio/ai-1-audio-s3.mp3',
    './audio/ai-3-audio-s1.mp3',
    './audio/ai-3-audio-s2.mp3',
    './audio/ai-3-audio-s3.mp3',
    './audio/ai-5-audio-s1.mp3',
    './audio/ai-5-audio-s2.mp3',
    './audio/ai-5-audio-s3.mp3',
];

// Install — cache assets
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
    self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

// Fetch — cache-first
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then(cached => cached || fetch(e.request))
    );
});

// Handle notification click
self.addEventListener('notificationclick', (e) => {
    e.notification.close();
    e.waitUntil(
        self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clients => {
            if (clients.length > 0) {
                return clients[0].focus();
            }
            return self.clients.openWindow('./');
        })
    );
});

// Listen for messages from the app
self.addEventListener('message', (e) => {
    if (e.data && e.data.type === 'SCHEDULE_REMINDER') {
        const delay = e.data.delay || 0;
        const title = e.data.title || 'JU Heroes Training';
        const body = e.data.body || 'Пора тренироваться, герой!';
        const tag = e.data.tag || 'reminder';

        setTimeout(() => {
            self.registration.showNotification(title, {
                body: body,
                icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" rx="24" fill="%23080b16"/><text x="60" y="78" text-anchor="middle" font-size="50" fill="%236c5ce7" font-family="sans-serif" font-weight="bold">JU</text></svg>',
                badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" rx="24" fill="%236c5ce7"/><text x="60" y="78" text-anchor="middle" font-size="50" fill="white" font-family="sans-serif" font-weight="bold">JU</text></svg>',
                tag: tag,
                renotify: true,
                vibrate: [200, 100, 200],
                data: { url: './' },
            });
        }, delay);
    }

    if (e.data && e.data.type === 'SHOW_NOTIFICATION') {
        self.registration.showNotification(e.data.title || 'JU Heroes', {
            body: e.data.body || '',
            icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" rx="24" fill="%23080b16"/><text x="60" y="78" text-anchor="middle" font-size="50" fill="%236c5ce7" font-family="sans-serif" font-weight="bold">JU</text></svg>',
            tag: e.data.tag || 'general',
            renotify: true,
            vibrate: [200, 100, 200],
        });
    }
});
