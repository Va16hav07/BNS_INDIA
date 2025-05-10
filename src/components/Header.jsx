import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaSignOutAlt, FaTachometerAlt, FaCrown } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const isEnrolled = localStorage.getItem('isEnrolled') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('isEnrolled');
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/BNSLOGO.png" alt="BHARAT NAVODAYA SHIKSHA" />
            <span>BHARAT NAVODAYA SHIKSHA</span>
          </Link>
          
          <nav className="main-nav">
            <ul>
              <li><Link to="/stages">Stages</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/membership">Membership</Link></li>
            </ul>
          </nav>

          <div className="header-actions">
            {isAuthenticated ? (
              <div className="profile-menu">
                <button 
                  className="profile-button"
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                >
                  <FaUser />
                  <span>Profile</span>
                </button>
                {showProfileMenu && (
                  <div className="profile-dropdown">
                    {isEnrolled ? (
                      <>
                        <Link to="/dashboard" className="dropdown-item">
                          <FaTachometerAlt />
                          <span>Dashboard</span>
                        </Link>
                        <Link to="/subscription" className="dropdown-item">
                          <FaCrown />
                          <span>Subscription</span>
                        </Link>
                        <button onClick={handleLogout} className="dropdown-item">
                          <FaSignOutAlt />
                          <span>Logout</span>
                        </button>
                      </>
                    ) : (
                      <>
                        <Link to="/subscription" className="dropdown-item">
                          <FaCrown />
                          <span>Subscription</span>
                        </Link>
                        <button onClick={handleLogout} className="dropdown-item">
                          <FaSignOutAlt />
                          <span>Logout</span>
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="btn btn-primary">Login</Link>
                <Link to="/signup" className="btn btn-secondary">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 