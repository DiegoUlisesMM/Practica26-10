const mongoose = require('mongoose');
const Nota = require('./nota'); // Importa el modelo de datos de las notas

// Conéctate a la base de datos
mongoose.connect('mongodb+srv://2020371087:2020371087@cluster0.vgubm.mongodb.net/diegomirelesdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Consulta todas las notas en la colección "NotasApp"
Nota.find({}, (err, notas) => {
  if (err) {
    console.error('Error al leer notas:', err);
  } else {
    console.log('Notas encontradas en la colección "NotasApp":');
    console.log(notas);
  }
});
