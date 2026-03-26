# Memory App

Web viewer for [Memory](https://github.com/martusha89/Memory) — connect to any Memory server, browse and manage memories from the browser.

## Quick Start

```bash
npx memory-app
```

That's it. Opens a browser, enter your Memory server URL and secret, done.

### Options

```bash
npx memory-app --port 4000    # Custom port (default: 3847)
npx memory-app --no-open      # Don't auto-open browser
```

## Features

- **Browse** memories with category filters and sorting
- **Semantic search** — find memories by meaning, not just keywords
- **Create, edit, delete** memories with category, tags, and importance levels
- **Pagination** for large memory stores
- **Keyboard shortcuts** — `/` to search, `n` for new memory, `Esc` to close
- **Auto-reconnect** — saves credentials in localStorage

### Shareable Links

Create direct links that auto-connect:

```
http://localhost:3847?server=https://your-server.workers.dev&secret=YOUR_SECRET
```

**Warning:** Anyone with this link has full access to the memory store. Share carefully.

## Requirements

The Memory server must be **v2.1+** (includes the REST API). If you're running an older version, update and redeploy:

```bash
cd memory
git pull
npm run deploy
```

## Other Ways to Use

```bash
# Install globally
npm install -g memory-app
memory-app

# Or host the HTML file anywhere — it's just one file
npx wrangler pages deploy . --project-name memory-app
```

## License

Non-Commercial. See [Memory](https://github.com/martusha89/Memory) for details.
