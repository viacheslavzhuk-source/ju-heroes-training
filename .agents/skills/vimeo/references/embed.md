---
name: embed
description: Get Vimeo embed codes, player URLs, and oEmbed data
---

# Embed Codes and Links

## Get Video Details with Embed

```bash
curl -s "https://api.vimeo.com/videos/VIDEO_ID?fields=uri,name,link,embed.html,player_embed_url,pictures.base_link" \
  -H "Authorization: Bearer $VIMEO_ACCESS_TOKEN"
```

### Response

```json
{
  "uri": "/videos/123456789",
  "name": "Module 1: AI Introduction",
  "link": "https://vimeo.com/123456789",
  "player_embed_url": "https://player.vimeo.com/video/123456789?h=abc123def",
  "embed": {
    "html": "<iframe src=\"https://player.vimeo.com/video/123456789?h=abc123def\" width=\"640\" height=\"360\" frameborder=\"0\" allowfullscreen></iframe>"
  },
  "pictures": {
    "base_link": "https://i.vimeocdn.com/video/123456789-abc123"
  }
}
```

## Embed Formats

### Standard iframe

```html
<iframe src="https://player.vimeo.com/video/VIDEO_ID"
  width="640" height="360" frameborder="0"
  allow="autoplay; fullscreen; picture-in-picture"
  allowfullscreen>
</iframe>
```

### Unlisted video (with hash)

```html
<iframe src="https://player.vimeo.com/video/VIDEO_ID?h=PRIVACY_HASH"
  width="640" height="360" frameborder="0"
  allowfullscreen>
</iframe>
```

### Responsive embed

```html
<div style="padding:56.25% 0 0 0;position:relative;">
  <iframe src="https://player.vimeo.com/video/VIDEO_ID"
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    frameborder="0" allowfullscreen>
  </iframe>
</div>
```

### With Vimeo Player SDK (used in ju-heroes-training)

```javascript
const player = new Vimeo.Player('container-id', {
    id: VIDEO_ID,
    responsive: true,
    color: '6c5ce7',
    dnt: true,
});
```

## Player URL Parameters

| Parameter | Values | Description |
|-----------|--------|-------------|
| `h` | string | Privacy hash for unlisted videos |
| `autoplay` | `0`/`1` | Auto-play on load |
| `muted` | `0`/`1` | Start muted |
| `loop` | `0`/`1` | Loop video |
| `color` | hex | Player accent color (no #) |
| `title` | `0`/`1` | Show video title |
| `byline` | `0`/`1` | Show uploader name |
| `portrait` | `0`/`1` | Show uploader avatar |
| `dnt` | `0`/`1` | Do not track |
| `quality` | `auto`/`360p`/`720p`/`1080p` | Video quality |

## oEmbed (No Auth Required)

Get embed info without API auth:

```bash
curl -s "https://vimeo.com/api/oembed.json?url=https://vimeo.com/VIDEO_ID"
```

Response:

```json
{
  "type": "video",
  "title": "Video Title",
  "html": "<iframe ...></iframe>",
  "width": 640,
  "height": 360,
  "thumbnail_url": "https://i.vimeocdn.com/video/...",
  "duration": 120
}
```

## Extract Vimeo ID from URI

The API returns URIs like `/videos/123456789`. Extract the numeric ID:

```bash
# Bash
echo "/videos/123456789" | grep -o '[0-9]*$'
# → 123456789

# Python
uri = "/videos/123456789"
video_id = uri.split("/")[-1]
```

## Bulk Get Embeds for All Videos

```bash
curl -s "https://api.vimeo.com/me/videos?fields=uri,name,link,player_embed_url&per_page=100" \
  -H "Authorization: Bearer $VIMEO_ACCESS_TOKEN" | \
  python3 -c "
import json, sys
data = json.load(sys.stdin)
for v in data['data']:
    vid = v['uri'].split('/')[-1]
    print(f\"{v['name']}: {vid} → {v['player_embed_url']}\")
"
```
