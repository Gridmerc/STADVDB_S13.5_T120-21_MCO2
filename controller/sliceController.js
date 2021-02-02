const db = require('../database');

const threeTableController = {

    getSlice : function(req, res) {
        let sql ='SELECT month, station_name, round(avg(trip_duration),2)as "average_ride_duration_in_minutes" '+
        'FROM trip_infos ti '+
        'join trip_facts tf '+
        'on ti.trip_id=tf.trip_id '+
        'join stations s '+
        "on s.station_id=tf.from_station_id "+
        "where year=2017 "+
        "group by month, station_name  with rollup; ";
        
        db.query(sql,function(err, data, fields){
            if(err) throw err;
            console.log('APP: Entered Slice Query');
            res.render('slice.ejs', {title: 'Slice Query', userData: data});
        });
    },

    postSlice:  function(req, res) {
        let year = req.body.year; 
        let sql ='SELECT month, station_name, round(avg(trip_duration),2)as "average_ride_duration_in_minutes" '+
        'FROM trip_infos ti '+
        'join trip_facts tf '+
        'on ti.trip_id=tf.trip_id '+
        'join stations s '+
        "on s.station_id=tf.from_station_id "+
        "where year="+ year + " "+
        "group by month, station_name  with rollup; ";
        
        db.query(sql,function(err, data, fields){
            if(err) throw err;
            console.log('APP: Entered Slice Query');
            res.render('slice.ejs', {title: 'Slice Query', userData: data});
        });
    }

    
}

module.exports = threeTableController;