// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Nota = require('./nota');
const db = require('./db');

const app = express();
app.use(bodyParser.json());

app.get('/notas', (req, res) => {
  Nota.find({}, (err, notas) => {
    if (err) {
      res.status(500).json({ error: 'Error al buscar notas' });
    } else {
      res.json(notas);
    }
  });
});

app.post('/notas', (req, res) => {
  const nota = new Nota({
    titulo: req.body.titulo,
    contenido: req.body.contenido,
  });

  nota.save((err) => {
    if (err) {
      res.status(500).json({ error: 'Error al guardar la nota' });
    } else {
      res.json(nota);
    }
  });
});

app.listen(3001, () => {
  console.log('Servidor en el puerto 3001');
});
