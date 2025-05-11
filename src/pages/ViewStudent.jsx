import React, { useState } from 'react';
import { FaSearch, FaFilter, FaEdit, FaTrash, FaEye, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const ViewStudent = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    class: '',
    section: '',
    gender: ''
  });

  // Mock data - replace with actual API call
  const students = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      class: '10',
      section: 'A',
      rollNumber: '101',
      gender: 'Male',
      email: 'john.doe@example.com',
      phone: '1234567890'
    },
    // Add more mock data as needed
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = 
      student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNumber.includes(searchTerm);
    
    const matchesFilters = 
      (!filters.class || student.class === filters.class) &&
      (!filters.section || student.section === filters.section) &&
      (!filters.gender || student.gender === filters.gender);

    return matchesSearch && matchesFilters;
  });

  return (
    <div className="auth-container">
      <button className="back-button" onClick={() => navigate(-1)} title="Go back">
        <FaArrowLeft />
      </button>
      
      <div className="auth-box" style={{ maxWidth: '1200px' }}>
        <div className="auth-header">
          <h2>View Students</h2>
          <p>Search and filter student records</p>
        </div>

        <div className="form-section" style={{ marginBottom: '2rem' }}>
          <div className="search-box" style={{ 
            display: 'flex', 
            gap: '1rem', 
            marginBottom: '1.5rem' 
          }}>
            <div className="form-group" style={{ flex: 1, margin: 0 }}>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Search by name or roll number"
                  value={searchTerm}
                  onChange={handleSearch}
                  style={{ paddingLeft: '2.5rem', margin: 0 }}
                />
                <FaSearch style={{ 
                  position: 'absolute', 
                  left: '1rem', 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  color: '#6b7280'
                }} />
              </div>
            </div>
          </div>

          <div className="form-grid" style={{ marginBottom: 0 }}>
            <div className="form-group" style={{ margin: 0 }}>
              <label>Class</label>
              <select name="class" value={filters.class} onChange={handleFilterChange}>
                <option value="">All Classes</option>
                {[...Array(12)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>Class {i + 1}</option>
                ))}
              </select>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label>Section</label>
              <select name="section" value={filters.section} onChange={handleFilterChange}>
                <option value="">All Sections</option>
                <option value="A">Section A</option>
                <option value="B">Section B</option>
                <option value="C">Section C</option>
                <option value="D">Section D</option>
              </select>
            </div>

            <div className="form-group form-grid-full" style={{ margin: '1rem 0 0 0' }}>
              <label>Gender</label>
              <select name="gender" value={filters.gender} onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>

        <div className="students-table" style={{ 
          backgroundColor: 'white',
          borderRadius: '0.75rem',
          boxShadow: 'var(--shadow-md)',
          overflow: 'hidden',
          border: '1px solid var(--border-color)',
          marginBottom: '2rem'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ 
                backgroundColor: '#f3f4f6',
                borderBottom: '2px solid var(--border-color)'
              }}>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: 'var(--text-light)' }}>Roll No.</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: 'var(--text-light)' }}>Name</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: 'var(--text-light)' }}>Class</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: 'var(--text-light)' }}>Section</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: 'var(--text-light)' }}>Gender</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: 'var(--text-light)' }}>Contact</th>
                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: 'var(--text-light)' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map(student => (
                <tr key={student.id} style={{ 
                  borderBottom: '1px solid var(--border-color)',
                  transition: 'var(--transition-base)',
                  backgroundColor: 'white',
                  ':hover': { backgroundColor: '#f8fafc' }
                }}
                className="student-row">
                  <td style={{ padding: '1rem' }}>{student.rollNumber}</td>
                  <td style={{ padding: '1rem', fontWeight: '500' }}>{`${student.firstName} ${student.lastName}`}</td>
                  <td style={{ padding: '1rem' }}>{student.class}</td>
                  <td style={{ padding: '1rem' }}>{student.section}</td>
                  <td style={{ padding: '1rem' }}>{student.gender}</td>
                  <td style={{ padding: '1rem' }}>
                    <div style={{ fontWeight: '500' }}>{student.email}</div>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.25rem' }}>{student.phone}</div>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className="action-btn view-btn" title="View Details">
                        <FaEye />
                      </button>
                      <button className="action-btn edit-btn" title="Edit Student">
                        <FaEdit />
                      </button>
                      <button className="action-btn delete-btn" title="Delete Student">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredStudents.length === 0 && (
          <div className="no-results">
            No students found matching your search criteria
          </div>
        )}
      </div>

      <style jsx>{`
        .student-row:hover {
          background-color: #f8fafc !important;
        }

        .action-btn {
          padding: 0.5rem;
          border-radius: 8px;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          color: white;
        }

        .view-btn {
          background-color: #3b82f6;
        }

        .view-btn:hover {
          background-color: #2563eb;
          transform: translateY(-2px);
        }

        .edit-btn {
          background-color: #10b981;
        }

        .edit-btn:hover {
          background-color: #059669;
          transform: translateY(-2px);
        }

        .delete-btn {
          background-color: #ef4444;
        }

        .delete-btn:hover {
          background-color: #dc2626;
          transform: translateY(-2px);
        }

        .no-results {
          text-align: center;
          padding: 2rem;
          color: #6b7280;
          background: #f3f4f6;
          border-radius: 0.75rem;
          border: 1px dashed #e5e7eb;
        }

        @media (max-width: 768px) {
          .form-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .form-grid-full {
            grid-column: 1;
          }

          table {
            display: block;
            overflow-x: auto;
            white-space: nowrap;
          }

          th, td {
            padding: 0.75rem !important;
          }

          .action-btn {
            padding: 0.4rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ViewStudent;