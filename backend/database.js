// Invoca Dependencias
const mongoose = require('mongoose');
// Define URL de conexión
const URI = "mongodb+srv://root:root@cluster0.b3fux.mongodb.net/pruebaTecnica480?retryWrites=true&w=majority";
// Realiza conexión
mongoose.connect(URI)
  .then(db => console.log("DB - Conectado correctamente"))
  .catch(err => console.log(err));
module.exports = mongoose;