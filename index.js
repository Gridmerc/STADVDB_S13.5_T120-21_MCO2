// Modules
const express = require('express');
const handlebars = require('handlebars');
const path = require('path');
const bodyparser = require('body-parser');
const ejs = require('ejs');
const hbs = require('express-handlebars').create({
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
});

const port = process.env.PORT || 5000;
const app = express();
const PublicRoutes = require('./routes/PublicRoutes');

const db = require('./database');

db.connect(function(err) {
    if(err) throw err;
    console.log('MySQL: Connected');
});

// API Endpoint Data Handling
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true}));

// View Engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('view engine', 'ejs');

// Access static files
app.use(express.static(path.join(__dirname,'public')));

app.use('/', PublicRoutes);
app.listen(port, function() {
    console.log('APP: Running at Port ' + port);
});