import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      // TODO: Implement actual password reset logic here
      setShowPopup(true);
    } catch (err) {
      setError('Failed to send reset email. Please try again.');
    }
  };

  useEffect(() => {
    let timer;
    if (showPopup && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      navigate('/login');
    }
    return () => clearTimeout(timer);
  }, [showPopup, countdown, navigate]);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <h2>Reset Password</h2>
          <p>Enter your email to reset your password</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="auth-button">
            Send Reset Link
          </button>
        </form>

        <div className="auth-link">
          Remember your password? <Link to="/login">Sign in</Link>
        </div>
      </div>

      {/* Reset Password Popup */}
      <div className={`reset-popup-overlay ${showPopup ? 'active' : ''}`}>
        <div className="reset-popup">
          <button 
            className="reset-popup-close"
            onClick={() => navigate('/login')}
          >
            ×
          </button>
          
          <div className="reset-popup-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h3>Reset Link Sent!</h3>
          <p>
            We've sent a password reset link to your email address.
            Please check your inbox and follow the instructions.
          </p>
          <div className="reset-popup-countdown">
            Redirecting to login in {countdown}...
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword; 