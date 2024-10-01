require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const router = require('./src/Router');
const cors = require('cors');

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
        
        const corsOptions = {
            origin: '*', 
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
            headers: 'Content-Type,Authorization,x-access-token', 
            credentials: true,
            exposedHeaders: 'custom-header-1, custom-header-2',
            preflightContinue: false
          };
          
        app.use(cors(corsOptions));

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