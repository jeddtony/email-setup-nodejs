'use strict';
module.exports = function(app) {
  var MailController = require('./sendEmail');
  var SecondController = require('./secondEmail');

  // todoList Routes
  app.route('/send/mail')
    .get(MailController.sendMail);

  app.route('/send/secondMail').get(SecondController.sendMail);

};