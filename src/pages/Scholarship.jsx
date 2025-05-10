import React from 'react';
import './Scholarship.css';

const membershipTiers = [
  {
    tier: 'Basic',
    schoolCommitment: 'Implement 1 tech module',
    studentBenefits: '10 student scholarships',
    annualFee: '₹25,000'
  },
  {
    tier: 'Advanced',
    schoolCommitment: 'Full curriculum integration',
    studentBenefits: 'Lab setup support + 25 scholarships',
    annualFee: '₹75,000'
  },
  {
    tier: 'Elite',
    schoolCommitment: 'Become regional hub',
    studentBenefits: 'Incubation center + 100 scholarships',
    annualFee: '₹2,00,000'
  }
];

const schoolBenefits = [
  {
    title: 'Curriculum Integration',
    description: 'Free teacher training on AI/Coding/Robotics, stage-wise lesson plans, quarterly NEP alignment audits'
  },
  {
    title: 'Infrastructure Support',
    description: '50% subsidy on STEM lab setup, priority for Atal Tinkering Lab grants'
  },
  {
    title: 'Recognition',
    description: '"BNS Center of Excellence" certification, featured in MHRD\'s best practices repository'
  }
];

const studentBenefits = [
  {
    title: 'Skill Development',
    description: 'Access to BNS digital learning platform, monthly masterclasses with ISRO/DRDO scientists'
  },
  {
    title: 'Career Pathways',
    description: 'Guaranteed internship interviews, startup incubation support'
  },
  {
    title: 'Financial Support',
    description: '25-100% fee waiver on advanced certification courses, stipends for top performers'
  }
];

const applicationSteps = [
  {
    title: 'School Registration',
    description: 'Submit UDISE+ code and principal approval, select membership tier'
  },
  {
    title: 'Student Nomination',
    description: 'Schools recommend deserving candidates, students submit academic records and a 500-word "My Tech Vision for India" essay'
  },
  {
    title: 'Selection',
    description: 'Panel review by BNS + industry partners, quarterly intake cycles'
  }
];

const Section = ({ title, children }) => (
  <section className="scholarship-section">
    <h3 className="section-title">{title}</h3>
    {children}
  </section>
);

const BenefitList = ({ benefits }) => (
  <ul className="benefit-list">
    {benefits.map((benefit, index) => (
      <li key={index} className="benefit-item">
        <span className="benefit-title">{benefit.title}</span>: {benefit.description}
      </li>
    ))}
  </ul>
);

const MembershipTierTable = () => (
  <div className="table-container">
    <table className="membership-table">
      <thead>
        <tr>
          <th>Tier</th>
          <th>School Commitment</th>
          <th>Student Benefits</th>
          <th>Annual Fee*</th>
        </tr>
      </thead>
      <tbody>
        {membershipTiers.map((tier, index) => (
          <tr key={index}>
            <td>{tier.tier}</td>
            <td>{tier.schoolCommitment}</td>
            <td>{tier.studentBenefits}</td>
            <td>{tier.annualFee}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="table-note">*50% subsidized for government schools</div>
  </div>
);

const Scholarship = () => {
  return (
    <div className="scholarship-page">
      <div className="scholarship-container">
        <div className="scholarship-header">
          <h1 className="page-title">Bharat Navodaya Shiksha - Future Leaders Membership Program</h1>
          <h2 className="page-subtitle">Empowering Schools & Students Through Tech Excellence</h2>
        </div>

        <Section title="About the Membership Program">
          <p className="section-text">
            A <span className="highlight">dual-benefit initiative</span> where:
          </p>
          <ul className="feature-list">
            <li><span className="highlight">Schools</span> gain institutional access to cutting-edge tech education resources</li>
            <li><span className="highlight">Students</span> receive skill development opportunities with financial support</li>
          </ul>
          <p className="section-text">
            <span className="highlight">Objective:</span> Create a nationwide network of NEP 2020-aligned future-ready schools with industry-connected students.
          </p>
        </Section>

        <Section title="Membership Benefits">
          <div className="benefits-container">
            <div className="benefit-group">
              <h4 className="benefit-group-title">For Schools (B2B Advantages)</h4>
              <BenefitList benefits={schoolBenefits} />
            </div>
            <div className="benefit-group">
              <h4 className="benefit-group-title">For Students (Talent Nurturing)</h4>
              <BenefitList benefits={studentBenefits} />
            </div>
          </div>
        </Section>

        <Section title="Membership Tiers">
          <MembershipTierTable />
        </Section>

        <Section title="Eligibility Criteria">
          <div className="eligibility-container">
            <div className="eligibility-group">
              <h4 className="eligibility-title">For Schools</h4>
              <ul className="eligibility-list">
                <li>Affiliated with any Indian education board</li>
                <li>Willing to dedicate 5+ hours/week for tech education</li>
                <li>Infrastructure for basic computer lab</li>
              </ul>
            </div>
            <div className="eligibility-group">
              <h4 className="eligibility-title">For Students</h4>
              <ul className="eligibility-list">
                <li>Enrolled in member schools (Class 6-12)</li>
                <li>Demonstrated interest in STEM fields</li>
                <li>Financial need (for fee waivers)</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Application Process">
          <ol className="process-list">
            {applicationSteps.map((step, index) => (
              <li key={index}>
                <span className="step-title">{step.title}</span>: {step.description}
              </li>
            ))}
          </ol>
        </Section>

        <Section title="Why This Works for Schools?">
          <ul className="feature-list">
            <li><span className="highlight">Revenue Model</span>: Paid membership offsets program costs</li>
            <li><span className="highlight">Scale</span>: 1 membership → 100+ students impacted</li>
            <li><span className="highlight">Accountability</span>: Annual impact reports to school management</li>
          </ul>
          <p className="section-text">
            <span className="highlight">For Students</span>: Transforms financial barriers into opportunities through institutional support.
          </p>
        </Section>

        <div className="deadline-banner">
          <div className="deadline-content">
            <span className="deadline-label">Next Cohort Deadline:</span> 30 October 2024 | 
            <span className="deadline-label">Apply:</span> 
            <a href="#" className="apply-link">BNS Membership Portal</a>
          </div>
        </div>

        <div className="quote-section">
          <p className="quote-text">"Building India's future workforce - one school at a time!"</p>
          <p className="bonus-text">PS: First 100 member schools get free access to our AI Teacher Assistant toolkit!</p>
        </div>

        <Section title="How This Ecosystem Works">
          <ul className="feature-list">
            <li>Schools <span className="highlight">monetize</span> their tech infrastructure</li>
            <li>Students get <span className="highlight">sponsored upskilling</span></li>
            <li>BNS expands its <span className="highlight">pan-India presence</span> through institutional partnerships</li>
          </ul>
        </Section>
      </div>
    </div>
  );
};

export default Scholarship; 