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

SELECT 
if(grouping(year),"total duration",year) as year, 
if(grouping(month), "yearly total",month) as month,
if(grouping(day), "monthly total",day) as "day of the week",
round(sum(if (events="cloudy", trip_duration,0)),2) as "cloudy days",
round(sum(if (events="rain or snow", trip_duration,0)),2) as "rain or snow days",
round(sum(if (events="clear", trip_duration,0)),2) as "clear sky days",
round(sum(if (events="tstorms", trip_duration,0)),2) as "thunder storms",
round(sum(if (events="not clear", trip_duration,0)),2) as "unclear days",
round(sum(if (events="unknown", trip_duration,0)),2) as "unknown weather"
FROM trip_infos ti 
join trip_facts tf 
on ti.trip_id=tf.trip_id
group by year, month, day with rollup
;

SELECT 
if(grouping(year),"total duration",year) as year, 
if(grouping(month), "yearly total",month) as month,
if(grouping(day), "monthly total",day) as "day of the week",
round(sum(if (events="cloudy", trip_duration,0)),2) as "cloudy days",
round(sum(if (events="rain or snow", trip_duration,0)),2) as "rain or snow days",
round(sum(if (events="clear", trip_duration,0)),2) as "clear sky days",
round(sum(if (events="tstorms", trip_duration,0)),2) as "thunder storms",
round(sum(if (events="not clear", trip_duration,0)),2) as "unclear days",
round(sum(if (events="unknown", trip_duration,0)),2) as "unknown weather"
FROM trip_infos ti 
join trip_facts tf 
on ti.trip_id=tf.trip_id
where year="2014"
group by year, month, day with rollup
;

SELECT 

if(grouping(year),"total duration",year) as year, 
if(grouping(month), "yearly total",month) as month,
if(grouping(day), "monthly total",day) as "day of the week",
round(sum(if (events="cloudy", trip_duration,0)),2) as "cloudy days",
round(sum(if (events="rain or snow", trip_duration,0)),2) as "rain or snow days",
round(sum(if (events="clear", trip_duration,0)),2) as "clear sky days",
round(sum(if (events="tstorms", trip_duration,0)),2) as "thunder storms",
round(sum(if (events="not clear", trip_duration,0)),2) as "unclear days",
round(sum(if (events="unknown", trip_duration,0)),2) as "unknown weather"
FROM trip_infos ti 
join trip_facts tf 
on ti.trip_id=tf.trip_id
where year="2014" 
or year="2015"
group by year, month, day with rollup
;
