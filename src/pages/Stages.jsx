import React from 'react';
import { Link } from 'react-router-dom';
import './Stages.css';

const stages = [
  {
    id: 'stage1',
    title: 'Stage 1 - Foundation',
    description: 'Cultivate curiosity, digital literacy, and teamwork',
    icon: '🎯',
    color: '#4F46E5'
  },
  {
    id: 'stage2',
    title: 'Stage 2 - Intermediate',
    description: 'Build technical skills and problem-solving abilities',
    icon: '🚀',
    color: '#7C3AED'
  },
  {
    id: 'stage3',
    title: 'Stage 3 - Advanced',
    description: 'Specialized technical proficiency and global exposure',
    icon: '💡',
    color: '#EC4899'
  },
  {
    id: 'stage4',
    title: 'Stage 4 - Expert',
    description: 'Master advanced concepts and industry practices',
    icon: '🌟',
    color: '#F59E0B'
  },
  {
    id: 'stage5',
    title: 'Stage 5 - Master',
    description: 'Thought leadership and global impact',
    icon: '👑',
    color: '#10B981'
  },
  {
    id: 'stage6',
    title: 'Stage 6 - Professional',
    description: 'Transformative impact and lifelong learning',
    icon: '🏆',
    color: '#3B82F6'
  }
];

const Stages = () => {
  return (
    <div className="stages-page">
      <div className="stages-container">
        <div className="stages-header">
          <h1 className="page-title">Learning Stages</h1>
          <p className="page-description">
            Explore our comprehensive learning journey designed to transform you from a beginner to a professional.
            Each stage builds upon the previous one, creating a complete path to mastery.
          </p>
        </div>

        <div className="stages-grid">
          {stages.map((stage) => (
            <Link 
              to={`/stages/${stage.id}`} 
              className="stage-card" 
              key={stage.id}
              style={{ '--stage-color': stage.color }}
            >
              <div className="stage-icon">{stage.icon}</div>
              <div className="stage-content">
                <h2 className="stage-title">{stage.title}</h2>
                <p className="stage-description">{stage.description}</p>
              </div>
              <div className="stage-arrow">→</div>
            </Link>
          ))}
        </div>

        <div className="stages-info">
          <div className="info-card">
            <h3>How It Works</h3>
            <p>
              Each stage is carefully designed to build upon your previous knowledge and skills.
              Progress through the stages at your own pace, with support from our expert mentors
              and a community of learners.
            </p>
          </div>
          <div className="info-card">
            <h3>Get Started</h3>
            <p>
              Begin your journey with Stage 1 and work your way up. Each stage includes
              interactive projects, assessments, and real-world applications to ensure
              comprehensive learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stages; 