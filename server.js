const express = require('express');
const path = require('path');

const app = express();

// Fly inyecta PORT; en algunos entornos puede usarse FLY_INTERNAL_PORT.
// Prioriza PORT, luego FLY_INTERNAL_PORT, luego 8080 por defecto.
const port = process.env.PORT || process.env.FLY_INTERNAL_PORT || 8080;
// Escuchar en 0.0.0.0 para aceptar conexiones externas
const host = '0.0.0.0';

app.use(express.static(path.join(__dirname, 'build')));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, host, () => {
  console.log(`Server started on http://${host}:${port}`);
});
