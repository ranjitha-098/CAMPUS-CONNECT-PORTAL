export default function AssignmentList({ assignments, statuses, onToggleStatus }) {
  return (
    <section>
      <h3>Assignments & Submissions</h3>
      <ul style={styles.list}>
        {assignments.map((item) => {
          const status = statuses[item.id];
          return (
            <li key={item.id} style={styles.item}>
              <div>
                <strong>{item.title}</strong>
                <p style={styles.subText}>{item.subject} | Due: {item.dueDate}</p>
              </div>
              <button
                type="button"
                style={status === 'Submitted' ? styles.submitted : styles.pending}
                onClick={() => onToggleStatus(item.id)}
                title="Click to change assignment status"
              >
                {status}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

const styles = {
  list: { listStyle: 'none', padding: 0, margin: 0 },
  item: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', padding: '12px 0', borderBottom: '1px solid #eee' },
  subText: { margin: '4px 0 0', fontSize: '12px', color: '#666' },
  submitted: { backgroundColor: '#28a745', color: '#fff', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' },
  pending: { backgroundColor: '#ffc107', color: '#000', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' },
};
