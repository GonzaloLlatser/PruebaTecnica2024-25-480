// Invoca Dependencias
const express = require('express');
const router = express.Router();
const libroCtrl = require('../controllers/libro.controller');
const authenticateJWT = require("../middleware/auth");
// Define Rutas
router.get('/libros', libroCtrl.getLibros);
router.post('/libros', libroCtrl.addLibro);
router.put('/libros/:id', authenticateJWT, libroCtrl.updateLibro);
router.delete('/libros/:id', authenticateJWT, libroCtrl.deleteLibro);
// Exporta Rutas
module.exports = router;