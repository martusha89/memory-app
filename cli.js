#!/usr/bin/env node

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = parseInt(process.env.PORT || '3847', 10);
const HTML_PATH = path.join(__dirname, 'index.html');

// Parse CLI args
const args = process.argv.slice(2);
const noOpen = args.includes('--no-open');
const helpFlag = args.includes('--help') || args.includes('-h');

if (helpFlag) {
  console.log(`
  Memory App — Web viewer for Memory servers

  Usage:
    npx memory-app [options]

  Options:
    --port <n>    Port to listen on (default: 3847, or PORT env var)
    --no-open     Don't open browser automatically
    -h, --help    Show this help

  Once running, open the browser and enter your Memory server URL + secret.
  `);
  process.exit(0);
}

const portIdx = args.indexOf('--port');
const port = portIdx !== -1 && args[portIdx + 1] ? parseInt(args[portIdx + 1], 10) : PORT;

// Read HTML once
let html;
try {
  html = fs.readFileSync(HTML_PATH, 'utf8');
} catch (e) {
  console.error('Could not read index.html:', e.message);
  process.exit(1);
}

const server = http.createServer((req, res) => {
  // Serve the app for any GET request
  if (req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-cache',
    });
    res.end(html);
    return;
  }
  res.writeHead(404);
  res.end('Not found');
});

server.listen(port, () => {
  const url = `http://localhost:${port}`;

  console.log(`
  \x1b[35m\x1b[1mMemory App\x1b[0m

  Running at \x1b[36m${url}\x1b[0m
  Press \x1b[33mCtrl+C\x1b[0m to stop
  `);

  if (!noOpen) {
    const cmd = process.platform === 'win32' ? 'start'
      : process.platform === 'darwin' ? 'open'
      : 'xdg-open';
    exec(`${cmd} ${url}`);
  }
});

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.error(`Port ${port} is in use. Try: npx memory-app --port ${port + 1}`);
  } else {
    console.error('Server error:', e.message);
  }
  process.exit(1);
});
