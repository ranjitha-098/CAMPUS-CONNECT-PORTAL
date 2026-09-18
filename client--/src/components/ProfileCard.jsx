export default function ProfileCard({ profile, isEditing, onEdit, onSave, onChange }) {
  return (
    <section>
      <h3>Student Profile</h3>
      {isEditing ? (
        <form style={styles.form} onSubmit={onSave}>
          {['name', 'department', 'course'].map((field) => (
            <label key={field} style={styles.label}>
              {field[0].toUpperCase() + field.slice(1)}
              <input name={field} value={profile[field]} onChange={onChange} style={styles.input} />
            </label>
          ))}
          <button type="submit" style={styles.button}>Save Profile</button>
        </form>
      ) : (
        <div style={styles.profile}>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Department:</strong> {profile.department}</p>
          <p><strong>Course:</strong> {profile.course}</p>
          <p><strong>Status:</strong> Active Enrolled</p>
          <button type="button" style={styles.button} onClick={onEdit}>Edit Profile</button>
        </div>
      )}
    </section>
  );
}

const styles = {
  profile: { lineHeight: '1.8' },
  form: { display: 'grid', gap: '12px', maxWidth: '520px' },
  label: { display: 'grid', gap: '5px', fontWeight: 'bold' },
  input: { padding: '9px', border: '1px solid #b7c5d4', borderRadius: '4px', font: 'inherit' },
  button: { backgroundColor: '#0A2240', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', whiteSpace: 'nowrap' },
};
