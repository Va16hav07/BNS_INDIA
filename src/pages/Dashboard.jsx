import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaUsers, 
  FaBook, 
  FaChalkboardTeacher, 
  FaCalendarAlt, 
  FaPlus, 
  FaFileAlt, 
  FaBell, 
  FaVideo, 
  FaClock, 
  FaMapMarkerAlt,
  FaHandshake,
  FaChartLine,
  FaUserGraduate,
  FaClipboardList,
  FaComments,
  FaTasks,
  FaUserFriends,
  FaBuilding
} from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    // Load meetings from localStorage
    const savedMeetings = JSON.parse(localStorage.getItem('meetings') || '[]');
    setMeetings(savedMeetings);
  }, []);

  // Mock data for demonstration
  const stats = [
    {
      title: 'Total Students',
      value: '1,234',
      trend: '+12%',
      isPositive: true,
      icon: <FaUsers />
    },
    {
      title: 'Active Courses',
      value: '45',
      trend: '+5%',
      isPositive: true,
      icon: <FaBook />
    },
    {
      title: 'Teachers',
      value: '89',
      trend: '+3%',
      isPositive: true,
      icon: <FaChalkboardTeacher />
    },
    {
      title: 'Upcoming Events',
      value: '12',
      trend: '-2%',
      isPositive: false,
      icon: <FaCalendarAlt />
    }
  ];

  const recentActivities = [
    {
      id: 1,
      title: 'New Student Registration',
      description: 'John Doe joined Class 10A',
      time: '2 hours ago',
      icon: <FaClipboardList />
    },
    {
      id: 2,
      title: 'Course Update',
      description: 'Mathematics syllabus updated',
      time: '4 hours ago',
      icon: <FaBook />
    },
    {
      id: 3,
      title: 'Teacher Assignment',
      description: 'Mrs. Smith assigned to Class 8B',
      time: '1 day ago',
      icon: <FaComments />
    }
  ];

  const quickActions = [
    {
      title: 'Add New Student',
      icon: <FaPlus />,
      onClick: () => navigate('/add-student'),
      color: '#2b6cb0'
    },
    {
      title: 'View Students',
      icon: <FaUsers />,
      onClick: () => navigate('/students'),
      color: '#38a169'
    },
    {
      title: 'Schedule Meeting',
      icon: <FaCalendarAlt />,
      onClick: () => navigate('/schedule-meeting'),
      color: '#d69e2e'
    },
    {
      title: 'View Reports',
      icon: <FaFileAlt />,
      onClick: () => navigate('/reports'),
      color: '#805ad5'
    }
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>School Dashboard</h1>
        <p>Welcome back! Here's what's happening at your school.</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3>{stat.title}</h3>
            <div className="value">{stat.value}</div>
            <div className={`trend ${stat.isPositive ? 'positive' : 'negative'}`}>
              {stat.icon}
              <span>{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        {quickActions.map((action, index) => (
          <button
            key={index}
            className="action-card"
            onClick={action.onClick}
            style={{ '--action-color': action.color }}
          >
            <div className="action-icon">{action.icon}</div>
            <span>{action.title}</span>
          </button>
        ))}
      </div>

      {/* BNS Meetings and Recent Activity Side by Side */}
      <div className="dashboard-grid">
        {/* BNS Department Meetings */}
        <div className="meeting-section">
          <div className="section-header">
            <FaTasks className="section-icon" />
            <h2>BNS Department Meetings</h2>
            <div className="meeting-actions">
              <select 
                className="meeting-filter"
                onChange={(e) => {
                  const filtered = JSON.parse(localStorage.getItem('meetings') || '[]')
                    .filter(m => e.target.value === 'all' || m.type === e.target.value);
                  setMeetings(filtered);
                }}
              >
                <option value="all">All Meetings</option>
                <option value="parent">Parent Meetings</option>
                <option value="staff">Staff Meetings</option>
                <option value="committee">Committee Meetings</option>
                <option value="other">Other</option>
              </select>
              <button 
                className="add-meeting-btn"
                onClick={() => navigate('/schedule-meeting')}
              >
                <FaPlus /> Schedule New Meeting
              </button>
            </div>
          </div>
          <div className="meeting-list">
            {meetings.length > 0 ? (
              meetings.map((meeting) => (
                <div key={meeting.id} className={`meeting-item ${meeting.status}`}>
                  <div className="meeting-icon">
                    {meeting.type === 'parent' ? <FaUserFriends /> :
                     meeting.type === 'staff' ? <FaChalkboardTeacher /> :
                     meeting.type === 'committee' ? <FaBuilding /> :
                     <FaUsers />}
                  </div>
                  <div className="meeting-details">
                    <h4>{meeting.title}</h4>
                    <p>{meeting.description}</p>
                    <div className="meeting-meta">
                      <span>
                        <FaCalendarAlt />
                        {new Date(meeting.date).toLocaleDateString()}
                      </span>
                      <span>
                        <FaClock />
                        {meeting.time}
                      </span>
                      <span>
                        <FaMapMarkerAlt />
                        {meeting.location}
                      </span>
                      <span>
                        <FaUsers />
                        {meeting.participants}
                      </span>
                    </div>
                  </div>
                  <div className="meeting-actions">
                    <div className={`meeting-status ${meeting.status}`}>
                      {meeting.status.charAt(0).toUpperCase() + meeting.status.slice(1)}
                    </div>
                    <button 
                      className="meeting-action-btn"
                      onClick={() => {
                        const updatedMeetings = meetings.map(m => 
                          m.id === meeting.id 
                            ? {...m, status: m.status === 'upcoming' ? 'completed' : 'upcoming'}
                            : m
                        );
                        setMeetings(updatedMeetings);
                        localStorage.setItem('meetings', JSON.stringify(updatedMeetings));
                      }}
                    >
                      {meeting.status === 'upcoming' ? 'Mark Complete' : 'Mark Upcoming'}
                    </button>
                    <button 
                      className="meeting-action-btn delete"
                      onClick={() => {
                        if (window.confirm('Are you sure you want to delete this meeting?')) {
                          const updatedMeetings = meetings.filter(m => m.id !== meeting.id);
                          setMeetings(updatedMeetings);
                          localStorage.setItem('meetings', JSON.stringify(updatedMeetings));
                        }
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-meetings">
                <p>No meetings scheduled yet.</p>
                <button 
                  className="add-meeting-btn"
                  onClick={() => navigate('/schedule-meeting')}
                >
                  <FaPlus /> Schedule Your First Meeting
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="recent-activity">
          <div className="section-header">
            <FaChartLine className="section-icon" />
            <h2>Recent Activity</h2>
          </div>
          <div className="activity-list">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className="activity-icon">
                  {activity.icon}
                </div>
                <div className="activity-details">
                  <h4>{activity.title}</h4>
                  <p>{activity.description}</p>
                </div>
                <div className="activity-time">
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 