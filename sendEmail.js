'use strict';

const nodeMailer = require('nodemailer');

exports.sendMail = function(req,res){
  const transporter = nodeMailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 25,
    secure: false,  //true for 465 port, false for other ports
    auth: {
      user: 'username',
      pass: 'password'
    },
    tls:{
        rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: 'sender@example.com', // sender address
    to: 'recipient@gmail.com', // list of receivers
    subject: 'Hello ', // Subject line
    // text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
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