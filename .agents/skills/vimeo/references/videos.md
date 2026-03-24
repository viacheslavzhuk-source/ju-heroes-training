---
name: videos
description: List, search, update, and delete Vimeo videos
---

# Managing Videos

## List Your Videos

```bash
curl -s "https://api.vimeo.com/me/videos?fields=uri,name,link,duration,created_time,status&per_page=25&page=1" \
  -H "Authorization: Bearer $VIMEO_ACCESS_TOKEN"
```

### Query Parameters

| Param | Description |
|-------|-------------|
| `per_page` | Items per page (max 100) |
| `page` | Page number |
| `sort` | `date`, `alphabetical`, `duration`, `plays` |
| `direction` | `asc` or `desc` |
| `query` | Search by name |

## Search Videos

```bash
curl -s "https://api.vimeo.com/me/videos?query=Module&fields=uri,name,link" \
  -H "Authorization: Bearer $VIMEO_ACCESS_TOKEN"
```

## Get Single Video

```bash
curl -s "https://api.vimeo.com/videos/VIDEO_ID" \
  -H "Authorization: Bearer $VIMEO_ACCESS_TOKEN"
```

## Update Video Metadata

```bash
curl -s -X PATCH "https://api.vimeo.com/videos/VIDEO_ID" \
  -H "Authorization: Bearer $VIMEO_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "New Title",
    "description": "New description"
  }'
```

## Delete Video

```bash
curl -s -X DELETE "https://api.vimeo.com/videos/VIDEO_ID" \
  -H "Authorization: Bearer $VIMEO_ACCESS_TOKEN"
```

Returns `204 No Content` on success.

## List All Videos (Paginated)

```bash
PAGE=1
while true; do
  RESP=$(curl -s "https://api.vimeo.com/me/videos?fields=uri,name&per_page=100&page=$PAGE" \
    -H "Authorization: Bearer $VIMEO_ACCESS_TOKEN")

  echo "$RESP" | python3 -c "
import json,sys
data = json.load(sys.stdin)
for v in data['data']:
    vid = v['uri'].split('/')[-1]
    print(f'{vid} | {v[\"name\"]}')
if not data['paging'].get('next'):
    sys.exit(1)
" || break

  PAGE=$((PAGE + 1))
done
```
