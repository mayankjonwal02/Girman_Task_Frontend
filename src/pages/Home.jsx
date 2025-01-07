import React, { useState, useEffect } from 'react';
import SearchResults from './SearchResults';
import { fetchUserData } from '../utils/api';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  // Handle search term change
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchUserData().then((data) => {
      setUsers(data.data || []);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching user data:', error);
      setLoading(false);
    })
  }, []);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container text-center" style={{ marginTop: "100px" }}>
      <h1>Welcome to Girman Technologies</h1>
      <p>Search and manage user data efficiently.</p>
      <input
        type="text"
        className="form-control"
        placeholder="Enter search terms..."
        style={{ width: "50%", margin: "20px auto" }}
        value={searchTerm}
        onChange={handleSearchChange} // Update search term
      />
      {loading ? (
      <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
      ) : (
        <SearchResults searchTerm={searchTerm} users={users} setUsers={setUsers} />
      )}

    </div>
  );
};

export default Home;
