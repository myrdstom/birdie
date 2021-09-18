export const COUNT_DISTINCT_QUERY =
  "SELECT event_type,COUNT(*) as count FROM events WHERE visit_id = '5cd60270-8b66-f8a8-4e4a-591e21019c57' GROUP BY event_type ORDER BY count DESC";

//    "SELECT * from events WHERE id = '006139b8-a387-4529-9280-2d798c500aeb'",

// SELECT COUNT(DISTINCT event_type) from events LIMIT 100

// SELECT name,COUNT(*) as count FROM tablename GROUP BY name ORDER BY count DESC;
export const GET_TOP_20 = "SELECT * from events LIMIT 20";
