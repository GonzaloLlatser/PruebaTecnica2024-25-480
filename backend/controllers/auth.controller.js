// Invoca Dependencias
const jwt = require('jsonwebtoken');
require('dotenv').config();
// Define Métodos del Controlador
const login = (req, res) => {
  const {email, password} = req.body;

  if (email === 'correo@correo.com' && password === '1235') {
    const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: '1h'});
    // Retorna Token
    return res.json({token});
  }
  return res.status(401).json({error: 'Credenciales incorrectas.'});
};
// Exporta Controlador
module.exports = {login};