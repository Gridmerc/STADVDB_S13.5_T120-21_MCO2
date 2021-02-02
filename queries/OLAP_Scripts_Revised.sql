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

-- pivot table
SELECT 
if(grouping(year),"total duration",year) as year, 
if(grouping(month), "yearly total",month) as month,
round(sum(if (events="cloudy", trip_duration,0)),2) as "cloudy days",
round(sum(if (events="rain or snow", trip_duration,0)),2) as "rain or snow days",
round(sum(if (events="clear", trip_duration,0)),2) as "clear sky days",
round(sum(if (events="tstorms", trip_duration,0)),2) as "thunder storms",
round(sum(if (events="not clear", trip_duration,0)),2) as "unclear days",
round(sum(if (events="unknown", trip_duration,0)),2) as "unknown weather"
FROM trip_infos ti 
join trip_facts tf 
on ti.trip_id=tf.trip_id
group by year, month with rollup
;

-- original simulated cube
SELECT year, month, station_name, round(avg(trip_duration),2)as "average ride duration in minutes"
FROM trip_infos ti 
join trip_facts tf 
on ti.trip_id=tf.trip_id
join stations s
on s.station_id=tf.from_station_id
group by year,month, station_name with rollup

union

SELECT year, month, station_name, round(avg(trip_duration),2)as "average ride duration in minutes"
FROM trip_infos ti 
join trip_facts tf 
on ti.trip_id=tf.trip_id
join stations s
on s.station_id=tf.from_station_id
group by month, station_name, year with rollup

union

SELECT year, month, station_name, round(avg(trip_duration),2)as "average ride duration in minutes"
FROM trip_infos ti 
join trip_facts tf 
on ti.trip_id=tf.trip_id
join stations s
on s.station_id=tf.from_station_id
group by station_name, year,month with rollup

order by year IS NULL, year,
		month IS NULL, month,
        station_name IS NULL, station_name
;