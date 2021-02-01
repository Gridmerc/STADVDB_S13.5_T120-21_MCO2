-- original cube
SELECT year, month, station_name, round(avg(trip_duration),2)as "average ride duration in minutes"
FROM trip_infos ti 
join trip_facts tf 
on ti.trip_id=tf.trip_id
join stations s
on s.station_id=tf.from_station_id
group by year,month, station_name 
;

-- drill down on the original cube
SELECT year,week, station_name, round(avg(trip_duration),2)as "average ride duration in minutes"
FROM trip_infos ti 
join trip_facts tf 
on ti.trip_id=tf.trip_id
join stations s
on s.station_id=tf.from_station_id
group by year,week, station_name  
;

-- rollup on the original cube
SELECT year, station_name, round(avg(trip_duration),2)as "average ride duration in minutes"
FROM trip_infos ti 
join trip_facts tf 
on ti.trip_id=tf.trip_id
join stations s
on s.station_id=tf.from_station_id
group by year, station_name  with rollup
;

-- a slice on the original cube
SELECT  month, station_name, round(avg(trip_duration),2)as "average ride duration in minutes"
FROM trip_infos ti 
join trip_facts tf 
on ti.trip_id=tf.trip_id
join stations s
on s.station_id=tf.from_station_id
where year=2017
group by month, station_name  with rollup
;

-- a dice on the original cube
SELECT year, month, station_name, round(avg(trip_duration),2)as "average ride duration in minutes"
FROM trip_infos ti 
join trip_facts tf 
on ti.trip_id=tf.trip_id
join stations s
on s.station_id=tf.from_station_id
where (events="clear" or events="cloudy") and
(hour>=6 and hour<=18 )
group by year,month, station_name  with rollup
;
