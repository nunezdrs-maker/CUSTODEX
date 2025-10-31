cat > server.js <<'EOF'
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = parseInt(process.env.PORT || process.env.FLY_INTERNAL_PORT || '8080', 10);
const host = '0.0.0.0';

function log(...args) {
  const msg = `[${new Date().toISOString()}] ${args.join(' ')}`;
  console.log(msg);
  try { fs.appendFileSync('server.log', msg + '\n'); } catch (e) {}
}

function dumpStatus() {
  const mem = process.memoryUsage();
  log('MEMORY', JSON.stringify({
    rss: mem.rss, heapTotal: mem.heapTotal, heapUsed: mem.heapUsed, external: mem.external
  }));
}

app.use(express.static(path.join(__dirname, 'build')));

app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok', time: Date.now() });
});

// Root + SPA fallback
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, 'build', 'index.html');
  if (!fs.existsSync(indexPath)) {
    log('ERROR: build/index.html not found');
    return res.status(500).send('Build not found on server. Run npm run build before deploy.');
  }
  res.sendFile(indexPath);
});

const server = app.listen(port, host, () => {
  log(`Server started on http://${host}:${port}`);
  dumpStatus();
});

process.on('uncaughtException', (err) => {
  log('UNCAUGHT_EXCEPTION', err && err.stack ? err.stack : String(err));
  dumpStatus();
  setTimeout(() => process.exit(1), 2000);
});

process.on('unhandledRejection', (reason) => {
  log('UNHANDLED_REJECTION', reason && reason.stack ? reason.stack : String(reason));
  dumpStatus();
  setTimeout(() => process.exit(1), 2000);
});

function gracefulShutdown(signal) {
  log(`Received ${signal}. Shutting down.`);
  dumpStatus();
  server.close((err) => {
    if (err) {
      log('Error during server.close:', err);
      process.exit(1);
    }
    log('Server closed. Exiting.');
    process.exit(0);
  });
  setTimeout(() => { log('Force exit'); process.exit(1); }, 10000).unref();
}

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));
EOF
