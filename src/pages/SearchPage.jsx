import React, { useState, useEffect } from 'react';
import SearchResults from './SearchResults';
import { fetchUserData, fetchUserDataByName } from '../utils/api';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  // Fetch all users initially
  useEffect(() => {
    setLoading(true);
    fetchUserData()
      .then((data) => {
        setUsers(data.data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      });
  }, []);

  // Fetch users based on search term
  useEffect(() => {
    setLoading(true);
    if (searchTerm !== '') {
      fetchUserDataByName(searchTerm)
        .then((data) => {
          setUsers(data.data || []);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
          setLoading(false);
        });
    } else {
      fetchUserData()
        .then((data) => {
          setUsers(data.data || []);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
          setLoading(false);
        });
    }
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div
      className="d-flex flex-column"
      style={{
        height: '100vh',
        overflow: 'hidden',
        background: 'linear-gradient(to bottom, white 1%, lightblue)',

      }}
    >
      {/* Header Section */}
      {/* <div
        className="text-center d-flex flex-row justify-content-center align-items-center"
        style={{ padding: '5px 0', flexShrink: 0 }}
      >
        <img src={logo} alt="Girman Technologies" style={{ width: '200px', height: '200px' }} />
        <div style={{ fontSize: '100px', fontWeight: 'bold', marginLeft: '10px' }}>Girman</div>
      </div> */}

      {/* Main Content with Scrollable Area */}
      <div
        className="flex-grow-1 d-flex flex-column align-items-center"
        style={{ overflowY: 'auto', padding: '10px 20px' ,scrollbarWidth: 'none', /* For Firefox */
          msOverflowStyle: 'none', /* For Internet Explorer */}}
      >
        {/* Search Input */}
        <input
          type="text"
          className="form-control"
          placeholder="🔎︎  Search..."
          style={{ width: '50%', marginBottom: '20px' }}
          value={searchTerm}
          onChange={handleSearchChange}
        />

        {/* Loading Spinner or Results */}
        {loading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <SearchResults searchTerm={searchTerm} users={users} setUsers={setUsers} />
        )}
      </div>
    </div>
  );
};

export default SearchPage;
