---
name: upload
description: Upload videos to YouTube using resumable upload protocol
---

# Video Upload (Resumable)

YouTube uses a resumable upload protocol similar to TUS.

## Prerequisites

1. Create a project at https://console.cloud.google.com
2. Enable **YouTube Data API v3**
3. Create OAuth 2.0 credentials (or use OAuth Playground for testing)

### Quick Token via OAuth Playground

1. Go to https://developers.google.com/oauthplayground/
2. Select scope: `https://www.googleapis.com/auth/youtube.upload`
3. Authorize → Exchange authorization code → copy **Access Token**

## Step 1: Initiate Resumable Upload

```bash
UPLOAD_URL=$(curl -s -X POST \
  "https://www.googleapis.com/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status" \
  -H "Authorization: Bearer $YOUTUBE_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -H "X-Upload-Content-Type: video/mp4" \
  -H "X-Upload-Content-Length: $(stat -f%z video.mp4)" \
  -D - \
  -o /dev/null \
  -d '{
    "snippet": {
      "title": "Video Title",
      "description": "Video description",
      "tags": ["education", "ai"],
      "categoryId": "27"
    },
    "status": {
      "privacyStatus": "unlisted",
      "selfDeclaredMadeForKids": false
    }
  }' | grep -i "location:" | tr -d '\r' | cut -d' ' -f2)

echo "Upload URL: $UPLOAD_URL"
```

### Snippet Fields

| Field | Description |
|-------|-------------|
| `title` | Video title (max 100 chars) |
| `description` | Video description (max 5000 chars) |
| `tags` | Array of tags |
| `categoryId` | Category: `27` = Education, `28` = Science & Tech |

### Status Fields

| Field | Values |
|-------|--------|
| `privacyStatus` | `public`, `unlisted`, `private` |
| `selfDeclaredMadeForKids` | `true` / `false` |

## Step 2: Upload File

```bash
RESP=$(curl -s -X PUT "$UPLOAD_URL" \
  -H "Content-Type: video/mp4" \
  --data-binary @video.mp4)

VIDEO_ID=$(echo "$RESP" | python3 -c "import json,sys; print(json.load(sys.stdin)['id'])")
echo "Video ID: $VIDEO_ID"
echo "Link: https://youtu.be/$VIDEO_ID"
```

### Response

```json
{
  "kind": "youtube#video",
  "id": "dQw4w9WgXcQ",
  "snippet": {
    "title": "Video Title",
    "channelId": "UCxxxxxxxxxx"
  },
  "status": {
    "uploadStatus": "uploaded",
    "privacyStatus": "unlisted"
  }
}
```

## Resuming Interrupted Uploads

```bash
# Check how much was uploaded
curl -s -X PUT "$UPLOAD_URL" \
  -H "Content-Range: bytes */FILE_SIZE" \
  -D -

# Response: 308 Resume Incomplete
# Header: Range: bytes=0-LAST_BYTE

# Resume from LAST_BYTE+1
OFFSET=$((LAST_BYTE + 1))
FILE_SIZE=$(stat -f%z video.mp4)
curl -X PUT "$UPLOAD_URL" \
  -H "Content-Type: video/mp4" \
  -H "Content-Range: bytes ${OFFSET}-$((FILE_SIZE-1))/${FILE_SIZE}" \
  --data-binary @<(tail -c +$((OFFSET+1)) video.mp4)
```

## Complete Upload Script

```bash
#!/bin/bash
FILE="$1"
TITLE="$2"
TOKEN="$YOUTUBE_OAUTH_TOKEN"

[ -z "$FILE" ] && echo "Usage: $0 <file> [title]" && exit 1
[ ! -f "$FILE" ] && echo "File not found: $FILE" && exit 1

SIZE=$(stat -f%z "$FILE" 2>/dev/null || stat --format=%s "$FILE")
TITLE="${TITLE:-$(basename "$FILE" .mp4)}"

echo "Uploading: $FILE ($SIZE bytes) as '$TITLE'"

UPLOAD_URL=$(curl -s -X POST \
  "https://www.googleapis.com/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -H "X-Upload-Content-Type: video/mp4" \
  -H "X-Upload-Content-Length: $SIZE" \
  -D - -o /dev/null \
  -d "{
    \"snippet\":{\"title\":\"$TITLE\",\"categoryId\":\"27\"},
    \"status\":{\"privacyStatus\":\"unlisted\"}
  }" | grep -i "location:" | tr -d '\r' | cut -d' ' -f2)

RESP=$(curl -s -X PUT "$UPLOAD_URL" \
  -H "Content-Type: video/mp4" \
  --data-binary "@$FILE")

VID=$(echo "$RESP" | python3 -c "import json,sys; print(json.load(sys.stdin)['id'])")

echo "Done!"
echo "Video ID: $VID"
echo "Link: https://youtu.be/$VID"
echo "Embed: https://www.youtube.com/embed/$VID"
```
