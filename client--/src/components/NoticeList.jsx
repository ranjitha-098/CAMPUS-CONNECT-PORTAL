export default function NoticeList({ notices, onViewDetails }) {
  return (
    <section>
      <h3>Campus Notices & Events</h3>
      <ul style={styles.list}>
        {notices.map((item) => (
          <li key={item.id} style={styles.item}>
            <div>
              <strong>{item.title}</strong>
              <p style={styles.subText}>{item.dept} | {item.date}</p>
            </div>
            <button type="button" style={styles.button} onClick={() => onViewDetails(item)}>
              View Details
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

const styles = {
  list: { listStyle: 'none', padding: 0, margin: 0 },
  item: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', padding: '12px 0', borderBottom: '1px solid #eee' },
  subText: { margin: '4px 0 0', fontSize: '12px', color: '#666' },
  button: { backgroundColor: '#0A2240', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', whiteSpace: 'nowrap' },
};
