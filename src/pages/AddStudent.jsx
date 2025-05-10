import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserPlus, FaSave, FaTimes, FaUser, FaPhone, FaSchool, FaIdCard } from 'react-icons/fa';
import './Auth.css';

const AddStudent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    parentName: '',
    parentPhone: '',
    emergencyContact: '',
    bloodGroup: '',
    previousSchool: '',
    admissionDate: '',
    class: '',
    section: '',
    rollNumber: '',
    aadharNumber: '',
  });

  const [errors, setErrors] = useState({});
  const [activeSection, setActiveSection] = useState('personal');

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
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    if (!formData.parentName.trim()) newErrors.parentName = 'Parent name is required';
    if (!formData.parentPhone.trim()) newErrors.parentPhone = 'Parent phone is required';
    if (!formData.aadharNumber.trim()) {
      newErrors.aadharNumber = 'Aadhar number is required';
    } else if (!/^\d{12}$/.test(formData.aadharNumber)) {
      newErrors.aadharNumber = 'Aadhar number must be 12 digits';
    }
    if (!formData.class) newErrors.class = 'Class is required';
    if (!formData.section) newErrors.section = 'Section is required';
    if (!formData.rollNumber.trim()) newErrors.rollNumber = 'Roll number is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Student data:', formData);
      alert('Student added successfully!');
      navigate('/dashboard');
    }
  };

  const renderSection = (section) => {
    switch (section) {
      case 'personal':
        return (
          <>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? 'error' : ''}
                placeholder="Enter first name"
              />
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? 'error' : ''}
                placeholder="Enter last name"
              />
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className={errors.dateOfBirth ? 'error' : ''}
              />
              {errors.dateOfBirth && <span className="error-message">{errors.dateOfBirth}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={errors.gender ? 'error' : ''}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <span className="error-message">{errors.gender}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="bloodGroup">Blood Group</label>
              <select
                id="bloodGroup"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </>
        );

      case 'contact':
        return (
          <>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                placeholder="Enter email address"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? 'error' : ''}
                placeholder="Enter phone number"
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>

            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                placeholder="Enter complete address"
              />
            </div>
          </>
        );

      case 'parent':
        return (
          <>
            <div className="form-group">
              <label htmlFor="parentName">Parent/Guardian Name</label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                className={errors.parentName ? 'error' : ''}
                placeholder="Enter parent/guardian name"
              />
              {errors.parentName && <span className="error-message">{errors.parentName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="parentPhone">Parent/Guardian Phone</label>
              <input
                type="tel"
                id="parentPhone"
                name="parentPhone"
                value={formData.parentPhone}
                onChange={handleChange}
                className={errors.parentPhone ? 'error' : ''}
                placeholder="Enter parent/guardian phone"
              />
              {errors.parentPhone && <span className="error-message">{errors.parentPhone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="emergencyContact">Emergency Contact</label>
              <input
                type="tel"
                id="emergencyContact"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
                placeholder="Enter emergency contact"
              />
            </div>
          </>
        );

      case 'academic':
        return (
          <>
            <div className="form-group">
              <label htmlFor="previousSchool">Previous School</label>
              <input
                type="text"
                id="previousSchool"
                name="previousSchool"
                value={formData.previousSchool}
                onChange={handleChange}
                placeholder="Enter previous school name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="admissionDate">Admission Date</label>
              <input
                type="date"
                id="admissionDate"
                name="admissionDate"
                value={formData.admissionDate}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="class">Class</label>
              <select
                id="class"
                name="class"
                value={formData.class}
                onChange={handleChange}
                className={errors.class ? 'error' : ''}
              >
                <option value="">Select Class</option>
                {[...Array(12)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>Class {i + 1}</option>
                ))}
              </select>
              {errors.class && <span className="error-message">{errors.class}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="section">Section</label>
              <select
                id="section"
                name="section"
                value={formData.section}
                onChange={handleChange}
                className={errors.section ? 'error' : ''}
              >
                <option value="">Select Section</option>
                <option value="A">Section A</option>
                <option value="B">Section B</option>
                <option value="C">Section C</option>
                <option value="D">Section D</option>
              </select>
              {errors.section && <span className="error-message">{errors.section}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="rollNumber">Roll Number</label>
              <input
                type="text"
                id="rollNumber"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleChange}
                className={errors.rollNumber ? 'error' : ''}
                placeholder="Enter roll number"
              />
              {errors.rollNumber && <span className="error-message">{errors.rollNumber}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="aadharNumber">Aadhar Number</label>
              <input
                type="text"
                id="aadharNumber"
                name="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleChange}
                className={errors.aadharNumber ? 'error' : ''}
                maxLength="12"
                placeholder="Enter Aadhar number"
              />
              {errors.aadharNumber && <span className="error-message">{errors.aadharNumber}</span>}
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box" style={{ maxWidth: '800px' }}>
        <div className="auth-header">
          <FaUserPlus className="auth-icon" style={{ fontSize: '2rem', color: '#3b82f6' }} />
          <h2>Add New Student</h2>
          <p>Fill in the student details below</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-sections" style={{ 
            display: 'flex', 
            gap: '1rem', 
            marginBottom: '2rem',
            borderBottom: '1px solid #e5e7eb',
            paddingBottom: '1rem'
          }}>
            <button
              type="button"
              className={`section-button ${activeSection === 'personal' ? 'active' : ''}`}
              onClick={() => setActiveSection('personal')}
            >
              <FaUser /> Personal
            </button>
            <button
              type="button"
              className={`section-button ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveSection('contact')}
            >
              <FaPhone /> Contact
            </button>
            <button
              type="button"
              className={`section-button ${activeSection === 'parent' ? 'active' : ''}`}
              onClick={() => setActiveSection('parent')}
            >
              <FaUser /> Parent
            </button>
            <button
              type="button"
              className={`section-button ${activeSection === 'academic' ? 'active' : ''}`}
              onClick={() => setActiveSection('academic')}
            >
              <FaSchool /> Academic
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {renderSection(activeSection)}
          </div>

          <div className="form-actions" style={{ 
            display: 'flex', 
            gap: '1rem', 
            marginTop: '2rem',
            justifyContent: 'flex-end'
          }}>
            <button type="button" className="auth-button" onClick={() => navigate('/dashboard')}>
              <FaTimes /> Cancel
            </button>
            <button type="submit" className="auth-button" style={{ backgroundColor: '#10b981' }}>
              <FaSave /> Save Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent; 