// Invoca Dependencias
const mongoose = require('mongoose');
const {Schema} = require('mongoose');
// Define Schema
const libroSchema = new Schema({
    // Atributos
    titulo: {
      type: String,
      required: [true, 'El título es obligatório']
    },
    autor: {
      type: String,
      required: [true, 'El autor es obligatório']
    },
    genero: {
      type: String,
      required: [true, 'El género es obligatório'],
    },
    anoPublicacion: {
      type: String,
      required: [true, 'El año de publicación es obligatório']
    },
  },
  {
    collection: 'libros'
  });
// Exporta Modelo
module.exports = mongoose.model('Libro', libroSchema);