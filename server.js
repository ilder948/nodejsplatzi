const express = require('express');
const bodyParser = require('body-parser');

//const router = require('./components/message/network')
const router = require('./network/routes');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(router);

router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('Aplicacion escuhando 3000');