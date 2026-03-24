---
name: youtube
description: Upload videos to YouTube, get embed codes and links, manage video settings
homepage: https://developers.google.com/youtube/v3/docs
metadata:
  openclaw:
    requires:
      env:
        - YOUTUBE_API_KEY
    primaryEnv: YOUTUBE_API_KEY
---

# YouTube Video Hosting

Upload videos to YouTube via API, get embed codes and shareable links.

## Authentication

YouTube Data API v3 uses OAuth 2.0 for uploads. For simple uploads via CLI, use `google-auth` or the `yt-dlp` approach.

**Easiest method:** Use Google OAuth Playground or `gcloud` CLI.

### Quick Upload with curl + OAuth Token

```bash
# 1. Get OAuth token from https://developers.google.com/oauthplayground/
#    Scope: https://www.googleapis.com/auth/youtube.upload

# 2. Upload video
curl -X POST \
  "https://www.googleapis.com/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status" \
  -H "Authorization: Bearer $YOUTUBE_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "snippet": {
      "title": "Module 1: AI Introduction",
      "description": "Education module",
      "categoryId": "27"
    },
    "status": {
      "privacyStatus": "unlisted"
    }
  }'

# Response header Location: contains upload URL
# 3. Upload file to that URL
curl -X PUT "$UPLOAD_URL" \
  -H "Content-Type: video/mp4" \
  --data-binary @video.mp4
```

## Quick Reference

| Task | Read |
|------|------|
| Upload a video | [upload.md](references/upload.md) |
| Get embed code / link | [embed.md](references/embed.md) |
| Check processing status | [status.md](references/status.md) |
| Set privacy settings | [privacy.md](references/privacy.md) |
| List / search videos | [videos.md](references/videos.md) |

## Default Workflow

### Upload → Wait → Get Embed

```bash
# 1. Initiate resumable upload
UPLOAD_URL=$(curl -s -X POST \
  "https://www.googleapis.com/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status" \
  -H "Authorization: Bearer $YOUTUBE_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -D - \
  -d '{
    "snippet": {"title": "Module 1", "categoryId": "27"},
    "status": {"privacyStatus": "unlisted"}
  }' | grep -i "location:" | tr -d '\r' | cut -d' ' -f2)

# 2. Upload file
RESP=$(curl -s -X PUT "$UPLOAD_URL" \
  -H "Content-Type: video/mp4" \
  --data-binary @video.mp4)

VIDEO_ID=$(echo "$RESP" | python3 -c "import json,sys; print(json.load(sys.stdin)['id'])")

echo "YouTube ID: $VIDEO_ID"
echo "Link: https://youtu.be/$VIDEO_ID"
echo "Embed: https://www.youtube.com/embed/$VIDEO_ID"
```

### Output for youtube_config.js

After uploading, update `youtube_config.js` — replace `YOUR_YOUTUBE_ID_X` with actual YouTube video IDs.

## Batch Upload (20 Modules)

```bash
TOKEN="$YOUTUBE_OAUTH_TOKEN"
VIDEO_DIR="/path/to/videos"

for i in $(seq 1 20); do
  FILE="$VIDEO_DIR/module_${i}.mp4"
  [ ! -f "$FILE" ] && echo "Skip: $FILE" && continue

  UPLOAD_URL=$(curl -s -X POST \
    "https://www.googleapis.com/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status" \
    -H "Authorization: Bearer $TOKEN" \
    -H "Content-Type: application/json" \
    -D - \
    -d "{
      \"snippet\":{\"title\":\"Digital Natives 2.0 — Модуль $i\",\"categoryId\":\"27\"},
      \"status\":{\"privacyStatus\":\"unlisted\"}
    }" | grep -i "location:" | tr -d '\r' | cut -d' ' -f2)

  RESP=$(curl -s -X PUT "$UPLOAD_URL" \
    -H "Content-Type: video/mp4" \
    --data-binary "@$FILE")

  VID=$(echo "$RESP" | python3 -c "import json,sys; print(json.load(sys.stdin)['id'])")
  echo "Module $i → YouTube ID: $VID"
done
```

## Reference Files

- [references/upload.md](references/upload.md) — Resumable upload protocol
- [references/embed.md](references/embed.md) — Embed HTML, IFrame Player API
- [references/status.md](references/status.md) — Processing status polling
- [references/privacy.md](references/privacy.md) — Privacy and visibility settings
- [references/videos.md](references/videos.md) — List, search, update, delete videos
