import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/artists')
      .then((response) => setArtists(response.data))
      .catch((error) => console.error('Error fetching artists:', error));
  }, []);

  return (
    <div className="container">
      <h1>🎵 Music App</h1>
      <div className="section">
        <h2>Artists</h2>
        {artists.length === 0 ? (
          <p>No artists found.</p>
        ) : (
          artists.map((artist, index) => (
            <div key={index} className="card">
              <h3>{artist.name}</h3>
              <p>Genre: {artist.genre}</p>
              <p>Listeners: {artist.listeners}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;