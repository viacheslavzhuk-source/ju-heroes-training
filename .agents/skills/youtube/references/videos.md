---
name: videos
description: List, search, update, and delete YouTube videos
---

# Managing Videos

## List Your Videos

```bash
curl -s "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true" \
  -H "Authorization: Bearer $YOUTUBE_OAUTH_TOKEN"

# Get uploads playlist ID from response, then:
curl -s "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UPLOADS_PLAYLIST_ID&maxResults=50" \
  -H "Authorization: Bearer $YOUTUBE_OAUTH_TOKEN"
```

## Get Video Details

```bash
curl -s "https://www.googleapis.com/youtube/v3/videos?id=VIDEO_ID&part=snippet,status,statistics" \
  -H "Authorization: Bearer $YOUTUBE_OAUTH_TOKEN"
```

## Search Your Videos

```bash
curl -s "https://www.googleapis.com/youtube/v3/search?forMine=true&type=video&q=Module&part=snippet&maxResults=25" \
  -H "Authorization: Bearer $YOUTUBE_OAUTH_TOKEN"
```

## Update Video Metadata

```bash
curl -s -X PUT \
  "https://www.googleapis.com/youtube/v3/videos?part=snippet" \
  -H "Authorization: Bearer $YOUTUBE_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "VIDEO_ID",
    "snippet": {
      "title": "New Title",
      "description": "New description",
      "categoryId": "27"
    }
  }'
```

## Delete Video

```bash
curl -s -X DELETE \
  "https://www.googleapis.com/youtube/v3/videos?id=VIDEO_ID" \
  -H "Authorization: Bearer $YOUTUBE_OAUTH_TOKEN"
```

Returns `204 No Content` on success.

## Get Multiple Videos

```bash
# Comma-separated IDs
curl -s "https://www.googleapis.com/youtube/v3/videos?id=ID1,ID2,ID3&part=snippet,status" \
  -H "Authorization: Bearer $YOUTUBE_OAUTH_TOKEN"
```
