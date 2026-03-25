// ================================================================
// НАСТРОЙКА FIREBASE — JU Heroes Training
// ================================================================
// Шаг 1: Зайдите на https://console.firebase.google.com
// Шаг 2: Создайте проект (бесплатный план Spark подойдёт)
// Шаг 3: Добавьте веб-приложение:
//         Project Settings → Your Apps → кнопка </>
// Шаг 4: Скопируйте значения из firebaseConfig сюда
// Шаг 5: В разделе Realtime Database → Create Database →
//         выберите регион → Start in TEST MODE
// Шаг 6: Замените все значения REPLACE_... ниже
// ================================================================

const FIREBASE_CONFIG = {
    apiKey:            'AIzaSyB320WVGfA7z2-fxN1qYphXMBpTGejcEdw',
    authDomain:        'ju-heroes.firebaseapp.com',
    databaseURL:       'https://ju-heroes-default-rtdb.europe-west1.firebasedatabase.app',
    projectId:         'ju-heroes',
    storageBucket:     'ju-heroes.firebasestorage.app',
    messagingSenderId: '815802449858',
    appId:             '1:815802449858:web:73d6155efa957c66cf605b',
    measurementId:     'G-6V957KZBRD',
};

// Автоматически определяется — не менять
const FIREBASE_ENABLED = !Object.values(FIREBASE_CONFIG).some(v => v.startsWith('REPLACE_'));

// ================================================================
// ВАЖНО: Правила безопасности Realtime Database
// ================================================================
// В Firebase Console → Realtime Database → Rules установите:
//
// {
//   "rules": {
//     "analytics": {
//       ".read": true,
//       ".write": true
//     }
//   }
// }
//
// Без этого запись и чтение будут заблокированы (ошибка PERMISSION_DENIED).
// Для продакшена рекомендуется ограничить доступ по UID.
// ================================================================
