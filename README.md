<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:8B5CF6,100:22D3EE&height=170&section=header&text=Memory%20App&fontColor=ffffff&fontSize=48&fontAlignY=40&desc=Browser%20viewer%20for%20your%20Memory%20server&descSize=17&descAlignY=64" width="100%" />

[![live memory.aidhd.co](https://img.shields.io/badge/live-memory.aidhd.co-22D3EE?style=for-the-badge&labelColor=0D1117)](https://memory.aidhd.co)
[![license](https://img.shields.io/badge/license-Non--Commercial-A855F7?style=for-the-badge)](LICENSE)

</div>

Web viewer for [Memory](https://github.com/martusha89/Memory) — connect to any Memory server, browse and manage memories from the browser.

**Live at [memory.aidhd.co](https://memory.aidhd.co)**

## How It Works (Privacy)

**We don't have access to your memories. Nobody does except you.**

This app is a static webpage — a single HTML file with no backend, no database, no server-side code. It runs entirely in your browser.

When you enter your Memory server URL and secret:

1. The page loads from our server (just the HTML — like downloading a file)
2. Your browser connects **directly to your own Memory server**
3. All your data travels between your browser and your server only
4. Nothing passes through us. We never see your URL, your secret, or your memories.

```
You open memory.aidhd.co
        |
        v
[Our server sends you the webpage — that's all it does]
        |
        v
Your browser connects to YOUR-server.workers.dev
        |
        v
[Your memories load from YOUR database on YOUR Cloudflare account]
```

Your credentials are saved in your browser's localStorage (on your device, not ours). If you clear your browser data, you'll need to enter them again.

**TL;DR:** This app is just a window into your own server. We provide the window. You own everything behind it.

## Quick Start

Visit [memory.aidhd.co](https://memory.aidhd.co), enter your Memory server URL and secret, done.

Don't have a Memory server yet? Set one up in 2 minutes:

```bash
npx create-memory-server
```

## Features

- **Browse** memories with category filters and sorting
- **Semantic search** — find memories by meaning, not just keywords
- **Create, edit, delete** memories with category, tags, and importance levels
- **Pagination** for large memory stores
- **Keyboard shortcuts** — `/` to search, `n` for new memory, `Esc` to close
- **Auto-reconnect** — saves credentials in your browser's localStorage

## Run It Locally

If you'd rather not use the hosted version:

```bash
npx memory-app
```

Opens a local server at `localhost:3847`. Same app, running on your machine. Or just download `index.html` and open it directly.

## Requirements

Your Memory server must be **v2.1+** (includes the REST API the app needs). If you set up your server before this version, update and redeploy:

```bash
cd memory
git pull
npm run deploy
```

## License

Non-Commercial. See [Memory](https://github.com/martusha89/Memory) for details.
