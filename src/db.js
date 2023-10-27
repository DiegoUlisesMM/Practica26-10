const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://2020371087:2020371087@cluster0.vgubm.mongodb.net/diegomirelesdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión a MongoDB exitosa');
});

module.exports = db;
