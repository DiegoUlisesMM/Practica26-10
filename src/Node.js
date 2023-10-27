// En otro archivo donde necesites acceder a la base de datos
const mongoose = require('mongoose');
const db = require('./db'); // Importa la conexión a la base de datos

// Definir un esquema de datos con Mongoose
const notaSchema = new mongoose.Schema({
  titulo: String,
  contenido: String,
});

// Crear un modelo basado en el esquema
const Nota = mongoose.model('Nota', notaSchema);

// Ejemplo: Crear una nueva nota en la base de datos
const nuevaNota = new Nota({ titulo: 'Título de la nota', contenido: 'Contenido de la nota' });

nuevaNota.save()
  .then((result) => {
    console.log('Nota guardada en la base de datos:', result);
  })
  .catch((err) => {
    console.error('Error al guardar la nota:', err);
  });
