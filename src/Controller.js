/**
 * classe Controller
 * Controller Class
 */

const nodemailer = require('nodemailer');

class Controller {

    /**
     * Envia os dados recebidos da requisição por email
     * Send the data received from the request by email
     */
    async sendEmail(req, res) {
        try {
            /**
             * recebe os parâmetros da requisição
             */
            const { name, email, phone, message } = req.body;

            /**
             * Configuração do Nodemailer
             * nodemailer configuration
             * @var {Object} transporter
             */
            const transporter = nodemailer.createTransport({
                /**
                 * Substitua por outro serviço de e-mail se necessário
                 * Replace with another email service if necessary
                 */
                service: 'gmail',
                /**
                 * autenticação
                 * authentication
                 */
                auth: {
                    /**
                     * seu email
                     * yours email
                     */
                    user: process.env.EMAIL,

                    /**
                     * sua senha
                     * yours password
                     */
                    pass: process.env.PASSWORD
                }
            });

            /**
             * configuração de formato de envio do email
             */
            const mailOptions = {
                from: email,
                to: process.env.EMAIL,
                subject: 'Nova Mensagem do Site',
                text: `
                  Nome: ${name}
                  Email: ${email}
                  Telefone: ${phone}
                  Mensagem:
                   ${message}
                `
              };
            /**
             * envia o email
             * send email
             */
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    /**
                     * obtém a mensagem de erro
                     * obtém a mensagem de erro
                     * @var {String} errorMessage
                     */
                    const errorMessage = error.message;

                    /**
                     * retorna mensagem de erro
                     * returns error message
                     */
                    return res.status(500).json({ message: 'Erro ao enviar o email', details:errorMessage});

                } else {
                    /**
                     * retorna mensagem de sucesso
                     * returns success message
                     */
                    return res.status(200).json({ message: 'Enviado com sucesso!' });
                }

              });
            
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao enviar o email'});
        }

    }

    async checkAPI(req, res){

        return res.status(200).json({ data: 'ok'});  
    }
}

/**
 * exportar a classe
 * class export
 */
module.exports = new Controller();