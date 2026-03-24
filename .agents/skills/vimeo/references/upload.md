---
name: upload
description: Upload videos to Vimeo using TUS resumable upload protocol
---

# Video Upload (TUS Protocol)

Vimeo uses the TUS resumable upload protocol. Upload is a two-step process: initiate, then send the file.

## Step 1: Initiate Upload

```bash
curl -s -X POST "https://api.vimeo.com/me/videos" \
  -H "Authorization: Bearer $VIMEO_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "upload": {
      "approach": "tus",
      "size": FILE_SIZE_IN_BYTES
    },
    "name": "Video Title",
    "description": "Video description",
    "privacy": {
      "view": "unlisted"
    }
  }'
```

### Request Fields

| Field | Type | Req | Description |
|-------|------|:---:|-------------|
| `upload.approach` | string | yes | Always `"tus"` |
| `upload.size` | integer | yes | File size in bytes |
| `name` | string | | Video title |
| `description` | string | | Video description |
| `privacy.view` | string | | `anybody`, `unlisted`, `nobody`, `password` |
| `password` | string | | Required if privacy is `password` |
| `folder_uri` | string | | Folder to add video to |

### Response

```json
{
  "uri": "/videos/123456789",
  "name": "Video Title",
  "link": "https://vimeo.com/123456789",
  "upload": {
    "approach": "tus",
    "upload_link": "https://files.tus.vimeo.com/files/UPLOAD_ID",
    "size": 52428800
  },
  "transcode": {
    "status": "in_progress"
  }
}
```

**Save these values:**
- `upload.upload_link` — needed for Step 2
- `uri` — video URI (extract numeric ID with `grep -o '[0-9]*$'`)

## Step 2: Upload File via TUS

```bash
curl -X PATCH "$UPLOAD_LINK" \
  -H "Tus-Resumable: 1.0.0" \
  -H "Upload-Offset: 0" \
  -H "Content-Type: application/offset+octet-stream" \
  --data-binary @./video.mp4
```

### Required Headers

| Header | Value | Description |
|--------|-------|-------------|
| `Tus-Resumable` | `1.0.0` | TUS protocol version |
| `Upload-Offset` | `0` | Byte offset (0 for new upload) |
| `Content-Type` | `application/offset+octet-stream` | Required content type |

### Resuming Interrupted Uploads

If upload fails, check how much was uploaded:

```bash
curl -s -I -X HEAD "$UPLOAD_LINK" \
  -H "Tus-Resumable: 1.0.0"
```

The `Upload-Offset` header in the response tells you the last byte received. Resume from there:

```bash
# Extract remaining bytes and resume
OFFSET=LAST_OFFSET_VALUE
tail -c +$((OFFSET + 1)) video.mp4 | \
curl -X PATCH "$UPLOAD_LINK" \
  -H "Tus-Resumable: 1.0.0" \
  -H "Upload-Offset: $OFFSET" \
  -H "Content-Type: application/offset+octet-stream" \
  --data-binary @-
```

## Get File Size

```bash
# macOS
stat -f%z video.mp4

# Linux
stat --format=%s video.mp4
```

## Complete Upload Script

```bash
#!/bin/bash
FILE="$1"
NAME="$2"

[ -z "$FILE" ] && echo "Usage: $0 <file> <name>" && exit 1
[ ! -f "$FILE" ] && echo "File not found: $FILE" && exit 1

SIZE=$(stat -f%z "$FILE" 2>/dev/null || stat --format=%s "$FILE")

echo "Uploading: $FILE ($SIZE bytes)"

RESP=$(curl -s -X POST "https://api.vimeo.com/me/videos" \
  -H "Authorization: Bearer $VIMEO_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{
    \"upload\":{\"approach\":\"tus\",\"size\":$SIZE},
    \"name\":\"$NAME\",
    \"privacy\":{\"view\":\"unlisted\"}
  }")

UPLOAD_LINK=$(echo "$RESP" | python3 -c "import json,sys; print(json.load(sys.stdin)['upload']['upload_link'])")
VIDEO_ID=$(echo "$RESP" | python3 -c "import json,sys; print(json.load(sys.stdin)['uri'])" | grep -o '[0-9]*$')

echo "Video ID: $VIDEO_ID"
echo "Uploading file..."

curl -X PATCH "$UPLOAD_LINK" \
  -H "Tus-Resumable: 1.0.0" \
  -H "Upload-Offset: 0" \
  -H "Content-Type: application/offset+octet-stream" \
  --data-binary "@$FILE"

echo ""
echo "Upload complete! Video ID: $VIDEO_ID"
echo "Link: https://vimeo.com/$VIDEO_ID"
echo "Embed: https://player.vimeo.com/video/$VIDEO_ID"
```

## Limitations

- Free accounts must request API upload access (manual review, up to 5 business days)
- Max file size depends on your Vimeo plan
- Basic: 500 MB/week, Starter: 5 GB/week, Standard: 20 GB/week, Advanced: no limit
