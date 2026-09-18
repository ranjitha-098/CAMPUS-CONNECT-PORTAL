export default function NoticeModal({ notice, onClose }) {
  if (!notice) return null;

  return (
    <div style={styles.backdrop} role="presentation" onClick={onClose}>
      <div style={styles.modal} role="dialog" aria-modal="true" aria-labelledby="notice-title" onClick={(event) => event.stopPropagation()}>
        <h3 id="notice-title">{notice.title}</h3>
        <p style={styles.subText}>{notice.dept} | {notice.date}</p>
        <p style={styles.text}>More information about this campus announcement will be shared through the student communication channels.</p>
        <button type="button" style={styles.button} onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

const styles = {
  backdrop: { position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', backgroundColor: 'rgba(10, 34, 64, 0.55)', zIndex: 10 },
  modal: { maxWidth: '420px', width: '100%', padding: '24px', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 8px 30px rgba(0,0,0,0.25)' },
  subText: { margin: '4px 0 0', fontSize: '12px', color: '#666' },
  text: { margin: '18px 0', lineHeight: '1.6' },
  button: { backgroundColor: '#0A2240', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' },
};
