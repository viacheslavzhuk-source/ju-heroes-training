---
name: vimeo
description: Upload videos to Vimeo, get embed codes and links, manage video privacy settings
homepage: https://developer.vimeo.com/api/reference/videos
metadata:
  openclaw:
    requires:
      env:
        - VIMEO_ACCESS_TOKEN
    primaryEnv: VIMEO_ACCESS_TOKEN
---

# Vimeo Video Hosting

Upload videos to Vimeo via API, get embed codes and shareable links. Designed for hosting education module videos.

## Authentication

All requests use Bearer token in the `Authorization` header.

```bash
curl -H "Authorization: Bearer $VIMEO_ACCESS_TOKEN" https://api.vimeo.com/me
```

Get your token at: https://developer.vimeo.com/apps → your app → Authentication → Generate Personal Access Token.

**Required scopes:** `upload`, `edit`, `private`, `video_files`

## Quick Reference

| Task | Read |
|------|------|
| Upload a video | [upload.md](references/upload.md) |
| Get embed code / link | [embed.md](references/embed.md) |
| Check transcode status | [status.md](references/status.md) |
| Set privacy settings | [privacy.md](references/privacy.md) |
| List / search videos | [videos.md](references/videos.md) |
| Delete a video | [videos.md](references/videos.md) |

## Default Workflow

### Upload → Wait → Get Embed

```bash
# 1. Initiate upload
RESPONSE=$(curl -s -X POST "https://api.vimeo.com/me/videos" \
  -H "Authorization: Bearer $VIMEO_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{
    \"upload\": {\"approach\": \"tus\", \"size\": $(stat -f%z video.mp4)},
    \"name\": \"Module 1: AI Introduction\",
    \"privacy\": {\"view\": \"unlisted\"}
  }")

UPLOAD_LINK=$(echo "$RESPONSE" | python3 -c "import json,sys; print(json.load(sys.stdin)['upload']['upload_link'])")
VIDEO_URI=$(echo "$RESPONSE" | python3 -c "import json,sys; print(json.load(sys.stdin)['uri'])")
VIDEO_ID=$(echo "$VIDEO_URI" | grep -o '[0-9]*$')

# 2. Upload file via TUS
curl -X PATCH "$UPLOAD_LINK" \
  -H "Tus-Resumable: 1.0.0" \
  -H "Upload-Offset: 0" \
  -H "Content-Type: application/offset+octet-stream" \
  --data-binary @video.mp4

# 3. Poll transcode status
while true; do
  STATUS=$(curl -s "https://api.vimeo.com/videos/$VIDEO_ID?fields=transcode.status" \
    -H "Authorization: Bearer $VIMEO_ACCESS_TOKEN" | \
    python3 -c "import json,sys; print(json.load(sys.stdin)['transcode']['status'])")
  echo "Transcode: $STATUS"
  [ "$STATUS" = "complete" ] && break
  sleep 10
done

# 4. Get embed and link
curl -s "https://api.vimeo.com/videos/$VIDEO_ID?fields=link,embed.html,player_embed_url" \
  -H "Authorization: Bearer $VIMEO_ACCESS_TOKEN"
```

### Output for vimeo_config.js

After uploading all 20 modules, update `vimeo_config.js` — replace `YOUR_VIMEO_ID_X` with actual Vimeo IDs (numeric part from the video URI).

## Batch Upload (20 Modules)

To upload all education videos at once:

```bash
VIMEO_TOKEN="your_token"
VIDEO_DIR="/path/to/videos"

for i in $(seq 1 20); do
  FILE="$VIDEO_DIR/module_${i}.mp4"
  [ ! -f "$FILE" ] && echo "Skip: $FILE not found" && continue

  SIZE=$(stat -f%z "$FILE")

  RESP=$(curl -s -X POST "https://api.vimeo.com/me/videos" \
    -H "Authorization: Bearer $VIMEO_TOKEN" \
    -H "Content-Type: application/json" \
    -d "{
      \"upload\":{\"approach\":\"tus\",\"size\":$SIZE},
      \"name\":\"Module $i\",
      \"privacy\":{\"view\":\"unlisted\"}
    }")

  LINK=$(echo "$RESP" | python3 -c "import json,sys; print(json.load(sys.stdin)['upload']['upload_link'])")
  VID=$(echo "$RESP" | python3 -c "import json,sys; print(json.load(sys.stdin)['uri'])" | grep -o '[0-9]*$')

  curl -X PATCH "$LINK" \
    -H "Tus-Resumable: 1.0.0" \
    -H "Upload-Offset: 0" \
    -H "Content-Type: application/offset+octet-stream" \
    --data-binary "@$FILE"

  echo "Module $i uploaded → Vimeo ID: $VID"
done
```

## Reference Files

- [references/upload.md](references/upload.md) — TUS upload protocol, initiate + upload file
- [references/embed.md](references/embed.md) — Get embed HTML, player URL, oEmbed
- [references/status.md](references/status.md) — Transcode status polling
- [references/privacy.md](references/privacy.md) — Privacy and embed domain settings
- [references/videos.md](references/videos.md) — List, search, update, delete videos
