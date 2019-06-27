'use strict';

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3030,
    userRoutes = require('./route');


userRoutes(app);

app.get('/', function (req, res) {
    res.send('RESTful API server started on: ' + port)
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    console.info('>>> 🌎 Open http://localhost:%s/ in your browser.', port);
});


// var express = require('express');
// var app = express();

// //Sending email here
// var mail = require('./nodeMailerWithTemp');
// mail.sendPasswordReset('nowjdeji@gmail.com', 'Me hehehe','Nowj','http://yourdomain.com/some-password-links');

// app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(express.static(path.join(__dirname, 'public')));


