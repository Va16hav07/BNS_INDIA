import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

const LearningPortal = () => {
  const { courseId } = useParams();
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoQuality, setVideoQuality] = useState('360p');

  const transcript = [
    { time: 0, text: 'Welcome to this lesson on Mathematics.' },
    { time: 30, text: 'Today we will learn about quadratic equations.' },
    { time: 60, text: 'Let\'s start with the basic formula.' },
    { time: 90, text: 'Here\'s an example problem.' },
    { time: 120, text: 'Now try solving this on your own.' }
  ];

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleTranscriptClick = (time) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      videoRef.current.play();
    }
  };

  const handleQualityChange = (quality) => {
    setVideoQuality(quality);
    // In a real app, you would change the video source here
  };

  return (
    <div className="learning-portal">
      <div className="video-container">
        <div className="video-player">
          <video
            ref={videoRef}
            controls
            onTimeUpdate={handleTimeUpdate}
            className="video"
          >
            <source src={`/videos/course-${courseId}-${videoQuality}.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="quality-controls">
            <button 
              className={`quality-btn ${videoQuality === '144p' ? 'active' : ''}`}
              onClick={() => handleQualityChange('144p')}
            >
              144p
            </button>
            <button 
              className={`quality-btn ${videoQuality === '360p' ? 'active' : ''}`}
              onClick={() => handleQualityChange('360p')}
            >
              360p
            </button>
          </div>
        </div>

        <div className="transcript">
          <h3>Interactive Transcript</h3>
          <div className="transcript-content">
            {transcript.map((item, index) => (
              <div
                key={index}
                className={`transcript-item ${currentTime >= item.time && currentTime < (transcript[index + 1]?.time || Infinity) ? 'active' : ''}`}
                onClick={() => handleTranscriptClick(item.time)}
              >
                <span className="timestamp">
                  {Math.floor(item.time / 60)}:{(item.time % 60).toString().padStart(2, '0')}
                </span>
                <span className="text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="download-section">
        <h3>Download Materials</h3>
        <div className="download-options">
          <button className="download-btn">
            <span className="icon">📹</span>
            Download Video (MP4)
          </button>
          <button className="download-btn">
            <span className="icon">📄</span>
            Download Notes (PDF)
          </button>
        </div>
      </div>

      <div className="related-courses">
        <h3>Related Courses</h3>
        <div className="related-courses-grid">
          <div className="related-course-card">
            <img src="/course-algebra.jpg" alt="Advanced Algebra" />
            <h4>Advanced Algebra</h4>
            <p>Take your math skills to the next level</p>
          </div>
          <div className="related-course-card">
            <img src="/course-geometry.jpg" alt="Geometry Basics" />
            <h4>Geometry Basics</h4>
            <p>Master the fundamentals of geometry</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPortal; 