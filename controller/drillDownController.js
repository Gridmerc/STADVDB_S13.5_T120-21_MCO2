const db = require('../database');

const twoTableController = {
    getDrillDown: function(req, res) {
        let sql = 'SELECT year,week, station_name, round(avg(trip_duration),2)as "average_ride_duration_in_minutes" '+
        "FROM trip_infos ti "+
        "join trip_facts tf "+
        "on ti.trip_id=tf.trip_id "+
        "join stations s "+
        "on s.station_id=tf.from_station_id "+
        "group by year,week, station_name; "; 

        db.query(sql, function(err, data) {
            if(err) throw err;
            console.log('APP: Entered Drill Down Query');
            res.render('drilldown.ejs', {title: 'Drill Down Query', userData: data});
        });
    }

    
}

module.exports = twoTableController;