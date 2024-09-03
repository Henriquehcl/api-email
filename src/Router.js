/**
 * arquivo de configuração das rotas
 * route configuration file
 */

const { Router } = require('express');
const Controller = require('./controller');

/**
 * inicializar a função do Router
 * Start router function
 * @var {Function} routes
 */
const routes = Router();

/**
 * enviar o email
 * Send email
 */
routes.post('/envia-email', Controller.sendEmail);


/**
 * Exporta a função do Router
 * Export router function
 */
module.exports = routes;