'use strict';
module.exports = function(app) {
  var MailController = require('./sendEmail');

  // todoList Routes
  app.route('/send/mail')
    .get(MailController.sendMail);

};