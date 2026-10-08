import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 8080;
const DIST_PATH = path.join(__dirname, 'dist');

// Serve static assets from dist directory
app.use(express.static(DIST_PATH, {
  maxAge: '1d',
  etag: true
}));

// SPA Fallback: all non-file routes return index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_PATH, 'index.html'));
});

// Start listening on 0.0.0.0 and PORT
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Soule storefront server listening on http://0.0.0.0:${PORT}`);
});
