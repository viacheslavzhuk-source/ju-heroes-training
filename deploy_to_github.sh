#!/bin/bash
set -e

# ===== JU Heroes Training — Deploy =====
# Автоматически:
#   1. Генерирует новую версию (timestamp-based)
#   2. Обновляет APP_VERSION в sw.js → сбрасывает кеш у всех пользователей
#   3. Коммитит, пушит, создаёт тег и GitHub Release
#
# Использование:
#   ./deploy_to_github.sh          — авто-версия (1.2.1, 1.2.2, ...)
#   ./deploy_to_github.sh v2.0.0   — указать версию вручную

REPO_NAME="ju-heroes-training"

# Определяем версию
if [ -n "$1" ]; then
    VERSION="$1"
else
    # Авто-инкремент: берём последний тег и увеличиваем patch
    LAST_TAG=$(git tag -l 'v*' --sort=-v:refname | head -1)
    if [ -z "$LAST_TAG" ]; then
        VERSION="v1.0.0"
    else
        # v1.2.0 → 1.2.0 → increment patch → v1.2.1
        NUMS="${LAST_TAG#v}"
        MAJOR=$(echo "$NUMS" | cut -d. -f1)
        MINOR=$(echo "$NUMS" | cut -d. -f2)
        PATCH=$(echo "$NUMS" | cut -d. -f3)
        PATCH=$((PATCH + 1))
        VERSION="v${MAJOR}.${MINOR}.${PATCH}"
    fi
fi

VERSION_NUM="${VERSION#v}"

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

# 4. Обновляем APP_VERSION в sw.js → триггерит сброс кеша у всех пользователей
echo "🔄 Обновляю APP_VERSION → $VERSION_NUM в sw.js..."
sed -i '' "s/const APP_VERSION = '.*'/const APP_VERSION = '${VERSION_NUM}'/" sw.js

# 5. Добавляем файлы и коммитим
echo "📝 Коммит изменений..."
git add -A
git commit -m "$VERSION: обновление приложения" || echo "⚠️  Нет новых изменений для коммита"

# 6. Пушим
echo "⬆️  Пуш в GitHub..."
git push origin main

# 7. Создаём тег
if git tag -l | grep -q "^${VERSION}$"; then
    echo "⚠️  Тег $VERSION уже существует, пропускаю"
else
    echo "🏷️  Создаю тег $VERSION..."
    git tag -a "$VERSION" -m "Release $VERSION"
    git push origin "$VERSION"
fi

# 8. Создаём GitHub Release
if gh release view "$VERSION" &>/dev/null 2>&1; then
    echo "⚠️  Release $VERSION уже существует"
else
    echo "📦 Создаю GitHub Release..."
    gh release create "$VERSION" --title "$VERSION" --notes-file CHANGELOG.md
fi

echo ""
echo "✅ Деплой завершён!"
echo "🌐 Сайт: https://viacheslavzhuk-source.github.io/$REPO_NAME/"
echo "📦 Релиз: https://github.com/viacheslavzhuk-source/$REPO_NAME/releases/tag/$VERSION"
echo ""
echo "📱 Кеш у всех пользователей обновится автоматически при следующем визите."
echo ""
