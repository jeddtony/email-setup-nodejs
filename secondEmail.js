'use strict';

const nodeMailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

exports.sendMail = function(req,res){
  const transporter = nodeMailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 25,
    secure: false,  //true for 465 port, false for other ports
    auth: {
      user: 'mailtrap username',
      pass: 'mailtrap password'
    },
    tls:{
        rejectUnauthorized: false
    }
  });

  const handlebarOptions = {
    viewEngine: {
      extName: '.hbs',
      partialsDir: './views/',
      layoutsDir: './views/',
      defaultLayout: 'index.hbs',
    },
    viewPath: './views/',
    extName: '.hbs',
  };

  transporter.use('compile', hbs(handlebarOptions));
    // transporter.use('compile', )

  const mailOptions = {
    from: 'sender@example.com', // sender address
    to: 'recipient@gmail.com', // list of receivers
    subject: 'Hello ', // Subject line
    text: 'Is it really working', // plain text body
    template: 'index' // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(400).send(error);
    } else {
      res.status(200).send(info);
    }
  });
}