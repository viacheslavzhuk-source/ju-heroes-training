#!/bin/bash
set -e

# ===== JU Heroes Training — Deploy v1.1.0 =====
# Запусти этот скрипт из папки проекта на Mac:
#   cd путь/к/Game/ju-heroes-training
#   chmod +x deploy_to_github.sh && ./deploy_to_github.sh

VERSION="v1.1.0"
REPO_NAME="ju-heroes-training"

echo ""
echo "🚀 Деплой $REPO_NAME $VERSION"
echo "================================"

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$PROJECT_DIR"

# 1. Проверяем gh CLI
if ! command -v gh &>/dev/null; then
    echo "📦 Устанавливаю GitHub CLI..."
    brew install gh
fi

# 2. Проверяем авторизацию
if ! gh auth status &>/dev/null 2>&1; then
    echo "🔐 Нужна авторизация в GitHub..."
    gh auth login
fi

# 3. Удаляем lock если застрял
rm -f .git/index.lock

# 4. Добавляем файлы и коммитим
echo "📝 Коммит изменений..."
git add app.js index.html style.css sw.js manifest.json education.js icons.js README.md CHANGELOG.md
git commit -m "v1.1.0: Авторизация по пользователям, пуш-уведомления, PWA

- 4 предустановленных профиля (Данил, Лев, Папа, Мама)
- Раздельный прогресс для каждого пользователя
- Семейный рейтинг с реальными данными
- Пуш-уведомления (тренировки, достижения, уровни, серии)
- Service Worker + PWA manifest
- Панель настроек уведомлений" || echo "⚠️  Нет новых изменений для коммита"

# 5. Пушим
echo "⬆️  Пуш в GitHub..."
git push origin main

# 6. Создаём тег
if git tag -l | grep -q "^${VERSION}$"; then
    echo "⚠️  Тег $VERSION уже существует, пропускаю"
else
    echo "🏷️  Создаю тег $VERSION..."
    git tag -a "$VERSION" -m "Release $VERSION"
    git push origin "$VERSION"
fi

# 7. Создаём GitHub Release
if gh release view "$VERSION" &>/dev/null 2>&1; then
    echo "⚠️  Release $VERSION уже существует"
else
    echo "📦 Создаю GitHub Release..."
    gh release create "$VERSION" --title "$VERSION — Авторизация и уведомления" --notes-file CHANGELOG.md
fi

echo ""
echo "✅ Деплой завершён!"
echo "🌐 Сайт: https://viacheslavzhuk-source.github.io/$REPO_NAME/"
echo "📦 Релиз: https://github.com/viacheslavzhuk-source/$REPO_NAME/releases/tag/$VERSION"
echo ""
