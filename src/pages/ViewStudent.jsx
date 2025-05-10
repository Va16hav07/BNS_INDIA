import React, { useState } from 'react';
import { FaSearch, FaFilter, FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import './Auth.css';

const ViewStudent = () => {
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
      <div className="auth-box" style={{ maxWidth: '1200px' }}>
        <div className="auth-header">
          <h2>View Students</h2>
          <p>Search and filter student records</p>
        </div>

        <div className="search-filter-container" style={{ marginBottom: '2rem' }}>
          <div className="search-box" style={{ 
            display: 'flex', 
            gap: '1rem', 
            marginBottom: '1rem' 
          }}>
            <div className="form-group" style={{ flex: 1 }}>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Search by name or roll number"
                  value={searchTerm}
                  onChange={handleSearch}
                  style={{ paddingLeft: '2.5rem' }}
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

          <div className="filters" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '1rem' 
          }}>
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
          borderRadius: '0.5rem',
          boxShadow: 'var(--shadow-md)',
          overflow: 'hidden'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ 
                backgroundColor: '#f3f4f6',
                borderBottom: '2px solid var(--border-color)'
              }}>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Roll No.</th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Name</th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Class</th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Section</th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Gender</th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Contact</th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map(student => (
                <tr key={student.id} style={{ 
                  borderBottom: '1px solid var(--border-color)',
                  transition: 'var(--transition-base)'
                }}>
                  <td style={{ padding: '1rem' }}>{student.rollNumber}</td>
                  <td style={{ padding: '1rem' }}>{`${student.firstName} ${student.lastName}`}</td>
                  <td style={{ padding: '1rem' }}>{student.class}</td>
                  <td style={{ padding: '1rem' }}>{student.section}</td>
                  <td style={{ padding: '1rem' }}>{student.gender}</td>
                  <td style={{ padding: '1rem' }}>
                    <div>{student.email}</div>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{student.phone}</div>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className="auth-button" style={{ 
                        padding: '0.5rem',
                        backgroundColor: '#3b82f6'
                      }}>
                        <FaEye />
                      </button>
                      <button className="auth-button" style={{ 
                        padding: '0.5rem',
                        backgroundColor: '#10b981'
                      }}>
                        <FaEdit />
                      </button>
                      <button className="auth-button" style={{ 
                        padding: '0.5rem',
                        backgroundColor: '#ef4444'
                      }}>
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
          <div style={{ 
            textAlign: 'center', 
            padding: '2rem',
            color: '#6b7280'
          }}>
            No students found matching your search criteria
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewStudent; 