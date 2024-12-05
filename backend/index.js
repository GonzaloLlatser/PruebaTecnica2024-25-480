// Invoca Dependencias
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const {mongoose} = require('./database');
const {json} = require('express');
// Declara Puerto de escucha de la API
app.set('port', process.env.PORT || 6000);
// Descarga el Middleware (dependencias intermedias)
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
// Invocar fichero Routes
app.use('/api', require('./routes/libro.route'));
app.use('/api', require('./routes/usuario.route'));
app.use('/api', require('./routes/auth.route'));
// Mensaje de Inicio
app.use((req, res, next) => {
  res.status(404).send('Ruta no encontrada. La API está en /api/libros o /api/usuarios');
});
// Inicia el Servidor
app.listen(app.get('port'), () => {
  console.log(`Server running on port: ${app.get('port')}`);
});