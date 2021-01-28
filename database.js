// Modules
const mysql = require('mysql');

// Database contain multiple parameters (add comment surrounding the code if you will test locally)

const db = mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'b544cbd4569ff0',
    password: 'f05669d5',
    database: 'heroku_25b3344a3871b1e'
});


// Local database (remove comment surrounding the code if used)
/*
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'p@ssword',
    port: '3306',
    database: 'creditcards'
});
*/

// Local optimized database (remove comment surrounding the code if used)
/*
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'p@ssword',
    port: '3306',
    database: 'creditcardv2'
});
*/
module.exports = db;