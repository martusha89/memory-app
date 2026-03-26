# Memory App

Web viewer for [Memory](https://github.com/martusha89/Memory) — connect to any Memory server, browse and manage memories from the browser.

## Usage

Open [memory-app.pages.dev](https://memory-app.pages.dev), enter your Memory server URL and secret, and you're in.

Or host it yourself — it's a single HTML file with zero dependencies.

### Shareable Links

You can create direct links that auto-connect:

```
https://memory-app.pages.dev?server=https://your-server.workers.dev&secret=YOUR_SECRET
```

**Warning:** Anyone with this link has full access to the memory store. Share carefully.

## Features

- **Browse** memories with category filters and sorting
- **Semantic search** — find memories by meaning, not just keywords
- **Create, edit, delete** memories with category, tags, and importance levels
- **Pagination** for large memory stores
- **Keyboard shortcuts** — `/` to search, `n` for new memory, `Esc` to close
- **Auto-reconnect** — saves credentials in localStorage

## Requirements

The Memory server must be **v2.1+** (includes the REST API). If you're running an older version, update and redeploy:

```bash
cd memory
git pull
npm run deploy
```

## Self-Hosting

It's one file. Host it anywhere:

```bash
# Cloudflare Pages
npx wrangler pages deploy . --project-name memory-app

# Or just open it
open index.html

# Or any static host
cp index.html /your/web/server/
```

## License

Non-Commercial. See [Memory](https://github.com/martusha89/Memory) for details.
