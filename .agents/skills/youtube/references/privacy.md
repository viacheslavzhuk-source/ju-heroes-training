---
name: privacy
description: YouTube video privacy and visibility settings
---

# Privacy Settings

## Set Privacy

```bash
curl -s -X PUT \
  "https://www.googleapis.com/youtube/v3/videos?part=status" \
  -H "Authorization: Bearer $YOUTUBE_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "VIDEO_ID",
    "status": {
      "privacyStatus": "unlisted"
    }
  }'
```

## Privacy Options

| Value | Description |
|-------|-------------|
| `public` | Anyone can find and watch |
| `unlisted` | Only people with the link |
| `private` | Only you (and people you share with) |

## Recommended for Education Modules

```json
{
  "status": {
    "privacyStatus": "unlisted",
    "selfDeclaredMadeForKids": false
  }
}
```

**Unlisted** is best for education:
- Not in search results
- Anyone with the embed/link can watch
- Works in embedded players
- No age restrictions

## Embed Restrictions

YouTube doesn't have per-domain embed restrictions like Vimeo. All unlisted/public videos can be embedded anywhere. To prevent embedding, set to `private`.
