// Invoca Dependencias
const mongoose = require('mongoose');
const {Schema} = require('mongoose');
// Define Schema
const usuarioSchema = new Schema({
    // Atributos
    nombre: {
      type: String,
      required: [true, 'El nombre es obligatorio']
    },
    email: {
      type: String,
      required: [true, 'El email es obligatorio'],
      match: [/\S+@\S+\.\S+/, 'Ingrese un correo electrónico válido'],
    },
    edad: {
      type: Number,
      required: [true, 'El edad es obligatoria'],
    }
  },
  {
    collection: 'usuarios'
  });
// Exporta Modelo
module.exports = mongoose.model('usuario', usuarioSchema);