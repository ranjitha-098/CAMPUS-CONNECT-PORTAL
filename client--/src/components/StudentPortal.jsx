import { useState } from 'react';

const notices = [
  { id: 1, title: 'Mid-Term Exam Schedule Released', date: 'Sept 10, 2026', dept: 'SOCSE' },
  { id: 2, title: 'Hackathon Registration Open', date: 'Sept 15, 2026', dept: 'RVU Tech Club' },
];

const assignments = [
  { id: 1, subject: 'CS3301 - Full Stack', title: 'Lab Assignment 2: React State Management', status: 'Pending', dueDate: 'Sept 12, 2026' },
  { id: 2, subject: 'CS3302 - DBMS', title: 'ER Diagram Project Report', status: 'Submitted', dueDate: 'Sept 01, 2026' },
];

export default function StudentPortal({ onBackToHome }) {
  const [activeTab, setActiveTab] = useState('notices');
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [assignmentStatuses, setAssignmentStatuses] = useState(() => (
    Object.fromEntries(assignments.map((item) => [item.id, item.status]))
  ));
  const [attendance, setAttendance] = useState({ 'CS3301': 88, 'CS3302': 92 });
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profile, setProfile] = useState({
    name: 'RVU Student',
    department: 'School of Computer Science & Engineering (SOCSE)',
    course: 'CS3301 - Full Stack Development',
  });

  const updateAssignmentStatus = (id) => {
    setAssignmentStatuses((current) => ({
      ...current,
      [id]: current[id] === 'Submitted' ? 'Pending' : 'Submitted',
    }));
  };

  const markAttendance = (courseCode) => {
    setAttendance((current) => ({
      ...current,
      [courseCode]: Math.min(current[courseCode] + 1, 100),
    }));
  };

  const updateProfile = (event) => {
    const { name, value } = event.target;
    setProfile((current) => ({ ...current, [name]: value }));
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div>
          <h2 style={styles.headerTitle}>Student Portal</h2>
          <span style={styles.welcome}>Welcome, RVU Student</span>
        </div>
        <button onClick={onBackToHome} style={styles.backBtn} type="button">
          Back to Main Campus View
        </button>
      </header>

      <nav style={styles.tabContainer} aria-label="Student portal sections">
        {[
          ['notices', 'Notices & Events'],
          ['assignments', 'Assignments'],
          ['attendance', 'Track Attendance'],
          ['profile', 'Profile'],
        ].map(([tab, label]) => (
          <button
            key={tab}
            type="button"
            aria-selected={activeTab === tab}
            style={activeTab === tab ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab(tab)}
          >
            {label}
          </button>
        ))}
      </nav>

      <main style={styles.contentCard}>
        {activeTab === 'notices' && (
          <section>
            <h3>Campus Notices & Events</h3>
            <ul style={styles.list}>
              {notices.map((item) => (
                <li key={item.id} style={styles.listItem}>
                  <div>
                    <strong>{item.title}</strong>
                    <p style={styles.subText}>{item.dept} | {item.date}</p>
                  </div>
                  <button type="button" style={styles.actionBtn} onClick={() => setSelectedNotice(item)}>
                    View Details
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}

        {activeTab === 'assignments' && (
          <section>
            <h3>Assignments & Submissions</h3>
            <ul style={styles.list}>
              {assignments.map((item) => (
                <li key={item.id} style={styles.listItem}>
                  <div>
                    <strong>{item.title}</strong>
                    <p style={styles.subText}>{item.subject} | Due: {item.dueDate}</p>
                  </div>
                  <button
                    type="button"
                    style={assignmentStatuses[item.id] === 'Submitted' ? styles.badgeSuccess : styles.badgePending}
                    onClick={() => updateAssignmentStatus(item.id)}
                    title="Click to change assignment status"
                  >
                    {assignmentStatuses[item.id]}
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}

        {activeTab === 'attendance' && (
          <section>
            <h3>Attendance Tracker</h3>
            <div style={styles.grid}>
              <div style={styles.metricCard}>
                <h4>CS3301 - Full Stack</h4>
                <p style={styles.metricText}>{attendance.CS3301}% Attendance</p>
                <button type="button" style={styles.secondaryBtn} onClick={() => markAttendance('CS3301')}>Mark Present</button>
              </div>
              <div style={styles.metricCard}>
                <h4>CS3302 - DBMS</h4>
                <p style={styles.metricText}>{attendance.CS3302}% Attendance</p>
                <button type="button" style={styles.secondaryBtn} onClick={() => markAttendance('CS3302')}>Mark Present</button>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'profile' && (
          <section>
            <h3>Student Profile</h3>
            {isEditingProfile ? (
              <form style={styles.profileForm} onSubmit={(event) => { event.preventDefault(); setIsEditingProfile(false); }}>
                {['name', 'department', 'course'].map((field) => (
                  <label key={field} style={styles.fieldLabel}>
                    {field[0].toUpperCase() + field.slice(1)}
                    <input name={field} value={profile[field]} onChange={updateProfile} style={styles.input} />
                  </label>
                ))}
                <button type="submit" style={styles.actionBtn}>Save Profile</button>
              </form>
            ) : (
              <div style={styles.profile}>
                <p><strong>Name:</strong> {profile.name}</p>
                <p><strong>Department:</strong> {profile.department}</p>
                <p><strong>Course:</strong> {profile.course}</p>
                <p><strong>Status:</strong> Active Enrolled</p>
                <button type="button" style={styles.actionBtn} onClick={() => setIsEditingProfile(true)}>Edit Profile</button>
              </div>
            )}
          </section>
        )}
      </main>

      {selectedNotice && (
        <div style={styles.modalBackdrop} role="presentation" onClick={() => setSelectedNotice(null)}>
          <div style={styles.modal} role="dialog" aria-modal="true" aria-labelledby="notice-title" onClick={(event) => event.stopPropagation()}>
            <h3 id="notice-title">{selectedNotice.title}</h3>
            <p style={styles.subText}>{selectedNotice.dept} | {selectedNotice.date}</p>
            <p style={styles.modalText}>More information about this campus announcement will be shared through the student communication channels.</p>
            <button type="button" style={styles.actionBtn} onClick={() => setSelectedNotice(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { maxWidth: '850px', margin: '30px auto', padding: '0 16px', fontFamily: 'Arial, sans-serif', color: '#172033' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', backgroundColor: '#0A2240', padding: '15px 20px', borderRadius: '8px 8px 0 0', color: '#fff' },
  headerTitle: { margin: 0, color: '#F2A900' },
  welcome: { fontSize: '13px', color: '#e0e0e0' },
  backBtn: { backgroundColor: '#F2A900', border: 'none', padding: '8px 14px', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer', color: '#0A2240' },
  tabContainer: { display: 'flex', backgroundColor: '#e0e0e0', borderBottom: '2px solid #0A2240' },
  tab: { flex: 1, padding: '12px 8px', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold', color: '#333' },
  activeTab: { flex: 1, padding: '12px 8px', border: 'none', backgroundColor: '#fff', color: '#0A2240', fontWeight: 'bold', borderTop: '3px solid #0A2240', cursor: 'pointer' },
  contentCard: { backgroundColor: '#fff', padding: '25px', borderRadius: '0 0 8px 8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', textAlign: 'left' },
  list: { listStyle: 'none', padding: 0, margin: 0 },
  listItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', padding: '12px 0', borderBottom: '1px solid #eee' },
  subText: { margin: '4px 0 0', fontSize: '12px', color: '#666' },
  actionBtn: { backgroundColor: '#0A2240', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', whiteSpace: 'nowrap' },
  badgeSuccess: { backgroundColor: '#28a745', color: '#fff', border: 'none', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', whiteSpace: 'nowrap', cursor: 'pointer' },
  badgePending: { backgroundColor: '#ffc107', color: '#000', border: 'none', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', whiteSpace: 'nowrap', cursor: 'pointer' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '15px' },
  metricCard: { border: '1px solid #ddd', padding: '15px', borderRadius: '6px', textAlign: 'center' },
  metricText: { fontSize: '18px', fontWeight: 'bold', color: '#0A2240' },
  profile: { lineHeight: '1.8' },
  secondaryBtn: { backgroundColor: '#eef3f8', color: '#0A2240', border: '1px solid #b7c5d4', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer' },
  profileForm: { display: 'grid', gap: '12px', maxWidth: '520px' },
  fieldLabel: { display: 'grid', gap: '5px', fontWeight: 'bold' },
  input: { padding: '9px', border: '1px solid #b7c5d4', borderRadius: '4px', font: 'inherit' },
  modalBackdrop: { position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', backgroundColor: 'rgba(10, 34, 64, 0.55)', zIndex: 10 },
  modal: { maxWidth: '420px', width: '100%', padding: '24px', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 8px 30px rgba(0,0,0,0.25)' },
  modalText: { margin: '18px 0', lineHeight: '1.6' },
};