// Invoca Dependencias
const Usuario = require('../models/usuario.model');
// Defino Objeto
const usuarioCtrl = {};
// Define Métodos del Controlador

// Metodo GET -> Obtiene los Usuarios
usuarioCtrl.getUsuarios = async (req, res) => {
  try {
    const usuario = await Usuario.find();
    res.status(200).json(usuario);
  } catch (err) {
    res.status(500).json({error: 'Error al obtener los Usuarios'});
  }
};

// Metodo POST -> Añade un Usuario
usuarioCtrl.addUsuario = async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).json({status: 'Usuario agregado correctamente!'});
  } catch (err) {
    // Condicional de Errores
    if (err.name === 'ValidationError') {
      return res.status(400).json({error: 'Error de validación', detalles: err.message});
    }
    res.status(500).json({error: 'Error al agregar el Usuario'});
  }
}

// Metodo DELETE -> Elimina un Usuario por su ID
usuarioCtrl.deleteUsuario = async (req, res) => {
  try {
    const {id} = req.params;
    const deleteUsuario = await Usuario.findByIdAndDelete(id);
    if (!deleteUsuario) {
      return res.status(404).json({status: 'Usuario no encontrado'});
    }
    res.status(200).json({status: 'Usuario eliminado correctamente!'});
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Error al eliminar el Usuario',
    });
  }
};

// Exporta Controlador
module.exports = usuarioCtrl;