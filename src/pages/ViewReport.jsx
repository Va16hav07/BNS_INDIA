import React, { useState } from 'react';
import { FaFileAlt, FaDownload, FaFilter, FaChartBar, FaChartLine, FaChartPie } from 'react-icons/fa';
import './Auth.css';

const ViewReport = () => {
  const [filters, setFilters] = useState({
    reportType: '',
    class: '',
    section: '',
    dateRange: 'month'
  });

  const [selectedReport, setSelectedReport] = useState(null);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Mock data - replace with actual API call
  const reports = [
    {
      id: 1,
      title: 'Student Attendance Report',
      type: 'attendance',
      date: '2024-03-15',
      format: 'PDF',
      size: '2.5 MB'
    },
    {
      id: 2,
      title: 'Academic Performance Report',
      type: 'academic',
      date: '2024-03-14',
      format: 'PDF',
      size: '3.1 MB'
    },
    {
      id: 3,
      title: 'Fee Collection Report',
      type: 'finance',
      date: '2024-03-13',
      format: 'PDF',
      size: '1.8 MB'
    }
  ];

  const handleViewReport = (report) => {
    setSelectedReport(report);
  };

  const handleDownload = (report) => {
    console.log('Downloading report:', report);
    // Implement download functionality
  };

  return (
    <div className="auth-container">
      <div className="auth-box" style={{ maxWidth: '1200px' }}>
        <div className="auth-header">
          <FaFileAlt className="auth-icon" style={{ fontSize: '2rem', color: '#3b82f6' }} />
          <h2>View Reports</h2>
          <p>Access and download various school reports</p>
        </div>

        <div className="filters-container" style={{ marginBottom: '2rem' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            <div className="form-group">
              <label>Report Type</label>
              <select name="reportType" value={filters.reportType} onChange={handleFilterChange}>
                <option value="">All Reports</option>
                <option value="attendance">Attendance</option>
                <option value="academic">Academic</option>
                <option value="finance">Finance</option>
                <option value="discipline">Discipline</option>
              </select>
            </div>

            <div className="form-group">
              <label>Class</label>
              <select name="class" value={filters.class} onChange={handleFilterChange}>
                <option value="">All Classes</option>
                {[...Array(12)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>Class {i + 1}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Section</label>
              <select name="section" value={filters.section} onChange={handleFilterChange}>
                <option value="">All Sections</option>
                <option value="A">Section A</option>
                <option value="B">Section B</option>
                <option value="C">Section C</option>
                <option value="D">Section D</option>
              </select>
            </div>

            <div className="form-group">
              <label>Date Range</label>
              <select name="dateRange" value={filters.dateRange} onChange={handleFilterChange}>
                <option value="week">Last Week</option>
                <option value="month">Last Month</option>
                <option value="quarter">Last Quarter</option>
                <option value="year">Last Year</option>
              </select>
            </div>
          </div>
        </div>

        <div className="reports-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {reports.map(report => (
            <div key={report.id} className="report-card" style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              boxShadow: 'var(--shadow-md)',
              transition: 'var(--transition-base)',
              cursor: 'pointer',
              border: '1px solid var(--border-color)'
            }}
            onClick={() => handleViewReport(report)}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '0.5rem',
                  backgroundColor: '#e0e7ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#3b82f6'
                }}>
                  <FaFileAlt />
                </div>
                <div>
                  <h3 style={{ 
                    margin: 0, 
                    fontSize: '1.125rem',
                    color: 'var(--text-light)'
                  }}>
                    {report.title}
                  </h3>
                  <p style={{ 
                    margin: '0.25rem 0 0',
                    fontSize: '0.875rem',
                    color: '#6b7280'
                  }}>
                    {report.date}
                  </p>
                </div>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-color)'
              }}>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  {report.format} • {report.size}
                </div>
                <button 
                  className="auth-button"
                  style={{ 
                    padding: '0.5rem',
                    backgroundColor: '#3b82f6'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload(report);
                  }}
                >
                  <FaDownload />
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedReport && (
          <div className="report-preview" style={{
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--border-color)'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{ margin: 0 }}>{selectedReport.title}</h3>
              <button 
                className="auth-button"
                style={{ 
                  padding: '0.5rem',
                  backgroundColor: '#3b82f6'
                }}
                onClick={() => handleDownload(selectedReport)}
              >
                <FaDownload /> Download
              </button>
            </div>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              <div className="stat-card" style={{
                backgroundColor: '#f3f4f6',
                padding: '1rem',
                borderRadius: '0.5rem',
                textAlign: 'center'
              }}>
                <FaChartBar style={{ 
                  fontSize: '1.5rem',
                  color: '#3b82f6',
                  marginBottom: '0.5rem'
                }} />
                <div style={{ fontSize: '1.25rem', fontWeight: '600' }}>85%</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Attendance Rate</div>
              </div>
              <div className="stat-card" style={{
                backgroundColor: '#f3f4f6',
                padding: '1rem',
                borderRadius: '0.5rem',
                textAlign: 'center'
              }}>
                <FaChartLine style={{ 
                  fontSize: '1.5rem',
                  color: '#10b981',
                  marginBottom: '0.5rem'
                }} />
                <div style={{ fontSize: '1.25rem', fontWeight: '600' }}>92%</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Pass Rate</div>
              </div>
              <div className="stat-card" style={{
                backgroundColor: '#f3f4f6',
                padding: '1rem',
                borderRadius: '0.5rem',
                textAlign: 'center'
              }}>
                <FaChartPie style={{ 
                  fontSize: '1.5rem',
                  color: '#f59e0b',
                  marginBottom: '0.5rem'
                }} />
                <div style={{ fontSize: '1.25rem', fontWeight: '600' }}>78%</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Fee Collection</div>
              </div>
            </div>
            <div style={{ 
              backgroundColor: '#f3f4f6',
              padding: '1rem',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              color: '#6b7280'
            }}>
              Report generated on {selectedReport.date} • {selectedReport.format} format • {selectedReport.size}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewReport; 