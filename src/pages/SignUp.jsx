import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    schoolName: '',
    schoolCode: '',
    schoolType: '',
    schoolBoard: '',
    establishmentYear: '',
    principalName: '',
    principalEmail: '',
    principalPhone: '',
    adminEmail: '',
    adminPhone: '',
    totalStudents: '',
    totalTeachers: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    website: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const schoolTypes = [
    'Primary School',
    'Middle School',
    'High School',
    'Higher Secondary School',
    'Composite School'
  ];

  const schoolBoards = [
    'CBSE',
    'ICSE',
    'State Board',
    'IB',
    'IGCSE',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.schoolName || !formData.schoolCode || !formData.schoolType || 
        !formData.schoolBoard || !formData.principalName || !formData.principalEmail || 
        !formData.principalPhone || !formData.adminEmail || !formData.password || 
        !formData.confirmPassword) {
      setError('All required fields must be filled');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.principalEmail) || !/\S+@\S+\.\S+/.test(formData.adminEmail)) {
      setError('Please enter valid email addresses');
      return;
    }

    if (!/^\d{10}$/.test(formData.principalPhone) || !/^\d{10}$/.test(formData.adminPhone)) {
      setError('Please enter valid 10-digit phone numbers');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      setIsLoading(true);
      
      // API call to register user
      const response = await axios.post('http://localhost:5000/api/users/register', formData);
      
      if (response.data) {
        // Show success message
        alert('Registration successful! Please login with your credentials.');
        navigate('/login');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box signup-box">
        <div className="auth-header">
          <h2>School Registration</h2>
          <p>Create your school account</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>School Information</h3>
            <div className="form-group">
              <label htmlFor="schoolName">School Name *</label>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                placeholder="Enter your school name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="schoolCode">School Code *</label>
              <input
                type="text"
                id="schoolCode"
                name="schoolCode"
                value={formData.schoolCode}
                onChange={handleChange}
                placeholder="Enter school code"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="schoolType">School Type *</label>
              <select
                id="schoolType"
                name="schoolType"
                value={formData.schoolType}
                onChange={handleChange}
                required
              >
                <option value="">Select School Type</option>
                {schoolTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="schoolBoard">School Board *</label>
              <select
                id="schoolBoard"
                name="schoolBoard"
                value={formData.schoolBoard}
                onChange={handleChange}
                required
              >
                <option value="">Select School Board</option>
                {schoolBoards.map(board => (
                  <option key={board} value={board}>{board}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="establishmentYear">Establishment Year</label>
              <input
                type="number"
                id="establishmentYear"
                name="establishmentYear"
                value={formData.establishmentYear}
                onChange={handleChange}
                placeholder="Enter establishment year"
                min="1900"
                max={new Date().getFullYear()}
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Principal Information</h3>
            <div className="form-group">
              <label htmlFor="principalName">Principal Name *</label>
              <input
                type="text"
                id="principalName"
                name="principalName"
                value={formData.principalName}
                onChange={handleChange}
                placeholder="Enter principal's name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="principalEmail">Principal Email *</label>
              <input
                type="email"
                id="principalEmail"
                name="principalEmail"
                value={formData.principalEmail}
                onChange={handleChange}
                placeholder="Enter principal's email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="principalPhone">Principal Phone *</label>
              <input
                type="tel"
                id="principalPhone"
                name="principalPhone"
                value={formData.principalPhone}
                onChange={handleChange}
                placeholder="Enter principal's phone number"
                required
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Administrative Contact</h3>
            <div className="form-group">
              <label htmlFor="adminEmail">Admin Email *</label>
              <input
                type="email"
                id="adminEmail"
                name="adminEmail"
                value={formData.adminEmail}
                onChange={handleChange}
                placeholder="Enter admin email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="adminPhone">Admin Phone *</label>
              <input
                type="tel"
                id="adminPhone"
                name="adminPhone"
                value={formData.adminPhone}
                onChange={handleChange}
                placeholder="Enter admin phone number"
                required
              />
            </div>
          </div>

          <div className="form-section">
            <h3>School Statistics</h3>
            <div className="form-group">
              <label htmlFor="totalStudents">Total Students</label>
              <input
                type="number"
                id="totalStudents"
                name="totalStudents"
                value={formData.totalStudents}
                onChange={handleChange}
                placeholder="Enter total number of students"
                min="0"
              />
            </div>

            <div className="form-group">
              <label htmlFor="totalTeachers">Total Teachers</label>
              <input
                type="number"
                id="totalTeachers"
                name="totalTeachers"
                value={formData.totalTeachers}
                onChange={handleChange}
                placeholder="Enter total number of teachers"
                min="0"
              />
            </div>
          </div>

          <div className="form-section">
            <h3>School Address</h3>
            <div className="form-group">
              <label htmlFor="address">Address *</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter school address"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">City *</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="state">State *</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter state"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="pincode">Pincode *</label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Enter pincode"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="website">School Website</label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Enter school website (optional)"
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Account Security</h3>
            <div className="form-group">
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password *</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
              />
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button 
            type="submit" 
            className="auth-button"
            disabled={isLoading}
          >
            {isLoading ? 'Registering...' : 'Register School'}
          </button>
        </form>

        <div className="auth-link">
          Already have an account? <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;