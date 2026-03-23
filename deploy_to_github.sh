#!/bin/bash
set -e

echo "🚀 Deploy JU Heroes Training to GitHub"
echo "========================================"

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$PROJECT_DIR"

rm -f .git/index.lock 2>/dev/null

if [ ! -d ".git" ]; then
    git init -b main
fi

git add .
if ! git diff --cached --quiet 2>/dev/null; then
    git commit -m "Initial commit — JU Heroes Training

- index.html: интерфейс приложения
- style.css: адаптивный дизайн для мобильных
- app.js: квесты, загрузка видео, баллы, достижения, рейтинг
- deploy_to_github.sh: скрипт деплоя"
    echo "✅ Коммит создан"
else
    echo "✅ Коммит уже есть"
fi

gh repo create ju-heroes-training --public --source=. --push 2>/dev/null || {
    git remote remove origin 2>/dev/null || true
    git remote add origin "https://github.com/$(gh api user -q .login)/ju-heroes-training.git"
    git branch -M main
    git push -u origin main --force
}

# Enable GitHub Pages
gh api "repos/$(gh api user -q .login)/ju-heroes-training/pages" -X POST \
    --input - <<'JSON' 2>/dev/null || true
{"build_type":"legacy","source":{"branch":"main","path":"/"}}
JSON

LOGIN=$(gh api user -q .login)
echo ""
echo "🎉 Готово!"
echo "   Репо: https://github.com/$LOGIN/ju-heroes-training"
echo "   Сайт: https://$LOGIN.github.io/ju-heroes-training/"
