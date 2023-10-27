const mongoose = require('mongoose');
const Nota = require('./nota'); // Importa el modelo de datos de las notas

// Conéctate a la base de datos
mongoose.connect('mongodb+srv://2020371087:2020371087@cluster0.vgubm.mongodb.net/diegomirelesdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Crea una nueva nota
const nuevaNota = new Nota({
  titulo: 'Mi primera nota en NotasApp',
  contenido: 'Esta es una nota de prueba en la colección NotasApp.',
});

// Guarda la nota en la colección "NotasApp"
nuevaNota.save((err) => {
  if (err) {
    console.error('Error al guardar la nota:', err);
  } else {
    console.log('Nota guardada exitosamente en la colección "NotasApp"');
  }
});
