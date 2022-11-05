require('dotenv').config();
const { Router } = require('express');
// Obviamente traemos el modulo de nodemailer
const nodemailer = require("nodemailer")
// Hay que traer e inicializar el router de express
const router = Router();
// Variables de entorno
const {
    EMAIL_USER,
    EMAIL_PASS
} = process.env;
// Creamos el transporter y lo denominamos Email
let Email = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: EMAIL_USER, // generated ethereal user
      pass: EMAIL_PASS, // generated ethereal password
    },
  });

  // verify connection configuration
Email.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

// Configurar las rutas


  router.post('/message', async (req, res) => { 

    await Email.sendMail({
        from: req.body.firstName + " " + req.body.lastName, // sender address
        to: EMAIL_USER, // list of receivers
        subject: "Propuesta laboral ✔", // Subject line
        html: `
        <p>Email: ${req.body.mail}</p>
        <p>Phone: ${req.body.phone}</p>
        <p>Message: ${req.body.message}</p>`, // html body
      });

      res.status(200).send('Mensaje enviado con exito')
  });

  



module.exports = router;

