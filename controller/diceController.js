const db = require('../database');

const fourTableController = {

    getDice : function(req, res) {
        let sql = 'SELECT year, month, station_name, round(avg(trip_duration),2)as "average_ride_duration_in_minutes" '+
        "FROM trip_infos ti "+
        "join trip_facts tf "+
        "on ti.trip_id=tf.trip_id "+
        "join stations s "+
        "on s.station_id=tf.from_station_id "+
        'where (events="clear" or events="cloudy") and '+
        '(hour>=6 and hour<=18 ) '+
        'group by year,month, station_name  with rollup ; ';

        db.query(sql,function(err, data, fields){
            if(err) throw err;
            console.log('APP: Dice Query');
            res.render('dice.ejs', {title: 'Dice Query', userData: data});
        });
        
    },

    postDice: function(req, res) {
        let events = req.body.events;
        let events2 = req.body.events2;
        let comparison = req.body.comparison;
        let comparison2 = req.body.comparison2;
        let hours = req.body.hours;
        let hours2 = req.body.hours2;

        var sql = 'SELECT year, month, station_name, round(avg(trip_duration),2)as "average_ride_duration_in_minutes" '+
        "FROM trip_infos ti "+
        "join trip_facts tf "+
        "on ti.trip_id=tf.trip_id "+
        "join stations s "+
        "on s.station_id=tf.from_station_id "+
        'where (events="' + events + '" or events="' + events2 +'") and '+
        '(hour ' + comparison + hours + ' and hour ' + comparison2 + hours2 +') '+
        'group by year,month, station_name  with rollup; ';
        db.query(sql,function(err, data, fields){
            if(err) throw err;
            console.log('MySQL: Dice Query');
            res.render('dice.ejs', {title: 'Dice Query', userData: data});
        });    
    }
}

module.exports = fourTableController;