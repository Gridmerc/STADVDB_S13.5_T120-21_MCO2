-- original cube
SELECT year, month, station_name, round(avg(trip_duration),2)as "average ride duration in minutes"
FROM trip_infos ti 
join trip_facts tf 
on ti.trip_id=tf.trip_id
join stations s
on s.station_id=tf.from_station_id
group by year,month, station_name  with rollup
;

-- drill down on the original cube
SELECT year, month, day as "day of the week", station_name, round(avg(trip_duration),2)as "average ride duration in minutes"
FROM trip_infos ti 
join trip_facts tf 
on ti.trip_id=tf.trip_id
join stations s
on s.station_id=tf.from_station_id
group by year,month, day, station_name  with rollup
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
SELECT year, month, station_name, round(avg(trip_duration),2)as "average ride duration in minutes"
FROM trip_infos ti 
join trip_facts tf 
on ti.trip_id=tf.trip_id
join stations s
on s.station_id=tf.from_station_id
where year=2017
group by year,month, station_name  with rollup
;

-- a dice on the original cube
SELECT year, month, station_name, round(avg(trip_duration),2)as "average ride duration in minutes"
FROM trip_infos ti 
join trip_facts tf 
on ti.trip_id=tf.trip_id
join stations s
on s.station_id=tf.from_station_id
where (year=2017 or year=2018)
and (month=1 or month=11 or month =12)
group by year,month, station_name  with rollup
;

