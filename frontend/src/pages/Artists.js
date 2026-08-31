import React, { useState, useEffect } from 'react';
import { getArtists, addArtist, deleteArtist } from '../services/api';

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    fetchArtists();
  }, []);

  const fetchArtists = async () => {
    const res = await getArtists();
    setArtists(res.data);
  };

  const handleAdd = async () => {
    if (name.trim()) {
      await addArtist({ name });
      setName('');
      fetchArtists();
    }
  };

  const handleDelete = async (id) => {
    await deleteArtist(id);
    fetchArtists();
  };

  return (
    <div>
      <h2>Artists</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Artist Name" />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}
            <button onClick={() => handleDelete(artist.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Artists;