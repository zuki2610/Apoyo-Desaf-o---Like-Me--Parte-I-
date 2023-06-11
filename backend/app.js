const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes');

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/posts', routes);

module.exports = app;