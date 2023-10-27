const mongoose = require('mongoose');

const notaSchema = new mongoose.Schema({
  titulo: String,
  contenido: String,
  fechaCreacion: { type: Date, default: Date.now },
});

const Nota = mongoose.model('Nota', notaSchema, 'NotasApp'); // 'NotasApp' es el nombre de la colección

module.exports = Nota;
