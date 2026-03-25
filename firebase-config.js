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
    apiKey:            'REPLACE_API_KEY',
    authDomain:        'REPLACE_PROJECT_ID.firebaseapp.com',
    databaseURL:       'https://REPLACE_PROJECT_ID-default-rtdb.firebaseio.com',
    projectId:         'REPLACE_PROJECT_ID',
    storageBucket:     'REPLACE_PROJECT_ID.appspot.com',
    messagingSenderId: 'REPLACE_SENDER_ID',
    appId:             'REPLACE_APP_ID',
};

// Автоматически определяется — не менять
const FIREBASE_ENABLED = !Object.values(FIREBASE_CONFIG).some(v => v.startsWith('REPLACE_'));
