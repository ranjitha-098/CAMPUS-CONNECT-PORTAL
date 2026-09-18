import { useState } from 'react';
import AssignmentList from './AssignmentList';
import AttendanceTracker from './AttendanceTracker';
import NoticeList from './NoticeList';
import NoticeModal from './NoticeModal';
import PortalHeader from './PortalHeader';
import PortalTabs from './PortalTabs';
import ProfileCard from './ProfileCard';

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
  const [attendance, setAttendance] = useState({ CS3301: 88, CS3302: 92 });
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

  const saveProfile = (event) => {
    event.preventDefault();
    setIsEditingProfile(false);
  };

  return (
    <div style={styles.container}>
      <PortalHeader onBackToHome={onBackToHome} />
      <PortalTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <main style={styles.contentCard}>
        {activeTab === 'notices' && (
          <NoticeList notices={notices} onViewDetails={setSelectedNotice} />
        )}
        {activeTab === 'assignments' && (
          <AssignmentList
            assignments={assignments}
            statuses={assignmentStatuses}
            onToggleStatus={updateAssignmentStatus}
          />
        )}
        {activeTab === 'attendance' && (
          <AttendanceTracker attendance={attendance} onMarkPresent={markAttendance} />
        )}
        {activeTab === 'profile' && (
          <ProfileCard
            profile={profile}
            isEditing={isEditingProfile}
            onEdit={() => setIsEditingProfile(true)}
            onSave={saveProfile}
            onChange={updateProfile}
          />
        )}
      </main>

      <NoticeModal notice={selectedNotice} onClose={() => setSelectedNotice(null)} />
    </div>
  );
}

const styles = {
  container: { maxWidth: '850px', margin: '30px auto', padding: '0 16px', fontFamily: 'Arial, sans-serif', color: '#172033' },
  contentCard: { backgroundColor: '#fff', padding: '25px', borderRadius: '0 0 8px 8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', textAlign: 'left' },
};
