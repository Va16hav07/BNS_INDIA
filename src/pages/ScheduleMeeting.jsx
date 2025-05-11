import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaUser, FaUsers, FaMapMarkerAlt, FaSave, FaArrowLeft } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
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

  // State to handle the date picker
  const [selectedDate, setSelectedDate] = useState(null);
  
  // Refs for date and time pickers
  const datePickerRef = useRef(null);
  const timeInputRef = useRef(null);

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

  // Handle date change from DatePicker
  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date) {
      const formattedDate = date.toISOString().split('T')[0];
      setFormData(prev => ({
        ...prev,
        date: formattedDate
      }));

      if (errors.date) {
        setErrors(prev => ({
          ...prev,
          date: ''
        }));
      }
    }
  };

  // Open calendar on icon click
  const handleCalendarIconClick = (e) => {
    e.preventDefault();
    datePickerRef.current.setOpen(true);
  };

  // Open time picker on icon click
  const handleTimeIconClick = (e) => {
    e.preventDefault();
    timeInputRef.current.showPicker();
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
      <button 
        className="back-button" 
        onClick={() => navigate('/dashboard')}
        title="Back to Dashboard"
      >
        <FaArrowLeft />
      </button>
      <div className="auth-box" style={{ maxWidth: '800px' }}>
        <div className="auth-header">
          <FaCalendarAlt className="auth-icon" style={{ fontSize: '2rem', color: '#3b82f6' }} />
          <h2>Schedule Meeting</h2>
          <p>Schedule a new meeting with parents or staff</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-grid">
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
              <div className="date-picker-container">
                <DatePicker
                  id="date"
                  selected={selectedDate}
                  onChange={handleDateChange}
                  minDate={new Date()}
                  placeholderText="Select date"
                  dateFormat="MM/dd/yyyy"
                  className={errors.date ? 'error' : ''}
                  ref={datePickerRef}
                />
                <button 
                  type="button" 
                  onClick={handleCalendarIconClick} 
                  className="icon-button"
                >
                  <FaCalendarAlt className="input-icon" />
                </button>
              </div>
              {errors.date && <span className="error-message">{errors.date}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="time">Time</label>
              <div className="time-picker-container">
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={errors.time ? 'error' : ''}
                  ref={timeInputRef}
                />
                <button 
                  type="button" 
                  onClick={handleTimeIconClick}
                  className="icon-button"
                >
                  <FaClock className="input-icon" />
                </button>
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

            <div className="form-group form-grid-full">
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

            <div className="form-group form-grid-full">
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

          <div className="form-actions">
            <button 
              type="button" 
              className="auth-button cancel-button" 
              onClick={() => navigate('/dashboard')}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="auth-button save-button" 
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