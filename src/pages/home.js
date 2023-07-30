import React, { useState } from 'react';
import { useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import './home.css';


  const Home = () => {
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [budget, setBudget] = useState('');
    const [residences, setResidences] = useState([]);

  // Function to handle the search button click and fetch the residences based on location and budget
  const handleSearch = () => {

    const fetchedResidences = [
      { name: 'Residence 1', location: 'Location A', price: '$1000', availability: 'Available' },
      { name: 'Residence 2', location: 'Location B', price: '$1200', availability: 'Available' },
      { name: 'Residence 3', location: 'Location C', price: '$800', availability: 'Available' },
      // Add more residences as needed
    ];

    setResidences(fetchedResidences);
  };

    useEffect(() => {
      // Get the currently logged-in user
      const currentUser = auth.currentUser;

      if (currentUser) {
        // Get the user's email from the currentUser object
        setEmail(currentUser.email);
      }
    }, []);

    const navigate = useNavigate(); // Initialize the navigate function

    // Function to handle the logout
    const handleLogout = async () => {
      try {
        await auth.signOut();
        // Redirect the user to the login page after successful logout
        navigate('/login'); // Use navigate function to redirect
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
            {email}
          </div>

          <div className="logout-button" onClick={handleLogout}>
              Logout
            </div>
        </div>

        <div className="search-container">

            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}/>

            <input
              type="text"
              placeholder="Budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
            
            <button onClick={handleSearch}>Search</button>
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
