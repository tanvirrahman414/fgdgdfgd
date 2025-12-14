import http from 'http';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, 'dist');
const port = process.env.PORT || 3000;

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

async function serveFile(filePath, res) {
  const ext = path.extname(filePath).toLowerCase();
  try {
    const data = await fs.readFile(filePath);
    res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
    res.end(data);
    return true;
  } catch (err) {
    return false;
  }
}

const server = http.createServer(async (req, res) => {
  try {
    console.log(`${new Date().toISOString()} - request: ${req.method} ${req.url}`);
    const reqUrl = new URL(req.url, `http://${req.headers.host}`);
    let pathname = decodeURIComponent(reqUrl.pathname);
    if (pathname === '/') pathname = '/index.html';

    const safePath = path.normalize(path.join(distDir, pathname));
    if (!safePath.startsWith(distDir)) {
      res.writeHead(400);
      res.end('Bad Request');
      return;
    }

    const found = await serveFile(safePath, res);
    if (!found) {
      // SPA fallback to index.html
      const indexPath = path.join(distDir, 'index.html');
      const indexFound = await serveFile(indexPath, res);
      if (!indexFound) {
        res.writeHead(404);
        res.end('Not Found');
      }
    }
  } catch (err) {
    res.writeHead(500);
    res.end('Server error');
  }
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server serving ${distDir} on http://0.0.0.0:${port}`);
});

process.on('uncaughtException', (err) => {
  console.error('uncaughtException', err);
});

process.on('unhandledRejection', (reason) => {
  console.error('unhandledRejection', reason);
});

export default server;
