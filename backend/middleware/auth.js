// Invoca Dependencias
const jwt = require('jsonwebtoken');
require('dotenv').config(); // Para obtener el secret desde el archivo .env
// Define Métodos
const authenticateJWT = (req, res, next) => {
  // Obtiene el token del header
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    return res.status(403).json({error: 'Acceso denegado. No se proporcionó token.'});
  }
  // Comprueba Token valido
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({error: 'Token no válido.'});
    }
    // Almacena el usuario
    req.user = user;
    // Invoca a la Función continua
    next();
  });
};
// Exporta Autentificación
module.exports = authenticateJWT;
