import React from 'react';
import './Events.css';

const events = [
  {
    title: 'BNS Tech Pravesh Utsav',
    stage: 'Foundation',
    format: 'District-level tech carnival',
    activities: [
      'Scratch coding challenges',
      '"Take Apart" sessions (disassembling old electronics)',
      'Vernacular digital literacy workshops'
    ],
    impact: 'Introduces 10,000+ rural students to tech annually.'
  },
  {
    title: 'Build for Bharat Hackathon',
    stage: 'Intermediate',
    theme: 'Solving local problems (e.g., waste management, farm tech)',
    unique: [
      'Bilingual problem statements (English + regional language)',
      'Winners get incubation support from Atal Innovation Mission'
    ]
  },
  {
    title: 'AI for Villages Challenge',
    stage: 'Advanced',
    task: [
      'Detecting crop diseases using smartphone images',
      'Translating govt. schemes to local dialects'
    ],
    prize: "Deployment support via NIC's Bhashini platform"
  },
  {
    title: 'National Hardware Olympiad',
    stage: 'Advanced/Expert',
    rounds: [
      'Virtual circuit design (Tinkercad)',
      'On-site build-a-thon (Arduino/RPi kits provided)'
    ],
    partner: "IITs' robotics labs"
  },
  {
    title: 'Cyber Yodha Bootcamp',
    stage: 'Intermediate+',
    curriculum: [
      'Ethical hacking basics',
      'Aadhaar data privacy drills',
      'Capture The Flag (CTF) with Bharat-specific scenarios'
    ],
    certification: 'MeitY-approved "Cyber Warrior" badge'
  },
  {
    title: 'BNS Future Skills Conclave',
    audience: 'Teachers/Policymakers',
    highlights: [
      'Demo of stage-wise learning kits',
      'Panel on integrating AI into NCERT textbooks',
      'Live coding session by 12-year-old prodigies'
    ]
  },
  {
    title: 'Rashtriya Vidhyut Yantrik Competition',
    stage: 'Expert/Master',
    challenge: [
      'Low-cost solar microgrids',
      'EV battery swap prototypes'
    ],
    judges: 'Engineers from ISRO/DRDO'
  },
  {
    title: 'Open Source Bharat Fest',
    stage: 'Professional',
    activities: [
      'Translate GitHub docs to Indian languages',
      'Contribute to IndiaStack projects',
      '"1 PR = 1 Tree Planted" drive'
    ]
  },
  {
    title: 'BNS SpaceTech Hack',
    partner: 'IN-SPACe',
    dataset: "ISRO's open satellite imagery",
    tracks: [
      'Disaster prediction models',
      'Village-level urban planning tools'
    ]
  },
  {
    title: 'Guru-Shishya Parampara Tech Summit',
    unique: [
      'Stage 6 professionals mentor Stage 3 learners',
      'Reverse mentoring (kids teach seniors about GenAI)',
      'Live project deployment in adopted villages'
    ]
  }
];

const differentiators = [
  'Bharat-Centric: Vernacular tracks, low-bandwidth options',
  'Progression-Linked: Events align with BNS stages',
  'Govt-Startup Synergy: Winners fast-tracked into AIM/Startup India programs'
];

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className="event-header">
        <h2 className="event-title">{event.title}</h2>
        {event.stage && <span className="event-stage">Stage: {event.stage}</span>}
        {event.audience && <span className="event-audience">Audience: {event.audience}</span>}
      </div>

      <div className="event-details">
        {event.format && <div className="event-detail"><span className="detail-label">Format:</span> {event.format}</div>}
        {event.theme && <div className="event-detail"><span className="detail-label">Theme:</span> {event.theme}</div>}
        {event.partner && <div className="event-detail"><span className="detail-label">Partner:</span> {event.partner}</div>}
        {event.dataset && <div className="event-detail"><span className="detail-label">Dataset:</span> {event.dataset}</div>}
        {event.impact && <div className="event-detail impact"><span className="detail-label">Impact:</span> {event.impact}</div>}
        {event.judges && <div className="event-detail"><span className="detail-label">Judges:</span> {event.judges}</div>}
        {event.prize && <div className="event-detail prize"><span className="detail-label">Prize:</span> {event.prize}</div>}
        {event.certification && <div className="event-detail certification"><span className="detail-label">Certification:</span> {event.certification}</div>}
      </div>

      <div className="event-content">
        {event.activities && (
          <div className="event-section">
            <h3 className="section-title">Activities</h3>
            <ul className="event-list">
              {event.activities.map((activity, index) => (
                <li key={index} className="event-list-item">
                  <span className="list-icon">•</span>
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        )}

        {event.unique && (
          <div className="event-section">
            <h3 className="section-title">Unique Features</h3>
            <ul className="event-list">
              {event.unique.map((item, index) => (
                <li key={index} className="event-list-item">
                  <span className="list-icon">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {event.task && (
          <div className="event-section">
            <h3 className="section-title">Tasks</h3>
            <ul className="event-list">
              {event.task.map((task, index) => (
                <li key={index} className="event-list-item">
                  <span className="list-icon">•</span>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        )}

        {event.rounds && (
          <div className="event-section">
            <h3 className="section-title">Rounds</h3>
            <ul className="event-list">
              {event.rounds.map((round, index) => (
                <li key={index} className="event-list-item">
                  <span className="list-icon">•</span>
                  {round}
                </li>
              ))}
            </ul>
          </div>
        )}

        {event.curriculum && (
          <div className="event-section">
            <h3 className="section-title">Curriculum</h3>
            <ul className="event-list">
              {event.curriculum.map((item, index) => (
                <li key={index} className="event-list-item">
                  <span className="list-icon">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {event.highlights && (
          <div className="event-section">
            <h3 className="section-title">Highlights</h3>
            <ul className="event-list">
              {event.highlights.map((highlight, index) => (
                <li key={index} className="event-list-item">
                  <span className="list-icon">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        {event.challenge && (
          <div className="event-section">
            <h3 className="section-title">Challenge</h3>
            <ul className="event-list">
              {event.challenge.map((item, index) => (
                <li key={index} className="event-list-item">
                  <span className="list-icon">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {event.tracks && (
          <div className="event-section">
            <h3 className="section-title">Tracks</h3>
            <ul className="event-list">
              {event.tracks.map((track, index) => (
                <li key={index} className="event-list-item">
                  <span className="list-icon">•</span>
                  {track}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const Differentiators = () => {
  return (
    <div className="differentiators-section">
      <h2 className="differentiators-title">What Makes BNS Events Unique?</h2>
      <ul className="differentiators-list">
        {differentiators.map((item, index) => (
          <li key={index} className="differentiator-item">
            <span className="differentiator-icon">✨</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="example-box">
        <strong>Example:</strong> A Stage 2 student wins "Build for Bharat" → Gets scholarship for Stage 3 advanced labs → Launches agri-tech startup by Stage 6.
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <div className="events-page">
      <div className="events-container">
        <div className="events-header">
          <h1 className="events-title">BNS Impact Events</h1>
          <p className="events-description">
            10 unique, Bharat-centric events to accelerate skill development and innovation across all stages. 
            Each event is designed to inspire, empower, and connect learners, educators, and innovators nationwide.
          </p>
        </div>

        <div className="events-grid">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>

        <Differentiators />
      </div>
    </div>
  );
};

export default Events; 