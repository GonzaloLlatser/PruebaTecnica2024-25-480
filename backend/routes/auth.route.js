// Invoca Dependencias
const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth.controller');
// Define Rutas
router.post('/login', authCtrl.login);
// Exporta Rutas
module.exports = router;
