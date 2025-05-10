import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaUser, FaUsers, FaMapMarkerAlt, FaSave } from 'react-icons/fa';
import './Auth.css';

const ScheduleMeeting = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    duration: '60',
    type: 'parent',
    participants: '',
    location: '',
    description: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.type) newErrors.type = 'Meeting type is required';
    if (!formData.participants.trim()) newErrors.participants = 'Participants are required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';

    // Validate date is not in the past
    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      newErrors.date = 'Meeting date cannot be in the past';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // Here you would typically make an API call to save the meeting
        console.log('Meeting data:', formData);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Get existing meetings from localStorage
        const existingMeetings = JSON.parse(localStorage.getItem('meetings') || '[]');
        
        // Add new meeting
        const newMeeting = {
          id: Date.now(), // Generate unique ID
          ...formData,
          status: 'upcoming',
          createdAt: new Date().toISOString()
        };
        
        // Save updated meetings list
        localStorage.setItem('meetings', JSON.stringify([...existingMeetings, newMeeting]));
        
        alert('Meeting scheduled successfully!');
        navigate('/dashboard');
      } catch (error) {
        console.error('Error scheduling meeting:', error);
        alert('Failed to schedule meeting. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box" style={{ maxWidth: '800px' }}>
        <div className="auth-header">
          <FaCalendarAlt className="auth-icon" style={{ fontSize: '2rem', color: '#3b82f6' }} />
          <h2>Schedule Meeting</h2>
          <p>Schedule a new meeting with parents or staff</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            <div className="form-group">
              <label htmlFor="title">Meeting Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={errors.title ? 'error' : ''}
                placeholder="Enter meeting title"
              />
              {errors.title && <span className="error-message">{errors.title}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="type">Meeting Type</label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className={errors.type ? 'error' : ''}
              >
                <option value="parent">Parent Meeting</option>
                <option value="staff">Staff Meeting</option>
                <option value="committee">Committee Meeting</option>
                <option value="other">Other</option>
              </select>
              {errors.type && <span className="error-message">{errors.type}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="date">Date</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={errors.date ? 'error' : ''}
                  min={new Date().toISOString().split('T')[0]}
                />
                <FaCalendarAlt style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#6b7280'
                }} />
              </div>
              {errors.date && <span className="error-message">{errors.date}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="time">Time</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={errors.time ? 'error' : ''}
                />
                <FaClock style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#6b7280'
                }} />
              </div>
              {errors.time && <span className="error-message">{errors.time}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="duration">Duration (minutes)</label>
              <select
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
              >
                <option value="30">30 minutes</option>
                <option value="60">1 hour</option>
                <option value="90">1.5 hours</option>
                <option value="120">2 hours</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="location">Location</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className={errors.location ? 'error' : ''}
                  placeholder="Enter meeting location"
                />
                <FaMapMarkerAlt style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#6b7280'
                }} />
              </div>
              {errors.location && <span className="error-message">{errors.location}</span>}
            </div>

            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label htmlFor="participants">Participants</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  id="participants"
                  name="participants"
                  value={formData.participants}
                  onChange={handleChange}
                  className={errors.participants ? 'error' : ''}
                  placeholder="Enter participant names or IDs"
                />
                <FaUsers style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#6b7280'
                }} />
              </div>
              {errors.participants && <span className="error-message">{errors.participants}</span>}
            </div>

            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                placeholder="Enter meeting description or agenda"
              />
            </div>
          </div>

          <div className="form-actions" style={{ 
            display: 'flex', 
            gap: '1rem', 
            marginTop: '2rem',
            justifyContent: 'flex-end'
          }}>
            <button 
              type="button" 
              className="auth-button" 
              onClick={() => navigate('/dashboard')}
              style={{ backgroundColor: '#6b7280' }}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="auth-button" 
              style={{ backgroundColor: '#10b981' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Scheduling...' : <><FaSave /> Schedule Meeting</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleMeeting; 