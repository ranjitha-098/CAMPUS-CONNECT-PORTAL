export default function AttendanceTracker({ attendance, onMarkPresent }) {
  const courses = [
    ['CS3301', 'Full Stack'],
    ['CS3302', 'DBMS'],
  ];

  return (
    <section>
      <h3>Attendance Tracker</h3>
      <div style={styles.grid}>
        {courses.map(([code, name]) => (
          <div key={code} style={styles.card}>
            <h4>{code} - {name}</h4>
            <p style={styles.metric}>{attendance[code]}% Attendance</p>
            <button type="button" style={styles.button} onClick={() => onMarkPresent(code)}>
              Mark Present
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  grid: { display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '15px' },
  card: { border: '1px solid #ddd', padding: '15px', borderRadius: '6px', textAlign: 'center' },
  metric: { fontSize: '18px', fontWeight: 'bold', color: '#0A2240' },
  button: { backgroundColor: '#eef3f8', color: '#0A2240', border: '1px solid #b7c5d4', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer' },
};
