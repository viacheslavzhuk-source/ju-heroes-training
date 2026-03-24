---
name: status
description: Check YouTube video processing status
---

# Processing Status

After upload, YouTube processes the video. Check status via API.

## Check Status

```bash
curl -s "https://www.googleapis.com/youtube/v3/videos?id=VIDEO_ID&part=status,processingDetails" \
  -H "Authorization: Bearer $YOUTUBE_OAUTH_TOKEN"
```

### Response

```json
{
  "items": [{
    "id": "VIDEO_ID",
    "status": {
      "uploadStatus": "processed",
      "privacyStatus": "unlisted",
      "publishAt": null
    },
    "processingDetails": {
      "processingStatus": "succeeded",
      "processingProgress": {
        "partsTotal": 1000,
        "partsProcessed": 1000,
        "timeLeftMs": 0
      }
    }
  }]
}
```

## Upload Status Values

| Status | Description |
|--------|-------------|
| `uploaded` | File received, processing starting |
| `processed` | Ready to play |
| `failed` | Processing failed |
| `rejected` | Rejected (policy violation) |
| `deleted` | Video was deleted |

## Processing Status Values

| Status | Description |
|--------|-------------|
| `processing` | Being processed |
| `succeeded` | Ready |
| `failed` | Failed |
| `terminated` | Cancelled |

## Polling Script

```bash
VIDEO_ID="dQw4w9WgXcQ"

while true; do
  RESP=$(curl -s "https://www.googleapis.com/youtube/v3/videos?id=$VIDEO_ID&part=status" \
    -H "Authorization: Bearer $YOUTUBE_OAUTH_TOKEN")

  STATUS=$(echo "$RESP" | python3 -c "import json,sys; print(json.load(sys.stdin)['items'][0]['status']['uploadStatus'])")
  echo "[$(date +%H:%M:%S)] Status: $STATUS"

  [ "$STATUS" = "processed" ] && echo "Ready!" && break
  [ "$STATUS" = "failed" ] && echo "Failed!" && break

  sleep 10
done
```

## Typical Processing Times

| Video Length | Approx Time |
|-------------|-------------|
| < 1 min | 1-5 minutes |
| 1-5 min | 5-15 minutes |
| 5-30 min | 15-45 minutes |
| 30+ min | 1-2+ hours |

HD/4K videos take longer. Processing may queue during peak hours.
