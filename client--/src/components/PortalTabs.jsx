const tabs = [
  ['notices', 'Notices & Events'],
  ['assignments', 'Assignments'],
  ['attendance', 'Track Attendance'],
  ['profile', 'Profile'],
];

export default function PortalTabs({ activeTab, onTabChange }) {
  return (
    <nav style={styles.container} aria-label="Student portal sections">
      {tabs.map(([tab, label]) => (
        <button
          key={tab}
          type="button"
          aria-selected={activeTab === tab}
          style={activeTab === tab ? styles.active : styles.tab}
          onClick={() => onTabChange(tab)}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}

const styles = {
  container: { display: 'flex', backgroundColor: '#e0e0e0', borderBottom: '2px solid #0A2240' },
  tab: { flex: 1, padding: '12px 8px', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold', color: '#333' },
  active: { flex: 1, padding: '12px 8px', border: 'none', backgroundColor: '#fff', color: '#0A2240', fontWeight: 'bold', borderTop: '3px solid #0A2240', cursor: 'pointer' },
};
