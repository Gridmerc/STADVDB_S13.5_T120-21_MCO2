const db = require('../database');

const twoTableController = {
    getTwoTableOne: function(req, res) {
        let sql = 'SELECT clientID, client_name ' +
                  'FROM CLIENTS C JOIN CARDS CA ' +
                  'ON C.card_category_id = CA.card_id ' +
                  'WHERE CA.card_type = "Platinum";';
        db.query(sql, function(err, data) {
            if(err) throw err;
            console.log('APP: Entered Third Query');
            res.render('unoptimized_3.ejs', {title: 'Two Tables - First Query', userData: data});
        });
    },

    getTwoTableTwo: function(req, res) {
        let sql = 'SELECT COUNT(C.clientID) AS "Count", E.education_type AS "Eductype" ' +
                  'FROM CLIENTS C JOIN EDUCATION_LEVELS E ON C.education_level_id = E.education_id ' +
                  'WHERE age < 30 ' +
                  'GROUP BY E.education_type;';
        db.query(sql, function(err, data) {
            if(err) throw err;
            console.log('APP: Entered Fourth Query');
            res.render('unoptimized_4.ejs', {title: 'Two Tables - Second Query', userData: data});
        });
    },

    postTwoTableOne: function(req, res) {
        let card = req.body.card;
        let sql = 'SELECT C.clientID, C.client_name ' +
                  'FROM CLIENTS C JOIN CARDS CA ' +
                  'ON C.card_category_id = CA.card_id ' +
                  'WHERE CA.card_type = ' + '"' + card + '"' + ';';
        db.query(sql, function(err, data) {
            if(err) throw err;
            console.log('MySQL: Third Query Detected');
            res.render('unoptimized_3.ejs', {title: 'Two Tables - First Query', userData: data});
        });
    },

    postTwoTableTwo: function(req, res) {
        let age = req.body.age;
        let comparison = req.body.comparison;
        let sql = "SELECT COUNT(C.clientID) AS 'Count', E.education_type AS 'Eductype' " +
                  'FROM CLIENTS C JOIN EDUCATION_LEVELS E ON C.education_level_id = E.education_id ' +
                  'WHERE age ' + comparison + ' ' +  age + ' ' +
                  'GROUP BY E.education_type;';
        db.query(sql, function(err, data) {
            if(err) throw err;
            console.log('MySQL: Fourth Query Detected');
            res.render('unoptimized_4.ejs', {title: 'Two Tables - Second Query', userData: data});
        });
    }
}

module.exports = twoTableController;