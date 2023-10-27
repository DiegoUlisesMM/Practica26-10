// notaModel.js
const mongoose = require('mongoose');

const notaSchema = new mongoose.Schema({
  titulo: String,
  contenido: String,
  fechaCreacion: Date,
});

const Nota = mongoose.model('Nota', notaSchema);

module.exports = Nota;
