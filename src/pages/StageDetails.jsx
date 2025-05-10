import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './StageDetails.css';

const stageData = {
  stage1: {
    title: 'Stage 1 - Foundation',
    goal: 'Cultivate curiosity, digital literacy, and teamwork',
    skills: [
      'Computational thinking (Scratch/Blockly)',
      'Basic electronics (LED circuits with Arduino)',
      'Vernacular digital literacy (Bhashini API integration)',
      'Digital communication',
      'Teamwork and creative problem-solving'
    ],
    implementation: [
      {
        for: 'Learners',
        items: [
          'Complete 5 interactive projects on Code.org',
          'Build a "Smart Torch" with light sensor',
          'Participate in a virtual "Hour of Code" event',
          'Join a Scratch online community challenge',
          'Present a project at a local science fair',
          'Create a digital story using Google Slides or Canva',
          'Collaborate on a group project using Google Docs'
        ]
      },
      {
        for: 'Institutions',
        items: [
          'Set up "Tech Corners" with Raspberry Pi kits',
          'Teacher training via DIKSHA\'s foundational courses',
          'Organize a "Digital Citizenship" workshop',
          'Launch a school blog for student tech stories',
          'Host a family coding night',
          'Establish a student tech club'
        ]
      }
    ],
    resources: [
      { name: 'CS Unplugged', url: 'https://csunplugged.org/' },
      { name: 'Tinkercad Circuits', url: 'https://www.tinkercad.com/learn/circuits' },
      { name: 'Scratch Community', url: 'https://scratch.mit.edu/' },
      { name: 'Khan Academy Computing', url: 'https://www.khanacademy.org/computing' },
      { name: 'Google for Education', url: 'https://edu.google.com/' }
    ],
    community: [
      'Join Code.org\'s global student forums',
      'Participate in local hackathons',
      'Share projects on Scratch community'
    ],
    competitions: [
      'Google Code to Learn',
      'National Science Olympiad',
      'CBSE Science Challenge'
    ]
  },
  stage2: {
    title: 'Stage 2 - Intermediate',
    goal: 'Problem-solving through technology and collaboration',
    skills: [
      'Web development (HTML/CSS → Firebase)',
      'AI basics (Teachable Machine projects)',
      'IoT prototyping (Blynk apps for smart devices)',
      'Digital presentation skills',
      'Collaboration using online tools'
    ],
    implementation: [
      {
        for: 'Learners',
        items: [
          'Create a portfolio website hosted on GitHub Pages',
          'Train an AI model to classify local crops',
          'Build a weather dashboard using public APIs',
          'Design a smart home prototype with Blynk',
          'Present a tech solution to a real-world problem',
          'Join a virtual hackathon',
          'Collaborate on a group coding project using GitHub'
        ]
      },
      {
        for: 'Institutions',
        items: [
          'Conduct "Build for Bharat" hackathons',
          'Partner with Atal Tinkering Labs for mentorship',
          'Host a web development bootcamp',
          'Organize AI for Kids workshops',
          'Facilitate student participation in Google Science Fair'
        ]
      }
    ],
    resources: [
      { name: 'GitHub Student Pack', url: 'https://education.github.com/pack' },
      { name: 'Teachable Machine', url: 'https://teachablemachine.withgoogle.com/' },
      { name: 'Blynk IoT Platform', url: 'https://blynk.io/' },
      { name: 'Firebase for Students', url: 'https://firebase.google.com/edu' },
      { name: 'W3Schools', url: 'https://www.w3schools.com/' }
    ],
    validation: [
      'Publish 3 projects on GitHub',
      'Earn Google\'s AI Essentials certificate',
      'Showcase a project at a school tech fest'
    ],
    community: [
      'Join Girls Who Code India',
      'Participate in Mozilla Open Leaders',
      'Contribute to open-source beginner projects'
    ],
    competitions: [
      'Google Science Fair',
      'Atal Tinkering Innovation Challenge',
      'Codeavour AI Challenge'
    ]
  },
  stage3: {
    title: 'Stage 3 - Advanced',
    goal: 'Specialized technical proficiency and global exposure',
    skills: [
      'Full-stack development (MERN stack)',
      'Machine Learning (Python + TensorFlow)',
      'Blockchain (Solidity smart contracts)',
      'API integration',
      'Open source contribution',
      'Cloud basics (AWS Educate, GCP)'
    ],
    implementation: [
      {
        for: 'Learners',
        items: [
          'Develop a crowdsourced pollution tracker',
          'Contribute to open-source via GirlScript Summer of Code',
          'Build a MERN stack app for local needs',
          'Deploy a project on Heroku or Vercel',
          'Create a blockchain voting demo',
          'Participate in Google Summer of Code',
          'Present at a student developer meetup'
        ]
      },
      {
        for: 'Institutions',
        items: [
          'Offer NSQF-aligned courses in Data Science',
          'Set up quantum computing simulation labs',
          'Host a cloud computing bootcamp',
          'Facilitate student internships with NASSCOM companies',
          'Organize open-source contribution drives'
        ]
      }
    ],
    industryConnect: [
      'Internships with NASSCOM member companies',
      'Participate in Smart India Hackathon',
      'Join Google Developer Student Clubs',
      'Attend AWS Educate webinars'
    ],
    resources: [
      { name: 'GirlScript Summer of Code', url: 'https://gssoc.girlscript.tech/' },
      { name: 'Google Summer of Code', url: 'https://summerofcode.withgoogle.com/' },
      { name: 'AWS Educate', url: 'https://aws.amazon.com/education/awseducate/' },
      { name: 'Vercel', url: 'https://vercel.com/' },
      { name: 'Heroku', url: 'https://www.heroku.com/' }
    ],
    competitions: [
      'Smart India Hackathon',
      'Google Code Jam',
      'Facebook Hacker Cup'
    ]
  },
  stage4: {
    title: 'Stage 4 - Expert',
    goal: 'Innovation, research, and leadership',
    skills: [
      'Advanced AI (LLM fine-tuning)',
      'Quantum algorithms (Qiskit)',
      'Robotics (ROS applications)',
      'Research methodology',
      'Technical writing',
      'Mentoring peers'
    ],
    implementation: [
      {
        for: 'Learners',
        items: [
          'Publish research on arXiv',
          'File provisional patents',
          'Mentor junior students in coding clubs',
          'Lead a robotics project team',
          'Present at a national conference',
          'Contribute to Wikipedia technical articles'
        ]
      },
      {
        for: 'Institutions',
        items: [
          'Establish incubation centers with AIM support',
          'Collaborate with CSIR labs on real-world problems',
          'Host a research paper writing workshop',
          'Facilitate patent filing support'
        ]
      }
    ],
    funding: [
      'PM-YUVA 2.0 grants',
      'SERB Early Career Research awards',
      'DST INSPIRE fellowships'
    ],
    resources: [
      { name: 'arXiv', url: 'https://arxiv.org/' },
      { name: 'Qiskit', url: 'https://qiskit.org/' },
      { name: 'ROS', url: 'https://www.ros.org/' },
      { name: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Wikipedia:WikiProject_Computing' }
    ],
    community: [
      'Join ACM India student chapter',
      'Participate in IEEE Xplore webinars',
      'Lead a local robotics club'
    ],
    competitions: [
      'IIT Techfest',
      'NVIDIA Jetson AI Challenge',
      'National Robotics Olympiad'
    ]
  },
  stage5: {
    title: 'Stage 5 - Master',
    goal: 'Thought leadership and global impact',
    keyActivities: [
      'Lead open-source communities',
      'Develop policy frameworks for emerging tech',
      'Mentor Stage 1-3 learners',
      'Speak at international conferences',
      'Publish in peer-reviewed journals',
      'Advise on curriculum design'
    ],
    institutionalSupport: [
      'Chair positions in NCVET committees',
      'Research partnerships with IITs/IIITs',
      'Global research collaborations',
      'Serve as judge in national competitions'
    ],
    resources: [
      { name: 'IEEE Xplore', url: 'https://ieeexplore.ieee.org/' },
      { name: 'ACM Digital Library', url: 'https://dl.acm.org/' },
      { name: 'OpenAI Research', url: 'https://openai.com/research/' }
    ],
    community: [
      'Join global open-source summits',
      'Participate in UNESCO ICT forums',
      'Mentor on platforms like MentorCruise'
    ],
    competitions: [
      'ACM ICPC',
      'Google Research Awards',
      'UNESCO Innovation Prize'
    ]
  },
  stage6: {
    title: 'Stage 6 - Professional',
    goal: 'Transformative impact and lifelong learning',
    keyPathways: [
      'Launch deep-tech startups',
      'Advise government on digital education',
      'Scale solutions through PPP models',
      'Drive social innovation projects',
      'Pursue lifelong learning via MOOCs',
      'Contribute to national and global policy'
    ],
    resources: [
      { name: 'Startup India', url: 'https://www.startupindia.gov.in/' },
      { name: 'Coursera for Government', url: 'https://www.coursera.org/government' },
      { name: 'edX Professional Certificates', url: 'https://www.edx.org/professional-certificate' },
      { name: 'NITI Aayog Atal Innovation Mission', url: 'https://aim.gov.in/' }
    ],
    community: [
      'Join NASSCOM DeepTech Club',
      'Participate in World Economic Forum initiatives',
      'Network at national startup summits'
    ],
    competitions: [
      'National Startup Awards',
      'MIT Solve',
      'World Summit Awards'
    ]
  }
};

/**
 * StageDetails Component
 * Displays detailed information about a specific learning stage
 * @returns {JSX.Element} The rendered stage details page
 */
const StageDetails = () => {
  const { stageId } = useParams();
  const navigate = useNavigate();
  const stage = stageData[stageId];

  // Scroll to top when stage changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [stageId]);

  const handleNavigation = (direction) => {
    const currentStageNum = parseInt(stageId.slice(-1));
    const nextStageNum = direction === 'next' ? currentStageNum + 1 : currentStageNum - 1;
    const nextStageId = `stage${nextStageNum}`;
    
    // Scroll to top before navigation
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Navigate to next/previous stage
    navigate(`/stages/${nextStageId}`);
  };

  if (!stage) {
    return (
      <div className="stage-not-found">
        <h2>Stage Not Found</h2>
        <p>The requested stage does not exist.</p>
        <Link to="/" className="back-link">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="stage-details-container">
      {/* Stage Header */}
      <div className="stage-header">
        <h1 className="stage-title">{stage.title}</h1>
        <p className="stage-goal"><strong>Goal:</strong> {stage.goal}</p>
      </div>

      {/* Main Content */}
      <div className="stage-content">
        {/* Skills Section */}
        {stage.skills && (
          <section className="stage-section">
            <h2 className="section-title">Skills Built</h2>
            <ul className="skills-list">
              {stage.skills.map((skill, index) => (
                <li key={index} className="skill-item">
                  <span className="skill-icon">⚡</span>
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Implementation Section */}
        {stage.implementation && (
          <section className="stage-section">
            <h2 className="section-title">Implementation</h2>
            {stage.implementation.map((imp, index) => (
              <div key={index} className="implementation-group">
                <h3 className="group-title">{imp.for}</h3>
                <ul className="implementation-list">
                  {imp.items.map((item, j) => (
                    <li key={j} className="implementation-item">
                      <span className="item-icon">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* Resources Section */}
        {stage.resources && (
          <section className="stage-section">
            <h2 className="section-title">Free Resources</h2>
            <div className="resources-grid">
              {stage.resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-card"
                >
                  <span className="resource-icon">🔗</span>
                  <span className="resource-name">{resource.name}</span>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Validation Section */}
        {stage.validation && (
          <section className="stage-section">
            <h2 className="section-title">Validation</h2>
            <ul className="validation-list">
              {stage.validation.map((item, index) => (
                <li key={index} className="validation-item">
                  <span className="validation-icon">🏆</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Industry Connect Section */}
        {stage.industryConnect && (
          <section className="stage-section">
            <h2 className="section-title">Industry Connect</h2>
            <ul className="industry-list">
              {stage.industryConnect.map((item, index) => (
                <li key={index} className="industry-item">
                  <span className="industry-icon">🤝</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Funding Section */}
        {stage.funding && (
          <section className="stage-section">
            <h2 className="section-title">Funding Pathways</h2>
            <ul className="funding-list">
              {stage.funding.map((item, index) => (
                <li key={index} className="funding-item">
                  <span className="funding-icon">💰</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Key Activities Section */}
        {stage.keyActivities && (
          <section className="stage-section">
            <h2 className="section-title">Key Activities</h2>
            <ul className="activities-list">
              {stage.keyActivities.map((item, index) => (
                <li key={index} className="activity-item">
                  <span className="activity-icon">🎯</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Community Section */}
        {stage.community && (
          <section className="stage-section">
            <h2 className="section-title">Community & Collaboration</h2>
            <ul className="community-list">
              {stage.community.map((item, index) => (
                <li key={index} className="community-item">
                  <span className="community-icon">👥</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Competitions Section */}
        {stage.competitions && (
          <section className="stage-section">
            <h2 className="section-title">Competitions & Recognition</h2>
            <ul className="competitions-list">
              {stage.competitions.map((item, index) => (
                <li key={index} className="competition-item">
                  <span className="competition-icon">🏅</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Navigation */}
      <div className="stage-navigation">
        <Link to="/" className="nav-button">Back to Home</Link>
        <div className="stage-nav-buttons">
          {stageId !== 'stage1' && (
            <button 
              onClick={() => handleNavigation('prev')} 
              className="nav-button"
            >
              Previous Stage
            </button>
          )}
          {stageId !== 'stage6' && (
            <button 
              onClick={() => handleNavigation('next')} 
              className="nav-button"
            >
              Next Stage
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StageDetails; 