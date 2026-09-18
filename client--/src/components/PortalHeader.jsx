export default function PortalHeader({ onBackToHome }) {
  return (
    <header style={styles.header}>
      <div>
        <h2 style={styles.title}>Student Portal</h2>
        <span style={styles.welcome}>Welcome, RVU Student</span>
      </div>
      <button onClick={onBackToHome} style={styles.button} type="button">
        Back to Main Campus View
      </button>
    </header>
  );
}

const styles = {
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', backgroundColor: '#0A2240', padding: '15px 20px', borderRadius: '8px 8px 0 0', color: '#fff' },
  title: { margin: 0, color: '#F2A900' },
  welcome: { fontSize: '13px', color: '#e0e0e0' },
  button: { backgroundColor: '#F2A900', border: 'none', padding: '8px 14px', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer', color: '#0A2240' },
};
