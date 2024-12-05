// Invoca Dependencias
const express = require('express');
const router = express.Router();
const usuarioCtrl = require('../controllers/usuario.controller');
const authenticateJWT = require("../middleware/auth");
// Define Rutas
router.get('/usuarios', usuarioCtrl.getUsuarios);
router.post('/usuarios', usuarioCtrl.addUsuario);
router.delete('/usuarios/:id', authenticateJWT, usuarioCtrl.deleteUsuario);
// Exporta Rutas
module.exports = router;