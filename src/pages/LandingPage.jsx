import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (imageId) => {
    setLoadedImages(prev => ({
      ...prev,
      [imageId]: true
    }));
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to </h1>
          <h1>Bharat Navodaya Shiksha</h1>
          <p>Empowering students with quality education and career guidance</p>
          <div className="hero-buttons">
            <Link to="/courses" className="btn btn-primary">Explore Courses</Link>
            <Link to="/signup" className="btn btn-secondary">Get Started</Link>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Students learning in a modern classroom"
            className={loadedImages.hero ? 'loaded' : ''}
            onLoad={() => handleImageLoad('hero')}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-graduation-cap"></i>
            <h3>Expert Teachers</h3>
            <p>Learn from experienced educators and industry professionals</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-book"></i>
            <h3>Quality Content</h3>
            <p>Comprehensive study materials and resources</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-users"></i>
            <h3>Community Support</h3>
            <p>Join a vibrant community of learners</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-certificate"></i>
            <h3>Certification</h3>
            <p>Get recognized certificates for your achievements</p>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="popular-courses">
        <h2>OUR SUBSCRIPTION PLANS</h2>
        <div className="courses-grid">
          <div className="course-card">
            <img 
              src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Mathematics course"
              className={loadedImages.math ? 'loaded' : ''}
              onLoad={() => handleImageLoad('math')}
            />
            <div className="course-content">
              <h3>SILVER</h3>
              <p>Master mathematical concepts and problem-solving</p>
              <Link to="/courses/mathematics" className="btn btn-outline">Learn More</Link>
            </div>
          </div>
          <div className="course-card">
            <img 
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Science course"
              className={loadedImages.science ? 'loaded' : ''}
              onLoad={() => handleImageLoad('science')}
            />
            <div className="course-content">
              <h3>GOLD</h3>
              <p>Explore scientific concepts and experiments</p>
              <Link to="/courses/science" className="btn btn-outline">Learn More</Link>
            </div>
          </div>
          <div className="course-card">
            <img 
              src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
              alt="English course"
              className={loadedImages.english ? 'loaded' : ''}
              onLoad={() => handleImageLoad('english')}
            />
            <div className="course-content">
              <h3>DIAMOND</h3>
              <p>Improve language skills and communication</p>
              <Link to="/courses/english" className="btn btn-outline">Learn More</Link>
            </div>
          </div>
        </div>
        <div className="courses-cta">
          <Link to="/courses" className="btn btn-primary">View All Courses</Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"The courses are well-structured and the teachers are very supportive."</p>
            </div>
            <div className="testimonial-author">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Rahul Sharma"
                className={loadedImages.student1 ? 'loaded' : ''}
                onLoad={() => handleImageLoad('student1')}
              />
              <div>
                <h4>Rahul Sharma</h4>
                <p>Class 10 Student</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"I've seen significant improvement in my grades after joining BNS."</p>
            </div>
            <div className="testimonial-author">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Priya Patel"
                className={loadedImages.student2 ? 'loaded' : ''}
                onLoad={() => handleImageLoad('student2')}
              />
              <div>
                <h4>Priya Patel</h4>
                <p>Class 12 Student</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"The online platform is user-friendly and the content is excellent."</p>
            </div>
            <div className="testimonial-author">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Amit Kumar"
                className={loadedImages.student3 ? 'loaded' : ''}
                onLoad={() => handleImageLoad('student3')}
              />
              <div>
                <h4>Amit Kumar</h4>
                <p>Class 11 Student</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Start Your Learning Journey?</h2>
          <p>Join thousands of students who are already learning with us</p>
          <Link to="/signup" className="btn btn-primary">Get Started Now</Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage; 