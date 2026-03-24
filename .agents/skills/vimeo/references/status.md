---
name: status
description: Check Vimeo video transcode status and upload progress
---

# Transcode Status

After uploading, Vimeo transcodes the video. Poll for status until complete.

## Check Status

```bash
curl -s "https://api.vimeo.com/videos/VIDEO_ID?fields=transcode.status,upload.status,status" \
  -H "Authorization: Bearer $VIMEO_ACCESS_TOKEN"
```

### Response

```json
{
  "transcode": {
    "status": "in_progress"
  },
  "upload": {
    "status": "complete"
  },
  "status": "transcode_starting"
}
```

## Status Values

### transcode.status

| Status | Description |
|--------|-------------|
| `in_progress` | Video is being transcoded |
| `complete` | Ready to play |
| `error` | Transcode failed |

### upload.status

| Status | Description |
|--------|-------------|
| `in_progress` | File still uploading |
| `complete` | Upload finished |
| `error` | Upload failed |

### video status (top-level)

| Status | Description |
|--------|-------------|
| `available` | Ready to play |
| `uploading` | Still uploading |
| `transcode_starting` | Transcode queued |
| `transcoding` | Being transcoded |
| `uploading_error` | Upload failed |
| `transcode_error` | Transcode failed |
| `quota_exceeded` | Over storage limit |

## Polling Script

```bash
VIDEO_ID="123456789"

while true; do
  RESP=$(curl -s "https://api.vimeo.com/videos/$VIDEO_ID?fields=transcode.status,status" \
    -H "Authorization: Bearer $VIMEO_ACCESS_TOKEN")

  TC=$(echo "$RESP" | python3 -c "import json,sys; print(json.load(sys.stdin)['transcode']['status'])")
  echo "[$(date +%H:%M:%S)] Transcode: $TC"

  [ "$TC" = "complete" ] && echo "Ready!" && break
  [ "$TC" = "error" ] && echo "Failed!" && break

  sleep 10
done
```

## Typical Transcode Times

| Video Length | Approx Time |
|-------------|-------------|
| < 1 min | 1-3 minutes |
| 1-5 min | 3-10 minutes |
| 5-30 min | 10-30 minutes |
| 30+ min | 30-60+ minutes |

Times vary based on resolution, codec, and Vimeo server load.
