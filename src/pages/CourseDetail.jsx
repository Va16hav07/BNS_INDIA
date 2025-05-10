import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const CourseDetail = () => {
  const { courseId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock course data - in a real app, this would come from an API
  const courseData = {
    dsa: {
      title: 'Data Structures & Algorithms',
      description: 'Master the fundamentals of DSA and crack coding interviews',
      duration: '6 months',
      level: 'Beginner to Advanced',
      image: '/course1.jpg',
      price: '₹15,000',
      instructor: 'Ankush Singla',
      overview: 'This comprehensive course covers all essential data structures and algorithms, helping you build a strong foundation for technical interviews.',
      curriculum: [
        'Introduction to Programming',
        'Arrays and Strings',
        'Linked Lists',
        'Stacks and Queues',
        'Trees and Graphs',
        'Sorting and Searching',
        'Dynamic Programming',
        'Advanced Problem Solving'
      ],
      features: [
        '200+ coding problems',
        'Live doubt support',
        'Interview preparation',
        'Certificate of completion'
      ]
    },
    fullstack: {
      title: 'Full Stack Development',
      description: 'Become a full-stack developer with MERN stack',
      duration: '8 months',
      level: 'Intermediate',
      image: '/course2.jpg',
      price: '₹20,000',
      instructor: 'Parikh Jain',
      overview: 'Learn to build complete web applications using the MERN stack (MongoDB, Express.js, React, Node.js).',
      curriculum: [
        'HTML, CSS, and JavaScript',
        'React.js Fundamentals',
        'Node.js and Express',
        'MongoDB and Database Design',
        'RESTful APIs',
        'Authentication and Authorization',
        'Deployment and DevOps',
        'Project Development'
      ],
      features: [
        '4 real-world projects',
        'Mentor support',
        'Portfolio building',
        'Job placement assistance'
      ]
    }
  };

  const course = courseData[courseId] || courseData.dsa; // Fallback to DSA if course not found

  return (
    <div className="course-detail">
      <section className="course-header">
        <div className="container">
          <div className="course-header-content">
            <div className="course-info">
              <h1>{course.title}</h1>
              <p className="description">{course.description}</p>
              <div className="course-meta">
                <span>⏱️ {course.duration}</span>
                <span>📚 {course.level}</span>
                <span>👨‍🏫 {course.instructor}</span>
              </div>
              <div className="course-actions">
                <button className="btn btn-primary">Enroll Now - {course.price}</button>
                <button className="btn btn-outline">Download Syllabus</button>
              </div>
            </div>
            <div className="course-image">
              <img src={course.image} alt={course.title} />
            </div>
          </div>
        </div>
      </section>

      <section className="course-content">
        <div className="container">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`tab ${activeTab === 'curriculum' ? 'active' : ''}`}
              onClick={() => setActiveTab('curriculum')}
            >
              Curriculum
            </button>
            <button 
              className={`tab ${activeTab === 'features' ? 'active' : ''}`}
              onClick={() => setActiveTab('features')}
            >
              Features
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'overview' && (
              <div className="overview">
                <h2>Course Overview</h2>
                <p>{course.overview}</p>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div className="curriculum">
                <h2>Course Curriculum</h2>
                <ul>
                  {course.curriculum.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features">
                <h2>Course Features</h2>
                <ul>
                  {course.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail; 