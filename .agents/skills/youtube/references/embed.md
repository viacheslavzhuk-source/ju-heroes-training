---
name: embed
description: YouTube embed codes, IFrame Player API, and player parameters
---

# Embed Codes and Links

## URL Formats

| Type | Format |
|------|--------|
| Watch | `https://www.youtube.com/watch?v=VIDEO_ID` |
| Short | `https://youtu.be/VIDEO_ID` |
| Embed | `https://www.youtube.com/embed/VIDEO_ID` |
| Thumbnail | `https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg` |

## Standard Embed

```html
<iframe width="560" height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
```

## Responsive Embed

```html
<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID"
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    frameborder="0" allowfullscreen>
  </iframe>
</div>
```

## IFrame Player API (used in ju-heroes-training)

```html
<script src="https://www.youtube.com/iframe_api"></script>
```

```javascript
let player;

function onYouTubeIframeAPIReady() {
    // API loaded, players can now be created
}

player = new YT.Player('player-container', {
    videoId: 'VIDEO_ID',
    playerVars: {
        rel: 0,
        modestbranding: 1,
        color: 'white',
        cc_load_policy: 0,
    },
    events: {
        onReady: (e) => console.log('Ready'),
        onStateChange: (e) => console.log('State:', e.data),
    }
});
```

### Tracking Progress

```javascript
// Poll current time vs duration
setInterval(() => {
    if (player && player.getCurrentTime && player.getDuration) {
        const pct = player.getCurrentTime() / player.getDuration();
        console.log(`Progress: ${(pct * 100).toFixed(1)}%`);
    }
}, 1000);
```

### Player States

| Constant | Value | Description |
|----------|-------|-------------|
| `YT.PlayerState.UNSTARTED` | -1 | Not started |
| `YT.PlayerState.ENDED` | 0 | Finished |
| `YT.PlayerState.PLAYING` | 1 | Playing |
| `YT.PlayerState.PAUSED` | 2 | Paused |
| `YT.PlayerState.BUFFERING` | 3 | Buffering |
| `YT.PlayerState.CUED` | 5 | Cued |

## Player Parameters

| Param | Values | Description |
|-------|--------|-------------|
| `autoplay` | `0`/`1` | Auto-play |
| `controls` | `0`/`1` | Show controls |
| `rel` | `0`/`1` | Related videos (0 = same channel only) |
| `modestbranding` | `1` | Minimal YouTube branding |
| `color` | `red`/`white` | Progress bar color |
| `start` | seconds | Start time |
| `end` | seconds | End time |
| `loop` | `0`/`1` | Loop |
| `cc_load_policy` | `0`/`1` | Show captions |
| `hl` | `ru` | Interface language |

## Thumbnail URLs

| Quality | URL |
|---------|-----|
| Max | `https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg` |
| High | `https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg` |
| Medium | `https://img.youtube.com/vi/VIDEO_ID/mqdefault.jpg` |
| Default | `https://img.youtube.com/vi/VIDEO_ID/default.jpg` |
