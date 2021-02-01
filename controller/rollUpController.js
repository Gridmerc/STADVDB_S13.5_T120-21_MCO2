const db = require('../database');

const oneTableController = {
    getRollUp: function(req, res) {
        let sql = 'SELECT year, station_name, round(avg(trip_duration),2)as "average_ride_duration_in_minutes" '+
        "FROM trip_infos ti "+ 
        "join trip_facts tf "+
        "on ti.trip_id=tf.trip_id "+
        "join stations s "+
        "on s.station_id=tf.from_station_id "+
        "group by year, station_name  with rollup; ";
        db.query(sql, function(err, data) {
            if(err) throw err;
            console.log('APP: Entered Roll Up Query');
            res.render('rollup.ejs', {title: 'Roll Up Query', userData: data});
        });
    }
}

module.exports = oneTableController;