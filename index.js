require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const router = require('./src/Router');

/**
 * Inicializar serviço de forma assincrona
 * Start async server
 */
(async () =>{

    try {
        /**
         * inicializar o express
         * Start express
         * @var {function} app
         */
        const app = express();

        /**
         * Middleware para receber dados do formulário
         * Middleware to receive form data
         */
        app.use(express.json());
        
        /**
         * inicializar a rota
         */
        app.use('/email', router);

        /**
         * Inicialize o servidor HTTP
         */
        await app.listen(process.env.PORT);
       console.log('Express server listening on port %s', process.env.PORT);
    } catch (error) {
        console.log(error);
    }
})();