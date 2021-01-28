const db = require('../database');

const fourTableController = {

    getFourTables : function(req, res) {
        var sql1 = "SELECT C.clientID, C.client_name, CI.tot_revolving_bal, C.age FROM	CLIENTS C JOIN	CREDIT_INFOS CI ON	C.clientID = CI.clientID JOIN CARDS CA ";
        var sql2 = "ON	C.card_category_id = CA.card_id JOIN EDUCATION_LEVELS E ON C.education_level_id = E.education_id WHERE	E.education_type = 'Graduate'";
        var sql3 = "AND	CA.card_type = 'Gold' AND C.marital_status = 'Single';";
        var sql = sql1 + " " + sql2 + " "+ sql3;
        db.query(sql,function(err, data, fields){
            if(err) throw err;
            console.log('APP: Entered Seventh Query');
            res.render('unoptimized_7.ejs', {title: 'Four Tables', userData: data});
        });
        
    },

    postFourTable: function(req, res) {
        let card_type = req.body.card;
        let education_type = req.body.education_type;
        let marital_status = req.body.marital_status;
        var sql1 = "SELECT C.clientID, C.client_name, CI.tot_revolving_bal, C.age FROM	CLIENTS C JOIN	CREDIT_INFOS CI ON	C.clientID = CI.clientID JOIN CARDS CA ";
        var sql2 = "ON	C.card_category_id = CA.card_id JOIN EDUCATION_LEVELS E ON C.education_level_id = E.education_id WHERE	E.education_type = " +  "'" + education_type + "'";
        var sql3 = "AND	CA.card_type = " + "'" + card_type + "'" + " AND C.marital_status = "+ "'" +marital_status + "'"+";";
        var sql = sql1 + " " + sql2 + " "+ sql3;
        db.query(sql,function(err, data, fields){
            if(err) throw err;
            console.log('MySQL: Seventh Query Detected');
            res.render('unoptimized_7.ejs', {title: 'Four Tables', userData: data});
        });    
    }
}

module.exports = fourTableController;