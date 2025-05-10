import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Subscription.css';

const Subscription = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const subscriptionPlans = [
    {
      id: 1,
      name: 'Basic',
      price: '₹999',
      features: [
        'Access to basic courses',
        'Monthly live sessions',
        'Basic support',
        'Community access'
      ]
    },
    {
      id: 2,
      name: 'Premium',
      price: '₹1999',
      features: [
        'All Basic features',
        'Weekly live sessions',
        'Priority support',
        'Downloadable resources',
        '1-on-1 mentoring'
      ]
    },
    {
      id: 3,
      name: 'Enterprise',
      price: '₹4999',
      features: [
        'All Premium features',
        'Daily live sessions',
        '24/7 support',
        'Custom learning path',
        'Group mentoring',
        'Certificate of completion'
      ]
    }
  ];

  const handleEnroll = (planId) => {
    setSelectedPlan(planId);
    setShowSuccess(true);
    // Set enrollment status
    localStorage.setItem('isEnrolled', 'true');
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  const connectMeeting = () => {
    // Here you would integrate with your preferred meeting platform (Zoom, Google Meet, etc.)
    window.open('https://meet.google.com', '_blank');
  };

  return (
    <div className="subscription-container">
      <h1>Choose Your Learning Plan</h1>
      
      <div className="meeting-section">
        <h2>Connect to Live Session</h2>
        <button className="connect-meeting-btn" onClick={connectMeeting}>
          Join Live Session
        </button>
      </div>

      <div className="plans-grid">
        {subscriptionPlans.map((plan) => (
          <div key={plan.id} className="plan-card">
            <div className="plan-header">
              <h3>{plan.name}</h3>
              <div className="plan-price">{plan.price}</div>
            </div>
            <ul className="plan-features">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button 
              className="enroll-button"
              onClick={() => handleEnroll(plan.id)}
            >
              Enroll Now
            </button>
          </div>
        ))}
      </div>

      {showSuccess && (
        <div className="success-popup">
          <div className="success-content">
            <h3>Enrollment Successful!</h3>
            <p>Welcome to Bharat Navodaya Shiksha. Redirecting to dashboard...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscription; 