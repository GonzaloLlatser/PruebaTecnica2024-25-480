// Invoca Dependencias
const Libro = require('../models/libro.model');
// Defino Objeto
const libroCtrl = {};
// Define Métodos del Controlador

// Metodo GET -> Obtiene los Libros
libroCtrl.getLibros = async (req, res) => {
  try {
    const libros = await Libro.find();
    res.status(200).json(libros);
  } catch (err) {
    console.log(err);
    res.status(500).json({error: 'Error al obtener los libros'});
  }
};

// Metodo POST -> Añade un Libro
libroCtrl.addLibro = async (req, res) => {
  try {
    const libro = new Libro(req.body);
    await libro.save();
    res.status(201).json({status: 'Libro agregado correctamente!'});
  } catch (err) {
    // Condicional de Errores
    if (err.name === 'ValidationError') {
      return res.status(400).json({error: 'Error de validación', detalles: err.message});
    }
    res.status(500).json({error: 'Error al agregar el libro'});
  }
}

// Metodo PUT -> Actualiza un Libro por su ID
libroCtrl.updateLibro = async (req, res) => {
  try {
    const {id} = req.params;
    const libro = req.body;
    const updatedLibro = await Libro.findByIdAndUpdate(id, {$set: libro}, {new: true, runValidators: true});
    if (!updatedLibro) {
      return res.status(404).json({status: 'Libro no encontrado'});
    }
    res.status(200).json({status: 'Libro actualizado correctamente!', data: updatedLibro});
  } catch (err) {
    // Condicional de Errores
    if (err.name === 'ValidationError') {
      return res.status(400).json({error: 'Error de validación', detalles: err.message});
    }
    res.status(500).json({
      error: 'Error al actualizar el libro',
    });
  }
};

// Metodo DELETE -> Elimina un Libro por su ID
libroCtrl.deleteLibro = async (req, res) => {
  try {
    const {id} = req.params;
    const deleteLibro = await Libro.findByIdAndDelete(id);
    if (!deleteLibro) {
      return res.status(404).json({status: 'Libro no encontrado'});
    }
    res.status(200).json({status: 'Libro eliminado correctamente!'});
  } catch (err) {
    res.status(500).json({
      error: 'Error al eliminar el libro',
    });
  }
};

// Exporta Controlador
module.exports = libroCtrl;