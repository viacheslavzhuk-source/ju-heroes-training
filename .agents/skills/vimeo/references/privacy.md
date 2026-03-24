---
name: privacy
description: Vimeo video privacy settings and embed domain restrictions
---

# Privacy Settings

## Set Privacy

```bash
curl -s -X PATCH "https://api.vimeo.com/videos/VIDEO_ID" \
  -H "Authorization: Bearer $VIMEO_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "privacy": {
      "view": "unlisted",
      "embed": "public",
      "download": false
    }
  }'
```

## View Privacy Options

| Value | Description |
|-------|-------------|
| `anybody` | Public — visible on Vimeo and in search |
| `unlisted` | Only people with the link can watch |
| `nobody` | Private — only you can see it |
| `password` | Password required to watch |
| `disable` | Video is hidden everywhere |

## Embed Privacy Options

| Value | Description |
|-------|-------------|
| `public` | Can be embedded anywhere |
| `private` | Cannot be embedded |
| `whitelist` | Only on whitelisted domains |

## Restrict Embed to Specific Domains

```bash
# Add allowed domain
curl -s -X PUT "https://api.vimeo.com/videos/VIDEO_ID/privacy/domains/yourdomain.com" \
  -H "Authorization: Bearer $VIMEO_ACCESS_TOKEN"

# Set embed to whitelist mode
curl -s -X PATCH "https://api.vimeo.com/videos/VIDEO_ID" \
  -H "Authorization: Bearer $VIMEO_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"privacy": {"embed": "whitelist"}}'
```

## Recommended for Education Modules

```bash
curl -s -X PATCH "https://api.vimeo.com/videos/VIDEO_ID" \
  -H "Authorization: Bearer $VIMEO_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "privacy": {
      "view": "unlisted",
      "embed": "public",
      "download": false,
      "comments": "nobody"
    }
  }'
```

This makes videos:
- Not findable on Vimeo (unlisted)
- Embeddable in your app
- Not downloadable
- Comments disabled
