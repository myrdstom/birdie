export const COUNT_DISTINCT_QUERY = (id: string) => {
  return `SELECT event_type,COUNT(*) as count FROM events WHERE visit_id = '${id}' GROUP BY event_type ORDER BY count DESC`;
};
