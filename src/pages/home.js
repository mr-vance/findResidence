// Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import './home.css';

const Home = () => {
  const [username, setUsername] = useState('John Doe'); // Replace with actual username after login
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [residences, setResidences] = useState([]); // An array to store the fetched residences

  // Function to handle the search button click and fetch the residences based on location and budget
  const handleSearch = () => {
    // Replace the following lines with actual API calls or database queries to fetch residences
    const fetchedResidences = [
      { name: 'Residence 1', location: 'Location A', price: '$1000', availability: 'Available' },
      { name: 'Residence 2', location: 'Location B', price: '$1200', availability: 'Available' },
      { name: 'Residence 3', location: 'Location C', price: '$800', availability: 'Available' },
      // Add more residences as needed
    ];

    setResidences(fetchedResidences);
  };

  // Function to handle the logout
  const handleLogout = async () => {
    try {
      await auth.signOut();
      // Perform any additional logout logic, such as redirecting to the login page
    } catch (error) {
      console.log('Error during logout:', error);
    }
  };

  return (
    <div className="home-page">
      {/* Navbar */}
      <nav>
        <div className="nav-container">
          <div className="username">
            {username}
            <div className="logout-button" onClick={handleLogout}>
              Logout
            </div>
          </div>
          <div className="search-container">
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <input
              type="text"
              placeholder="Budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </nav>

      {/* Residences */}
      <div className="residences-section">
        {residences.map((residence, index) => (
          <div key={index} className="residence-card">
            <h3>{residence.name}</h3>
            <p>Location: {residence.location}</p>
            <p>Price: {residence.price}</p>
            <p>Availability: {residence.availability}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
