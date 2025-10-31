// https://github.com/nunezdrs-maker/nune/blob/main/server.js
const express = require('express');
const path = require('path');

const app = express();

// Preferir PORT (Fly) -> FLY_INTERNAL_PORT -> fallback 8080
const port = process.env.PORT || process.env.FLY_INTERNAL_PORT || 8080;
// Forzar escucha en 0.0.0.0 (no localhost)
const host = '0.0.0.0';

app.use(express.static(path.join(__dirname, 'build')));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, host, () => {
  console.log(`Server started on http://${host}:${port}`);
});
