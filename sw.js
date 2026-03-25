// ===== JU Heroes Training — Service Worker =====
// ВАЖНО: при каждом деплое меняй APP_VERSION — это триггерит обновление у всех пользователей
const APP_VERSION = '1.2.0';
const CACHE_NAME = 'ju-heroes-' + APP_VERSION;

// Файлы для предзагрузки в кеш (офлайн)
const PRECACHE = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './icons.js',
    './education.js',
    './youtube_config.js',
];

// Аудио кешируются лениво (при первом воспроизведении)
const LAZY_CACHE = [
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

// Install — кешируем основные файлы
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE))
    );
    self.skipWaiting(); // Активировать сразу, не ждать закрытия вкладок
});

// Activate — удаляем старые кеши + уведомляем клиентов
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        ).then(() => {
            // Берём контроль над всеми вкладками
            return self.clients.claim();
        }).then(() => {
            // Уведомляем все вкладки об обновлении
            return self.clients.matchAll({ type: 'window' }).then(clients => {
                clients.forEach(client => {
                    client.postMessage({ type: 'APP_UPDATED', version: APP_VERSION });
                });
            });
        })
    );
});

// Fetch — network-first для HTML/JS/CSS, cache-first для аудио и картинок
self.addEventListener('fetch', (e) => {
    const url = new URL(e.request.url);

    // Пропускаем внешние запросы (YouTube, Google, и т.д.)
    if (url.origin !== self.location.origin) {
        return;
    }

    // Аудио и картинки — cache-first (они не меняются)
    if (url.pathname.match(/\.(mp3|png|jpg|svg|webp|ico)$/)) {
        e.respondWith(
            caches.match(e.request).then(cached => {
                if (cached) return cached;
                return fetch(e.request).then(resp => {
                    if (resp.ok) {
                        const clone = resp.clone();
                        caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
                    }
                    return resp;
                });
            })
        );
        return;
    }

    // HTML/JS/CSS — network-first (всегда свежая версия, кеш как фолбэк для офлайн)
    e.respondWith(
        fetch(e.request).then(resp => {
            if (resp.ok) {
                const clone = resp.clone();
                caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
            }
            return resp;
        }).catch(() => {
            return caches.match(e.request);
        })
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
                icon: './icons/icon-192.png',
                badge: './icons/icon-192.png',
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
            icon: './icons/icon-192.png',
            tag: e.data.tag || 'general',
            renotify: true,
            vibrate: [200, 100, 200],
        });
    }

    // Принудительное обновление по запросу
    if (e.data && e.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
